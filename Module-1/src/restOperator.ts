// Rest Operator
const sendInvite = (...friends: string[]) => {
  friends.forEach((friend) => console.log(`sent invitation to ${friend}`));
};

sendInvite("Rakib", "Mahin", "Sakib", "Mizan");
