var ApiService = function ($http) {
    var result;
    //GET
    this.GetApiCall = function (controllerName, method, callback) {
        result = $http.get('api/' + controllerName + '/' + method).success(
           function (data, status) {
               var event = {
                   result: data,
                   hasErrors: false
               };
               callback(event);
           }).error(
            function (data, status) {
                var event = {
                    result: "",
                    hasErrors: true,
                    error: data
                };
                callback(event);// callback event 
            }
        );
    }
    //POST , we apply obj as a parameter also
    this.PostApiCall = function (controllerName, methodName, obj, callback) {
        result = $http.post('api/' + controllerName + '/' + methodName, obj).success(function (data, status) {
            var event = {
                result: data,
                hasErrors: false
            };
            callback(event);
        }).error(function () {
            var event = {
                result: "",
                hasErrors: true,
                error: data
            };
            callback(event);
        });
        return result;
    };

}