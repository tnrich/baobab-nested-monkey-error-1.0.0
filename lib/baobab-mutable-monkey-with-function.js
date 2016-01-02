
var some = require('lodash').some
var IntervalTree = require('interval-tree2')
var Baobab = require('baobab');
var monkey = Baobab.monkey;
var tree = new Baobab({
    iTree: monkey([
        function function_name (argument) {
            var iTree = new IntervalTree(400)
            iTree.add(22,54,'bar');
            return iTree;
        },{
            immutable: false
        }
        ])    
}, {lazyMonkeys: false});


console.log('tree.get(): ' + JSON.stringify(tree.get(['test']),null,4));
var monkeyITree = tree.get(['iTree'])

var normalITree = new IntervalTree(400)
normalITree.add(22,54,'bar');
debugger;

console.log('normalITree.search: ' + JSON.stringify(normalITree.search,null,4));
console.log('monkeyITree.search: ' + JSON.stringify(monkeyITree.search,null,4));
