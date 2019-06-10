// Unique Email Addresses
// LeetCode (Easy)
// Amazon, Google

const numUniqueEmails = emails => {
  let set = new Set();

  emails.forEach(em => {
    let parts = em.split("@");
    let local = parts[0].replace(/\./g, "").split("");
    let email = "";

    for (let ch of local) {
      if (ch === "+") break;
      email += ch;
    }

    set.add(`${email}@${parts[1]}`);
  });

  return set.size;
};

let test1 = numUniqueEmails([
  "alice.fds+56fsa@lee.df.com",
  "ali..ce.f.ds+45f+sa@lee.df.com",
  "ali..cefdas.f.ds+44f+sa@lee.df.com"
]);

console.log(test1);
