import React from "react";
const Main = () => {
  const Persona = {
    nombre: "Santiago Lindor",
    apellido: "Moyano",
    edad: 21,
  };

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <br />
            <h6 className="text-dark font-weight-bold">ESTUDIOS</h6>
            <p>2024</p>
            <p>Estudiante de programacion</p>
            <hr />

            <h6 className="text-dark font-weight-bold">SECUNDARIO</h6>
            <p>2020</p>
            <p className="text-dark font-weight-bold">
              Bachiller en orientacion Ciencias Sociales
            </p>
            <p>Colegio Sagrado Corazon de Jesus</p>
            <hr />
          </div>
          <div class="col-md-6">
            <br />
            <h6 className="text-dark font-weight-bold">TECNOLOGIAS</h6>
            <p>2024</p>
            <p>(C#,HTML,CSS,SCSS,BOOTSTRAP,TAILWIND,Javascript,MYSQL)</p>
            <hr />
            <br />

            <h6 className="text-dark font-weight-bold">EXPERIENCIA LABORAL</h6>
            <p>2021-2022</p>
            <label htmlFor="">Estudio Juridico Dra. Clara I. Duran</label>
            <br />
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
