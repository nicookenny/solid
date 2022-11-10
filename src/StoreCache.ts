import StoreLogger from './StoreLogger';

export default class StoreCache {
  cache: any;
  logger: StoreLogger;

  constructor(_logger: StoreLogger) {
    this.cache = {};
    this.logger = _logger;
  }

  public addOrUpdate(id: number, message: string): void {
    this.cache[id] = message;
  }

  public getOrAdd(id: number, message?: string): string {
    this.logger.readingCache(id);
    const exist = this.exists(id);
    if (!exist) {

      if (!message) {
        throw new Error('Mensaje esperado si no existe en cache');
      }
      
      this.logger.missingFromCache(id);
      this.addOrUpdate(id, message);
    }
    return this.cache[id];
  }

  public exists(id: number): boolean {
    return this.cache.hasOwnProperty(id);
  }

  public checkCache(): object {
    return this.cache;
  }
}
