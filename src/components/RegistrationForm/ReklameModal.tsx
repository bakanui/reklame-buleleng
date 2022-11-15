import { useState } from "react";
import dataMutation from "../../utils/dataMutation";

interface ReklameModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
}

const ReklameModal = ({ setShowModal, showModal }: ReklameModalProps) => {
  const [alamat, setAlamat] = useState("");
  const [nama_perusahaan, setNama_perusahaan] = useState("");
  const [telp, setTelp] = useState("");
  const [bunyi_reklame, setBunyi_reklame] = useState("");
  const [jenis_reklame, setJenis_reklame] = useState("");
  const [jumlah_ukuran, setJumlah_ukuran] = useState("");
  const [panjang_reklame, setPanjang_reklame] = useState("");
  const [lebar_reklame, setLebar_reklame] = useState("");
  const [lama_pemasangan, setLama_pemasangan] = useState("");
  const [tgl_mulai, setTgl_mulai] = useState("");
  const [tgl_akhir, setTgl_akhir] = useState("");
  const [tempat_pemasangan, setTempat_pemasangan] = useState("");
  const [titik_koordinat, setTitik_koordinat] = useState("");

  const handleAddReklame = async () => {
    const body = {
      id_reg: 2,
      detailForm: [
        {
          label: "Alamat",
          form_type: 1,
          kode_isian: "ALAMAT",
          value: alamat,
        },
        {
          label: "Nama Perusahaan",
          form_type: 1,
          kode_isian: "NAMA_PERUSAHAAN",
          value: "CV Maiharta",
        },
        {
          label: "No. Telp/HP",
          form_type: 1,
          kode_isian: "HP/TELP",
          value: telp,
        },
        {
          label: "Bunyi Reklame",
          form_type: 1,
          kode_isian: "BUNYI_REKLAME",
          value: bunyi_reklame,
        },
        {
          label: "Jenis Reklame",
          form_type: 1,
          kode_isian: "JENIS_REKLAME",
          value: jenis_reklame,
        },
        {
          label: "Jumlah dan Ukuran",
          form_type: 1,
          kode_isian: "JUMLAH_UKURAN",
          value: `${parseInt(panjang_reklame) * parseInt(lebar_reklame)}`,
        },
        {
          label: "Lama Pemasangan",
          form_type: 1,
          kode_isian: "LAMA_PEMASANGAN",
          value: lama_pemasangan,
        },
        {
          label: "Tanggal Mulai Pemasangan",
          form_type: 1,
          kode_isian: "TGL_MULAI",
          value: tgl_mulai,
        },
        {
          label: "Tanggal Akhir Pemasangan",
          form_type: 1,
          kode_isian: "TGL_AKHIR",
          value: tgl_akhir,
        },
        {
          label: "Tempat Pemasangan",
          form_type: 1,
          kode_isian: "TEMPAT_PEMASANGAN",
          value: tempat_pemasangan,
        },
        {
          label: "Titik Koordinat Pemasangan",
          form_type: 1,
          kode_isian: "TITIK_KOORDINAT",
          value: titik_koordinat,
        },
      ],
    };

    const res = await dataMutation("/api/reklame/add-reklame", body, "POST");
    console.log(res);
  };

  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        !showModal && "hidden"
      } bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-screen`}
    >
      <div className="relative p-4 w-screen  flex justify-center">
        <div className="relative bg-white md:w-[70vw] w-screen rounded-lg shadow dark:bg-gray-700">
          <div className="flex justify-between items-start p-5 py-7 rounded-t border-b dark:border-gray-600">
            <h3 className="text-2xl font-semibold text-gray-900">
              Tambah Reklame
            </h3>
            <button
              onClick={() => setShowModal(false)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-primary rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <form className="py-7 font-medium">
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Bunyi Reklame
                </label>
                <textarea
                  onChange={(e) => setBunyi_reklame(e.target.value)}
                  placeholder="Masukan bunyi reklame..."
                  className="w-full hover:bg-secondary rounded-md border px-7 h-20 border-grey"
                ></textarea>
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Jenis Reklame
                </label>
                <input
                  onChange={(e) => setJenis_reklame(e.target.value)}
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="text"
                  placeholder="Pilih jenis reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Area Pemasangan
                </label>
                <input
                  onChange={(e) => setAlamat(e.target.value)}
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="text"
                  placeholder="Masukan area pemasangan reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Panjang Reklame
                </label>
                <input
                  onChange={(e) => setPanjang_reklame(e.target.value)}
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="number"
                  placeholder="Masukan panjang reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Lebar Reklame
                </label>
                <input
                  onChange={(e) => setLebar_reklame(e.target.value)}
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="number"
                  placeholder="Masukan Lebar reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Jumlah Muka Reklame
                </label>
                <input
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="number"
                  placeholder="Masukan jumlah muka reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Lama Pemasangan
                </label>
                <input
                  onChange={(e) => setLama_pemasangan(e.target.value)}
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="text"
                  placeholder="Masukan lama pemasangan reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Tanggal Mulai Pemasangan
                </label>
                <input
                  onChange={(e) => setTgl_mulai(e.target.value)}
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="date"
                  placeholder="Masukan tanggal mulai pemasangan reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Tanggal Akhir Pemasangan
                </label>
                <input
                  onChange={(e) => setTgl_akhir(e.target.value)}
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="date"
                  placeholder="Masukan tanggal akhir pemasangan reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Tempat Pemasangan
                </label>
                <input
                  onChange={(e) => setTempat_pemasangan(e.target.value)}
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="text"
                  placeholder="Masukan tempat pemasangan reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Titik Koordinat Pemasangan
                </label>
                <input
                  onChange={(e) => setTitik_koordinat(e.target.value)}
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="text"
                  placeholder="Masukan titik koordinat pemasangan reklame..."
                />
              </div>
            </form>
          </div>

          <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            <button className="bg-white border border-primary mb-5 font-semibold flex justify-center items-center gap-3 text-primary rounded-md w-32 h-10">
              <span>Batal</span>
            </button>
            <button
              onClick={handleAddReklame}
              className="bg-primary mb-5 font-semibold flex justify-center items-center gap-3 text-white rounded-md w-32 h-10"
            >
              <span>Simpan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReklameModal;
