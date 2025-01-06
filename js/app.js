const template = document.createElement("template");
template.innerHTML = `
  <style>
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
  </style>
  <div class="wrapper">
    <tapper-button tapped="0"></tapper-button>
  <div>
`;

class App extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
    document
      .getElementById("kitty-tap-loader")
      .classList.add("loader-fade-out");

    this.loadState();
    this.saveStateInterval();
    this.reduceEventListener();
  }

  connectedCallback() {
    setTimeout(() => this.dispatchState(), 1);
  }

  loadState() {
    const stateRaw = window.localStorage.getItem("state");
    if (!stateRaw) {
      this.state = { tapped: 0 };
      window.localStorage.setItem("state", JSON.stringify(this.state));
    } else {
      this.state = JSON.parse(stateRaw);
    }
  }

  saveStateInterval() {
    setInterval(() => {
      window.localStorage.setItem("state", JSON.stringify(this.state));
    }, 1000);
  }

  reduceEventListener() {
    window.addEventListener("kitty-tap-reduce", (event) => {
      const oldState = this.state;
      const { action, payload } = event.detail;
      switch (action) {
        case "tapped":
          this.state = { ...oldState, tapped: oldState.tapped + payload };
          break;
      }
      this.dispatchState();
    });
  }

  dispatchState() {
    window.dispatchEvent(
      new CustomEvent("kitty-tap-state", { detail: this.state })
    );
  }
}

customElements.define("kitty-tap", App);

document.getElementById("kitty-tap").innerHTML = "<kitty-tap></kitty-tap>";
