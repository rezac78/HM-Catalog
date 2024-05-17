
function HeaderScroll({ children, isScrolled }) {
        return (
                <div
                className={`absolute md:static top-[250px] left-1/2 -translate-x-1/2 md:translate-x-[unset] flex flex-col w-[95%] md:w-full py-10 md:h-full app-content ${
                        isScrolled ? "overflow-y-auto top-[270px]" : ""
                      } p-4 md:p-0 max-h-[84vh] z-50 bg-[#FFFFFF] rounded-t-[40px] md:rounded-t-[0]`}F
                >
                        {children}
                </div>
        );
}

export default HeaderScroll;
