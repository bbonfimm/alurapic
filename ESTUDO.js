angular.
    module('phonecatApp').
        controller('PhoneListController', ['$scope', '$http', function ($scope, $http) {
        // controller('PhoneListController', function ($scope, $http) {
        // controller: function PhoneListController($scope, $http) {
        $scope.cards = [];

        $http.get('myserver.com.br:1525/api/getCards')
            .success(function (response) {
                $scope.cards = response.json();
            })
            .error(function (erro) {
                console.log(erro);
            });

        // for(var i = 0; i < 10; i++){
        //     var card = {
        //         titulo: "Turismo e lazer",
        //         url: "/images/001.jpg",
        //         ativo: true
        //     }

        //     $scope.cards.push(card);
        // }        
    }]);




Minification / Uglyfi
Exemplo: a.b('phonecatApp').c('PhoneListController'),['$scope', '$http', function(d, e){}]

Bundle
// Junta todos os arquivos js, css e html em um único arquivo (com exceção da indexedDB.html)

JSON
//Exemplo = "[{"titulo":"Teste","url":"/images/001.jpg"},{"titulo":"Teste","url":"/images/001.jpg"}]"