const Result = require("./result");

class PaginatedResult extends Result {
  #pageNumber;
  #itemsPerPage;
  #resultsCount;
  #totalResultsCount;
  #totalPages;
  #data;

  constructor() {
    super();
  }

  get pageNumber() {
    return this.#pageNumber;
  }

  get itemsPerPage() {
    return this.#itemsPerPage;
  }

  get resultsCount() {
    return this.#resultsCount;
  }

  get totalResultsCount() {
    return this.#totalResultsCount;
  }

  get totalPages() {
    return this.#totalPages;
  }

  get data() {
    return this.#data;
  }

  withPageNumber(pageNumber) {
    this.#pageNumber = pageNumber;
  }

  withItemsPerPage(itemsPerPage) {
    this.#itemsPerPage = itemsPerPage;
  }

  withResultsCount(resultsCount) {
    this.#resultsCount = resultsCount;
  }

  withTotalResultsCount(totalResultsCount) {
    this.#totalResultsCount = totalResultsCount;
  }

  withTotalPages(totalPages) {
    this.#totalPages = totalPages;
  }

  withData(data) {
    this.#data = data;
  }

  static Success(data) {
    const paginatedResult = new PaginatedResult();
    paginatedResult.withData(data);

    return paginatedResult;
  }
}

module.exports = PaginatedResult;
