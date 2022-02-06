
// testing syntax
// test('A string to describe the test', () =>{
//     expect(your function call here).toEqual(some value);
// });

// Tests can be grouped together 
// describe(')

const app = require("../app.js")

test('should return 5 when 2 and 3 are passed', () => {

    //assertions
    expect(app.add(2,3)).toEqual(5);
});

// test and it do the same thing
it('should contain tom', () => {

    //assertions
    expect(app.myArray).toContain('tom');
})

