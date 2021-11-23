import { libraryOBJ } from "./library-management-system";
export class card
{
    maxDay: number;
    Userid: number;
    payment: boolean;
    constructor (Userid:number)
    {
        this.Userid=Userid;
    }

    bookrezervation(barkod: number)
    {
        if (libraryOBJ.book1.barkod === barkod) 
        {
            console.log("kitap rezervasyonu başarılı.");
        }
    }

    takeBook(barkod: number)
    {
        if (libraryOBJ.user1.id === barkod) 
        {
            console.log("kitap alma işlemi başarılı.");
            this.maxDay=10;
        }
    }

    returnBook(day: number)
    {
        if (this.maxDay > day) 
        {
            console.log("kitap teslim işleminiz başarılı.");
            this.payment=false;
        }
        else
        {
            console.log("Gecikme ücretini yatırlmalısınız.");
            this.payment=true;
        }
    }
    
}
