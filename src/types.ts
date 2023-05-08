import { Author, Book, Person } from './interfaces';
import { createCustomer, getBooksByCategoryPromise } from './functions';

// type Book = {
//   id: number;
//   title: string;
//   author: string;
//   available: boolean;
//   category: Category;
// };

type BookProperties = keyof Book;
type PersonBook = Person & Book;
type BookOrUndefined = Book | undefined;
type BookRequiredFields = Required<Book>;
type UpdatedBook = Partial<Book>;
type AuthorWoEmail = Omit<Author, 'email'>;
type CreateCustomerFunctionType = typeof createCustomer;

type fn = (a: string, b: number, c: boolean) => symbol;
type Param1<T> = T extends (a: infer R, b: number, c: boolean) => symbol ? R : never;
type Param2<T> = T extends (a: string, b: infer R, c: boolean) => symbol ? R : never;
type Param3<T> = T extends (a: string, b: number, c: infer R) => symbol ? R : never;

type P1 = Param1<fn>;
type P2 = Param2<fn>;
type P3 = Param3<fn>;

type RequiredProps<T extends object> = {
  [prop in keyof T]: {} extends Pick<T, prop> ? never : prop
}[keyof T];

type OptionalProps<T extends object> = {
  [prop in keyof T]: {} extends Pick<T, prop> ? prop : never
}[keyof T];

type BookRequiredProps = RequiredProps<Book>;
type BookOptionalProps = OptionalProps<Book>;

type RemoveProps<T extends object, TProps extends keyof T> = {
  [prop in keyof T as Exclude<prop, TProps>]: T[prop]
};

type BookRequiredPropsType = RemoveProps<Book, BookOptionalProps>;
type BookOptionalPropsType = RemoveProps<Book, BookRequiredProps>;

type PropsByType<T extends object, U extends T[keyof T]> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K]
};

type AAA = PropsByType<Book, number | string>;
type AAB = PropsByType<Book, string>;


type Unpromisify<T> = T extends Promise<infer R> ? R : never;

type RetType = Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>;

export {
  BookProperties,
  PersonBook,
  BookOrUndefined,
  BookRequiredFields,
  UpdatedBook,
  AuthorWoEmail,
  CreateCustomerFunctionType
};