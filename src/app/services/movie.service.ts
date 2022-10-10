import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


export interface ApiResult{
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  // get all top rated movies
  getTopRatedMovies(page = 1): Observable<ApiResult>{
    return this.http.get<ApiResult>(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`);
  }

  // get movie details
  getMovieDetails(id: string){
    return this.http.get(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`);
  }
}
