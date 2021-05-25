import React from 'react';
import { render, screen } from '@testing-library/react';
import AlbumsContainer from './AlbumsContainer';

describe('AlbumsContainer', () => {
  it('displays a list of albums', async () => {
    render(<AlbumsContainer />);

    screen.getByText('Loading...');
  });
});
