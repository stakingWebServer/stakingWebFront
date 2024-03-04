import { Dispatch, SetStateAction } from "react"

type Props = {
    id: string;
    text: string;
    loginDataChange: React.ChangeEventHandler<HTMLInputElement>
    type: string;
}


export default function InputBox({ text, id, loginDataChange, type }: Props) {
    return (
        <div className="w-full text-left p-2 ">
            <label className="w-full block">{text}</label>
            <input
                type={type}
                name={id}
                className="rounded-md p-1 mt-1 w-full border"
                onChange={e => loginDataChange(e)}
            />
        </div>
    )


}