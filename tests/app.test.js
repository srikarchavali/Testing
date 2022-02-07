
// testing syntax
// test('A string to describe the test', () =>{
//     expect(your function call here).toEqual(some value);
// });

// Tests can be grouped together 
// describe(')

const app = require("../app")

// test('should return 5 when 2 and 3 are passed', () => {

//     //assertions
//     expect(app.add(2,3)).toEqual(5);
// });

// // test and it do the same thing
// it('should contain tom', () => {

//     assertions
//     expect(app.myArray).toContain('tom');
// })

test("returns a non null value", () => {
    expect(app.notNull()).not.toBeNull;
  });

  test("checks if a value is True", () => {
    expect(app.isTrue()).toBeTruthy;
  });

  test("Object's  two expected values (hello, world)", () => {
    expect(app.object("hello", "world")).toHaveProperty("val1", "hello");
    expect(app.object("hello", "world")).toHaveProperty("val2", "world");
  });

  test("return array items with 6 or more charecters", () => {
    expect(app.array(['hi', 'adwferg', 'chgxdytyu'])).toHaveLength(6);
  });

  test(`5 becomes "5"`, () => {
    expect(app.numToStr(5)).toBe("5");
  });

  test("third planet is earth", () => {
    expect(app.planet(3)).toBe("Earth");
  });

  test("there are three students in class", () => {
    expect(app.students([true, true, true, false, false])).toBe(3);
  });

  test("sqrDigits 25 = 425", () => {
    expect(app.sqrDigits(25)).toBe(425);
  });

  // test('Array of names only contains "Stephanie"', () => {
  //   success = ["Stephanie"];
  //   expect(
  //     app.onlyItemsOfnLength(["cath", "jess", "gorb", "Stephanie"])
  //   ).toEqual(success);
  // });


  // test("1705 was in the 17th century", () => {
  //   expect(app.centuryOf(1705)).toBe(17);
  // });

  // test("[0,1,0,0] translates to 4", () => {
  //   expect(app.binaryArrayToInt([0, 1, 0, 0])).toBe(4);
  // });
