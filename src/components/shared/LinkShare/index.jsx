function LinkShare({ linkAddress, title,HrefAddress, type }) {
  return (
    <div className="flex px-0 py-3 sm:py-6 md:p-0 w-full font-bold text-[#4F4F4F]">
      <h2 className="text-[16px] md:text-[18px] ">{title}</h2>
      <a
        href={HrefAddress}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[14px] md:text-[18px] pr-3"
      >
        {linkAddress}
      </a>
    </div>
  );
}
export default LinkShare;
