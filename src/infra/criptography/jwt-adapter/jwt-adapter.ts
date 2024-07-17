import jwt from 'jsonwebtoken'
import { type Encrypter } from '../../../data/protocols/cryptography'

export class JwtAdapter implements Encrypter {
  private readonly secret: string

  constructor (secret: string) {
    this.secret = secret
  }

  async encrypt (value: string): Promise<string | null> {
    const accessToken = jwt.sign({ id: value }, this.secret)
    return accessToken
  }
}
