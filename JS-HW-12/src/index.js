import Model from "./js/model";
import View from "./js/view";
import Controller from "./js/controller";
import EventEmitter from "./services/event-emitter";
import "./style.css";
import "./styles/form.scss";
import "./styles/card.scss";

const view = new View();
const model = new Model();
new Controller(model, view);
view.addNotes();