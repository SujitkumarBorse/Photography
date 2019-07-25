import { Component, OnInit } from '@angular/core';
import { WeddingGalleryImage,PreWeddingGalleryImage,BirthdayGalleryImage,
         KidsGalleryImage,PersonalGalleryImage,OtherGalleryImage 
       } from '../gallary/models/galleryImage.model';
import { ImageService } from '../services/image.service';
declare var $: any;

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {


  weddingGalleryImage : WeddingGalleryImage[];
  preWeddingGalleryImage : PreWeddingGalleryImage[];
  birthdayGalleryImage : BirthdayGalleryImage[];
  kidsGalleryImage : KidsGalleryImage[];
  personalGalleryImage : PersonalGalleryImage[];
  otherGalleryImage : OtherGalleryImage[];

    constructor(private _ImageService : ImageService) { }

  ngOnInit() {

    // get image from json file

    this._ImageService.getWeddingImages().subscribe(data => this.weddingGalleryImage = data);
    this._ImageService.getPreWeddingImages().subscribe(data => this.preWeddingGalleryImage = data);
    this._ImageService.getBirthdayImages().subscribe(data => this.birthdayGalleryImage = data);
    this._ImageService.getKidsImages().subscribe(data => this.kidsGalleryImage = data);
    this._ImageService.getPersonalImages().subscribe(data => this.personalGalleryImage = data);
    this._ImageService.getOtherImages().subscribe(data => this.otherGalleryImage = data);

    // Jquery Image lightbox

    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
      event.preventDefault();
      $(this).ekkoLightbox();
    });

  }
}


// *ngFor="let img of  galleryImage"
