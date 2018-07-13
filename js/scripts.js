
console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './src/reducers/rootReducer';
import Counter from './Counter';
import foo from './module3';
import {bar} from './module3';

foo(2);
console.log(bar);

const store = createStore(rootReducer);

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={store}>
      <Counter/>
    </Provider>,
    document.getElementById('mount')
  );
});
