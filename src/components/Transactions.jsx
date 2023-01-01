import React, { useEffect, useState } from 'react';
import { getAllTransaction } from '../contract/functions';
import Table from 'react-bootstrap/Table';
import './css/tranzo_transaction.css'


const Transactions = () => {
    const [transactions, setTransactions] = useState([])

    const test = async () => {
        const data = await getAllTransaction();
        setTransactions(data);
    }

    useEffect(() => {
        test();
    }, []);

    return (
        <div className="transaction_lists">
            {
                transactions.length === 0 ?
                    <h1>No Such transaction as of Noted as of now in the chain!!</h1>
                    :
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Sender</th>
                                <th>Receiver</th>
                                <th>Value</th>
                                <th>Message</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((value) => {
                                const blockTime = value.timestamp.toNumber();
                                const time = new Date(blockTime * 1000);
                                return (
                                    <tr className='transaction_details'>
                                        <td>{value.sender}</td>
                                        <td>{value.receiver}</td>
                                        <td>{value.amount.toNumber()}</td>
                                        <td>{value.message}</td>
                                        <td>{time.getDate() + '/' + (time.getMonth() + 1) + '/' + time.getFullYear()}</td>
                                    </tr>
                                )
                            }
                            )}
                        </tbody>
                    </Table>
            }

        </div>
    );
};

export default Transactions;