import fs from "fs";

import test from "ava";

import { toMarkDown } from "../src/render.js";

async function readFixture(name) {
  return await fs.promises.readFile("./test/fixtures/" + name, "utf8");
}

test("Can render a JSON schema to markdown (default)", async (t) => {
  const input = await readFixture("input.json");
  const expected = await readFixture("output.md");
  const result = await toMarkDown(input);
  t.is(result, expected);
});