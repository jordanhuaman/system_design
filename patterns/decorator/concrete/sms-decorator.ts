import { NotifierDecorator } from '../base/notifier-decorator';

//? Decoradores concretos
export class SMSDecorator extends NotifierDecorator {
  send(message: string): void {
    super.send(message);
    console.log(`📱 SMS: ${message}`);
  }
}