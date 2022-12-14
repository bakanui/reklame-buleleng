interface ConfirmModalProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  setShowConfirmModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfirmModal = ({
  handleSubmit,
  setShowConfirmModal,
}: ConfirmModalProps) => {
  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      className="overflow-y-auto bg-black bg-opacity-30 overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center"
      aria-hidden="true"
    >
      <div className="relative p-4 w-screen flex justify-center h-screen items-center">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            onClick={() => setShowConfirmModal(false)}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="popup-modal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <svg
              aria-hidden="true"
              className="mx-auto mb-4 w-14 h-14 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Apakah data yang anda masukan sudah benar?
            </h3>
            <button
              onClick={() => {
                setShowConfirmModal(false);
              }}
              data-modal-toggle="popup-modal"
              type="submit"
              form="registerForm"
              className="text-white text-center bg-primary w-32 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center justify-center px-5 py-2.5 mr-2"
            >
              Sudah
            </button>
            <button
              onClick={() => {
                setShowConfirmModal(false);
              }}
              data-modal-toggle="popup-modal"
              type="button"
              className="text-gray-500 w-32 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-primary text-primary text-sm font-medium px-5 py-2.5 hover:text-grey"
            >
              Cek Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
