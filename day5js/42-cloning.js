function updateUser(p1) {
  p1.country = "ARG";
}

function main() {
  let user = { id: 1, name: "messi" };

  // CALL BY REF.
  updateUser(user);

  console.log(user);
}

main();
