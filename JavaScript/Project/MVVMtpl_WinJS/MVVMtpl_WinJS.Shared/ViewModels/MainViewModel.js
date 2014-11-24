﻿(function (g, WinJS) {
    "use strict";

    var MainViewModel = WinJS.Class.define(
        function () {
            this.dependencies = "navigatorService, storageService";
            this.refreshCommand = new WinJS.RelayCommand(this.refreshPage, this);
            this.a = 1;
        },

        {
            ready: function() {
                // Dependencies loaded
            },

            refreshPage: function () {
                this.a = 2;
                this.navigatorService.navigate("MainViewModel");
            }
        }
    );

    WinJS.Namespace.define("ViewModels", {
        MainViewModel: MainViewModel
    });
})(this, WinJS);
