const express = require('express')
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(Atendimento, res) { 
        const sql = "INSERT INTO Atendimentos SET ?"
        
        conexao.query(sql, Atendimento, (erro, resultados) => {
            if(erro) {
                //erro no client: bad request
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }
}

module.exports = new Atendimento