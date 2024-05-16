import HeaderTitle from "../shared/HeaderTitle";
import TableForm from "../shared/TableForm";
function SupportPage({ isScrolled }) {
  return (
    <div
      className={`absolute md:static top-[300px] left-1/2 -translate-x-1/2 md:translate-x-[unset] flex flex-col w-[95%] md:w-full py-10 md:h-full app-content ${
        isScrolled ? "overflow-y-auto top-[450px]" : ""
      } p-4 md:p-0 max-h-[84vh] z-50 bg-[#FFFFFF] rounded-t-[40px] md:rounded-t-[0]`}
    >
      <HeaderTitle title="لیست دانشجویان" titleLink="/" />
      <div className="my-10">
        <TableForm />
      </div>
    </div>
  );
}

export default SupportPage;
