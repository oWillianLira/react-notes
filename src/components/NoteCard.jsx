import React, { Component } from 'react';
import styled from 'styled-components';

export default class NoteCard extends Component {
  render() {
    const CardNote = styled.article``;
    const CardHeader = styled.header`
      border-bottom: solid 1px #ddd;
      margin-bottom: 15px;
      padding: 5px;
      h3 {
        font-size: 1.3rem;
        color: #333;
        font-weight: 600;
      }
    `;
    const CardBody = styled.div`
      padding: 5px;
    `;

    return (
      <CardNote>
        <CardHeader>
          <h3>Title</h3>
        </CardHeader>
        <CardBody>
          <p>anotação</p>
        </CardBody>
      </CardNote>
    );
  }
}
