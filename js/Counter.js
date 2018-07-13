import React from 'react';
import MainPage from './src/components/MainPage';
// import {MDCRipple} from '@material/ripple';
// const ripple = new MDCRipple(document.querySelector('.some-ripple-thing'));
import * as mdc from 'material-components-web/dist/material-components-web'

/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount=()=>{mdc.autoInit()};

  render() {
    return (
      <div>
      <div class="mdc-form-field">
        <div class="mdc-textfield" data-mdc-auto-init="MDCTextfield">
          <input class="mdc-textfield__input" type="text" required name="email" value="SOMETHING"/>
          <label class="mdc-textfield__label" for="email">Email</label>
        </div>
      </div>
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        Count: {this.state.count}
      </button>
      <MainPage/>
      </div>
    );
  }
}
export default Counter;
