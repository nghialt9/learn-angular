import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'customers',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  title: string = "Add";
  id: number = 0;
  errorMessage: any;

  constructor(private _fb: FormBuilder,
    private _avRoute: ActivatedRoute,
    private _customerService: CustomerService) {
    if (this._avRoute.snapshot.params["id"]) {
      this.id = parseInt(this._avRoute.snapshot.params["id"]);
      console.log(this.id);
    }
    this.customerForm = this._fb.group({
      id: 0,
      name: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.pattern("[1-9][0-9]{9}")]],
      image: ''
    })
  }
  get name() { return this.customerForm.get('name'); }
  // similarly for address and phone
  get address() { return this.customerForm.get('address'); }
  get phone() { return this.customerForm.get('phone'); }
  save() {
    this.submitted = true;
    if (!this.customerForm.valid) {
      return;
    }

    this._customerService.saveCustomer(this.customerForm.value)
      .subscribe(custId => {
        //alert('Saved Successfully!')
        this._router.navigate(['customers', { id: custId }]);
      }, error => this.errorMessage = error)
  }

  cancel(){
    this._router.navigate(["customers", {id: this.id}]);
}
  // we will use it to load data for update
  ngOnInit() {
    if (this.id > 0) {
      this.title = 'Edit';
      this._customerService.getCustomerById(this.id)
        .subscribe(resp => this.customerForm.setValue(resp)
          , error => this.errorMessage = error);
    }
  }
}

