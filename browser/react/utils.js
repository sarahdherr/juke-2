import axios from 'axios';

export const convertSong = (song) => {
  song.audioUrl = `/api/songs/${song.id}/audio`;
  return song;
};

const convertSongs = (songs) => 
  songs.map(song => convertSong(song));


export const convertAlbum = (album) => {
  album.imageUrl = `/api/albums/${album.id}/image`;
  album.songs = album.songs.map(convertSong);
  return album;
};

export const convertAlbums = (albums) =>
  albums.map(album => convertAlbum(album));

const mod = (num, m) => ((num % m) + m) % m;

export const skip = (interval, { currentSongList, currentSong }) => {
  let idx = currentSongList.map(song => song.id).indexOf(currentSong.id);
  idx = mod(idx + interval, currentSongList.length);
  const next = currentSongList[idx];
  return [next, currentSongList];
};

export const convertArtist = (artist) => {
  // getting artist albums
  const albums = axios.get(`/api/artists/${artist.id}/albums`)
    .then(res => res.data)
    .then(albums => artist.albums = convertAlbums(albums));


  // getting artist songs
  const songs = axios.get(`/api/artists/${artist.id}/songs`)
    .then(res => res.data)
    .then(songs => artist.songs = convertSongs(songs));
  
  // return artist with properties albums and songs
  return Promise.all([albums, songs]).then( () => artist)
}