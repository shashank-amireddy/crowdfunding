import React, {useState, useEffect} from "react";
import Wenb3Modal from "web3modal";
import { ethers } from "ethers";

import { CrowdFundingAbi, CrowdFundingAddress } from "./contants";

const fetchContract = (SignerOrProvider) => 
    new ethers.Contract(CrowdFundingAddress, CrowdFundingAbi, SignerOrProvider);

export const CrowdFundingContext = React.createContext();

export const CrowdFundingProvider = ({children}) => {
    const titleData = "Crowd Funding Contract";
    const [currentAccount, setCurrentAccount] = useState("");

    const createCampaign = async (campaign) => {
        const {title, description, amount, deadline} = campaign;
        const web3Modal = new Wenb3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);

        console.log(currentAccount);

        try{
            const transaction = await ConstructorFragment.createCmapaign(
                currentAccount,
                title,
                description,
                ethers.utils.parseUnits(amount,18),
                new Date(deadline).getTime() 
            );
            await transaction.wait();

            console.log("contract call successful", transaction);
        } catch (error){
            console.log("contract call failure", error);
        }
    };
    