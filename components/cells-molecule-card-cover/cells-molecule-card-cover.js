/**
 * # cells-molecule-card-cover
 *
 * ![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)
 * ![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)
 *
 * [Demo of component in Cells Catalog](https://catalogs.platform.bbva.com/cells)
 *
 * An image with an optional overlay and icon to cover it.
 *
 * Expects one mandatory attribute:
 * - **image-src**: Url of the cover image.
 *
 * You can also use the attribute `default-image` to set a default/fallback image in case the one set with `image-src` fails to load.
 *
 * Use the `alt` attribute to set the alt text of the image.
 *
 * ```html
 * <cells-molecule-card-cover image-src="path/to/image.png" alt="Image alt text"></cells-molecule-card-cover>
 * ```
 *
 * ```html
 * <cells-molecule-card-cover image-src="path/to/image.png" alt="Image alt text" default-image="path/to/fallback-image.png"></cells-molecule-card-cover>
 * ```
 *
 * ## Custom size
 *
 * Use the `width` and `height` attributes to define a custom size for the image. Setting just one of them will preserve the aspect ratio of the image.
 *
 * ```html
 * <cells-molecule-card-cover
 * image-src="path/to/image.png"
 * alt="Image alt text"
 * width="200">
 * </cells-molecule-card-cover>
 * ```
 *
 * ```html
 * <cells-molecule-card-cover
 * image-src="path/to/image.png"
 * alt="Image alt text"
 * height="120">
 * </cells-molecule-card-cover>
 * ```
 *
 * ## Overlay and icon
 *
 * Using the `show-overlay`, `icon` and `text` attributes, you can show a layer over the image with an icon and/or text centered on it. The icon size can be changed with the `icon-size` attribute.
 *
 * ```html
 * <cells-molecule-card-cover
 * image-src="path/to/image.png"
 * alt="Image alt text"
 * width="200"
 * height="150"
 * show-overlay>
 * </cells-molecule-card-cover>
 * ```
 *
 * ```html
 * <cells-molecule-card-cover
 * image-src="path/to/image.png"
 * alt="Image alt text"
 * width="200"
 * height="150"
 * show-overlay
 * icon="coronita:block"
 * icon-size="36"
 * text="Lorem ipsum">
 * </cells-molecule-card-cover>
 * ```
 *
 * ## Preload, placeholder and fade
 *
 * As in `iron-image`, you can use `preload` attribute to show a placeholder image or placeholder styles (using the mixin `cells-molecule-card-cover-iron-image-placeholder`) while the image is still loading. Use `placeholder` attribute to set the path to the placeholder image, and the `fade` attribute if you want a fade-in effect when the image loads.
 *
 * ```html
 * <cells-molecule-card-cover
 * image-src="path/to/image.png"
 * alt="Image alt text"
 * width="200"
 * height="150"
 * preload
 * fade
 * placeholder="path/to/placeholder-image.png">
 * </cells-molecule-card-cover>
 * ```
 *
 * ## Status
 *
 * Use the `status` attribute to set one of predefined status to the card. Default available status are `locked`, `activate` and `off`. Using a status will automatically show the overlay on the card.
 *
 * ```html
 * <cells-molecule-card-cover
 * status="locked"
 * icon="coronita:block"
 * text="Locked"
 * image-src="path/to/image.png"
 * width="200"
 * height="150"
 * alt="Image alt text">
 * </cells-molecule-card-cover>
 * ```
 *
 * ## Icons
 *
 * Since this component uses icons, it will need an [iconset](https://bbva.cellsjs.com/guides/best-practices/cells-icons.html) in your project as an [application level dependency](https://bbva.cellsjs.com/guides/advanced-guides/application-level-dependencies.html). In fact, this component uses an iconset in its demo.
 *
 * ## Styling
 *
 * The following custom properties and mixins are available for styling:
 *
 * | Custom property                                             | Description                                                 | Default     |
 * |:-----------------------------------------------------------:|:-----------------------------------------------------------:|:-----------:|
 * | --cells-molecule-card-cover                                 | Empty mixin for component                                   | {}          |
 * | --cells-molecule-card-cover-angled-overlay-before           | Empty mixin for overlay in :host([angled-overlay]):before   | {}          |
 * | --cells-molecule-card-cover-angled-overlay                  | Empty mixin for overlay in :host([angled-overlay])          | {}          |
 * | --cells-molecule-card-cover-img-fluid                       | Empty mixin applied to iron-image in :host([fluid])         | {}          |
 * | --cells-molecule-card-cover-iron-image-width                | Image width                                                 | 100%        |
 * | --cells-molecule-card-cover-iron-image-height               | Image height                                                | auto        |
 * | --cells-molecule-card-cover-iron-image-placeholder          | Empty mixin for image style placeholder                     | {}          |
 * | --cells-molecule-card-cover-img                             | Empty mixin for image                                       | {}          |
 * | --cells-molecule-card-cover-icon-color                      | Color for overlay icon                                      | #fff        |
 * | --cells-molecule-card-cover-icon-background-color           | Background color for overlay icon                           | #DA3851     |
 * | --cells-molecule-card-cover-icon                            | Empty mixin for overlay icon                                | {}          |
 * | --cells-molecule-card-cover-color                           | Color for overlay layer icon                                | #DA3851     |
 * | --cells-molecule-card-cover-background-color                | Background color for overlay layer                          | rgba(255,255,255,.8) |
 * | --cells-molecule-card-cover-text                            | Empty mixin for overlay text                                | {}          |
 * | --cells-molecule-card-cover-icon-text-container             | Empty mixin for overlay layer                               | {}          |
 * | --cells-molecule-card-cover-color-locked                    | Color for locked status overlay layer icon                  | #fff        |
 * | --cells-molecule-card-cover-background-color-locked         | Background color for locked status overlay layer            | #f35e61     |
 * | --cells-molecule-card-cover-icon-background-color-locked    | Background color for locked status overlay icon             | #DA3851     |
 * | --cells-molecule-card-cover-icon-color-locked               | Color for locked status overlay icon                        | inherit     |
 * | --cells-molecule-card-cover-icon-locked                     | Empty mixin for locked status overlay icon                  | {}          |
 * | --cells-molecule-card-cover-locked                          | Empty mixin for locked status overlay layer                 | {}          |
 * | --cells-molecule-card-cover-color-activate                  | Color for activate status overlay layer icon                | #fff        |
 * | --cells-molecule-card-cover-background-color-activate       | Background color for activate status overlay layer          | #1464A5     |
 * | --cells-molecule-card-cover-icon-background-color-activate  | Background color for activate status overlay icon           | #004481     |
 * | --cells-molecule-card-cover-icon-color-activate             | Color for activate status overlay icon                      | inherit     |
 * | --cells-molecule-card-cover-icon-activate                   | Empty mixin for activate status overlay icon                | {}          |
 * | --cells-molecule-card-cover-activate                        | Empty mixin for activate status overlay layer               | {}          |
 * | --cells-molecule-card-cover-color-off                       | Color for off status overlay layer icon                     | #121212     |
 * | --cells-molecule-card-cover-background-color-off            | Background color for off status overlay layer               | rgba(255,255,255,.8) |
 * | --cells-molecule-card-cover-icon-color-off                  | Color for off status overlay icon                           | #121212     |
 * | --cells-molecule-card-cover-icon-off                        | Empty mixin for off status overlay icon                     | {}          |
 * | --cells-molecule-card-cover-off                             | Empty mixin for off status overlay layer                    | {}          |
 *
 * @polymer
 * @customElement
 * @extends {Polymer.Element}
 * @demo demo/index.html
 * @hero cells-molecule-card-cover.png
 */
class CellsMoleculeCardCover extends Polymer.Element {
  static get is() {
    return 'cells-molecule-card-cover';
  }
  static get properties() {
    return  {
      /**
       * URL of the card to display.
       */
      imageSrc: {
        value: '',
        type: String,
        observer: '_imageSrcObserver'
      },

      /**
       * Available status values
       */
      _statusValue: {
        type: Array,
        value: ['locked', 'activate', 'off']
      },

      /**
       * Image witdh, default is same as original. If a value is provided, do not change the 'height' attribute unless you want to change the aspect ratio.
       */
      width: Number,

      /**
       * Image height, default is same as original. If a value is provided, do not change the 'width' attribute unless you want to change the aspect ratio.
       */
      height: Number,

      /**
       * Alternative text of the image.
       */
      alt: {
        type: String
      },

      /**
       * Activation status of the card associated to the current card cover.
       */
      _isActive: {
        type: Boolean,
        computed: '_layer(status, showOverlay)'
      },

      /**
       * Set to true to display the card veil
       */
      showOverlay: {
        type: Boolean,
        value: false
      },

      /**
       * Icon to show on the overlay.
       */
      icon: {
        type: String
      },

      /**
       * Size of the cover icon.
       */
      iconSize: {
        type: Number,
        value: 24
      },

      /**
       * Url of the default image of the card. Used if there is an error on loading the image from imageSrc.
       */
      defaultImage: {
        type: String,
        value: ''
      },

      /**
       * Read-only value that indicates that the last set src failed to load.
       */
      _imageError: {
        type: Boolean,
        observer: '_imageErrorChanged'
      },

      /**
       * When preload is true, setting fade to true will cause the image to fade into place.
       */
      fade: {
        type: Boolean,
        value: false
      },

      /**
       * When true, any change to the src property will cause the placeholder image or the placeholder style to be shown until the new image has loaded.
       */
      preload: {
        type: Boolean,
        value: false
      },

      /**
       * Image to show as placeholder while the image loads if preload is true.
       */
      placeholder: {
        type: String
      },

      /**
       * Text to show over the card.
       */
      text: {
        type: String
      },

      /**
       * Value that indicates the status of the card.
       * Different status set different styles.
       * Possible values:
       * - locked
       * - activate
       * - off
       */
      status: {
        type: String,
        value: '',
        observer: '_addStatus'
      },
      /**
       * Indicates if the image has been loaded
       * @type {Boolean}
       * @default false
       */
      imageLoaded: {
        notify: true,
        type: Boolean,
        value: false
      },

      /**
       * Set to true to make the image 100% width and height.
       * This requires setting a fluid width and height (% or vw) to the component to work.
       */
      fluid: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * Set to true to show the overlay in the corner
       */
      angledOverlay: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    };
  }
  /**
   * Uses the default image when there is an error on loading the original image.
   */
  _imageErrorChanged(error) {
    if (error && this.defaultImage) {
      this.imageSrc = this.defaultImage;
    }
  }

  /**
   * Add status classes to the overlay div.
   */
  _addStatus(status) {
    var container = this.$.iconTextContainer;
    this._deleteStatus(container);
    if (this._statusValue.indexOf(status) !== -1) {
      container.classList.add(status);
    }
  }

  /**
   * Sets _isActive property value (which determines overlay visibility) based on showOverlay and status properties
   */
  _layer(status, showOverlay) {
    var state = showOverlay || this._statusValue.indexOf(status) !== -1;
    return !state;
  }

  /**
   * Delete all possible status classes.
   */
  _deleteStatus(container) {
    var i = 0;
    var length = this._statusValue.length;

    for (i; i <= length; i += 1) {
      if (container.classList.contains(this._statusValue[i])) {
        container.classList.remove(this._statusValue[i]);
        return;
      }
    }
  }

  _imageSrcObserver(value) {
    if (value.startsWith('http')) {
      this.imageSrc = new URL(value).href;
    }
  }
}
window.customElements.define(CellsMoleculeCardCover.is, CellsMoleculeCardCover);
