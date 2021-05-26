/* eslint-disable max-len */
/* eslint-disable no-undef */
export const getArtists = async (artist, offset) => {
  const response = await fetch(
    `${process.env.BASE_URL}/artist?query=${artist}&fmt=json&limit=25&offset=${offset}`
  );

  const { artists, count } = await response.json();

  return { 
    artists: artists.map((artist) => ({
      artistId: artist.id,
      artistName: artist.name,
    })),
    count
  };
};

export const getArtistById = async (id, offset) => {
  const response = await fetch(
    `${process.env.BASE_URL}/release?artist=${id}&fmt=json&limit=10&offset=${offset}`
  );

  const albums = await response.json();

  return {  
  albums: albums.releases.map((release) => ({
    releaseId: release.id,
    title: release.title,
    releaseDate: release.date,
  })),
  count: albums["releases-count"]
}
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
