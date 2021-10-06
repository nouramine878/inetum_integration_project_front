import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { SessionManService } from 'src/app/services/session-man.service';
import { product } from 'src/model/product';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';
import { ExcelService } from 'src/app/services/excel.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @ViewChild('content', { static: false }) el!: ElementRef;

  dataToBind: any[] = [];

  idCategory: any;

  currentProduct!: product;

  currentName: string = '';
  currentQuantity: string = '';
  currentId: any;
  productToUpdate!: product;
  addProduct: boolean = false;
  filename : string ="productToExcel"

  constructor(
    private router: ActivatedRoute,
    private productService: ProductService,
    private sessionMan : SessionManService,
    private excelService:ExcelService
  ) {}

  ngOnInit(): void {
    this.idCategory = this.router.snapshot.params.id;
    this.getProduct(this.idCategory);
  }

  getProduct(id: any) {
    this.productService.loadProduct(id).subscribe((data: product[]) => {
      this.dataToBind = data;
      console.log(this.dataToBind);
    });
  }

  getCurrentProductInformation(id: number) {
    this.productService.getSpecificProduct(id).subscribe((data: product) => {
      this.currentId = data.id;
      this.currentName = data.name;
      this.currentQuantity = data.quantity;
    });
    console.log('current id is' + id);
  }
  updateChange() {
    this.productService
      .updateProduct(this.currentId, this.currentName, this.currentQuantity)
      .subscribe();

      this.ngOnInit
    console.log('product updatet successefuly');
  }

  removeProduct(id: any) {
    this.productService.deleteProduct(id);
    window.location.reload();
  }

  openNewForm() {
    this.addProduct = true;
  }

  addNewProduct() {
    this.productService
      .addProduct(this.idCategory, this.currentName, this.currentQuantity)
      .subscribe();
      this.ngOnInit
    console.log(this.idCategory + this.currentName + this.currentQuantity);
    setTimeout(() => {
      this.addProduct = false;
      this.getProduct
    }, 1500);
  }

  generateNewPdf() {
    console.log('printing a new pdf');
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save('productlist.pdf');
      },
    });
  }

  logOut() {
    this.sessionMan.signOut();
  }

/*
  exportexcel(): void
  {

    let element = document.getElementById('content');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    
 
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
 
    
    XLSX.writeFile(wb, this.filename);
 
  }*/

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.dataToBind, 'myExcelFile');
 }
}
