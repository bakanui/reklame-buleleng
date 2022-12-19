import { ReklameDetailType } from "../../utils/dataInterface";
import { TiLocationArrow } from "react-icons/ti";

// interface FetchDataType {
//   permohonan: Array<ReklameDetailType>
// }

interface ListReklameProps {
  data: Array<ReklameDetailType>;
}

const DetailListReklame = ({ data }: ListReklameProps) => {
  return (
    <div className="bg-white shadow-md rounded-md mx-7 px-6 my-7 pt-5 font-medium">
      <hr />
      <div
        // onClickCapture={() => setShowReklameModal(0)}
        className="overflow-x-auto relative"
      >
        <table className="w-max md:w-full text-center text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-xs font-semibold text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white">
              <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
                No
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
                Jenis Reklame
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
                Bunyi Reklame
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 w-3/12">
                Tempat Pemasangan
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
                Akhir Pemasangan
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
                Titik Koordinat
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto overflow-x-auto font-medium text-center">
            {data.map((i, n: number) => (
              <tr key={n} className="bg-white border-t dark:bg-gray-800">
                <th
                  scope="row"
                  className="py-4 md:px-5 px-2 w-1/12 font-medium text-gray-900 whitespace-nowrap"
                >
                  {n + 1}
                </th>
                <td className="py-4 md:px-5 px-2 w-2/12">
                  {i.detail[1].value}
                </td>
                <td className="py-4 md:px-5 px-2 w-2/12">
                  {i.detail[0].value}
                </td>
                <td className="py-4 md:px-5 px-2 w-3/12">
                  {i.detail[2].value}
                </td>
                <td className="py-4 md:px-5 px-2 w-2/12">
                  {i.detail[8].value}
                </td>
                <td className="py-4 md:px-5 px-2 w-2/12">
                  <div className="flex gap-3 items-center justify-center">
                    {i.detail[10].value}
                    <TiLocationArrow
                      className="text-3xl cursor-pointer hover:text-primary"
                      onClick={() =>
                        window.open(
                          `http://maps.google.com?q=${i.detail[10].value}`,
                          "_blank"
                        )
                      }
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailListReklame;
