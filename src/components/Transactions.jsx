import React, { useEffect, useState } from 'react';
import { getAllTransaction } from '../contract/functions';
import Table from 'react-bootstrap/Table';
import './css/tranzo_transaction.css'
import { ethers } from 'ethers';


const Transactions = () => {
    const [transactions, setTransactions] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const test = async () => {
        const data = await getAllTransaction();
        setTransactions(data);
        setIsLoading(false);
    }

    useEffect(() => {
        test();
    }, []);

    return (
        <div className="transaction_lists">
            {
                isLoading ?
                    <h1>Fetching Data!!! Please Wait.....</h1>
                    :
                    transactions.length === 0 ?
                        <h1>No transaction Noted as of now, in the chain!!</h1>
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
                                    const amount = ethers.utils.formatEther(value.amount);
                                    return (
                                        <tr className='transaction_details'>
                                            <td>{value.sender}</td>
                                            <td>{value.receiver}</td>
                                            <td>{amount} eth</td>
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