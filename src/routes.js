const {
  addNewBook,
  getBook,
  getAllBooks,
  editBook,
  deleteBook,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addNewBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBook,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBook,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBook,
  },
];

module.exports = routes;
