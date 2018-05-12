export class Chalk {
  public magenta(message: string) {
    if (typeof window === 'undefined') {
      return message;
    }

    return '\u001b[35m' + message + '\u001b[0m';
  }

  public red(message: string) {
    if (typeof window === 'undefined') {
      return message;
    }

    return '\u001b[31m' + message + '\u001b[0m';
  }

  public yellow(message: string) {
    if (typeof window === 'undefined') {
      return message;
    }

    return '\u001b[33m' + message + '\u001b[0m';
  }

  public green(message: string) {
    if (typeof window === 'undefined') {
      return message;
    }

    return '\u001b[32m' + message + '\u001b[0m';
  }

  public blue(message: string) {
    if (typeof window === 'undefined') {
      return message;
    }

    return '\u001b[34m' + message + '\u001b[0m';
  }

  public grey(message: string) {
    if (typeof window === 'undefined') {
      return message;
    }

    return '\u001b[38;5;240m' + message + '\u001b[0m';
  }
}

const chalk = new Chalk();
export default chalk;
