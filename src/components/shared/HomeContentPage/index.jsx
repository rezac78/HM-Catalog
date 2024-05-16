function HomeContentPage({ content, title, type }) {
  return (
    <div className="flex flex-col justify-center text-right p-4 md:p-0 w-full">
      <h2 className="text-[16px] md:text-[25px] font-bold text-[#4F4F4F] mb-4">
        {type && title}
      </h2>
      <span className="text-[14px] md:text-[18px] font-bold text-[#4F4F4F]">
        {content}
      </span>
    </div>
  );
}
export default HomeContentPage;
