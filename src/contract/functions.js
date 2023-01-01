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

        // console.log(signer);

        // ethers.utils.parseEther( value ) ⇒ BigNumbersource
        // The equivalent to calling parseUnits(value, "ether").

        const contract = new ethers.Contract(contract_address, contract_abi, signer);
        // const parsedAmount = ethers.utils.parseEther("0.5");
        let amount = data.amount.toString();
        console.log(data.amount.toString());

        try {
            const transaction = await contract.transactAmount(
                data.receiver,
                data.message,
                { value: ethers.utils.parseEther(data.amount) }
            );
            // await transaction.wait();
            console.log(transaction);
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



