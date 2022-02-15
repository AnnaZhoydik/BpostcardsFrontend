import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { HttpResponse } from "@angular/common/http";

@Injectable()
export class UploadService {
  constructor(private _http: HttpClient) {


  }

  uploadImage(vals: any): Observable<any> {
    return this._http.post('https://api.cloudinary.com/v1_1/annazhoydik/image/upload', vals);
  }
}

