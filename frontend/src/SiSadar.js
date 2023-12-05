import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import opsiA from "./images/opsi-a.svg";

const SiSadar = () => {
  const [formData, setFormData] = useState({
    k1: "",
    k2: "",
    k3: "",
    k4: "",
    k5: "",
    k6: "",
  });
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false); // State untuk ikon loader

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getResult = async (e) => {
    e.preventDefault();
    setLoading(true); // Atur loading menjadi true saat permintaan dikirim

    const options = {
      method: "POST",
      body: JSON.stringify({
        message: formData,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch("https://brainpy-test-be.vercel.app/completions", options);
      const data = await response.json();
      console.log(data);
      setMessage(data.choices[0].message.content);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Atur loading kembali ke false saat respons diterima
    }
  };

  // console.log(message)

  return (
    <div className="container">
      <h3 className="home-font1 mt-5">Buat kamu si sadar, yuk spill minat / kata kunci yang kamu tau</h3>
      <h5>
        Bingung cara pakai? <Link to="/tentang">Klik Disini</Link>{" "}
      </h5>
      <div className="row mb-5">
        <div className="col-sm-7 col-md-7 mt-4 mb-5">
          <div>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-4">
                  <label htmlFor="" className="mb-2 clueless-kategori-title fs-4">
                    Kata Kunci 1
                  </label>
                  <input type="text" className="form-control form-control-lg " style={{ border: "3px solid #FF6B6B", fontSize: "18px" }} id="k1" name="k1" placeholder="cth. Machine Learning" value={formData.k1} onChange={handleChange} />
                </div>
                <div className="mb-4">
                  <label htmlFor="" className="mb-2 clueless-kategori-title fs-4">
                    Kata Kunci 2
                  </label>
                  <input type="text" className="form-control form-control-lg " style={{ border: "3px solid #FF6B6B", fontSize: "18px" }} id="k2" name="k2" placeholder="Laravel" value={formData.k2} onChange={handleChange} />
                </div>
                <div className="mb-4">
                  <label htmlFor="" className="mb-2 clueless-kategori-title fs-4">
                    Kata Kunci 3
                  </label>
                  <input type="text" className="form-control form-control-lg" style={{ border: "3px solid #FF6B6B", fontSize: "18px" }} id="k3" name="k3" placeholder="Unity" value={formData.k3} onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-4">
                  <label htmlFor="" className="mb-2 clueless-kategori-title fs-4">
                    Kata Kunci 4
                  </label>
                  <input type="text" className="form-control form-control-lg" style={{ border: "3px solid #FF6B6B", fontSize: "18px" }} id="k4" name="k4" placeholder="React.Js" value={formData.k4} onChange={handleChange} />
                </div>
                <div className="mb-4">
                  <label htmlFor="" className="mb-2 clueless-kategori-title fs-4">
                    Kata Kunci 5
                  </label>
                  <input type="text" className="form-control form-control-lg" style={{ border: "3px solid #FF6B6B", fontSize: "18px" }} id="k5" name="k5" placeholder="Blender" value={formData.k5} onChange={handleChange} />
                </div>
                <div className="mb-4">
                  <label htmlFor="" className="mb-2 clueless-kategori-title fs-4">
                    Kata Kunci 6
                  </label>
                  <input type="text" className="form-control form-control-lg" style={{ border: "3px solid #FF6B6B", fontSize: "18px" }} id="k6" name="k6" placeholder="Data Mining" value={formData.k6} onChange={handleChange} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-5 col-md-5 p-4">
          <img src={opsiA} style={{ width: "100%" }} alt="" />
        </div>
        <button
          type="button"
          className="btn btn-danger btn-lg mb-5"
          style={{ textAlign: "center" }}
          onClick={getResult}
          disabled={loading} // Tambahkan disabled saat loading aktif
        >
          {loading ? (
            <FontAwesomeIcon icon={faSpinner} spin /> // Tampilkan ikon loader jika loading aktif
          ) : (
            "Tampilkan Judul"
          )}
        </button>

        {message === null ? null : (
          <div className="hiddenBox mb-4">
            <div className="row">
              <div className="col-10 col-sm-11 col-md-11">
                <div className="hiddenBox-font mb-3">Rekomendasi Judul berdasarkan kata kunci kamu</div>
              </div>
            </div>
            <div className="hiddenBox-font p-2">
              <div className="mb-2">
                <ul style={{ listStyleType: "none" }}>
                  {message.split("\n").map((item, index) => (
                    <li key={index}>{item.replace(/\n/g, "")}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SiSadar;
