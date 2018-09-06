(function () {
    'use strict';
    angular.module("events-list",["ui.router"])
        .factory("listOfEvents",[function () {
        var getRandomColor = function () {
        return {
                  background: '#' + Math.floor(Math.random()*16777215).toString(16)
              }
          };
            var events = {};
            events.list = [
                {id : 1,name : "event1",start_date : "Sep 22, 2018", end_date : "Sep 22, 2018",location : "bangalore",desc : "Come and join us for our weekly coffee morning.","bgcolor": getRandomColor()},
                {id : 2,name : "event2",start_date : "Sep 24, 2018", end_date : "Sep 22, 2018",location : "bangalore",desc : "Come and join us for our weekly coffee morning.","bgcolor": getRandomColor()},
                {id : 3,name : "event3",start_date : "Sep 24, 2018", end_date : "Sep 22, 2018",location : "bangalore",desc : "Come and join us for our weekly coffee morning.","bgcolor": getRandomColor()},
                {id : 4,name : "event4",start_date : "Sep 25, 2018", end_date : "Sep 22, 2018",location : "bangalore",desc : "Come and join us for our weekly coffee morning.","bgcolor": getRandomColor()},
                {id : 5,name : "event5",start_date : "Sep 26, 2018", end_date : "Sep 22, 2018",location : "bangalore",desc : "Come and join us for our weekly coffee morning.","bgcolor": getRandomColor()}
            ];
            events.create = function (event) {
                events.list.push(event);
            };
            events.update = function (event) {
               this.delete(event.id);
               this.create(event);
            }
            events.delete = function (id) {
                angular.forEach(events.list, function (listEvent,key) {
                   if(listEvent.id === id){
                       events.list.splice(key,1);
                   }
                });
            }
            return events;
        }])
        .config(['$stateProvider',function config($stateProvider) {
            $stateProvider.state('eventslist', {
                url: '/eventslist',
                templateUrl: 'templates/main.htm',
                controller: 'EventsListController'
            });
        }])
        .controller("EventsListController", ['$state','$scope','listOfEvents','$location', function ($state,$scope,listOfEvents,$location) {
                // search function

                $scope.SearchEvent=function(){
                    $scope.UserSearch=$scope.eventSearch;


                }
          $scope.eventsList =   listOfEvents.list;
          $scope.goToViewEvent = function (event) {
         //   $location.path("/view-event").search({param : event.id})
            $state.go("viewevent",{'event' : event,'id' : event.id});
          }
        }])

})();