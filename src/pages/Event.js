import event from "../event";

export default class Event {
    constructor(id){
        this.event = null;
        this.id = id;
    }

    template(){
        this.getEvent();
        let event = this.event;
        console.log(event);
        let template = `<h2>${event.title}</h2>`;
        template += `<img src="${event.img}"/>`;
        template += `<p> Местоположение: ${event.place}</p>`;
        template += `<p> Цена: ${event.price}</p>`;
        template += `<p> ${event.description}</p>`;
        template = `<div class="container-event">${template}</div>`;
        template = this.backButton() + template;
        return template;
    }

    backButton(){
        let template = `<button class="button-back" onclick="history.back()">Назад</button>`;
        return template;
    }


    getEvent(){
       //обращение к серверу и получение данных (здесь хранятся в файле event.js)
       this.event = event.filter(event => event.id == this.id);
       this.event = this.event[0];
    }

}