angular.module('example')
    .controller('Request', function($scope, $http) {
        $scope.request = function() {
            $http({
                url: 'http://localhost:3000/posts.json',
                method: "POST",
                data: {
                    name: "nuevo"
                }
            }).success(function(data, status, headers, config) {
                console.log("entre") // assign  $scope.persons here as promise is resolved here 
                console.log(data)
            }).error(function(data, status, headers, config) {
                console.log("bu")
                console.log(config)
            });
        }
    })