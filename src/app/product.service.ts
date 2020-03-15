import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable()
export class ProductService {
  constructor(private _http: Http) {}

  _albumUrl = "../assets/album.json";

  getAlbum(id: number) {
    return this._http
      .get(this._albumUrl)
      .pipe(map(response => response.json()));
  }
}
