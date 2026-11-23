import { EmailNotifier } from './component/email-notifier';
import { SlackDecorator } from './concrete/slack-decorator';
import { SMSDecorator } from './concrete/sms-decorator';
import { UppercaseDecorator } from './concrete/uppercase-decorator';

const notifier = new UppercaseDecorator(
  new SlackDecorator(new SMSDecorator(new EmailNotifier))
)