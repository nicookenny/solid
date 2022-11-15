import MessageStore from './MessageStore';
import StoreLoggerSplunk from './implementations/StoreLoggerSplunk';

export default class ImplementationMessageStore extends MessageStore {
  get Logger() {
    return new StoreLoggerSplunk();
  }
}
