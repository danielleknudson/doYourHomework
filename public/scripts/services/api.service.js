homework.service('API', function ($http, $q) {
  var context = this;
  context.baseURL = 'http://localhost:8080';

  context.getAssignments = function () {
    var defer = $q.defer();

    $http.get(context.baseURL + '/assignments')
      .success(function (response) {
        defer.resolve(response);
      })
      .error(function (error) {
        defer.reject(error);
      });

    return defer.promise;
  };

  context.getSubmissions = function (id) {
    var defer = $q.defer();
    var endpoint = (id) ? context.baseURL + '/submissions?assignment_id=' + id : context.baseURL + '/submissions';

    $http.get(endpoint)
      .success(function (response) {
        defer.resolve(response);
      })
      .error(function (error) {
        defer.reject(error);
      });

    return defer.promise;
  };
  
  return context;
});