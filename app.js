var app = angular.module('gamearena', ["ngRoute"]);

app.controller('gamecontrol',['$scope','$http',function($scope,$http){
$scope.pcGames=[];
$scope.playstationGames=[];
$scope.macGames=[];
$scope.gameboyGames=[];
$scope.dcGames=[];
$scope.ninGames=[];
$scope.xboxGames=[];
$scope.otherGames=[];
$scope.sortvalue= '-release_year';

$scope.sortby=function(svalue){
    $scope.sortvalue=svalue;
};

$http.get('http://starlord.hackerearth.com/gamesext')
    .error(function (data, status, headers, config) {
        alert('error');
    })
    .success(function (data, status, headers, config) {
        $scope.Games = data;
        angular.forEach($scope.Games, function (value,key){
        if(value.platform == "PC"){
        $scope.pcGames.push(value);
            }
        else if(value.platform == "PlayStation" || value.platform == "PlayStation 3" || value.platform == "PlayStation 4" || value.platform == "PlayStation Vita" ){
            $scope.playstationGames.push(value);
        }
         else if(value.platform == "iPhone" || value.platform == "iPad" || value.platform == "Macintosh" ){
            $scope.macGames.push(value);
        }
        else if(value.platform == "Game Boy" || value.platform == "Game Boy Color" || value.platform == "Game.com" ){
            $scope.gameboyGames.push(value);
        }
        else if(value.platform == "Dreamcast"){
            $scope.dcGames.push(value);
            }
        else if(value.platform == "Nintendo 64" || value.platform == "Nintendo 3DS" || value.platform == "Nintendo 64DD" || value.platform == "Nintendo DS"){
            $scope.ninGames.push(value);
            }
        else if(value.platform == "Xbox 360"){
            $scope.xboxGames.push(value);
            }
        else {
            $scope.otherGames.push(value);
            }
        });
    });
}]);