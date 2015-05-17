/*
 * Copyright (c) 2014 DataTorrent, Inc. ALL Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

angular.module('app', [
    'app.service',
    'ngRoute',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'nvd3ChartDirectives',
    'ui.dashboard',
    'ui.widgets',
    'ui.models',
    'angularGrid',
    'angular-md5',
    'coreBOSAPIservice', 'jm.i18next'
  ])
  .constant('settings', window.settings)
  .config(function ($routeProvider, $i18nextProvider, settings) {
		$i18nextProvider.options = {
			lng: settings.language,
			useCookie: true,
			useLocalStorage: false,
			fallbackLng: 'en',
			resGetPath: 'locales/__lng__/translation.json',
			defaultLoadingValue: '' // ng-i18next option, *NOT* directly supported by i18next
		};

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/simple', {
        templateUrl: 'views/simple.html',
        controller: 'SimpleCtrl'
      })
      .when('/rest', {
        templateUrl: 'views/main.html',
        controller: 'RestDataCtrl'
      })
      .when('/meteor', {
        templateUrl: 'views/main.html',
        controller: 'MeteorCtrl'
      })
      .when('/discovery', {
        templateUrl: 'views/main.html',
        controller: 'DiscoveryCtrl'
      })
      .when('/apps', {
        templateUrl: 'views/apps.html',
        controller: 'AppsCtrl'
      })
      .when('/apps/:appId', {
        templateUrl: 'views/main.html',
        controller: 'DiscoveryCtrl'
      })
      .when('/clientdata', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/serverdata', {
        templateUrl: 'views/main.html',
        controller: 'ServerDataCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function (coreBOSAPIStatus, coreBOSWSAPI) {
    //coreBOSWSAPI.setcoreBOSUser('your corebBOS user');
    //coreBOSWSAPI.setcoreBOSKey('your coreBOS Access key');
    // coreBOSWSAPI.setURL('http://localhost/coreboswork');
    // coreBOSWSAPI.doLogin('admin','Y0M0WppcYVUz3P').then(function() {});
  });