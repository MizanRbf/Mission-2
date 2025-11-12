// set of fixed string leteral ek jaygay rakhe

enum userRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}
// type userRoles = "Admin" | "Editor" | "Viewer";

const canEdit = (role: userRoles) => {
  if (role === userRoles.Admin || role === userRoles.Editor) {
    return true;
  } else return false;
};

console.log(canEdit(userRoles.Admin));
