type Props = {
  id: string;
  text: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
};

export default function TextareaBox({ text, id, onChange, value }: Props) {
  return (
    <div className="w-full text-left p-2 ">
      <label className="w-full block my-2 text-violet-600">{text}</label>
      <textarea
        name={id}
        className="rounded-md p-2 mt-1 w-full border h-[300px]"
        onChange={(e) => onChange(e)}
        value={value}
      />
    </div>
  );
}
