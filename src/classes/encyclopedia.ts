/* eslint-disable no-underscore-dangle */
import { ReferenceItem } from './referenceItem';
import { positiveInteger } from "../decorators";

export default class Encyclopedia extends ReferenceItem {
  constructor(
    id: number,
    title: string,
    year: number,
    public edition: number
  ) {
    console.log('Creating a new Encyclopedia...');
    super(id, title, year);
  }

  private _copies: number;

  // @positiveInteger
  get copies(): number {
    return this._copies;
  }

  @positiveInteger
  set copies(value: number) {
    this._copies = value;
  }

  override printItem() {
    super.printItem();
    console.log(`Edition: ${this.edition} ${this.year}`);
  }

  printCitation() {
    console.log(`${this.title} - ${this.year}`);
  }
}