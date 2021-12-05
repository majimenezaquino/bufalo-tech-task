
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
    
    test("M2x2 should return  { x: '1', y: '0', countX: 2, countY: 2 }", () => {
        const arr =[ '00', '10']
        bD2 = new BulbDistribution(arr)
        expect(bD2.getBestPoint(arr)).toEqual({ x: '1', y: '0', countX: 2, countY: 2 });
    });

    test(" m2X3 should return  { x: '0', y: '1', countX: 3, countY: 2 }", () => {
        const arr =[ '00100', '00010' ]
        bD2 = new BulbDistribution(arr)
        expect(bD2.getBestPoint(arr)).toEqual({ x: '0', y: '1', countX: 3, countY: 2 });
    });

    test("M3x3: should return { x: '1', y: '2', countX: 3, countY: 3 }", () => {
        const arr =[ '001001', '100101' ,'000101']
        bD1 = new BulbDistribution(arr)
        expect(bD1.getBestPoint(arr)).toEqual({ x: '1', y: '2', countX: 3, countY: 3 });
    });

    test("M4X4 should return { x: '4', y: '0', countX: 2, countY: 4 }", () => {
        const arr =[ '0010011', '1101010' ,'1001010','0010011']
        bD1 = new BulbDistribution(arr)
        expect(bD1.getBestPoint(arr)).toEqual({ x: '4', y: '0', countX: 2, countY: 4 });
    });
    
});