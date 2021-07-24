/** @format */

import React, { Component, PropTypes } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Header from '../../components/Header/Header';
import Selector from '../../components/Selector/Selector';
import './SelectionPage.css';

const fakeData = [
  'Farfetch',
  'SSENSE',
  'END.',
  'Saks Fifth Avenue',
  'Neiman Marcus',
];

export default class SelectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedList: new Set([]),
    };
  }

  populateStore() {
    const list = [];
    for (let i = 0; i < fakeData.length; i++) {
      let newLen = list.push(
        <Selector
          brand={fakeData[i]}
          handler={(v, o) => this.updateList(v, o)}
          idNum={i}
          className='selection-item'
        />
      );
      if (i < fakeData.length - 1) {
        newLen = list.push(<hr />);
      }
    }
    return list;
  }

  updateList(value, operation) {
    if (this.state.checkedList.has(value) && operation === -1) {
      this.state.checkedList.delete(value);
    } else if (!this.state.checkedList.has(value) && operation === 1) {
      this.state.checkedList.add(value);
    }
  }

  handleFinish() {
    let checkedList = this.state.checkedList.entries();
    this.props.redirection(checkedList);
  }

  render() {
    return (
      <div className='selection-page-body-leo'>
        <div className='selection-header-part'>
          <Header />
          <AccountCircleIcon className='selection-page-account' />
        </div>
        <h6 className='selection-instruction'>Select your favorite stores</h6>
        <hr />
        <div className='selection-selector-list'>{this.populateStore()}</div>
        <div className='selection-footer'>
          <hr />
          <button
            className='selection-finish-button'
            onClick={() => {
              this.handleFinish();
            }}>
            Finish
          </button>
        </div>
      </div>
    );
  }
}
