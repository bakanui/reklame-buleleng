const Alert = ({
  alertMessage,
  setAlertMessage,
}: {
  alertMessage: string;
  setAlertMessage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-52 w-screen left-0 bg-black bg-opacity-50 right-0 z-50 flex justify-center h-screen items-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal"
    >
      <div className="relative w-full h-full max-w-2xl md:h-auto">
        <div
          id="alert-additional-content-2"
          className="p-4 mb-4 border border-primary rounded-lg bg-white dark:bg-red-200"
          role="alert"
        >
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 mr-2 text-red-900 dark:text-red-800"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Info</span>
            <h3 className="text-lg font-medium text-red-900 dark:text-red-800">
              Input Form Tidak Sesuai
            </h3>
          </div>
          <div className="mt-2 mb-4 text-sm text-red-900 dark:text-red-800">
            {alertMessage}
          </div>
          <div className="flex">
            <button
              type="button"
              onClick={() => setAlertMessage("")}
              className="text-red-900 bg-transparent border border-red-900 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-red-800 dark:text-red-800 dark:hover:text-white"
              data-dismiss-target="#alert-additional-content-2"
              aria-label="Close"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
