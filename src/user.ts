import { card } from "./library-card";
import { libraryOBJ } from "./library-management-system";

let ACCOUNT_TYPE: string;
let Userid: number;

export class user 
{
    accountType = ["uye", "yonetici"];
    id: number;
    name: string;
    surname: string;
    phone: string;
    email: string;

    constructor(id: number, accountType: number, name: string, surname: string, phone: string, email: string) 
    {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.email = email;

        Userid = this.id;
        ACCOUNT_TYPE = this.accountType[accountType];
    }

    card = new card(Userid);

    delayPenatly(odemeSekli: string) 
    {
        if (libraryOBJ.user1.card.returnBook) 
        {
            this.paymentType(odemeSekli);
        }
        else 
        {
            console.log("Ceza Ödemenize gerek yok.")
        }
    }

    paymentType(odemeSekli: string) 
    {
        if (odemeSekli === "kart") 
        {
            console.log("Kart bilgilerinizi giriniz.")
        }
        else if (odemeSekli === "nakit") 
        {
            console.log("Görevli memura ücretinizi teslim ediniz.");
        }
    }

}