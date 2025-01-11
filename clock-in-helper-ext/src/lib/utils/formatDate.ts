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
