import React from 'react';
import ListItem from '../ListItem';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<ListItem/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});