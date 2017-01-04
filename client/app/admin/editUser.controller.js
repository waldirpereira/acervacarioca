'use strict';

export default class EditUserController {
  /*@ngInject*/
  constructor(Auth, $state, $stateParams, $http) {
    this.Auth = Auth;
    this.$state = $state;
    this.userId = $stateParams.userId;
    this.$http = $http;

    this.$http.get(`/api/users/user/${this.userId}`)
      .then(response => {
        this.user = response.data;
      });
  }

  getRoles() {
    return this.Auth.getRoles();
  }

  save(user) {
    this.$http.put(`/api/users/${this.userId}/edit`, user)
      .then(response => {
        this.$state.go('admin');
      });
  }
}
