'use strict';

import angular from 'angular';

export default class SignupController {
  user = {
    name: '',
    email: '',
    password: '',
    address: '',
    neighborhood: '',
    city: '',
    state: '',
    zip: '',
    cell: '',
    phone: '',
    gender: ''
  };
  errors = {};
  submitted = false;


  /*@ngInject*/
  constructor(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
  }

  register(form) {
    this.submitted = true;

    if(form.$valid) {
      return this.Auth.createUser({
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        address: this.user.address,
        neighborhood: this.user.neighborhood,
        city: this.user.city,
        state: this.user.state,
        zip: this.user.zip,
        cell: this.user.cell,
        phone: this.user.phone,
        gender: this.user.gender
      })
        .then(() => {
          // Account created, redirect to home
          this.$state.go('main');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};
          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });
    }
  }
}
