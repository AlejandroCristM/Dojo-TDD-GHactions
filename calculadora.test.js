const cal = require('./calculator')

describe('Add Operator',()=>{
    test('adds 1 + 1 to equals 2',()=>{
        var result = cal.add(1,1);
        expect(result).toBe(2);
    })
    
    test('adds 2 + 2 to equals 4',()=>{
        var result = cal.add(2,2);
        expect(result).toBe(4);
    })  
})

describe('substract Operator',()=>{
    test('subs 2 - 1 to equals 1',()=>{
        var result = cal.substract(2,1);
        expect(result).toBe(1);
    })
    
    test('subs 8 - 2 to equals 6',()=>{
        var result = cal.substract(8,2);
        expect(result).toBe(6);
    })
})

/*se puede poner el test solo o el describe para agruparlos */
