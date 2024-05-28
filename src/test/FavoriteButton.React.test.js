import React from 'react';
import renderer from 'react-test-renderer';

import FavoriteButton from '../components/FavoriteButton';

// Test Favorite button is working correctly
test('renders correctly', () => {
    const tree = renderer
  .create(<FavoriteButton track="Nirvana"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });