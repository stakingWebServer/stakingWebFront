import DashboardCard from "./DashboardCard";

const cardArr = [
  {
    name: "가입",
    params: "register",
  },
  {
    name: "로그인",
    params: "loginUser",
  },
  {
    name: "탈퇴",
    params: "dropUser",
  },
];

export default function DashboardCards() {
  return (
    <div className="flex justify-center text-center h-[230px]">
      {cardArr.map((card) => (
        <DashboardCard key={card.name} card={card} />
      ))}
    </div>
  );
}
