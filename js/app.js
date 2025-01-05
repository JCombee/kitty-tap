const template = document.createElement("template");
template.innerHTML = `
  <tapper-button tapped="0"></tapper-button>
`;

class App extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
    document
      .getElementById("kitty-tap-loader")
      .classList.add("welcome-fade-out");
  }
}

customElements.define("kitty-tap", App);

document.getElementById("kitty-tap").innerHTML = "<kitty-tap></kitty-tap>";
