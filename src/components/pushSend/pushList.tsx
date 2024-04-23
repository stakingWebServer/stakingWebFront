import { LIST_ODD_STYLE, LIST_STYLE, LIST_TITLE_STYLE } from "../ui/ListStyled";

interface pushList {
  pushTitle: string;
  pushContent: string;
  createDatetime: string;
}

interface Props {
  pushList: pushList[];
}

export default function PushList({ pushList }: Props) {
  return (
    <div className="w-[52%] h-[100%] overflow-auto">
      <p className={LIST_TITLE_STYLE}>History</p>
      <ul>
        {pushList?.map((item: pushList, i) => (
          <li
            key={item.pushTitle}
            className={`${
              i % 2 !== 0 && LIST_ODD_STYLE
            } ${LIST_STYLE} justify-between p-4 items-end`}>
            <div>
              <p className="pb-2 font-semibold text-black">{item.pushTitle}</p>
              <p>{item.pushContent}</p>
            </div>
            <p className="text-sm	">{item.createDatetime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
