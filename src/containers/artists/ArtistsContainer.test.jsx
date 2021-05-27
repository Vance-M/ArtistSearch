import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ArtistsContainer from './ArtistsContainer';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import artistsContainer from '../../apiData/artistsContainer.json';

const server = setupServer(
  rest.get('http://musicbrainz.org/ws/2/artist', (req, res, ctx) => {
    return res(ctx.json(artistsContainer));
  })
);

describe('ArtistsContainer', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('displays a list of artists', async () => {
    render(
      <MemoryRouter>
        <ArtistsContainer />
      </MemoryRouter>
    );

    screen.findByText('Beyoncé');
    const inputEl = await screen.findByTestId('artist-search');
    const ulEl = await screen.findAllByRole('list', { name: 'artist-list' });

    userEvent.type(inputEl, 'Beyonce');
    return waitFor(() => {
      expect(ulEl).toHaveLength(1);
    });
    // const ulEl = screen.getByLabelText('albums');
  });
});
