import { NotifierDecorator } from '../../base/notifier-decorator';

export class SlackDecorator extends NotifierDecorator {
  send(message: string): void {
    super.send(message);
    console.log(`💬 Slack: ${message}`);
  }
}