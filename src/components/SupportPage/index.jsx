
import HeaderTitle from "../shared/HeaderTitle";
import TableForm from "../shared/TableForm";
function SupportPage({ isScrolled }) {
  return (
    <div
      className={`absolute top-[25%] left-1/2 -translate-x-1/2 flex flex-col w-[95%] app-content ${
        isScrolled ? "overflow-y-auto" : ""
      }  p-4 max-h-[90vh] z-50 bg-[#FFFFFF] rounded-t-[40px]`}
    >
      <HeaderTitle title="لیست دانشجویان" titleLink="/" />
      <div className="my-10">
        <TableForm />
      </div>
    </div>
  );
}

export default SupportPage;
