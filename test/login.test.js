const request = require('supertest');
const { expect } = require('chai');

describe('Login', () => {
    describe('POST /login', () =>{
        //async = obrigatório quando tem um metodo dentro e tem que add um await
        it('Deve retornar 200 com o token em string quando usar credenciais validas', async () => {
            const resposta = await request('http://localhost:3000') 
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })
            
            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string');
        })
    })
})