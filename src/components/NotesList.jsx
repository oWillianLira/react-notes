import React, { Component } from 'react';
import NoteCard from './NoteCard';
import styled from 'styled-components';

export default class NotesList extends Component {
  constructor() {
    super();
    this.state = { notes: [] };
    this.ref = this._newNotes.bind(this);
  }

  componentDidMount() {
    this.props.notes.linking(this.ref);
  }

  componentWillUnmount() {
    this.props.notes.unlinking(this.ref);
  }

  _newNotes(notes) {
    this.setState({ ...this.state, notes });
  }

  render() {
    const List = styled.ul`
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 100%;
        max-width: 225px;
        margin: 15px;
        padding: 15px;
        border-radius: 3px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      }
    `;

    return (
      <List>
        {this.state.notes.map((note, index) => {
          return (
            <li key={index}>
              <NoteCard
                index={index}
                title={note.title}
                text={note.text}
                categ={note.category}
                deleteNote={this.props.delete}
              />
            </li>
          );
        })}
      </List>
    );
  }
}
