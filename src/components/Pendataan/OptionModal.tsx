import { MdEdit, MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface ReklameModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<number>>;
  showModal: number;
  registration_id: number;
  reklame_id: number;
  setShowConfirmDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const OptionModal = ({
  setShowModal,
  showModal,
  registration_id,
  reklame_id,
  setShowConfirmDeleteModal,
}: ReklameModalProps) => {
  const navigate = useNavigate();

  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        showModal !== reklame_id && "hidden"
      }  overflow-x-hidden z-50 md:relative right-0 top-3/4`}
    >
      <div
        onClickCapture={() => setShowModal(0)}
        className="relative p-1 flex justify-end text-lg font-medium"
      >
        <div className="relative bg-secondary shadow-md w-40 pl-3 pt-2 h-24 rounded dark:bg-gray-700">
          <div
            onClick={() => navigate("/edit/" + registration_id)}
            className="flex gap-5 items-center mt-2 hover:bg-grey cursor-pointer"
          >
            <MdEdit className="text-primary text-xl" />
            <p>Edit</p>
          </div>
          {/* <div className="flex gap-5 items-center mt-2 hover:bg-grey cursor-pointer">
            <MdPayment className="text-primary text-xl" />
            <p>Pembayaran</p>
          </div> */}
          <div
            onClickCapture={() => setShowConfirmDeleteModal(true)}
            className="flex gap-5 items-center mt-2 hover:bg-grey cursor-pointer"
          >
            <MdDeleteOutline className="text-primary text-xl" />
            <p>Hapus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionModal;
