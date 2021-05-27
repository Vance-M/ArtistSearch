require('dotenv').config();
import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import TracksContainer from './TracksContainer';
import tracksContainer from '../../apiData/tracksContainer.json';

const server = setupServer(
  rest.get(
    // eslint-disable-next-line max-len
    'https://musicbrainz.org/ws/2/recording',
    (req, res, ctx) => {
      return res(ctx.json(tracksContainer));
    }
  )
);

describe('TracksContainer', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('displays a list of tracks', async () => {
    render(
      <MemoryRouter>
        <TracksContainer />
      </MemoryRouter>
    );

    screen.findByAltText('spinner');
    const ulEl = await screen.findByRole('list', { name: 'track-list' });
    expect(ulEl).not.toBeEmptyDOMElement();
  });
});
