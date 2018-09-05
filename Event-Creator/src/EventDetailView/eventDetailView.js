(function () {
    "use strict";
    angular.module("event-detail-view",['ui.router'])
        .config(['$stateProvider',function config($stateProvider) {
            $stateProvider.state('viewevent', {
                url: '/event/:id',
                templateUrl: 'EventDetailView/view_event.htm',
                controller: 'eventDetailViewController'
            });
        }])
        .controller("eventDetailViewController",['$stateParams','listOfEvents','$scope','$state', function ($stateParams,listOfEvents,$scope,$state) {
            var eventsList = listOfEvents.list;
            angular.forEach(eventsList,function (event) {
                if(event.id == $stateParams.id){
                    $scope.event = event;
                }
            });
            $scope.editEvent = function () {
                $state.go("editevent",{'id' : $scope.event.id});
            }
            $scope.deleteEvent = function () {
                listOfEvents.delete($scope.event.id);
                $state.go("eventslist");
            };
        }])
})();