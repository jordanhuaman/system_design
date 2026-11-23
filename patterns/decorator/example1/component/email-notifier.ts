import { Notifier } from '../../notifier';

//? Concrete component
export class EmailNotifier implements Notifier {
  send(message: string): void {
    console.log(`Sending email notification: ${message}`);
  }

}