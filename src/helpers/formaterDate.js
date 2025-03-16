import { format } from "date-fns";

export default function formatDate(isoDate) {
  return format(new Date(isoDate), "dd.MM.yyyy");
}
