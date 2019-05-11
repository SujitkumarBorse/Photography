import { Component, OnInit } from '@angular/core';
import { GalleryImage } from '../gallary/models/galleryImage.model';
import { ImageService } from '../services/image.service';
declare var $: any;

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {


  galleryImage:GalleryImage[];

    constructor(private _ImageService : ImageService) { }

  ngOnInit() {

    // get image from json file

    this._ImageService.getImage().subscribe(data => this.galleryImage = data);

    // Jquery Image lightbox

    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
      event.preventDefault();
      $(this).ekkoLightbox();
    });

  }
}


// *ngFor="let img of  galleryImage"
