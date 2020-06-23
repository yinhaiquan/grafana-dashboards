import React from 'react';
import { shallow } from 'enzyme';

import { UpdateModalHeader } from './UpdateModalHeader';
import { Messages } from './UpdateModalHeader.messages';

describe('UpdateModalHeader::', () => {
  it('should show that the update is in progress by default', () => {
    const wrapper = shallow(<UpdateModalHeader />);

    expect(wrapper.find('h4').text()).toEqual(Messages.updateInProgress);

    wrapper.unmount();
  });

  it('should show that the update succeeded if isUpdated is true', () => {
    const wrapper = shallow(<UpdateModalHeader isUpdated />);

    expect(wrapper.find('h4').text()).toEqual(Messages.updateSucceeded);

    wrapper.unmount();
  });

  it('should show ignore updateFailed if isUpdated is true', () => {
    const wrapper = shallow(<UpdateModalHeader isUpdated updateFailed />);

    expect(wrapper.find('h4').text()).toEqual(Messages.updateSucceeded);

    wrapper.unmount();
  });

  it('should show the passed error message if the update failed', () => {
    const errorMessage = 'Test Error';
    const wrapper = shallow(<UpdateModalHeader updateFailed errorMessage={errorMessage} />);

    expect(
      wrapper
        .find('h4')
        .at(0)
        .text()
    ).toEqual(Messages.updateFailed);
    expect(
      wrapper
        .find('h4')
        .at(1)
        .text()
    ).toEqual(errorMessage);

    wrapper.unmount();
  });
});
