import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import Adapter from 'enzyme-adapter-react-16';
import EnzymeToJson from 'enzyme-to-json';
import { mount, configure } from 'enzyme';

import RelatedVideoCard from '../../../components/RelatedVideoCard';

describe('RelatedVideoCard', () => {
  let relatedVideoCard;
  beforeEach(() => {
    configure({ adapter: new Adapter() });
    relatedVideoCard = mount(
      <BrowserRouter>
        <RelatedVideoCard />
      </BrowserRouter>
    );
  });

  it('Renders VideoDetails Page', () => {
    expect(EnzymeToJson(relatedVideoCard)).toMatchSnapshot();
  });
});
