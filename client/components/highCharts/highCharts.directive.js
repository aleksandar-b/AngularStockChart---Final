'use strict';

angular.module('hApp')
 .directive('highCharts', function () {
    return {
      templateUrl: 'components/highCharts/highCharts.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
        console.log(scope);
        console.log(element);
        
        element[0].children[0].onclick = function(){
          element.addClass('klas');
          element[0].children[0].children[0].children[0].children[1].children[0].children[17].style.fill = 'white';
     
      var t = element[0].children[0].children[0].children[0].children[1].children[0].children[18].children;
      for(var i = 0; i<7; i++){
        
        t[i].style.fill = 'white';
      }
      console.log(element);
     
     
        }
     /*   
       // var t = Array.from(element[0].children[0].children[0].children[0].children[1].children[0].children[17].children);
     // console.log(t);
     */
   
   
   
   
   
 /*
 Array.from(element[0].children[0].children[0].children[0].children[1].children[0].children[18].children).forEach(function(val){       
   
       val.style.fill = 'white';
    
       
     // element[0].children[0].children[0].children[0].children[1].children[0].children[18][0].style.fill = 'white';
     
      });
      */
      },
    controller: 'highChartsController',
  
    controllerAs: 'chart'
    
    };
  });

