import { Connection, createConnection, getConnectionOptions } from 'typeorm'

export default async function (): Promise<Connection> {
    const defaultOptions = await getConnectionOptions()

    return createConnection(defaultOptions)
}