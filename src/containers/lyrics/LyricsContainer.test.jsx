import React from 'react';
import { render, screen } from '@testing-library/react';
import LyricsContainer from './LyricsContainer';

describe('LyricsContainer', () => {
  it('displays a list of albums', async () => {
    render(<LyricsContainer />);

    screen.getByText('Loading...');
    // const ulEl = screen.getByLabelText('albums');
  });
});
