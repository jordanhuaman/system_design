/**
 * Similar to this class, we will have several classes similar to this, when we need to create another variant.
 * <p>This is called CLASS EXPLOSION</p>
 */

import { Beverage } from './Beverage';

export class HouseBlend extends Beverage {

  private readonly BLEND_PRICE = 15;

  constructor() { super() }

  public getDescription(): string {
    return "Sturbucks with Blende house";
  }

  public cost(): number {
    return this.price + this.BLEND_PRICE;
  }

}