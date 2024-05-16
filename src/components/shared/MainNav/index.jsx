function MainNav() {
  return (
    <div className="bg-[#1E73BF] flex justify-end p-14 gap-x-10 rounded-md	">
      <div
        className="relative w-24 h-24 z-10"
        style={{
          backgroundImage: "url(/images/brushed.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src="/images/hat1.png" alt="Logo" className="h-[80px] w-[80px] z-20" />
        <span className="font-bold text-white flex items-center justify-center mt-2">
          طرح ها
        </span>
      </div>
    </div>
  );
}

export default MainNav;
