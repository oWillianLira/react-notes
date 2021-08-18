import React, { Component } from 'react';
import NoteCard from './NoteCard';
import styled from 'styled-components';

export default class NotesList extends Component {
  render() {
    const List = styled.ul`
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 100%;
        max-width: 250px;
        margin: 15px;
        padding: 15px;
        border-radius: 3px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      }
    `;

    return (
      <List>
        {Array.of('Work', 'Studies', 'Work').map((categ, index) => {
          return (
            <li key={index}>
              <NoteCard />
            </li>
          );
        })}
      </List>
    );
  }
}