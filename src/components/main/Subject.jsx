function Subject() {
  return (
    <>
      <div className="flex-1 ml-64">
        <nav className="h-12 flex items-center justify-between px-9 py-2 border-b border-gray-300">
          <h1 className="text-md font-medium">Subject</h1>
        </nav>
        <div className="flex gap-2 px-9 py-2">
          <div className="flex-1 flex flex-col gap-2 mr-98">
            {/* Search Bar */}
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 px-2 py-1 bg-gray-200 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="currentColor"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M17 17L21 21"></path>
                    <path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"></path>
                  </svg>
                  <input
                    className="w-full bg-transparent border-none focus:outline-none"
                    placeholder="Search..."
                  />
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#000000"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="cursor-pointer"
              >
                <path d="M8.85746 12.5061C6.36901 10.6456 4.59564 8.59915 3.62734 7.44867C3.3276 7.09253 3.22938 6.8319 3.17033 6.3728C2.96811 4.8008 2.86701 4.0148 3.32795 3.5074C3.7889 3 4.60404 3 6.23433 3H17.7657C19.396 3 20.2111 3 20.672 3.5074C21.133 4.0148 21.0319 4.8008 20.8297 6.37281C20.7706 6.83191 20.6724 7.09254 20.3726 7.44867C19.403 8.60062 17.6261 10.6507 15.1326 12.5135C14.907 12.6821 14.7583 12.9567 14.7307 13.2614C14.4837 15.992 14.2559 17.4876 14.1141 18.2442C13.8853 19.4657 12.1532 20.2006 11.226 20.8563C10.6741 21.2466 10.0043 20.782 9.93278 20.1778C9.79643 19.0261 9.53961 16.6864 9.25927 13.2614C9.23409 12.9539 9.08486 12.6761 8.85746 12.5061Z"></path>
              </svg>
            </div>
            <div>
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] font-medium border-b pb-2">
                <span>Name</span>
                <span>1st</span>
                <span>2nd</span>
                <span>3rd</span>
                <span>4th</span>
                <span>Final</span>
              </div>

              <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] py-2">
                <span>John Doe</span>
                <span>88</span>
                <span>90</span>
                <span>89</span>
                <span>89</span>
                <span>89</span>
              </div>
            </div>
          </div>
          <div className="fixed right-9 top-14 bottom-2 w-96 border border-gray-300 rounded-md overflow-y-auto ">
            <h1>Hi</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subject;
