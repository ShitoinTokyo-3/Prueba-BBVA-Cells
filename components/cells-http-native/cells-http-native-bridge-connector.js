/*istanbul ignore next*/
(function() {
  window.CellsNativePlugins = window.CellsNativePlugins || {};
  window.CellsNativePlugins.Http = {
    get: function(url, params, headers, successCallback, errorCallback, multipart, timeout) {
      window.CellsNativePlugins.pluginManager.execute(successCallback, errorCallback, 'Http', 'get', { 'url': url, 'params': params, 'headers': headers, 'timeout': timeout });
    },
    post: function(url, params, headers, successCallback, errorCallback, multipart, timeout) {
      window.CellsNativePlugins.pluginManager.execute(successCallback, errorCallback, 'Http', 'post', { 'url': url, 'params': params, 'headers': headers, 'multipart': multipart, 'timeout': timeout });
    },
    put: function(url, params, headers, successCallback, errorCallback, multipart, timeout) {
      window.CellsNativePlugins.pluginManager.execute(successCallback, errorCallback, 'Http', 'put', { 'url': url, 'params': params, 'headers': headers, 'multipart': multipart, 'timeout': timeout });
    },
    head: function(url, params, headers, successCallback, errorCallback, multipart, timeout) {
      window.CellsNativePlugins.pluginManager.execute(successCallback, errorCallback, 'Http', 'head', { 'url': url, 'params': params, 'headers': headers, 'timeout': timeout });
    },
    patch: function(url, params, headers, successCallback, errorCallback, multipart, timeout) {
      window.CellsNativePlugins.pluginManager.execute(successCallback, errorCallback, 'Http', 'patch', { 'url': url, 'params': params, 'headers': headers, 'multipart': multipart, 'timeout': timeout });
    },
    delete: function(url, params, headers, successCallback, errorCallback, multipart, timeout) {
      window.CellsNativePlugins.pluginManager.execute(successCallback, errorCallback, 'Http', 'delete', { 'url': url, 'params': params, 'headers': headers, 'timeout': timeout });
    },
    cleanAllCookies: function(successCallback, errorCallback) {
      window.CellsNativePlugins.pluginManager.execute(successCallback, errorCallback, 'Http', 'cleanAllCookies', {});
    },
    sslPinning: function(certificates, successCallback, errorCallback) {
      window.CellsNativePlugins.pluginManager.execute(successCallback, errorCallback, 'Http', 'sslPinning', { 'certificates': certificates });
    },
    acceptAllCerts: function(allow, successCallback, errorCallback) {
      window.CellsNativePlugins.pluginManager.execute(successCallback, errorCallback, 'Http', 'acceptAllCerts', { 'allow': allow });
    }
  };
}(window));
