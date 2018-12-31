
export const search = (query, type) => {
  const token = '';
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    }
  };
  return fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`, config).then(data => data.json());
};
export const searchArtists = query => search(query, 'artist');
export const searchAlbums = query => search(query, 'album');
export const searchTracks = query => search(query, 'tracks');
export const searchPlaylists = query => search(query, 'playlist');
