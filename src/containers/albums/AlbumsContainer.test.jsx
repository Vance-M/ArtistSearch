import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import AlbumsContainer from './AlbumsContainer';
import albumContainer from '../../apiData/albumContainer.json';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get(
    'http://musicbrainz.org/ws/2/artist?query=beyonce&fmt=json',
    (req, res, ctx) => {
      return res(ctx.json(albumContainer));
    }
  )
);

describe('AlbumsContainer', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('displays a list of albums', async () => {
    render(
      <MemoryRouter>
        <AlbumsContainer />
      </MemoryRouter>
    );

    screen.findByAltText('spinner');
    // const ulEl = screen.getByLabelText('albums');
  });
});
