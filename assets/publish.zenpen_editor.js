/*
	Copyight: Deux Huit Huit 2013
	License: MIT, see the LICENCE.txt file
*/

/**
 * Client code for adding the zenpen editor on text fields
 *
 * @author nicolasbrassard
 */
 
(function ($, editor, undefined) {

	var FIELDS_CLASSES = '.field-textarea';
	
	var hookOne = function (index, elem) {
		elem = $(elem);
		var article = $('<article />').attr('contenteditable','true').addClass('content');
		var input = elem.find('textarea');
		input.addClass('irrelevant');
		input.after(article);
	};

	var init = function () {
		$('#contents').find(FIELDS_CLASSES).each(hookOne);
		editor.init();
	};
	
	$(init);

})(jQuery, editor);