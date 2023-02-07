import { MdEdit, MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import DeleteConfirmModal from "../layouts/DeleteConfirmModal";
import dataMutation from "../../utils/dataMutation";

interface ReklameModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<number>>;
  setShowMutateReklameModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: number;
  reklame_id: number;
  setChanges: React.Dispatch<React.SetStateAction<number>>;
}

const ReklameEditModal = ({
  setShowModal,
  showModal,
  reklame_id,
  setShowMutateReklameModal,
  setChanges,
}: ReklameModalProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleDeleteReklame = async (id: number) => {
    await dataMutation("/api/reklame/delete-reklame/" + id, {}, "DELETE").then(
      (res) => {
        console.log(res);
        setChanges((current) => current + 1);
      }
    );
  };

  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        showModal !== reklame_id && "hidden"
      }  overflow-y-auto overflow-x-hidden z-50 w-full`}
    >
      <div
        onClickCapture={() => setShowModal(reklame_id)}
        className="p-1 flex justify-center text-lg font-medium h-min"
      >
        <div className=" bg-secondary shadow-md w-40 pl-3 pt-2 h-24 rounded dark:bg-gray-700">
          <div
            onClickCapture={() => setShowMutateReklameModal(true)}
            className="flex gap-5 items-center mt-2 hover:bg-grey cursor-pointer rounded"
          >
            <MdEdit className="text-primary text-xl" />
            <p>Edit</p>
          </div>
          <div
            onClickCapture={() => setShowDeleteModal(true)}
            className="flex gap-5 items-center mt-2 hover:bg-grey cursor-pointer rounded"
          >
            <MdDeleteOutline className="text-primary text-xl" />
            <p>Hapus</p>
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <DeleteConfirmModal
          handleSubmit={handleDeleteReklame}
          id={reklame_id}
          setShowConfirmModal={setShowDeleteModal}
        />
      )}
    </div>
  );
};

export default ReklameEditModal;
