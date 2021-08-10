import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import EnzymeToJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from 'enzyme';

import Header from '../../../components/Header/Header.component';

beforeAll(() => {
  configure({ adapter: new Adapter() });
});

describe('Header', () => {
  it('Renders header', () => {
    const auxFunc1 = () => {};
    const auxFunc2 = () => {};
    const header = mount(
      <BrowserRouter>
        <Header setIsSideMenuActive={auxFunc1} handleSubmit={auxFunc2} />
      </BrowserRouter>
    );
    expect(EnzymeToJson(header)).toMatchSnapshot();
  });

  it('Contains Home Link', () => {
    const auxFunc1 = () => {};
    const auxFunc2 = () => {};
    const header = shallow(
      <Header setIsSideMenuActive={auxFunc1} handleSubmit={auxFunc2} />
    );
    expect(header.find('a')).toBeDefined();
    expect(header.find('a[href="/"]')).toBeDefined();
  });

  it('Contains Search Bar', () => {
    const auxFunc1 = () => {};
    const auxFunc2 = () => {};
    const header = shallow(
      <Header setIsSideMenuActive={auxFunc1} handleSubmit={auxFunc2} />
    );
    expect(header.find('.search-bar')).toBeDefined();
    expect(header.find('input[type="/"]')).toBeDefined();
    expect(header.find('button[type="button"]')).toBeDefined();
  });
});
