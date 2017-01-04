'use strict';

import angular from 'angular';
import routes from './admin.routes';
import AdminController from './admin.controller';
import EditUserController from './editUser.controller';

export default angular.module('acervacariocameanApp.admin', ['acervacariocameanApp.auth',
  'ui.router'
])
  .config(routes)
  .controller('AdminController', AdminController)
  .controller('EditUserController', EditUserController)
  .name;
