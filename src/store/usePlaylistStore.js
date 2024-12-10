import { defineStore } from 'pinia';

export const usePlaylistStore = defineStore('playlist', {
  state: () => ({
    playlists: [],
  }),
  actions: {
    addPlaylist(playlist) {
      this.playlists.push(playlist);
    },
  },
});
