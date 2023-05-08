import { ShelfItem } from '../interfaces';

export default class Shelf<in out T extends ShelfItem> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  getFirst(): T {
    return this.items[0];
  }

  find(title: string): T {
    return this.items.find(item => item.title === title);
  }

  printTitles(): void {
    this.items.forEach(item => console.log(item.title));
  }
}

// export class Shelf2 {
//   private items: Book[] | Magazine[] = [];
//
//   add(item: Book & Magazine) {
//     this.items.push(item);
//   }
//
//   getFirst(): T {
//     return this.items[0];
//   }
// }