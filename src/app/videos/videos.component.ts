import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service'; // Adjust this if you're using SearchService
import { YouTubeVideo } from '../api-service.service'; // Import the interface for proper typing

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'] // Fix typo: styleUrl -> styleUrls
})

export class VideosComponent implements OnInit {
  videos: YouTubeVideo[] = []; // To store videos
  queryIp = ""


  // handleQuery(e: Event) {
  //   let ip = e.target as HTMLInputElement
  //   this.queryIp = ip.value
  // }


  constructor(private apiData: ApiServiceService) { }

  onSearchView(): void {
    const query = this.queryIp

    if (query) {
      this.apiData.getYtVideos(query).subscribe(
        (res) => {
          this.videos = res
        }, (error) => {
          console.log(error)
        }
      )
    }
  }

  ngOnInit(): void {
    this.onSearchView()
  }

}
