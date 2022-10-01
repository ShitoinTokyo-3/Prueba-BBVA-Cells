/**
 * 
 *
 * # cells-heading
 *
 * ![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)
 * ![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)
 *
 * [Demo of component in Cells Catalog](https://catalogs.platform.bbva.com/cells)
 *
 * `<cells-heading>` provides heading semantics and an easy way to customize and unify heading styles used across a website or application.
 *
 * __Example:__
 * ```html
 * <cells-heading class="custom-class">Heading</cells-heading>
 * ```
 *
 * ## Accessibility
 *
 * The tag has a role heading applied by default, so it's not recommended to use headings (h1, h2, etc.) inside the tag.
 *
 * __Heading levels:__
 *
 * You can provide information about the heading level relative to the document by setting the `level` attribute with a numeric value from 1 to 6. By default the heading level (`aria-level`) is set to 2. If 0 is provided, the component won't be treated as a heading.
 *
 * ```html
 * <cells-heading level="1">Application heading</cells-heading>
 * ```
 *
 * ## Styling
 *
 * `<cells-heading>` has no styles (only `display: block`), custom CSS properties or available mixins. You can customize it by creating a style module with ID `cells-heading-shared-styles` where you can define the styles that will be applied to the tag using your own custom classes.
 *
 * The file with the style module must be imported in your application's theme.
 *
 * Sample file imported in your theme: `my-theme/shared-styles.html`
 *
 * ```html
 * <link rel="import" href="../polymer/polymer.html">
 *
 * <dom-module id="cells-heading-shared-styles">
 *   <template>
 *     <style>
 *       :host {
 *         font-family: var(--cells-fontDefault);
 *       }
 *       :host(.application-heading) {
 *         @apply(--your-theme-mixin);
 *         color: var(--your-theme-color);
 *       }
 *       :host(.section-heading) {
 *         font-size: .875rem;
 *         text-transform: uppercase;
 *       }
 *     </style>
 *   </template>
 * </dom-module>
 * ```
 *
 * @polymer
 * @customElement
 * @summary Custom element with heading semantics that allows to configure the heading level.
 * @extends {Polymer.Element}
 * @demo demo/index.html
 * @hero cells-heading.png
 */
class cellsHeading extends Polymer.Element {
  static get is() {
    return 'cells-heading';
  }

  static get properties() {
    return {
      /**
       * Allows to define an aria-level for the main header text.
       * If 0 is provided, the header text won't be treated as a heading.
       */
      level: {
        type: Number,
        value: 2,
        notify: true,
        observer: '_levelChanged'
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this._ensureAttribute('aria-level', 2);
  }

  _levelChanged(level) {
    if (level >= 1 && level <= 6) {
      this.setAttribute('aria-level', level);
      this.setAttribute('role', 'heading');
    } else {
      this.removeAttribute('aria-level');
      this.removeAttribute('role');
    }
  }
}
customElements.define(cellsHeading.is, cellsHeading);