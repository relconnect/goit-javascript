export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.on("add", this.addNote.bind(this));
    view.on("remove", this.removeNote.bind(this));
  }

  addNote(text) {
    // const item = this.model.addItem(text);
    // this.view.addNote(item);
    if (this.model.checkItemInItems(text)) {
      alert(`Note ${text} already exist!`);
      return;
    } else {
      const item = this.model.addItem(text);
      this.view.addNote(item);
    }
  }
  addNotes(note) {
    const item = this.model.addItem(note);
    this.view.addNotes(item);
  }

  removeNote(id) {
    this.model.removeItem(id);
    this.view.removeNote(id);
  }
}
