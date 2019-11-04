// The word's worst allocator
// ptr = pointer; variables containing memory addresses

// The Float64Array typed array represents an array where each item is a 64-bit (8 bytes) floating point number. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation). Cannot change in size after creation.
var memory = new Float64Array(1024);
var head = 0;

// reserves a contiguous block of memory of a number of boxes (size)
var allocate = function (size) {
    if (head + size > memory.length) {
        // if the allocation fails
        return null;
    }
    // otherwise, start the pointer at the first box
    var start = head;
    head += size;
    return start;
};

// frees the block of memory reserved using allocate
var free = function (ptr) {};

// copies a certain number of boxes (size) from the "from" location to the "to" location
// example: copy(10, 0, 3) copies the values at boxes 0, 1, 2 to the boxes starting at 10
var copy = function (to, from, size) {
    if (from === to) {
        return;
    } else if (from > to) {
        // Iterate backwards
        for (var i = 0; i < size; i++) {
            set(to + i, get(from + i));
        }
    }
    // if (from < to)
    else {
        // Iterate forward
        for (var i = size - 1; i >= 0; i--) {
            set(to + i, get(from + i));
        }
    }
};

// returns the value stored at certain memory address
var get = function (ptr) {
    return memory[ptr];
};

// sets the value stored at a certain memory address
var set = function (ptr, value) {
    memory[ptr] = value;
};

exports.allocate = allocate;
exports.free = free;
exports.copy = copy;
exports.get = get;
exports.set = set;
