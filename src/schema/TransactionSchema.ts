export type TransactionSchema = {
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