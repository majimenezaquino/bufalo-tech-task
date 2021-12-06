
const BulbDistribution =require("../helpers/bulb_distribution")


// bDitribution = new BulbDistribution(rooms)
// console.log("shape",bDitribution.isValidShape())

describe('validate  if the matrix has special characters', () => {

    //validate  if the matrix has special characters
    test('should return true', () => {
        const arr =[ '0010010', '0001001', '0010011' ]
        bD1 = new BulbDistribution(arr)
        expect(bD1.isValidShape()).toBe(true);
    });

    test('should return false', () => {
        const arr =[ '0010010', '0003001', '0010011' ]
        bD1 = new BulbDistribution(arr)
        expect(bD1.isValidShape()).toBe(false);
    });
    
});

//get the best routes
describe('Get the best routes', () => {

    test("M4X4 should return { x: 5, y: 0, countX: 3, countY: 2 }", () => {
        const arr =[ '10011000', '11110010' , '11010101' ]
        bD1 = new BulbDistribution(arr)
        expect(bD1.getBestPoint(arr)).toEqual({ x: 5, y: 0, countX: 3, countY: 2 });
    });
    
});



describe('Draw bulbs', () => {

    test('should return true', () => {
        const arr =[ '10011000', '11110010' , '11010101' ]
        const arrResul =[ '10011***', '11110*10' , '11010101' ]
        bD1 = new BulbDistribution(arr)
        let point ={ x: 5, y: 0, countX: 3, countY: 2 }
        let arr2 =bD1.changeCharacterPosition(arr,point.x,point.y,'*',point.countX ,point.countY)
        expect(arr2).toEqual(arrResul)
    });
     

    
});