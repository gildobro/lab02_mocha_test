var expect    = require("chai").expect;
var calculator = require("../app/calculator");


describe("Number Calculator", () => {
    describe("Addition", () =>{
        it("Adds variables", () =>{
            var correct = calculator.add(5, 2);
    
            expect(correct).to.equal(7);
        });
    });
    describe("Addition", () =>{
        it("Adds variables", () =>{
            var incorrect = calculator.add(5, 2);
    
            expect(incorrect).to.equal(8);
        });
    });
    describe("Subtraction", () =>{
        it("Subs variables", () =>{
            var correct = calculator.sub(5, 2);
    
            expect(correct).to.equal(3);
        });
    });
    describe("Subtraction", () =>{
        it("Subs variables", () =>{
            var incorrect = calculator.sub(5, 2);
    
            expect(incorrect).to.equal(5);
        });
    });
    describe("Multiplication", () =>{
        it("Multiplies variables", () =>{
            var correct = calculator.mul(5, 2);
    
            expect(correct).to.equal(10);
        });
    });
    describe("Multiplication", () =>{
        it("Multiplies variables", () =>{
            var incorrect = calculator.mul(5, 2);
    
            expect(incorrect).to.equal(12);
        });
    });
    describe("Division", () =>{
        it("Divides variables", () =>{
            var correct = calculator.div(10, 2);
    
            expect(correct).to.equal(5);
        });
    });
    describe("Division", () =>{
        it("Divides variables", () =>{
            var incorrect = calculator.div(10, 2);
    
            expect(incorrect).to.equal(2);
        });
    });
});