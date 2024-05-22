import { LazyLoadImage } from "react-lazy-load-image-component";

function LoginPath() {
  return (
    <>
      <div className="flex justify-end relative">
        <div className="absolute left-28 top-1 text-[14px] md:text-[16px] text-[#387AB4]">
          مشاوره
        </div>
        <div className="absolute left-16 top-7 w-[20%] md:w-[10%] h-[1px] md:h-[1.5px] bg-[#387AB4]"></div>
        <div
          className={`bg-[#387AB4] rounded-full mt-5 pt-2 md:pt-6 w-[80px] h-[80px] md:w-[110px] md:h-[110px] `}
        >
          <div className="flex justify-center">
            <LazyLoadImage
              effect="blur"
              alt="notfound"
              src={"/icon/messages.svg"}
              className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]"
            />
          </div>
          <span className="flex align-center justify-center text-[#ffff] py-2 text-[14px] md:text-[16px]">
            مشاوره
          </span>
        </div>
        <div className="absolute left-24 md:left-40 top-[3rem] text-[14px] md:text-[16px]">
          - پرسش و پاسخ اولیه
        </div>
        <div className="absolute left-16 top-[5.5rem] md:top-[7rem] w-[30%] md:w-[43%] border md:border-[1.7px] border-dashed border-[#387AB4] "></div>
        <div className="absolute left-40 md:left-96 top-[4.7rem] md:top-[5.5rem] text-[20px] md:text-[35px] text-[#387AB4]">
          {"<<"}
        </div>
      </div>
      {/* //////////////////////////////////////////////// */}
      <div className="flex justify-start relative -top-10">
        <div className="absolute right-16 top-7 md:top-[1.40rem] w-[33%] md:w-[50%] border md:border-[1.7px] border-dashed border-[#CC8B8B]"></div>
        <div
          className={`bg-[#CC8B8B] rounded-full mt-5 pt-4 md:pt-7 w-[90px] h-[90px] md:w-[120px] md:h-[120px] `}
        >
          <div className="flex justify-center">
            <LazyLoadImage
              effect="blur"
              alt="notfound"
              src={"/icon/security-user.svg"}
              className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] mx-auto "
            />
          </div>
          <span className="flex align-center justify-center text-[#ffff] py-2 text-[14px] md:text-[16px]">
            اطمینان
          </span>
        </div>
        <div className="absolute right-32 top-[4rem] text-[14px] md:text-[16px] text-[#CC8B8B]">
          اطمینان
        </div>
        <div className="absolute right-16 top-[5.5rem] w-[30%] md:w-[10%] h-[1px] md:h-[1.5px] bg-[#CC8B8B]"></div>
        <div className="absolute right-4 top-[5.5rem] w-[1px] h-[84%] border-[#CC8B8B] border md:border-[1.7px] border-dashed"></div>
        <div className="absolute right-8 top-[7rem] md:top-[9rem] text-[15px] md:text-[17px]">
          - مطالعه و بررسی مجوزها و سوابق و اعتبارنامه‌ها
        </div>
        <div className="absolute right-8 top-[8.5rem] md:top-[10.5rem] text-[15px] md:text-[17px]">
          - بررسی سایت و اطلاعات رسمی
        </div>
        <div className="absolute right-4 top-[11.1rem] md:top-[13rem] w-[42%] md:w-[50%] border md:border-[1.7px] border-dashed border-[#CC8B8B]"></div>
        <div className="absolute right-40 md:right-96 top-[10.3rem] md:top-[11.5rem] text-[20px] md:text-[35px] text-[#CC8B8B]">
          {">>"}
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////// */}

      <div className="flex justify-end relative">
        <div className="absolute left-28 top-1 text-[14px] md:text-[16px] text-[#A0B789]">
          اطلاعات
        </div>
        <div className="absolute left-4 top-[5.5rem] w-[1px] h-[80%] border-[#A0B789] border md:border-[1.7px] border-dashed"></div>
        <div className="absolute left-16 top-7 w-[46%] h-[1px] md:h-[1.5px] bg-[#A0B789]"></div>
        <div
          className={`bg-[#A0B789]  rounded-full mt-5 pt-4 md:pt-7 w-[90px] h-[90px] md:w-[120px] md:h-[120px] `}
        >
          <div className="flex justify-center">
            <LazyLoadImage
              effect="blur"
              alt="notfound"
              src={"/icon/information.svg"}
              className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]"
            />
          </div>
          <span className="flex align-center justify-center text-[#ffff] py-2 text-[14px] md:text-[16px]">
            اطلاعات
          </span>
        </div>
        <div className="absolute left-28 md:left-36 top-[3rem] md:top-[4rem] text-[14px] md:text-[16px] w-[15rem]">
          - کسب اطلاعات دقیق از محصولات
        </div>
        <div className="absolute left-28 md:left-36 top-[4.5rem] md:top-[5.5rem] text-[14px] md:text-[16px] w-[15rem]">
          - دریافت بهترین پیشنهادات تحصیلی و حرفه‌ای متناسب با ویژگی‌های فردی
        </div>
        <div className="absolute left-4 top-[11rem] md:top-[12.5rem] border-[#A0B789] w-[45%] md:w-[50%] border md:border-[1.7px] border-dashed"></div>
        <div className="absolute left-40 md:left-96 top-[10.2rem] md:top-[11rem] text-[20px] md:text-[35px] text-[#A0B789]">
          {"<<"}
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////// */}

      <div className="flex justify-start relative top-[2.4rem]">
        <div className="absolute right-16 top-7 md:top-[1.35rem] border-[#387AB4] w-[35%] md:w-[46%] border md:border-[1.7px] border-dashed"></div>
        <div
          className={`bg-[#387AB4] rounded-full mt-5 pt-2 w-[80px] h-[80px] md:pt-6 md:w-[110px] md:h-[110px] `}
        >
          <div className="flex justify-center">
            <LazyLoadImage
              effect="blur"
              alt="notfound"
              src={"/icon/security-user.svg"}
              className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]"
            />
          </div>
          <span className="flex align-center justify-center text-[#ffff] py-2 text-[14px] md:text-[16px]">
            انتخاب
          </span>
        </div>
        <div className="absolute right-36 top-[2.7rem] text-[14px] md:text-[16px] text-[#387AB4]">
          انتخاب
        </div>
        <div className="absolute right-20 top-[4rem] w-[30%] md:w-[10%] h-[1px] md:h-[1.5px] bg-[#387AB4]"></div>
        <div className="absolute right-6 top-[5.5rem] w-[1px] h-[32%] md:h-[44%] border-[#387AB4] border md:border-[1.7px] border-dashed"></div>
        <div className="absolute right-20 md:right-32 top-[5rem] text-[14px] md:text-[16px]">
          - انتخاب خدمت متناسب با نیاز و برنامه‌ریزی فردی
        </div>
        <div className="absolute right-6 md:right-7 top-[7.4rem] md:top-[9rem] border-[#387AB4] border md:border-[1.7px] border-dashed w-[40%] md:w-[50%]"></div>
        <div className="absolute right-40 md:right-96 top-[6.6rem] md:top-[7.5rem] text-[20px] md:text-[35px] text-[#387AB4]">
          {">>"}
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////// */}

      <div className="flex justify-end relative top-[2.1rem]">
        <div className="absolute left-4 top-[5.5rem] w-[1px] h-[35%] md:h-[45%] border-[#C9C38A] border md:border-[1.7px] border-dashed"></div>
        <div className="absolute left-28 md:left-32 top-9 md:top-10 text-[14px] md:text-[16px] text-[#C9C38A]">
          پرداخت
        </div>
        <div className="absolute left-16 top-14 md:top-16 w-[30%] md:w-[10%] h-[1px] md:h-[1.5px] bg-[#C9C38A]"></div>
        <div className="absolute left-16 top-6 md:top-[1.2rem] w-[37%] md:w-[45%] h-[1px] border-[#C9C38A] border md:border-[1.7px] border-dashed"></div>
        <div
          className={`bg-[#C9C38A] rounded-full mt-5 pt-4 md:pt-7 w-[90px] h-[90px] md:w-[120px] md:h-[120px] `}
        >
          <div className="flex justify-center">
            <LazyLoadImage
              effect="blur"
              alt="notfound"
              src={"/icon/empty-wallet.svg"}
              className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]"
            />
          </div>
          <span className="flex align-center justify-center text-[#ffff] py-2 text-[14px] md:text-[16px]">
            پرداخت
          </span>
        </div>
        <div className="absolute left-24 md:left-36 top-[4.5rem] md:top-[6rem] text-[14px] md:text-[16px]">
          - پیش‌ پرداخت اولیه
        </div>
        <div className="absolute left-4 top-[8rem] md:top-[9.5rem] border-[#C9C38A] border md:border-[1.7px] border-dashed w-[45%] md:w-[50%]"></div>
        <div className="absolute left-40 md:left-96 top-[7.2rem] md:top-[8rem] text-[20px] md:text-[35px] text-[#C9C38A]">
          {"<<"}
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////// */}

      <div className="flex justify-start relative top-[2.4rem] mb-20">
        <div className="absolute right-12 top-[0.8rem] md:top-[0.5rem] border-[#B17698] border md:border-[1.7px] border-dashed w-[38%] md:w-[47%]"></div>
        <div
          className={`bg-[#B17698] rounded-full mt-2 md:mt-1 pt-4 w-[90px] h-[90px] md:pt-7 md:w-[120px] md:h-[120px] `}
        >
          <div className="flex justify-center">
            <LazyLoadImage
              effect="blur"
              alt="notfound"
              src={"/icon/user-add.svg"}
              className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]"
            />
          </div>
          <span className="flex align-center justify-center text-[#ffff] py-2 text-[14px] md:text-[16px]">
            ثبت‌ نام
          </span>
        </div>
        <div className="absolute right-36 top-[2.7rem] text-[14px] md:text-[16px] text-[#B17698]">
          ثبت‌ نام
        </div>
        <div className="absolute right-20 top-[4rem] w-[30%] md:w-[10%] h-[1px] md:h-[1.5px] bg-[#B17698]"></div>
        <div className="absolute right-24 md:right-32 top-[5rem] text-[15px] md:text-[17px]">
          - قطعی شدن ثبت‌ نام
        </div>
      </div>
    </>
  );
}

export default LoginPath;
