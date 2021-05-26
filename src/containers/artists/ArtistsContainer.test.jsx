import React from 'react';
import { render, screen } from '@testing-library/react';
import ArtistsContainer from './ArtistsContainer';

describe('ArtistsContainer', () => {
  it('displays a list of albums', async () => {
    render(<ArtistsContainer />);

    screen.getByText('Loading...');
    // const ulEl = screen.getByLabelText('albums');
  });
});
