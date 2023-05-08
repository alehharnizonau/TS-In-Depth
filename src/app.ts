import { logSearchResults } from './functions';
import { Category } from './enums';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// ====================================================


// Task 02.01, 02.02
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.Javascript));
// console.log(getBookAuthorByIndex(0));
// console.log(getBookAuthorByIndex(10));
// calcTotalPages();

// Task 03.01
// let myID: string = createCustomerID('Ann', 10);
// console.log(myID);
//
// let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof createCustomerID;

// idGenerator = (name: string, id: number) => `${id}-${name}`;
//
// const a = typeof 123;
// console.log(a);
//
// idGenerator = createCustomerID;
// console.log(idGenerator('Ann', 10));
//
// myID = idGenerator('Ann', 10);
// console.log(myID);

// Task 03.02

// createCustomer('Anna');
// createCustomer('Anna', 25);
// createCustomer('Anna', 25, 'Mogilev');
//
// const args: Parameters<typeof createCustomer> = ['Anna', 25, 'Mogilev'];
// createCustomer(...args);

// console.log(getBookTitlesByCategory());

// logFirstAvailable();
//
// console.log(getBookByID(1));

// const myBooks = checkoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);

// Task 03.03

// console.log(getTitles('Ann'));
// console.log(getTitles(true));
// console.log(getTitles(1, true));

// Task 03.04

// console.log(bookTitleTransform('typescript'));
// bookTitleTransform(123);

// Task 04.01

// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   // year: 2015,
//   // copies: 3
//   pages: 200,
//   markDamaged(reason: string) {
//     console.log(`Damaged: ${reason}`);
//   }
// };
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02

// const logDamage: Logger = (reason: string) => {
//   console.log(`Damaged: ${reason}`);
// };
// logDamage('1234');

// Task 04.03

// const favoriteAuthor: Author = {
//   name: 'anna',
//   email: 'anna@ex.com',
//   numBooksPublished: 2
// };
//
// const favoriteLibrarian: Librarian = {
//   name: 'Boris',
//   email: 'boris@ex.com',
//   department: 'Literature',
//   assistCustomer(custName: string, bookTitle: string): void {
//
//   }
// };

// Task 04.04

// const offer: any = {
//   book: {
//     title: 'Essential TypeScript',
//   },
// };
//
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// Task 04.05

// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

// Task 05.01

// const ref = new ReferenceItem(1, 'Leran Typescript', 2023);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc group';
// console.log(ref.publisher);
// console.log(ref.getId());

// Task 05.02, Task 05.03, 06.03

// const refBook = new RefBook(1, 'Learn Typescript', 2023, 2);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();
// printRefBook(refBook);
//
// const u1 = new UL.UniversityLibrarian();
// printRefBook(u1);

// Task 05.04

// const favoriteLibrarian: Librarian & B = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn typescript');

// Task 05.05
// const personBook: PersonBook = {
//   name: 'Anna',
//   email: 'anna@ex.com',
//   author: 'Anna',
//   category: Category.Angular,
//   id: 1,
//   title: 'unknown'
// };

// let o: TOptions = {
//   duration: 200
// };
// o = setDefaultConfig(o);
// console.log(o);

// Task 06.05
// const flag = true;

// if (flag) {
//   import('./classes')
//     .then(m => {
//       const reader = new m.Reader();
//       console.log(reader);
//     });
// }

// if (flag) {
//   const m = await import('./classes');
//       const reader = new m.Reader();
//       console.log(reader);
// }

// Task 06.06

// let lib: Library = new Library();

// let lib: Library = {
//   id: 1,
//   address: '123',
//   name: 'Oleg'
// };
//
// console.log(lib);

// Task 07.01
// const inventory: Book[] = [
//   { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//   { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//   { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//   { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];
//
// const r1 = purge(inventory);
// console.log(r1);
//
// const r2 = purge([1, 2, 3, 4]);
// console.log(r2);
//
// const purgeNumbers = purge<number>;
// purgeNumbers([1, 2, 3]);
// purgeNumbers(['', '']);

// Task 07.02

// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);
//
// const magazines: Magazine[] = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);

// Task 07.03

// magazineShelf.printTitles();

// const a = new Shelf<number>();
// console.log(magazineShelf.find('Five Points'));

// console.log(getObjectProperty(magazines[0], 'title'));

// Task 07.04
// const p1: BookRequiredFields = {
//   id: 1,
//   title: 'unknown',
//   author: 'Anna',
//   available: false,
//   category: Category.Angular,
//   pages: 100,
//   markDamaged: null
// };
//
// const p2: UpdatedBook = {
//   id: 1
// };
//
// const p3: Parameters<CreateCustomerFunctionType> = ['Anna', 40];
// const p4: Parameters<typeof createCustomer> = ['Anna', 40];
//
// createCustomer('Anna', 30,'Kiyv');
//
// createCustomer(...p3);

// Task 08.01, 08.02

// const ul = new UniversityLibrarian();
// console.log(ul);
// ul.name = 'Anna';
// ul['printLibrarian']();

// (ul as UniversityLibrarian & {printLibrarian: any}).printLibrarian();

// UniversityLibrarian['ccc']= 'ccc';
// Object.getPrototypeOf(ul)['DDD'] = 'ddd';

// Task 08.03

// const proto = Object.getPrototypeOf(ul);
// console.log(proto);
//
// proto['assistFaculty'] = null;
// proto['teachCommunity'] = null;

// Task 08.04

// const enc = new RefBook(1, 'Learn Typescript', 2023, 2);
//
// enc.printItem();

// Task 08.05, 08.06

// const ul = new UniversityLibrarian();
// ul.name = 'Anna';
// ul.assistCustomer('Boris', 'Learn Typescript');
// console.log(ul);

// Task 08.07

// const enc = new RefBook(1, 'Learn Typescript', 2023, 2);
//
// enc.copies = -4.5;

// Task 09.01
// console.log('Begin');
// getBooksByCategory(Category.Javascript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02
// console.log('Begin');
// getBooksByCategoryPromise(Category.Javascript)
//   .then(titles => {
//     console.log(titles);
//     return Promise.resolve(titles.length);
//   })
//   .then(count => {
//     console.log(count);
//   })
//   .catch(err => console.log(err));
//
// getBooksByCategoryPromise(Category.Software)
//   .then(titles => console.log(titles))
//   .catch(err => console.log(err));
// console.log('End');

// Task 09.03
// console.log('Begin');
// logSearchResults(Category.Software)
//   .then(console.log)
//   .catch(console.log);
// console.log('End');

