import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})

export class AlbumDetail implements OnInit {

   album!: Album; // initializing
  // album: Album = { id: 0, userId: 0, title: '' };
  //loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
  this.route.paramMap.subscribe((params) => {
    const id = Number(params.get('id'));
    if (!isNaN(id)) {
      this.albumService.getAlbum(id).subscribe({
        next: (data) => this.album = data,
        error: (err) => console.error('Error fetching album', err)
      });
    }
  });
}

  loadAlbum(id: number): void {
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        //this.loading = false;
      },
      error: (err) => {
        console.error('Error loading album', err);
        //this.loading = false;
      }
    });
  }

  save(): void {
  if (this.album) {
    this.albumService.updateAlbum(this.album!).subscribe(() => {
      alert('Album updated!');
    });
  }
}

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
