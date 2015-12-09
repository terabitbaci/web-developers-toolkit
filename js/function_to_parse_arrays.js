//Check that value is object or not.
function checkObj(key, val, items) {
    if (typeof val === 'object') {
        $.each(val, function (keys, value) {
            if (typeof value === 'object') {
                checkObj(keys, value, items);
            } else {
                items.push('<li id="' + keys + '">' + value + '</li>');
            }
        });
    }
}

//And in the $.each function use this
$.each(data, function (key, val) {
    if (typeof val === 'object') {
        checkObj(key, val, items);
    } else {
        items.push('<li id="' + key + '">' + val + '</li>');
    }
});
