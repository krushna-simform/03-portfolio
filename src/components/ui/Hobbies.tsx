import hobbiesImage from "/images/hobbies.png";

export const Hobbies = () => {
  return (
    <div className="flex justify-between mt-30">
      <div className="flex flex-col justify-center gap-4">
        <p className="text-[40px] font-bold">Hobbies</p>
        <ul className="space-y-2 marker:text-primaryBlue list-disc ml-5 mt-4">
          <li className="text-[20px]">
            I like to play cricket and snooker, and I also like to play games.
          </li>
          <li className="text-[20px]">
            I also enjoy reading novels and watching movies.
          </li>
        </ul>
      </div>
      <div className="hidden lg:block lg:w-[500px]">
        <img src={hobbiesImage} alt="" />
      </div>
    </div>
  );
};
