import NoItemsText from "../NoItemsText/NoItemsText";
import css from "./NoticesItem.module.css";
export default function NoticesItem({ item }) {
  if (item) {
    return <NoItemsText />;
  }

  return <div>NoticesItem Component</div>;
}
