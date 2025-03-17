import { format } from "date-fns";

export function formatDate(isoDate) {
  return format(new Date(isoDate), "dd.MM.yyyy");
}

export function formatDateWithSlash(isoDate) {
  return format(new Date(isoDate), "dd/MM/yyyy");
}
