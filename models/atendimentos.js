const express = require('express')
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(Atendimento) {
        const sql = "INSERT INTO Atendimentos SET ?"
        
        conexao.query(sql, Atendimento, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }
}

module.exports = new Atendimento