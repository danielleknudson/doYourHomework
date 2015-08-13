homework.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'AssignmentsController',
      templateUrl: '../views/assignments.html',
    })
    .when('/home', {
      controller: 'AssignmentsController',
      templateUrl: '../views/assignments.html',
    })
    .when('/assignment_submissions', {
      controller: 'SubmissionController',
      templateUrl: '../views/submissions.html',
    })
    .otherwise ({redirectTo: '/'});
});
