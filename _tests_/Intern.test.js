const Intern = require("../lib/Intern");

test("set Intern school", () => {
    const schoolHolder = "UCSD";
    const newGuy = new Intern("Gonzo", 0, "myname@email.com", schoolHolder);
    expect(newGuy.school).toBe(schoolHolder);
});

test("getRole()", () => {
    const testVal = "Intern";
    const newGuy = new Intern("Gonzo", 0, "myname@email.com", "UCSD");
    expect(newGuy.getRole()).toBe(testVal);
});

test("getSchool()", () => {
    const schoolHolder = "UCSD";
    const newGuy = new Intern("Gonzo", 0, "myname@email.com", schoolHolder);
    expect(newGuy.getSchool()).toBe(schoolHolder);
});