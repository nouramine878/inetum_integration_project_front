import { Timestamp } from 'rxjs';
import { product } from './product';

export class category {
  public id: number;
  public name: string;
  public madeDate: Date;
  public updateDate: Date;
  listOfProduct: product[];

  constructor(
    id: number,
    name: string,
    madeDate: Date,
    updateDate: Date,
    listOfProduct: product[]
  ) {
    this.id = id;
    this.name = name;
    this.madeDate = madeDate;
    this.updateDate = updateDate;
    this.listOfProduct = listOfProduct;
  }
}
