var ViewProductController = function ($scope, $uibModalInstance, data) {
    $scope.selectedProduct = data;

    $scope.labels = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'];
    $scope.series = ['Series A', 'Series B'];

    $scope.data = [
      [67, 52, 80, 85, 50, 78, 40,52,],
      [58, 48, 40, 19, 36, 27, 90, 60]
    ];
}