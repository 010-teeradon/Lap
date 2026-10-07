abstract class ShippingCalculator{
    constructor(public money:number){}
    wegith(wegith:number){
        console.log(`คำนวนค่าจัดส่ง ${wegith}`);
    }
}
class StandardShipping extends ShippingCalculator{
    constructor(public money:number ,private kiro:number){super(money);}
    wegith(wegith: number) {
        return this.money + (wegith * this.kiro);
    }
}
class ExpressShipping extends ShippingCalculator{
    constructor(public money:number,private speed:number){super(money)}
    wegith(wegith: number) {
        return this.money + (wegith * 20 * this.speed);
    }
}
const stand=new StandardShipping(150,11);
const exress=new ExpressShipping(150,2);
console.log(`ค่าส่งตามน้ำนหนัก ${stand.wegith(200)} ค่าเพิ่มความเร็วในการส่ง ${exress.wegith(200)}`);
