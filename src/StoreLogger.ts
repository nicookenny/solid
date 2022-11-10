export default class StoreLogger {
  public saving(id: number): void {
    console.log(`Guardando mensaje: ${id}.`);
  }
  public saved(id: number): void {
    console.info(`Mensaje guardado: ${id}.`);
  }
  public readingFilestore(id: number): void {
    console.debug(`Leyendo el mensaje ${id} de FileStore.`);
  }
  public readingCache(id: number): void {
    console.debug(`Leyendo mensaje ${id} de StoreCache.`);
  }
  public didNotFind(id: number): void {
    console.debug(`No se encontró el mensaje ${id}.`);
  }
  public missingFromCache(id: number): void {
    console.debug(`El mensaje ${id} no existe en cache`);
  }
  public returning(id: number): void {
    console.debug(`Devolviendo mensaje ${id}.`);
  }
  public errorSaving(id: number): void {
    console.debug(`Error al guardar el mensaje ${id}.`);
  }
}
