import MessageStore from "./MessageStore";
import StoreLoggerSplunk from "./StoreLoggerSplunk";

export default class ImplementationMessageStore extends MessageStore {
  get Logger() {
    return new StoreLoggerSplunk()
  }
}