/**
 *
 *
 * # cells-generic-dp
 *
 * ![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)
 * ![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)
 *
 * [Demo of component in Cells Catalog](https://catalogs.platform.bbva.com/cells)
 *
 * Allows to perform an AJAX request to any API environment.
 *
 * Example:
 *
 * ```html
 * <cells-generic-dp
 *   id="myDataProvider"
 *   host="http://some_host"
 *   path="some_endpoint_path"
 *   params='{"key":"value"}'
 *   body='{"key":"value"}'
 *   headers='{"key":"value"}'
 *   method="GET">
 * </cells-generic-dp>
 * ```
 *
 * ```javascript
 * myEl.$.myDataProvider.addEventListener('request-success', function(e) {
 *   //on success
 * });
 * myEl.$.myDataProvider.addEventListener('request-error', function(e) {
 *   //on error
 * });
 * myEl.$.myDataProvider.generateRequest();
 * ```
 *
 * This document covers:
 *
 * 1. <a href="#dependencies">Dependencies</a>
 * 2. <a href="#api">API</a>
 *     1. <a href="#properties">Properties</a>
 *     2. <a href="#methods">Methods</a>
 *     3. <a href="#events">Events</a>
 * 3. <a href="#info">Additional info</a>
 *
 * ---
 *
 * <a name="dependencies"></a>
 * ## Dependencies
 *
 * * [cells-ajax](https://globaldevtools.bbva.com/bitbucket/projects/CEL/repos/cells-ajax/browse)
 *
 * <a name="api"></a>
 * ## API
 *
 * <a name="properties"></a>
 * **Properties**:
 *
 * | NAME | Type | Description | Binding | Default value |
 * |:--- |:---:|:--- |:---:|:---:|
 * | auto | Boolean | Flags if request will be auto-generated whenever any of its properties changes. | IN | `false` |
 * | body | Object | Request body, commonly used for `PATH`, `POST` or `PUT` request. | IN | `null` |
 * | cache | String | Type of cache: `none`, `local` or `memory` | IN | `none` |
 * | cacheTime | Number | Time for cache expiration | IN | `0` |
 * | contentType | String | Type of content type header request. Will be ignored if `headers` defines this value. | IN  | `` |
 * | handleAs | String | Text format to handle request response. Could be any valid MIME type. | IN | `json` |
 * | headers | Object | Request headers. | IN | `{Accept: "application/json, text/plain, * / *; q=0.01", Content-Type: "application/json"}` |
 * | host | String | Request host domain. Including protocol. | IN | `` |
 * | method | String | Request method. | IN  | `GET` |
 * | native | Boolean | Flags if request should be performed through native plugin | IN | `false` |
 * | params | Object | Request params. | IN | `null` |
 * | path | String | Request endpoint path. If defined, will be concatenated to `host`. | IN | `` |
 * | requiresTsec | Boolean | Flags if `tsec` header value should be added | IN | `false` |
 * | sync | Boolean | Flags if request should be synchronous or not | IN | `false` |
 * | tsecHandler | Storage | `tsec` storage interface | IN | `window.sessionStorage` |
 * | timeout | Number | Request timeout (in milliseconds) | IN | `60000` |
 * | verbose | Boolean | Enables debug mode and `console.log` traces | IN | `false` |
 * | withCredentials | Boolean | XHR with credentials | IN | `false` |
 *
 * <a name="methods"></a>
 * **Methods**:
 *
 * | NAME | Description | Returns
 * |:--- |:--- |:---:|
 * | generateRequest | In case there's no pending request, will perform configured AJAX request. | --- |
 * | getLastRequest | Returns latest XHR request performed | `XMLHttpRequest` |
 * | getLastResponse | Returns last successful response or error | `Object` |
 *
 * <a name="events"></a>
 * **Events**:
 *
 * | NAME | Description | Returns
 * |:--- |:--- |:---:|
 * | cells-generic-dp-error | Fired whenever there's an internal error. Only under debug mode. | --- |
 * | cells-generic-dp-info | Fired for debug purposes. Only under debug mode. | --- |
 * | request-success | Fired after successful request. | `Object` |
 * | request-error | Fired after failed requests. | `{Object}` |
 *
 * <a name="info"></a>
 * ## Additional info
 *
 * - [W3C HTTP Request Headers](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)
 * - [W3C HTTP Request Methods](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)
 * - [MDN XMLHttpRequest.withCredentials](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials)
 * - [MDN Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Storage)
 *
 * @polymer
 * @customElement
 * @summary A generic Cells data provider.
 * @extends {Polymer.Element}
 * @demo demo/index.html
 * @hero DP_cells.svg
 */
class CellsGenericDP extends Polymer.Element {
  static get is() {
    return 'cells-generic-dp';
  }

  static get properties() {
    return {
      /**
       * Flags if request will be auto-generated whenever any of its properties changes.
       * @property  auto
       * @type      {Boolean}
       * @default   false
       */
      auto: {
        type: Boolean,
        value: false
      },
      /**
       * Request body, commonly used for <em>PATH</em>, <em>POST</em> or <em>PUT</em> request.
       * @property  body
       * @type      {Object}
       * @default   null
       */
      body: {
        type: Object,
        value: null
      },
      /**
       * Type of cache: <em>none</em>, <em>local</em> or <em>memory</em>
       * @property  cache
       * @type      {String}
       * @default   'none'
       */
      cache: {
        observer: '_isValidCacheType',
        type: String,
        value: function() {
          return 'none';
        }
      },
      /**
       * Time for cache validity.
       * @property  cacheTime
       * @type      {Number}
       * @default   0
       */
      cacheTime: {
        type: Number,
        value: 0
      },
      /**
       * Type of content-type requested to service.<br/>
       * In case <em>headers</em> defines this value, this will be ignored.
       * @property  contentType
       * @type      {String}
       * @default   ''
       */
      contentType: {
        type: String,
        value: ''
      },
      /**
       * Text format to handle request response.<br/>
       * Could be: <em>json</em>, <em>html</em>, <em>text</em> or any other valid MIME type.
       * @property  handleAs
       * @type      {String}
       * @default   'json'
       */
      handleAs: {
        type: String,
        value: 'json'
      },
      /**
       * Request headers.<br/>
       * <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html" target="_blank">More info</a>
       * @property  headers
       * @type      {Object}
       * @default   null
       */
      headers: {
        type: Object,
        value: function() {
          return null;
        }
      },
      /**
       * Request token configuration management.
       * @property  token
       * @type      {Object}
       * @default   {}
       */
      token: {
        type: Object,
        value: function() {
          return {};
        }
      },
      /**
       * Request host domain, including protocol, i.e.: <em>http://my-domain</em>
       * @property  host
       * @type      {String}
       * @default   ''
       */
      host: {
        type: String,
        value: ''
      },
      /**
       * Request method.<br/>
       * <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html" target="_blank">More info</a>
       * @property  method
       * @type      {String}
       * @default   'GET'
       */
      method: {
        type: String,
        value: 'GET'
      },
      /**
       * Multipart data structure.
       * Used for cells-http-native.
       */
      multipart: {
        type: Object,
        value: null
      },
      /**
       * Flags if should be performed through native plugin.
       * @property  native
       * @type      {Boolean}
       * @default   false
       */
      native: {
        type: Boolean,
        value: false
      },
      /**
       * Request query params.
       * @property  params
       * @type      {Object}
       * @default   null
       */
      params: {
        type: Object,
        value: null
      },
      /**
       * Request endpoint path, without leading backslash, i.e.: <em>accounts/v0/accounts</em>
       * @property  path
       * @type      {String}
       * @default   ''
       */
      path: {
        type: String,
        value: ''
      },
      /**
       * Use Semaas monitoring feature.
       * @property  semaasMonitoring
       * @type      {Boolean}
       * @default   true
       */
      semaasMonitoring: {
        type: Boolean,
        value: true
      },
      /**
       * Flags if request should be synchronous or not.
       * @property  sync
       * @type      {Boolean}
       * @default   false
       */
      sync: {
        type: Boolean,
        value: false
      },
      /**
       * Flags if this request should manage <em>token</em> authentication.
       * @property  requiresToken
       * @type      {Boolean}
       * @default   false
       */
      requiresToken: {
        type: Boolean,
        value: false
      },
      /**
       * Default token configuration management.
       * @property token
       * @type     {Object}
       * @default  {{'storage': 'sessionStorage', 'key': 'tsec', 'path': '', 'headerFieldName': 'tsec', 'headerFieldValuePrefix': '' }}
       * @private
       */
      _token: {
        type: Object,
        value: function() {
          return {
            storage: 'sessionStorage',     // string indicating window object || direct object reference
            key: 'tsec',                   // name of key where token is stored
            path: '',                      // retrieval path for token value
            headerFieldName: 'tsec',       // header field name
            headerFieldValuePrefix: ''     // header field value prefix
          };
        }
      },
      /**
       * Request timeout (in milliseconds).
       * @property  timeout
       * @type      {Number}
       * @default   60000
       */
      timeout: {
        type: Number,
        value: 60000
      },
      /**
       * Enables debug mode and <em>console.log</em> traces.
       * @property  verbose
       * @type      {Boolean}
       * @default   false
       */
      verbose: {
        type: Boolean,
        value: false
      },
      /**
       * XHR with credentials.<br/>
       * <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials" target="_blank">More info</a>
       * @property  withCredentials
       * @type      {Boolean}
       * @default   false
       */
      withCredentials: {
        type: Boolean,
        value: false
      },
      /**
       * Default headers value.
       * @property  _headers
       * @type      {Object}
       * @default   {{'Accept': 'application/json, text/plain, *\/*; q=0.0.1`, 'Content-Type': 'application/json`}}
       * @private
       */
      _headers: {
        type: Object,
        value: function() {
          return {
            'Accept': 'application/json, text/plain, */*; q=0.01',
            'Content-Type': 'application/json'
          };
        }
      },
      /**
       * Flags if current request is being processed or not.
       * @property  _isLoading
       * @type      {Boolean}
       * @default   false
       * @private
       */
      _isLoading: {
        type: Boolean,
        value: false
      },
      /**
       * Stores last error produced.
       * @property  _lastError
       * @type      {Object}
       * @default   null
       * @private
       */
      _lastError: {
        type: Object,
        value: null
      },
      /**
       * Stores last request performed.
       * @property  _lastRequest
       * @type      {Object}
       * @default   null
       * @private
       */
      _lastRequest: {
        type: Object,
        value: null
      },
      /**
       * Stores last response obtained from server.
       * @property  _lastResponse
       * @type      {Object}
       * @default   null
       * @private
       */
      _lastResponse: {
        type: Object,
        value: null
      },
      /**
       * Computed value from <em>host</em> and <em>path</em>.
       * @property  _url
       * @type      {String}
       * @default   ''
       * @private
       */
      _url: {
        type: String,
        value: ''
      }
    };
  }

  static get observers() {
    return [
      '_setURL(host, path)'
    ];
  }

  ready() {
    super.ready();
    this._validateToken();
  }

  /**
   * Validates if provided token management configuration is valid.
   *
   * @method  _validateToken
   * @private
   */
  _validateToken() {
    /* istanbul ignore next */
    if (this.requiresToken) {
      var tokenConfiguration = this._mergeTokenConfiguration();
      var _handler = this._getTokenStorage(tokenConfiguration);

      try {
        _handler.setItem('test', 'test');
        _handler.removeItem('test');
      } catch (e) {
        throw Error('Invalid [token.storage] or can\'t write/read from it');
      }
    }
  }

  /**
   * Observer callback executed on <em>host</em> and <em>path</em> changes.
   * Will calculate value of <em>_url</em>.
   * @method  _setURL
   * @param   host {String}
   * @param   path {String}
   * @private
   */
  _setURL(host, path) {
    if (typeof host === 'string' && typeof path === 'string') {
      var url = host.length && path.length
        ? [host, path].join('/')
        : host;
      this.set('_url', url);
    } else {
      this._emit('error', 'Invalid [host] or [path] properties values!', true);
    }
  }

  /**
   * Validates the value of <em>cacheType</em> property.
   * @method  _isValidCacheType
   * @param   cache {String}
   * @private
   */
  _isValidCacheType(cache) {
    var isValid = false;
    if (cache && typeof cache === 'string') {
      cache = cache.toUpperCase().trim();
      isValid = cache === 'NONE' || cache === 'LOCAL' || cache === 'MEMORY';
    }
    if (!isValid) {
      Polymer.RenderStatus.afterNextRender(this, function() {
        this._emit('error', 'Invalid [cache] type! [cache =  ' + cache + ']', true);
      });
    }
  }

  /**
   * Extracts last response from server
   * @method  _extractResponse
   * @param   {Event} event Request event
   * @returns {String}
   * @private
   */
  _extractResponse(event) {
    /*eslint complexity: ["error", 13]*/
    var response;
    if (!(event instanceof Event)) {
      return response;
    }
    if (event.detail.error && event.detail.error.response) {
      response = event.detail.error.response;
    } else if (event.detail.hasOwnProperty('value')) {
      response = event.detail.value;
    } else if (event.detail instanceof HTMLElement && event.detail.xhr instanceof XMLHttpRequest) {
      response = event.detail.response || event.detail.xhr.response;
    } else if (event.detail.hasOwnProperty('request') && event.detail.hasOwnProperty('error')
      && event.detail.request instanceof HTMLElement
      && event.detail.request.xhr instanceof XMLHttpRequest) {
      response = event.detail.request.xhr.response;
    } else {
      response = event.detail;
    }
    return response;
  }

  /**
   * Extracts request headers from request response.
   * @method  _extractHeadersFromResponse
   * @param   {Event} event Request event
   * @returns {Object}
   * @private
   */
  _extractHeadersFromResponse(event) {
    var responseHeaders;

    if (event instanceof Event) {
      if (event.detail instanceof HTMLElement && event.detail.xhr instanceof XMLHttpRequest) {
        responseHeaders = event.detail.xhr.getAllResponseHeaders();
      } else if (event.detail.hasOwnProperty('request') && event.detail.hasOwnProperty('error')
        && event.detail.request instanceof HTMLElement
        && event.detail.request.xhr instanceof XMLHttpRequest) {
        responseHeaders = event.detail.request.xhr.getAllResponseHeaders();

        if (!responseHeaders && event.detail.error.headers instanceof Object) {
          return JSON.parse(event.detail.error.headers);
        }
      }
    }

    if (responseHeaders) {
      return this._parseHeadersAsObject(responseHeaders);
    }

    return null;
  }

  /**
   * Observer callback executed whenever <em>_lastError</em> changes.
   * @method  _lastErrorChanged
   * @param   error {Object}
   * @private
   */
  _lastErrorChanged(error) {
    var headers = {};

    if (error instanceof Event) {
      error.stopPropagation();
      headers = this._extractHeadersFromResponse(error);
      error = this._extractResponse(error) || this._extractStatusErrorCode(error);
      if (headers) {
        Object.assign(error, {headers});
      }
    }

    this.set('_isLoading', false);
    this.set('_lastError', error);
    this._emit('request-error', error, false);
  }

  /**
   * Method used to extract status code from xhr request.
   * @param {Object} event
   * @return {Object}
   */
  _extractStatusErrorCode(event) {
    return event.detail.request ? {status: event.detail.request.xhr.status} : {};
  }

  /**
   * Observer callback executed whenever <em>_lastResponse</em> changeds.
   * @method  _lastResponseChanged
   * @param   result {Object}
   * @private
   */
  _lastResponseChanged(result) {
    var headers = {};

    if (this.verbose) {
      console.log('_lastResponseChanged :: result : ', result);
    }

    if (result instanceof Event) {
      result.stopPropagation();
      headers = this._extractHeadersFromResponse(result);
      result = this._extractResponse(result) || {};

      if (headers) {
        Object.assign(result, {headers});
      }
    }

    this.set('_lastResponse', result);
    this.set('_isLoading', false);
    this._emit('request-success', result, false);
  }

  /**
   * Merges <em>_headers</em> and <em>headers</em> properties.
   * Also, if <em>requiresToken</em> tries to recover <em>tsec</em> value from <em>token</em> configuration.
   * @method  _mergeHeaders
   * @returns {Object}
   * @private
   */
  _mergeHeaders() {
    var semaasHeaders = this.semaasMonitoring ? this._getSemaasHeaders() : {};
    var headers = Object.assign({}, this._headers, semaasHeaders, this.headers || {});

    if (this.requiresToken) {
      var tokenConfiguration = this._mergeTokenConfiguration();
      var tokenValue = this._getTokenValue(tokenConfiguration);
      var tokenHeaderFieldName = tokenConfiguration.headerFieldName;

      headers[tokenHeaderFieldName] = tokenValue;
    }

    return headers;
  }

  /**
   * Get semaas headers stored in sessionStorage if they are present.
   *
   * @method _getSemaasHeaders
   * @return {Object}
   * @private
   */
  _getSemaasHeaders() {
    var semaasKeys = ['x-rho-traceid', 'x-rho-parentspanid'];
    var semaasHeaders = {};

    if (window.sessionStorage) {
      var storage = window.sessionStorage;

      semaasKeys.forEach(function(key) {
        var value = storage.getItem(key);

        if (!!value && value !== 'null') {
          semaasHeaders[key] = value;
        }
      });
    }

    return semaasHeaders;
  }

  /**
   * Merge token default configuration (<em>_token</em>) with custom one (<em>token</em>) (if provided).
   *
   * @private
   * @method _mergeTokenConfiguration
   * @return {Object}   Merge of default and custom token configuration.
   */
  _mergeTokenConfiguration() {
    return Object.assign({}, this._token, this.token);
  }

  /**
   * Get token value based on given <em>tokenConfiguration</em> retrieval configuration object.
   * It take into account token retrieval <em>storage</em>, <em>key</em>, <em>path</em>, and <em>header field value prefix</em>.
   * @method  _getTokenValue
   * @param   {Object} tokenConfiguration Token retrieval configuration object.
   * @returns {String}
   * @private
   */
  _getTokenValue(tokenConfiguration) {
    var storage = this._getTokenStorage(tokenConfiguration);
    var key = tokenConfiguration.key;
    var value = storage.getItem(key);

    if (tokenConfiguration.path) {
      value = JSON.parse(value)[tokenConfiguration.path];
    }

    if (tokenConfiguration.headerFieldValuePrefix) {
      value = `${tokenConfiguration.headerFieldValuePrefix} ${value}`;
    }

    return value;
  }

  /**
   * Get token <em>storage<em> based on given <em>tokenConfiguration<em> retrieval configuration object.
   * It returns window object if storage format is a string and is part of windows, or object itself in case it's an object.
   * @method  _getTokenStorage
   * @param   {Object} Token Token retrieval configuration object.
   * @returns {Object|null}
   * @private
   */
  _getTokenStorage(tokenConfiguration) {
    var storage = tokenConfiguration.storage;

    if (typeof storage === 'string' && storage in window) {
      return window[storage];
    } else if (typeof storage === 'object') {
      return storage;
    }

    return null;
  }

  /**
   * Parse headers string in format "key: value, key: value key:value", into a real object.
   *
   * @param  {String}   headersAsString   Response headers in format "key: value, key: value key:value".
   * @return {Object}                     Object containing headers as key - value.
   */
  _parseHeadersAsObject(headersAsString) {
    var headers = {};

    headersAsString.split('\u000d\u000a').forEach(function(line) {
      if (line.length > 0) {
        var delimiter = '\u003a\u0020';
        var header = line.split(delimiter);

        headers[header.shift().toLowerCase()] = header.join(delimiter);
      }
    });

    return headers;
  }

  /**
   * Parses <em>body</em> value in order to produce right format.
   * @method  _parseBodyObject
   * @param   headers {Object} Merged headers for request.
   * @return  {String|null}
   * @private
   */
  _parseBodyObject(headers) {
    var body = this.body;
    if (typeof body === 'object' && body !== null) {
      var contentType = this.contentType;
      if (!contentType) {
        Object.keys(headers).some((key) => {
          if (key.toLowerCase() === 'content-type') {
            contentType = headers[key];
            return true;
          } else {
            return false;
          }
        });
      }

      switch (contentType.split(';')[0]) {
        case 'text/plain':
        case 'application/json':
          try {
            body = this.native ? body : JSON.stringify(body);
          } catch (error) {
            this._emit('error', error, true);
            body = null;
          }
          break;
        default:
          body = Object.keys(body).map(function(key) {
            return key + '=' + body[key];
          }, this).join('&');
      }
    }

    return body;
  }

  /**
   * Emits or logs into <em>console</em> events.
   * @method  _emit
   * @param   type {String} Event to fire.
   * @param   payload {*} To be sent.
   * @param   prefix {Boolean} Whether to add <em>this.is</em> value to <em>type</em>
   * @private
   */
  _emit(type, payload, prefix) {
    if (!type || typeof type !== 'string') {
      type = 'log';
    }
    if (this.verbose) {
      var method = type;
      if (typeof console[method] !== 'function') {
        method = 'log';
      }
      console[method]('[' + CellsGenericDP.is + '] [' + type.toUpperCase() + '] :: ' + JSON.stringify(payload));
    }

    if (prefix === true) {
      type = 'cells-generic-dp-' + type;
    }
    if (this.verbose) {
      console.log('type: ', type);
      console.log('payload: ', payload);
    }

    /**
     * @event cells-generic-dp-error
     * Fired whenever there's an internal error.<br/>
     * Only if <em>verbose</em> is set to <em>true</em>
     */
    /**
     *
     * @event cells-generic-dp-info
     * Fired for debug purposes.<br/>
     * Only if <em>verbose</em> is set to <em>true</em>
     */
    this.dispatchEvent(new CustomEvent(type, {
      bubbles: true,
      composed: true,
      detail: payload
    }));
  }

  /**
   * Returns last response or last error.
   * @method  getLastResponse
   * @return  {Object}
   */
  getLastResponse() {
    return this._lastResponse || this._lastError;
  }

  /**
   * Returns last request performed.
   * @method  getLastRequest
   * @return  {XMLHttpRequest}
   */
  getLastRequest() {
    return (this._lastRequest && this._lastRequest.xhr) || null;
  }

  /**
   * In case there's no another request pending, performs configured request.
   * @method  generateRequest
   */
  generateRequest() {
    if (!this._lastRequest || !this._isLoading) {
      this.set('headers', this._mergeHeaders());
      this.set('body', this._parseBodyObject(this.headers));
      var config = {
        url: this._url,
        headers: this.headers,
        params: this.params,
        body: this.body,
        method: this.method,
        multipart: this.multipart
      };
      this._emit('info', config, true);
      return this.$['cells-ajax'].generateRequest();
    }
  }

  /**
   * @event   request-success
   * Fired after successful request.<br/>
   * Returns service <em>response {Object}</em>.
   */

  /**
   * @event   request-success-headers
   * Fired after successful request.<br/>
   * Returns service <em>response headers {Object}</em>.
   */

  /**
   * @event   request-error
   * Fired after failed request.<br/>
   * Returns: <em>{{error: String, response: Object}}</em>.
   */
}

customElements.define(CellsGenericDP.is, CellsGenericDP);
