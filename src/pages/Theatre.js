import BasePage from "./BasePage";

export default class Theatre extends BasePage{
    template(){
        let template = `<h1>Театральные постановки:</h1>`;
        this.getEvents();
        template += this.processingEvent();
        return template;
    }


    getEvents(){
        super.getEvents();
        this.events = this.events.filter((event) => event.type ==='theatre');
    }
} 