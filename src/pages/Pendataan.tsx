import Layouts from "../components/layouts";
// import data from "../utils/deadlineReklame.json";
import { useState } from "react";
import PendataanHeader from "../components/Pendataan/PendataanHeader";
import PendataanContent from "../components/Pendataan/PendataanContent";
import useFetch from "../utils/useFetch";
import Pagination from "./Pagination";

const Pendataan = () => {
  const [showData, setShowData] = useState(11);
  const [statusIzin, setStatusIzin] = useState<string>("");
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  const [changes, setChanges] = useState(0);

  const { data, totalData }: { data: any; totalData: number } = useFetch(
    `/api/reklame/list-reklame?sort=created_at&order=desc&limit=${showData}&pagenumber=${page}&no_reg=${keyword}&status=${statusIzin}`,
    changes
  );

  return (
    <Layouts>
      <p className="pt-7 px-7 text-xl font-semibold">Data Reklame</p>

      <div className="bg-white shadow-md rounded-md mx-7 px-6 my-7 pt-5 pb-7 z-0">
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
      <Pagination
        dataCount={totalData}
        limit={showData}
        pageNumber={page}
        setPageNumber={setPage}
      />
    </Layouts>
  );
};

export default Pendataan;
