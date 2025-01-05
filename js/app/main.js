export default class Main {
  constructor(app) {
    this.app = app;
  }

  boot() {
    document
      .getElementById("loading-overlay")
      .classList.add("welcome-fade-out");
  }
}
