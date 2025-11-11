// Spread Operator

// In Array
const friends = ["Mahfuz", "Rakib"];
const schoolFriends = ["Tonmoy", "Mahmudul"];
const collageFriends = ["Rifat", "Safin"];

friends.push(...schoolFriends);
friends.push(...collageFriends);
console.log(friends);

// In Object

const user = {
  name: "Mizan",
  home: "Dhaka",
};
const otherInfo = {
  hobby: "Journey",
  phone: "01488888888",
};

const userInfo = { ...user, ...otherInfo };
console.log(userInfo);
