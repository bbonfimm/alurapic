angular.
    module('alurapic').
    controller('FotoController', function ($scope) {

        $scope.foto = {};

        $scope.submeter = function() {
            console.log($scope.foto);
        };

    });

// Exemplo anterior de como foi feito Promise.
//     var promise = $http.get ('v1/fotos');
//     promise.then(function (retorno) {
//         $scope.fotos = retorno.data;
//     }).catch(function(error) {
//         console.log(error);
//     });
