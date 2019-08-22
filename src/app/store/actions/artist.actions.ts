export class SaveArtist {
  static readonly type = '[Artist] SaveArtist';
  constructor(public id: string) {}
}

export class RemoveArtist {
  static readonly type = '[Artist] RemoveArtist';
  constructor(public id: string) {}
}
