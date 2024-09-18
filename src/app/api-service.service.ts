import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { YouTubeResponse } from './youtuberesponse';
import { YouTubeVideo } from './videointerface';



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_KEY = 'AIzaSyDOJyoj4dqxQS8j664aEDDOsz_zSB2ie8Y';


  constructor(private http: HttpClient) { }
  getYtVideos(query: string): Observable<YouTubeVideo[]> {
    const url = `${this.API_URL}?q=${query}&key=${this.API_KEY}&part=snippet&type=video&maxResults=10`

    return this.http.get<YouTubeResponse>(url).pipe(
      map(res => res.items)
    )

  }


}
export { YouTubeVideo };

