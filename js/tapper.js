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
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .tapped {
      width: 364px;
      text-align: right;
      padding-top: 16px;
      padding-bottom: 16px;
      padding-left: 28px;
      padding-right: 28px;
      border-radius: 16px;
      background-color: var(--color-primary-500);
      font-size: 2em;
      margin-bottom: 64px;
    }
    .flex {
      display: flex;
    }
    .grow {
      flex-grow: 1;
    }
    svg {
      width: 24px;
      height: 24px;
    }
  </style>
  <div class="wrapper flex">
    <div class="tapped flex" title="Taps">
      <div>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="133.000000pt" height="133.000000pt" viewBox="0 0 133.000000 133.000000"
        preserveAspectRatio="xMidYMid meet">
        <metadata>
        Created by potrace 1.16, written by Peter Selinger 2001-2019
        </metadata>
        <g transform="translate(0.000000,133.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M420 1175 c-7 -9 -10 -18 -7 -21 10 -10 47 7 47 22 0 19 -24 18 -40
        -1z"/>
        <path d="M510 1175 c0 -8 6 -15 14 -15 26 0 85 -78 92 -120 4 -22 11 -43 15
        -46 13 -7 22 22 13 38 -5 7 -9 18 -9 23 -1 12 -21 64 -33 85 -8 14 -67 48 -84
        50 -5 0 -8 -7 -8 -15z"/>
        <path d="M778 1175 c-7 -9 -23 -26 -35 -37 -13 -12 -23 -27 -23 -34 0 -6 -7
        -17 -15 -24 -8 -7 -15 -21 -15 -31 0 -11 7 -19 15 -19 8 0 15 7 15 16 0 32 44
        91 78 104 18 6 31 17 29 23 -6 19 -34 20 -49 2z"/>
        <path d="M870 1171 c0 -5 9 -12 19 -16 28 -8 81 -72 81 -95 0 -11 7 -20 15
        -20 8 0 15 9 15 20 0 11 -4 20 -9 20 -5 0 -12 12 -16 28 -10 40 -44 72 -77 72
        -15 0 -28 -4 -28 -9z"/>
        <path d="M363 1123 c-7 -2 -13 -13 -13 -24 0 -11 -5 -28 -12 -38 -13 -21 -4
        -56 12 -46 5 3 10 16 10 28 0 12 7 31 15 41 25 33 19 52 -12 39z"/>
        <path d="M980 995 c0 -24 5 -35 15 -35 10 0 15 11 15 35 0 24 -5 35 -15 35
        -10 0 -15 -11 -15 -35z"/>
        <path d="M680 985 c0 -16 6 -25 15 -25 9 0 15 9 15 25 0 16 -6 25 -15 25 -9 0
        -15 -9 -15 -25z"/>
        <path d="M336 983 c-13 -13 -5 -45 24 -102 29 -55 48 -72 97 -86 35 -10 36 13
        1 31 -52 26 -87 69 -94 114 -7 41 -16 55 -28 43z"/>
        <path d="M616 929 c-21 -64 -39 -87 -85 -106 -21 -9 -30 -18 -24 -24 14 -14
        86 14 98 38 6 12 16 27 22 34 16 21 26 76 15 95 -7 13 -13 5 -26 -37z"/>
        <path d="M970 932 c0 -27 -58 -91 -97 -107 -32 -14 -39 -13 -78 4 -42 19 -75
        60 -75 96 0 8 -7 15 -16 15 -26 0 -9 -60 25 -92 16 -15 31 -33 33 -39 6 -17
        108 -21 138 -6 34 17 61 45 82 86 22 43 23 61 3 61 -8 0 -15 -8 -15 -18z"/>
        <path d="M114 866 c-36 -35 -47 -52 -48 -78 -1 -45 15 -47 30 -2 19 54 61 94
        101 94 55 0 96 -26 118 -76 11 -24 25 -44 32 -44 28 0 3 76 -29 85 -10 4 -23
        15 -28 26 -6 10 -17 19 -25 19 -8 0 -15 5 -15 10 0 6 -20 10 -44 10 -39 0 -51
        -6 -92 -44z"/>
        <path d="M1064 897 c-66 -39 -87 -79 -90 -176 -1 -53 2 -78 12 -88 8 -8 14
        -23 14 -34 0 -11 8 -23 18 -26 9 -4 20 -11 24 -16 3 -6 31 -12 61 -15 55 -4
        55 -4 112 52 32 32 55 64 53 73 -6 31 -23 22 -42 -21 -36 -81 -137 -100 -199
        -38 -25 26 -29 36 -29 94 0 74 16 112 62 152 79 66 190 -4 190 -118 0 -25 4
        -36 15 -36 10 0 15 11 15 35 0 19 -3 35 -7 35 -5 0 -9 12 -10 26 -1 34 -23 74
        -39 74 -7 0 -17 7 -22 16 -11 20 -109 28 -138 11z"/>
        <path d="M583 743 c-24 -8 -43 -19 -43 -24 0 -5 -5 -9 -10 -9 -18 0 -100 -91
        -115 -126 -8 -19 -19 -34 -24 -34 -11 0 -63 -71 -56 -78 10 -10 68 44 100 93
        92 138 191 189 296 153 54 -18 121 -75 152 -129 16 -27 37 -54 46 -59 32 -17
        13 33 -30 80 -21 23 -39 49 -39 57 0 7 -11 18 -24 23 -13 5 -25 12 -27 17 -2
        4 -20 16 -39 27 -46 24 -134 29 -187 9z"/>
        <path d="M340 710 c0 -20 5 -30 15 -30 10 0 15 10 15 30 0 20 -5 30 -15 30
        -10 0 -15 -10 -15 -30z"/>
        <path d="M66 713 c-4 -9 1 -39 11 -66 21 -59 72 -97 140 -105 37 -4 49 0 87
        29 25 19 47 45 49 59 9 41 -10 45 -28 6 -21 -43 -59 -66 -111 -66 -47 0 -107
        57 -123 118 -13 47 -16 50 -25 25z"/>
        <path d="M970 497 c0 -8 13 -26 30 -40 16 -15 41 -45 56 -67 23 -35 26 -47 22
        -103 -3 -50 -10 -72 -33 -105 -17 -23 -33 -42 -36 -42 -4 0 -23 -7 -44 -16
        -28 -11 -35 -18 -26 -27 8 -8 25 -4 65 16 41 21 59 38 76 70 25 48 39 160 21
        171 -6 4 -11 17 -11 30 0 13 -20 44 -48 74 -48 52 -72 64 -72 39z"/>
        <path d="M272 428 c-7 -7 -12 -17 -12 -24 0 -6 -7 -17 -15 -24 -19 -16 -20
        -50 -1 -50 8 0 17 13 21 30 4 16 11 32 16 35 5 4 14 15 19 26 12 22 -8 27 -28
        7z"/>
        <path d="M237 264 c-13 -13 8 -70 37 -102 51 -56 136 -91 136 -57 0 8 -7 15
        -17 15 -9 0 -35 11 -58 25 -32 18 -48 37 -64 75 -23 52 -24 54 -34 44z"/>
        <path d="M543 141 c-82 -30 -93 -38 -69 -47 17 -6 130 29 153 48 12 10 9 29
        -5 27 -4 0 -39 -13 -79 -28z"/>
        <path d="M692 158 c3 -7 20 -17 40 -23 19 -5 41 -15 49 -22 18 -14 78 -21 79
        -8 1 5 -18 16 -42 24 -24 8 -57 20 -75 28 -39 16 -56 17 -51 1z"/>
        </g>
        </svg>
      </div>
      <div class="grow">
        <span data-tapped></span></div>
      </div>
    <div><button><img src="${files.images.button}" draggable="false"></button></div>
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
    this.dataTapped.textContent = Intl.NumberFormat().format(value);
  }

  eventListeners() {
    window.context.addListener(({ tapped }) => {
      this.setAttribute("tapped", tapped);
    });
  }
}

customElements.define("kt-tapper", Tapper);
