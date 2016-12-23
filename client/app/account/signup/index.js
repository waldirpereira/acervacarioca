'use strict';

import angular from 'angular';
import userField from '../../../components/userField/userField.directive';
import SignupController from './signup.controller';

export default angular.module('acervacariocameanApp.signup', [userField])
  .controller('SignupController', SignupController)
  .name;
