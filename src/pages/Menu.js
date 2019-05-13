export default class Menu {
 constructor(){
  this.menu = [{
      label: 'Мероприятия',
      url: '/',
    }, {
      label: 'Концерты',
      url: '/concert',
    }, {
      label: 'Театр',
      url: '/theatre',
    }, {
      label: 'О нас',
      url: '/about'
    }];
  }

  template(){
    let menuContainer = '';
    let menu = this.menu;
    menu.forEach((elem) => {
      menuContainer += `<a href="${elem.url}" class="menu-bar" >${elem.label}</a>`;
    });
    return `<div class = "menu">${menuContainer}</div>`;
  }
}