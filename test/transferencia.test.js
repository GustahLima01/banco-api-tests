const request = require('supertest');
const { expect } = require('chai');
const { obterToken } = require('../helpers/autenticacao');

describe('Transferências', () => {
    describe('POST /transferencias', () => {
         it('Deve retornar falha com 201 quando o valor da tranferencia for igual ou acima de R$10,00', async () => {
            const token = await obterToken('julio.lima', '123456');

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({                    
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 11,
                    token: ""
                })

                expect(resposta.status).to.equal(201);

                console.log(resposta.body)
        })

        it('Deve retornar falha com 422 quando o valor da tranferencia for abaixo de R$10,00', async () => {
            const token = await obterToken('julio.lima', '123456');

            const resposta = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({                    
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 7,
                    token: ""
                })

                expect(resposta.status).to.equal(422);

                console.log(resposta.body)
        } )       
    })
})