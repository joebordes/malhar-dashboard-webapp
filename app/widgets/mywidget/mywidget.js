/**
 * @author Joe Bordes
 */
angular.module('ui.widgets').directive('mywidget', ['coreBOSAPIStatus', 'coreBOSWSAPI',
function(coreBOSAPIStatus, coreBOSWSAPI) {
	return {
		restrict : 'A',
		replace : true,
		templateUrl : 'widgets/mywidget/mywidget.html',
		link : function(scope) {
			function update() {
				var sc = scope;
				scope.time = new Date().toLocaleTimeString();
				coreBOSWSAPI.setURL('http://localhost/coreBOSwork');
				coreBOSWSAPI.doLogin('admin', 'Lvx494dom78vMTjS').then(function() {
					coreBOSWSAPI.doQuery('select * from accounts limit 0,5').then(function(response) {
						console.log(response, response.data.result.length);
						sc.moduleList = response.data.result[0];
						sc.myPageItemsCount = response.data.result.length;
					});
				});
			}
			update();
		}
	};
}]);
