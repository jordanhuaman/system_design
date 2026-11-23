import { NotifierDecorator } from '../../base/notifier-decorator';

export class UppercaseDecorator extends NotifierDecorator {
  send(message: string): void {
    super.send(message.toUpperCase());
  }
}