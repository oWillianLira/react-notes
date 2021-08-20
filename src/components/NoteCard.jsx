import React, { Component } from 'react';
import styled from 'styled-components';
import { Delete } from '../icons';

export default class NoteCard extends Component {
  delete() {
    this.props.deleteNote(this.props.index);
  }

  render() {
    const Card = styled.article`
      header {
        border-bottom: solid 1px #ddd;
        margin-bottom: 15px;
        padding: 5px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        h3 {
          font-size: 1.3rem;
          color: #333;
          font-weight: 600;
        }
        svg {
          width: 20px;
          fill: #e33;
          cursor: pointer;
          &:hover {
            fill: #d00;
          }
        }
      }
      div {
        padding: 5px;
      }
      span {
        font-size: 0.75rem;
        float: right;
        margin-top: 15px;
        color: #fff;
        background-color: #55b;
        padding: 3px 5px;
        border-radius: 3px;
      }
    `;

    return (
      <Card>
        <header>
          <h3>{this.props.title}</h3>
          <label title="Delete note" onClick={this.delete.bind(this)}>
            {Delete}
          </label>
        </header>
        <div>
          <p>{this.props.text}</p>
        </div>
        <span title="Category">{this.props.categ}</span>
      </Card>
    );
  }
}
