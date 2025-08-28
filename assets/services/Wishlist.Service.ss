
function service(request, response)
{
	'use strict';
	try 
	{
		require('JJ.Wishlist.Wishlist.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('JJ.Wishlist.Wishlist.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}