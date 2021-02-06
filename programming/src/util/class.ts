export class CommonClass {
    formatMoney(val: number) {
        return (val).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
}