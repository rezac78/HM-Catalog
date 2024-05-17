import HeaderScroll from "../shared/HeaderScroll";
import HeaderTitle from "../shared/HeaderTitle";
import TableForm from "../shared/TableForm";
function SupportPage({ isScrolled }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      <HeaderTitle title="لیست دانشجویان" titleLink="/" />
      <div className="my-10">
        <TableForm />
      </div>
    </HeaderScroll>
  );
}

export default SupportPage;
