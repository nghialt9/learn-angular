import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CustomerService {
    baseUrl: string = 'http://localhost:9355/api/customer/'

    constructor(private _http: Http) { }

    getCustomers() {
        return this._http.get(this.baseUrl + 'getcustomers')
            .map((response: Response) => response.json())
            .catch(this._errorHandler);
    }

    _errorHandler(error: Response) {
        debugger;
        console.log(error);
        return Observable.throw(error || "Internal server error");
    }

    // add a method in customer.service.ts file like this:  
    getCustomerById(id) {
        return this._http.get(this.baseUrl + "GetCustomerById/" + id)
            .map((response: Response) => response.json())
            .catch(this._errorHandler)
    }

    saveCustomer(customer) {
        let options = new RequestOptions(
            { headers: this.getContentHeaders()});
        return this._http.post(this.baseUrl + 'savecustomer', customer, options)
            .map((response: Response) => response.json())
            .catch(this._errorHandler)
    }

    deleteCustomer(id) {
        return this._http.delete(this.baseUrl + "DeleteCustomer/" + id)
            .map((response: Response) => response.json())
            .catch(this._errorHandler)
    }

    getContentHeaders() {
        const contentHeaders = new Headers();
        contentHeaders.append('Content-Type', 'application/json');
        contentHeaders.append('Accept', 'application/json');
      
        contentHeaders.append('Access-Control-Allow-Origin', this.baseUrl);
        contentHeaders.append('Access-Control-Allow-Credentials', 'true');

        contentHeaders.append('Access-Control-Allow-Methods', 'OPTIONS');
        contentHeaders.append('Access-Control-Allow-Methods', 'PUT');
        contentHeaders.append('Access-Control-Allow-Methods', 'POST');
        contentHeaders.append('Access-Control-Allow-Methods', 'GET');
        contentHeaders.append('Access-Control-Allow-Methods', 'DELETE');
        return contentHeaders;
    }

}