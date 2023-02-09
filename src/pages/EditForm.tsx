import Layouts from "../components/layouts";
import { useState, useEffect } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import ReklameModal from "../components/RegistrationForm/ReklameModal";
import { Link, useParams } from "react-router-dom";
import dataMutation from "../utils/dataMutation";
import EditListReklame from "../components/EditForm/EditListReklame";
import ConfirmModal from "../components/layouts/ConfirmModal";
import MutateReklameModal from "../components/EditForm/MutateReklameModal";
import FormEditRegister from "../components/EditForm/FormEditRegistrasi";
import customFetch from "../utils/customFetch";
import Alert from "../components/layouts/Alert";

const EditForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [showReklameModal, setShowReklameModal] = useState(0);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showMutateReklameModal, setShowMutateReklameModal] = useState(false);

  const [no_reg, setNo_reg] = useState("");
  const [nama_reg, setNama_reg] = useState("");
  const [nik_reg, setNik_reg] = useState("");
  const [npwp_reg, setNpwp_reg] = useState("");
  const [nama_perusahaan, setNama_perusahaan] = useState("");
  const [alamat_perusahaan, setAlamat_perusahaan] = useState("");
  const [no_telp, setNo_telp] = useState("");
  const [expired_date, setExpired_date] = useState("2029-12-25");

  const [reklameList, setReklameList] = useState([]);

  const [changes, setChanges] = useState(0);
  const [alertMessage, setAlertMessage] = useState("");

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      customFetch("/api/reklame/view/" + id).then((res) => {
        setNo_reg(res.data.no_reg);
        setNama_reg(res.data.nama_reg);
        setNik_reg(res.data.nik_reg);
        setNama_perusahaan(res.data.nama_perusahaan);
        setAlamat_perusahaan(res.data.alamat_perusahaan);
        setNpwp_reg(res.data.npwp_reg);
        setNo_telp(res.data.no_telp);
        setReklameList(res.data.permohonan);
      });
    }
  }, [id, changes]);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nik_reg.length !== 16 && nik_reg !== "") {
      setAlertMessage("Data NIK Pemohon Tidak Sesuai");
    } else if (
      npwp_reg.length !== 15 &&
      npwp_reg.length !== 16 &&
      npwp_reg !== ""
    ) {
      setAlertMessage("Data NPWP Pemohon Tidak Sesuai");
    } else {
      const body = {
        nama_reg,
        nik_reg,
        npwp_reg,
        nama_perusahaan,
        alamat_perusahaan,
        no_telp,
        expired_date,
      };

      const res = await dataMutation(
        "/api/reklame/update-registrasi/" + id,
        body,
        "PUT"
      );
      console.log(res);
    }
  };

  return (
    <Layouts>
      <p className="pt-7 px-7 text-xl font-semibold flex items-center gap-3">
        <Link to={"/pendataan"}>
          <IoChevronBackSharp className="mt-1 cursor-pointer hover:text-2xl hover:text-primary" />{" "}
        </Link>
        <span>Edit Data Reklame</span>
      </p>

      {/* Form Register */}
      <FormEditRegister
        handleRegister={handleRegister}
        no_reg={no_reg}
        setNo_reg={setNo_reg}
        alamat_perusahaan={alamat_perusahaan}
        expired_date={expired_date}
        nama_reg={nama_reg}
        nik_reg={nik_reg}
        npwp_reg={npwp_reg}
        no_telp={no_telp}
        nama_perusahaan={nama_perusahaan}
        setAlamat_perusahaan={setAlamat_perusahaan}
        setExpired_date={setExpired_date}
        setNik_reg={setNik_reg}
        setNo_telp={setNo_telp}
        setNama_perusahaan={setNama_perusahaan}
        setNama_reg={setNama_reg}
        setNpwp_reg={setNpwp_reg}
      />

      <div className="flex justify-end mx-7 gap-7">
        <Link to={"/pendataan"}>
          <button className="bg-white border border-primary mb-5 font-semibold flex justify-center items-center gap-3 text-primary rounded-md w-40 h-12">
            <span>Batal</span>
          </button>
        </Link>
        <button
          type="submit"
          form="registerForm"
          className="bg-primary mb-5 font-semibold flex justify-center items-center gap-3 text-white rounded-md w-40 h-12"
        >
          <span>Simpan</span>
        </button>
      </div>

      {/* List Reklame */}
      <EditListReklame
        setShowMutateReklameModal={setShowMutateReklameModal}
        data={reklameList}
        setShowReklameModal={setShowReklameModal}
        showReklameModal={showReklameModal}
        setShowModal={setShowModal}
        setChanges={setChanges}
      />

      {/* Insert Reklame Modal */}
      {alertMessage && (
        <Alert alertMessage={alertMessage} setAlertMessage={setAlertMessage} />
      )}

      <ReklameModal
        id_register={parseInt(id!)}
        setShowModal={setShowModal}
        showModal={showModal}
        setChanges={setChanges}
      />

      {showConfirmModal && (
        <ConfirmModal
          setShowConfirmModal={setShowConfirmModal}
          handleSubmit={handleRegister}
        />
      )}

      {showMutateReklameModal && (
        <MutateReklameModal
          reklame_id={showReklameModal}
          setShowModal={setShowMutateReklameModal}
          showModal={showMutateReklameModal}
          setChanges={setChanges}
        />
      )}
    </Layouts>
  );
};

export default EditForm;
