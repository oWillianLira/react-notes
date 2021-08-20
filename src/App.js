import { Component } from 'react';
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';
import styled from 'styled-components';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  createNote(title, text) {
    const newNote = { title, text };
    const newNotesList = [...this.state.notes, newNote];
    const newState = {
      notes: newNotesList,
    };
    this.setState(newState);
  }

  deleteNote(index) {
    // if (window.confirm('Do you wanna delete this note?')) {
    let arrayNotes = this.state.notes;
    arrayNotes.splice(index, 1);
    this.setState({ notes: arrayNotes });
    // }
  }

  render() {
    const App = styled.main`
      display: grid;
      grid-template-columns: 400px 1fr;
      min-height: 100vh;
      .form {
        border-right: solid 2px #ddd;
      }
      @media screen and (max-width: 991px) {
        grid-template-columns: 1fr;
        grid-template-rows: 300px 1fr;
        .form {
          border-right: none;
          max-width: 450px;
          width: 100%;
          margin: 0 auto;
        }
        .listing {
          border-top: solid 2px #ddd;
        }
      }
    `;

    return (
      <App>
        <div className="form">
          <NotesForm createNote={this.createNote.bind(this)} />
        </div>
        <div className="listing">
          <NotesList notes={this.state.notes} delete={this.deleteNote.bind(this)} />
        </div>
      </App>
    );
  }
}
