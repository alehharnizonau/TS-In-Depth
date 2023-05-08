/* eslint-disable no-redeclare,no-underscore-dangle */


import { timeout } from "../decorators";

abstract class ReferenceItem {
  // title: string;
  // year: number;
  //
  // constructor(newTitle: string, newYear: number) {
  //   console.log('Creating a new ReferenceItem...');
  //   this.title = newTitle;
  //   this.year = newYear;
  // }


  static department: string = 'Literature';
  #id: number;

  constructor(
    id: number,
    public title: string,
    protected year: number
  ) {
    console.log('Creating a new ReferenceItem...');
    this.#id = id;
  }

  private _publisher: string;

  get publisher(): string {
    return this._publisher.toUpperCase();
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }

  getId() {
    return this.#id;
  }

  @timeout(5000)
  printItem() {
    console.log(`${this.title} was published in ${this.year}`);
    console.log(ReferenceItem.department);
    console.log(Object.getPrototypeOf(this).constructor.department);
  }

  abstract printCitation(): void;
}

export { ReferenceItem };
