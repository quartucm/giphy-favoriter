import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

function setup() {
  const enzymeWrapper = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  return {
    enzymeWrapper
  }
}

describe('Header', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('header').hasClass('Header')).toBe(true);
  })
})
