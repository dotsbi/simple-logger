import { LogLevel } from './Logger';

function padLeft(input: string, length: number, padding: string = ' ') {
  let output = input;
  if (output.length >= length) {
    return output;
  }

  while (output.length < length) {
    output = padding + output;
  }

  return output;
}

function formatDate(date: Date) {
  const month = padLeft((date.getMonth() + 1).toString(), 2, '0');
  const day = padLeft(date.getDate().toString(), 2, '0');
  const hours = padLeft(date.getHours().toString(), 2, '0');
  const minutes = padLeft(date.getMinutes().toString(), 2, '0');
  const seconds = padLeft(date.getSeconds().toString(), 2, '0');
  const ms = padLeft(date.getMilliseconds().toString(), 3, '0');
  return `${date.getFullYear()}-${month}-${day} ${hours}:${minutes}:${seconds}.${ms}`;
}

export function logPrefix(_logLevel?: LogLevel) {
  const time = `${formatDate(new Date())}`;
  return `[${time}]`;
}
