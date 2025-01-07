const template = document.createElement("template");
template.innerHTML = `
  <style>
    .wrapper {
      display: flex;
      height: 100vh;
    }
    .left {
      width: 30%;
      border-right: solid 3px var(--color-secondary-600);
    }
    .center {
      flex-grow: 1;
    }
    .right {
      width: 30%;
      border-left: solid 3px var(--color-secondary-600);
    }
  </style>
  <div class="wrapper">
    <kt-garden class="left"></kt-garden>
    <kt-tapper tapped="0" class="center"></kt-tapper>
    <div class="right">
      <kt-store></kt-store>
      <kt-achievements></kt-achievements>
    </div>
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
  state = {
    version: 1,
    tapped: 0,
    interesting: 0,
    recording: { tapped: 0 },
  };
  listeners = [];

  init() {
    return new Promise((resolve) => {
      this.loadState();
      this.saveStateInterval();
      this.interestingDecayInterval();
      resolve();
    });
  }

  loadState() {
    const stateRaw = window.localStorage.getItem("state");
    if (stateRaw) {
      this.state = this.migrateState(JSON.parse(stateRaw));
    }
    this.handleListeners();
  }

  migrateState(state) {
    if (!state.version) {
      state = {
        version: 1,
        tapped: state.tapped,
        interesting: 0,
        recording: { tapped: state.tapped },
      };
    }

    return state;
  }

  saveStateInterval() {
    setInterval(() => {
      window.localStorage.setItem("state", JSON.stringify(this.state));
    }, 1000);
  }

  interestingDecayInterval() {
    setInterval(() => {
      this.dispatch("decay-interesting");
    }, 1000);
  }

  dispatch(action, payload) {
    const oldState = this.state;
    switch (action) {
      case "tapped":
        this.state = {
          ...oldState,
          tapped: oldState.tapped + payload,
          interesting:
            oldState.interesting + payload > 100
              ? 100
              : oldState.interesting + payload,
          recording: { tapped: oldState.recording.tapped + payload },
        };
        break;
      case "decay-interesting":
        this.state = {
          ...oldState,
          interesting:
            oldState.interesting - 5 < 0 ? 0 : oldState.interesting - 5,
        };
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

customElements.define("kt-app", App);

window.context.init().then(() => {
  document.getElementById("kitty-tap").innerHTML = "<kt-app></kt-app>";
});
