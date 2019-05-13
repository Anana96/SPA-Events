import BasePage from "./BasePage";

export default class Main extends BasePage{

    template(){
        let template = `<h1>Новые мероприятия:</h1>`;
        this.getEvents();
        template += this.processingEvent();
        return template;
    }

}