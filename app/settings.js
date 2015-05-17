// client-side settings (for dev only)
window.settings = {};

settings.gatewayHost = 'localhost:9090';
settings.meteorHost = 'localhost:5000';

settings.webSocketURL = 'ws://' + settings.gatewayHost + '/pubsub';
settings.restBaseURL = 'http://' + settings.gatewayHost + '/ws/v1/';
settings.meteorURL = 'ws://' + settings.meteorHost + '/websocket';

settings.topic = {};
settings.topic.visualdata = {};

settings.topic.visualdata.piValue = 'piValue';
settings.topic.visualdata.percentage = 'percentage';
settings.topic.visualdata.progress = 'progress';
settings.topic.visualdata.chartValue = 'chartValue';
settings.topic.visualdata.chartValue2 = 'chartValue2';
settings.topic.visualdata.topn = 'topn';
settings.topic.visualdata.pieChart = 'piechart';
settings.corebos = {};
settings.corebos.api = 'http://localhost:8053/sigpac540';
settings.corebos.user = 'admin';
settings.corebos.accesskey = 'yKtgyiUHDf5ogJs';  //**** DO NOT SHARE THIS WITH ANYONE!!! ***
// default lanugage
settings.language = 'es';
// app branding
settings.app = 'cbdbPotentials';
settings.version = '1.0';
settings.copy = 'JPL TSolucio, S.L.';
