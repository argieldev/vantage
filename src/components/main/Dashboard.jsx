import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

function Content() {
  const [showDetails, setShowDetails] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedCard, setSelectedCard] = useState(null);
  const [importClass, setImportClass] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX + -160,
      y: e.clientY + 24,
    });
  };

  const avgGradesPerTerm = [
    { term: "1st Term", oop: 84.2, ds: 82.5 },
    { term: "2nd Term", oop: 86.1, ds: 84.0 },
    { term: "3rd Term", oop: 87.4, ds: 90.6 },
    { term: "4th Term", oop: 88.0, ds: 86.3 },
  ];

  const students = [
    { place: 1, name: "Emma Wilson", averageGrade: 98.2 },
    { place: 2, name: "Sarah Johnson", averageGrade: 96.8 },
    { place: 3, name: "John Smith", averageGrade: 95.4 },
    { place: 4, name: "Alex Garcia", averageGrade: 94.1 },
    { place: 5, name: "Michael Brown", averageGrade: 92.7 },
    { place: 6, name: "Olivia Davis", averageGrade: 91.3 },
    { place: 7, name: "Daniel Lee", averageGrade: 89.8 },
    { place: 8, name: "Sophia Martinez", averageGrade: 88.5 },
  ];

  const cardDetails = {
    studentPerSubject: [
      "Web Development: 342 students",
      "Programming 1: 298 students",
      "Database Systems: 265 students",
      "Computer Networks: 329 students",
    ],

    averageGrade: [
      "Web Development: 89.2%",
      "Programming 1: 84.7%",
      "Database Systems: 82.5%",
      "Computer Networks: 85.6%",
    ],

    atRisk: [
      "Web Development: 2 students",
      "Programming 1: 5 students",
      "Database Systems: 3 students",
      "Computer Networks: 2 students",
    ],

    passRate: [
      "Web Development: 98%",
      "Programming 1: 93%",
      "Database Systems: 95%",
      "Computer Networks: 97%",
    ],
  };

  return (
    <>
      <div className="flex-1 ml-64 bg-slate-100 overflow-y-auto">
        <nav className="h-12 flex items-center justify-between px-9 py-2 bg-white border-b border-gray-300">
          <h1 className="text-md font-medium">Dashboard</h1>
          <NavLink
            className="flex items-center justify-center p-1 gap-2 bg-accent-blue border rounded-md cursor-pointer"
            onClick={() => setImportClass(!importClass)}
            to={"/create"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              color="currentColor"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 4V20M20 12H4"></path>
            </svg>
            <h2 className="font-medium text-sm">Create</h2>
          </NavLink>
        </nav>
        <main className="flex flex-col px-8 py-2 gap-2">
          {/* Grid of cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {/* Example card */}
            <div className="flex flex-col px-2 py-4 gap-4 rounded-md bg-white border border-gray-300 transition-all duration-200 hover:border-accent-teal hover:shadow shadow-accent-teal-bg">
              <div className="flex justify-between gap-2">
                <div className="p-2 bg-accent-teal-bg rounded-md w-max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    color="currentColor"
                    fill="none"
                    stroke="#14b8a6"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 6L8 4L13.5 6L11 7.5V9C11 9 10.3333 8.5 8 8.5C5.66667 8.5 5 9 5 9V7.5L2.5 6ZM2.5 6V10"></path>
                    <path d="M11 8.5V9.38889C11 11.1071 9.65685 12.5 8 12.5C6.34315 12.5 5 11.1071 5 9.38889V8.5"></path>
                    <path d="M15.3182 11.0294C15.3182 11.0294 15.803 10.6765 17.5 10.6765C19.197 10.6765 19.6818 11.0294 19.6818 11.0294M15.3182 11.0294V10L13.5 9L17.5 7.5L21.5 9L19.6818 10V11.0294M15.3182 11.0294V11.3182C15.3182 12.5232 16.295 13.5 17.5 13.5C18.705 13.5 19.6818 12.5232 19.6818 11.3182V11.0294"></path>
                    <path d="M4.38505 15.926C3.44187 16.4525 0.96891 17.5276 2.47511 18.8729C3.21087 19.53 4.03033 20 5.06058 20H10.9394C11.9697 20 12.7891 19.53 13.5249 18.8729C15.0311 17.5276 12.5581 16.4525 11.6149 15.926C9.40321 14.6913 6.59679 14.6913 4.38505 15.926Z"></path>
                    <path d="M16 20H19.7048C20.4775 20 21.0921 19.624 21.6439 19.0983C22.7736 18.0221 20.9189 17.162 20.2115 16.7408C18.9362 15.9814 17.3972 15.8059 16 16.2141"></path>
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#bababa"
                  fill="none"
                  stroke="#bababa"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onMouseEnter={() => {
                    setShowDetails(true);
                    setSelectedCard("studentPerSubject");
                  }}
                  onMouseLeave={() => setShowDetails(false)}
                  onMouseMove={handleMouseMove}
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16V12"></path>
                  <path d="M12.125 8.25H12M12.25 8.25C12.25 8.11193 12.1381 8 12 8C11.8619 8 11.75 8.11193 11.75 8.25C11.75 8.38807 11.8619 8.5 12 8.5C12.1381 8.5 12.25 8.38807 12.25 8.25Z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-md text-secondary">Number of Students</h2>
                <p className="text-2xl font-bold">1,234</p>
              </div>
            </div>
            <div className="flex flex-col px-2 py-4 gap-4 rounded-md bg-white border border-gray-300 transition-all duration-200 hover:border-accent-amber hover:shadow shadow-accent-amber-bg">
              <div className="flex justify-between gap-2">
                <div className="p-2 bg-accent-amber-bg rounded-md w-max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    color="#f59e0b"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="1"
                    strokeLinecap="round"
                  >
                    <path d="M20.9877 21H9.9877C6.68787 21 5.03795 21 4.01283 19.9749C2.9877 18.9497 2.9877 17.2998 2.9877 14V3"></path>
                    <path d="M6.9877 7C7.61628 5.87847 8.46901 5 9.781 5C15.3279 5 12.2101 17 18.1708 17C19.4921 17 20.3397 16.1157 20.9877 15"></path>
                    <path
                      d="M10.9998 11.0006H10.9873M11.0123 11.0006C11.0123 11.0144 11.0011 11.0256 10.9873 11.0256C10.9735 11.0256 10.9623 11.0144 10.9623 11.0006C10.9623 10.9868 10.9735 10.9756 10.9873 10.9756C11.0011 10.9756 11.0123 10.9868 11.0123 11.0006Z"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M6.99981 11.0006H6.98731M7.01231 11.0006C7.01231 11.0144 7.00112 11.0256 6.98731 11.0256C6.9735 11.0256 6.96231 11.0144 6.96231 11.0006C6.96231 10.9868 6.9735 10.9756 6.98731 10.9756C7.00112 10.9756 7.01231 10.9868 7.01231 11.0006Z"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M20.9998 11.0006H20.9873M21.0123 11.0006C21.0123 11.0144 21.0011 11.0256 20.9873 11.0256C20.9735 11.0256 20.9623 11.0144 20.9623 11.0006C20.9623 10.9868 20.9735 10.9756 20.9873 10.9756C21.0011 10.9756 21.0123 10.9868 21.0123 11.0006Z"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M16.9998 11.0006H16.9873M17.0123 11.0006C17.0123 11.0144 17.0011 11.0256 16.9873 11.0256C16.9735 11.0256 16.9623 11.0144 16.9623 11.0006C16.9623 10.9868 16.9735 10.9756 16.9873 10.9756C17.0011 10.9756 17.0123 10.9868 17.0123 11.0006Z"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#bababa"
                  fill="none"
                  stroke="#bababa"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onMouseEnter={() => {
                    setShowDetails(true);
                    setSelectedCard("averageGrade");
                  }}
                  onMouseLeave={() => setShowDetails(false)}
                  onMouseMove={handleMouseMove}
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16V12"></path>
                  <path d="M12.125 8.25H12M12.25 8.25C12.25 8.11193 12.1381 8 12 8C11.8619 8 11.75 8.11193 11.75 8.25C11.75 8.38807 11.8619 8.5 12 8.5C12.1381 8.5 12.25 8.38807 12.25 8.25Z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-md text-secondary">Average Grade</h2>
                <p className="text-2xl font-bold">85.5%</p>
              </div>
            </div>
            <div className="flex flex-col px-2 py-4 gap-4 rounded-md bg-white border border-gray-300 transition-all duration-200 hover:border-accent-red hover:shadow shadow-accent-red-bg">
              <div className="flex justify-between gap-2">
                <div className="p-2 bg-accent-red-bg rounded-md w-max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    color="#ef4444"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13.9248 21H10.0752C5.44476 21 3.12955 21 2.27636 19.4939C1.42317 17.9879 2.60736 15.9914 4.97574 11.9985L6.90057 8.75333C9.17559 4.91778 10.3131 3 12 3C13.6869 3 14.8244 4.91777 17.0994 8.75332L19.0243 11.9985C21.3926 15.9914 22.5768 17.9879 21.7236 19.4939C20.8704 21 18.5552 21 13.9248 21Z"></path>
                    <path d="M12 17V13"></path>
                    <path d="M12 9.25H12.125M12.25 9.25C12.25 9.11193 12.1381 9 12 9C11.8619 9 11.75 9.11193 11.75 9.25C11.75 9.38807 11.8619 9.5 12 9.5C12.1381 9.5 12.25 9.38807 12.25 9.25Z"></path>
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#bababa"
                  fill="none"
                  stroke="#bababa"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onMouseEnter={() => {
                    setShowDetails(true);
                    setSelectedCard("atRisk");
                  }}
                  onMouseLeave={() => setShowDetails(false)}
                  onMouseMove={handleMouseMove}
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16V12"></path>
                  <path d="M12.125 8.25H12M12.25 8.25C12.25 8.11193 12.1381 8 12 8C11.8619 8 11.75 8.11193 11.75 8.25C11.75 8.38807 11.8619 8.5 12 8.5C12.1381 8.5 12.25 8.38807 12.25 8.25Z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-md text-secondary">At Risk</h2>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
            <div className="flex flex-col px-2 py-4 gap-4 rounded-md bg-white border border-gray-300 transition-all duration-200 hover:border-accent-green hover:shadow shadow-accent-green-bg">
              <div className="flex justify-between gap-2">
                <div className="p-2 bg-accent-green-bg rounded-md w-max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    color="#22c55e"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 14L8.5 17.5L19 6.5"></path>
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#bababa"
                  fill="none"
                  stroke="#bababa"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onMouseEnter={() => {
                    setShowDetails(true);
                    setSelectedCard("passRate");
                  }}
                  onMouseLeave={() => setShowDetails(false)}
                  onMouseMove={handleMouseMove}
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16V12"></path>
                  <path d="M12.125 8.25H12M12.25 8.25C12.25 8.11193 12.1381 8 12 8C11.8619 8 11.75 8.11193 11.75 8.25C11.75 8.38807 11.8619 8.5 12 8.5C12.1381 8.5 12.25 8.38807 12.25 8.25Z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-md text-secondary">Pass Rate</h2>
                <p className="text-2xl font-bold">85.5%</p>
              </div>
            </div>
            <div className="w-170 flex flex-col px-2 py-4 gap-4 rounded-md bg-white border border-gray-300 transition-all duration-200 hover:border-accent-green hover:shadow shadow-accent-green-bg">
              <h1 className="text-md font-medium">Change Log</h1>
              <div className="flex-1 flex items-center justify-center text-sm text-muted-foreground">
                <span className="font-medium text-gray-400">None</span>
              </div>
            </div>
          </div>

          {/* This is connected to the cards above*/}
          {showDetails && cardDetails[selectedCard] && (
            <div
              className="fixed top-12 right-0 w-max flex flex-col p-2 items-start origin-top font-normal bg-white border border-gray-300 rounded-md shadow"
              style={{ left: position.x, top: position.y }}
            >
              {cardDetails[selectedCard].map((detail, index) => (
                <p key={index} className="text-sm py-1">
                  {detail}
                </p>
              ))}
            </div>
          )}

          <div className="flex gap-4 bg-white border border-gray-300 rounded-md items-stretch [&_*:focus]:outline-none">
            <div className="flex flex-col min-w-0 p-2 gap-8 rounded-md">
              <h1 className="text-md font-medium px-2 py-2">
                Average Grades per Term
              </h1>
              <LineChart width={500} height={350} data={avgGradesPerTerm}>
                <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />

                <XAxis dataKey="term" />
                <YAxis domain={[75, 100]} />

                <Tooltip
                  cursor={{
                    stroke: "#94a3b8",
                    strokeWidth: 1,
                  }}
                />

                <Legend />

                <Line
                  type="monotone"
                  dataKey="oop"
                  name="OOP"
                  stroke="#14b8a6"
                  strokeWidth={3}
                />

                <Line
                  type="monotone"
                  dataKey="ds"
                  name="Data Structures"
                  stroke="#6366f1"
                  strokeWidth={3}
                />
              </LineChart>
            </div>
            <div className="flex flex-col flex-1 gap-8 border border-transparent rounded-md p-2">
              <div className="flex items-center justify-between">
                <h1 className="text-md font-medium px-2 py-2">Top Students</h1>
                <button className="relative flex gap-10 bg-gray-100 font-medium px-2 py-2 rounded-md cursor-pointer">
                  Data Structures
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="#bababa"
                    fill="none"
                    stroke="#bababa"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"></path>
                  </svg>
                  <div className="absolute top-12 right-0 w-full flex-col p-2 items-start origin-top font-normal border border-gray-300 rounded-md shadow hidden">
                    <a className="text-start w-full py-1 rounded-md">
                      Data Structures
                    </a>
                    <a className="text-start w-full py-1 rounded-md">OOP</a>
                  </div>
                </button>
              </div>
              <ul className="flex flex-col px-2 gap-2 overflow-y-auto max-h-80">
                {students.map((student, index) => (
                  <li
                    key={index}
                    className={`flex items-center justify-between px-4 py-2 gap-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100 transition-colors`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#fbbf24"
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`${student.place === 1 ? "block" : "hidden"} ${student.place === 2 ? "hidden" : ""} ${student.place === 3 ? "hidden" : ""} ${student.place > 3 ? "hidden" : ""}`}
                    >
                      <path d="M5 21H19"></path>
                      <path d="M12.125 12.75H12M12.25 12.75C12.25 12.8881 12.1381 13 12 13C11.8619 13 11.75 12.8881 11.75 12.75C11.75 12.6119 11.8619 12.5 12 12.5C12.1381 12.5 12.25 12.6119 12.25 12.75Z"></path>
                      <path d="M14.9152 7.61089L13.8078 5.38179C13.019 3.79393 12.6246 3 12 3C11.3754 3 10.981 3.79393 10.1922 5.38179L9.08483 7.61089C8.58107 8.62494 8.32919 9.13197 7.87976 9.24608C7.8485 9.25401 7.81689 9.26043 7.78503 9.26533C7.32682 9.3357 6.89919 8.96678 6.04393 8.22895C4.0124 6.47635 2.99663 5.60004 2.38034 5.94899C2.34045 5.97157 2.30213 5.99686 2.26565 6.02467C1.70197 6.45439 2.09541 7.74136 2.88229 10.3153L4.04783 14.1279C4.47098 15.5121 4.68255 16.2042 5.21787 16.6021C5.75318 17 6.47261 17 7.91147 17L16.0886 16.9999C17.5274 16.9999 18.2468 16.9999 18.7821 16.602C19.3175 16.2041 19.529 15.512 19.9522 14.1279L21.1177 10.3153C21.9046 7.74137 22.298 6.4544 21.7344 6.02468C21.6979 5.99687 21.6595 5.97158 21.6197 5.94899C21.0034 5.60006 19.9876 6.47636 17.9561 8.22896C17.1008 8.96679 16.6732 9.3357 16.215 9.26533C16.1831 9.26043 16.1515 9.25401 16.1202 9.24607C15.6708 9.13197 15.4189 8.62494 14.9152 7.61089Z"></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#cbd5e1"
                      fill="none"
                      stroke="#cbd5e1"
                      strokeWidth="1"
                      strokeLinecap="round"
                      className={`${student.place === 1 ? "hidden" : ""} ${student.place === 2 ? "block" : ""} ${student.place === 3 ? "hidden" : ""} ${student.place > 3 ? "hidden" : ""}`}
                    >
                      <path d="M12 17C10.3264 17 8.86971 18.265 8.11766 20.1312C7.75846 21.0225 8.27389 22 8.95877 22H15.0412C15.7261 22 16.2415 21.0225 15.8823 20.1312C15.1303 18.265 13.6736 17 12 17Z"></path>
                      <path
                        d="M18.5 5H19.7022C20.9031 5 21.5035 5 21.8168 5.37736C22.13 5.75472 21.9998 6.32113 21.7393 7.45395L21.3485 9.15307C20.7609 11.7086 18.6109 13.6088 16 14"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M5.5 5H4.29779C3.09692 5 2.49649 5 2.18324 5.37736C1.86999 5.75472 2.00024 6.32113 2.26075 7.45395L2.65148 9.15307C3.23914 11.7086 5.38912 13.6088 8 14"
                        strokeLinejoin="round"
                      ></path>
                      <path d="M12 17C15.0208 17 17.565 12.3379 18.3297 5.99089C18.5412 4.23558 18.647 3.35793 18.0868 2.67896C17.5267 2 16.6223 2 14.8134 2H9.18658C7.37775 2 6.47333 2 5.91317 2.67896C5.35301 3.35793 5.45875 4.23558 5.67025 5.99089C6.435 12.3379 8.97923 17 12 17Z"></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#cd7f32"
                      fill="none"
                      stroke="#cd7f32"
                      strokeWidth="1"
                      className={`${student.place === 1 ? "hidden" : ""} ${student.place === 2 ? "hidden" : ""} ${student.place === 3 ? "block" : ""} ${student.place > 3 ? "hidden" : ""}`}
                    >
                      <path d="M10.5 15.5C10.5 14.6716 11.1476 14 11.9464 14H12.0536C12.8524 14 13.5 14.6716 13.5 15.5C13.5 16.3284 12.8524 17 12.0536 17H11.9464C11.1476 17 10.5 16.3284 10.5 15.5Z"></path>
                      <circle cx="12" cy="15.5" r="6.5"></circle>
                      <path
                        d="M9 9.5L5.5 2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M15 9.5L18.5 2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M15 2L14 4.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12.5 9L9.5 2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span
                      className={`${student.place === 1 ? "hidden" : ""} ${student.place === 2 ? "hidden" : ""} ${student.place === 3 ? "hidden" : ""}`}
                    >
                      {student.place}
                    </span>
                    <div className="w-full flex items-center justify-between font-medium">
                      {student.name}
                      <span>{student.averageGrade}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Content;
