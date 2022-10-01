const iconLabelMap = {
  'search': 'cells-component-app-header-search-label',
  'menu': 'cells-component-app-header-menu-label',
  'help': 'cells-component-app-header-help-label',
  'back': 'cells-component-app-header-back-label',
  'close': 'cells-component-app-header-close-label'
};
/**
 * 
 *
 * # cells-component-app-header
 *
 * ![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg) ![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)
 *
 * [Demo of component in Cells Catalog](https://catalogs.platform.bbva.com/cells)
 *
 * `<cells-component-app-header>` is a header with three buttons and a title, both are configurables. This component has one button in the left side, and one or two buttons in the right side.
 *
 * Each of the icons can have one of the available values or types for the predefined icons or a custom icon ID if the available values don't fit your needs.
 * When using any of the available default values, the translation for the corresponding icon is automatically set. That translation can be overriden by setting `iconLeftLabel`, `iconRightLabel` or `iconRightSecondaryLabel`.
 *
 * The available icon types are: menu, back, close, help and search.
 *
 * If you don't set the value for the icons, the icon and it's button won't be shown.
 *
 * ### Example using available values for each icon
 *
 * ```html
 * <cells-component-app-header
 * text="Hello Jhon"
 * icon-left="back"
 * icon-right-secondary="help"
 * icon-right="menu">
 * </cells-component-app-header>
 * ```
 *
 * ### Example with custom icons (not Coronita)
 *
 * The icons and their meaning are the same but the iconset changes.
 * In this case, we only need to set the icon ID for each of the available icon types.
 * This way we don't need to set the translation for each icon.
 *
 * ```html
 * <cells-component-app-header
 * text="Global Position"
 * icon-back="banking:B37"
 * icon-menu="banking:B34"
 * icon-help="banking:D04"
 * icon-left="back"
 * icon-right="menu"
 * icon-right-secondary="help">
 * </cells-component-app-header>
 * ```
 *
 * ### Example with custom icons and translations
 *
 * When we need to use an icon that is not available in the default values, we need to set the icon ID and the translation.
 *
 * ```html
 * <cells-component-app-header
 * text="My profile"
 * icon-left="coronita:settings"
 * icon-left-label="Settings"
 * icon-right="coronita:on"
 * icon-right-label="Logout">
 * </cells-component-app-header>
 * ```
 *
 * ### Example using a slot for the text instead of the `text` attribute
 *
 * ```html
 * <cells-component-app-header>
 * <span slot="title">I'm the component header</span>
 * </cells-component-app-header>
 * ```
 *
 * ### Example with secondary class
 *
 * The component has white background and blue text color when it has the "secondary" class.
 * The default styles applied to the "secondary" class are customizable via mixins, CSS vars or shared styles.
 *
 * ```html
 * <cells-component-app-header class="secondary" text="title"></cells-component-app-header>
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
 * ### Custom Properties
 * | Custom Property                                        | Selector               | CSS Property     | Value                                                   |
 * | ------------------------------------------------------ | ---------------------- | ---------------- | ------------------------------------------------------- |
 * | --cells-component-app-header-height                    | :host                  | min-height       | 3.75rem                                                 |
 * | --cells-component-app-header-bg-color                  | :host                  | background-color | --bbva-navy                                             |
 * | --cells-component-app-header-color                     | :host                  | color            | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff |
 * | --cells-fontDefault                                    | :host                  | font-family      | sans-serif                                              |
 * | --cells-component-app-header-secondary-bg-color        | :host(.secondary)      | background-color | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff |
 * | --cells-component-app-header-secondary-color           | :host(.secondary)      | color            | --bbva-navy                                             |
 * | --cells-component-app-header-secondary-height          | :host(.secondary)      | height           | 3.75rem                                                 |
 * | --cells-component-app-header-secondary-btn-color       | :host(.secondary) .btn | color            | --bbva-navy                                             |
 * | --cells-component-app-header-btn-size                  | .nav                   | min-width        | 3.125rem                                                |
 * | --cells-component-app-header-btn-size                  | .btn                   | min-width        | 3.125rem                                                |
 * | --cells-component-app-header-btn-size                  | .btn                   | min-height       | 3.125rem                                                |
 * | --cells-component-app-header-btn-color                 | .btn                   | color            | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff |
 * | --cells-component-app-header-btn-right-secondary-width | .btn-right-secondary   | min-width        | 1.5625rem                                               |
 * | --cells-component-app-header-crumb-color               | .crumb                 | color            | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff |
 * | --cells-component-app-header-bread-color               | .bread                 | color            | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff |
 * | --cells-component-app-header-label-right-color         | .label-right           | color            | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff |
 * ### @apply
 * | Mixins                                              | Selector                 | Value |
 * | --------------------------------------------------- | ------------------------ | ----- |
 * | --cells-component-app-header                        | :host                    | {}    |
 * | --cells-component-app-header-after                  | :host:after              | {}    |
 * | --cells-global-focus                                | *:focus                  | {}    |
 * | --cells-global-active                               | *:active                 | {}    |
 * | --cells-global-active                               | button:active            | {}    |
 * | --cells-component-app-header-secondary              | :host(.secondary)        | {}    |
 * | --cells-component-app-header-secondary-after        | :host(.secondary):after  | {}    |
 * | --cells-component-app-header-secondary-title        | :host(.secondary) .title | {}    |
 * | --cells-component-app-header-secondary-btn          | :host(.secondary) .btn   | {}    |
 * | --cells-component-app-header-nav                    | .nav                     | {}    |
 * | --cells-component-app-header-navleft                | .nav-left                | {}    |
 * | --cells-component-app-header-navright               | .nav-right               | {}    |
 * | --cells-component-app-header-title                  | .title                   | {}    |
 * | --cells-component-app-header-left-icon              | .icon-left               | {}    |
 * | --cells-component-app-header-right-icon             | .icon-right              | {}    |
 * | --cells-component-app-header-right-secondary-icon   | .icon-right-secondary    | {}    |
 * | --cells-component-app-header-btn                    | .btn                     | {}    |
 * | --cells-component-app-header-btn-with-label         | .btn-with-label          | {}    |
 * | --cells-component-app-header-crumb                  | .crumb                   | {}    |
 * | --cells-component-app-header-crumb-attribute-before | .crumb::before           | {}    |
 * | --cells-component-app-header-bread                  | .bread                   | {}    |
 * | --cells-component-app-header-label-right            | .label-right             | {}    |
 *
 *
 * @polymer
 * @customElement
 * @summary Is a header with three buttons and a title, both are configurables. This component has one button in the left side and two in the right side.
 * @extends {Polymer.Element}
 * @demo demo/index.html
 * @hero cells-component-app-header.png
 * @composer
 * @description is a header with three buttons and a title, both are configurables. This component has one button in the left side and two in the right side.
 * @type UI
 * @platforms android, ios, desktop
 * @family cells-catalog-navigation-family
*/
class CellsComponentAppHeader extends Polymer.mixinBehaviors([ CellsBehaviors.i18nBehavior ], Polymer.Element) {
  static get is() {
    return 'cells-component-app-header';
  }
  /**
   * Right button is pressed
   * @event right-button-pressed
   */

  /**
   * Right secondary button is pressed
   * @event right-secondary-button-pressed
   */

  /**
   * Left button is pressed
   * @event left-button-pressed
   */
  static get properties() {
    return {
      /**
      * Header text.
      */
      text: {
        type: String
      },

      /**
      * Available icon names to be used for each icon.
      */
      icons: {
        type: Object,
        readOnly: true,
        value: () => {
          return {
            'menu': 'iconMenu',
            'back': 'iconBack',
            'close': 'iconClose',
            'help': 'iconHelp',
            'search': 'iconSearch'
          };
        }
      },

      /**
      * Icon to be used for the left icon.
      * Available values are menu, back, close, help, search or a custom icon ID.
      */
      iconLeft: {
        type: String
      },

      /**
      * Icon to be used for the icon of the right side.
      * Available values are menu, back, close, help, search or a custom icon ID.
      */
      iconRight: {
        type: String
      },

      /**
       * Icon to be used for the secondary icon of the right side (placed at the left of the right icon).
       * Available values are menu, back, close, help, search or a custom icon ID.
       */
      iconRightSecondary: {
        type: String
      },

      /**
       * Help icon code.
       */
      iconHelp: {
        type: String,
        value: 'coronita:help'
      },

      /**
       * Menu icon code.
       */
      iconMenu: {
        type: String,
        value: 'coronita:menu'
      },

      /**
       * Back icon code.
       */
      iconBack: {
        type: String,
        value: 'coronita:return-12'
      },

      /**
       * Search icon code.
       */
      iconSearch: {
        type: String,
        value: 'coronita:search'
      },

      /**
       * Close icon code.
       */
      iconClose: {
        type: String,
        value: 'coronita:close'
      },

      /**
       * Icon size.
       */
      iconSize: {
        type: Number,
        value: 18
      },

      /**
       * Aria level for the heading.
       */
      headingLevel: {
        type: Number,
        value: 1
      },


      _iconStyle: {
        type: String,
        computed: '_computeIconStyle(iconSize)'
      },

      /**
       * String or translation key for the left icon.
       */
      iconLeftLabel: {
        type: String,
        value: ''
      },

      /**
       * String or translation key for the right icon.
       */
      iconRightLabel: {
        type: String,
        value: ''
      },

      /**
       * String or translation key for the secondary right icon.
       */
      iconRightSecondaryLabel: {
        type: String,
        value: ''
      },

      /**
       * Computed icon IDs.
       */
      _iconLeft: {
        type: String,
        value: '',
        computed: '_computeIconID(iconLeft, icons)'
      },

      _iconRight: {
        type: String,
        value: '',
        computed: '_computeIconID(iconRight, icons)'
      },
      _iconRightSecondary: {
        type: String,
        value: '',
        computed: '_computeIconID(iconRightSecondary, icons)'
      },

      /**
       * Computed translation keys.
       */
      _iconLeftLabel: {
        type: String,
        computed: '_computeIconLabel(iconLeft, iconLeftLabel)'
      },

      _iconRightLabel: {
        type: String,
        computed: '_computeIconLabel(iconRight, iconRightLabel)'
      },

      _iconRightSecondaryLabel: {
        type: String,
        computed: '_computeIconLabel(iconRightSecondary, iconRightSecondaryLabel)'
      },

      bread: {
        type: String,
        value: ''
      },

      /**
       * Bread crumbs bread
       */
      crumb: {
        type: String,
        value: ''
      },

      /**
      *  Label for the nav right
      */
      labelRight: {
        type: String,
        value: ''
      }
    };
  }
  _onButtonClick(e) {
    const evName = e.currentTarget.dataset.event;
    this.dispatchEvent(new CustomEvent(`${ evName }-pressed`, {
      bubbles: true,
      composed: true
    }));
  }
  _computeIconStyle(iconSize) {
    return `width: ${ iconSize }px; height: ${ iconSize }px;`;
  }
  _computeIconID(iconKey, icons) {
    if (Object.keys(icons).indexOf(iconKey) > -1) {
      return this[icons[iconKey]];
    } else {
      return iconKey;
    }
  }
  _computeIconLabel(iconKey, iconLabel) {
    return iconLabel ? iconLabel : (iconLabelMap[iconKey] ? iconLabelMap[iconKey] : false);
  }
  _computeBtnLabel(btnLabel) {
    return btnLabel ? 'btn-with-label' : '';
  }
}
window.customElements.define(CellsComponentAppHeader.is, CellsComponentAppHeader);
