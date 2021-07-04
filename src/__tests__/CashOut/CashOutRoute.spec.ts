import request from 'supertest'
import { app } from './../../app'

describe('Saque', () => {

  it('Deve retornar 1 nota de  R$ 100 e uma nota de R$ 10 quando 110 for o valor inserido', async () => {
    const valueToWithdraw = 110;

    const response = await request(app)
      .post('/')
      .send({ valueToWithdraw })
      .expect(200)

    expect(response.body.resultString).toEqual('Entregar 1 nota de R$ 100,00 e 1 nota de R$ 10,00.')
  });

  it('verifica se valor passado é multiplo de 10', async () => {

    const valueToWithdraw = 15;

    const response = await request(app)
      .post('/')
      .send({ valueToWithdraw })
      .expect(400)

    expect(response.body.errorMessage).toBeTruthy();
  })


});