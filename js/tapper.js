const template = document.createElement("template");
template.innerHTML = `
  Tapped: <span data-tapped></span>
  <button>Tap me</button>
`;

class Tapper extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));

    this.button = shadow.querySelector("button");
    this.dataTapped = shadow.querySelector("[data-tapped]");

    this.updateTapped(this.getAttribute("tapped"));
    console.log("tapper");
  }

  static get observedAttributes() {
    return ["tapped"];
  }

  connectedCallback() {
    console.log("Button sss", this.button);
    this.button.addEventListener("click", () => {
      console.log("Button clicked");
      this.setAttribute("tapped", parseInt(this.getAttribute("tapped")) + 1);
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "tapped") {
      this.updateTapped(newValue);
    }
  }

  updateTapped(value) {
    this.dataTapped.textContent = value;
  }
}

customElements.define("tapper-button", Tapper);
