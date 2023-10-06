import Layouts from "../components/layouts";
import { useState, useEffect } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import customFetch from "../utils/customFetch";
import FormDetail from "../components/Detail/FormDetail";
import DetailListReklame from "../components/Detail/DetailListReklame";
import { MdModeEdit } from "react-icons/md";

const DetailRegister = () => {
  const [no_reg, setNo_reg] = useState("");
  const [nama_reg, setNama_reg] = useState("");
  const [nik_reg, setNik_reg] = useState("");
  const [npwp_reg, setNpwp_reg] = useState("");
  const [nama_perusahaan, setNama_perusahaan] = useState("");
  const [alamat_perusahaan, setAlamat_perusahaan] = useState("");
  const [no_telp, setNo_telp] = useState("");

  const [reklameList, setReklameList] = useState([]);

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
  }, [id]);

  const [id_role, setId_role] = useState(0);

  useEffect(() => {
    customFetch("/api/profile").then((res) => {
      setId_role(res.id_role);
    });
  }, []);

  return (
    <Layouts>
      <p className="pt-7 px-7 text-xl font-semibold flex items-center gap-3">
        <Link to={"/pendataan"}>
          <IoChevronBackSharp className="mt-1 cursor-pointer hover:text-2xl hover:text-primary" />{" "}
        </Link>
        <span>Detail Reklame</span>
      </p>

      {/* Form Register */}
      <FormDetail
        no_reg={no_reg}
        alamat_perusahaan={alamat_perusahaan}
        nama_reg={nama_reg}
        nik_reg={nik_reg}
        npwp_reg={npwp_reg}
        no_telp={no_telp}
        nama_perusahaan={nama_perusahaan}
      />

      {/* List Reklame */}
      <DetailListReklame data={reklameList} />

      {id_role === 1 ? (
        <div className="flex justify-end mx-7 gap-7">
          <Link to={"/edit/" + id}>
            <button className="bg-white border border-primary mb-5 font-semibold flex justify-center items-center gap-3 text-primary rounded-md w-40 h-12">
              <MdModeEdit />
              <span>Edit Data</span>
            </button>
          </Link>
        </div>
      ) : null}
    </Layouts>
  );
};

export default DetailRegister;
