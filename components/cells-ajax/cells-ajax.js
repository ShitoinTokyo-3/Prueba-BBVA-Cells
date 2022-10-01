let memoryCache = {};
const legacyElementMixin = Polymer.LegacyElementMixin;
/**
 *
 *
 * # cells-ajax
 *
 * ![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg) ![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)
 *
 * [Demo of component in Cells Catalog](https://catalogs.platform.bbva.com/cells)
 *
 * An element providing a starting point for your own reusable Polymer elements.
 *
 * ## Dependencies
 *
 * Element dependencies are managed via [Bower](http://bower.io/). You can
 * install that via:
 *
 *     npm install -g bower
 *
 * Then, go ahead and download the element's dependencies:
 *
 *     bower install
 *
 *
 * ## Playing With Your Element
 *
 * If you wish to work on your element in isolation, we recommend that you use
 * [Polyserve](https://github.com/PolymerLabs/polyserve) to keep your element's
 * bower dependencies in line. You can install it via:
 *
 *     npm install -g polyserve
 *
 * And you can run it via:
 *
 *     polyserve
 *
 * Once running, you can preview your element at
 * `http://localhost:8080/components/cells-ajax/`, where `cells-ajax` is the name of the directory containing it.
 *
 *
 * ## Testing Your Element
 *
 * Simply navigate to the `/test` directory of your element to run its tests. If
 * you are using Polyserve: `http://localhost:8080/components/cells-ajax/test/`
 *
 * ### web-component-tester
 *
 * The tests are compatible with [web-component-tester](https://github.com/Polymer/web-component-tester).
 * Install it via:
 *
 *     npm install -g web-component-tester
 *
 * Then, you can run your tests on _all_ of your local browsers via:
 *
 *     wct
 *
 * #### WCT Tips
 *
 * `wct -l chrome` will only run tests in chrome.
 *
 * `wct -p` will keep the browsers alive after test runs (refresh to re-run).
 *
 * `wct test/some-file.html` will test only the files you specify.
 *
 * @polymer
 * @customElement
 * @summary Ajax web component with cache and iron-localstorage reponses store
 * @extends {Polymer.Element}
 * @demo demo/index.html
 * @hero cells.svg
 */
class CellsAjax extends legacyElementMixin(Polymer.Element) {
  static get is() {
    return 'cells-ajax';
  }
  /**
   * Fired when a request is sent.
   *
   * @event request
   */

  /**
   * Fired when a response is received.
   *
   * @event response
   */

  /**
   * Fired when an error is received.
   *
   * @event error
   */
  static get properties() {
    return {
      /**
       * History to save the key and timestamp created in the localStorage by the component
       */
      keysStore: {
        type: Object,
        value: () => {
          return {};
        }
      },
      /**
       * Force http request to background threads of mobile device.
       */
      native: {
        type: Boolean,
        value: false
      },
      /**
       * Reject with the request and an error message.
       */
      rejectWithRequest: {
        type: Boolean,
        value: false
      },
      /**
       * Cache type to use, currently available `memory` and `local`.
       */
      cache: { type: String },
      /**
       * Length of time in milliseconds to cache the request.
       */
      cacheTime: { type: Number },
      /**
       * The URL target of the request.
       */
      url: {
        type: String,
        notify: true
      },
      /**
       * An object that contains query parameters to be appended to the
       * specified `url` when generating a request. If you wish to set the body
       * content when making a POST request, you should use the `body` property
       * instead.
       */
      params: {
        type: Object,
        value: () => {
          return {};
        }
      },
      /**
       * The HTTP method to use such as 'GET', 'POST', 'PUT', or 'DELETE'.
       * Default is 'GET'.
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
       * HTTP request headers to send.
       *
       * Example:
       *
       *     <iron-ajax
       *         auto
       *         url="http://somesite.com"
       *         headers='{"X-Requested-With": "XMLHttpRequest"}'
       *         handle-as="json"></iron-ajax>
       *
       * Note: setting a `Content-Type` header here will override the value
       * specified by the `contentType` property of this element.
       */
      headers: {
        type: Object,
        value: () => {
          return {};
        }
      },
      /**
       * Content type to use when sending data. If the `contentType` property
       * is set and a `Content-Type` header is specified in the `headers`
       * property, the `headers` property value will take precedence.
       */
      contentType: {
        type: String,
        value: null
      },
      /**
       * Body content to send with the request, typically used with "POST"
       * requests.
       *
       * If body is a string it will be sent unmodified.
       *
       * If Content-Type is set to a value listed below, then
       * the body will be encoded accordingly.
       *
       *    * `content-type="application/json"`
       *      * body is encoded like `{"foo":"bar baz","x":1}`
       *    * `content-type="application/x-www-form-urlencoded"`
       *      * body is encoded like `foo=bar+baz&x=1`
       *
       * Otherwise the body will be passed to the browser unmodified, and it
       * will handle any encoding (e.g. for FormData, Blob, ArrayBuffer).
       *
       * @type (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined|Object)
       */
      body: {
        type: Object
      },
      /**
       * Toggle whether XHR is synchronous or asynchronous. Don't change this
       * to true unless You Know What You Are Doing™.
       */
      sync: {
        type: Boolean,
        value: false
      },
      /**
       * Specifies what data to store in the `response` property, and
       * to deliver as `event.detail.response` in `response` events.
       *
       * One of:
       *
       *    `text`: uses `XHR.responseText`.
       *
       *    `xml`: uses `XHR.responseXML`.
       *
       *    `json`: uses `XHR.responseText` parsed as JSON.
       *
       *    `arraybuffer`: uses `XHR.response`.
       *
       *    `blob`: uses `XHR.response`.
       *
       *    `document`: uses `XHR.response`.
       */
      handleAs: {
        type: String,
        value: 'json'
      },
      /**
       * Set the withCredentials flag on the request.
       */
      withCredentials: {
        type: Boolean,
        value: false
      },
      /**
       * Set the timeout flag on the request.
       */
      timeout: {
        type: Number,
        value: 0
      },
      /**
       * If true, automatically performs an Ajax request when either `url` or
       * `params` changes.
       */
      auto: {
        type: Boolean,
        value: false
      },
      /**
       * If true, error messages will automatically be logged to the console.
       */
      verbose: {
        type: Boolean,
        value: false
      },
      /**
       * The most recent request made by this iron-ajax element.
       */
      lastRequest: {
        type: Object,
        notify: true,
        readOnly: true
      },
      /**
       * True while lastRequest is in flight.
       */
      loading: {
        type: Boolean,
        notify: true,
        readOnly: true
      },
      /**
       * lastRequest's response.
       *
       * Note that lastResponse and lastError are set when lastRequest finishes,
       * so if loading is true, then lastResponse and lastError will correspond
       * to the result of the previous request.
       *
       * The type of the response is determined by the value of `handleAs` at
       * the time that the request was generated.
       *
       * @type {Object}
       */
      lastResponse: {
        type: Object,
        notify: true,
        readOnly: true
      },
      /**
       * lastRequest's error, if any.
       *
       * @type {Object}
       */
      lastError: {
        type: Object,
        notify: true,
        readOnly: true
      },
      /**
       * An Array of all in-flight requests originating from this iron-ajax
       * element.
       */
      activeRequests: {
        type: Array,
        notify: true,
        readOnly: true,
        value: () => {
          return [];
        }
      },
      /**
       * Length of time in milliseconds to debounce multiple automatically generated requests.
       */
      debounceDuration: {
        type: Number,
        value: 0,
        notify: true
      },
      /**
       * Prefix to be stripped from a JSON response before parsing it.
       *
       * In order to prevent an attack using CSRF with Array responses
       * (http://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx/)
       * many backends will mitigate this by prefixing all JSON response bodies
       * with a string that would be nonsensical to a JavaScript parser.
       *
       */
      jsonPrefix: {
        type: String,
        value: ''
      },
      /**
       * Types of cache.
       */
      cacheTypes: {
        type: Array,
        readOnly: true,
        value: () => {
          return [
            'none',
            'memory',
            'local'
          ];
        }
      }
    };
  }
  /**
   * Performs an AJAX request to the specified URL.
   *
   * @return {!IronRequestElement}
   */
  generateRequest() {
    let request;
    let response;
    if (this.native && this.$.cellsHttpNative.isPluginManagerEnabled) {
      this.cellsHttp = this.$.cellsHttpNative;
    } else {
      this.cellsHttp = this.$.cellsHttp;
    }
    this.cellsHttp.body = this.body; // enable undefined values to make request with no body.
    let requestOptions = this.cellsHttp.toRequestOptions();
    let validCacheType = this.cacheTypes.indexOf(this.cache);
    if (validCacheType >= 0 && this.cache !== 'none' && requestOptions.method === 'GET') {
      let key = this.getRequestKey(requestOptions);
      response = this.getResponseCached(key, this.cache);
    }
    if (response) {
      request = document.createElement('iron-request');
      request.completes.then(this.cellsHttp._handleResponse.bind(this, request)).catch(this.cellsHttp._handleError.bind(this, request)).then(this.cellsHttp._discardRequest.bind(this, request));
      this.dispatchEvent(new CustomEvent('request', {
        bubbles: true,
        composed: true,
        detail: {
          request: request,
          options: requestOptions
        }
      }));
      request._setResponse(response);
      request.resolveCompletes(request);
    } else {
      request = this.cellsHttp.generateRequest();
      let cacheOptions = this._getCacheOptions(requestOptions);
      request.completes.then(this._setResponseCached.bind(this, request, cacheOptions)).catch(error => {
        console.log('Error', error);
      });
    }
    this._setLastRequest(request);
    this._setLoading(true);
    this.activeRequests.push(request);
    request.completes.then(resp => {
      this._setLoading(false);
      this.cellsHttp._discardRequest.bind(this, request);
    }).catch(error => {
      console.log('Error', error);
    });
    return request;
  }
  /**
   * Set to null the cache for the given key.
   *
   * @param  {String} name Request identifyer.
   */
  removeFromCache(key) {
    let cache = this.cache || 'local';
    if (cache === 'local') {
      this._removeFromLocalCache(key);
    } else {
      this._removeFromMemoryCache(key);
    }
  }
  /**
   * Clear the cache of the type given
   *
   * @param {String} cache
   */
  clearCache(cache) {
    cache = cache || this.cache;
    switch (cache) {
      case 'local':
        this._removeLocalCache();
        break;
      case 'memory':
        break;
    }
  }
  /**
   * Creates a string key based on request.
   *
   * @param  {Object} requestOptions
   * @return {String} Created key
   */
  getRequestKey(requestOptions) {
    requestOptions = requestOptions || this.requestOptions;
    let paramKey = '';
    if (typeof requestOptions.params === 'string') {
      paramKey = requestOptions.params;
    } else if (typeof requestOptions.params === 'object') {
      for (let key in requestOptions.params) {
        if (requestOptions.params[key]) {
          paramKey += '_' + requestOptions.params[key];
        }
      }
    }
    let keyName = requestOptions.url + paramKey;
    return keyName;
  }
  /**
   * Create the expiration key.
   *
   * @param  {String} key [key from expiration]
   * @return {String} [expiration key]
   */
  getCacheExpirationKey(key) {
    return 'expiration_' + key;
  }
  /**
   * Calculates expiration value for cache.
   *
   * @param  {Number} cache cache time
   * @return {Number} expiration time
   */
  _getCacheExpirationValue(cacheTime) {
    cacheTime = isNaN(cacheTime) ? cacheTime : this.cacheTime;
    if (isNaN(cacheTime)) {
      cacheTime = 10 * 60 * 1000;
    }
    return new Date().getTime() + cacheTime;
  }

  getResponseCached(key, cache) {
    let response;
    key = key || this.getRequestKey(this.cellsHttp.toRequestOptions());
    cache = cache || this.cache;
    let expirationKey = this.getCacheExpirationKey(key);
    switch (cache) {
      case 'local':
        response = this._getLocalCache(key);
        break;
      case 'memory':
        response = this._getMemoryCache(key);
        break;
    }
    return response;
  }
  /**
   * Checks if cache has expired
   *
   * @param  {Object} expiration info about response expirtion time
   * @return {Boolean} true if cache is expired
   */
  _isCacheExpired(expiration) {
    return navigator && navigator.onLine && expiration && parseInt(expiration) < new Date().getTime();
  }

  _getCacheOptions(requestOptions) {
    return {
      type: this.cache,
      key: this.getRequestKey(requestOptions),
      time: this._getCacheExpirationValue(this.cacheTime)
    };
  }

  _removeLocalCache() {
    for (let key in this.keysStore) {
      if (this.keysStore.hasOwnProperty(key)) {
        this._removeFromLocalCache(key);
      }
    }
  }

  _setResponseCached(request, cacheOptions) {
    let expiration = {
      key: this.getCacheExpirationKey(cacheOptions.key),
      value: cacheOptions.time
    };
    switch (cacheOptions.type) {
      case 'local':
        this._setLocalCache(cacheOptions.key, request.response, expiration);
        break;
      case 'memory':
        this._setMemoryCache(cacheOptions.key, request.response, expiration);
        break;
    }
  }
  /**
   * Save request response in local storage
   *
   * @param  {String} key Request identifyer based on props
   * @param  {Object} response Data obtained from request
   * @param  {Object} expiration Info about response expirtion time
   * @private
   */
  _setLocalCache(key, response, expiration) {
    this.keysStore[key] = expiration.value;
    this.$.ironLocalStorage.name = key;
    this.$.ironLocalStorage.value = response;
    this.$.ironLocalStorage.save();
  }
  /**
   * Get response from local storage.
   *
   * @param  {String} name Request identifyer based on props.
   * @return {Object} value Cached response
   * @private
   */
  _getLocalCache(key) {
    let value = null;
    let expiration;
    this.$.ironLocalStorage.name = key;
    this.$.ironLocalStorage.reload();
    expiration = this.$.ironLocalStorage.value;
    if (this._isCacheExpired(expiration)) {
      this._removeFromLocalCache(key);
    } else {
      this.$.ironLocalStorage.name = key;
      this.$.ironLocalStorage.reload();
      value = this.$.ironLocalStorage.value;
    }
    return value;
  }
  /**
   * Set to null the local cache for the given key.
   *
   * @param  {String} name Request identifyer based on props.
   * @private
   */
  _removeFromLocalCache(key) {
    window.localStorage.removeItem(key);
    delete this.keysStore[key];
  }

  _setMemoryCache(key, response, expiration) {
    memoryCache[key] = JSON.stringify(response);
    this.keysStore[key] = expiration.value;
  }

  _getMemoryCache(key) {
    let value = null;
    let expiration = this.keysStore[key];
    if (this._isCacheExpired(expiration)) {
      this._removeFromMemoryCache(key);
    } else {
      value = memoryCache[key] ? JSON.parse(memoryCache[key]) : null;
    }
    return value;
  }

  _removeFromMemoryCache(key) {
    delete memoryCache[key];
    delete this.keysStore[key];
  }

  _onRequest(event, data) {
    event.stopPropagation();
    this._setLastRequest(data);
    this.dispatchEvent(new CustomEvent('request', {
      bubbles: true,
      composed: true,
      detail: {}
    }));
  }

  _onResponse(event, request) {
    event.stopPropagation();
    this._setLastResponse(request.response);
    this.dispatchEvent(new CustomEvent('response', {
      bubbles: true,
      composed: true,
      detail: request
    }));
  }

  _onError(event, data) {
    event.stopPropagation();
    this._setLastError(data);
    this.dispatchEvent(new CustomEvent('error', {
      bubbles: true,
      composed: true,
      detail: data
    }));
  }

  _discardRequest(request) {
    let requestIndex = this.activeRequests.indexOf(request);
    if (requestIndex > -1) {
      this.activeRequests.splice(requestIndex, 1);
    }
  }
}

window.customElements.define(CellsAjax.is, CellsAjax);
