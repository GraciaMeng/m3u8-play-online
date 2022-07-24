import { defineStore } from 'pinia'
import videojs from "video.js";

export interface VideoState {
  videoUrl: string
}

export const useVideoStore = defineStore('video', {
  state: (): VideoState => {
    return {
      videoUrl: ''
    }
  },
  actions: {
    setVideoUrl(val: string) {
      this.videoUrl = val
    },
    playVideo() {
      const video = videojs("video", {
        bigPlayButton: true,
        muted: true,
        controls: true,
      });
      video.play();
    }
  }
})