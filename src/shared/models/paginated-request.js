class PaginatedRequest {
  #page;
  #pageSize;
  #sortBy;
  #sortDirection;
  #searchValue;

  constructor(page, pageSize, sortBy, sortDirection, searchValue) {
    this.#page = page || 1;
    this.#pageSize = pageSize || 10;
    this.#sortBy = sortBy || null;
    this.#sortDirection = sortDirection || SORT_DIRECTION.Ascending;
    this.#searchValue = searchValue || null;
  }

  get page() {
    return this.#page;
  }

  get pageSize() {
    return this.#pageSize;
  }

  get sortBy() {
    return this.#sortBy;
  }

  get sortDirection() {
    return this.#sortDirection;
  }

  get searchValue() {
    return this.#searchValue;
  }
}

const SORT_DIRECTION = Object.freeze({
  Ascending: "asc",
  Descending: "desc",
});

module.exports = PaginatedRequest;
