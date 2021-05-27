import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LyricsContainer from './LyricsContainer';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import lyricsContainer from '../../apiData/lyricsContainer.json'

const server = setupServer(
  rest.get('', (req, res, ctx) => {
    return res(ctx.json(lyricsContainer));
  })
)
describe('LyricsContainer', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of albums', async () => {
    render(
      <MemoryRouter>
        <LyricsContainer />
      </MemoryRouter>
    );

    screen.findByAltText('spinner');
    const pEl = await screen.findByTestId('lyrics-p')
    return waitFor(() => {
      expect(pEl).toMatchSnapshot();
    })
  });
});
