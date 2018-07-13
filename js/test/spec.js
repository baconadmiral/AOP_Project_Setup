import React from 'react';
import MainPage from './MainPage';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import {expect} from 'chai';

describe('DoodleBob', function() {

  it('should exists', function() {
    // Render into document
    var mp = TestRenderer.create( <MainPage /> );
    console.log(mp.toJSON());
    console.log(mp.toJSON());

    expect(mp.toJSON().props.className).to.equal('App');
  });
});
