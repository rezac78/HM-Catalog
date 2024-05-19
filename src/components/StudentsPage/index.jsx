import HomeContentPage from "../shared/HomeContentPage";
import { sstudentMain } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";

function StudentsPage({ isScrolled, isWide }) {
        return (
                <HeaderScroll isScrolled={isScrolled}>
                        {!isWide ? (
                                <>
                                        <HeaderTitle title="دانشجویان" titleLink="/achievements" />
                                        {sstudentMain.map((e) => (
                                                <HomeContentPage
                                                        key={e.id}
                                                        title={e.Title}
                                                        content={e.content}
                                                        type={false}
                                                />
                                        ))}
                                        {/* <div className="mb-14">
                                                <TableForm />
                                        </div> */}
                                </>
                        ) : (
                                <div className="max-w-[1300px] mx-auto px-20">
                                        <div className="flex justify-start mt-10">
                                                <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
                                        </div>
                                        <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-20"></div>
                                        <HeaderTitle title="دانشجویان" titleLink="/achievements" />
                                        <div className="mx-auto my-10">
                                                {sstudentMain.map((e) => (
                                                        <HomeContentPage
                                                                key={e.id}
                                                                title={e.Title}
                                                                content={e.content}
                                                                type={false}
                                                        />
                                                ))}
                                        </div>
                                        {/* <div className="my-10">
                                                <TableForm />
                                        </div> */}
                                </div>
                        )}
                </HeaderScroll>
        );
}

export default StudentsPage;
