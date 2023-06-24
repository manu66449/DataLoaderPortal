import { FileUploadService } from './../service/file-upload.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-patient',
  templateUrl: './upload-patient.component.html',
  styleUrls: ['./upload-patient.component.css'],
})
export class UploadPatientComponent implements OnInit {
  isFileSelected: boolean = false;
  file: any;
  constructor(private fileUploadService: FileUploadService) {}

  ngOnInit(): void {}

  selectFile(event: any) {
    console.log(event);
    this.file = event.target.files[0];
    if (this.file) this.isFileSelected = true;
  }

  uploadFile() {
    let formData = new FormData();
    formData.append('file', this.file);
    this.fileUploadService.uploadFile(formData).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
