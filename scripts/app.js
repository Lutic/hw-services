(function() {
  "use strict";

  angular.module("app", ['services'])
    .controller('Sample', Sample);

  function Sample ($log, randomSymbols) {
    let $ctrl = this;

    $log.debug('Hey');
    $log.error('Hey');
    $log.info('Hey');
    $log.log('Hey');
    $log.warn('Hey');

    $ctrl.randomSymbols = randomSymbols.generate();
  }

  angular.element(document)
    .ready(() => angular.bootstrap(document, ["app"]));

})();
