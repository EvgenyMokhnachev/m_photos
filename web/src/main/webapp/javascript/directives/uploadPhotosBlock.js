(function(){
    'use strict';

    angular.module("galleryApp").directive('uploadPhotosBlock', function(){
        return function($scope, elem, attrs){

            var openUploadPhotosBlock = angular.element(document.getElementById('openUploadPhotosBlockBtn'));
            var closeUploadPhotosBlock = angular.element(document.getElementById('closeUploadPhotosBlockBtn'));

            $scope.showUploadPhotosBlock = function(){
                elem.css({bottom: 0});
                openUploadPhotosBlock.css({display: 'none'});
                closeUploadPhotosBlock.css({display: 'block'});
            };

            $scope.hideUploadPhotosBlock = function(){
                elem.css({bottom: '-250px'});
                openUploadPhotosBlock.css({display: 'block'});
                closeUploadPhotosBlock.css({display: 'none'});
            };

            var selectedPhotosBlock = document.getElementById('selectedPhotosBlock');
            if (window.addEventListener) {
                if ('onwheel' in document) {
                    // IE9+, FF17+, Ch31+
                    window.addEventListener("wheel", onWheel);
                } else if ('onmousewheel' in document) {
                    // устаревший вариант события
                    window.addEventListener("mousewheel", onWheel);
                } else {
                    // Firefox < 17
                    window.addEventListener("MozMousePixelScroll", onWheel);
                }
            } else { // IE8-
                window.attachEvent("onmousewheel", onWheel);
            }

            var left = 0;
            function onWheel(e) {
                e = e || window.event;
                var delta = e.deltaY || e.detail || e.wheelDelta;
                left -= delta*0.5;
                selectedPhotosBlock.style.left = left + 'px';
                if(parseInt(selectedPhotosBlock.style.left) > 0){
                    selectedPhotosBlock.style.left = '0px';
                    left = 0;
                }
                if(left + selectedPhotosBlock.scrollWidth - document.body.clientWidth <= 0){
                    left = -selectedPhotosBlock.scrollWidth + document.body.clientWidth;
                    selectedPhotosBlock.style.left = left+'px';
                }
                e.preventDefault ? e.preventDefault() : (e.returnValue = false);
            }
        }
    });

})();