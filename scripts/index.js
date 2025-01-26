import Header from "./modules/Header.js";

class App {
  constructor(container, components) {
    this.container = container || '';
    this.components = components || [];
  }

  create() {
    const appElement = document.querySelector(this.container);

    for (const component of this.components) {
      console.log('header element:', component);
      appElement.appendChild(component);
    }
  }
}

const header = new Header({ title: 'This is header' }).render();

const app = new App('#app', [header]);
app.create();