'use strict';

/**
 * @ngdoc directive
 * @name wClrBtn.directive:wClrBtn
 * @description
 * # wClrBtn
 */
angular.module('wClrBtn', [])
	.directive('wClrBtn', function($compile){
		return{
     	restrict: 'A',
      require: 'ngModel',
      scope: {
        model:'=ngModel',
        btnClasses:'@wClrBtn'
      },
      link:function(scope, element, attrs){
        if(element[0].nodeName !== 'INPUT' || attrs.type !== 'text' ) {
          // Not text input. Do nothing.
          return;
        }

        element.wrap('<div style="position:relative;"></div>');
        var btn = angular.element('<span class="close-icon" ng-show="model.length > 0" ng-click="model =\'\'"></span>');
        btn.addClass(scope.btnClasses); // copy classes defined in w-clr-btn
        element.after(btn);

        $compile(btn)(scope);
      }
    };
  });
