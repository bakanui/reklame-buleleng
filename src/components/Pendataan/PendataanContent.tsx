import { useState } from "react";
import { ReklameType } from "../../utils/dataInterface";
import PendataanList from "./PendataanList";

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

  return (
    <div className="overflow-x-auto relative">
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
            <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
              <p className="w-full">Opsi</p>
            </th>
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
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendataanContent;
