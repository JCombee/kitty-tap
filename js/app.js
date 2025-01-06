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
  }
}

class Context {
  state = { tapped: 0 };
  listeners = [];

  init() {
    return new Promise((resolve) => {
      this.loadState();
      this.saveStateInterval();
      resolve();
    });
  }

  loadState() {
    const stateRaw = window.localStorage.getItem("state");
    if (stateRaw) {
      this.state = JSON.parse(stateRaw);
    }
    this.handleListeners();
  }

  saveStateInterval() {
    setInterval(() => {
      window.localStorage.setItem("state", JSON.stringify(this.state));
    }, 1000);
  }

  dispatch(action, payload) {
    const oldState = this.state;
    switch (action) {
      case "tapped":
        this.state = { ...oldState, tapped: oldState.tapped + payload };
        break;
    }
    this.handleListeners();
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  handleListeners() {
    const state = this.state;
    this.listeners.forEach((listener) => listener(state));
  }
}

window.context = new Context();

customElements.define("kitty-tap", App);

window.context.init().then(() => {
  document.getElementById("kitty-tap").innerHTML = "<kitty-tap></kitty-tap>";
});
