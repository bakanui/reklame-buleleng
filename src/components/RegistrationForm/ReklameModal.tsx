import { useEffect, useState } from "react";
import dataMutation from "../../utils/dataMutation";
import Alert from "../layouts/Alert";
import CoordinateMaps from "./CoordinateMaps";
import { log } from "console";
import uploadImage from "../../utils/uploadImage";

interface ReklameModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  id_register: number;
  setChanges: React.Dispatch<React.SetStateAction<number>>;
}

const ReklameModal = ({
  setShowModal,
  showModal,
  id_register,
  setChanges,
}: ReklameModalProps) => {
  const [jumlah_muka, setjumlah_muka] = useState("");
  const [area_pemasangan, setArea_pemasangan] = useState("pariwisata");
  const [bunyi_reklame, setBunyi_reklame] = useState("");
  const [jenis_reklame, setJenis_reklame] = useState("megatron");
  const [panjang_reklame, setPanjang_reklame] = useState("");
  const [lebar_reklame, setLebar_reklame] = useState("");
  const [lama_pemasangan, setLama_pemasangan] = useState("");
  const [tgl_mulai, setTgl_mulai] = useState("");
  const [tgl_akhir, setTgl_akhir] = useState("");
  const [tempat_pemasangan, setTempat_pemasangan] = useState("");
  const [titik_koordinat, setTitik_koordinat] = useState("");
  const [reklameImage, setreklameImage] = useState<FileList | null>(null);

  const [alertMessage, setAlertMessage] = useState("");

  const handleClearForm = () => {
    setjumlah_muka("");
    setArea_pemasangan("");
    setBunyi_reklame("");
    setJenis_reklame("Jenis 1");
    setPanjang_reklame("");
    setLebar_reklame("");
    setLama_pemasangan("");
    setTgl_mulai("");
    setTgl_akhir("");
    setTempat_pemasangan("");
    setTitik_koordinat("");
  };

  const handleAddReklame = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (
    //   area_pemasangan &&
    //   bunyi_reklame &&
    //   jenis_reklame &&
    //   panjang_reklame &&
    //   lebar_reklame &&
    //   titik_koordinat &&
    //   tgl_mulai &&
    //   tgl_akhir
    // ) {

    // } else {
    //   alert("Invalid Form");
    // }

    const body = {
      id_reg: id_register,
      detailForm: [
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
          label: "Area Pemasangan",
          form_type: 1,
          kode_isian: "AREA_PEMASANGAN",
          value: area_pemasangan,
        },
        {
          label: "Panjang Reklame",
          form_type: 1,
          kode_isian: "PANJANG_REKLAME",
          value: panjang_reklame,
        },
        {
          label: "Lebar Reklame",
          form_type: 1,
          kode_isian: "LEBAR_REKLAME",
          value: lebar_reklame,
        },
        {
          label: "Jumlah Muka Reklame",
          form_type: 1,
          kode_isian: "JUMLAH_MUKA",
          value: jumlah_muka,
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

    setShowModal(false);
    await dataMutation("/api/reklame/add-reklame", body, "POST").then((res) => {
      setChanges((current) => current + 1);
      if (reklameImage !== null) {
        if (reklameImage[0].name) {
          uploadReklameImage(reklameImage[0], res.data[0].id);
        }
      }
      handleClearForm();
    });
  };

  async function uploadReklameImage(imageData: File, id: number) {
    console.log(id);

    const data = new FormData();
    data.append("id_permohonan", `${id}`);
    data.append("image", imageData);

    await uploadImage("/api/permohonan/upload-extraimg", data).then((res) =>
      console.log(res)
    );
  }

  async function validateImage(rawImage: FileList | null) {
    if (rawImage?.length) {
      if (rawImage[0].size < 2000000 && rawImage[0].type === "image/jpeg") {
        setreklameImage(rawImage);
      } else {
        setAlertMessage(
          "Gambar yang diupload maxmimal 2mb dengan extensi .jpg"
        );
      }
    }
  }

  useEffect(() => {
    if (tgl_mulai && tgl_akhir) {
      const start = new Date(tgl_mulai);
      const end = new Date(tgl_akhir);
      const result = Math.floor(
        (end.getTime() - start.getTime()) / (24 * 3600 * 1000)
      );
      if (result > 1) {
        setLama_pemasangan(result + " hari");
      } else {
        setAlertMessage("Tanggal Pemasangan Reklame Tidak Sesuai!");
      }
    }
  }, [tgl_mulai, tgl_akhir]);

  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        !showModal && "hidden"
      } bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-screen`}
    >
      <div className="relative p-4 w-screen flex justify-center">
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
            <form
              id="addReklameForm"
              onSubmit={handleAddReklame}
              className="py-7 font-medium"
            >
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Bunyi Reklame
                </label>
                <textarea
                  value={bunyi_reklame}
                  onChange={(e) => setBunyi_reklame(e.target.value)}
                  placeholder="Masukan bunyi reklame..."
                  className="w-full hover:bg-secondary rounded-md border px-7 h-20 border-grey"
                ></textarea>
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Jenis Reklame
                </label>
                <select
                  value={jenis_reklame}
                  onChange={(e) => setJenis_reklame(e.target.value)}
                  id="countries"
                  className="bg-gray-50 h-12 text-black border border-grey text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="megatron">Megatron/Videotron</option>
                  <option value="billboard">Billboard</option>
                  <option value="led">LED</option>
                  <option value="papan">Papan</option>
                  <option value="papan-bercahaya">Papan Bercahaya</option>
                  <option value="baliho">Baliho</option>
                  <option value="spanduk">
                    Layar/Spanduk Umbul-Umbul dan Sejenisnya
                  </option>
                  <option value="plat">Tempel/Plat/Tembok</option>
                  <option value="selebaran">Selebaran</option>
                  <option value="kendaraan">Kendaraan</option>
                </select>
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Area Pemasangan
                </label>
                <select
                  value={area_pemasangan}
                  onChange={(e) => setArea_pemasangan(e.target.value)}
                  id="countries"
                  className="bg-gray-50 h-12 text-black border border-grey text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="pariwisata">Pariwisata</option>
                  <option value="perkotaan">Perkotaan</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Panjang Reklame
                </label>
                <input
                  value={panjang_reklame}
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
                  value={lebar_reklame}
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
                  value={jumlah_muka}
                  onChange={(e) => setjumlah_muka(e.target.value)}
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="number"
                  placeholder="Masukan jumlah muka reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Tanggal Mulai Pemasangan
                </label>
                <input
                  value={tgl_mulai}
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
                  value={tgl_akhir}
                  onChange={(e) => setTgl_akhir(e.target.value)}
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="date"
                  placeholder="Masukan tanggal akhir pemasangan reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Lama Pemasangan
                </label>
                <input
                  value={lama_pemasangan}
                  onChange={(e) => setLama_pemasangan(e.target.value)}
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="text"
                  placeholder="Masukan lama pemasangan reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Tempat Pemasangan
                </label>
                <input
                  value={tempat_pemasangan}
                  onChange={(e) => setTempat_pemasangan(e.target.value)}
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="text"
                  placeholder="Masukan tempat pemasangan reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Gambar Reklame
                </label>
                <input
                  onChange={(e) => validateImage(e.target.files)}
                  className=" w-full hover:bg-secondary rounded-md"
                  type="file"
                  accept="image/jpeg"
                  placeholder="Masukan Gambar Reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Titik Koordinat Pemasangan
                </label>
                <input
                  value={titik_koordinat}
                  onChange={(e) => setTitik_koordinat(e.target.value)}
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="text"
                  placeholder="Masukan titik koordinat pemasangan reklame..."
                />
              </div>
            </form>

            <p className="font-semibold">Pilih Koordinat Dalam Peta</p>
            <CoordinateMaps
              setTitik_koordinat={setTitik_koordinat}
              titik_koordinat={titik_koordinat}
            />
          </div>

          <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            <button
              onClick={() => {
                setShowModal(false);
              }}
              className="bg-white border border-primary mb-5 font-semibold flex justify-center items-center gap-3 text-primary rounded-md w-32 h-10"
            >
              <span>Batal</span>
            </button>
            <button
              type="submit"
              form="addReklameForm"
              className="bg-primary mb-5 font-semibold flex justify-center items-center gap-3 text-white rounded-md w-32 h-10"
            >
              <span>Simpan</span>
            </button>
          </div>
        </div>
      </div>
      {alertMessage && (
        <Alert alertMessage={alertMessage} setAlertMessage={setAlertMessage} />
      )}
    </div>
  );
};

export default ReklameModal;
