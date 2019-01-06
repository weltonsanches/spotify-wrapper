/* global fetch */

import API_URL from './config';
import toJSON from './utils';

export const search = (query, type) => {
  const token = 'BQD1EdT-guC5cWUM9VzSYjoioI6jOAdJu1HyGHvveN-C5kkWQOHc3IYrW3qywYHuRzRtwhbxoNgLHIh_2jybG8EiIqrf7DNiTGFbO4DrJ5h_Yo7I5nxGtGQIHY2pAbZBfGwursPcKuSUCnL6x8H52Ytg_c5lXZJ3b-wkS-fMoo5gs-wntqxfWLzZ-eaob9PToIz7q7oEaKj9TJugZMT8NAlHlGt7NhoN77TvCP7sYIbq4n28rFm7YHMkKDbhn9-Vc_5IIV7B4Xp5f8xw';
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    }
  };
  return fetch(`${API_URL}/search?q=${query}&type=${type}`, config).then(toJSON);
};
export const searchArtists = query => search(query, 'artist');
export const searchAlbums = query => search(query, 'album');
export const searchTracks = query => search(query, 'tracks');
export const searchPlaylists = query => search(query, 'playlist');
