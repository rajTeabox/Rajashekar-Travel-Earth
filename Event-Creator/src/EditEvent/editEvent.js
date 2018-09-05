(function () {
    "use strict";
    angular.module("edit-event",["ui.router"])
        .config(['$stateProvider',function config($stateProvider) {
            $stateProvider.state('editevent', {
                url: '/edit-event/:id',
                templateUrl: 'EditEvent/editEvent.html',
                controller: 'EditEventController'
            });
        }])
        .controller("EditEventController",['$stateParams','listOfEvents','$scope','$state', function ($stateParams,listOfEvents,$scope,$state) {
            var events = listOfEvents.list;
            $scope.newEvent = {};
            angular.forEach(events,function (event) {
                if(event.id == $stateParams.id){
                    $scope.newEvent = event;
                }
            });
            $scope.updateEvent = function () {
                listOfEvents.update($scope.newEvent);
                $state.go("eventslist");
            }
        }])
})();