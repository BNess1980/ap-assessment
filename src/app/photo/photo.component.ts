import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PhotoService } from './photo-service.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit, OnDestroy {
  photos: any;
  _photoSub: Subscription;

  constructor(private _photoService: PhotoService) {}

  ngOnInit(): void {
    this.getPhotosFromService();
  }

  getPhotosFromService() {
    this._photoSub = this._photoService.getPhotos().subscribe((resp) => {
      this.photos = resp;
      console.log(this.photos);
    });
  }

  ngOnDestroy() {
    this._photoSub.unsubscribe();
  }
}
