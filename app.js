const LinkedList = require("./linked-list");

const list = LinkedList.fromValues(10, 20, 30, 40);

console.log(list.find(40));
