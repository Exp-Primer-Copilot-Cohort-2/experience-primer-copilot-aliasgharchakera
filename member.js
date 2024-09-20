function skillsMember() {
    return {
        name: 'skillsMember',
        restrict: 'E',
        templateUrl: 'skills-member.html',
        scope: {
            member: '=',
            showSkills: '&'
        },
        controller: function ($scope) {
            $scope.showSkills = function () {
                alert($scope.member.name + ' has the following skills: ' + $scope.member.skills);
            };
        }
    };
}