interface PresentationCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const PresentationCard: React.FC<PresentationCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="w-fit md:w-1/2">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-amber-300 dark:bg-amber-500 text-black dark:text-white">
        <img
          alt="..."
          src={imageUrl}
          className="w-full h-[30vh] md:h-[50vh] object-cover align-middle rounded-t-lg"
        />
        <blockquote className="relative p-8 mb-4">
          <h4 className="text-xl font-bold">{title}</h4>
          <p className="text-md mt-2">{description}</p>
        </blockquote>
      </div>
    </div>
  );
};

export default PresentationCard;
