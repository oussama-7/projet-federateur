import React from "react";
import kepsek from "./../assets/kepsek.jpg";

const SectionKepsek = () => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-none d-md-block">
            <div className="mt-3 text-center">
              <img src={kepsek} height="200" className="rounded" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 mt-4">
            <h2 className="text-center">LE BUT</h2>
            <p className="text-indent text-center mt-3">
            Notre mission est de vous offrir un accès facile à l'apprentissage à travers des services de qualité en matière de scolaire, parascolaire et stages professionnels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionKepsek;
