import StoreLogger from './StoreLogger'

export default class StoreLoggerImplementation extends StoreLogger {
  public saving(id: number): void {
    this.ImplementationLogger(`Saving message ${id}.`)
  }
  public saved(id: number): void {
    this.ImplementationLogger(`Saved message ${id}.`)
  }
  public readingFilestore(id: number): void {
    this.ImplementationLogger(`Reading message ${id} from FileStore.`)
  }
  public readingCache(id: number): void {
    this.ImplementationLogger(`Reading message ${id} from StoreCache.`)
  }
  public didNotFind(id: number): void {
    this.ImplementationLogger(`No message ${id} found.`)
  }
  public missingFromCache(id: number): void {
    this.ImplementationLogger(`Message ${id} missing from cache.`)
  }
  public returning(id: number): void {
    this.ImplementationLogger(`Returning message ${id}.`)
  }
  public errorSaving(id: number): void {
    this.ImplementationLogger(`Error saving message ${id}.`)
  }
  // Private method to return a hypothetical ImplementationLogger
  private ImplementationLogger(log: string) {
    console.log("Logged to Implementation: ", log);
  }
}