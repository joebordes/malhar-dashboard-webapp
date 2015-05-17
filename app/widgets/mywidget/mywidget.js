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
				coreBOSWSAPI.setURL('http://localhost/coreboswork');
				coreBOSWSAPI.doLogin('admin', 'Y0M0WppcYVUz3P').then(function() {
					coreBOSWSAPI.doQuery('select account_no,accountname from accounts limit 0,5').then(function(response) {
						console.log(response, response.data.result.length);
						var cols = [
							{displayName: 'Acc Num', field: 'account_no'},
							{displayName: 'Account', field: 'accountname'}
						];
						var grid = {
							columnDefs: cols,
							rowData: response.data.result,
							dontUseScrolls: true
						};
						sc.gridOptions = grid;
						sc.myPageItemsCount = response.data.result.length;
					});
				});
			}
			update();
		}
	};
}]);
