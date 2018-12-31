import { searchAlbums } from '../src/main';

global.fetch = require('node-fetch');

const albums = searchAlbums('Projota');
albums
  .then(data => console.log(data));
