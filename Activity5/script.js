// Array de objetos con la experiencia académica
const exp_academica = [
    {
        titulo: "Ciclo medio de Actividades Comerciales",
        anio: "2018-2020"
    },
    {
        titulo: "Ciclo medio de Administración y Gestión",
        anio: "2021-2023"
    },
    {
        titulo: "Ciclo superior de Desarrollo de Aplicaciones Web",
        anio: "2025-2027"
    }
];

// Array de objetos con la experiencia profesional
const exp_profesional = [
    {
        puesto: "Atención al cliente"
    },
    {
        puesto: "Gestión de almacén"
    },
    {
        puesto: "Atención al público"
    },
    {
        puesto: "Gestión de redes sociales"
    }
];

// Seleccionamos las listas del HTML
const listaAcademica = document.getElementById("lista_exp_academica");
const listaProfesional = document.getElementById("lista_exp_profesional");

// Generamos la lista académica
for (const estudio of exp_academica) {

    const li = document.createElement("li");
    li.textContent = estudio.titulo + ", año: " + estudio.anio;
    listaAcademica.appendChild(li);

};

// Generamos la lista profesional
for(const experiencia of exp_profesional) {

    const li = document.createElement("li");
    li.textContent = experiencia.puesto;
    listaProfesional.appendChild(li);
};