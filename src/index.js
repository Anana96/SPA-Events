import App from "./App";
import "./style/styles.scss";
let app = new App();
app.render();

//обработка перехода
document.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event);
    if (!event.target.href || !event.target.hostname) {
      return;
    }
    if (event.target.host === window.location.host) {
    console.log(event.target.pathname);
      history.pushState(null,'',event.target.pathname);
      app.render();
    } else {
      window.open(event.target.href);
    }
});


window.addEventListener('popstate', (event) => {
    event.preventDefault();
    app.render();
});
