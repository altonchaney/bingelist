angular.module('bingelist-directives', [])

.directive('episode', function () {
    return {
        restrict: 'E',
        scope: {
            content: '='
        },
        link: function (scope) {
            if (scope.content < 10) {
                scope.zero = "0";
            } else {
                scope.zero = "";
            }
        },
        template: '{{zero}}{{content}}'
    };
})

//date parser
.directive('dateToISO', function() {
    return  function(input) {
       var dateTime = input.split(" ");
       var date = dateTime[0];
       var datePartials = date.split("-");
       var time = dateTime[1];
       var timePartials = time.split(":");
       var formattedDate = new Date();
       formattedDate.setFullYear(datePartials[0]);
       formattedDate.setMonth(datePartials[1]-1);
       formattedDate.setDate(datePartials[2]);
       formattedDate.setHours(timePartials[0]);
       formattedDate.setMinutes(timePartials[1]);
       return formattedDate;
    };
});