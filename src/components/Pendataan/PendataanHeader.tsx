import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import useFetch from "../../utils/useFetch";
import { useEffect, useState } from "react";
import customFetch from "../../utils/customFetch";

interface HeaderProps {
  setShowData: React.Dispatch<React.SetStateAction<number>>;
  showData: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setStatusIzin: React.Dispatch<React.SetStateAction<string>>;
  statusIzin: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  keyword: string;
  nama_perusahaan: string;
  setNama_perusahaan: React.Dispatch<React.SetStateAction<string>>
}

const headers = [
  { label: "No Registrasi", key: "no_registrasi" },
  { label: "Nama Perusahaan", key: "nama_perusahaan" },
  { label: "Jenis Reklame", key: "jenis_reklame" },
  { label: "Tempat Pemasangan", key: "tempat_pemasangan" },
  { label: "Akhir Pemasangan", key: "tgl_akhir" },
  { label: "Status", key: "status" },
];

const PendataanHeader = ({
  setShowData,
  showData,
  setPage,
  keyword,
  setKeyword,
  setStatusIzin,
  statusIzin,
  nama_perusahaan,
  setNama_perusahaan
}: HeaderProps) => {
  const { data }: { data: any; totalData: number } = useFetch(
    `/api/reklame/list-reklame?sort=created_at&order=desc&limit=10000000&pagenumber=${1}&no_reg=${keyword}&status=${statusIzin}&nama_perusahaan=${nama_perusahaan}`,
    0
  );

  const [id_role, setId_role] = useState(0);

  useEffect(() => {
    customFetch("/api/profile").then((res) => {
      setId_role(res.id_role);
    });
  }, []);
  return (
    <>
      <div className="py-5 flex gap-3 justify-between flex-col md:flex-row md:text-base text-sm">
        {id_role === 1 || id_role === 5 ? (
          <Link to="/registrasi">
            <button className="bg-primary md:font-semibold font-medium flex justify-center items-center gap-3 text-white rounded-lg md:w-40 w-full md:h-12 h-10">
              <BsPlusLg className="font-extrabold" />
              <span>Registrasi Baru</span>
            </button>
          </Link>
        ) : null}

        <form className="flex gap-7"> 
          <div>

          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <input
              onChange={(e) => {
                setPage(1);
                setNama_perusahaan(e.target.value);
              }}
              type="search"
              id="default-search"
              className="block py-3 pl-5 md:w-96 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-grey focus:ring-blue-500 focus:border-blue-500"
              placeholder="Masukan nama perusahaan..."
            />
            <button
              type="submit"
              className="text-grey absolute right-2.5 bottom-1.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
          </div>
          <div>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <input
              onChange={(e) => {
                setPage(1);
                setKeyword(e.target.value);
              }}
              type="search"
              id="default-search"
              className="block py-3 pl-5 md:w-96 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-grey focus:ring-blue-500 focus:border-blue-500"
              placeholder="Masukan no registrasi..."
            />
            <button
              type="submit"
              className="text-grey absolute right-2.5 bottom-1.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
          </div>
        </form>
      </div>
      <div className="py-5 flex justify-between gap-3 md:flex-row flex-col font-medium">
        <div className="flex gap-1">
          <p className="pr-2">Menampilkan</p>
          <input
            defaultValue={showData}
            onChange={(e) => {
              setShowData(
                !isNaN(e.target.valueAsNumber) ? e.target.valueAsNumber : 1
              );
              setPage(1);
            }}
            className="border rounded w-12 h-7"
            type="number"
          />
          <p>Data</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <select
              onChange={(e) => {
                setStatusIzin(e.target.value);
                setPage(1);
              }}
              id="countries"
              className="bg-gray-50 pl-7 border border-primary text-primary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-52 w-40 h-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            >
              <option value="" className="text-center">
                Semua Data
              </option>
              <option value="belum" className="text-center">
                Reklame Belum Berizin
              </option>
              <option value="proses" className="text-center">
                Reklame Proses Izin
              </option>
              <option value="sudah" className="text-center">
                Reklame Sudah Berizin
              </option>
            </select>
            <svg
              className="absolute left-3 top-4"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.118408 0.750001C0.118408 0.401189 0.401176 0.118422 0.749987 0.118422H13.25C13.5988 0.118422 13.8816 0.401189 13.8816 0.750001V2.25C13.8816 2.40712 13.823 2.55859 13.7173 2.67485L8.88157 7.99417V11.75C8.88157 11.9719 8.76517 12.1774 8.57493 12.2916L6.07493 13.7916C5.87982 13.9086 5.63681 13.9117 5.43881 13.7996C5.2408 13.6875 5.11841 13.4775 5.11841 13.25V7.99417L0.282657 2.67485C0.176969 2.55859 0.118408 2.40712 0.118408 2.25V0.750001ZM1.38157 1.38158V2.00583L6.21732 7.32515C6.32301 7.44141 6.38157 7.59289 6.38157 7.75V12.1345L7.61841 11.3924V7.75C7.61841 7.59289 7.67697 7.44141 7.78266 7.32515L12.6184 2.00583V1.38158H1.38157Z"
                fill="#E55353"
              />
            </svg>
          </div>
          <div>
            <CSVLink data={data} headers={headers}>
              <button className="rounded-lg bg-primary text-white font-semibold h-full md:w-52">
                Download Laporan
              </button>
            </CSVLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendataanHeader;
