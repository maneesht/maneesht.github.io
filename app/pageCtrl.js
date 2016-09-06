"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PCtrl = function () {
    function PCtrl(pageService) {
        _classCallCheck(this, PCtrl);

        this.pageService = pageService;
    }

    _createClass(PCtrl, [{
        key: "getPage",
        value: function getPage() {
            return this.pageService.getPage();
        }
    }]);

    return PCtrl;
}();

angular.module("resume.pageCtrl", ["resume.pageService"]).controller("pageCtrl", PCtrl);