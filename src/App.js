import { Component } from 'react';
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';
import styled from 'styled-components';

export default class App extends Component {
  render() {
    const App = styled.main`
      display: grid;
      grid-template-columns: 2fr 3fr;
      min-height: 100vh;
      .form {
        border-right: solid 2px #ddd;
      }
    `;

    return (
      <App>
        <div className="form">
          <NotesForm />
        </div>
        <div className="listing">
          <NotesList></NotesList>
        </div>
      </App>
    );
  }
}
