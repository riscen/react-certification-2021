import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import HomeView from '../../../components/HomeView/HomeView.component';

describe('HomeView', () => {
  it('Renders HomeView', () => {
    const tree = renderer.create(<HomeView youtubeData={{}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
