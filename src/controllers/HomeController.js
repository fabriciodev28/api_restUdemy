import Aluno from '../models/Aluno'

class HomeController {
    async index(req, res){
        const novoAluno = await Aluno.create({
            nome: 'Joao',
            sobrenome: 'Silva',
            email: 'joao@gmail.com',
            idade: 23,
            peso: 60,
            altura: 1.65
        })
        res.json(novoAluno)
    }
}

export default new HomeController()