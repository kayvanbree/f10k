export class Save {
  static readonly type = '[Collection] Save';
  constructor(public entityType: string, public id: string) {}
}

export class Remove {
  static readonly type = '[Collection] Remove';
  constructor(public entityType: string, public id: string) {}
}
