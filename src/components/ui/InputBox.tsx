type Props = {
  id: string;
  text: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  value: string;
};

export default function InputBox({ text, id, onChange, type, value }: Props) {
  return (
    <div className="w-full text-left p-2 ">
      <label className="my-2 w-full block text-violet-600">{text}</label>
      <input
        type={type}
        name={id}
        className="rounded-md p-2 mt-1 w-full border"
        onChange={(e) => onChange(e)}
        value={value}
      />
    </div>
  );
}
