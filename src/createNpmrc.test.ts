import { readFileSync } from "fs";
import createNpmrc from "../src/createNpmrc";

describe("createNpmrc", () => {
    it("Should create a file in the proper location with the correct token", async () => {
        const aDifferentLocation = "./test-scratch";

        await createNpmrc("TESTTOKEN", aDifferentLocation);

        const npmrc = readFileSync(`${aDifferentLocation}/.npmrc`, {
            encoding: "utf-8",
        });
        expect(npmrc.endsWith("TESTTOKEN")).toBeTruthy();
    });
});
