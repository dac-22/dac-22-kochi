async function getNumber() {
  // complex logic....
  return 100;
}

async function main() {
  let num = await getNumber();
  console.log("USING AWAIT", num);
}

function main1() {
  getNumber().then((data) => {
    console.log("USING THEN", data);
  });
}

main();
main1();
