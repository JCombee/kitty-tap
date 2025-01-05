const template = document.createElement("template");
template.innerHTML = `
  <style>
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
    button:active {
      transform: scale(0.9);
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .tapped {
      font-size: 2em;
      margin-bottom: 1em;
    }
  </style>
  <div class="wrapper">
    <div class="tapped">Tapped: <span data-tapped></span></div>
    <div><button><img src="${files.images.button}"></button></div>
  </div>
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
