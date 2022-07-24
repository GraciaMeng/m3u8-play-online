import { defineStore, storeToRefs } from 'pinia'
import videojs from "video.js";

export const VIDEO_HISTORY = 'video_history'

export interface HistoryInterface {
  url: string
}
export interface VideoState {
  videoUrl: string
  videoHistoryList: HistoryInterface[]
}

export const useVideoStore = defineStore('video', {
  state: (): VideoState => {
    return {
      videoUrl: '',
      videoHistoryList: []
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
    },
    saveHistoryList() {
      const json = JSON.stringify(this.videoHistoryList)
      localStorage.setItem(VIDEO_HISTORY, json)
    },
    setHistoryList() {
      const list = JSON.parse(localStorage.getItem(VIDEO_HISTORY) || "[]")
      this.videoHistoryList = list
    },
    checkHasHistory(url: string) {
      const index = this.videoHistoryList.findIndex(item => item.url === url)
      if (index >= 0) {
        this.videoHistoryList.splice(index, 1)
      }
    },
    addHistory(item: HistoryInterface) {
      this.checkHasHistory(item.url)
      this.videoHistoryList.push(item)
    }
  }
})

export function useVideoStoretoRefs() {
  const videoStore = useVideoStore()
  return {
    videoStore,
    ...storeToRefs(videoStore)
  }
}