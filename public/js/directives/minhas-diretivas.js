angular.
    module("minhasDiretivas", []).directive('meuPainel', function () {

        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@titulo'
        };

        // Se o atributo titulo é a interface da comunicacao com o escopo privado da diretiva.
        // se no html fosse SHITqlqcoisa o @ seria @SHITqlqcoisa. É no @ que captura o valor estipulado na diretiva.
        // Mas internamente no escopo eu tbm estou usando o msm nome, sendo assim,
        // apos o @ nao ha necessidade de colocar mais Nada apos o @. Ele é passado como STRING e nao como expressao
        // ddo.scope = {
        //     titulo: '@'
        // };

        ddo.transclude = true;

        ddo.templateUrl = 'js/directives/meu-painel.html';
        
        // EXEMPLO CONCATENADO 
        // ddo.template =
        //     '<div class="panel panel-default">'
        //     + '   <div class="panel-heading">'
        //     + '        <h3 class="panel-title text-center">{{titulo}}</h3> '
        //     + '   </div>'
        //     + '   <div class="panel-body" ng-transclude>'
        //     + '   </div>'
        //     + '</div>'

        return ddo;

        // para manter o elemento filho dentro de outra, ative no ddo transclude TRUE e sinalize no html do model tbm. 



    })


    // <div meu-painel></div> Esse pedaço sera modificado para receber o painel. ATRIBUTO
    // <meu-painel></meu-painel> Tag. ELEMENTO
    // Convenção: camelCase no angular e  (Hifen) texto-texto no HTML.