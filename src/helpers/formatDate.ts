export const formatDateTime = (dateString: string) => {
  const date = new Date(dateString.replace(" ", "T"));

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};
