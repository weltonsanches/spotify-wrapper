/* global fetch */

import API_URL from './config';
import toJSON from './utils';

export const search = (query, type) => {
  const token = '';
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }
  };
  return fetch(`${API_URL}/search?q=${query}&type=${type}`, config).then(toJSON);
};
export const searchArtists = query => search(query, 'artist');
export const searchAlbums = query => search(query, 'album');
export const searchTracks = query => search(query, 'tracks');
export const searchPlaylists = query => search(query, 'playlist');
