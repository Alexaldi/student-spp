import Cookies from "js-cookie";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { useEffect, useState } from "react";

const Business = () => {
  const [token, setToken] = useState({});
  useEffect(() => {
    const data = Cookies.get("Siswa")
    if (data !== undefined) {
      setToken(JSON.parse(data));
    }
  }, [])
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Selamat Datang <br className="sm:block hidden" />{token.nama}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Dengan Aplikasi Spp Nekat Anda Dapat Melihat History Pembayaran Spp Anda
        </p>
        <Button styles={`mt-10`} />
      </div>
    </section>
  );
}

export default Business;
