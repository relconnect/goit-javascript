import v4 from "uuid/v4";
import * as storage from '../services/storage';

export default class Model {
  constructor(items = storage.get()) {
    this.items = items || [];
  }
  addItem(text) {
    const item = {
      id: v4(),
      text
    };
    this.items.push(item);
    storage.set(this.items);
    return item;
  }
  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
    storage.remove(id);
    return true;
  }
  updateItem(id, props) {
    const item = this.items.find(item => item.id === id);
    const keys = Object.keys(props);
    keys.forEach(key => (item[key] = props[key]));
  }

  checkItemInItems(title) {
    if (!this.items) return;
    return this.items.some(item => item.text === title);
  }
}
