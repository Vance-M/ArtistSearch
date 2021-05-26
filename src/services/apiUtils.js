/* eslint-disable no-undef */
export const getArtists = async (artist) => {
  const response = await fetch(
    `${process.env.BASE_URL}/artist?query=${artist}&fmt=json&limit=25`
  );

  const { artists } = await response.json();

  return artists.map((artist) => ({
    artistId: artist.id,
    artistName: artist.name,
    // prettier-ignore
    // eslint-disable-next-line space-infix-ops
    // hometown: artist.area.name,
    // country: artist.country,
  }));
};
export const getArtistById = async (id) => {
  const response = await fetch(
    `${process.env.BASE_URL}/release?artist=${id}&fmt=json`
  );

  const albums = await response.json();

  return albums.releases.map((release) => ({
    releaseId: release.id,
    title: release.title,
    releaseDate: release.date,
  }));
};
export const getAlbumById = async (id) => {
  const response = await fetch(
    `${process.env.BASE_URL}/recording?release=${id}&fmt=json`
  );

  const tracks = await response.json();

  return tracks.recordings.map((recording) => ({
    recordingId: recording.id,
    title: recording.title,
    length: recording.length,
  }));
};

export const getLyrics = async (artist, track) => {
  const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${track}`);

  const lyrics = await response.json();

  return lyrics;
};
