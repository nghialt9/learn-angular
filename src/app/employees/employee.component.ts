import { Component, ViewChild, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Employee } from '../model/employees.model';
import { FileDetector } from 'protractor';
import { FILE } from 'dns';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html'
})

export class EmployeeComponent {
    ID:string;
    Name:string;
    Sex:string;
    Image:string;
    forgot:boolean = true;
    hideSaveButton:boolean = true;
    hideDeleteButton:boolean = false;
    hideForm:boolean = true;
    hideImageEdit:boolean = true;
    Logo:string;
    EmpImageFile: File;
    @ViewChild('EmpImage') Emp_Image;

    receiveEmployee($event) {
        this.ID = $event.ID;
        this.Name = $event.Name;
        this.Sex = $event.Sex;
        this.Image = $event.ImagePath;
    }

    Edit(){
        this.forgot = false;
        this.hideSaveButton = false;
        this.hideDeleteButton = true;
        this.hideImageEdit = false;
    }

    receiveValueBoolean(event){
        this.forgot = event;
        this.hideForm = false;
        this.hideSaveButton = true;
        this.hideDeleteButton = false;
    }

    changeLogo(e){
        let filePath = e.target.value;
        let temp:string [] = filePath.split('\\');
        this.Logo = temp[temp.length-1]
        const File = this.Emp_Image.nativeElement;
          if (File.files && File.files[0]) {
              this.EmpImageFile = File.files[0];
          }
          const EmpImageUploadFile: File = this.EmpImageFile;
    }
}