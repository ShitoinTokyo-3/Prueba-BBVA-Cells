
# CHANGELOG

## v12.0.0
- Migration to Polymer 2

## v8.0.0

**Breaking changes**

- `title` renamed to `text` to prevent showing the default browser title (tooltip).
- Text inside component (`<content>`) has to be in a slot named `text` (`<span slot="title">Component's header</span>`)
- `help-button-pressed` event renamed to `right-secondary-button-pressed`

| Removed mixin or CSS var                            |
|:----------------------------------------------------|
| --cells-component-app-header-back-tools             |
| --cells-component-app-header-tools                  |
| --cells-component-app-header-tools-icon             |
| --cells-component-app-header-tools-margin           |
| --cells-component-app-header-back                   |
| --cells-component-app-header-back-icon              |
| --cells-component-app-header-back-margin            |
| --cells-component-app-header-btn-background         |
| --cells-component-app-header-btn-wrapper            |

**Fixes**
- Header text alignment without right icon.
- Wrong translations for icons.

## v7.0.0
- Property `classIconSize` (String, class name) renamed to `iconSize` (Number).

## v6.0.0

**New features**
- Added accessibility and tag `a11y`
- Added properties: `iconHelp`

**Breaking changes**

- CSS changes in component, Coronita Styles as default look&feel, the 'BUZZ' styles have been moved to `cells-banking-theme`

- Removed properties: `iconRepose`, `iconToggle`, `backVisible`, `_controlMenu`, `helpVisible`, `hideToggleIcon`

- Changed property names:
  - now `iconRight` instead of `iconActive`
  - now `iconLeft` instead of `iconBack`
  - now `classIconSize` instead of `classIcon`

- Removed functions: `hideBack`, `hideHelp`, `controlIcon`, `helpVisible`

- Changed events' names:
  - now `left-button-pressed` instead of `back-button-pressed`
  - now `right-button-pressed` instead of `menu-button-pressed`

- Custom variables and mixins changes:

| Removed mixin                                       |
|:----------------------------------------------------|
| --cells-component-app-header-icons-focus            |
| --cells-component-app-header-icons-active           |
| --cells-component-app-header-background             |
| --cells-component-app-header-icon-drop-shadow-color |
| --cells-component-app-header-icon-drop-shadow-color |
| --cells-component-app-header-box-shadow-color       |
| --cells-component-app-header-link-back              |
| --cells-component-app-header-flip                   |
| --cells-component-app-header-back-icon              |
| --cells-component-app-header-box-shadow             |
| --cells-component-app-header-focus                  |
| --cells-component-app-header-icon-drop-shadow       |
| --cells-component-app-header-active                 |
| --cells-component-app-header-back-tools             |

| New mixins                                          |
|:----------------------------------------------------|
| --cells-component-app-header-height                 |
| --cells-component-app-header-secondary-bg-color     |
| --cells-component-app-header-secondary-color        |
| --cells-component-app-header-secondary-height       |
| --cells-component-app-header-secondary              |
| --cells-component-app-header-secondary-after        |
| --cells-component-app-header-secondary-btn-color    |
| --cells-component-app-header-secondary-btn          |
| --cells-component-app-header-secondary-title        |
| --cells-component-app-header-btns-bg-color          |
| --cells-component-app-header-btns-color             |
| --cells-component-app-header-btns                   |


## Breaking changes 2.0.0

- Renamed property:
  hideMenuIcon >> hideToggleIcon
- Changed mixins names:

| Old mixin                                     | New mixin                                           |
|:----------------------------------------------|:----------------------------------------------------|
| --cells-component-app-header-background       | --cells-component-app-header-bg-color               |
| --cells-component-app-header-tools            | --cells-component-app-header-tools-icon             |
