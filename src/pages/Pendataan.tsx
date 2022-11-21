import Layouts from "../components/layouts";
// import data from "../utils/deadlineReklame.json";
import { useState } from "react";
import PendataanHeader from "../components/Pendataan/PendataanHeader";
import PendataanContent from "../components/Pendataan/PendataanContent";
import useFetch from "../utils/useFetch";

const Pendataan = () => {
  const [showData, setShowData] = useState(11);
  const [statusIzin, setStatusIzin] = useState<string>("");
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  const [changes, setChanges] = useState(0);

  const { data, totalData }: { data: any; totalData: number } = useFetch(
    `/api/reklame/list-reklame?sort=tgl_akhir&order=desc&limit=${showData}&pagenumber=${page}&nama_perusahaan=${keyword}&status=${statusIzin}`,
    changes
  );

  const changePages = (changes: "PREV" | "NEXT") => {
    if (changes === "PREV") {
      if (page > 1) {
        setPage((current) => current - 1);
      }
    }

    if (changes === "NEXT") {
      if (page * showData < totalData) {
        setPage((current) => current + 1);
      }
    }
  };
  return (
    <Layouts>
      <p className="pt-7 px-7 text-xl font-semibold">Data Reklame</p>

      <div className="bg-white shadow-md rounded-md mx-7 px-6 my-7 pt-5 pb-7">
        {/* Header */}
        <PendataanHeader
          keyword={keyword}
          setKeyword={setKeyword}
          setStatusIzin={setStatusIzin}
          statusIzin={statusIzin}
          setPage={setPage}
          setShowData={setShowData}
          showData={showData}
        />
        {/* Content */}
        <hr />
        <PendataanContent
          data={data}
          page={page}
          showData={showData}
          setChanges={setChanges}
        />
      </div>

      {/* Footer */}
      <div className="flex md:flex-row gap-y-2 flex-col md:justify-between md:px-16 px-10 pb-7">
        <p className="md:text-lg font-semibold text-center">
          Menampilkan {showData * page - showData + 1}-
          {showData * page < totalData ? showData * page : totalData} dari{" "}
          {totalData} Data
        </p>
        <div className="flex text-center md:text-base text-sm font-medium">
          <button
            onClick={() => changePages("PREV")}
            className="w-40 bg-white shadow rounded"
          >
            Sebelumnya
          </button>
          <p className="rounded w-12 p-3 bg-primary text-white">{page}</p>
          <button
            onClick={() => changePages("NEXT")}
            className="w-40 bg-white text-primary shadow rounded"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </Layouts>
  );
};

export default Pendataan;
