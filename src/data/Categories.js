export default class Categories {
  constructor() {
    this.categories = [];
    this._linked = [];
  }

  linking(func) {
    this._linked.push(func);
  }

  notify() {
    this._linked.forEach((func) => func(this.categories));
  }

  createCateg(newCateg) {
    this.categories.push(newCateg);
    this.notify();
  }
}
