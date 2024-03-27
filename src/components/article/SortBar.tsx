import { useState } from "react";

interface SortBarProps {
  categories: string[];
  onSortChange: (category: string) => void;
}

const SortBar: React.FC<SortBarProps> = ({ categories, onSortChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleSortChange = (category: string) => {
    setSelectedCategory(category);
    onSortChange(category);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 my-4 bg-gray-100 dark:bg-neutral-800 text-[#101314] dark:text-white p-2 rounded font-bold">
      <button
        className={`${
          selectedCategory === ""
            ? "bg-gray-400 dark:bg-neutral-700"
            : "bg-gray-200 dark:bg-neutral-500"
        } px-4 py-2 rounded-md`}
        onClick={() => handleSortChange("")}
      >
        Tous
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          className={`${
            selectedCategory === category
              ? "bg-gray-400 dark:bg-neutral-700"
              : "bg-gray-200 dark:bg-neutral-500"
          } px-4 py-2 rounded-md`}
          onClick={() => handleSortChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default SortBar;
