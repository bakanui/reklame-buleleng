import { useState, useEffect } from "react";
import customFetch from "../../utils/customFetch";
import { ReklameDetailType } from "../../utils/dataInterface";
import dataMutation from "../../utils/dataMutation";
import Alert from "../layouts/Alert";
import CoordinateMaps from "../RegistrationForm/CoordinateMaps";
import uploadImage from "../../utils/uploadImage";

interface ReklameModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  reklame_id: number;
  setChanges: React.Dispatch<React.SetStateAction<number>>;
}

interface ReklameBodyType {
  id_reg: number;
  detailForm: ReklameDetailType["detail"];
}

const MutateReklameModal = ({
  setShowModal,
  showModal,
  reklame_id,
  setChanges,
}: ReklameModalProps) => {
  console.log(reklame_id);

  useEffect(() => {
    if (reklame_id) {
      customFetch("/api/permohonan/view/" + reklame_id).then((res) => {
        const currentData: ReklameDetailType = res;

        setBunyi_reklame({
          value: currentData.detail[0].value,
          id: currentData.detail[0].id!,
        });
        setJenis_reklame({
          value: currentData.detail[1].value,
          id: currentData.detail[1].id!,
        });
        setAreaPemasangan({
          value: currentData.detail[2].value,
          id: currentData.detail[2].id!,
        });
        setPanjang_reklame({
          value: currentData.detail[3].value,
          id: currentData.detail[3].id!,
        });
        setLebar_reklame({
          value: currentData.detail[4].value,
          id: currentData.detail[4].id!,
        });
        setJumlah_muka({
          value: currentData.detail[5].value,
          id: currentData.detail[5].id!,
        });
        setLama_pemasangan({
          value: currentData.detail[6].value,
          id: currentData.detail[6].id!,
        });
        setTgl_mulai({
          value: currentData.detail[7].value,
          id: currentData.detail[7].id!,
        });
        setTgl_akhir({
          value: currentData.detail[8].value,
          id: currentData.detail[8].id!,
        });
        setTempat_pemasangan({
          value: currentData.detail[9].value,
          id: currentData.detail[9].id!,
        });
        setTitik_koordinat({
          value: currentData.detail[10].value,
          id: currentData.detail[10].id!,
        });
        setReklameUplodedImages(currentData.images as []);
      });
    }
  }, [reklame_id]);

  const [area_pemasangan, setAreaPemasangan] = useState({ id: 0, value: "" });
  const [bunyi_reklame, setBunyi_reklame] = useState({ id: 0, value: "" });
  const [jenis_reklame, setJenis_reklame] = useState({ id: 0, value: "" });
  const [jumlah_muka, setJumlah_muka] = useState({ id: 0, value: "" });
  const [panjang_reklame, setPanjang_reklame] = useState({ id: 0, value: "" });
  const [lebar_reklame, setLebar_reklame] = useState({ id: 0, value: "" });
  const [lama_pemasangan, setLama_pemasangan] = useState({ id: 0, value: "" });
  const [tgl_mulai, setTgl_mulai] = useState({ id: 0, value: "" });
  const [tgl_akhir, setTgl_akhir] = useState({ id: 0, value: "" });
  const [reklameUplodedImage, setReklameUplodedImages] = useState<Array<any>>(
    []
  );
  const [titik_koordinat, setTitik_koordinat] = useState({ id: 0, value: "" });
  const [tempat_pemasangan, setTempat_pemasangan] = useState({
    id: 0,
    value: "",
  });
  const [reklameImage, setreklameImage] = useState<FileList | null>(null);

  const [alertMessage, setAlertMessage] = useState("");

  console.log(titik_koordinat.value);

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
    const body: ReklameBodyType = {
      id_reg: 3,
      detailForm: [
        {
          id: bunyi_reklame.id,
          label: "Bunyi Reklame",
          form_type: 1,
          kode_isian: "BUNYI_REKLAME",
          value: bunyi_reklame.value,
        },
        {
          id: jenis_reklame.id,
          label: "Jenis Reklame",
          form_type: 1,
          kode_isian: "JENIS_REKLAME",
          value: jenis_reklame.value,
        },
        {
          id: area_pemasangan.id,
          label: "Area Pemasangan",
          form_type: 1,
          kode_isian: "AREA_PEMASANGAN",
          value: area_pemasangan.value,
        },
        {
          id: panjang_reklame.id,
          label: "Panjang Reklame",
          form_type: 1,
          kode_isian: "PANJANG_REKLAME",
          value: panjang_reklame.value,
        },
        {
          id: lebar_reklame.id,
          label: "Lebar Reklame",
          form_type: 1,
          kode_isian: "LEBAR_REKLAME",
          value: lebar_reklame.value,
        },
        {
          id: jumlah_muka.id,
          label: "Jumlah Muka Reklame",
          form_type: 1,
          kode_isian: "JUMLAH_MUKA",
          value: jumlah_muka.value,
        },
        {
          id: lama_pemasangan.id,
          label: "Lama Pemasangan",
          form_type: 1,
          kode_isian: "LAMA_PEMASANGAN",
          value: lama_pemasangan.value,
        },
        {
          id: tgl_mulai.id,
          label: "Tanggal Mulai Pemasangan",
          form_type: 1,
          kode_isian: "TGL_MULAI",
          value: tgl_mulai.value,
        },
        {
          id: tgl_akhir.id,
          label: "Tanggal Akhir Pemasangan",
          form_type: 1,
          kode_isian: "TGL_AKHIR",
          value: tgl_akhir.value,
        },
        {
          id: tempat_pemasangan.id,
          label: "Tempat Pemasangan",
          form_type: 1,
          kode_isian: "TEMPAT_PEMASANGAN",
          value: tempat_pemasangan.value,
        },
        {
          id: titik_koordinat.id,
          label: "Titik Koordinat Pemasangan",
          form_type: 1,
          kode_isian: "TITIK_KOORDINAT",
          value: titik_koordinat.value,
        },
      ],
    };

    setShowModal(false);
    await dataMutation(
      "/api/reklame/update-reklame/" + reklame_id,
      body,
      "PUT"
    ).then((res) => {
      console.log(res);
      setChanges((current) => current + 1);
      if (reklameImage !== null) {
        if (reklameImage[0].name) {
          uploadReklameImage(reklameImage[0]);
        }
      }
    });
  };

  async function uploadReklameImage(imageData: File) {
    console.log(reklame_id);

    const data = new FormData();
    data.append("id_permohonan", `${reklame_id}`);
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
    if (tgl_mulai.value && tgl_akhir.value) {
      const start = new Date(tgl_mulai.value);
      const end = new Date(tgl_akhir.value);
      const result = Math.floor(
        (end.getTime() - start.getTime()) / (24 * 3600 * 1000)
      );
      if (result > 1) {
        setLama_pemasangan((current) => ({
          id: current.id,
          value: result + " hari",
        }));
      } else {
        console.log(tgl_mulai, tgl_akhir);

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
              Edit Reklame
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
              id="editReklameForm"
              onSubmit={handleAddReklame}
              className="py-7 font-medium"
            >
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Bunyi Reklame
                </label>
                <textarea
                  onChange={(e) =>
                    setBunyi_reklame((current) => ({
                      id: current.id,
                      value: e.target.value,
                    }))
                  }
                  value={bunyi_reklame.value}
                  placeholder="Masukan bunyi reklame..."
                  className="w-full hover:bg-secondary rounded-md border px-7 h-20 border-grey"
                ></textarea>
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Jenis Reklame
                </label>
                <select
                  value={jenis_reklame.value}
                  onChange={(e) =>
                    setJenis_reklame((current) => ({
                      id: current.id,
                      value: e.target.value,
                    }))
                  }
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
                  value={area_pemasangan.value}
                  onChange={(e) =>
                    setAreaPemasangan((current) => ({
                      id: current.id,
                      value: e.target.value,
                    }))
                  }
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
                  value={panjang_reklame.value}
                  onChange={(e) =>
                    setPanjang_reklame((current) => ({
                      id: current.id,
                      value: e.target.value,
                    }))
                  }
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
                  value={lebar_reklame.value}
                  onChange={(e) =>
                    setLebar_reklame((current) => ({
                      id: current.id,
                      value: e.target.value,
                    }))
                  }
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
                  value={jumlah_muka.value}
                  onChange={(e) =>
                    setJumlah_muka((current) => ({
                      id: current.id,
                      value: e.target.value,
                    }))
                  }
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
                  value={tgl_mulai.value}
                  onChange={(e) =>
                    setTgl_mulai((current) => ({
                      id: current.id,
                      value: e.target.value,
                    }))
                  }
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
                  value={tgl_akhir.value}
                  onChange={(e) =>
                    setTgl_akhir((current) => ({
                      id: current.id,
                      value: e.target.value,
                    }))
                  }
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
                  value={lama_pemasangan.value}
                  onChange={(e) =>
                    setLama_pemasangan((current) => ({
                      id: current.id,
                      value: e.target.value,
                    }))
                  }
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
                  value={tempat_pemasangan.value}
                  onChange={(e) =>
                    setTempat_pemasangan((current) => ({
                      id: current.id,
                      value: e.target.value,
                    }))
                  }
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="text"
                  placeholder="Masukan tempat pemasangan reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-start pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Gambar Reklame
                </label>
                <div className="lg:flex lg:justify-between w-full">
                  <input
                    onChange={(e) => validateImage(e.target.files)}
                    className=" hover:bg-secondary rounded-md pb-3 lg:pb-0"
                    type="file"
                    accept="image/jpeg"
                    placeholder="Masukan Gambar Reklame..."
                  />
                  {reklameUplodedImage?.length ? (
                    <button className="w-52 bg-primary py-2 px-3 rounded-md">
                      <a
                        href={`${reklameUplodedImage[0].img_path}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download Gambar
                      </a>
                    </button>
                  ) : null}
                </div>
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Titik Koordinat Pemasangan
                </label>
                <input
                  value={titik_koordinat.value}
                  onChange={(e) =>
                    setTitik_koordinat((current) => ({
                      id: current.id,
                      value: e.target.value,
                    }))
                  }
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="text"
                  placeholder="Masukan titik koordinat pemasangan reklame..."
                />
              </div>
            </form>
            <CoordinateMaps
              editTitikKoordinat={setTitik_koordinat}
              titik_koordinat={titik_koordinat.value || "-8.24999, 114.95"}
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
              form="editReklameForm"
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

export default MutateReklameModal;
