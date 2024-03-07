import Nav from "@/components/Nav";
import DashboardCards from "@/components/DashboardCards";
import PageGraph from "@/components/PageGraph";



//대시보드 컴포넌트
export default function Dashboard() {
    return (
        <div>
            <Nav selectNav={'대시보드'} />
            <DashboardCards />
            <PageGraph />
        </div>
    )
}