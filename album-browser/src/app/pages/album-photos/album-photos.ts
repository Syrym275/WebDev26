import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, NgFor, RouterModule],
  templateUrl: './album-photos.html',
})
export class AlbumPhotosComponent implements OnInit {
  albumId!: number;
  photos: Photo[] = [];

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getPhotos(this.albumId).subscribe({
      next: (data) => (this.photos = data),
      error: (err) => console.error('Error loading photos', err),
    });
  }
}