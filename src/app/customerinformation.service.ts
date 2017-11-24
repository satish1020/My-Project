import { Injectable } from '@angular/core';
import { ICustomer } from './ICustomer';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/observable/of';

@Injectable()
export class CustomerInformationService {

  Customers: ICustomer[];


  constructor() {
    this.Customers = [
      {
        "ein": "113-45-8291",
        "entityName": "Leaf Rake",
        "ubo": "123-45-678",
        "classificationCode": "GDN-0011",
        "formationZipCode": "March 19, 2016",
        "formationCountryCode": "Leaf rake with 48-inch wooden handle.",
        "businessZipCode": "57107",
        "businessCountryCode": "12345",
        "permenantZipCode": "53145",
        "permenantCountryCode": "67890",
        "status": "Complete",
        "lineOfBusiness": "Equipment Finance"
      },
      {
        "ein": "123-45-8291",
        "entityName": "afdsafds fadsfads",
        "ubo": "123-45-679",
        "classificationCode": "GDN-0011",
        "formationZipCode": "March 19, 2016",
        "formationCountryCode": "Leaf rake with 48-inch wooden handle.",
        "businessZipCode": "57107",
        "businessCountryCode": "12345",
        "permenantZipCode": "53145",
        "permenantCountryCode": "67890",
        "status": "InProcess",
        "lineOfBusiness": "Inventory Finace (Non Deposit)"
      },
      {
        "ein": "137-45-8291",
        "entityName": "afdsafds fadsfads",
        "ubo": "123-45-679",
        "classificationCode": "GDN-0011",
        "formationZipCode": "March 19, 2016",
        "formationCountryCode": "Leaf rake with 48-inch wooden handle.",
        "businessZipCode": "57107",
        "businessCountryCode": "12345",
        "permenantZipCode": "53145",
        "permenantCountryCode": "67890",
        "status": "InProcess",
        "lineOfBusiness": "Inventory Finace (Non Deposit)"
      },
      {
        "ein": "148-45-8291",
        "entityName": "afdsafds fadsfads",
        "ubo": "123-45-679",
        "classificationCode": "GDN-0011",
        "formationZipCode": "March 19, 2016",
        "formationCountryCode": "Leaf rake with 48-inch wooden handle.",
        "businessZipCode": "57107",
        "businessCountryCode": "12345",
        "permenantZipCode": "53145",
        "permenantCountryCode": "67890",
        "status": "InProcess",
        "lineOfBusiness": "Inventory Finace (Non Deposit)"
      },
      {
        "ein": "150-45-8291",
        "entityName": "afdsafds fadsfads",
        "ubo": "123-45-679",
        "classificationCode": "GDN-0011",
        "formationZipCode": "March 19, 2016",
        "formationCountryCode": "Leaf rake with 48-inch wooden handle.",
        "businessZipCode": "57107",
        "businessCountryCode": "12345",
        "permenantZipCode": "53145",
        "permenantCountryCode": "67890",
        "status": "InProcess",
        "lineOfBusiness": "Inventory Finace (Non Deposit)"
      }
    ];
  }

  //getCustomers(): ICustomer[] {

  //    return this.Customers;
  //}

  getCustomers() { return this.Customers; }

  getCustomer(ein: string) {
    return this.Customers.find(cus => cus.ein === ein);
  }

  //getHeroes() { return Observable.of(this.Customers); }

  //getHero(id: string) {
  //    console.log("Getting Cusstomer");
  //    return this.getHeroes()
  //        // (+) before `id` turns the string into a number
  //        .map(heroes => heroes.find(hero => hero.EIN === id));
  //}

  getCustomersInfo() { return Observable.of(this.Customers); }

  getCustomerInfo(ein: string) {
    console.log("Getting Cusstomer");
    return this.getCustomersInfo()
      // (+) before `id` turns the string into a number
      .map(customer => customer.find(item => item.ein === ein));
  }

  SaveCustomer(customer: ICustomer) {
    let customerIn = this.Customers.find(cus => cus.ein === customer.ein);
    let index = this.Customers.indexOf(customerIn);
    if (index > -1) {
      this.Customers[index] = customer;
    } else {
      this.Customers.push(customer);
    }
  }
}
