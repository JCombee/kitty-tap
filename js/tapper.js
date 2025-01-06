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
      width: 100%;
      text-align: center;
      padding: 16px;
      border-radius: 16px;
      background-color: var(--color-primary-500);
      font-size: 2em;
      margin-bottom: 64px;
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

    this.updateTapped(window.context.state.tapped);
    this.eventListeners();
  }

  connectedCallback() {
    this.setAttribute("tapped", window.context.state.tapped);
    this.button.addEventListener("click", () => {
      this.setAttribute("tapped", parseInt(this.getAttribute("tapped")) + 1);
      window.context.dispatch("tapped", 1);
    });
  }

  static get observedAttributes() {
    return ["tapped"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "tapped") {
      this.updateTapped(newValue);
    }
  }

  updateTapped(value) {
    this.dataTapped.textContent = value;
  }

  eventListeners() {
    window.context.addListener(({ tapped }) => {
      this.setAttribute("tapped", tapped);
    });
  }
}

customElements.define("tapper-button", Tapper);
