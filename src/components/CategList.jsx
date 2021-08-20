import React, { Component } from 'react';
import styled from 'styled-components';

export default class CategList extends Component {
  _handleInput(e) {
    if (e.key === 'Enter' && e.target.value) {
      let newCateg = e.target.value;
      this.props.createCateg(newCateg);
    }
  }

  render() {
    const CategArea = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 15px;
      input {
        margin-bottom: 10px;
        background-color: #f5f5f5;
        border: solid #bbb 2px;
        border-radius: 3px;
        padding: 5px;
        max-height: 170px;
        font-size: 0.85rem;
        transition: border ease-in 100ms;
        &:focus {
          border: solid #88b 2px;
        }
      }
      ul {
        display: flex;
        li {
          margin: 0 5px 5px;
          padding: 5px 10px;
          border-radius: 3px;
          background-color: #88b;
          letter-spacing: 1px;
          color: #fff;
          font-size: 0.85rem;
          text-transform: capitalize;
        }
      }
    `;

    return (
      <CategArea>
        <ul>
          {this.props.categories.map((categ, i) => {
            return <li key={i}>{categ}</li>;
          })}
        </ul>
        <input
          type="text"
          title="Write and press 'Enter'"
          placeholder="New category"
          onKeyUp={this._handleInput.bind(this)}
        />
      </CategArea>
    );
  }
}
