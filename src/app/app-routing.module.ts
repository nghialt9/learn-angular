import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeModule } from './employees/employee.module'
import { FormsModule } from '@angular/forms';

const routesConfig: Routes = [
    {path: '', redirectTo: '/work', pathMatch: 'full'},
    {path: 'work', component: WorkComponent},
    {path: 'book', component: BookComponent},
    {path: '**', component: PageNotFoundComponent}
  ];

import { WorkComponent } from './work/work.component';
import { BookComponent } from './book/book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [
    WorkComponent,
    BookComponent,
    PageNotFoundComponent
    ],
    imports: [
        EmployeeModule,
        FormsModule,
        RouterModule.forRoot(routesConfig),
        CommonModule
    ],
    exports: [RouterModule]
})

export class AppRoutingngModule {}
