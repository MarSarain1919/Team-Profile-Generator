const Engineer = require("../lib/Engineer");

test("set gitHub username", () => {
    const gitHolder = "myGitHub123";
    const newGuy = new Engineer("Gonzo", 0, "myname@email.com", gitHolder);
    expect(newGuy.github).toBe(gitHolder);
});

test("getRole()", () => {
    const testVal = 'Engineer';
    const newGuy = new Engineer("Gonzo", 0, "myname@email.com", "myGitHub123");
    expect(newGuy.getRole()).toBe(testVal);
});

test("get gitHub username with getGithub()", () => {
    const gitHolder = "myGitHub123";
    const newGuy = new Engineer("Gonzo", 0, "myname@email.com", gitHolder);
    expect(newGuy.getGithub()).toBe(gitHolder);
});