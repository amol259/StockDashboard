var MainController = function ($scope, Api) {
    $scope.models = {
        locations: []
    };
    $scope.selectedLocation = null;

    $scope.changeLocation = function (loc) {
        $scope.selectedLocation = loc;
    }

    function GetLocations() {
        Api.GetApiCall("Locations", "GetLocations", function (event) {
            if (event.hasErrors == true) {
                $scope.setError(event.error);
            } else {
                $scope.models.locations = event.result;
                if ($scope.models.locations.length > 0) {
                    $scope.selectedLocation = $scope.models.locations[0];   //when returned from web service set this as defualt location
                }
            }
        });
    }

    GetLocations();

}

MainController.$inject = ['$scope', 'Api'];
