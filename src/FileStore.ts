import { promises as fsp } from 'fs';
import fs from 'fs';
import path from 'path';
import StoreLogger from './StoreLogger';
import IStore from './interfaces/IStore';
import IFileLocator from './interfaces/IFileLocator';
import IStoreWriter from './interfaces/IStoreWriter';

export default class FileStore implements IStore, IStoreWriter, IFileLocator {
  directory: string;
  logger: StoreLogger;

  constructor(public _directory: string, _logger: StoreLogger) {
    this.directory = _directory;
    this.logger = _logger;
  }

  public async save(id: number, message: string): Promise<any> {
    try {
      this.logger.saving(id);

      const fileFullName = this.getFile(id);

      await fsp.writeFile(fileFullName, message);

      this.logger.saved(id);
    } catch (error) {
      this.logger.errorSaving(id);
    }
  }

  public read(id: number): string {
    this.logger.readingFilestore(id);

    const fileFullName = this.getFile(id);

    const exists = fs.existsSync(fileFullName);

    if (!exists) {
      this.logger.didNotFind(id);
      return '';
    }

    return fs.readFileSync(fileFullName, { encoding: 'ascii' });
  }

  public getFile(id: number): string {
    return path.join(__dirname, this.directory, `${id}.txt`);
  }
}
