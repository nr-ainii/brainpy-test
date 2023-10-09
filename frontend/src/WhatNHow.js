import React from 'react';
import heroSection from "./images/herosection-tentang.svg";
import wave from "./images/wave.svg";
import flowchart from "./images/Group 113.svg";

const WhatNHow = () => {
    return (
        <>
        <main>
            <div style={{ backgroundColor: '#003049' }}>
            <div className="container">
                <div className="row">
                <div className="col-md-6 mt-5">
                    <div>
                    <h3 className="whatnhow-font1">Brain.py</h3>
                    <h1 className="whatnhow-font2">“Some keyword to unlock your <br /> brainstorm mode”</h1>
                    </div>
                </div>
                <div className="col-md-6 mt-4 p-1">
                    <img src={heroSection} style={{ width: '60%', marginLeft: '100px' }} alt="" />
                </div>
                </div>
            </div>
            </div>
            <img src={wave} style={{ backgroundRepeat: 'no-repeat' }} alt="" />
            <div className="container">
            <div className="row mb-5">
                <div className="col-md-6 mt-5">
                <div>
                    <h4 className="whatnhow-content-title mb-5">What is Brain.Py?</h4>
                    <h5 className="mb-3">W-Wait...</h5>
                    <p className="whatnhow-content">
                    Kamu anak sem 5/6 informatika di universitas gunadarma yang <br />
                    sebentar lagi PI tapi masih belum tau mau bikin apa karna gatau <br />
                    apa - apa kan? Atau kamu sebenernya tau suka apa tapi gatau <br />
                    yang kamu suka bisa buat bikin apa?
                    </p>
                    <p className="whatnhow-content">
                    Kalau iya. Dengan bantuan <b>kata kunci</b>, Brain.Py bakal bantu kamu <br />
                    buat <b>kasih rekomendasi judul PI</b> yang nantinya bisa kamu <br />
                    kembangkan sendiri
                    </p>
                    <p className="whatnhow-content">
                    Jadi singkatnya, <b> Brain.Py adalah</b> sebuah web aplikasi sistem <br />
                    rekomendasi berbasis AI yang akan memberikan rekomendasi judul <br />
                    PI berdasarkan kata kunci yang diberikan oleh user (iya, kamu)
                    </p>
                </div>
                </div>
                <div className="col-md-6 mx-auto p-4 text-center">
                <img src={flowchart} style={{ width: '100%' }} alt="" />
                </div>

            </div>
            </div>
        </main>
        <nav className="navbar nav-yellow">
            <div className="navbar-inner container">
            <div className="nav-yellow-title">
                In case kamu ga ngerti
            </div>
            </div>
        </nav>
        <main>
            <div className="container">
            <div className="row mt-3">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <div className="box-1 mb-3">
                    <div className="row mt-2 mb-3">
                    <div className="col-3 col-sm-3 col-md-3 p-0 ">
                        <div className="circle-container">
                        <div className="circle">
                            <span className="circle-text">1</span>
                        </div>
                        </div>
                    </div>
                    <div className="col-9 col-sm-9 col-md-9 p-0">
                        <div className="whatnhow-titlebox" style={{}}>
                        Pikirkan beberapa kata kunci.
                        </div>
                    </div>
                    </div>
                    <div className="whatnhow-contentbox p-2">
                    Kata kunci disini bebas ya, bisa dari
                    nama framework, platform, bahasa
                    pemrograman, layanan, nama bisnis
                    dll. Usahakan dari beberapa kata kunci
                    itu ada yg masih relate dengan dunia IT
                    </div>
                </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <div className="box-1 mb-3">
                    <div className="row mt-2 mb-3">
                    <div className="col-3 col-sm-3 col-md-3 p-0 ">
                        <div className="circle-container">
                        <div className="circle">
                            <span className="circle-text">2</span>
                        </div>
                        </div>
                    </div>
                    <div className="col-9 col-sm-9 col-md-9 p-0">
                        <div className="whatnhow-titlebox mx-2" style={{}}>
                        Kalau kepikiran kata kunci
                        </div>
                    </div>
                    </div>
                    <div className="whatnhow-contentbox p-2">
                    <b>IF</b> sudah kepikiran berarti kamu
                    termasuk ke <b>'si-sadar'</b> jadi kamu bisa
                    langsung klik menu <b>Buat yang sadar</b>
                    atau <b><a href="/sadar.html" style={{ color: '#1D1D1D' }}>klik disini</a></b> biar cepet.
                    </div>
                </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <div className="box-1 mb-3">
                    <div className="row mt-2 mb-3">
                    <div className="col-3 col-sm-3 col-md-3 p-0 ">
                        <div className="circle-container">
                        <div className="circle">
                            <span className="circle-text">3</span>
                        </div>
                        </div>
                    </div>
                    <div className="col-9 col-sm-9 col-md-9 p-0">
                        <div className="whatnhow-titlebox" style={{}}>
                        Aduh! ga kepikiran apa - apa
                        </div>
                    </div>
                    </div>
                    <div className="whatnhow-contentbox p-2">
                    <b>ELSE</b> belum kepikiran apa apa, berarti
                    kamu masuk kategori <b>'si-clueless'</b> jadi
                    kamu bisa langsung klik menu <b>Buat si
                    clueless</b>  atau <b><a href="/clueless.html" style={{ color: '#1D1D1D' }}>klik disini</a></b> biar cepet.
                    </div>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6">
                <div className="box-1 mb-3">
                    <nav className="navbar nav-yellow">
                    <div className="navbar-inner container">
                        <div className="nav-yellow-title">
                        # Si Sadar
                        </div>
                    </div>
                    </nav>
                    <div className="p-3">
                    <div className="row">
                        <div className="col-1 col-sm-2 col-md-1 d-flex justify-content-md-center">4.</div>
                        <div className="col-10 col-sm-10 col-md-10 p-0">
                        <div className="whatnhow-contentbox">
                            Disini kamu cuma tinggal isi form yang ada pake kata kunci
                            yang sudah ada dikepala kamu. Ga perlu keisi semua,
                            seadanya juga bisa. Tapi biar hasilnya makin maksimal isi
                            sebanyaknya.
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 col-sm-2 col-md-1 d-flex justify-content-md-center">5.</div>
                        <div className="col-10 col-sm-10 col-md-10 p-0">
                        <div className="whatnhow-contentbox">
                            Habis diisi kamu tinggal klik button 'tampil judul' dan nanti rekomendasi judul muncul
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 col-sm-2 col-md-1 d-flex justify-content-md-center">6.</div>
                        <div className="col-10 col-sm-10 col-md-10 p-0">
                        <div className="whatnhow-contentbox">
                            Kalau kamu ngerasa belum puas sama hasilnya tinggal klik button (....) Trus ulangin langah 4-5
                            <br /><br /><br />
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                <div className="box-1 mb-3">
                    <nav className="navbar nav-yellow">
                    <div className="navbar-inner container">
                        <div className="nav-yellow-title">
                        # Si Clueless
                        </div>
                    </div>
                    </nav>
                    <div className="p-3">
                    <div className="row">
                        <div className="col-1 col-sm-2 col-md-1 d-flex justify-content-md-center">4.</div>
                        <div className="col-10 col-sm-10 col-md-10 p-0">
                        <div className="whatnhow-contentbox">
                            Buat kamu disini disedian beberapa pilihan kata kunci yang
                            bisa kamu pilih. Pilih kata kunci yang paling kamu kuasain
                            atau setidaknya kamu ngerasa familiar sama kata kunci itu
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 col-sm-2 col-md-1 d-flex justify-content-md-center">5.</div>
                        <div className="col-10 col-sm-10 col-md-10 p-0">
                        <div className="whatnhow-contentbox">
                            Klik button 'tampil judul' and nanti rekomendasi judulnya muncul
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 col-sm-2 col-md-1 d-flex justify-content-md-center">6.</div>
                        <div className="col-10 col-sm-10 col-md-10 p-0">
                        <div className="whatnhow-contentbox">
                            Kalau kamu ngerasa belum puas sama hasilnya, tinggal klik
                            button (.....) Trus ulangin langah 4-5. Atau kamu <b>bisa pindah ke 'si-sadar'</b>
                            kalau tiba-tiba kepikiran beberapa kata kunci
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
                </div>
            </div>
            </div>
        </main>
        </>
    );
};

export default WhatNHow;
