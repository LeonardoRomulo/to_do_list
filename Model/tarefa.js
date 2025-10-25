class tarefas {
    constructor(titulo, descrição, completado = false, due_date = null) {
        this.titulo = titulo;
        this.descrição = descrição;
        this.completado = completado;
        this.due_date = due_date;
    }
};
export default tarefas;