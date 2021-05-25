export const getArtists = async (artist) => {
  const response = await fetch(
    `${process.env.BASE_URL}/artist?query=${artist}&fmt=json&limit=25`
  );

  const { artists } = await response.json();

  return artists.map((artist) => ({
    artistId: artist.id,
    artistName: artist.name,
    hometown: artist.begin - area.name || 'N/A',
    country: artist.country || 'N/A',
  }));
};
export const getArtistById = async (id) => {
  const response = await fetch(
    `${process.env.BASE_URL}/release?artist=${id}&fmt=json`
  );

  const albums = await response.json();

  return albums.releases.map((release) => ({
    releaseID: release.id,
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
