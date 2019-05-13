import event from "../event";
export default class BasePage{
    constructor(){
        this.events = null;
    }

    getEvents(){
        //обращение к серверу и получение данных 
        this.events = event;
    }


    processingEvent(){
        let template = '';
        this.events.forEach(event => {
            let link = `<a href="/event/${event.id}">${event.title}</a>`;
            template += `<div class="event"><img src="${event.img}"><h3>${link}</h3><p>Дата: ${event.date}</p></div>`
        })
        template = `<div class="container-events">${template}</div>`;
        return template;
    }
}