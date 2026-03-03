import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumService: AlbumService, private router: Router) {}

  ngOnInit(): void {
    // fetch initially
    this.fetchAlbums();

    // fetch again whenever we navigate back to /albums
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.urlAfterRedirects === '/albums') {
        this.fetchAlbums();
      }
    });
  }

  fetchAlbums(): void {
    this.albumService.getAlbums().subscribe({
      next: data => this.albums = data,
      error: err => console.error('Error fetching albums', err)
    });
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
}