angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'AddRecipeCtrl', 'angular-filepicker']);

// Example of how to set default values for all dialogs
app.config(['ngDialogProvider', function (ngDialogProvider, filepickerProvider) {
    filepickerProvider.setKey('ADRorBCiRIu3kFy8E7uvRz');
    
    ngDialogProvider.setDefaults({
        className: 'ngdialog-theme-default',
        plain: false,
        showClose: true,
        closeByDocument: true,
        closeByEscape: true,
        appendTo: false,
        preCloseCallback: function () {
            console.log('default pre-close callback');
        }
    });
}]);