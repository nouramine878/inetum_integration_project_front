import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ExcelService } from 'src/app/services/excel.service';
import { SessionManService } from 'src/app/services/session-man.service';
import { category } from 'src/model/category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  dataToBind: any[] = [];
  idCat: string = '';
  currentName: string = '';
  currentId : any
  openForm: boolean = false;
  filename : string = "excelFile"
  constructor(
    private router: ActivatedRoute,
    private routerNavigation: Router,
    private categoryService: CategoryService,
    private sessionMan : SessionManService,
    private excelService : ExcelService
  ) {}

  ngOnInit(): void {
    this.categoryService.loadAllCategory().subscribe((data: category[]) => {
      this.dataToBind = data;
    });
  }

  moveToProduct(id: any) {
    this.idCat = id;
    this.routerNavigation.navigate(['/dashboard/product/' + id]);
  }

  getCategoryDetail(id: any) {
    this.categoryService
      .getCategoryInformation(id)
      .subscribe((data: category) => {
        this.currentName = data.name;
        this.currentId = data.id
        console.log(this.currentName);
      });
  }
  gotolist(){
    this.routerNavigation.navigate(["/dashboard"])
  }
  removeCategory(id: any) {
    this.categoryService.deleteCategory(id);
     this.categoryService.loadAllCategory().subscribe((data: category[]) => {
        this.dataToBind = data;
      });
  }

  addCategory() {
    this.openForm = true;
  }

  addNewCategory(){
    this.categoryService.addCategory(this.currentName).subscribe();
    console.log("category added succesuufuly")
    setTimeout(() => {
      this.openForm = false
      this.categoryService.loadAllCategory().subscribe((data: category[]) => {
        this.dataToBind = data;
      });
    }, 1500);
  }
  

  updateCtegory(){
   this.categoryService.updateCategory(this.currentId,this.currentName).subscribe()
  console.log(this.currentId)
  }

  logOut(){
    this.sessionMan.signOut();
  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.dataToBind, 'myExcelFile');
 }
/*
  exportexcel(): void
  {

    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
   
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
   
    XLSX.writeFile(wb, this.filename);
 
  }
*/
}
