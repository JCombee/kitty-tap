const template = document.createElement("template");
template.innerHTML = `
  <style>
    .wrapper {
      flex: auto;
      flex-direction: column;
      height: 50%;
      background-color: var(--color-primary-600);
    }
    .header {
      font-size: 2em;
      padding-top: 16px;
      padding-bottom: 16px;
      padding-left: 28px;
      padding-right: 28px;
      text-align: center;
      background-color: var(--color-primary-500);
    }
  </style>
  <div class="wrapper">
    <div class="header">Achievements</div>
  <div>
`;

class Achievements extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("kt-achievements", Achievements);
