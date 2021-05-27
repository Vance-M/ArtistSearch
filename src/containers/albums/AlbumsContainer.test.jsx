require('dotenv').config();
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import AlbumsContainer from './AlbumsContainer';
import { MemoryRouter } from 'react-router-dom';
import albumsContainer from '../../apiData/albumsContainer.json';

const server = setupServer(
  rest.get(
    // eslint-disable-next-line max-len
    'https://musicbrainz.org/ws/2/release',
    (req, res, ctx) => {
      return res(ctx.json(albumsContainer));
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
    const ulEl = await screen.findByRole('list', { name: 'release-list' });
    const pEl = await screen.findByTestId('page');
    const pButtonEl = await screen.findByTestId('prev-button');
    const nButtonEl = await screen.findByTestId('next-button');

    userEvent.click(nButtonEl);
    userEvent.click(nButtonEl);

    userEvent.click(pButtonEl);

    return waitFor(() => {
      expect(ulEl).not.toBeEmptyDOMElement();
      expect(pEl).toHaveTextContent(2);
    });
  });
});
