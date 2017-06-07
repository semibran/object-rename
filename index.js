module.exports = function rename(object, keymap) {
	var result = {}
	for (var oldkey in keymap) {
		var newkey = keymap[oldkey]
		var value = object[oldkey]
		result[newkey] = value
	}
	for (var key in object) {
		if (!(key in keymap)) {
			var value = object[key]
			result[key] = value
		}
	}
	return result
}
