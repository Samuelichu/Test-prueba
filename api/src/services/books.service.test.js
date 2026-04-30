const BooksService = require("./books.service");
const { generateManyBooks } = require("../fakes/book.fake");

jest.mock("../lib/mongo.lib");

describe("BooksService", () => {
  let service;
  let mockGetAll;

  beforeEach(() => {
    jest.clearAllMocks();
    const MongoLib = require("../lib/mongo.lib");
    mockGetAll = jest.fn();
    MongoLib.mockImplementation(() => ({
      getAll: mockGetAll,
      create: jest.fn(),
    }));
    service = new BooksService();
  });

  describe("test for getBooks", () => {
    test("getBooks should return an array of books", async () => {
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks({});
      expect(books.length).toEqual(fakeBooks.length);
    });

    test("should return a list of books", async () => {
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks({});
      console.log(books);
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith("books", {});
    });
  });
});
