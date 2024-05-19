function HeaderScroll({ children }) {
        return (
                <div
                        className={`mt-32 z-50 pb-[164px] md:pb-0 flex flex-col w-full h-full px-6 md:px-0 py-2 app-content overflow-y-auto  bg-white rounded-t-[40px] md:rounded-t-[0] `}
                >
                        {children}
                </div>
        );
}

export default HeaderScroll;
