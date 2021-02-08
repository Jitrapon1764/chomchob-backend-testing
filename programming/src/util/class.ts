export class CommonClass {
    formatMoney(val: number,toFix?:any) {
        let fix = toFix || 3
        return (val).toFixed(fix).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

}