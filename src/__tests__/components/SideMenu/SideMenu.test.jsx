import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import SideMenu from '../../../components/SideMenu/SideMenu.component';

let tree;

beforeEach(() => {
  tree = renderer.create(<SideMenu />).toJSON();
});

describe('SideMenu', () => {
  it('Renders SideMenu', () => {
    expect(tree).toMatchSnapshot();
  });

  it('Displays side menu content', () => {
    render(<SideMenu toggleSideMenu={null} />);
    const sideMenuComponent = screen.getByText('This is the side menu :)');
    expect(sideMenuComponent).toBeInTheDocument();
  });
});
