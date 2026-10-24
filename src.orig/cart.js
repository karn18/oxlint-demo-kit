// cart.js — โค้ดตัวอย่างที่ตั้งใจให้มีปัญหา สำหรับสาธิต Oxlint
var TAX_RATE = 0.07;
const DEBUG = true;

function total(items, coupon) {
  var sum = 0;
  let count = 0;
  const unused = 42;
  for (const item of items) {
    sum += item.price * item.qty;
  }
  if (sum == NaN) {
    return 0;
  }
  if (!!coupon) {
    sum = sum - coupon.amount;
  }
  debugger;
  if (DEBUG) console.log("total:", sum);
  return sum * (1 + TAX_RATE);
}

export { total };
