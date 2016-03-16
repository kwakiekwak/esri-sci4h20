angular.module('userApp')
  .controller('MainController', function($scope, $location, Auth) {

    var vm = this;

    vm.hello = "hello"

    // get info if a person is logged in
    vm.loggedIn = Auth.isLoggedIn();

    // check to see if a user is logged in on every request
    $scope.$on('$routeChangeStart', function() {
      vm.loggedIn = Auth.isLoggedIn();

      // get user information on route change
      Auth.getUser()
        .success(function(data) {
          vm.user = data;
        });
    });

    // function to handle login form
    vm.doLogin = function() {

      // call the Auth.login() function
      Auth.login(vm.loginData.email, vm.loginData.password)
        .success(function(data) {
          console.log(data)

          // if a user successfully logs in, redirect to users page
          $location.path('/home');
        });
    };

    // function to handle logging out
    vm.doLogout = function() {
      Auth.logout();
      // reset all user info
      vm.user = {};
      $location.path('/login');
    };

    // $scope.myInterval = 3000;
    //   $scope.slides = [
    //     {
    //       image: 'http://lorempixel.com/400/200/'
    //     },
    //     {
    //       image: 'http://lorempixel.com/400/200/food'
    //     },
    //     {
    //       image: 'http://lorempixel.com/400/200/sports'
    //     },
    //     {
    //       image: 'http://lorempixel.com/400/200/people'
    //     }
    //   ];
  });
