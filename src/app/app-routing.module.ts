import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeModule } from './employees/employee.module'

const routesConfig: Routes = [
    { path: '', redirectTo: '/work', pathMatch: 'full' },
    { path: 'work', component: WorkComponent },
    { path: 'book', component: BookComponent },
    { path: 'customers-list', component: CustomerListComponent },
    { path: 'customers/add', component: CustomerComponent },
    { path: 'customers/edit/:id', component: CustomerComponent },
    { path: '**', component: PageNotFoundComponent }
];

import { WorkComponent } from './work/work.component';
import { BookComponent } from './book/book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';
@NgModule({
    declarations: [
        WorkComponent,
        BookComponent,
        CustomerListComponent,
        CustomerComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        EmployeeModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routesConfig),
        CommonModule
    ],
    exports: [RouterModule]
})

export class AppRoutingngModule { }
