import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component';
import { CustomerInformationService } from './customerinformation.service';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { CustomerexemptionselectionComponent } from './customerexemptionselection/customerexemptionselection.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchcustomerComponent },
  { path: 'create/:ein', component: CreatecustomerComponent },
  { path: 'create', component: CreatecustomerComponent },
  { path: 'treeview', component: TreeviewComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'exemption', component: CustomerexemptionselectionComponent },
  { path: '**', component: SearchcustomerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchcustomerComponent,
    CreatecustomerComponent,
    TreeviewComponent,
    CustomerexemptionselectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CustomerInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
