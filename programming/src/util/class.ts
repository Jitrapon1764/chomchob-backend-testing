export class CommonClass {
    formatMoney(val: number, toFix?: any) {
        if (typeof (val) == 'number') {
            let fix = toFix || 3
            return (val).toFixed(fix).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        } else if (!val) {
            return '0.000'
        }
    }

    isEmpty(val:any) {
        let objTypeValidate = (val == 'undefined' || val == '' || val == undefined || val == null || val.length <= 0 || (typeof val == "object" && Object.keys(val).length == 0))
        return objTypeValidate
    }

}