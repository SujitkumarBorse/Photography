import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeddingGalleryImage,PreWeddingGalleryImage,BirthdayGalleryImage,
  KidsGalleryImage,PersonalGalleryImage,OtherGalleryImage 
} from '../gallary/models/galleryImage.model';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private url_1: string = "../../assets/data/wedding.json";
  private url_2: string = "../../assets/data/pre-wedding.json";
  private url_3: string = "../../assets/data/birthday.json";
  private url_4: string = "../../assets/data/kids.json";
  private url_5: string = "../../assets/data/personal.json";
  private url_6: string = "../../assets/data/other.json";

  constructor(private _http: HttpClient) {

  }
  getWeddingImages(): Observable<WeddingGalleryImage[]> {
    return this._http.get<WeddingGalleryImage[]>(this.url_1);
  }
  getPreWeddingImages(): Observable<PreWeddingGalleryImage[]> {
    return this._http.get<PreWeddingGalleryImage[]>(this.url_2);
  }
  getBirthdayImages(): Observable<BirthdayGalleryImage[]> {
    return this._http.get<BirthdayGalleryImage[]>(this.url_3);
  }
  getKidsImages(): Observable<KidsGalleryImage[]> {
    return this._http.get<KidsGalleryImage[]>(this.url_4);
  }
  getPersonalImages(): Observable<PersonalGalleryImage[]> {
    return this._http.get<PersonalGalleryImage[]>(this.url_5);
  }
  getOtherImages(): Observable<OtherGalleryImage[]> {
    return this._http.get<OtherGalleryImage[]>(this.url_6);
  }

}
