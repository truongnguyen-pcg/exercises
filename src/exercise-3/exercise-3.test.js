const { calculateBill } = require("./exercise-3");

const bill = {
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
};

describe("test calculate bill base on condition", () => {
  it("should 30% discount when user is an employee of the store", () => {
    const expected = { total: 605, discount: 124, toPay: 481 };
    const billMock = { ...bill, user: {
      isEmployee: true,
    }}
    expect(calculateBill(billMock)).toEqual(expected);
  });

  it("should 10% discount when user is an affiliate of the store", () => {
    const expected = { total: 605, discount: 58, toPay: 547, };
    const billMock = { ...bill, user: {
      isAffiliate: true,
    }}
    expect(calculateBill(billMock)).toEqual(expected);
  });

  it("should 5% discount when user has been a customer for over 2 years", () => {
    const expected = { total: 605, discount: 41.5, toPay: 563.5, };
    const billMock = { ...bill, user: {
      isCustomerOverTwoY: true,
    }}
    expect(calculateBill(billMock)).toEqual(expected);
  });

  it("should 30% discount when user is an employee of the store and an affiliate of the store", () => {
    const expected = { total: 605, discount: 124, toPay: 481 };;
    const billMock = { ...bill, user: {
      isAffiliate: true,
      isEmployee: true,
    }}
    expect(calculateBill(billMock)).toEqual(expected);
  });

  it("should For every $100 on the bill, there would be a $ 5 discount but user is not an employee, an affiliate and a customer for over 2 years", () => {
    const expected = { total: 605, discount: 30, toPay: 575 };;
    const billMock = { ...bill, user: {}}
    expect(calculateBill(billMock)).toEqual(expected);
  });

  it("should no discount", () => {
    const expected = { total: 80, discount: 0, toPay: 80 };;
    const billMock = { ...bill, user: {}, items: [
      {
        id: 1,
        price: 20,
        isGroceries: true,
        quality: 3
      },
      {
        id: 1,
        price: 20,
        quality: 1
      },
    ]}
    expect(calculateBill(billMock)).toEqual(expected);
  });
});
