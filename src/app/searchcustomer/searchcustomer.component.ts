import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomerInformationService } from '../customerinformation.service';
import { ICustomer } from '../ICustomer';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.component.html',
  styleUrls: ['./searchcustomer.component.css']
})
export class SearchcustomerComponent implements OnInit {
  searchText: string = "";
  _customers: ICustomer[];

  selectedSearchRadioButtonValue: string = "EIN";

  searchCustomerForm: FormGroup;

  radioItems0 = { value: "0", text: "EIN" }
  radioItems1 = { value: "1", text: "ENAME" }
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private customerinformationservice: CustomerInformationService) { }

  ngOnInit() {
    this.searchCustomerForm = this.formBuilder.group({
      searchText: this.formBuilder.control(''),
      selectedSearchRadioButtonValue: this.formBuilder.control({})
    });
  }

    onSearchButtonClick() {
      this._customers =
        this.customerinformationservice.getCustomers().filter(c => this.searchCustomerForm.value.searchText != "" && (
          (this.searchCustomerForm.value.selectedSearchRadioButtonValue.text == "EIN" && c.ein.indexOf(this.searchCustomerForm.value.searchText) > -1) ||
          (this.searchCustomerForm.value.selectedSearchRadioButtonValue.text == "ENAME" && c.entityName.indexOf(this.searchCustomerForm.value.searchText) > -1) ||
          (this.searchCustomerForm.value.selectedSearchRadioButtonValue.text == "UBO" && c.ubo.indexOf(this.searchCustomerForm.value.searchText) > -1)
        ));
    }
  }

