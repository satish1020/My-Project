import { CustomerInformationService } from '../customerinformation.service';
import { ICustomer } from '../ICustomer';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, Input, OnChanges, Inject,OnInit } from '@angular/core';
import { FormArray, Validators, FormBuilder, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {

  customer: ICustomer;
  createCustomerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private customerinformationservice: CustomerInformationService) {
  }
  createForm() {
    this.createCustomerForm = this.formBuilder.group({
      entityName: ['', [Validators.required, Validators.maxLength(40)]],
      ein: ['', [Validators.required, Validators.maxLength(20)]],
      ubo: ['', Validators.required],
      classificationCode: ['', [Validators.required, Validators.maxLength(50)]],
      formationZipCode: ['', [Validators.required, Validators.maxLength(10), validateZIP()]],
      formationCountryCode: ['', Validators.required],
      businessZipCode: ['', Validators.required],
      businessCountryCode: ['', Validators.required],
      permenantZipCode: ['', Validators.required],
      permenantCountryCode: ['', Validators.required],
      status: ['', Validators.required],
      lineOfBusiness: ['', Validators.required]
    });
  }



  ngOnInit() {
    this.createForm();
    let ein: string =
      this.route.snapshot.params['ein'];
    console.log(ein);
    this.customerinformationservice.getCustomerInfo(ein).subscribe(
      (customerData) => {
        if (customerData == null) {
          console.log('Employee with the specified Employee Code does not exist');
        }
        else {
          this.customer = customerData;
          this.setCreateCustomerFormData();
        }
      },
      (error) => {
        console.log("Problem with the service. Please try again after sometime");
        console.log(error);
      }
    );
  }


  goToCustomersSearch(): void {
    this.router.navigate(['\search'])
  }

  onSubmit() {
    this.customer = this.prepareSaveCustomer();
    this.customerinformationservice.SaveCustomer(this.customer);
    this.ngOnChanges();
  }

  prepareSaveCustomer(): ICustomer {
    const custModel = this.createCustomerForm.value;

    const saveCust: ICustomer = {
      entityName: custModel.entityName as string,
      ein: custModel.ein as string,
      ubo: custModel.ubo as string,
      classificationCode: custModel.classificationCode as string,
      businessCountryCode: custModel.businessCountryCode as string,
      businessZipCode: custModel.businessZipCode as string,
      formationCountryCode: custModel.formationCountryCode as string,
      formationZipCode: custModel.formationZipCode as string,
      lineOfBusiness: custModel.lineOfBusiness as string,
      permenantCountryCode: custModel.permenantCountryCode as string,
      permenantZipCode: custModel.permenantZipCode as string,
      status: custModel.status as string,

    };

    return saveCust;
  }

  ngOnChanges() {
    this.setCreateCustomerFormData();
  }


  setCreateCustomerFormData(): void {
    this.createCustomerForm.setValue({
      entityName: this.customer.entityName,
      ein: this.customer.ein,
      ubo: this.customer.ubo,
      classificationCode: this.customer.classificationCode,
      formationZipCode: this.customer.formationZipCode,
      formationCountryCode: this.customer.formationCountryCode,
      businessZipCode: this.customer.businessZipCode,
      businessCountryCode: this.customer.businessCountryCode,
      permenantZipCode: this.customer.permenantZipCode,
      permenantCountryCode: this.customer.permenantCountryCode,
      status: this.customer.status,
      lineOfBusiness: this.customer.lineOfBusiness
    });
  }

  cancel(): void {
    this.ngOnChanges();
  }

}
function validateZIP(): ValidatorFn {

  return (c: AbstractControl): { [key: string]: boolean } | null => {

    let res = /(^\d{5}$)|(^\d{10}$)|(^\d{5}-\d{4}$)/.test(c.value);

    if (res == false) {
      return { 'validateZIP': true }
    }
    return null;
  };
}
