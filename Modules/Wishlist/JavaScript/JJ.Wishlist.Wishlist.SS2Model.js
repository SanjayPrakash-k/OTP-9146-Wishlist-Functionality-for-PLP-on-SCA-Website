// Model.js
// -----------------------
// @module Case
define("JJ.Wishlist.Wishlist.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/Wishlist/SuiteScript2/Wishlist.Service.ss"
            ),
            true
        )
});
});
