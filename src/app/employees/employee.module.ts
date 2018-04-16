import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { UserFormComponent } from '../user-form/user-form.component';

const routesConfig: Routes = [
    {path: 'employee', component: EmployeeComponent},
    // {path: 'user-form', component: UserFormComponent}
  ];

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routesConfig)
    ],
    declarations: [EmployeeComponent,UserFormComponent]
})

export class EmployeeModule {}