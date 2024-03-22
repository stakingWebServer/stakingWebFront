type Props = {
    text: string;
    size: number;
    onClick: any;
}

export default function Button({ text, size, onClick }: Props) {
    return (
        <button
            className={`mt-5 w-[${size}px] py-3 px-5 rounded-md bg-blue-200`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}