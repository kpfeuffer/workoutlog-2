import {getComplementaryColor, Colors} from "./button";
import React from "react";

test("complementary color for primary as string to be secondary", ()=> {
    const result = getComplementaryColor(Colors.primary);
    expect(result).not.toBeNull();
    expect(result).not.toBe("#000");
    expect(result).toBe(Colors.secondary);
});

test("complementary color for primary as object to be secondary", ()=> {
    const result = getComplementaryColor({color:Colors.primary});
    expect(result).not.toBeNull();
    expect(result).not.toBe("#000");
    expect(result).toBe(Colors.secondary);
});

test("complementary color for secondary to be primary", ()=> {
    const result = getComplementaryColor(Colors.secondary);
    expect(result).not.toBeNull();
    expect(result).not.toBe("#000");
    expect(result).toBe(Colors.primary);
});

test("complementary color for tertiary to be primary", () => {
    const result = getComplementaryColor(Colors.tertiary);
    expect(result).not.toBeNull();
    expect(result).not.toBe("#000");
    expect(result).toBe(Colors.primary);
})