// require jquery

/*jslint browser: true*/
/*global $, jQuery, document*/

"use strict";

//FIXME: please cleanup/prefix this thing
jQuery.ready(function () {
	jQuery('a.minibutton').bind({
		mousedown: function () {
			jQuery(this).addClass('mousedown');
		},
		blur: function () {
			jQuery(this).removeClass('mousedown');
		},
		mouseup: function () {
			jQuery(this).removeClass('mousedown');
		}
	});
});
