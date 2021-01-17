import { reverseStr } from "../../utils/reverseStr.js";

describe("test for reverseStr function", () => {
    it("reverse_string 'str' is 'rts'", () => {
        expect(reverseStr("str")).toBe("rts");
        expect(reverseStr("string")).toBe("gnirts");
    });
});