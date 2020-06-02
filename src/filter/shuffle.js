Vue.filter('shuffle', function (values) {
	for (var i = values.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = values[i];
		values[i] = values[j];
		values[j] = temp;
	}
	return values;
});
