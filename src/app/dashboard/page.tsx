import Nav from "@/components/Nav";
import DashboardCards from "@/components/dashboard/DashboardCards";
import PageView from "@/components/dashboard/PageView";

//대시보드 컴포넌트
export default function Dashboard() {
    return (
        <div>
            <Nav selectNav={'대시보드'} />
            <DashboardCards />
            <PageView />
        </div>
    )
}