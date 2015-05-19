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
			function rclick(rowdata) {
				console.log('clicked',rowdata);
			}
			var totalRows = 0;
			var ds = {
				getRows: getRows,
				pageSize: 5,
				//rowCount: 0
			};
			var cols = [
				{displayName: 'Acc Num', field: 'account_no'},
				{displayName: 'Account', field: 'accountname'}
			];
			var grid = {
				columnDefs: cols,
				rowData: [],
				enableFilter: true,
				enableSorting: true,
				enableColResize: true,
				rowClicked: rclick,
				rowSelection: 'single',
				datasource: ds
			};
			function getRows(start, finish, callbackSuccess, callbackFail) {
				coreBOSWSAPI.doQuery('select account_no,accountname from accounts limit '+start+','+(finish-start)).then(
				function(response) {
					callbackSuccess(response.data.result, totalRows);
				},
				function(response) {
					callbackFail();
				});
			}

			coreBOSWSAPI.setURL('http://localhost/coreBOSwork');
			coreBOSWSAPI.doLogin('admin', 'Lvx494dom78vMTjS').then(function() {
				coreBOSWSAPI.doQuery('select count(*) from accounts').then(
				function(response) {
					grid.datasource.rowCount = response.data.result[0].count;
					totalRows = +response.data.result[0].count;
					scope.gridOptions = grid;
				},
				function(response) {
					//ds.rowCount = 0;
				});
			});
		}
	};
}]);
