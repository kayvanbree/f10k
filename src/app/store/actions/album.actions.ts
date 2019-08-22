export class SaveAlbum {
  static readonly type = '[Album] SaveAlbum';
  constructor(public id: string) {}
}

export class RemoveAlbum {
  static readonly type = '[Album] RemoveAlbum';
  constructor(public id: string) {}
}
