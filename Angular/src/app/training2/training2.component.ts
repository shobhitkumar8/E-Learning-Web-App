import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-training2',
  templateUrl: './training2.component.html',
  styleUrls: ['./training2.component.css']
})
export class Training2Component implements OnInit {
  
    name = "Angular";
    @ViewChild("videoPlayer", { static: false })
    videoplayer!: ElementRef;
    isPlay: boolean = false;
    toggleVideo() {
      this.videoplayer.nativeElement.play();
    }
    playPause() {
      var myVideo: any = document.getElementById("my_video_1");
      if (myVideo.paused) myVideo.play();
      else myVideo.pause();
    }
  
    makeBig() {
      var myVideo: any = document.getElementById("my_video_1");
      myVideo.width = 560;
    }
  
    makeSmall() {
      var myVideo: any = document.getElementById("my_video_1");
      myVideo.width = 320;
    }
  
    makeNormal() {
      var myVideo: any = document.getElementById("my_video_1");
      myVideo.width = 420;
    }
  
    skip(value: any) {
      let video: any = document.getElementById("my_video_1");
      video.currentTime += value;
    }
  
    restart() {
      let video: any = document.getElementById("my_video_1");
      video.currentTime = 0;
    }
    constructor() { }
  
    ngOnInit(): void {
      }
  }