![cells-http-native screenshot](native.svg)

# cells-http-native

![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg) ![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)

[Demo of component in Cells Catalog](https://catalogs.platform.bbva.com/cells)

The `cells-http-native` element exposes network request functionality.
```html
<cells-http-native
url="http://gdata.youtube.com/feeds/api/videos/"
params='{"alt":"json", "q":"chrome"}'
on-response="handleResponse"></cells-http-native>
```
You can trigger a request explicitly by calling `generateRequest` on the element.