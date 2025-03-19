import { useNotices } from "../../../../hooks/useNotices";

export default function CategorySelect() {
  const { categories } = useNotices();
  console.log(categories);
  return <p>HEllo</p>;
}
