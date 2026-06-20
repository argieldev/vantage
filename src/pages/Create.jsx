import { useState } from "react";
function Create() {
  const [rendered, setRendered] = useState("Attendance");

  const [settings, setSettings] = useState({
    className: "",
    period: "",
    subPeriods: [""],
  });

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "",
      attendance: [],
      grades: [],
    },
  ]);

  const handleSettings = (e) => {
    setSettings((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(settings);
  };

  return (
    <>
      <div className="w-full h-full flex-col hidden">
        <nav
          className="h-12 w-full flex items-center justify-between
             px-9 py-2 border-b border-gray-300"
        >
          <h1 className="font-medium">Create</h1>
          <ul className="flex gap-2 select-none">
            <li
              className={`px-2 py-1 font-medium border rounded-md cursor-pointer ${rendered === "Attendance" ? "bg-black text-white" : ""}`}
              onClick={() => setRendered("Attendance")}
            >
              Attendance
            </li>
            <li
              className={`px-2 py-1 font-medium border rounded-md cursor-pointer ${rendered === "Grade" ? "bg-black text-white" : ""}`}
              onClick={() => setRendered("Grade")}
            >
              Grade
            </li>
          </ul>
          <button className="font-medium text-gray-500 cursor-pointer">
            Import
          </button>
        </nav>
        <div className="w-full h-full flex">
          <aside className="h-full max-w-64 flex flex-col px-9 py-2 gap-4 border-r border-gray-300">
            <h2 className="text-2xl font-bold">Global Settings</h2>
            <div className="flex flex-col">
              <p className="font-medium">Class Name</p>
              <input
                className="flex items-center border rounded-md outline-0 px-1"
                type="text"
                name="className"
                value={settings.className}
                onChange={handleSettings}
              />
            </div>

            <div className="flex flex-col">
              <p className="font-medium">Period</p>
              <input
                className="flex items-center border rounded-md outline-0 px-1"
                type="text"
                name="period"
                value={settings.period}
                onChange={handleSettings}
              />
            </div>

            <div className="flex flex-col">
              <p className="font-medium">Sub-Period</p>
              <input
                className="flex items-center border rounded-md outline-0 px-1"
                type="text"
              />
              <button className="mt-2 border font-medium rounded-md cursor-pointer">
                Add more
              </button>
            </div>
            <h1>WIP: Can be better</h1>
          </aside>
          <main className="relative flex flex-1 flex-col px-9 py-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold">Students</h1>
              <h2 className="font-medium">0 <span>Students</span></h2>
            </div>
            <div>
              <h1>WIP: Undecided layout</h1>
            </div>
          </main>
        </div>
      </div>
      <h1>WIP</h1>
    </>
  );
}

export default Create;
