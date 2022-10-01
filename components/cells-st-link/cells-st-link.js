class CellsStLink extends Polymer.Element {
  static get is() {
    return 'cells-st-link';
  }

  static get properties() {
    return {
      /**
       * Flag to disable link
       */
      disabled: {
        type: Boolean,
        reflectToAttribute: true,
      },
    };
  }
}

window.customElements.define(CellsStLink.is, CellsStLink);
