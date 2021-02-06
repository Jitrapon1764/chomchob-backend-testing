"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonClass = void 0;
class CommonClass {
    formatMoney(val) {
        return (val).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
}
exports.CommonClass = CommonClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLFdBQVc7SUFDcEIsV0FBVyxDQUFDLEdBQVc7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUNKO0FBSkQsa0NBSUMifQ==