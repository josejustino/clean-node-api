import { MongoClient } from 'mongodb'

export const MongoHelper = {
  client: MongoClient,
  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri)
  },

  async disconnect () {
    await this.client.close()
  }
}
