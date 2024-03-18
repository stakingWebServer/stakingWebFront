import PageChart from "./PageChart";

//대시보드 - 페이지별 조회수 그래프 컴포넌트
export default function PageView() {

    return (
        <div className="mt-10 w-[740px] mx-auto">
            <p>페이지별 조회 수 </p>
            <PageChart />
        </div>
    )
}