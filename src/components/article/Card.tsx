import React from "react";

interface CardProps {
  title: string;
  date: string;
  desc: string;
  photoUrl: string;
}

const Card: React.FC<CardProps> = ({ title, date, desc, photoUrl }) => {
  return (
    <>
      <div className="h-auto w-[80vw] md:w-96 flex flex-col items-center rounded-[10px] border-[1px] border-gray-200  mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-slate-800 dark:text-white dark:shadow-none">
        <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
          <img
            src="https://i.pinimg.com/564x/11/b7/33/11b7338949adcd14a90841db9d6b8cf1.jpg"
            className="absolute flex h-32 w-full justify-center rounded-xl bg-cover object-cover"
          />
          <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-slate-700">
            <img className="h-full w-full rounded-full" src={photoUrl} alt="" />
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <h4 className="text-xl font-bold text-slate-700 dark:text-white">
            {title}
          </h4>
          <p className="text-base font-normal text-gray-600">{date}</p>
        </div>
        <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl text-center font-bold text-slate-700 dark:text-white">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
