import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ReklameType } from "../../utils/dataInterface";
import dataMutation from "../../utils/dataMutation";
import DeleteConfirmModal from "../layouts/DeleteConfirmModal";
import OptionModal from "./OptionModal";

interface PendataanListProps {
  i: ReklameType;
  n: number;
  page: number;
  showData: number;
  setShowModal: React.Dispatch<React.SetStateAction<number>>;
  setChanges: React.Dispatch<React.SetStateAction<number>>;
  showModal: number;
}
const PendataanList = ({
  i,
  n,
  setShowModal,
  showModal,
  page,
  showData,
  setChanges,
}: PendataanListProps) => {
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);

  const handleDeleteReklame = async (id: number) => {
    await dataMutation("/api/reklame/delete-reklame/" + id, {}, "DELETE").then(
      (res) => {
        console.log(res);
        setChanges((current) => current + 1);
      }
    );
  };

  return (
    <tr
      key={n}
      onClickCapture={() => setShowModal(0)}
      className="bg-white dark:bg-gray-800  border-b border-t"
    >
      <td className="py-3 md:px-5 px-2 w-1/12">
        {(page - 1) * showData + (n + 1)}
      </td>
      <td className="py-3 md:px-5 px-2 w-2/12">
        <Link to={"/detail/" + i.id_registrasi}>{i.no_registrasi}</Link>
      </td>
      <td className="py-3 md:px-5 px-2 w-1/12">
        <Link to={"/detail/" + i.id_registrasi}>{i.nama_perusahaan}</Link>
      </td>
      <td className="py-3 md:px-5 px-2 w-2/12">{i.jenis_reklame}</td>
      <td className="py-3 md:px-5 px-2 w-2/12">{i.tempat_pemasangan}</td>
      <td className="py-3 md:px-5 px-2 w-1/12">{i.tgl_akhir}</td>
      <td className="py-3 md:px-5 px-2 w-2/12">
        {i.status === "belum" ? (
          <p className="bg-primary rounded-full w-full font-semibold py-1">
            Belum Berizin
          </p>
        ) : i.status === "proses" ? (
          <p className="bg-orange rounded-full w-full font-semibold py-1">
            Proses Izin
          </p>
        ) : (
          <p className="bg-green rounded-full w-full font-semibold py-1">
            Sudah Berizin
          </p>
        )}
      </td>
      <td className="py-1 md:px-5 px-2 w-1/12">
        <div className="flex items-center">
          <BsThreeDots
            className="w-full hover:text-primary text-2xl"
            onClickCapture={() => setShowModal(i.id!)}
          />
          <div className="">
            <OptionModal
              coordinate={i.titik_koordinat}
              registration_id={i.id_registrasi!}
              reklame_id={i.id!}
              setShowModal={setShowModal}
              showModal={showModal}
              setShowConfirmDeleteModal={setShowConfirmDeleteModal}
            />
          </div>
        </div>
      </td>
      {showConfirmDeleteModal && (
        <td>
          <DeleteConfirmModal
            handleSubmit={handleDeleteReklame}
            id={i.id!}
            setShowConfirmModal={setShowConfirmDeleteModal}
          />
        </td>
      )}
    </tr>
  );
};

export default PendataanList;
