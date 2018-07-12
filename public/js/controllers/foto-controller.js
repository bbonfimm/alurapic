angular.module('alurapic').controller('FotoController', function ($scope, $http) {

    $scope.foto = {};

    $scope.submeter = function () {
        $http.post('v1/fotos', $scope.foto)
            .success(function () {
                $scope.foto = {};
                console.log('Enviado com sucesso!');
            })
            .error(function (erro) {
                console.log(erro);
            });
    };

});