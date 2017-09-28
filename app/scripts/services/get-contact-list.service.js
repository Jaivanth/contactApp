app.service('GetContactList', ['$http', function($http){
	this.getContactListFn = function(){
		return $http.get('scripts/utils/contactList.json');
	}
}])