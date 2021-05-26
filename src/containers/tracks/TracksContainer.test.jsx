import React from 'react';
import { render, screen } from '@testing-library/react';
import TracksContainer from './TracksContainer';

describe('TracksContainer', () => {
  it('displays a list of albums', async () => {
    render(<TracksContainer />);

    screen.getByText('Loading...');
    // const ulEl = screen.getByLabelText('albums');
  });
});
