import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import Adapter from 'enzyme-adapter-react-16';
import EnzymeToJson from 'enzyme-to-json';
import { mount, configure } from 'enzyme';

import ProfileMenu from '../../../components/ProfileMenu/ProfileMenu.component';

beforeAll(() => {
  configure({ adapter: new Adapter() });
});

describe('ProfileMenu', () => {
  it('Renders ProfileMenu', () => {
    const auxFunc = () => true;
    const profileMenu = mount(
      <ProfileMenu isProfileMenuActive={null} closeMenu={auxFunc} />
    );
    expect(EnzymeToJson(profileMenu)).toMatchSnapshot();
  });

  it('Renders Menu', () => {
    const auxFunc = () => true;
    const profileMenu = mount(
      <ProfileMenu isProfileMenuActive={null} closeMenu={auxFunc} />
    );
    expect(profileMenu.find('#profile-menu')).toBeDefined();
  });

  it('Renders Change Theme Checkbox', () => {
    const auxFunc = () => true;
    const profileMenu = mount(
      <ProfileMenu isProfileMenuActive={null} closeMenu={auxFunc} />
    );
    expect(profileMenu.find('label')).toBeDefined();
    expect(profileMenu.find('input[type="checkbox"]')).toBeDefined();
    expect(profileMenu.find('.slider')).toBeDefined();
  });
});
