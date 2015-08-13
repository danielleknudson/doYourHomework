homework.controller('AssignmentsController', function ($scope, API) {
  $scope.scope = {};
  $scope.scope.loading = true;
  $scope.scope.assignmentDisplay = 'description';
  $scope.scope.selectedAssignmentSubmissions = [];

  $scope.scope.viewAssignment = function (assignment) {
    console.log('viewAssignment');
    $scope.scope.selectedAssignment = assignment;
    $scope.scope.assignmentDisplayToggle('description');
    $scope.scope.selectedAssignmentSubmissions = [];
    $scope.scope.getSubmissions(assignment.id);
  };

  $scope.scope.assignmentDisplayToggle = function (str) {
    $scope.scope.assignmentDisplay = str;
  };

  $scope.scope.getSubmissions = function (id) {
    for (key in $scope.scope.submissions) {
      if ($scope.scope.submissions[key].assignment_id === id) {
        $scope.scope.selectedAssignmentSubmissions.push($scope.scope.submissions[key]); 
        $scope.scope.submissions[key].displaySubmission = false;
        console.log($scope.scope.submissions[key])
      }
    }
  };

  $scope.scope.toggleStudentSubmission = function (submission) {
    console.log('in toggleStudentSubmission')
    submission.displaySubmission = !submission.displaySubmission;
  };

  var init = function () {
    API.getAssignments()
      .then(function (response) {
        $scope.scope.assignments = response;
        $scope.scope.selectedAssignment = response[0];
        
        API.getSubmissions()
          .then(function (response) {
            $scope.scope.submissions = response;
            $scope.scope.getSubmissions($scope.scope.selectedAssignment.id);
            $scope.scope.loading = false;
          }, function (error) {
            return error;
          });
      }, function (error) {
        return error;
      });
  };

  init();
});