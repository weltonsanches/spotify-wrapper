/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/search';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Search', () => {
  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke tests', () => {
    // search (genérico) - + de 1 tipo
    // searchAlbums
    // searchArtists
    // searchTracks
    // searchPlaylists

    it('Should exists the search method', () => {
      expect(search).to.exist;
    });

    it('Should exists the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('Should exists the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('Should exists the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('Should exists the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('GenericSearch', () => {

    it('Should call fetch function', () => {
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Shold receive the correct url to fetch', () => {
      context('Passing one type', () => {
        const artists = search('projota', 'artist');

        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=projota&type=artist');
      });

      context('Passing more than one type', () => {
        const artistsAndAlbums = search('incubus', ['artist', 'album']);

        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=incubus&type=artist,album');
      });
    });

    it('Should return the JSON data from the promise', () => {
      const artist = search(['incubus', 'artist']);
      artist.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('searchArtists', () => {
    it('Should call fetch function', () => {
      const artist = searchArtists('Projota');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the corret URL', () => {
      const artists = searchArtists('Projota');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Projota&type=artist');
    });
  });

  describe('searchAlbums', () => {
    it('Should call fetch function', () => {
      const albums = searchAlbums('Projota');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the corret URL', () => {
      const albums = searchAlbums('Projota');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Projota&type=album');
    });
  });

  describe('searchTracks', () => {
    it('Should call fetch function', () => {
      const tracks = searchTracks('Projota');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the corret URL', () => {
      const tracks = searchTracks('Projota');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Projota&type=tracks');
    });
  });

  describe('searchPlaylists', () => {
    it('Should call fetch function', () => {
      const playlists = searchPlaylists('Projota');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the corret URL', () => {
      const playlists = searchPlaylists('Projota');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Projota&type=playlist');
    });
  });
});
