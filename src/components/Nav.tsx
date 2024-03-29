import Link from "next/link"

const navArr = [
    {
        name: '대시보드',
        href: 'dashboard'
    },
    {
        name: '푸시전송',
        href: 'pushSend'
    },
    {
        name: '문의답변',
        href: 'inquiryAnswer'
    },
]

type Props = {
    selectNav: string;
}

export default function Nav({ selectNav }: Props) {
    return (
        <nav className="text-right py-4">
            <ul className="flex justify-end my-5 mx-3">
                {navArr.map(item => (
                    <Link key={item.href} href={item.href}>
                        <li
                            className={`${selectNav === item.name && 'bg-gray-200 text-gray-700'} text-center w-32 px-7 py-2 mx-2 border border-solid border-gray-300 rounded-lg`}>
                            {item.name}
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    )
}