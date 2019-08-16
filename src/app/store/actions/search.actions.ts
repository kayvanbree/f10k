export class Search {
  static readonly type = '[Search] Search';
  constructor(
    public query: string,
    public pageSize: number,
    public offset: number,
    public type: string[],
  ) {}
}

export class SearchSuccess {
  static readonly type = '[Search] SearchSuccess';
  constructor(public results: any) {}
}
