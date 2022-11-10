import IStore from './IStore';

export default class SqlStore implements IStore {
  save(id: number, message: string): void {}
  read(id: number): string {
    return '';
  }

  getFile(id: number): string {
    throw new Error('Method not implemented.');
  }
}
