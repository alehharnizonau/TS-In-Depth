/* eslint-disable no-redeclare,no-underscore-dangle */

import * as Interfaces from '../interfaces';
import { logger, logMethod, logParameter, writable } from '../decorators';

// @sealed('UniversityLibrarian')
// @logger

class UniversityLibrarian implements Interfaces.Librarian, Interfaces.B {
  name: string;
  email: string;
  department: string;

  a: string = 'A';
  b: number = 100;

  @logMethod
  assistCustomer(@logParameter custName: string, @logParameter bookTitle: string): void {
    console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
  }

  // @writable(true)
  assistFaculty(): void {
    console.log('Assisting faculty');
  }

  // @writable(false)
  teachCommunity(): void {
    console.log('Teaching community');
  }
}

export {
  UniversityLibrarian
};