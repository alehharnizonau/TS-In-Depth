/* eslint-disable no-redeclare,no-underscore-dangle */

import { Category } from './enums';

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;

  // markDamaged?: (reason: string) => void;
  // markDamaged?(reason: string): void;
  markDamaged?: DamageLogger;
}

interface DamageLogger {
  (reason: string): void;
}

interface A {
  a: number;
}

interface A {
  b: string;
}

interface B {
  b: number;
}

interface Person {
  name: string;
  email: string;
}

interface Author extends Person {
  numBooksPublished: number;
}

interface Librarian extends Person {
  department: string;
  assistCustomer: (castName: string, bookTitle: string) => void;
}

interface TOptions {
  duration?: number;
  speed?: number;
}

interface Magazine {
  title: string;
  publisher: string;
}

interface ShelfItem {
  title: string;
}

interface LibMrgCallback {
  (err: Error | null, titles: string[] | null): void;
}

interface Callback<T> {
  (err: Error | null, data: T | null): void;
}

export {
  A,
  B,
  Author,
  Book,
  DamageLogger as Logger,
  Librarian,
  Person,
  TOptions,
  Magazine,
  ShelfItem,
  LibMrgCallback,
  Callback
};