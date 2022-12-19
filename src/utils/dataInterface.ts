export interface DataRegisterType {
  id?: number;
  id_user?: number;
  no_reg: string;
  no_reg_lama?: null | string;
  nama_reg: string;
  nik_reg: string;
  npwp_reg: string;
  nama_perusahaan: string;
  alamat_perusahaan: string;
  no_telp: string;
  expired_date: string;
  deleted_at?: null | string;
  reklame: Array<any>;
}

export interface ReklameDetailType {
  id?: number;
  detail: [
    {
      id?: number;
      label: "Bunyi Reklame";
      form_type: 1;
      kode_isian: "BUNYI_REKLAME";
      value: string;
    },
    {
      id?: number;
      label: "Jenis Reklame";
      form_type: 1;
      kode_isian: "JENIS_REKLAME";
      value: string;
    },
    {
      id?: number;
      label: "Area Pemasangan";
      form_type: 1;
      kode_isian: "AREA_PEMASANGAN";
      value: string;
    },
    {
      id?: number;
      label: "Panjang Reklame";
      form_type: 1;
      kode_isian: "PANJANG_REKLAME";
      value: string;
    },
    {
      id?: number;
      label: "Lebar Reklame";
      form_type: 1;
      kode_isian: "LEBAR_REKLAME";
      value: string;
    },
    {
      id?: number;
      label: "Jumlah Muka Reklame";
      form_type: 1;
      kode_isian: "JUMLAH_MUKA";
      value: string;
    },
    {
      id?: number;
      label: "Lama Pemasangan";
      form_type: 1;
      kode_isian: "LAMA_PEMASANGAN";
      value: string;
    },
    {
      id?: number;
      label: "Tanggal Mulai Pemasangan";
      form_type: 1;
      kode_isian: "TGL_MULAI";
      value: string;
    },
    {
      id?: number;
      label: "Tanggal Akhir Pemasangan";
      form_type: 1;
      kode_isian: "TGL_AKHIR";
      value: string;
    },
    {
      id?: number;
      label: "Tempat Pemasangan";
      form_type: 1;
      kode_isian: "TEMPAT_PEMASANGAN";
      value: string;
    },
    {
      id?: number;
      label: "Titik Koordinat Pemasangan";
      form_type: 1;
      kode_isian: "TITIK_KOORDINAT";
      value: string;
    }
  ];
}

export interface ReklameType {
  id?: number;
  id_registrasi?: number;
  no_registrasi: string;
  nik: string;
  npwp: string;
  nama: string;
  nama_perusahaan: string;
  tempat_pemasangan: string;
  jenis_reklame: string;
  status: string;
  tgl_akhir: string;
  titik_koordinat: string;
}
