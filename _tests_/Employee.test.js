const Employee = require("../lib/Employee");

// Creating placeholder content that will change into user input content
describe("Employee", () => {
    it("can indicate a new hired employee", () => {
        const newGuy =  new Employee();
        expect(typeof(newGuy)).toBe("object");
    });

    it("can set name", () => {
        const name = "Gonzo";
        const newGuy = new Employee(name);
        expect(newGuy.name).toBe(name)
    });

    it("can set an id", () => {
        const idHolder = 0;
        const newGuy = new Employee(idHolder);
        expect(newGuy.idHolder).toBe("Gonzo", idHolder);
    });

    it("can set an email address", () => {
        const emailHolder = "myname@email.com";
        const newGuy = new Employee(emailHolder);
        expect(newGuy.emailHolder).toBe("Gonzo", 0, emailHolder);
    });

    describe("getName", () => {
        it("can get the employee name with getName()", () => {
            const nameHolder = 'Gonzo';
            const newGuy = new Employee(nameHolder);
            expect(newGuy.getName()).toBe(nameHolder);
        });
    });

    describe("getId", () => {
        it("can get the employee id with getId()", () => {
            const idHolder = '0';
            const newGuy = new Employee("Gonzo", idHolder);
            expect(newGuy.getId()).toBe(idHolder);
        });
    });
    
    describe("getEmail", () => {
        it("can get the employee email with getEmail()", () => {
            const emailHolder = 'myname@email.com';
            const newGuy = new Employee("Gonzo", 0, emailHolder);
            expect(newGuy.getId()).toBe(emailHolder);
         });
    });
    describe("getRole", () => {
        it("can get the employee role with getRole()", () => {
            const roleHolder = '0';
            const newGuy = new Employee("Gonzo", 0, "myname@email.com", roleHolder);
            expect(newGuy.getId()).toBe(roleHolder);
        });

    });

});
