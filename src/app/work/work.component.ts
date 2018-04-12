import { Component } from '@angular/core';

@Component({
    templateUrl: './work.component.html',
    // tslint:disable-next-line:component-selector
    selector: 'work',
    styleUrls: ['./work.component.css']
  })

  export class WorkComponent {
    en = 'Hello';
    vn = 'Xin Chao';
    imageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
    forgot = true;
    // tslint:disable-next-line:one-line
    toggleForgot(){
      this.forgot = !this.forgot;
    }
  }
