interface FormRegisterProps {
  no_reg: string;
  setNo_reg: React.Dispatch<React.SetStateAction<string>>;
  nama_reg: string;
  setNama_reg: React.Dispatch<React.SetStateAction<string>>;
  nik_reg: string;
  setNik_reg: React.Dispatch<React.SetStateAction<string>>;
  npwp_reg: string;
  setNpwp_reg: React.Dispatch<React.SetStateAction<string>>;
  nama_perusahaan: string;
  setNama_perusahaan: React.Dispatch<React.SetStateAction<string>>;
  alamat_perusahaan: string;
  setAlamat_perusahaan: React.Dispatch<React.SetStateAction<string>>;
  no_telp: string;
  setNo_telp: React.Dispatch<React.SetStateAction<string>>;
  expired_date: string;
  setExpired_date: React.Dispatch<React.SetStateAction<string>>;
  handleRegister: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const FormEditRegister = ({
  no_reg,
  alamat_perusahaan,
  expired_date,
  nama_perusahaan,
  nama_reg,
  nik_reg,
  no_telp,
  npwp_reg,
  setNo_reg,
  setAlamat_perusahaan,
  setExpired_date,
  setNama_perusahaan,
  setNama_reg,
  setNik_reg,
  setNo_telp,
  setNpwp_reg,
  handleRegister,
}: FormRegisterProps) => {
  return (
    <div className="bg-white shadow-md rounded-md mx-7 px-6 my-7 pt-5 font-medium">
      <form id="registerForm" onSubmit={handleRegister} className="py-7">
        <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
          <label className="md:w-52 w-full" htmlFor="no-registrasi">
            Nomor Registrasi
          </label>
          <input
            required
            value={no_reg}
            readOnly
            className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
            type="text"
            placeholder="123456789"
          />
        </div>
        <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
          <label className="md:w-52 w-full" htmlFor="no-registrasi">
            Nama Pemohon
          </label>
          <input
            required
            value={nama_reg}
            onChange={(e) => setNama_reg(e.target.value)}
            className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
            type="text"
            placeholder="Masukan Nama Pemohon..."
          />
        </div>
        <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
          <label className="md:w-52 w-full" htmlFor="no-registrasi">
            Nik
          </label>
          <input
            required
            value={nik_reg}
            onChange={(e) => setNik_reg(e.target.value)}
            className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
            type="number"
            placeholder="Masukan NIK Pemohon"
          />
        </div>
        <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
          <label className="md:w-52 w-full" htmlFor="no-registrasi">
            NPWP
          </label>
          <input
            required
            value={npwp_reg}
            onChange={(e) => setNpwp_reg(e.target.value)}
            className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
            type="number"
            placeholder="Masukan NPWP Pemohon..."
          />
        </div>
        <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
          <label className="md:w-52 w-full" htmlFor="no-registrasi">
            Nama Perusahaan
          </label>
          <input
            required
            value={nama_perusahaan}
            onChange={(e) => setNama_perusahaan(e.target.value)}
            className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
            type="text"
            placeholder="Masukan Nama Perusahaan"
          />
        </div>
        <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
          <label className="md:w-52 w-full" htmlFor="no-registrasi">
            Alamat Perusahaan
          </label>
          <input
            required
            value={alamat_perusahaan}
            onChange={(e) => setAlamat_perusahaan(e.target.value)}
            className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
            type="text"
            placeholder="Masukan Alamat Perusahaan"
          />
        </div>
        <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
          <label className="md:w-52 w-full" htmlFor="no-registrasi">
            Nomor Telp/HP
          </label>
          <input
            required
            value={no_telp}
            onChange={(e) => setNo_telp(e.target.value)}
            className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
            type="number"
            placeholder="Masukan Nomor Telp/HP"
          />
        </div>
      </form>
    </div>
  );
};

export default FormEditRegister;
