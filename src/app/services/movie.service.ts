import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getTopRatedMovies(){
    return this.http.get(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}`);
  }
}
