import { Component, OnInit, Input } from '@angular/core';
import { IPhoto } from '../photo.model';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss'],
})
export class PhotoDetailComponent implements OnInit {
  @Input() photo: IPhoto;

  constructor() {}

  ngOnInit(): void {}
}
