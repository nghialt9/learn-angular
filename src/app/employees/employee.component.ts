import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Employee } from '../model/employees.model';

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html'
})

export class EmployeeComponent {
    ID:string;
    Name:string;
    Sex:string;
    Image:string;
    forgot:boolean = false;
    hideSaveButton:boolean = true;
    hideDeleteButton:boolean = false;
    
    receiveEmployee($event) {
        this.ID = $event.ID;
        this.Name = $event.Name;
        this.Sex = $event.Sex;
        this.Image = $event.ImagePath;
    }
    toogleForgot(){
        this.forgot = false;
    }
}