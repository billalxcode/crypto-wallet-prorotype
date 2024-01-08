import { TransactionSchema } from "src/schema/TransactionSchema"

const Transactions: Array<TransactionSchema> = [
    {
        tx_hash: "0xb123c41c20f69a126005175ce3b7d304df045ca984ff3af54c525a63c0dadee6",
        status: "success",
        block: 18953586,
        timestamp: 1221,
        action: "transfer",
        from: "0x88c6C46EBf353A52Bdbab708c23D0c81dAA8134A",
        to: "0x42A93A9F5CFDa54716c414b6EAF07Cf512F46eAD",
        value: 0.021896967331966842,
        gasPrice: 32,
        fee: 0.00080
    }
]

export default Transactions