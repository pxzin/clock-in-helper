import { toZonedTime, format } from 'date-fns-tz';

export const formatDate = (
  date: Date | string,
  timeZone: string = 'America/Sao_Paulo',
): string => {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  const zonedDate = toZonedTime(date, timeZone);
  return format(zonedDate, 'yyyy-MM-dd', { timeZone });
};

export const formatStartOfDay = (
  date: Date,
  timeZone: string = 'America/Sao_Paulo',
): string => {
  return format(date, "yyyy-MM-dd'T'00:00:00.000XXX", { timeZone });
};
