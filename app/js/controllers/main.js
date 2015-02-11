app.controller('Main', ['$scope', function ($scope) {
    $scope.valera = true;

    $scope.users = [
        {
            name: 'Valera',
            password: 'God'
        },
        {
            name: 'Vova',
            password: 'SuperMan'
        },
        {
            name: 'Sergii',
            password: 'Mujik'
        }
    ]
}]);