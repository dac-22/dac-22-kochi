import { readFile } from "node:fs/promises";

async function main() {
  let filePath = "/Users/research/Desktop/dac-22/dac-22-kochi/day2/1.html";
  let output = await readFile(filePath);
  console.log(output);
}

main();
