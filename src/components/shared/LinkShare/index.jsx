function LinkShare({ linkAddress, title, HrefAddress, type }) {
  return (
    <div
      className={`${
        type === "listLink" ? "py-0" : "py-3"
      } flex px-0  sm:py-6 md:p-0 w-full font-bold text-[#4F4F4F]`}
    >
      <h2
        className={`${type === "listLink" ? "" : "text-[16px] md:text-[18px]"}`}
      >
        {title}
      </h2>
      <a
        href={type === "listLink" ? `tel:${HrefAddress}` :  HrefAddress }
        target="_blank"
        rel="noopener noreferrer"
        className={`${
          type === "listLink" ? "" : "text-[14px] md:text-[18px]"
        } pr-1`}
      >
        {linkAddress}
      </a>
    </div>
  );
}
export default LinkShare;
