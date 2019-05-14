const userType = {
  employee: 0.3,
  affiliate: 0.1,
  customerOverTwoY: 0.05
}

//data structure
const bill = {
  uses: {
    isEmployee: true,
    isAffiliate: true,
    isCustomerOverTwoY: true
  },
    items: [
      {
        id: 1,
        price: 20,
        isGroceries: true,
        quality: 3
      },
      {
        id: 2,
        price: 25,
        quality: 1
      },
      {
        id: 3,
        price: 50,
        quality: 5
      },
      {
        id: 4,
        price: 90,
        isGroceries: true,
        quality: 3
      }
    ]
}

function typeItem(items) {
  let totalDiscount = 0;
  let totalNoDiscount = 0;
  items.forEach(item => {
    const payItem = item.quality * item.price
    item.isGroceries ? (totalDiscount += payItem) : (totalNoDiscount += payItem)
  })
  return {
    totalDiscount,
    totalNoDiscount
  }
}

function calculateBill(bill) {
  const { totalDiscount, totalNoDiscount } = typeItem(bill.items);
  const total = totalDiscount + totalNoDiscount;
  let discountBaseUserType = 0;
  let toPay = total;
  if (bill.user.isEmployee) {
    discountBaseUserType = totalDiscount * userType.employee
    toPay -= discountBaseUserType;
  } else if (bill.user.isAffiliate) {
    discountBaseUserType = totalDiscount * userType.affiliate;
    toPay -= discountBaseUserType;
  } else if (bill.user.isCustomerOverTwoY) {
    discountBaseUserType = totalDiscount * userType.customerOverTwoY
    toPay -= discountBaseUserType;
  }
  const discountbaseBill = Math.floor(toPay / 100) * 5;
  toPay -= discountbaseBill;
  return {
    total,
    discount: discountbaseBill + discountBaseUserType,
    toPay
  };
}

module.exports = { calculateBill }