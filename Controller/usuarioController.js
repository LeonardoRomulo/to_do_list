import conexao from "../Model/conexao.js";
import Usuario from "../Model/usuario.js";
import bcrypt from "bcrypt";

class UsuarioController {
    static async criarUsuario(req, res) {
        try {
            const { nome, email, senha } = req.body;
            const senhaHash = await bcrypt.hash(senha, 10);
            const usuario = new Usuario(nome, email, senhaHash);

            const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
            await conexao.query(query, [usuario.nome, usuario.email, usuario.senha]);

            return res.status(201).json({id:result.insertId, message: "Usuário cadastrado com sucesso" });
        } catch (err) {
            return res.status(400).json({message: err.message});
        }
    }

    static async listarUsuario(req, res) {
        try {
            const query = 'SELECT * FROM usuarios';
            const [usuarios] = await conexao.query(query);
            return res.status(200).json(usuarios);
        } catch (err) {
            return res.status(500).json({ message: "Erro ao listar o usuário" });
        }
    }

    static async atualizarUsuario(req, res) {
        try {
            const{id} = req.params.id;

        } catch (err) {

        }
    }

    static async deletarUsuario(req, res) {
        try {

        } catch (err) {

        }
    }
}