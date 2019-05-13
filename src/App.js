import Menu from "./pages/Menu";
import {pages} from "./route.js"


export default class App{
    render(){
        let template = '';
        template += this.header();
        template += this.content();
        template = `<div class="container">${template}</div>`;
        document.getElementById('root').innerHTML = template;
    }

    header(){
        let menu = new Menu();
        return menu.template();
    }

    content(){
        let path = document.location.pathname;
        path = path.split('/');
        let url = `/${path[1]}`, dynamic = path[2];
        let page = pages[url];
        page = (dynamic)? new page(dynamic):new page();
        return page.template();   
    }
}