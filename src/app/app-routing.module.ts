import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

const routesConfig: Routes = [
    {path: '', redirectTo: '/work', pathMatch: 'full'},
    {path: 'work', component: WorkComponent},
    {path: 'book', component: BookComponent},
    {path: 'user-form', component: UserFormComponent},
    {path: '**', component: PageNotFoundComponent}
  ];

import { WorkComponent } from './work/work.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [
    WorkComponent,
    BookComponent,
    UserFormComponent,
    PageNotFoundComponent
    ],
    imports: [
        RouterModule.forRoot(routesConfig), CommonModule
    ],
    exports: [RouterModule]
})

export class AppRoutingngModule {}
