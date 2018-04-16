import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Employee } from '../model/employees.model';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { UserFormComponent } from '../user-form/user-form.component';
import { NgModule } from '@angular/core';

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html'
})

@NgModule({
    declarations: [
        UserFormComponent
    ]
})

export class EmployeeComponent implements OnInit {
    employee: any;
    constructor(private route: ActivatedRoute) { }
    id: string;
    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.id = params.get('id');
        });
    }
    receiveEmployee($event) {
        this.employee = $event;
    }
}