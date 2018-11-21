import { Component, OnInit } from '@angular/core';
import { Supplier } from '../models/Supplier';
import { SupplierService } from '../services/suppliers.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

 
  constructor(private _supplierService:SupplierService) { 

  }
  public supplierObj : Supplier = new Supplier;
  ngOnInit() {
    

    this._supplierService.getSupplierName()
    // clone the data object, using its known Config shape
    .subscribe((data: Supplier) => this.supplierObj = { ...data });
    console.log("Testing:  "+this.supplierObj.Name);
  }

}
