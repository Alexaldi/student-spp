import { useEffect, useState } from "react";
import { stats } from "../constants";
import styles from "../style";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Stats = () => {
  const [pembayaran, setPembayaran] = useState(0);
  const [token, setToken] = useState([]);
  useEffect(() => {
    getSiswa()
  }, [])

  const navigate = useNavigate()
  const getSiswa = async () => {
    try {
      const data = JSON.parse(Cookies.get("Siswa"))
      if (data !== undefined) {
        setToken(data)
      }
      const response = await axios.get(`http://localhost:5000/pembayaranU/${token.id_siswa}?limit=10&orderBy=desc`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`
        }
      })
      const total = response.data.reduce((acc, curr) => acc + curr.jumlah_bayar, 0);
      setPembayaran(total)
    } catch (error) {
      if (error.response) {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          navigate('/login');
        }
      }
    }
  };
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      <div key="pembayaran" className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          Rp.{pembayaran.toLocaleString("id-ID")}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          Total Pembayaran
        </p>
      </div>
    </section>
  );
}

export default Stats;
