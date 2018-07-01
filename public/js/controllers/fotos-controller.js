angular.
    module('alurapic').
        controller('FotosController', function ($scope, $http) {

    $scope.fotos = [];
    $http.get('v1/fotos')
        .success(function (fotos) {
            $scope.fotos = fotos;
        })
        .error(function (erro) {
            console.log(erro);
        });
});

// Exemplo anterior de como foi feito Promise.
//     var promise = $http.get ('v1/fotos');
//     promise.then(function (retorno) {
//         $scope.fotos = retorno.data;
//     }).catch(function(error) {
//         console.log(error);
//     });

