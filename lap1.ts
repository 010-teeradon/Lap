interface PaymentMethod{
    pay():void;
}
class PaymentMethod implements PaymentMethod{
    constructor(private cradit:number,private money:number){}
    pay():void{
        return console.log(`ชำระเงิน ${this.money} โดยใช้บัตรเครดิตหมายเลข ${this.cradit}`);
    }
}
const Cradit=new PaymentMethod(321,500);
Cradit.pay();

