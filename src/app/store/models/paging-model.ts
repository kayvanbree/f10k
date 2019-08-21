export interface PagingModel<T> {
  items: T[];
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}
