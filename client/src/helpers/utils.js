function getPathToTripImage(fileName) {
    return new URL(`/src/assets/images/trips/${fileName}`, import.meta.url).href;
}

export {
    getPathToTripImage
};