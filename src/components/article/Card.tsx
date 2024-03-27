import React from "react";

interface CardProps {
  title: string;
  date: string;
  desc: string;
  photoUrl: string;
  bannerUrl: string;
}
// https://i.pinimg.com/564x/11/b7/33/11b7338949adcd14a90841db9d6b8cf1.jpg
const Card: React.FC<CardProps> = ({
  title,
  date,
  desc,
  photoUrl,
  bannerUrl,
}) => {
  return (
    <>
      <div className="h-auto flex-1 basis-[600px] w-[80vw] md:w-96 flex flex-col items-center text-center rounded-[10px] border-[1px] border-gray-200 mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-neutral-600 dark:!bg-neutral-800 dark:text-white dark:shadow-none">
        <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
          <img
            src={bannerUrl}
            className="absolute flex h-32 w-full justify-center rounded-xl bg-cover object-cover"
          />
          <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-gray-200 dark:!border-neutral-6 00">
            <img className="h-full w-full rounded-full" src={photoUrl} alt="" />
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <h4 className="text-xl font-bold text-slate-700 dark:text-white">
            {title}
          </h4>
          <p className="text-base font-normal text-gray-600 dark:text-gray-200">
            {date}
          </p>
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
