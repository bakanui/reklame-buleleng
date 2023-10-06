import { useEffect, useState } from "react";
import { ReklameType } from "../../utils/dataInterface";
import PendataanList from "./PendataanList";
import customFetch from "../../utils/customFetch";

interface PendataanContentProps {
  data: Array<ReklameType>;
  page: number;
  showData: number;
  setChanges: React.Dispatch<React.SetStateAction<number>>;
}

const PendataanContent = ({
  data,
  page,
  showData,
  setChanges,
}: PendataanContentProps) => {
  const [showModal, setShowModal] = useState(0);

  const [id_role, setId_role] = useState(0);

  useEffect(() => {
    customFetch("/api/profile").then((res) => {
      setId_role(res.id_role);
    });
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="w-max md:w-full text-center text-sm text-gray-500 dark:text-gray-400">
        <thead className="text-xs font-semibold text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-white">
            <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
              No
            </th>
            <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
              No Registrasi
            </th>
            <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
              Nama Perusahaan
            </th>
            <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
              Jenis Reklame
            </th>
            <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
              Tempat Pemasangan
            </th>
            <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
              Akhir Pemasangan
            </th>
            <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
              Status
            </th>
            {id_role === 1 ? (
              <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
                <p className="w-full">Opsi</p>
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody className="font-medium">
          {data.map((i, n: number) => (
            <PendataanList
              i={i}
              n={n}
              key={n}
              showModal={showModal}
              page={page}
              showData={showData}
              setShowModal={setShowModal}
              setChanges={setChanges}
              id_role={id_role}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendataanContent;
