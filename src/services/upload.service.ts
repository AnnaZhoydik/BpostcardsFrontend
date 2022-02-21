import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class UploadService {
  constructor(private _http: HttpClient) {}

  uploadImage(vals: any): Observable<any> {
    // let headers = new HttpHeaders({'Content-Type':'multipart/form-data;'});
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    // headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    // headers.append('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    // return this._http.post('https://api.cloudinary.com/v1_1/annazhoydik/image/upload', vals, {headers: headers});
    // // return this._http.post('https://api.cloudinary.com/v1_1/annazhoydik/image/upload', vals);
    return this._http.post('cloudinary://168757552968833:RVApg_zTqFRToF98Px_3wHoXyYU@annazhoydik', vals);
  }
}

