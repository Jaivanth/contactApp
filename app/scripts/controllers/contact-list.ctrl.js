
app.controller('ContactListCtrl', ['$scope', 'GetContactList', '$parse', function($scope, GetContactList, $parse) {

	//TO DO: Include API call in resolve
	//$scope.allowEdit[0] = true;
	$scope.isDisabled = [];

	var getContactList = function(){
		$scope.contactList = GetContactList.getContactListFn().then(function(response){
			if(response.status === 200){
				$scope.contactList = $parse('data')(response);
			} else { 
				alert('Ohh Sorry unexpected error occured!!!');
			}		
		}, function(){
			alert('Ohh Sorry unexpected error occured!!!');
		});
	};

	getContactList();

	$scope.editContact = function($index){
		//$scope.allowEdit[0]
		$scope.readyForEdit[$index] = true;
		$scope.isDisabled[$index] = false;

	}

	// console.log('ContactList>>>>>', $scope.contactList); 

}]);