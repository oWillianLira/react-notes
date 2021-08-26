export default class Notes {
  constructor() {
    this.notes = [];
    this._linked = [];
  }

  linking(func) {
    this._linked.push(func);
  }

  unlinking(func) {
    this._linked = this._linked.filter((f) => f !== func);
  }

  notify() {
    this._linked.forEach((func) => func(this.notes));
  }

  addNote(title, text, categ) {
    const newNote = new Note(title, text, categ);
    this.notes.push(newNote);
    this.notify();
  }

  delNotes(index) {
    this.notes.splice(index, 1);
    this.notify();
  }
}

class Note {
  constructor(title, text, categ) {
    this.title = title;
    this.text = text;
    this.category = categ;
  }
}
