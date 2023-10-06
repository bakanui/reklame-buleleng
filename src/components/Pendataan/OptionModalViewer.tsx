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

const OptionModalViewer = ({
  setShowModal,
  showModal,
  coordinate,
  reklame_id,
}: ReklameModalProps) => {
  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${showModal !== reklame_id && "hidden"}  overflow-x-hidden`}
    >
      <div
        onClickCapture={() => setShowModal(0)}
        className="absolute right-32 z-50 p-1 flex justify-end text-base font-medium"
      >
        <div className=" bg-secondary shadow-md w-48 pl-3 pt-2 h-28 rounded dark:bg-gray-700">
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
        </div>
      </div>
    </div>
  );
};

export default OptionModalViewer;
