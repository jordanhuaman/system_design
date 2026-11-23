import { Notifier } from '../notifier';

//? Decorador base: envuelve otro Notifier
export abstract class NotifierDecorator implements Notifier{
  constructor(protected readonly wrapper: Notifier) {}

  send(message: string): void {
    this.wrapper.send(message);
  }
}