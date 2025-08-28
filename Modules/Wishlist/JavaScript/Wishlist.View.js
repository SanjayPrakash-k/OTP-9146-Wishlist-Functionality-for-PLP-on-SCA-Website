// @module JJ.Wishlist.Wishlist
define('JJ.Wishlist.Wishlist.View'
,	[
	'jj_wishlist_wishlist.tpl'
	
	,	'JJ.Wishlist.Wishlist.SS2Model'
	
	,	'Backbone'

	,	'Item.Model'

	,	'Product.Model'
    ]
, function (
	jj_wishlist_wishlist_tpl
	
	,	WishlistSS2Model
	
	,	Backbone

	,	ItemModel

	,	ProductModel
)
{
    'use strict';

	// @class JJ.Wishlist.Wishlist.View @extends Backbone.View
	return Backbone.View.extend({

		template: jj_wishlist_wishlist_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
			
			
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return JJ.Wishlist.Wishlist.View.Context
	,	getContext: function getContext()
		{
			
			return {
			};
			
		}
	});
});
