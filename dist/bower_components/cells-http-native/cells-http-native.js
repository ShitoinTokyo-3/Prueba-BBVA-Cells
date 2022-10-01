/**
 *
 * # cells-http-native
 *
 * ![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg) ![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)
 *
 * [Demo of component in Cells Catalog](https://catalogs.platform.bbva.com/cells)
 *
 * The `cells-http-native` element exposes network request functionality.
 * ```html
 * <cells-http-native
 *    url="http://gdata.youtube.com/feeds/api/videos/"
 *    params='{"alt":"json", "q":"chrome"}'
 *    on-response="handleResponse"></cells-http-native>
 * ```
 * You can trigger a request explicitly by calling `generateRequest` on the element.
 *
 * @polymer
 * @customElement
 * @summary Exposes network request functionality
 * @extends {Polymer.Element}
 * @demo demo/index.html
 * @hero hero.svg
 */
class CellsHttpNative extends Polymer.Element {
  static get is() {
    return 'cells-http-native';
  }
  static get properties() {
    return {
      headers: {
        type: Object,
        value: {}
      },
      params: {
        type: Object,
        value: {}
      },
      url: { type: String },
      method: {
        type: String,
        value: 'get'
      },
      multipart: {
        type: Object,
        value: null
      },
      timeout: {
        type: Number,
        value: 60
      },
      /**
       * The most recent request made by this cells-http-native element.
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
       * Will be set to the most recent response received by a request
       * that originated from this element.
       */
      lastResponse: {
        type: Object,
        notify: true,
        readOnly: true
      },
      /**
       * Will be set to the most recent error that resulted from a request
       * that originated from this element.
       */
      lastError: {
        type: Object,
        notify: true,
        readOnly: true
      }
    };
  }

  get isPluginManagerEnabled() {
    return !!window.CellsNativePlugins && !!window.CellsNativePlugins.Http;
  }

  /**
   * Performs an native request to the specified URL.
   *
   * @return {!IronRequestElement}
   */
  generateRequest() {
    if (!this.isPluginManagerEnabled) {
      console.warn('There isnt any HTTP plugin initialized');
      return;
    }

    const request = this._buildRequest();

    return this._sendRequest(request);
  }

  _buildRequest() {
    const request = document.createElement('iron-request');

    request.completes.then(this._handleResponse.bind(this)).catch(this._handleError.bind(this, request)).then(this._discardRequest.bind(this, request));
    return request;
  }

  _sendRequest(request) {
    const requestOptions = this.toRequestOptions();

    if (this.isPluginManagerEnabled) {
      return this._sendRequestThroughPluginManager(request, requestOptions);
    }
  }

  _sendRequestThroughPluginManager(request, requestOptions) {
    const { method, url, params, headers, multipart, timeout } = requestOptions;

    window.CellsNativePlugins.Http[ method ](url, params, headers, (msg) => this._handleRequestSuccess(request, msg), (msg) => this._handleRequestFail(request, msg), multipart, timeout);

    return request;
  }

  _handleRequestSuccess(request, msg) {
    let data = msg.data;
    let isBlob = false;

    if (this.checkIsAJson(msg.data)) {
      data = JSON.parse(data);
    } else if (this.checkIsAPdf(msg.headers)) {
      isBlob = true;
      data = this.parseBinary(msg, 'application/pdf');
    } else if (this.checkIsAnImage(msg.headers)) {
      const targetType = this.extractContentTypeFromHeaders(msg.headers);

      isBlob = true;
      data = this.parseBinary(msg, targetType);
    } else if (this.checkIsMultipart(msg)) {
      isBlob = true;
    } else {
      const parser = new DOMParser();
      data = parser.parseFromString(data, 'text/xml');
    }
    const statusMsg = msg.status ? JSON.parse(msg.status) : 0;
    const headers = msg.headers ? JSON.parse(msg.headers) : {};
    const response = {
      status: statusMsg,
      data,
      headers
    };
    const extendedResponse = isBlob ? response.data : Object.assign({}, response.data, { headers: response.headers });
    request._setResponse(extendedResponse);
    this._setLastResponse(response);
    request.resolveCompletes(request);
  }

  _handleRequestFail(request, msg) {
    this._setLastError(msg);
    request.rejectCompletes(msg);
  }

  /**
   * Check if 'str' is a valid JSON
   */
  checkIsAJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  checkIsAPdf(headers) {
    const contentType = this.extractContentTypeFromHeaders(headers);

    return contentType && contentType.includes('application/pdf');
  }

  checkIsMultipart(msg) {
    const { headers } = msg;
    const contentType = this.extractContentTypeFromHeaders(headers);

    return contentType && contentType.includes('multipart/');
  }

  checkIsAnImage(headers) {
    const allowedMimeTypes = [
      'image/gif',
      'image/png',
      'image/jpeg',
      'image/bmp'
    ];
    const contentType = this.extractContentTypeFromHeaders(headers);

    return contentType && allowedMimeTypes.some(type => type.includes(contentType));
  }

  parseBinary(msg, type) {
    const { data } = msg;
    const decodedBase64 = window.atob(data);
    const toByteArray = (content) => {
      const byteNumbers = new Array(content.length);
      for (let i = 0; i < content.length; i++) {
        byteNumbers[ i ] = content.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers); // eslint-disable-line

      return byteArray;
    };
    const rawData = toByteArray(decodedBase64);

    return new Blob([ rawData ], { type });
  }

  extractContentTypeFromHeaders(headers) {
    let deserializedHeaders;

    try {
      deserializedHeaders = JSON.parse(headers);
    } catch (e) {
      return null;
    }

    if (deserializedHeaders) {
      return deserializedHeaders[ 'Content-Type' ] || deserializedHeaders[ 'content-type' ];
    }

    return null;
  }

  /**
   * Request options suitable for generating an `iron-request` instance based
   * on the current state of the `cells-http-native` instance's properties.
   *
   * @return
   * ```json
   * {
   *   url: string,
   *   method: (string|undefined),
   *   headers: (Object|undefined),
   *   params: (string|undefined)
   * }
   * ```
   */
  toRequestOptions() {
    const requestOptions = {
      url: this.url,
      method: this.method.toLowerCase(),
      headers: this.headers,
      params: this.body ? this.body : this.params,
      multipart: this.multipart,
      timeout: this.timeout
    };

    if (requestOptions.params === '') {
      requestOptions.params = {};
    }

    return requestOptions;
  }

  /**
   * Fired response event
   *
   * @event response
   */
  _handleResponse(request) {
    if (request === this.lastRequest) {
      this._setLastResponse(request.response);
      this._setLastError(null);
      this._setLoading(false);
    }
    this.dispatchEvent(new CustomEvent('response', {
      bubbles: true,
      composed: true,
      detail: request.response
    }));
  }

  /**
   * Fired error event
   *
   * @event error
   */
  _handleError(request, error) {
    if (this.verbose) {
      console.error(error);
    }
    if (request === this.lastRequest) {
      this._setLastError({
        request: request,
        error: error
      });
      this._setLastResponse(null);
      this._setLoading(false);
    }
    this.dispatchEvent(new CustomEvent('error', {
      bubbles: true,
      composed: true,
      detail: {
        request: request,
        error: error
      }
    }));
  }
  _discardRequest(request) {
    //TODO: nothing here for the moment...
  }
}
window.customElements.define(CellsHttpNative.is, CellsHttpNative);
