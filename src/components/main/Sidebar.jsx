import { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [displayClasses, setDisplayClasses] = useState(false);

  const subjects = [
    "Subject",
  ]

  return (
    <aside className="fixed w-64 h-full border-r border-gray-300">
      {/* User Info and Notifications */}
      <nav className="h-12 p-2 flex items-center justify-between border-b border-gray-300">
        <div className="flex items-center gap-2 select-none cursor-pointer">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <span className="flex items-center gap-1 text-sm font-medium">
            John{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              color="currentColor"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"></path>
            </svg>
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          color="currentColor"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linejoin="round"
          className="cursor-pointer"
        >
          <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"></path>
          <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"></path>
        </svg>
      </nav>
      {/* Navigation Links */}
      <ul className="flex flex-col p-2 gap-2">
        <NavLink className="flex items-center gap-2 text-sm select-none cursor-pointer" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="currentColor"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linejoin="round"
          >
            <path d="M10.5 8.75V6.75C10.5 5.10626 10.5 4.28439 10.046 3.73121C9.96291 3.62995 9.87005 3.53709 9.76879 3.45398C9.21561 3 8.39374 3 6.75 3C5.10626 3 4.28439 3 3.73121 3.45398C3.62995 3.53709 3.53709 3.62995 3.45398 3.73121C3 4.28439 3 5.10626 3 6.75V8.75C3 10.3937 3 11.2156 3.45398 11.7688C3.53709 11.8701 3.62995 11.9629 3.73121 12.046C4.28439 12.5 5.10626 12.5 6.75 12.5C8.39374 12.5 9.21561 12.5 9.76879 12.046C9.87005 11.9629 9.96291 11.8701 10.046 11.7688C10.5 11.2156 10.5 10.3937 10.5 8.75Z"></path>
            <path d="M7.75 15.5H5.75C5.05222 15.5 4.70333 15.5 4.41943 15.5861C3.78023 15.78 3.28002 16.2802 3.08612 16.9194C3 17.2033 3 17.5522 3 18.25C3 18.9478 3 19.2967 3.08612 19.5806C3.28002 20.2198 3.78023 20.72 4.41943 20.9139C4.70333 21 5.05222 21 5.75 21H7.75C8.44778 21 8.79667 21 9.08057 20.9139C9.71977 20.72 10.22 20.2198 10.4139 19.5806C10.5 19.2967 10.5 18.9478 10.5 18.25C10.5 17.5522 10.5 17.2033 10.4139 16.9194C10.22 16.2802 9.71977 15.78 9.08057 15.5861C8.79667 15.5 8.44778 15.5 7.75 15.5Z"></path>
            <path d="M21 17.25V15.25C21 13.6063 21 12.7844 20.546 12.2312C20.4629 12.1299 20.3701 12.0371 20.2688 11.954C19.7156 11.5 18.8937 11.5 17.25 11.5C15.6063 11.5 14.7844 11.5 14.2312 11.954C14.1299 12.0371 14.0371 12.1299 13.954 12.2312C13.5 12.7844 13.5 13.6063 13.5 15.25V17.25C13.5 18.8937 13.5 19.7156 13.954 20.2688C14.0371 20.3701 14.1299 20.4629 14.2312 20.546C14.7844 21 15.6063 21 17.25 21C18.8937 21 19.7156 21 20.2688 20.546C20.3701 20.4629 20.4629 20.3701 20.546 20.2688C21 19.7156 21 18.8937 21 17.25Z"></path>
            <path d="M18.25 3H16.25C15.5522 3 15.2033 3 14.9194 3.08612C14.2802 3.28002 13.78 3.78023 13.5861 4.41943C13.5 4.70333 13.5 5.05222 13.5 5.75C13.5 6.44778 13.5 6.79667 13.5861 7.08057C13.78 7.71977 14.2802 8.21998 14.9194 8.41388C15.2033 8.5 15.5522 8.5 16.25 8.5H18.25C18.9478 8.5 19.2967 8.5 19.5806 8.41388C20.2198 8.21998 20.72 7.71977 20.9139 7.08057C21 6.79667 21 6.44778 21 5.75C21 5.05222 21 4.70333 20.9139 4.41943C20.72 3.78023 20.2198 3.28002 19.5806 3.08612C19.2967 3 18.9478 3 18.25 3Z"></path>
          </svg>
          Dashboard
        </NavLink>
        <li
          className="group flex items-center justify-between text-sm select-none cursor-pointer"
          onClick={() => setDisplayClasses(!displayClasses)}
        >
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="currentColor"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linejoin="round"
            >
              <path
                d="M11.9458 6L9.58384 17.0855C9.39588 17.9677 9.49933 18.298 10.1472 18.9315L12.7673 21.4934C13.1127 21.8311 13.2854 22 13.5 22C13.7146 22 13.8873 21.8311 14.2327 21.4934L16.8528 18.9315C17.5007 18.298 17.6041 17.9677 17.4162 17.0855L15.0542 6"
                stroke-linecap="round"
              ></path>
              <path
                d="M10.5568 3.12403C10.4894 2.60014 10.4557 2.3382 10.6093 2.1691C10.763 2 11.0347 2 11.5781 2H15.4219C15.9653 2 16.237 2 16.3907 2.1691C16.5443 2.3382 16.5106 2.60014 16.4432 3.12403L16.3924 3.51931C16.2498 4.62718 16.1786 5.18111 15.8224 5.54049C15.7645 5.59888 15.7018 5.65262 15.635 5.70117C15.2238 6 14.6492 6 13.5 6C12.3508 6 11.7762 6 11.365 5.70117C11.2982 5.65262 11.2355 5.59888 11.1776 5.54049C10.8214 5.18111 10.7502 4.62718 10.6076 3.5193L10.5568 3.12403Z"
                stroke-linecap="round"
              ></path>
              <path d="M9.99988 15C9.39212 15.6925 8.87749 16 8.49988 16C8.0155 16 7.14348 14.7794 6.75647 13.8954C6.57487 13.4806 6.48408 13.2732 6.50214 13.0108C6.52019 12.7484 6.63912 12.5565 6.87698 12.1727C8.22201 10.0024 10.5144 8.02113 11.9999 6"></path>
            </svg>
            <span className="flex items-center gap-2 text-sm">
              Classes
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                color="currentColor"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={`-rotate-90 transition-transform ${displayClasses ? "rotate-0" : ""}`}
              >
                <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"></path>
              </svg>
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            color="currentColor"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          >
            <path d="M12 4V20M20 12H4"></path>
          </svg>
        </li>
      </ul>
      {/* Subject List (conditionally rendered) */}
      <ul
        className={`flex flex-col gap-1 ml-2 px-2 ${displayClasses ? "block" : "hidden"}`}
      >
        {
          subjects.map((subject, index) => (
            <NavLink
              key={index}
              to="/subject"
              className="text-sm hover:bg-gray-200 rounded-md px-2 py-1"
            >
              {subject}
            </NavLink>
          ))
        }
      </ul>
    </aside>
  );
}

export default Sidebar;
