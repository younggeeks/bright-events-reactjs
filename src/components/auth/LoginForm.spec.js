import { mount, shallow } from 'enzyme';
import expect from 'expect';
import LoginForm from './LoginForm';
import React from 'react';

function setup(loading = false, loggedIn = false) {
  const props = {
    classes: {},
    loading,
    history: { push: date => console.log('redirecting to ', date) },
    error: {},
    isLoggedIn: () => loggedIn,
  };
  return shallow(<LoginForm {...props} />);
}

describe('Test Login Form works', () => {
  it('it should have a container div with correct classNames ', () => {
    const wrapper = setup(false, false);
    expect(wrapper.find('.col-md-4.offset-md-4.col-sm-12.col-xs-12').length).toBe(1);
    expect(wrapper.find('.ui.centered.header').text()).toEqual('Login');
    expect(wrapper.find('form').length).toBe(1);
  });
  // it('button should ', function () {
  //     const wrapper = setup(true)
  //     expect(wrapper.find('.ui.fluid.primary.button'))
  // });
});

