'use strict';


angular.module('hApp')
.controller('highChartsController', function ($scope, $timeout, $http) {
    $scope.chartConfig = {
        options: {
          
            chart: {
                
                backgroundColor: 'rgba(0,0,0, .2)',
                zoomType: 'x'
            },
            rangeSelector : {
                allButtonsEnabled: true,
                buttons: [{
                    type: 'month',
                    count: 3,
                    text: 'Day',
                    dataGrouping: {
                        forced: true,
                        units: [['day', [1]]]
                    }
                }, {
                    type: 'year',
                    count: 1,
                    text: 'Week',
                    dataGrouping: {
                        forced: true,
                        units: [['week', [1]]]
                    }
                }, {
                    type: 'all',
                    text: 'Month',
                    dataGrouping: {
                        forced: true,
                        units: [['month', [1]]]
                    }
                }],
                buttonTheme: {
                    width: 60
                },
                selected: 2,

                zoomType: 'x'
            },
            
            navigator: {
                enabled: true
            }
        },
        series: [],
        title: {
            text: 'Stock Price'
        },
        useHighStocks: true
    }
    $scope.input = '';
    $scope.dol = ["aapl"];
    $scope.cache = [];
    
    
    $scope.deleteStock = function(e) {
   var index = $scope.dol.indexOf(e);
   
   $scope.dol.splice(index, 1);
         $scope.chartConfig.series.pop();
        
    }
    
    
    
    $scope.submitNew = function() {
        if ($scope.input === "" ) {
            return;
        }
        if ($scope.dol.indexOf($scope.input) !== -1) {
            return;
        }
        $scope.dol.push($scope.input);
        $scope.cache.push($scope.input);
        
        
        
        $http.jsonp("https://www.highcharts.com/samples/data/jsonp.php?filename="+$scope.cache[0].toLowerCase()+"-c.json&&callback=JSON_CALLBACK")
.success(function(data){
    

    
     if(!data){
         console.log("no Data");
         if($scope.dol.length > 1){
             $scope.dol.pop();
             console.log($scope.dol);
             console.log($scope.dol.length);
             $scope.cache = [];
         }
          $scope.cache=[];
          $scope.input = '';  
    return;
         
     }
     $scope.chartConfig.series.push({
        name:$scope.cache[0].toLowerCase(),
        data: data
    });
    $scope.input = '';  
     $scope.cache= [];
    
}).error(function(err){
    console.log(err);
    $scope.input = '';  
    $scope.dol.pop();
    return;
});
        
       
    }
    
    
    
   


    
    $http.jsonp('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&&callback=JSON_CALLBACK')
.success(function(data){
    
    console.log(data);
    
   $scope.chartConfig.series.push({
        name:'aapl',
        
        data: data
    });
   
});



  /*  {
        id: 2,
        data: [
            [1147651200000, 25.15],
            [1147737600000, 25.01],
            [1147824000000, 25.73],
            [1147910400000, 25.83],
            [1147996800000, 25.56],
            [1148256000000, 25.88],
            [1148342400000, 25.79],
            [1148428800000, 25.50],
            [1148515200000, 26.74],
            [1148601600000, 26.72],
            [1148947200000, 26.15],
            [1149033600000, 26.65]
        ]

    }*/

    

});
