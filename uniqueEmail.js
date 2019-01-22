// Every email consists of a local name and a domain name, separated by the @ sign.

// For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.

// Besides lowercase letters, these emails may contain '.'s or '+'s.

// If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

// If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)

// It is possible to use both of these rules at the same time.

// Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails?

function numUniqueEmails(arr) {
  let newArr = arr.toString().split(',');
  const indexDomain = arr.map(e => e.indexOf('@'));
  const indexPlus = arr.map(e => e.indexOf('+'));
  let answer = [];
  for (let i = 0; i < newArr.length; i++) {
    let domain = arr.map(email => email.slice(indexDomain[i]));
    let localName = arr.map(email =>
      email.slice(0, indexPlus[i]).replace(/[.]/g, '')
    );
    let joined = `${localName[i]}${domain[i]}`;
    if (answer.indexOf(joined) === -1) {
      answer.push(joined);
    }
  }
  return answer.length;
}

console.log(
  numUniqueEmails([
    'test.email+alex@leetcode.com',
    'test.e.mail+bob.cathy@leetcode.com',
    'testemail+david@lee.tcode.com'
  ])
);

// Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails
