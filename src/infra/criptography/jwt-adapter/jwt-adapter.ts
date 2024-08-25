import jwt from 'jsonwebtoken'
import { type Decrypter, type Encrypter } from '../../../data/protocols/cryptography'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor (private readonly secret: string) {}

  async encrypt (value: string): Promise<string> {
    const accessToken = jwt.sign({ id: value }, this.secret)
    return accessToken
  }

  async decrypt (value: string): Promise<string | null> {
    jwt.verify(value, this.secret)
    return null
  }
}
