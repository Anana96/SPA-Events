import BasePage from "./BasePage";

export default class Concert extends BasePage{
    template(){
        let template = `<h1>Концерты:</h1>`;
        this.getEvents();
        template += this.processingEvent();
        return template;
    }

    getEvents(){
        super.getEvents();
        this.events = this.events.filter((event) => event.type ==='concert');
    }
} 