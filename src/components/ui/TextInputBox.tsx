type Props = {
    text: string;
}

export default function TextInputBox({ text }: Props) {
    return (
        <div className="w-full text-left p-2 ">
            <label className="w-full block">{text}</label>
            <input type='text' className="rounded-md p-1 mt-1 w-full border" />
        </div>
    )


}