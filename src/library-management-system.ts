import { book_obj } from "./book-obj";
import { user } from "./user";
import { shelf } from "./shelf";
export class library 
{
    shelf = new shelf();
    user1 = new user(
        Math.random(),
        0,
        "bugra",
        "cantepe",
        "05552155252",
        "bugracantepe@gmail.com");

    book1 = new book_obj(
        Math.random(),
        "Suç ve Ceza",
        "Türkiye İşbankası",
        "Fyodor Dostoyevski",
        "Kahramanın işlediği cifte cinayet üzerine yaşadıklarını konu alır",
        "Roman",
        1866);

}
export let libraryOBJ = new library();

class barkodReader 
{
    userExist: boolean;
    constructor(userExist: boolean){
        this.userExist=userExist;
    }
    cardRead(id: number) 
    {
        if (libraryOBJ.user1.id === libraryOBJ.user1.card.Userid) {
            console.log("log in success");
            this.userExist = true;
        }
    }
    kitapAlma() 
    {
        if (this.userExist) {
            console.log("book can takeble")
        }
    }
}