'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('admin', {
    url: '/admin',
    template: require('./admin.html'),
    controller: 'AdminController',
    controllerAs: 'admin',
    authenticate: 'admin'
  })
  .state('editUser', {
    url: '/editUser/:userId',
    template: require('./editUser.html'),
    controller: 'EditUserController',
    params: { user: null },
    controllerAs: 'ctrl',
    authenticate: 'admin'
  });
}
