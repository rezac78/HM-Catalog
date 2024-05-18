function HeaderScroll({ children }) {
        return (
                <div
                // fixed md:static top-[150px] left-1/2 -translate-x-1/2 md:translate-x-[unset] flex flex-col w-[95%] md:w-full py-2 md:h-full app-content overflow-y-auto p-4 md:p-0 max-h-[80vh] md:max-h-[84vh] z-50 bg-[#FFFFFF] rounded-t-[40px] md:rounded-t-[0]
                        className={`-mt-[70px] md:mt-0 pb-[50px] flex flex-col w-full px-6 md:px-0 py-2 app-content overflow-y-auto z-50 bg-white rounded-t-[40px] md:rounded-t-[0] `}
                >
                        {children}
                </div>
        );
}

export default HeaderScroll;
