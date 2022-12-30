import { ethers } from "ethers";
import { contract_address, contract_abi } from "./constants";

async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
}


export const getAllTransaction = async () => {
    if (typeof window.ethereum !== "undefined") {
        await requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(contract_address, contract_abi, provider);
        try {
            const data = await contract.getAllTransaction();
            return data;
        } catch (error) {
            alert('No transaction as of now!')
            return [];
        }

    } else {
        alert("Install Metamask!!");
    }
}

export const addToBlockchain = async (data) => {
    console.log(data);
    if (typeof window.ethereum !== "undefined") {

        await requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        // console.log(signer);

        const contract = new ethers.Contract(contract_address, contract_abi, signer);
        // const parsedAmount = ethers.utils.parseEther(data.amount);

        const transaction = await contract.addToBlockchain(
            data.receiver,
            data.amount,
            data.message,
            data.keyword,
            { value: ethers.utils.parseEther(data.amount) }
        );

        // await transaction.wait();
        console.log(transaction);
    } else {
        console.log("install metamask u fellow")
    }
}



