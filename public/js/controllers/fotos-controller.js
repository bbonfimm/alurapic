angular.
    module('alurapic').
    controller('FotosController', function ($scope, $resource) {

        var recursoFoto = $resource('/v1/fotos/:fotoId');
        $scope.fotos = [];
        $scope.filtro = '';
        $scope.mensagem = '';

        recursoFoto.query(function(fotos) {
            $scope.fotos = fotos;
        }, function(erro) {
            console.log(erro);
        });
        /*     $http.get('v1/fotos')
        .success(function (fotos) {
            $scope.fotos = fotos;
        })
        .error(function (erro) {
            console.log(erro);
        }); */
        $scope.remover = function (foto) {
            recursoFoto.delete({fotoId: foto._id}, function() {
                var indiceDaFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indiceDaFoto, 1);
                $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
            }, function(erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
            });
            /* $http.delete('v1/fotos/' + foto._id)
            .success(function() {
                var indiceFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indiceFoto, 1);
                $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso!';
            })
            .error(function(erro) {
                $scope.mensagem ='Foto ' + foto.titulo + ' não foi removida!';
            }); */
        };
    });

// Exemplo anterior de como foi feito Promise.
//     var promise = $http.get ('v1/fotos');
//     promise.then(function (retorno) {
//         $scope.fotos = retorno.data;
//     }).catch(function(error) {
//         console.log(error);
//     });


