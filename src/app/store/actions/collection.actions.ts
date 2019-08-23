export class Save {
  static readonly type = '[Collection] Save';
  constructor(public type: string, public id: string) {}
}

export class Remove {
  static readonly type = '[Collection] Remove';
  constructor(public type: string, public id: string) {}
}
