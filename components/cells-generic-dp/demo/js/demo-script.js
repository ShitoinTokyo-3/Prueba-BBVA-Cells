'use strict';

function _setDemo() {
  var dom = arguments.length > 0 && arguments[ 0 ] !== undefined ? arguments[ 0 ] : null;
  var id = arguments.length > 1 && arguments[ 1 ] !== undefined ? arguments[ 1 ] : '';

  var button = dom.$[ id + '-start' ];
  var demo = dom.$[ '' + id ];
  var code = dom.$[ id + '-response' ];

  if (!code && id === 'error') {
    code = dom.$[ 'default-response' ];
  }

  if (code) {
    code = code.querySelector('code');
  }

  if (button && code) {
    button.addEventListener('click', function(e) {
      demo.addEventListener('request-success', function(event) {
        console.log('event: ', event);
        code.innerText = '\n' + JSON.stringify(event.detail, null, 2);
      });
      demo.addEventListener('request-error', function(event) {
        code.innerText = '\n' + JSON.stringify(event.detail, null, 2);
      });
      demo.generateRequest();
    });
  }
}

(function(w, d) {
  w.addEventListener('WebComponentsReady', function(e) {

    var demo = d.querySelector('dom-bind');

    ['default', 'error', 'verbose', 'path', 'method', 'params', 'body', 'headers'].forEach(function(id) {
      return _setDemo(demo, id);
    });
  });
}(window, document));
