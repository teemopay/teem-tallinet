export default function AboutBlock({
  type,
  title,
  sub,
}: {
  type?: string;
  title?: string;
  sub?: string;
}) {
  return (
    <div className="w-full min-h-[300px] bg-[url('/img/about-3.png')] bg-cover bg-right bg-no-repeat rounded-[48px] pt-[53px] pl-[24px] md:pl-[78px] pb-[53px] pr-[24px] text-[#fff]">
      <div
        className={`${
          type === "1" ? "md:max-w-[860px]" : "md:max-w-[400px]"
        } font-blod text-[30px] leading-[32px] md:text-[48px] md:leading-[58px] mb-[16px]`}
      >
        {title}
      </div>
      <div className="md:flex justify-start items-center">
        <div className="flex-1 max-w-[657px] text-[16px] leading-[26px] md:mr-[94px] mb-[24px] md:mb-0">
          {sub}
        </div>
        <a
          href="/About"
          className="flex justify-center items-center bg-[#2243FF] relative    h-10 w-full max-w-[227px] rounded-full  font-medium text-white"
        >
          Contáctanos
        </a>
      </div>
    </div>
  );
}
