import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import VideoCard from '../../../components/VideoCard/VideoCard.component';

let tree;
const thumbnail = 'img.jpg';
const title = 'title';
const description = 'description';
const videoId = '123456';

beforeEach(() => {
  tree = renderer
    .create(
      <BrowserRouter>
        <VideoCard
          thumbnail={thumbnail}
          title={title}
          description={description}
          videoId={videoId}
        />
      </BrowserRouter>
    )
    .toJSON();
});

describe('VideoCard', () => {
  it('Renders VideoCard', () => {
    expect(tree).toMatchSnapshot();
  });
});
