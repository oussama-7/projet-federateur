import React from "react";
import company from './../assets/keunggulan/company.png'
import computer from './../assets/keunggulan/computer.png'
import lecturer from './../assets/keunggulan/lecturer.png'
import school from './../assets/keunggulan/school.png'

const Keunggulan = () => {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <h2 className="text-center pt-1 pt-md-5 ">
          Kenapa Harus SMA Internasional Nusantara
        </h2>
        <p className="text-center mt-4 mb-5">
          Alasan kenapa kalian semua harus bergabung dengan SMK Internasional
          Nusantara.
        </p>
        <div className="row text-center">
            <div className="col-12 col-md-3">
                <img src={computer} />
                <p className="fw-bold">Fasilitas Lengkap</p>
                <p>Penunjang belajar dengan kualitas premium.</p>
            </div>
            <div className="col-12 col-md-3">
                <img src={school} />
                <p className="fw-bold">Fasilitas Lengkap</p>
                <p>Penunjang belajar dengan kualitas premium.</p>
            </div>
            <div className="col-12 col-md-3">
                <img src={lecturer} />
                <p className="fw-bold">Fasilitas Lengkap</p>
                <p>Penunjang belajar dengan kualitas premium.</p>
            </div>
            <div className="col-12 col-md-3">
                <img src={company} />
                <p className="fw-bold">Fasilitas Lengkap</p>
                <p>Penunjang belajar dengan kualitas premium.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Keunggulan;
