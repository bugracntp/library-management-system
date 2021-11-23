import { book } from "./book";
import { libraryOBJ } from "./library-management-system";

export class shelf 
{
    catalog= new catalog();
    catalogEkle(catalog: catalog){
        this.catalog=catalog;
        console.log("books are lined up");
    }
}

class catalog
{
    addBook(book: book){
        libraryOBJ.book1=book;
        console.log("books are classification.");
    }
}