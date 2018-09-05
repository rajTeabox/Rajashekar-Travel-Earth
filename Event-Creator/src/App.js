(function () {
    "use strict";
    angular.module("Event.Calendar.App",[
        "ngRoute",
        "events-list",
        "create-event",
        "event-detail-view",
        "edit-event",
        "ui.router"
    ])

.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise( '/eventslist' );
    }])
        .controller("headerController",['$scope','$state', function ($scope,$state) {
            $scope.goToEventList = function () {
                $state.go("/eventslist");
            };
            $scope.createEvent = function () {
                $state.go("create-event");
            }
        }])
        .controller("CalendarAppController",function($scope,$http,$rootScope,$location){
        $scope.header_information = "Events";
    })

    .controller("viewCtrl", function ($scope) {
        $scope.msg = "These are the Events created";
    });
})();