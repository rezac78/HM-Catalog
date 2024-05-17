import HomeContentPage from "../shared/HomeContentPage";
import {
        ChartMain,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
function ChartPage({ isScrolled, isWide }) {
        return (
                <HeaderScroll isScrolled={isScrolled}>
                        {!isWide ? (
                                <>
                                        <HeaderTitle title="چارت سازمانی" titleLink="/about" />
                                        {ChartMain.map((e) => (
                                                <HomeContentPage
                                                        key={e.id}
                                                        title={e.Title}
                                                        content={e.content}
                                                        type={false}
                                                />
                                        ))}
                                        <div className="my-14">
                                                <img alt="notFound" src="/images/chart.svg" className="w-full h-full" />
                                        </div>
                                </>
                        ) : (
                                <div className="max-w-[1300px] mx-auto px-20">
                                        <div className="flex justify-start mt-10">
                                                <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
                                        </div>
                                        <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-20"></div>
                                        <HeaderTitle title="چارت سازمانی" titleLink="/about" />
                                        <div className="mx-auto my-10">
                                                {ChartMain.map((e) => (
                                                        <HomeContentPage
                                                                key={e.id}
                                                                title={e.Title}
                                                                content={e.content}
                                                                type={false}
                                                        />
                                                ))}
                                        </div>
                                        <div className="my-14">
                                                <img alt="notFound" src="/images/chart.svg" className="w-full h-full" />
                                        </div>
                                </div>
                        )}
                </HeaderScroll>
        );
}

export default ChartPage;
