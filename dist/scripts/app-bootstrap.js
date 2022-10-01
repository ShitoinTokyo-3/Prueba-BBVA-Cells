(function(document) {
  'use strict';

  if (typeof Object.assign !== 'function') {
    // .length of function is 2
    Object.assign = function (target, varArgs) {
      if (target === null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        // Skip over if undefined or null
        if (nextSource !== null) {
          for (var nextKey in nextSource) {

            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    };
  }

  // Array.prototype.find ES6 polyfill for ES5 versions
  Array.prototype.find = Array.prototype.find || function(callback) {
    if (this === null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    } else if (typeof callback !== 'function') {
      throw new TypeError('callback must be a function');
    }
    var list = Object(this);
    // Makes sures is always has an positive integer as length.
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    for (var i = 0; i < length; i++) {
      var element = list[i];
      if ( callback.call(thisArg, element, i, list) ) {
        return element;
      }
    }
  };

  window.AppConfig = {"deployEndpoint":"","i18nPath":"locales/","componentsPath":"./bower_components/","composerEndpoint":"./composerMocks/","pages":[],"pagesPath":"pages/","appId":"","debug":true,"mocks":true,"coreCache":true,"routerLog":false,"cordovaScript":"cordova.js","prplLevel":1,"initialBundle":["login.json"],"transpile":true,"transpileExclude":["cells-rxjs","moment","d3","bgadp*"],"enableLitElement":false,"engine":"polymer","once":true,"pageDefinitions":[{"name":"another","type":"dynamic","hasModules":false,"adapter":"polymer"},{"name":"login","type":"dynamic","hasModules":false,"adapter":"polymer"},{"name":"routerExample","type":"dynamic","hasModules":false,"adapter":"polymer"}],"devmode":true};
  window.AppComposerConfig = {};

  function removeSplashScreen() {
    var loadEl = document.getElementById('splash');
    if (loadEl) {
      loadEl.parentNode.removeChild(loadEl);
      document.body.classList.remove('loading');
    }
  }

  function continueLoading() {
    if (isLoadingInitialPage()) {
      fireComponentsLoadEvent();
    } else {
      loadAppElements(fireComponentsLoadEvent);
    }
  }

  function fireComponentsLoadEvent() {
    var eventComponentsLoaded = new CustomEvent('componentsLoaded');
    document.body.dispatchEvent(eventComponentsLoaded);
  }

  function onScriptLoadError(file, cb) {
    return function() {
      var customEvent = new CustomEvent('scriptLoadError', {
        detail: file
      });
      document.body.dispatchEvent(customEvent);
      if (typeof(cb) === 'function') {
        cb();
      }
    };
  }

  function _importFile(url, cb, async) {
    var loadAsync = typeof async !== 'undefined' ? async : false;
    var nextBundle = document.createElement('link');
    nextBundle.rel = 'import';
    nextBundle.href = url;
    nextBundle.addEventListener('load', cb);
    nextBundle.addEventListener('error', onScriptLoadError(nextBundle.href, cb));
    if(loadAsync){
      nextBundle.setAttribute('async', '');
    }
    document.head.appendChild(nextBundle);
  }

  function loadInitialPolymerComponents(cb) {
    _importFile(window.AppConfig.deployEndpoint + window.AppConfig.componentsPath + 'initial-components.html', cb);
  }

  function loadAppPolymerComponents(cb) {
    _importFile(window.AppConfig.deployEndpoint + window.AppConfig.componentsPath + 'app-components.html', cb, true);
  }

  function loadInitialLitComponents(cb) {
      _importFile(window.AppConfig.deployEndpoint + 'lit-initial-components.html', cb);
  }

  function loadAppLitComponents(cb) {
    _importFile(window.AppConfig.deployEndpoint + 'lit-components.html', cb, true);
  }

  function loadElements() {
    if (window.AppConfig.onlyLitElements) {
      loadInitialLitComponents(continueLoading);
    } else {
      loadInitialPolymerComponents(function(){
        if (window.AppConfig.enableLitElement) {
          loadInitialLitComponents(continueLoading);
        } else {
          continueLoading();
        }
      });
    }
  }

  function loadAppElements(cb) {
    if (window.AppConfig.onlyLitElements) {
      loadAppLitComponents(cb);
    } else {
      loadAppPolymerComponents(function() {
        if (window.AppConfig.enableLitElement) {
          loadAppLitComponents(cb);
        } else {
          if (cb && typeof(cb) === 'function') {
            cb();
          }
        }
      });
    }
  }

  function loadWebComponentPolyfill() {
    var url = 'none';
    if (window.AppConfig.onlyLitElements) {
      url = window.AppConfig.deployEndpoint + 'scripts/webcomponentsjs/webcomponents-lite.js';
    } else {
      url = window.AppConfig.deployEndpoint + window.AppConfig.componentsPath + 'webcomponentsjs/webcomponents-lite.js';
    }

    var polyfill = document.createElement('script');
    polyfill.src = url;
    polyfill.addEventListener('load', proxyCustomElements);
    //window.addEventListener('WebComponentsReady', proxyCustomElements);
    polyfill.addEventListener('error', onScriptLoadError(polyfill.src));
    document.head.appendChild(polyfill);
  }

  function isLoadingInitialPage() {
    var initialPage;
    var hash;
    var isInitialPage = true;
    if (window.AppConfig.initialBundle && window.AppConfig.initialBundle.length > 0) {
      hash = window.location.hash;
      if (hash==='' || hash==='#!/') {
        isInitialPage = true;
      } else {
        initialPage = window.AppConfig.initialBundle[0].split('.')[0];
        isInitialPage = hash.indexOf(initialPage) > -1;
      }
    }

    return isInitialPage;
  }

  function onNavigation(msg) {
    var customEvent = new CustomEvent('aria-announce', {
      detail: msg.detail.detail.page
    });
    document.body.dispatchEvent(customEvent);
  }

  function onAnnounce(msg) {
    var announcer = document.querySelector('#announcer');
    if (announcer) {
      announcer.textContent = msg.detail;
    }
  }

  function detectPlatform(which, orelse) {
    return 'desktop';
    //return window.bowser[which] ? which : orelse;
  }

  //TODO: write a proper platform detection
  function getPlatform() {
    return detectPlatform('ios', detectPlatform('android', 'desktop'));
  }

  function shouldAddCordovaScript(config) {
    var userAgent = window.navigator.userAgent.toLowerCase();
    var ios = /iphone|ipod|ipad/.test(userAgent);
    var android = /android/.test(userAgent);
    var safari = /safari/.test(userAgent);
    var webViewWv = / wv\)/.test(userAgent);
    var crosswalk = /crosswalk/.test(userAgent);

    //var webViewVersion = /version/.test(userAgent);

    if (!config.cordovaScript) {
      return false;
    }

    if (ios) {
      return !safari;
    }

    if (android) {
      return (webViewWv || crosswalk);
    }
  }

  function appendCordovaScript() {
    var script = document.createElement('script');
    script.setAttribute('src', window.AppConfig.cordovaScript);
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('charset', 'utf-8');
    script.onerror = onScriptLoadError(window.AppConfig.cordovaScript);
    document.body.appendChild(script);
  }

  function generateRequestHeaders() {
    var composerHeader = {};
    if (window.AppConfig.composerHeaderKey && window.AppConfig.composerHeaderValue) {
      composerHeader[window.AppConfig.composerHeaderKey] = window.AppConfig.composerHeaderValue;
    }
    return composerHeader;
  }

  function onRender(template, fixed) {
    if (!template.parentNode) {
      document.getElementById(this.mainNode).appendChild(template);
      var eventComponentsLoaded = new CustomEvent('componentsInTemplateLoaded');
      document.body.dispatchEvent(eventComponentsLoaded);
    }
    if (fixed) {
      document.getElementById('external__header').innerHTML = '';
      document.getElementById('external__footer').innerHTML = '';
      fixed.forEach(function(component) {
        document.getElementById(component.zone).appendChild(component.node);
      });
    }
  }

  function startCore(options) {
    return function() {
      var reference = getBridgeEngineReference(options);

      new reference(options);
    };
  }

  function getBridgeEngineReference(options) {
    var enginesNamespace = { polymer: 'CellsPolymerBridge', native: 'CellsNativeBridge' };
    var defaultEngine = 'polymer';
    var engine = ( options.engine || defaultEngine ).toLowerCase();

    if (!enginesNamespace[engine]) {
      engine = defaultEngine;

      console.warn('Invalid value for AppConfig.engine. Using ' + defaultEngine);
    }

    var engineReference = enginesNamespace[engine];

    return window[engineReference];
  }

  function webComponentsSupported() {
    return window.customElements && 'import' in document.createElement('link') && 'content' in document.createElement('template');
  }

  function proxyCustomElements() {
    var _customElementsDefine = window.customElements.define;

    window.customElements.define = function(name, cl, conf) {
      if (!customElements.get(name)) {
        _customElementsDefine.call(window.customElements, name, cl, conf);
      } else {
        console.warn(name + 'has been defined twice');
      }
    };

    loadElements();
  }

  window.CellsPolymer = {
    start: function(options) {
      var config = Object.assign({
          binding: 'currentview',
          cache: window.AppConfig.coreCache || false,
          domMode: 'shadow',
          headers: generateRequestHeaders(),
          mainNode: 'app__content',
          onRender: onRender,
          getPlatform: getPlatform,
          preCache: false,
          preRender: false
        },
        window.AppConfig,
        options,
        AppComposerConfig
      );

      var onNavigation = config.onNavigation || onNavigation;
      var removeSplash = config.removeSplashScreen || removeSplashScreen;

      window.Polymer = window.Polymer || {
        dom: config.domMode,
        lazyRegister: 'max',
        useNativeCSSProperties: true
      };

      document.body.addEventListener('aria-announce', onAnnounce);
      document.body.addEventListener('componentsInTemplateLoaded', removeSplash, { once: true });
      if (config.initialBundle && isLoadingInitialPage() && !window.AppConfig.onlyLitElements) {
        document.body.addEventListener('componentsInTemplateLoaded', loadAppElements);
      }
      document.body.addEventListener('componentsLoaded', startCore(config), { once: true });

      if (options.enableSSLPinning) {
        document.body.addEventListener('componentsLoaded', options.enableSSLPinning, { once: true });
      }

      document.getElementById(config.mainNode).addEventListener('nav-request', onNavigation);

      if (shouldAddCordovaScript(config)) {
        appendCordovaScript();
      }

      if (!config.skipInitialLoad) {
        this._loadElements();
      }
    },
    _loadElements: function() {
      if (webComponentsSupported()) {
        proxyCustomElements();
      } else {
        loadWebComponentPolyfill();
      }
    }
  };
})(document);