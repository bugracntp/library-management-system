import {book} from "./book";
export class book_obj implements book
{
    barkod: number;
    name: string;
    publish: string;
    writer: string;
    subject: string;
    title: string;
    publishingTime: number;
    constructor(barkod: number, name: string, publish: string, writer: string, subject: string, title: string, publishingTime: number)
    {
        this.barkod=barkod;
        this.name=name;
        this.publish=publish;
        this.writer=writer;
        this.subject=subject;
        this.title=title;
        this.publishingTime=publishingTime;
    }

}