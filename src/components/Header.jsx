import React from "react";
import Fotoproyecto from "../assets/fotoproyecto.jpeg";
const Header = () => {
  const Alumno = {
    fecha_nacimiento: "15/11/2002",
    esado_civil: "soltero",
    mail: "santilmoyano11@gmail.com",
    telefono: 3815121029,
  };

  return (
    <div className="bg-info">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <br />
            <label className="font-weight-bold text-dark">
              DATOS PERSONALES
            </label>

            <h1 className="display-5">Moyano Santiago Lindor</h1>

            <img className="w-25 h-auto" src={Fotoproyecto} alt="" />
          </div>
          <div class="col-md-6">
            <br />
            <br />
            <label htmlFor="">
              Fecha de nacimiento: {Alumno.fecha_nacimiento}{" "}
            </label>
            <br />

            <label htmlFor="">Estado civil: {Alumno.esado_civil}</label>
            <hr />
            <br />
            <br />
            <h5 className="text-dark ">CONTACTO</h5>
            <label htmlFor="">Celular: {Alumno.telefono}</label>
            <br />
            <label htmlFor="">Mail: {Alumno.mail}</label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
