const _ = require('lodash');
const items = [1, [1, [1, [1]]]];
const flattenItems = _.flattenDeep(items);
console.log(flattenItems);