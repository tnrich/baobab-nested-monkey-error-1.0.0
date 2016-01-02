
var some = require('lodash').some

var Baobab = require('baobab');
var monkey = Baobab.monkey;
var tree = new Baobab({
    activePageNumber: 1,
    test: monkey([
        ['activePageNumber'],
        function(activePageNumber) {
            return activePageNumber
        }
    ]),
    
    pages: {
        UserInfoPage: {
            number: 0,
            completed: false,
        },
        SelectProductPage: {
            number: 1,
            completed: monkey([
                ['products'],
                function(products) {
                    console.log('updating pages.SelectProductPage.completed');
                    if (products.genes.completed) {
                        return true
                    } else {
                        return false
                    }
                }
            ]),
        },
    },
    products: {
        genes: {
            howManyGenes: null,
            customVectorRequired: true,
            completed: monkey([
                ['products', 'genes', 'customVectorRequired'],
                ['products', 'genes', 'howManyGenes'],
                function(customVectorRequired, howManyGenes) {
                    console.log('updating products.genes.completed');
                    return (customVectorRequired != null && howManyGenes != null)
                }
            ]),
        },
       
    },
    currentPage: monkey([
        ['activePageNumber'],
        ['pages','SelectProductPage','completed'],
        function(activePageNumber, pages) {
            console.log('updating current page');
            console.log('pages: ' + JSON.stringify(pages,null,4));
            return pages
            // some(pages, function(page) {
            //     if (page.number === activePageNumber) {
            //         currentPage = page;
            //         return true
            //     }
            // });
            // console.log('currentPage: ' + JSON.stringify(currentPage,null,4));
            // return currentPage
        }
    ]),
    
}, {lazyMonkeys: false});


console.log('tree.get(): ' + JSON.stringify(tree.get(['test']),null,4));

console.log(tree.get(['pages','SelectProductPage']))
console.log('completed:' ,tree.get(['currentPage']))

// //this should cause completed to be set to true
// tree.set(['products', 'genes', 'howManyGenes'], 1);

// console.log('this should be true: ')
// console.log(tree.get(['currentPage','completed']))

