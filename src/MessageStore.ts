import FileStore from './FileStore';
import StoreCache from './StoreCache';
import StoreLogger from './StoreLogger';

export default class MessageStore {
  filestore: FileStore;
  cache: StoreCache;
  logger: StoreLogger;

  constructor(directory: string) {
    this.logger = new StoreLogger();
    this.filestore = new FileStore(directory, this.logger);
    this.cache = new StoreCache(this.logger);
  }

  public async save(id: number, message: string) {
    await this.filestore.save(id, message);
    this.cache.addOrUpdate(id, message);
  }

  public read(id: number): string {
    const exist = this.cache.exists(id);

    if (!exist) {
      const message = this.filestore.read(id);

      this.cache.getOrAdd(id, message);
    }

    return this.cache.getOrAdd(id);
  }
}
