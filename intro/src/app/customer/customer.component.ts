import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  customers: Customer[] = []

  ngOnInit() {
    this.customers = [
      { id: 1, firstName: "Eser", lastName: "Kuru", age: 28 },
      { id: 2, firstName: "Gizem", lastName: "Çakar", age: 28 },
    ]
  }

  selectedCustomer:Customer
  onSelect(customer: Customer): void {
    this.selectedCustomer = customer
  }

}
