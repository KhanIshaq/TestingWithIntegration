const {sum, product} = require('./sketch');

test ('adds 1 + 2 to equal 3', () => {

    expect(sum(1,2)).toBe(3);

});

test ('product 1 * 2 equals 2', () => {

    expect(product(1,2)).toBe(2);
    
});


// test('adds 1 + 2 to equal 3', sumTest);

// function sumTest(){
//     expect(sum(1,2)).toBe(3);
// }
