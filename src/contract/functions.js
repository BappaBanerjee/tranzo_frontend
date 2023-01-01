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
            return [];
        }

    } else {
        alert("Install Metamask!!");
    }
}

export const transactAmount = async (data) => {
    console.log(data);
    if (typeof window.ethereum !== "undefined") {
        await requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contract_address, contract_abi, signer);

        try {
            const transaction = await contract.transactAmount(
                data.receiver,
                data.message,
                { value: ethers.utils.parseEther(data.amount) }
            );
            const status = {
                status: 200,
                res: transaction
            }
            return status;
        } catch (error) {
            console.log(error);
            const status = {
                status: 404,
                res: error
            }
            return status;
        }
    } else {
        const status = {
            status: 404,
            res: {
                code: "No Wallet Found!!"
            }
        }
        return status;
    }
}



