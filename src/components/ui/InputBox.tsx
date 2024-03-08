import { Dispatch, SetStateAction } from "react"

type Props = {
    id: string;
    text: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>
    type: string;
}


export default function InputBox({ text, id, onChange, type }: Props) {
    return (
        <div className="w-full text-left p-2 ">
            <label className="my-2 w-full block">{text}</label>
            <input
                type={type}
                name={id}
                className="rounded-md p-2 mt-1 w-full border"
                onChange={e => onChange(e)}
            />
        </div>
    )


}