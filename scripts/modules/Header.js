export default class Header {
  constructor(data) {
    this.data = new Proxy({ title: '' }, {
      get() {
        
      }
      // TODO:
      console.log('Header component hanlder value:', value)
      // data = value;
    });
  }

  render() {
    const element = document.createElement('div');
    const title = document.createElement('p');

    element.classList.add('page-header');
    title.classList.add('page-header__title');

    element.appendChild(title);
    title.text = this.data.title;

    return element;
  }
}