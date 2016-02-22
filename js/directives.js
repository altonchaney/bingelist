angular.module('bingelist-directives', [])


//episode stuff
.directive('episodeDetails', function($animate){
  return {
    scope: true,
    templateUrl:'episodeDetails.html',
    link: function(scope, elem, attrs){
      scope.viewDetails = true;
      elem.find('button').bind('click', function(){
        $animate.addClass(elem, "switching", function(){
          scope.viewDetails = !scope.viewDetails;
          scope.$apply();
          elem.removeClass("switching");
        });
      });
    }
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