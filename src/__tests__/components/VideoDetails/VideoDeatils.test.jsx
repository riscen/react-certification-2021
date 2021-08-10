import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import Adapter from 'enzyme-adapter-react-16';
import EnzymeToJson from 'enzyme-to-json';
import { mount, configure } from 'enzyme';

import VideoDetails from '../../../pages/VideoDetails/VideoDetails.page';

describe('VideoDetails', () => {
  let videoDetails;
  beforeEach(() => {
    configure({ adapter: new Adapter() });
    videoDetails = mount(
      <BrowserRouter>
        <VideoDetails />
      </BrowserRouter>
    );
  });

  it('Renders VideoDetails Page', () => {
    expect(EnzymeToJson(videoDetails)).toMatchSnapshot();
  });

  it('Contains Video Player', () => {
    expect(videoDetails.find('#player')).toBeDefined();
    expect(videoDetails.find('iframe')).toBeDefined();
  });

  it('Displays Video Title', () => {
    expect(videoDetails.find('.video-detail-title')).toBeDefined();
    expect(videoDetails.find('h2')).toBeDefined();
  });

  it('Displays Video Description', () => {
    expect(videoDetails.find('.video-detail-description')).toBeDefined();
  });
});
