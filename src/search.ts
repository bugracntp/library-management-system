import { libraryOBJ } from "./library-management-system";
import { book } from "./book";

class search{
    search(book: book){
        if (libraryOBJ.user1.name==book.name) {
            console.log("Book is founded")
        }
    }
}