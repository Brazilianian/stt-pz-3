/* eslint-env jest */

const {getBooks, getListOfRestEndPoint} = require("./anapioficeandfire");

jest.mock('./anapioficeandfire')

describe('Test suits for API Ice And Fire', () => {
    test('getBooks() method must return correct data', async () => {
        getBooks.mockResolvedValueOnce({
            entity: {
                "A Game of Thrones": "https://www.anapioficeandfire.com/api/books/1",
                "A Clash of Kings": "https://www.anapioficeandfire.com/api/books/2",
            },
        });

        const books = await getBooks();
        expect(books.entity).toHaveProperty('A Game of Thrones');
        expect(books.entity['A Game of Thrones']).toBe(
            'https://www.anapioficeandfire.com/api/books/1'
        );
    });

    test('getListOfRestEndPoint() method mst return correct data', async () => {
        getListOfRestEndPoint.mockResolvedValueOnce({
            entity: {
                books: 'https://www.anapioficeandfire.com/api/books',
                characters: 'https://www.anapioficeandfire.com/api/characters',
                houses: 'https://www.anapioficeandfire.com/api/houses',
            },
        });

        const endPoints = await getListOfRestEndPoint();
        expect(endPoints.entity).toHaveProperty('houses');
        expect(endPoints.entity.houses).toBe(
            'https://www.anapioficeandfire.com/api/houses'
        );
    });
})

