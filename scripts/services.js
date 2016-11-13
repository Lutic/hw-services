(function() {
  "use strict";

  angular.module("services", [])
    .decorator('$log', decorateLogService) // Task 3
    .factory('randomSymbols', randomSymbols) // Task 4
  ;

  function decorateLogService ($delegate) {

    let debug = $delegate.debug,
        error = $delegate.error,
        info = $delegate.info,
        log = $delegate.log,
        warn = $delegate.warn;

    $delegate.debug = function (message) {
      message = `${new Date()} ${message}`;
      debug(message);
      return this;
    }

    $delegate.error = function (message) {
      message = `${new Date()} ${message}`;
      error(message);
      return this;
    }

    $delegate.info = function (message) {
      message = `${new Date()} ${message}`;
      info(message);
      return this;
    }

    $delegate.log = function (message) {
      message = `${new Date()} ${message}`;
      log(message);
      return this;
    }

    $delegate.warn = function (message) {
      message = `${new Date()} ${message}`;
      warn(message);
      return this;
    }

    return $delegate;
  };
  
  function randomSymbols () {
    return {
      generate
    };
    
    function generate () {
      return Math.random().toString(36); //replace(/[^a-z]+/g, '').substr(0, 5);
    }
  }

})();
