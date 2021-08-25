import React, { Component } from 'react';
import styled from 'styled-components';

export default class NotesForm extends Component {
  constructor(props) {
    super(props);
    this.title = '';
    this.note = '';
    this.category = 'uncategorized';
    this.state = { categories: [] };
  }

  componentDidMount() {
    this.props.categList.linking(this._newCategs.bind(this));
  }

  _newCategs(categories) {
    this.setState({ ...this.state, categories });
  }

  // Functions
  _handleTitle(e) {
    this.title = e.target.value;
    e.stopPropagation();
  }

  _handleCateg(e) {
    e.stopPropagation();
    this.category = e.target.value;
  }

  _handleNote(e) {
    this.note = e.target.value;
    e.stopPropagation();
  }

  _createNote(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.createNote(this.title, this.note, this.category);
  }

  render() {
    const Form = styled.form`
      display: flex;
      flex-direction: column;
      width: 90%;
      margin: 15px auto;
      input,
      select,
      textarea {
        margin-bottom: 10px;
        background-color: #f5f5f5;
        border: solid #bbb 2px;
        border-radius: 3px;
        padding: 5px;
        max-height: 170px;
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
          background: #448;
        }
      }
    `;

    return (
      <Form onSubmit={this._createNote.bind(this)}>
        <input required type="text" placeholder="Title..." onChange={this._handleTitle.bind(this)} />
        <select onChange={this._handleCateg.bind(this)}>
          <option value="uncategorized">uncategorized</option>
          {this.state.categories.map((categ, i) => {
            return (
              <option key={i} value={categ}>
                {categ}
              </option>
            );
          })}
        </select>
        <textarea
          required
          placeholder="Write your note here..."
          rows={8}
          onChange={this._handleNote.bind(this)}
        ></textarea>
        <button type="submit">Criar nota</button>
      </Form>
    );
  }
}
