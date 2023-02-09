import Layouts from "../components/layouts";
import { useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import FormRegister from "../components/RegistrationForm/FormRegister";
import { Link, useNavigate } from "react-router-dom";
import dataMutation from "../utils/dataMutation";
import Alert from "../components/layouts/Alert";

const RegistrationForm = () => {
  const [nama_reg, setNama_reg] = useState("");
  const [nik_reg, setNik_reg] = useState("");
  const [npwp_reg, setNpwp_reg] = useState("");
  const [nama_perusahaan, setNama_perusahaan] = useState("");
  const [alamat_perusahaan, setAlamat_perusahaan] = useState("");
  const [no_telp, setNo_telp] = useState("");

  const [alertMessage, setAlertMessage] = useState("");

  const navigate = useNavigate();

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
      };
      const res = await dataMutation("/api/reklame", body, "POST");
      console.log(res.data.id);
      navigate("/edit/" + res.data.id);
    }
  };

  return (
    <Layouts>
      <p className="pt-7 px-7 text-xl font-semibold flex items-center gap-3">
        <Link to={"/pendataan"}>
          <IoChevronBackSharp className="mt-1 cursor-pointer hover:text-2xl hover:text-primary" />{" "}
        </Link>
        <span>Data Reklame</span>
      </p>

      {/* Form Register */}
      <FormRegister
        handleRegister={handleRegister}
        alamat_perusahaan={alamat_perusahaan}
        nama_reg={nama_reg}
        nik_reg={nik_reg}
        npwp_reg={npwp_reg}
        no_telp={no_telp}
        nama_perusahaan={nama_perusahaan}
        setAlamat_perusahaan={setAlamat_perusahaan}
        setNik_reg={setNik_reg}
        setNo_telp={setNo_telp}
        setNama_perusahaan={setNama_perusahaan}
        setNama_reg={setNama_reg}
        setNpwp_reg={setNpwp_reg}
      />

      {/* List Reklame */}
      {/* <ListReklame data={data} setShowModal={setShowModal} /> */}

      <div className="flex justify-end mx-7 gap-7">
        <Link to={"/pendataan"}>
          <button className="bg-white border border-primary mb-5 font-semibold flex justify-center items-center gap-3 text-primary rounded-md w-40 h-12">
            <span>Batal</span>
          </button>
        </Link>
        <button
          type="submit"
          form="newRegisterForm"
          className="bg-primary mb-5 font-semibold flex justify-center items-center gap-3 text-white rounded-md w-40 h-12"
        >
          <span>Simpan</span>
        </button>
      </div>

      {alertMessage && (
        <Alert alertMessage={alertMessage} setAlertMessage={setAlertMessage} />
      )}

      {/* <ReklameModal setShowModal={setShowModal} showModal={showModal} /> */}
    </Layouts>
  );
};

export default RegistrationForm;
