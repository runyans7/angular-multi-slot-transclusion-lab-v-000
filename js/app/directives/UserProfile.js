function UserProfile() {
	return {
		transclude: {
			name: 'h4',
			position: 'h6',
			description: 'p'
		},
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'Name: <h4 ng-transclude="name"></h4>',
				'Position: <h6 ng-transclude="position"></h6>',
				'Description: <p ng-transclude="description"></p>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
