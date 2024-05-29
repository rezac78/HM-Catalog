import TextEditor from "../TextEditor/TextEditor";

function HomeContentPage({ content, title, type }) {
  return (
    <div className="flex flex-col justify-center px-0 py-2.5 sm:py-6 md:p-0 w-full font-bold text-grayColor">
      <h2 className="text-[16px] md:text-[25px]  ">{type && title}</h2>
      <span className="text-[14px] md:text-[18px] ">
        <TextEditor text={content} colorer={true} />
      </span>
    </div>
  );
}
export default HomeContentPage;
