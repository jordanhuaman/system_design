export abstract class Beverage {

  private _description: string;
  private _price: number;
  private readonly BASE_PRICE = 12;

  constructor() {
    this._description = "Sturbucks coffe shoop",
      this._price = this.BASE_PRICE;
  }

  //? this abstrac class will be implemented for each class
  public abstract getDescription(): string;
  public abstract cost(): number;

  public get price(): number {
    return this._price;
  }
  public get description(): string {
    return this.description;
  }
}