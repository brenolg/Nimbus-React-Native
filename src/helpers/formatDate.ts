import { format, isToday, isTomorrow, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDateTime = (dateString: string) => {
  const date = new Date(dateString.replace(" ", "T"));

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

export const formatDateToHour = (dateString: string) => {
  const date = new Date(dateString.replace(" ", "T"));

  return new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

export const formatDayOfWeek = (dateString: string) => {
  const date = parseISO(dateString.replace(" ", "T"));

  if (isToday(date)) return "hoje";
  if (isTomorrow(date)) return "amanhã";

  return format(date, "EEEE", { locale: ptBR });
};
