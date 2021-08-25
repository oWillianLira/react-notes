import { Component } from 'react';
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';
import styled from 'styled-components';
import CategList from './components/CategList';

import Notes from './data/Notes';
import Categories from './data/Categories';

export default class App extends Component {
  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new Notes();
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
          <NotesForm categList={this.categories} createNote={this.notes.addNote.bind(this.notes)} />
        </div>
        <div className="listing">
          <CategList categories={this.categories} createCateg={this.categories.createCateg.bind(this.categories)} />
          <NotesList notes={this.notes} delete={this.notes.delNotes.bind(this.notes)} />
        </div>
      </App>
    );
  }
}
