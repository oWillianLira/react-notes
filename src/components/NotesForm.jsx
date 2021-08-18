import React, { Component } from 'react';
import styled from 'styled-components';

export default class NotesForm extends Component {
  render() {
    const Form = styled.form`
      display: flex;
      flex-direction: column;
      width: 90%;
      margin: 15px auto;
      input,
      textarea {
        margin-bottom: 10px;
        border: solid #bbb 2px;
        border-radius: 3px;
        padding: 5px;
        font-size: 1rem;
        transition: border ease-in 100ms;
        &:focus {
          border: solid #88b 2px;
        }
      }
      button {
        border-radius: 3px;
        padding: 10px;
        font-size: 0.8rem;
        text-transform: uppercase;
        font-weight: 600;
        background: #55b;
        color: #eee;
        transition: ease-in 200ms;
        border: none;
        &:hover {
          letter-spacing: 1px;
          background: #448;
        }
      }
    `;

    return (
      <Form action="">
        <input type="text" placeholder="Title..." />
        <textarea placeholder="Write your note here..." rows={8}></textarea>
        <button type="submit">Criar nota</button>
      </Form>
    );
  }
}
