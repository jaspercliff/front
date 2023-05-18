"use strict";
function isFish(animal) {
    if (typeof animal.swim() === 'function') {
        return true;
    }
}
function isApiError(error) {
    if (typeof error.code === 'number') {
        return true;
    }
    else {
        return false;
    }
}
