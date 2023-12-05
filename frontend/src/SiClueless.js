import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const leftCategories = [
  //kiri
  {
    name: "Kategori 1",
    keywords: ["Machine Learning", "Web Development", "Android Development", "Augmanted Reality", "3D Animation", "Game Development"],
  },
  {
    name: "Kategori 2",
    keywords: ["Machine Learning", "Web Development", "Android Development", "Augmanted Reality", "3D Animation", "Game Development"],
  },
  {
    name: "Kategori 3",
    keywords: ["Machine Learning", "Web Development", "Android Development", "Augmanted Reality", "3D Animation", "Game Development"],
  },
];

const rightCategories = [
  //kanan
  {
    name: "Kategori 4",
    keywords: ["RMachine Learning", "Web Development", "Android Development", "Augmanted Reality", "3D Animation", "Game Development"],
  },
  {
    name: "Kategori 5",
    keywords: ["Machine Learning", "RWeb Development", "Android Development", "Augmanted Reality", "3D Animation", "Game Development"],
  },
  {
    name: "Kategori 6",
    keywords: ["Machine Learning", "Web Development", "RAndroid Development", "Augmanted Reality", "3D Animation", "Game Development"],
  },
];

const SiClueless = () => {
  const [formData, setFormData] = useState({ selectedKeywords: {} });
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      selectedKeywords: { ...prevFormData.selectedKeywords, [name]: value },
    }));
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

  //   console.log(message)
  console.log(formData);

  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  return (
    <div className="container">
      <h3 className="home-font1 mt-5">
        Buat kamu clueless, <br />
        pilih salah satu dari kata kunci di bawah ya!
      </h3>
      <h5>
        Bingung cara pakai? <Link to="/tentang">Klik Disini</Link>{" "}
      </h5>
      <div className="">
        <div className="row">
          {/* LEFT CATEGORIES */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="mb-3">
              {leftCategories.map((leCat, leIndex) => (
                <div key={leIndex} className="clueless-box mb-3">
                  <div className="p-3">
                    <div className="clueless-kategori-title mb-2">{leCat.name}</div>
                    <div className="row">
                      {chunkArray(leCat.keywords, 3).map((chunk, chunkIndex) => (
                        <div key={chunkIndex} className="col-12 col-sm-12 col-md-12 col-lg-6">
                          {chunk.map((keyword, keywordIndex) => (
                            <div key={keywordIndex} className="form-check">
                              <input
                                type="radio"
                                className="form-check-input original-radio"
                                id={`leCat${leIndex + 1}_keyword${chunkIndex * 3 + keywordIndex + 1}`}
                                name={`leCat${leIndex + 1}`}
                                value={keyword}
                                checked={formData.selectedKeywords[`leCat${leIndex + 1}`] === keyword}
                                onChange={handleChange}
                              />
                              <label className="custom-radio form-check-label mb-1" htmlFor={`leCat${leIndex + 1}_keyword${chunkIndex * 3 + keywordIndex + 1}`}>
                                {keyword}
                              </label>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT CATEGORIES */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="mb-3">
              {rightCategories.map((rgCat, rgIndex) => (
                <div key={rgIndex} className="clueless-box mb-3">
                  <div className="p-3">
                    <div className="clueless-kategori-title mb-2">{rgCat.name}</div>
                    <div className="row">
                      {chunkArray(rgCat.keywords, 3).map((chunk, chunkIndex) => (
                        <div key={chunkIndex} className="col-12 col-sm-12 col-md-12 col-lg-6">
                          {chunk.map((keyword, keywordIndex) => (
                            <div key={keywordIndex} className="form-check">
                              <input
                                type="radio"
                                className="form-check-input original-radio"
                                id={`rgCat${rgIndex + 1}_keyword${chunkIndex * 3 + keywordIndex + 1}`}
                                name={`rgCat${rgIndex + 1}`}
                                value={keyword}
                                checked={formData.selectedKeywords[`rgCat${rgIndex + 1}`] === keyword}
                                onChange={handleChange}
                              />
                              <label className="custom-radio form-check-label mb-1" htmlFor={`rgCat${rgIndex + 1}_keyword${chunkIndex * 3 + keywordIndex + 1}`}>
                                {keyword}
                              </label>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <button id="showDivButton" type="button" class="btn home-btn mb-5" style="text-align: center;" >Tampilkan Judul</button> */}

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
                {message
                  .split("\n") // Pisahkan teks berdasarkan karakter newline
                  .map((item, index) => (
                    <li key={index}>{item.replace(/\n/g, "")}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SiClueless;
