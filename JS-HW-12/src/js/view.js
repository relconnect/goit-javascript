import EventEmitter from "../services/event-emitter";
import * as storage from '../services/storage';

export default class View extends EventEmitter {
  constructor() {
    super();
    this.form = document.querySelector(".form");
    this.input = this.form.querySelector(".form__text");
    this.notesGrid = document.querySelector(".root");
    this.form.addEventListener("submit", this.handleAdd.bind(this));
  }

  handleAdd(evt) {
    evt.preventDefault();
    const { value } = this.input;

    if (value === "") return;
    this.emit("add", value);
  }

  createNote(note) {
    const item = document.createElement("div");
    item.dataset.id = note.id;
    item.classList.add("item");

    const text = document.createElement("p");
    text.textContent = note.text;
    text.classList.add("text");

    const button = document.createElement("button");
    button.textContent = "Dell";
    button.dataset.action = "remove";
    button.classList.add("button");

    item.append(text, button);
    this.appendEventListner(item);

    return item;
  }
  addNote(note) {
    const item = this.createNote(note);
    this.form.reset();
    this.notesGrid.appendChild(item);
  }
  
  addNotes() {
    if (storage.get() === null) return;
    storage.get().forEach(element => {
      this.addNote(element);
    });
  }


  appendEventListner(item) {
    const removeBtn = item.querySelector('[data-action="remove"]');
    removeBtn.addEventListener("click", this.handleRemove.bind(this));
  }
  handleRemove({ target }) {
    // const item = target.closest('.item');
    // this.notesGrid.removeChild(item);
    const parent = target.closest(".item");

    this.emit("remove", parent.dataset.id);
  }

  removeNote(id) {
    const item = this.notesGrid.querySelector(`[data-id="${id}"]`);
    this.notesGrid.removeChild(item);
  }
}
