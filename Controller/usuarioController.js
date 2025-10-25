import conexao from "../Model/conexao.js";
import Usuario from "../Model/usuario.js";

class UsuarioController {
    static async criarUsuario(res, req) {
        try {
            const { nome, email, senha } = req.body;
            const usuario = new Usuario(nome, email, senha);

            const query = 'INSERT INTO (nome, email, senha) VALUES (?, ?, ?)';
            await pool.query(query, [usuario.nome, usuario.email, usuario.senha]);
            return res.status(200).json({ message: "Usuário cadastro com sucesso" });
        } catch (err) {
            return res.status(500).json({ err: err.message });
        }
    }

    static async listarUsuario(req, res) {
        try {

        } catch (err) {

        }
    }

    static async atulizarUsuario(req,res) {
        try {

        } catch (err) {

        }
    }

    static async deletarUsuario(req, res) {
        try {

        } catch (err) {

        }
    }
}