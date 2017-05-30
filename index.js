module.exports = function rename(object, keymap) {
	var result = {}
	for (var oldkey in keymap) {
		var newkey = keymap[oldkey]
		var value = object[oldkey]
		result[newkey] = value
	}
	return result
}
