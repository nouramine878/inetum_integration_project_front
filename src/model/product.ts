export class product {
  public id: number;
  public name: string;
  public quantity: string;
  public disponibility: boolean;
  public madeDate: Date;
  public updateDate: Date;

  constructor(
    id: number,
    name: string,
    quantity: string,
    disponibility: boolean,
    made_date: Date,
    update_date: Date
  ) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.disponibility = disponibility;
    this.madeDate = made_date;
    this.updateDate = update_date;
  }
}
