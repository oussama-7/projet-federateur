import React from "react";
import google from './../assets/partner/google.png';
import hardvard from './../assets/partner/hardvard.png';
import oxford from './../assets/partner/oxford.png';
import udemy from './../assets/partner/udemy.png';
import unicef from './../assets/partner/unicef.png';
import windows from './../assets/partner/windows.png';

const PartnerComponent = () => {
  return (
    <div className="container mb-5">
      <h2 className="fw-bold text-center pt-5 mb-5 ">Partnership</h2>
      <div className="row text-center">
        <div className="col-4 col-md-2">
          <img src={google} />
        </div>
        <div className="col-4 col-md-2 mb-2">
          <img src={hardvard} width="96" height="96" />
        </div>
        <div className="col-4 col-md-2 mb-2">
          <img src={oxford} width="96" height="96" />
        </div>
        <div className="col-4 col-md-2 mb-2">
          <img src={udemy} />
        </div>
        <div className="col-4 col-md-2 mb-2">
          <img src={unicef} />
        </div>
        <div className="col-4 col-md-2 mb-2">
          <img src={windows} />
        </div>
      </div>
    </div>
  );
};

export default PartnerComponent;
