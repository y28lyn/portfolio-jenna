import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface TimelineItem {
  icon: IconDefinition;
  title: string;
  date: string;
  desc: string;
  photoUrl: string;
  bannerUrl: string;
}

interface TimelineProps {
  timeline: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ timeline }) => {
  return (
    <ol className="items-center sm:flex">
      {timeline.map((item, index) => (
        <li key={index} className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-6 h-6 bg-amber-100 rounded-full ring-0 ring-gray-50 dark:bg-amber-300 sm:ring-8 dark:ring-gray-900 shrink-0 p-6">
              <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>
            </div>
            <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-5 sm:pe-8">
            <Card
              title={item.title}
              date={item.date}
              desc={item.desc}
              photoUrl={item.photoUrl}
              bannerUrl={item.bannerUrl}
            />
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
