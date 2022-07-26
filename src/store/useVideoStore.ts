import { defineStore, storeToRefs } from "pinia";
import videojs, { VideoJsPlayer } from "video.js";

export const VIDEO_HISTORY = "video_history";

export interface HistoryInterface {
  url: string;
}
export interface VideoState {
  videoUrl: string;
  videoHistoryList: HistoryInterface[];
  video: VideoJsPlayer | undefined;
  isPlay: boolean;
}

export const useVideoStore = defineStore("video", {
  state: (): VideoState => {
    return {
      videoUrl: "",
      videoHistoryList: [],
      video: undefined,
      isPlay: false,
    };
  },
  actions: {
    setVideoUrl(val: string) {
      this.videoUrl = val;
    },
    playVideo() {
      this.video?.dispose();
      const el = document.querySelector(".video-container");
      el!.innerHTML = `
        <video id="video" preload="auto" muted class="video-js vjs-default-skin" style="width: 100%;height: 100%;object-fit: fill;">
          <source src="${this.videoUrl}" type="application/x-mpegURL" />
        </video>
      `;
      this.video = videojs("video", {
        bigPlayButton: true,
        muted: true,
        controls: true,
      });
      this.video!.play();
    },
    saveHistoryList() {
      const json = JSON.stringify(this.videoHistoryList);
      localStorage.setItem(VIDEO_HISTORY, json);
    },
    setHistoryList() {
      const list = JSON.parse(localStorage.getItem(VIDEO_HISTORY) || "[]");
      this.videoHistoryList = list;
    },
    checkHasHistory(url: string) {
      const index = this.videoHistoryList.findIndex((item) => item.url === url);
      if (index >= 0) {
        this.videoHistoryList.splice(index, 1);
      }
    },
    addHistory(item: HistoryInterface) {
      this.checkHasHistory(item.url);
      this.videoHistoryList.unshift(item);
    },
  },
});

export function useVideoStoretoRefs() {
  const videoStore = useVideoStore();
  return {
    videoStore,
    ...storeToRefs(videoStore),
  };
}
