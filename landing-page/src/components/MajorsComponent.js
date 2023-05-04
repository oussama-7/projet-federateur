import React from "react";
import CardsMajor from "./CardsMajor";
import ipa from "./../assets/jurusan/ipa.jpg";
import ips from "./../assets/jurusan/ips.jpg";
import bahasa from "./../assets/jurusan/bahasa.jpg";

const MajorsComponent = () => {
  return (
    <div className="custom-main-color">
      <div className="container pt-5 pb-5">
        <h2 className="text-center text-light mb-5">Nos services</h2>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mb-3">
            <CardsMajor image={ipa} jurusan="platforme stage" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mb-3">
          <CardsMajor image={ips} jurusan="platforme scolaire" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mb-3">
          <CardsMajor image={bahasa} jurusan="platforme parascolaire" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorsComponent;
