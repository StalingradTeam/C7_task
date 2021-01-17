import { sum } from "../task.js";

xdescribe ("test of sum", () => {
    it ("adds 2+3 equal 5", () => {
        expect(sum(2, 3)).toBe(5);
    });
    it ("adds 7+2 equal 9", () => {
        expect(sum(7, 2)).toBe(9);
    });    
});