This is a prototype of BridgetownRB for evaluation purposes.

Notes on setting up the project:

### Documentation
The documentation is for fairly simple use cases; often, I had trouble finding the thing I needed.

### Structure
The _pages directory isn't included out of the box, which made me
a bit confused about where pages were supposed to go initially.

### Template language
It uses liquid by default but swapping in erb seems trivial

### Asset Pipeline
This took awhile to figure out, but seems more because of my 
lack of understanding.

I am using the USWDS 3.0.4 beta package.

Steps to get it to work:
* Installing the USWDS and the compile packages 

[Gulpfile](../gulpfile.js) here

``` bash
$ yarn add @uswds/uswds @uswds/compile
$ touch gulpfile.js
$ yarn gulp init
```

* Wiring it in

Added:
`import "@uswds/uswds"` to [index.js](./frontend/javascript/index.js)

Created [uswds-settings.scss](./frontend/styles/uswds-settings.scss) with:
```scss
$theme-font-path: "../uswds/fonts";
$theme-image-path: "../uswds/img";

$theme-show-notifications: false;

@import 'uswds';
```

Changed:
[index.scss](./frontend/styles/index.scss) to just 
```scss
@import "uswds-settings.scss";
@import '../_theme/styles.scss';
```

[stles.scss](./frontend/_theme/styles.scss) to just
```scss
@import 'uswds-theme-general';
@import 'uswds-theme-typography';
@import 'uswds-theme-spacing';
@import 'uswds-theme-color';
@import 'uswds-theme-utilities';
```
I also added the @uswds/uswds packages to `webpack.defaults.js` 
includePaths

``` bash
        sassOptions: {
          fiber: false,
          includePaths: [
            path.resolve(rootDir, "src/_components"),
            "./node_modules/@uswds/uswds/packages"
          ],
```
I probably then ran `gulp compile` again to get it all working! (It won't hurt even if it's unnecessary -- I just don't remember exactly)
```bash
$ yarn gulp compile
``` 

The image path is `/images/uswds/img/IMG_NAME.png`
