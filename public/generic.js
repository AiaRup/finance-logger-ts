"use strict";
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
const docOne = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' },
};
const docTwo = {
    uid: 10,
    resourceType: ResourceType.DIRECTOR,
    data: { title: 'name of the wind' },
};
console.log(docOne);
console.log(docTwo);
