const webpack = require("webpack");
module.exports = {
  externals: {
    rxjs: "rxjs",
    "rxjs/operators": "rxjs.operators",
    "@angular/core": "ng.core",
    "@angular/common": "ng.common",
    "@angular/common/http": "ng.common.http",
    "@angular/platform-browser": "ng.platformBrowser",
    "@angular/platform-browser-dynamic": "ng.platformBrowserDynamic",
    "@angular/compiler": "ng.compiler",
    "@angular/elements": "ng.elements",
    "@angular/cdk": "ng.cdk",
    "@angular/cdk/keycodes": "ng.cdk.keycodes",
    "@angular/cdk/coercion": "ng.cdk.coercion",
    "@angular/cdk/observers": "ng.cdk.observers",
    "@angular/cdk/platform": "ng.cdk.platform",
    "@angular/cdk/a11y": "ng.cdk.a11y",
    "@angular/cdk/bidi": "ng.cdk.bidi",
    "@angular/cdk/collections": "ng.cdk.collections",
    "@angular/cdk/scrolling": "ng.cdk.scrolling",
    "@angular/cdk/table": "ng.cdk.table",
    "@angular/animations/browser": "ng.animations.browser",
    "@angular/animations": "ng.animations",
    "@angular/platform-browser/animations": "ng.platformBrowser.animations",
    "@angular/material": "ng.material",
    "@angular/material/core": "ng.material.core",
    "@angular/material/icon": "ng.material.icon",
    "@angular/material/button": "ng.material.button",
    "@angular/material/toolbar": "ng.material.toolbar",
    "@angular/material/table": "ng.material.table",
    "@angular/router": "ng.router",
  },
};
