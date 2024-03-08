type Props = {
    id: string;
    text: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}

export default function TextareaBox({ text, id, onChange }: Props) {
    return (
        <div className="w-full text-left p-2 ">
            <label className="w-full block my-2">{text}</label>
            <textarea
                name={id}
                className="rounded-md p-2 mt-1 w-full border h-[300px]"
                onChange={e => onChange(e)}
            />
        </div>
    )
}