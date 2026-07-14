import { CursoModel } from "../models/curso.model";

export const CURSOS: CursoModel[] = [
    {
        idCurso: 1,
        nombre: "HTML5",
        descripcion: "Estructuracion semantica con etiquetas",
        horas: 30,
        modalidad: "Virtual",
        idInstructor: 1,
        imagen: "html.jpg"
    },
    {
        idCurso: 2,
        nombre: "CSS",
        descripcion: "Aplicacion de hojas de estilo en cascada",
        horas: 40,
        modalidad: "Virtual",
        idInstructor: 1,
        imagen: "css.jpg"
    },
    {
        idCurso: 3,
        nombre: "JavaScript",
        descripcion: "Programacion Basica",
        horas: 60,
        modalidad: "Virtual",
        idInstructor: 1,
        imagen: "js.jpg"
    },
    {
        idCurso: 4,
        nombre: "MySQL",
        descripcion: "Diseño de bases de datos",
        horas: 80,
        modalidad: "Virtual",
        idInstructor: 3,
        imagen: "mysql.jpg"
    }
]