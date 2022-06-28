import { utilService } from "./util-service.js";
import { storageService } from "./async-storage-service.js";

const KEY = "DB";

export const service = {
  query,
  remove,
  save,
  get,
};

function query() {
  return storageService.query(KEY);
}

function remove(Id) {
  return storageService.remove(KEY, Id);
}

function get(Id) {
  return storageService.get(KEY, Id);
}

function save(book) {
  if (book.id) return storageService.put(KEY, book);
  else return storageService.post(KEY, book);
}
