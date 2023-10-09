import React from 'react'
import { Link } from "react-router-dom";
import homeImg from "./images/home.svg";

const Home = () => {
    return (
        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-md-6 mt-4 mb-3">
                    <div>
                        <h3 className="home-font1" >Hi, Selamat Datang</h3>
                        <h1  className="home-font2" >di Brain.py</h1>
                        <p className="home-font-p fw-semibold" style={{ marginBottom: '40px' }}>
                            Website super buat kamu yang masih <br />
                            belum tau mau ambil Topik/Judul PI apa.
                        </p>
                        <h3 className="home-font3 mt-4 mb-1">Yang manakah dirimu</h3>
                        <div className="row mt-2">
                            <div className="col-6 col-sm-5 col-md-4">
                                <Link className="btn btn-danger fw-semibold text-start me-3" to="/si-sadar">Sadar minat, tapi ga ada ide</Link>
                            </div>
                            <div className="col-6 col-sm-5 col-md-4">
                                <Link className="btn btn-danger fw-semibold py-3 text-start" to="/si-clueless">Sangat Clueless </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-3 p-4">
                    <img src={homeImg}  style={{ width: '100%' }} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home