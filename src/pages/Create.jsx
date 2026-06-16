import { useState } from "react";
function Create() {
  const [rendered, setRendered] = useState("Attendance");
  return (
    <>
      <div className="w-full h-full flex flex-col">
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
          <button>Import</button>
        </nav>
        <main className="px-9 py-2">
          <div className="max-w-75 flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Global Settings</h2>
            <form className="flex flex-col gap-2">
              <div className="flex flex-col">
                <p className="font-medium">Class Name</p>
                <input
                  className="flex items-center border rounded-md outline-0 px-1"
                  type="text"
                />
              </div>

              <div className="flex flex-col">
                <p className="font-medium">Period</p>
                <input
                  className="flex items-center border rounded-md outline-0 px-1"
                  type="text"
                />
              </div>

              <div className="flex flex-col">
                <p className="font-medium">Sub-Period</p>
                <input
                  className="flex items-center border rounded-md outline-0 px-1"
                  type="text"
                />
                <button className="mt-2 border rounded-md">Add more</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default Create;
