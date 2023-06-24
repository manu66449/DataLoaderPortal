import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(private _http: HttpClient) {}

  uploadFile(formData: FormData) {
    return this._http.post<any>(`localhost:8081/load/patientdata`, formData);
  }
}
