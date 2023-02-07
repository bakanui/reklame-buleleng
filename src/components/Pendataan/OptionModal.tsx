import { MdEdit, MdDeleteOutline, MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface ReklameModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<number>>;
  showModal: number;
  registration_id: number;
  reklame_id: number;
  coordinate: string;
  setShowConfirmDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const OptionModal = ({
  setShowModal,
  showModal,
  coordinate,
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
      }  overflow-x-hidden z-50`}
    >
      <div
        onClickCapture={() => setShowModal(0)}
        className="relative p-1 flex justify-end text-base font-medium"
      >
        <div className=" bg-secondary shadow-md w-48 pl-3 pt-2 h-28 rounded dark:bg-gray-700">
          <div
            onClick={() => navigate("/edit/" + registration_id)}
            className="flex gap-5 items-center mt-2 hover:bg-grey cursor-pointer"
          >
            <MdEdit className="text-primary text-xl" />
            <p>Edit</p>
          </div>
          <div
            onClick={() =>
              window.open(
                `http://maps.google.com?q=${coordinate.split(",")[0]},${
                  coordinate.split(",")[1]
                }`,
                "_blank"
              )
            }
            className="flex gap-5 items-center mt-2 hover:bg-grey cursor-pointer"
          >
            <MdLocationOn className="text-primary text-xl" />
            <p>Lokasi Reklame</p>
          </div>
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
