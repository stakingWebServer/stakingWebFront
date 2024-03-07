import getDashboardCardData from "@/api/dashboard"

const cardArr = [
    {
        name: '가입',
        params: 'register'
    },
    {
        name: '로그인',
        params: 'loginUser'
    },
    {
        name: '탈퇴',
        params: 'dropUser'
    },
]

export default function DashboardCards() {
    return (
        <div className="flex justify-center mt-10 text-center">
            {cardArr.map(card => <Card key={card.name} card={card} />)}
        </div>
    )
}

type Props = {
    card: {
        name: string;
        params: string;
    };
}

const Card = ({ card }: Props) => {
    const numData = getDashboardCardData(card.params);
    console.log(numData)

    return (
        <div>
            <p className="mb-5">당일 가입 {card.name} 사용자 수</p>
            <div className="flex border-white items-center justify-center mx-10 border border-solid border-black rounded-lg w-48 h-48">
                5 명
            </div>
        </div>

    )

}