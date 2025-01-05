import Application from "/js/application.js";
import Main from "/js/app/main.js";

const app = new Application(kitty);

const modules = [new Main(app)];

modules
  .filter((module) => module.register)
  .forEach((module) => module.register());

modules.filter((module) => module.boot).forEach((module) => module.boot());
