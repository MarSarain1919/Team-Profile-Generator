const Manager = require("../lib/Manager");

test("set office number", () => {
    const officeHolder = 500;
    const newGuy = new Manager("Gonzo", 0, "myname@email.com", officeHolder);
    expect(newGuy.officeNumber).toBe(officeHolder);
});

test("getRole()", () => {
    const testVal = 'Manager';
    const newGuy = new Manager("Gonzo", 0, "myname@email.com", 500);
    expect(newGuy.getRole()).toBe(testVal);
});

test("getOffice()", () => {
    const officeHolder = 500;
    const newGuy = new Manager("Gonzo", 0, "myname@email.com", officeHolder);
    expect(newGuy.getOffice()).toBe(officeHolder);
});