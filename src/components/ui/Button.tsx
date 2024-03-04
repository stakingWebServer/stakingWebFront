type Props = {
    text: string;
    size: number;
    onClick: any;
}

export default function Button({ text, size, onClick }: Props) {
    return (
        <button
            className={`mt-5 bg-gray-200 w-[${size}px] p-2 rounded-md`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}