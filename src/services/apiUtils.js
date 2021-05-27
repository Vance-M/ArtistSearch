/* eslint-disable max-len */
/* eslint-disable no-undef */

const URL = 'https://musicbrainz.org/ws/2'
export const getArtists = async (artist, offset) => {
  const response = await fetch(
    `${URL}/artist?query=${artist}&fmt=json&limit=25&offset=${offset}`
  );

  const { artists, count } = await response.json();

  return {
    artists: artists.map((artist) => ({
      artistId: artist.id,
      artistName: artist.name,
    })),
    count,
  };
};

export const getArtistById = async (id, offset) => {
  const response = await fetch(
    `${URL}/release?artist=${id}&fmt=json&limit=10&offset=${offset}`
  );

  const albums = await response.json();

  return {
    albums: albums.releases.map((release) => ({
      releaseId: release.id,
      title: release.title,
      releaseDate: release.date,
    })),
    count: albums['releases-count'],
  };
};

export const getAlbumById = async (id) => {
  const response = await fetch(
    `${URL}/recording?release=${id}&fmt=json`
  );

  const tracks = await response.json();

  return tracks.recordings.map((recording) => ({
    recordingId: recording.id,
    title: recording.title,
    length: recording.length,
  }));
};

// export const getLyrics = async (artist, track) => {
//   try{
//     const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${track}`, {
//       timeout: 1000,
//     });
//     const lyrics = await response.json();
//     return lyrics
//   } catch {
//     console.error(err => (err.message))
//   }

// };

async function fetchWithTimeout(resource, options) {
  const { timeout = 8000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);

  return response;
}

export const getLyrics = async (artist, track) => {
  try {
    const response = await fetchWithTimeout(
      `https://api.lyrics.ovh/v1/${artist}/${track}`,
      {
        timeout: 15000,
      }
    );

    const lyrics = await response.json();

    return lyrics;
  } catch (error) {
    return { lyrics: 'Sorry, no lyrics found!' };
  }
};
