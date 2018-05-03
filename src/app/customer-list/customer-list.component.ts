import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'customers-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private _customerService: CustomerService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  customers: Array<any> = [];
  errorMessage: any;
  currentId: number = 0;

  getCustomers() {
    this._customerService.getCustomers().subscribe(
      data => this.customers = data,
      error => { debugger;
        this.errorMessage = error
      }
    )
  }

  add() {
    this._router.navigate(['customers/add']);
  }

  edit(id) {
    this._router.navigate(['customers/edit/' + id])
  }

  delete(id) {
    var ans = confirm("Do you want to delete customer with Id: " + id);
    if (ans) {
      this._customerService.deleteCustomer(id)
        .subscribe(data => {
          var index = this.customers.findIndex(x => x.id == id);
          this.customers.splice(index, 1);
        }, error => this.errorMessage = error)
    }
  }

  ngOnInit() {
    this.getCustomers()
    if (this._activatedRoute.snapshot.params["id"])
      this.currentId = parseInt(this._activatedRoute.snapshot.params["id"]);
  }

}
