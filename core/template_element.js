module.exports = TemplateElement;

var fs = require("fs"),
	mustache = require("mustache");

/**
 * Create new instance of template element.
 * @constructor
 */
function TemplateElement () {

}

/**
 * Is last?.
 * @kind {boolean}
 */
TemplateElement.prototype._isLast_ = true;

/**
 * Move from last position.
 */
TemplateElement.prototype.moveFromLastPosition = function () {
	this._isLast_ = false;
};

/**
 * Value of parent template element.
 * @kind {String}
 */
TemplateElement.prototype._parentValue_ = '';

/**
 * Set parent value.
 * @param {String} value
 */
TemplateElement.prototype.setParentValue = function (value) {
	this._parentValue_ = value || '';
};

/**
 * Set parent value.
 * @return {String}
 */
TemplateElement.prototype.getParentValue = function () {
	return this._parentValue_;
};

/**
 * Space symbol in template.
 * @kind {String}
 */
TemplateElement.prototype._spaceSymbol_ = ' ';

/**
 * Render template
 * @param {String} templateFile
 * @param {Function} callback
 */
TemplateElement.prototype.render = function (templateFile, callback) {

	var self = this;
	fs.readFile(templateFile, function (error, data) {
		if (error) throw error;

		callback(mustache.to_html(data.toString(), self));
	});
};