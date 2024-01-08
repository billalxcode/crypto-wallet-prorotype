export type TransactionSchema = {
    id: string,
    tx_hash: string,
    status: string,
    block: number,
    timestamp: number,
    action: string,
    from: string,
    to: string,
    value: number,
    fee: number,
    gasPrice: number
}