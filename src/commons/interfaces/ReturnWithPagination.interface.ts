export interface ReturnWithPagination<T> {
  items: T[];
  page: number;
  limit: number;
}
