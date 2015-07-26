//add user ctrl
app.controller('srchCtrl', function ($scope) {
	//add new user button and layout show off
	$scope.data={addusrName:'', addusrCity:''};
		//passing data by my parameter
	$scope.showEnable=function (data) {
		return data.addusrName.length > 1 && data.addusrCity.length > 1;
	};

});







//user list ctrl
app.controller('usrListCtrl', function ($scope) {
	//user list
	$scope.users=[
		{name:'Jhon Smith', city:'Phenoix', status:'Active'},
		{name:'David Beackham', city:'England', status:'Deactive'},
		{name:'Tom Cruise', city:'New York', status:'Active'},
		{name:'Jhon Doe', city:'Mexico', status:'Active'}
	];

	//add user in list repetar
	$scope.addUser=function(){
		// alert('hello');
		$scope.users.push({
			name: $scope.addName.name,
			city: $scope.addCity.city
		});
	};


});
