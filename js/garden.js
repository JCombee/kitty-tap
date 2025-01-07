const template = document.createElement("template");
template.innerHTML = `
  <style>
    .wrapper {
      flex: auto;
      flex-direction: column;
      height: 100vh;
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
    .sub-header {
      font-size: 1.5em;
      padding-top: 16px;
      padding-bottom: 16px;
      padding-left: 28px;
      padding-right: 28px;
      gap: 16px;
    }
    .cat {
      width: 128px;
      height: 128px;
      border-radius: 12px;
      overflow: hidden;
      border: solid 3px var(--color-primary-700);
    }
    #visitors {
      display: flex;
      flex-wrap: wrap;
      padding-top: 16px;
      padding-bottom: 16px;
      padding-left: 28px;
      padding-right: 28px;
    }
  </style>
  <div class="wrapper">
    <div class="header">Garden</div>
    <div class="sub-header">Visitors</div>
    <div id="visitors"></div>
  <div>
`;

class Garden extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
    this.visitors = shadow.getElementById("visitors");
  }

  connectedCallback() {
    setInterval(() => {
      const interesting = window.context.state.interesting;
      if (Math.floor(Math.random() * 100) < interesting + 1) {
        this.spawnCat();
      }
    }, 1000);
  }

  spawnCat() {
    const catId = Math.floor(Math.random() * 4);
    const cat = document.createElement("img");
    cat.src = files.images["cat-" + catId];
    cat.classList.add("cat");
    this.visitors.appendChild(cat);
  }
}

customElements.define("kt-garden", Garden);
