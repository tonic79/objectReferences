let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let myOtherBook = {
    title: 'Lolita',
    author: 'Vladimir Nabokov',
    pageCount: 298
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(myOtherBook)

console.log(bookSummary.pageCountSummary)
