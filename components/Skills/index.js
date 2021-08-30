export default function Skills({ skills }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-9 my-28">
      {skills.map(({ title, skill }) => (
        <div
          key={title}
          className="border border-gray-200 dark:border-gray-800 rounded p-12 flex flex-col items-center skill_heigth"
        >
          <h3 className="text-indigo-500 bg-indigo-50 inline-block rounded-full px-3 py-1 text-base font-semibold mb-4 dark:bg-gray-800 dark:text-pink-500">
            {title}
          </h3>
          {skill.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
