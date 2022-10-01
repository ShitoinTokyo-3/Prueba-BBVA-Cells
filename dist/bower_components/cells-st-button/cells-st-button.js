/**
 *
 * # cells-st-button
 *
 * ![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg) ![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)
 *
 * [Demo of component in Cells Catalog](https://catalogs.platform.bbva.com/cells)
 *
 * `cells-st-button` is a styling wrapper for native `button` elements. It expects a `button` tag as content.
 *
 * You can use the normal button attributes in the `button` tag, as `disabled`, `autofocus`...
 *
 * ```html
 * <cells-st-button>
 *   <button>My button</button>
 * </cells-st-button>
 * ```
 *
 * ```html
 * <cells-st-button>
 *   <button disabled>My button</button>
 * </cells-st-button>
 * ```
 *
 * ## Available styling classes
 *
 * You can use helper classes in the `cells-st-button` tag, in order to modify the styling of the button.
 *
 * - primary
 * - secondary
 * - tertiary
 * - quaternary
 * - neutral
 * - link
 * - transparent (makes button transparent, with no paddings)
 *
 * ```html
 * <cells-st-button class="primary">
 *   <button>My button</button>
 * </cells-st-button>
 * ```
 *
 * ```html
 * <cells-st-button class="transparent">
 *   <button>My button</button>
 * </cells-st-button>
 * ```
 *
 * ## Button sizes
 *
 * Other classes are provided to modify the size of the button.
 *
 * - size-xl
 * - size-l
 * - size-m (default)
 * - size-s
 * - size-xs
 * - full (will give a 100% width to the button)
 *
 * ```html
 * <cells-st-button class="size-l secondary">
 *   <button>My button</button>
 * </cells-st-button>
 * ```
 *
 * ## Button subtext
 *
 * The button is prepared to show a normal text inside it. You can show a secondary, smaller text adding a `span` tag with the class `subtext` inside the button.
 *
 * ```html
 * <cells-st-button>
 *   <button>
 *     My button
 *     <span class="subtext">
 *       Button subtext
 *     </span>
 *   </button>
 * </cells-st-button>
 * ```
 *
 * ## Composed buttons (icon and text)
 *
 * Showing both text and icons is also supported using the class `composed`, a `span` tag with class `btn-contents`, and `span` tags with classes `btn-text` and `btn-icon`.
 *
 * ```html
 * <cells-st-button class="composed">
 *   <button>
 *     <span class="btn-contents">
 *       <span class="btn-text">Btn text</span>
 *       <cells-atom-icon class="btn-icon icon-size-24" icon="coronita:info"></cells-atom-icon>
 *     </span>
 *   </button>
 * </cells-st-button>
 * ```
 *
 * ## Inner alignment
 *
 * By default, button contents (text or icons) are centered, but you can control this inner alignment using the classes:
 *
 * - content-left
 * - content-right
 * - content-centered
 *
 * ```html
 * <cells-st-button class="full content-right">
 *   <button>My button</button>
 * </cells-st-button>
 * ```
 *
 * In composed buttons (icon and text), you can add the alignment classes to the `btn-contents` span, and the `btn-text` and `btn-icon` spans, to manage the alignment.
 *
 * ```html
 * <cells-st-button class="composed full">
 *   <button>
 *     <span class="btn-contents content-left">
 *       <span class="btn-text content-center">
 *         Btn text
 *         <span class="subtext">Lorem ipsum</span>
 *       </span>
 *       <cells-atom-icon class="btn-icon icon-size-24" icon="coronita:info"></cells-atom-icon>
 *     </span>
 *   </button>
 * </cells-st-button>
 * ```
 *
 * ## Styling
 *
 * The following custom properties and mixins are available for styling:
 *
 * ### Custom Properties
 * | Custom Property                                           | Selector                                                                                    | CSS Property                                          | Value                                                            |
 * | --------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------- |
 * | --cells-fontDefault                                       | ::slotted(*)                                                                                | font-family                                           | sans-serif                                                       |
 * | --cells-st-button-padding                                 | ::slotted(*)                                                                                | padding                                               | 0 2rem                                                           |
 * | --cells-st-button-bg-color                                | ::slotted(*)                                                                                | background-color                                      | --bbva-core-blue                                                 |
 * | --cells-st-button-text-color                              | ::slotted(*)                                                                                | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-text-size                               | ::slotted(*)                                                                                | font-size                                             | 0.875rem                                                         |
 * | --cells-st-button-border-radius                           | ::slotted(*)                                                                                | border-radius                                         | 1px                                                              |
 * | --cells-st-button-min-height                              | ::slotted(*)                                                                                | min-height                                            | --cells-st-button-m-min-height                                   |
 * | --cells-st-button-subtext-size                            | ::slotted(*) .subtext                                                                       | font-size                                             | 0.6875rem                                                        |
 * | --cells-st-button-bg-color-focus                          | ::slotted(:focus:not(:disabled))                                                            | background-color                                      | ![#053967](https://placehold.it/15/053967/000000?text=+) #053967 |
 * | --cells-st-button-text-color-focus                        | ::slotted(:focus:not(:disabled))                                                            | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-hover                          | @media (hover: hover) > ::slotted(:hover:not(:disabled))                                    | background-color                                      | ![#053967](https://placehold.it/15/053967/000000?text=+) #053967 |
 * | --cells-st-button-text-color-hover                        | @media (hover: hover) > ::slotted(:hover:not(:disabled))                                    | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-active                         | ::slotted(:active:not(:disabled))                                                           | background-color                                      | ![#053967](https://placehold.it/15/053967/000000?text=+) #053967 |
 * | --cells-st-button-text-color-active                       | ::slotted(:active:not(:disabled))                                                           | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-disabled                       | ::slotted(:disabled)                                                                        | background-color                                      | ![#E9E9E9](https://placehold.it/15/E9E9E9/000000?text=+) #E9E9E9 |
 * | --cells-st-button-color-disabled                          | ::slotted(:disabled)                                                                        | color                                                 | ![#D3D3D3](https://placehold.it/15/D3D3D3/000000?text=+) #D3D3D3 |
 * | --cells-st-button-transparent-disabled-bg-color           | :host(.transparent) ::slotted(:disabled)                                                    | background-color                                      | transparent                                                      |
 * | --cells-st-button-transparent-disabled-min-height         | :host(.transparent) ::slotted(:disabled)                                                    | min-height                                            | 2.75rem                                                          |
 * | --cells-st-button-transparent-disabled-min-width          | :host(.transparent) ::slotted(:disabled)                                                    | min-width                                             | 2.75rem                                                          |
 * | --cells-st-button-transparent-disabled-color              | :host(.transparent) ::slotted(:disabled)                                                    | color                                                 | --bbva-medium-blue                                               |
 * | --cells-st-button-font-size-aditional                     | :host(.aditional) ::slotted(*)                                                              | font-size                                             | 0.9375rem                                                        |
 * | --cells-st-button-bg-color-primary                        | :host(.primary) ::slotted(*)                                                                | background-color                                      | --bbva-core-blue                                                 |
 * | --cells-st-button-text-color-primary                      | :host(.primary) ::slotted(*)                                                                | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-secondary                      | :host(.secondary) ::slotted(*)                                                              | background-color                                      | --bbva-medium-blue                                               |
 * | --cells-st-button-text-color-secondary                    | :host(.secondary) ::slotted(*)                                                              | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-secondary-ligth-background-border-color | :host(.secondary-light-background) ::slotted(*)                                             | border                                                | 0.0625rem solid --bbva-300                                       |
 * | --cells-st-button-secondary-light-background-bg-color     | :host(.secondary-light-background) ::slotted(*)                                             | background-color                                      | transparent                                                      |
 * | --cells-st-button-secondary-light-background-color        | :host(.secondary-light-background) ::slotted(*)                                             | color                                                 | --bbva-dark-medium-blue                                          |
 * | --cells-st-button-secondary-light-background-min-height   | :host(.secondary-light-background) ::slotted(*)                                             | min-height                                            | 3rem                                                             |
 * | --cells-st-button-bg-color-tertiary                       | :host(.tertiary) ::slotted(*)                                                               | background-color                                      | --bbva-core-blue                                                 |
 * | --cells-st-button-text-color-tertiary                     | :host(.tertiary) ::slotted(*)                                                               | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-quaternary                     | :host(.quaternary) ::slotted(*)                                                             | background-color                                      | --bbva-core-blue                                                 |
 * | --cells-st-button-text-color-quaternary                   | :host(.quaternary) ::slotted(*)                                                             | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-neutral                        | :host(.neutral) ::slotted(*)                                                                | background-color                                      | --bbva-core-blue                                                 |
 * | --cells-st-button-text-color-neutral                      | :host(.neutral) ::slotted(*)                                                                | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-white-core-blue                | :host(.white-core-blue) ::slotted(*)                                                        | background-color                                      | --bbva-white-core-blue                                           |
 * | --cells-st-button-text-color-white-core-blue              | :host(.white-core-blue) ::slotted(*)                                                        | color                                                 | --bbva-white                                                     |
 * | --cells-st-button-bg-color-link                           | :host(.link) ::slotted(*)                                                                   | background-color                                      | transparent                                                      |
 * | --cells-st-button-text-color-link                         | :host(.link) ::slotted(*)                                                                   | color                                                 | --bbva-dark-medium-blue                                          |
 * | --cells-st-button-bg-color-transparent                    | :host(.transparent) ::slotted(*)                                                            | background-color                                      | transparent                                                      |
 * | --cells-st-button-transparent-min-height                  | :host(.transparent) ::slotted(*)                                                            | min-height                                            | 2.75rem                                                          |
 * | --cells-st-button-transparent-min-width                   | :host(.transparent) ::slotted(*)                                                            | min-width                                             | 2.75rem                                                          |
 * | --cells-st-button-text-color-transparent                  | :host(.transparent) ::slotted(*)                                                            | color                                                 | --bbva-medium-blue                                               |
 * | --cells-st-button-xl-min-height                           | :host(.size-xl) ::slotted(*)                                                                | min-height                                            | 4.125rem                                                         |
 * | --cells-st-button-l-min-height                            | :host(.size-l) ::slotted(*)                                                                 | min-height                                            | 3.625rem                                                         |
 * | --cells-st-button-m-min-height                            | :host(.size-m) ::slotted(*)                                                                 | min-height                                            | 3.125rem                                                         |
 * | --cells-st-button-s-min-height                            | :host(.size-s) ::slotted(*)                                                                 | min-height                                            | 2.625rem                                                         |
 * | --cells-st-button-xs-min-height                           | :host(.size-xs) ::slotted(*)                                                                | min-height                                            | 2.125rem                                                         |
 * | --cells-st-button-bg-color-primary-focus                  | :host(.primary) ::slotted(:focus:not(:disabled))                                            | background-color                                      | ![#1464A5](https://placehold.it/15/1464A5/000000?text=+) #1464A5 |
 * | --cells-st-button-text-color-primary-focus                | :host(.primary) ::slotted(:focus:not(:disabled))                                            | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-primary-hover                  | @media (hover: hover) > :host(.primary) ::slotted(:hover:not(:disabled))                    | background-color                                      | ![#1464A5](https://placehold.it/15/1464A5/000000?text=+) #1464A5 |
 * | --cells-st-button-text-color-primary-hover                | @media (hover: hover) > :host(.primary) ::slotted(:hover:not(:disabled))                    | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-primary-active                 | :host(.primary) ::slotted(:active:not(:disabled))                                           | background-color                                      | ![#1464A5](https://placehold.it/15/1464A5/000000?text=+) #1464A5 |
 * | --cells-st-button-text-color-primary-active               | :host(.primary) ::slotted(:active:not(:disabled))                                           | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-primary-disabled               | :host(.primary) ::slotted(:disabled)                                                        | background-color                                      | ![#E9E9E9](https://placehold.it/15/E9E9E9/000000?text=+) #E9E9E9 |
 * | --cells-st-button-bg-color-secondary-focus                | :host(.secondary) ::slotted(:focus:not(:disabled))                                          | background-color                                      | ![#1B6092](https://placehold.it/15/1B6092/000000?text=+) #1B6092 |
 * | --cells-st-button-text-color-secondary-focus              | :host(.secondary) ::slotted(:focus:not(:disabled))                                          | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-secondary-hover                | @media (hover: hover) > :host(.secondary) ::slotted(:hover:not(:disabled))                  | background-color                                      | ![#1B6092](https://placehold.it/15/1B6092/000000?text=+) #1B6092 |
 * | --cells-st-button-text-color-secondary-hover              | @media (hover: hover) > :host(.secondary) ::slotted(:hover:not(:disabled))                  | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-secondary-active               | :host(.secondary) ::slotted(:active:not(:disabled))                                         | background-color                                      | ![#1B6092](https://placehold.it/15/1B6092/000000?text=+) #1B6092 |
 * | --cells-st-button-text-color-secondary-active             | :host(.secondary) ::slotted(:active:not(:disabled))                                         | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-secondary-disabled             | :host(.secondary) ::slotted(:disabled)                                                      | background-color                                      | ![#E9E9E9](https://placehold.it/15/E9E9E9/000000?text=+) #E9E9E9 |
 * | --cells-st-button-text-color-secondary-disabled           | :host(.secondary) ::slotted(:disabled)                                                      | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --bbva-100                                                | :host(.secondary-light-background) ::slotted(:focus:not(:disabled))                         | --cells-st-button-secondary-light-background-bg-color | ![#F4F4F4](https://placehold.it/15/F4F4F4/000000?text=+) #F4F4F4 |
 * | --bbva-100                                                | :host(.secondary-light-background) ::slotted(:active:not(:disabled))                        | --cells-st-button-secondary-light-background-bg-color | ![#F4F4F4](https://placehold.it/15/F4F4F4/000000?text=+) #F4F4F4 |
 * | --bbva-100                                                | @media (hover: hover) > :host(.secondary-light-background) ::slotted(:hover:not(:disabled)) | --cells-st-button-secondary-light-background-bg-color | ![#F4F4F4](https://placehold.it/15/F4F4F4/000000?text=+) #F4F4F4 |
 * | --bbva-200                                                | :host(.secondary-light-background) ::slotted(:disabled)                                     | --cells-st-button-secondary-light-background-bg-color | ![#E9E9E9](https://placehold.it/15/E9E9E9/000000?text=+) #E9E9E9 |
 * | --bbva-white                                              | :host(.secondary-light-background) ::slotted(:disabled)                                     | --cells-st-button-secondary-light-background-color    | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-tertiary-focus                 | :host(.tertiary) ::slotted(:focus:not(:disabled))                                           | background-color                                      | ![#053967](https://placehold.it/15/053967/000000?text=+) #053967 |
 * | --cells-st-button-text-color-tertiary-focus               | :host(.tertiary) ::slotted(:focus:not(:disabled))                                           | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-tertiary-hover                 | @media (hover: hover) > :host(.tertiary) ::slotted(:hover:not(:disabled))                   | background-color                                      | ![#053967](https://placehold.it/15/053967/000000?text=+) #053967 |
 * | --cells-st-button-text-color-tertiary-hover               | @media (hover: hover) > :host(.tertiary) ::slotted(:hover:not(:disabled))                   | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-tertiary-active                | :host(.tertiary) ::slotted(:active:not(:disabled))                                          | background-color                                      | ![#053967](https://placehold.it/15/053967/000000?text=+) #053967 |
 * | --cells-st-button-text-color-tertiary-active              | :host(.tertiary) ::slotted(:active:not(:disabled))                                          | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-tertiary-disabled              | :host(.tertiary) ::slotted(:disabled)                                                       | background-color                                      | ![#E9E9E9](https://placehold.it/15/E9E9E9/000000?text=+) #E9E9E9 |
 * | --cells-st-button-text-color-tertiary-disabled            | :host(.tertiary) ::slotted(:disabled)                                                       | color                                                 | ![#BDBDBD](https://placehold.it/15/BDBDBD/000000?text=+) #BDBDBD |
 * | --cells-st-button-bg-color-quaternary-focus               | :host(.quaternary) ::slotted(:focus:not(:disabled))                                         | background-color                                      | ![#053967](https://placehold.it/15/053967/000000?text=+) #053967 |
 * | --cells-st-button-text-color-quaternary-focus             | :host(.quaternary) ::slotted(:focus:not(:disabled))                                         | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-quaternary-hover               | @media (hover: hover) > :host(.quaternary) ::slotted(:hover:not(:disabled))                 | background-color                                      | ![#053967](https://placehold.it/15/053967/000000?text=+) #053967 |
 * | --cells-st-button-text-color-quaternary-hover             | @media (hover: hover) > :host(.quaternary) ::slotted(:hover:not(:disabled))                 | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-quaternary-active              | :host(.quaternary) ::slotted(:active:not(:disabled))                                        | background-color                                      | ![#053967](https://placehold.it/15/053967/000000?text=+) #053967 |
 * | --cells-st-button-text-color-quaternary-active            | :host(.quaternary) ::slotted(:active:not(:disabled))                                        | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-quaternary-disabled            | :host(.quaternary) ::slotted(:disabled)                                                     | background-color                                      | ![#E9E9E9](https://placehold.it/15/E9E9E9/000000?text=+) #E9E9E9 |
 * | --cells-st-button-bg-color-neutral-focus                  | :host(.neutral) ::slotted(:focus:not(:disabled))                                            | background-color                                      | ![#053967](https://placehold.it/15/053967/000000?text=+) #053967 |
 * | --cells-st-button-text-color-neutral-focus                | :host(.neutral) ::slotted(:focus:not(:disabled))                                            | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-neutral-hover                  | @media (hover: hover) > :host(.neutral) ::slotted(:hover:not(:disabled))                    | background-color                                      | ![#053967](https://placehold.it/15/053967/000000?text=+) #053967 |
 * | --cells-st-button-text-color-neutral-hover                | @media (hover: hover) > :host(.neutral) ::slotted(:hover:not(:disabled))                    | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-neutral-active                 | :host(.neutral) ::slotted(:active:not(:disabled))                                           | background-color                                      | ![#053967](https://placehold.it/15/053967/000000?text=+) #053967 |
 * | --cells-st-button-text-color-neutral-active               | :host(.neutral) ::slotted(:active:not(:disabled))                                           | color                                                 | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff          |
 * | --cells-st-button-bg-color-neutral-disabled               | :host(.neutral) ::slotted(:disabled)                                                        | background-color                                      | ![#E9E9E9](https://placehold.it/15/E9E9E9/000000?text=+) #E9E9E9 |
 * | --cells-st-button-text-color-link-focus                   | :host(.link) ::slotted(:focus:not(:disabled))                                               | color                                                 | --bbva-dark-medium-blue                                          |
 * | --cells-st-button-bg-color-link-focus                     | :host(.link) ::slotted(:focus:not(:disabled))                                               | background-color                                      | transparent                                                      |
 * | --cells-st-button-bg-color-link-hover                     | @media (hover: hover) > :host(.link) ::slotted(:hover:not(:disabled))                       | background-color                                      | transparent                                                      |
 * | --cells-st-button-text-color-link-hover                   | @media (hover: hover) > :host(.link) ::slotted(:hover:not(:disabled))                       | color                                                 | --bbva-dark-medium-blue                                          |
 * | --cells-st-button-text-color-link-active                  | :host(.link) ::slotted(:active:not(:disabled))                                              | color                                                 | --bbva-dark-medium-blue                                          |
 * | --cells-st-button-bg-color-link-active                    | :host(.link) ::slotted(:active:not(:disabled))                                              | background-color                                      | transparent                                                      |
 * | --cells-st-button-bg-color-link-disabled                  | :host(.link) ::slotted(:disabled)                                                           | color                                                 | ![#E9E9E9](https://placehold.it/15/E9E9E9/000000?text=+) #E9E9E9 |
 * | --cells-st-button-bg-color-link                           | :host(.link) ::slotted(:disabled)                                                           | background-color                                      | transparent                                                      |
 * | --cells-st-button-bg-color-transparent-focus              | :host(.transparent) ::slotted(:focus:not(:disabled))                                        | background-color                                      | transparent                                                      |
 * | --cells-st-button-text-color-transparent-focus            | :host(.transparent) ::slotted(:focus:not(:disabled))                                        | color                                                 | --bbva-medium-blue                                               |
 * | --cells-st-button-bg-color-transparent-hover              | @media (hover: hover) > :host(.transparent) ::slotted(:hover:not(:disabled))                | background-color                                      | transparent                                                      |
 * | --cells-st-button-text-color-transparent-hover            | @media (hover: hover) > :host(.transparent) ::slotted(:hover:not(:disabled))                | color                                                 | --bbva-medium-blue                                               |
 * | --cells-st-button-bg-color-transparent-active             | :host(.transparent) ::slotted(:active:not(:disabled))                                       | background-color                                      | transparent                                                      |
 * | --cells-st-button-text-color-transparent-active           | :host(.transparent) ::slotted(:active:not(:disabled))                                       | color                                                 | --bbva-medium-blue                                               |
 * | --cells-st-button-bg-color-disabled-on-dark               | :host(.on-dark) ::slotted(:disabled)                                                        | background-color                                      | rgba(233, 233, 233, 0.3)                                         |
 * | --cells-st-button-text-color-disabled-on-dark             | :host(.on-dark) ::slotted(:disabled)                                                        | color                                                 | rgba(255, 255, 255, 0.3)                                         |
 * | --cells-st-button-bg-color-white-core-blue-disabled       | :host(.white-core-blue) ::slotted(:disabled)                                                | background-color                                      | ![#E9E9E9](https://placehold.it/15/E9E9E9/000000?text=+) #E9E9E9 |
 * | --cells-st-button-text-color-white-core-blue-on-dark      | :host(.white-core-blue) ::slotted(:disabled)                                                | color                                                 | ![#BDBDBD](https://placehold.it/15/BDBDBD/000000?text=+) #BDBDBD |
 * ### @apply
 * | Mixins                                       | Selector                                                                     | Value |
 * | -------------------------------------------- | ---------------------------------------------------------------------------- | ----- |
 * | --cells-global-focus                         | ::slotted(button:focus)                                                      | {}    |
 * | --cells-global-active                        | ::slotted(button:active)                                                     | {}    |
 * | --cells-st-button                            | ::slotted(*)                                                                 | {}    |
 * | --cells-st-button-subtext                    | ::slotted(*) .subtext                                                        | {}    |
 * | --cells-st-button-focus                      | ::slotted(:focus:not(:disabled))                                             | {}    |
 * | --cells-st-button-hover                      | @media (hover: hover) > ::slotted(:hover:not(:disabled))                     | {}    |
 * | --cells-st-button-active                     | ::slotted(:active:not(:disabled))                                            | {}    |
 * | --cells-st-button-disabled                   | ::slotted(:disabled)                                                         | {}    |
 * | --cells-st-button-transparent-disabled       | :host(.transparent) ::slotted(:disabled)                                     | {}    |
 * | --cells-st-button-full                       | :host(.full) ::slotted(*)                                                    | {}    |
 * | --cells-st-button-aditional                  | :host(.aditional) ::slotted(*)                                               | {}    |
 * | --cells-st-button-primary                    | :host(.primary) ::slotted(*)                                                 | {}    |
 * | --cells-st-button-secondary                  | :host(.secondary) ::slotted(*)                                               | {}    |
 * | --cells-st-button-secondary-light-background | :host(.secondary-light-background) ::slotted(*)                              | {}    |
 * | --cells-st-button-tertiary                   | :host(.tertiary) ::slotted(*)                                                | {}    |
 * | --cells-st-button-quaternary                 | :host(.quaternary) ::slotted(*)                                              | {}    |
 * | --cells-st-button-neutral                    | :host(.neutral) ::slotted(*)                                                 | {}    |
 * | --cells-st-button-white-core-blue            | :host(.white-core-blue) ::slotted(*)                                         | {}    |
 * | --cells-st-button-link                       | :host(.link) ::slotted(*)                                                    | {}    |
 * | --cells-st-button-transparent                | :host(.transparent) ::slotted(*)                                             | {}    |
 * | --cells-st-button-composed                   | :host(.composed) ::slotted(*)                                                | {}    |
 * | --cells-st-button-composed-contents          | :host(.composed) ::slotted(*) .btn-contents                                  | {}    |
 * | --cells-st-button-composed-text              | :host(.composed) ::slotted(*) .btn-text                                      | {}    |
 * | --cells-st-button-composed-icon              | :host(.composed) ::slotted(*) .btn-icon                                      | {}    |
 * | --cells-st-button-content-centered           | :host(.content-centered) ::slotted(*)                                        | {}    |
 * | --cells-st-button-content-centered           | ::slotted(*) .content-centered                                               | {}    |
 * | --cells-st-button-content-left               | :host(.content-left) ::slotted(*)                                            | {}    |
 * | --cells-st-button-content-left               | ::slotted(*) .content-left                                                   | {}    |
 * | --cells-st-button-content-right              | :host(.content-right) ::slotted(*)                                           | {}    |
 * | --cells-st-button-content-right              | ::slotted(*) .content-right                                                  | {}    |
 * | --cells-st-button-size-xl                    | :host(.size-xl) ::slotted(*)                                                 | {}    |
 * | --cells-st-button-size-l                     | :host(.size-l) ::slotted(*)                                                  | {}    |
 * | --cells-st-button-size-m                     | :host(.size-m) ::slotted(*)                                                  | {}    |
 * | --cells-st-button-size-s                     | :host(.size-s) ::slotted(*)                                                  | {}    |
 * | --cells-st-button-size-xs                    | :host(.size-xs) ::slotted(*)                                                 | {}    |
 * | --cells-st-button-primary-focus              | :host(.primary) ::slotted(:focus:not(:disabled))                             | {}    |
 * | --cells-st-button-primary-hover              | @media (hover: hover) > :host(.primary) ::slotted(:hover:not(:disabled))     | {}    |
 * | --cells-st-button-primary-active             | :host(.primary) ::slotted(:active:not(:disabled))                            | {}    |
 * | --cells-st-button-primary-disabled           | :host(.primary) ::slotted(:disabled)                                         | {}    |
 * | --cells-st-button-secondary-focus            | :host(.secondary) ::slotted(:focus:not(:disabled))                           | {}    |
 * | --cells-st-button-secondary-hover            | @media (hover: hover) > :host(.secondary) ::slotted(:hover:not(:disabled))   | {}    |
 * | --cells-st-button-secondary-active           | :host(.secondary) ::slotted(:active:not(:disabled))                          | {}    |
 * | --cells-st-button-secondary-disabled         | :host(.secondary) ::slotted(:disabled)                                       | {}    |
 * | --cells-st-button-tertiary-focus             | :host(.tertiary) ::slotted(:focus:not(:disabled))                            | {}    |
 * | --cells-st-button-tertiary-hover             | @media (hover: hover) > :host(.tertiary) ::slotted(:hover:not(:disabled))    | {}    |
 * | --cells-st-button-tertiary-active            | :host(.tertiary) ::slotted(:active:not(:disabled))                           | {}    |
 * | --cells-st-button-tertiary-disabled          | :host(.tertiary) ::slotted(:disabled)                                        | {}    |
 * | --cells-st-button-quaternary-focus           | :host(.quaternary) ::slotted(:focus:not(:disabled))                          | {}    |
 * | --cells-st-button-quaternary-hover           | @media (hover: hover) > :host(.quaternary) ::slotted(:hover:not(:disabled))  | {}    |
 * | --cells-st-button-quaternary-active          | :host(.quaternary) ::slotted(:active:not(:disabled))                         | {}    |
 * | --cells-st-button-quaternary-disabled        | :host(.quaternary) ::slotted(:disabled)                                      | {}    |
 * | --cells-st-button-neutral-focus              | :host(.neutral) ::slotted(:focus:not(:disabled))                             | {}    |
 * | --cells-st-button-neutral-hover              | @media (hover: hover) > :host(.neutral) ::slotted(:hover:not(:disabled))     | {}    |
 * | --cells-st-button-neutral-active             | :host(.neutral) ::slotted(:active:not(:disabled))                            | {}    |
 * | --cells-st-button-neutral-disabled           | :host(.neutral) ::slotted(:disabled)                                         | {}    |
 * | --cells-st-button-link-focus                 | :host(.link) ::slotted(:focus:not(:disabled))                                | {}    |
 * | --cells-st-button-link-hover                 | @media (hover: hover) > :host(.link) ::slotted(:hover:not(:disabled))        | {}    |
 * | --cells-st-button-link-active                | :host(.link) ::slotted(:active:not(:disabled))                               | {}    |
 * | --cells-st-button-link-disabled              | :host(.link) ::slotted(:disabled)                                            | {}    |
 * | --cells-st-button-transparent-focus          | :host(.transparent) ::slotted(:focus:not(:disabled))                         | {}    |
 * | --cells-st-button-transparent-hover          | @media (hover: hover) > :host(.transparent) ::slotted(:hover:not(:disabled)) | {}    |
 * | --cells-st-button-transparent-active         | :host(.transparent) ::slotted(:active:not(:disabled))                        | {}    |
 * | --cells-st-button-transparent-disabled       | :host(.transparent) ::slotted(:disabled)                                     | {}    |
 * | --cells-st-button-disabled-on-dark           | :host(.on-dark) ::slotted(:disabled)                                         | {}    |
 * | --cells-st-button-white-core-blue-disabled   | :host(.white-core-blue) ::slotted(:disabled)                                 | {}    |
 *
 * @polymer
 * @customElement
 * @extends {Polymer.Element}
 * @summary Styles wrapper for native buttons
 * @demo demo/index.html
 * @hero cells-st-button.png
 */
class cellsStButton extends Polymer.Element {
  static get is() {
    return 'cells-st-button';
  }
}

customElements.define(cellsStButton.is, cellsStButton);
