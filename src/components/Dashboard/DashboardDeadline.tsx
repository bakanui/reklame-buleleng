import { useState } from "react";
import { ReklameType } from "../../utils/dataInterface";
import useFetch from "../../utils/useFetch";

const DashboardDeadline = () => {
  const [periodeFilter, setPeriodeFilter] = useState<
    "bulan ini" | "bulan depan"
  >("bulan ini");

  const currentDate = new Date();
  const [year, setYear] = useState("2023");
  const [month, setMonth] = useState(
    ("0" + (currentDate.getMonth() + 1)).slice(-2)
  );

  const { data } = useFetch(
    `/api/reklame/list-reklame-expired?sort=tgl_akhir&order=desc&limit=1000000&pagenumber=1&jatuh_tempo=${year}-${month}-01%20s%2Fd%20${year}-${month}-31`,
    0
  );
  console.log(data, year, month);

  return (
    <div className="bg-white shadow-md rounded-md mx-7 px-6 my-7 pt-5">
      <p className="text-lg font-semibold">Reklame Jatuh Tempo</p>
      {/* <div className="py-5 flex gap-7">
        <button
          onClick={() => setPeriodeFilter("bulan ini")}
          className={`${
            periodeFilter === "bulan ini" ? "bg-grey" : "bg-primary"
          } font-semibold text-white rounded w-32 h-10`}
        >
          Bulan Ini
        </button>
        <button
          onClick={() => setPeriodeFilter("bulan depan")}
          className={`${
            periodeFilter === "bulan depan" ? "bg-grey" : "bg-white"
          } border border-primary font-semibold text-primary rounded w-32 h-10`}
        >
          Bulan Depan
        </button>
      </div> */}
      <div className="py-5 flex gap-7">
        <select
          name="year"
          onChange={(e) => setYear(e.target.value)}
          value={year}
          id="year"
          className="w-32 p-2 rounded-md border"
        >
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
        </select>
        <select
          name="month"
          onChange={(e) => setMonth(e.target.value)}
          value={month}
          id="month"
          className="w-32 p-2 rounded-md border"
        >
          <option value="01">Januari</option>
          <option value="02">Februari</option>
          <option value="03">Maret</option>
          <option value="04">April</option>
          <option value="05">Mei</option>
          <option value="06">Juni</option>
          <option value="07">Juli</option>
          <option value="08">Agustus</option>
          <option value="09">September</option>
          <option value="10">Oktober</option>
          <option value="11">November</option>
          <option value="12">Desember</option>
        </select>
      </div>
      <hr />
      <div className="overflow-x-auto h-96 relative">
        <table className="w-max md:w-full text-center text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-xs sticky top-0 text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white">
              <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
                No
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
                No Registrasi
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
                Jenis Reklame
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 w-3/12">
                Tempat Pemasangan
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
                Nama Wajib Pajak
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
                Akhir Pemasangan
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto font-medium">
            {data.map((i: ReklameType, n: number) => (
              <tr key={n} className="bg-white border-y dark:bg-gray-800">
                <th
                  scope="row"
                  className="py-4 md:px-5 px-2 w-1/12 font-medium text-gray-900 whitespace-nowrap"
                >
                  {n + 1}
                </th>
                <td className="py-4 md:px-5 px-2 w-2/12">{i.no_registrasi}</td>
                <td className="py-4 md:px-5 px-2 w-2/12">{i.jenis_reklame}</td>
                <td className="py-4 md:px-5 px-2 w-3/12">
                  {i.tempat_pemasangan}
                </td>
                <td className="py-4 md:px-5 px-2 w-2/12">{i.nama}</td>
                <td className="py-4 md:px-5 px-2 w-2/12">{i.tgl_akhir}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <table className="w-max md:w-full text-center text-sm text-gray-500 dark:text-gray-400">
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
        <tbody className="overflow-y-auto font-medium">
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
      </table> */}
      </div>
    </div>
  );
};

export default DashboardDeadline;
