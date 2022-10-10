import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MovieService } from './../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  movies = [];
  currentPage = 1;
  imageBaseUrl = environment.imagesUrl;

  constructor(private movieService: MovieService, private loadingController: LoadingController) { }

  ngOnInit() {
   this.loadMovies();
  }

  async loadMovies(){
    const loading = await this.loadingController.create({
      message: 'Loading',
      spinner: 'bubbles'
    });
    await loading.present();
    this.movieService.getTopRatedMovies(this.currentPage).subscribe(res => {
      loading.dismiss();
      this.movies = [...this.movies, ...res.results];
      console.log(res);
    });
  }
}
