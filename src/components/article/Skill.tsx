interface SkillItem {
  icon: string;
  title: string;
  description: string;
}

interface SkillProps {
  skills: SkillItem[];
}

const Skill: React.FC<SkillProps> = ({ skills }) => {
  return (
    <div className="w-full md:w-6/12 px-4">
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <div key={index} className="w-full md:w-6/12 px-4">
            <div className="relative flex flex-col mt-4">
              <div className="px-4 py-5 flex-auto">
                <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#101314] dark:bg-white text-white dark:text-black">
                  <i className={skill.icon}></i>
                </div>
                <h6 className="text-lg mb-1 font-semibold text-black dark:text-white">
                  {skill.title}
                </h6>
                <p className="mb-4 text-md text-black dark:text-white">
                  {skill.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
