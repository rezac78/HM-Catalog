
function HomeContentPage({ content, title, type }) {
  const contentWithHighlightedNumbers = highlightNumbers(content);
  return (
    <div className="flex flex-col justify-center px-0 py-2.5 sm:py-6 md:p-0 w-full font-bold text-grayColor">
      <h2 className="text-[16px] md:text-[25px] ">{type && title}</h2>
      <span
        className="text-[14px] md:text-[18px] text-justify leading-[1.8rem]"
        dangerouslySetInnerHTML={{ __html: contentWithHighlightedNumbers }}
      />
    </div>
  );
}
export default HomeContentPage;

function highlightNumbers(text) {
  return text.replace(/(\d+)/g, '<span class="text-number">$1</span>');
}
