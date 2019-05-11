import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GalleryImage } from '../gallary/models/galleryImage.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private _url : string ="../../assets/data/image.json";

  constructor(private _http : HttpClient){

  }
  getImage(): Observable<GalleryImage[]> {
      return this._http.get<GalleryImage[]>(this._url);
  }

  // Get coupon from database by id
  // coupon: any;

  // getcouponbyId(Id:number){
  //   this.http.get('http://localhost:51850/api/CouponsRegistration/{Id}'+Id).subscribe(req=>this.coupon=req);
  //   return this.coupon;
  // }
}
