angular.
    module('alurapic').
    controller('FotosController', function ($scope, $http, $resource) {

        $scope.fotos = [];
        $scope.filtro = '';
        $scope.mensagem = '';

        var recursoFoto = $resource('v1/fotos/:fotoId');

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
            
            
            $scope.remover = function(foto) {

                recursoFoto.delete({fotoID : foto._id}, function() {
                    var indiceFoto = $scope.fotos.indexOf(foto);
                    $scope.fotos.splice(indiceFoto, 1);
                    $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso!';
                }, function(erro) {
                    console.log(erro); 
                    $scope.mensagem ='Foto ' + foto.titulo + ' não foi removida!';
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


