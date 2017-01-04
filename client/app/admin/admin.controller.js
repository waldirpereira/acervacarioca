'use strict';

export default class AdminController {
  /*@ngInject*/
  constructor(User, $state) {
    // Use the User $resource to fetch all users
    this.users = User.query();
    this.$state = $state;
  }

  delete(user) {
    user.$remove();
    this.users.splice(this.users.indexOf(user), 1);
  }

  edit(user) {
    this.$state.go('editUser', {user: user});
  }
}
