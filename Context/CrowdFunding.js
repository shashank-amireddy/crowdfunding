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

    /**
     * Create a new campaign.
     * @param {Object} campaign - The campaign details.
     * @param {string} campaign.title - The title of the campaign.
     * @param {string} campaign.description - The description of the campaign.
     * @param {string} campaign.amount - The target amount for the campaign.
     * @param {string} campaign.deadline - The deadline for the campaign.
     */
    const createCampaign = async (campaign) => {
        const {title, description, amount, deadline} = campaign;
        const web3Modal = new Wenb3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);

        console.log(currentAccount);

        try{
            const transaction = await contract.createCampaign(
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
    
    /**
     * Get all campaigns.
     * @returns {Array} - An array of campaign objects.
     */
    const getCampaigns = async () => {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);

        const campaigns = await contract.getCampaigns();
        // console.log(campaigns);
        const parsedCampaigns = campaigns.map((campaign,i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
            pId: i,
        }));
        // console.log(parsedCampaigns);
        return parsedCampaigns;
    };

    /**
     * Get campaigns created by the current user.
     * @returns {Array} - An array of campaign objects created by the current user.
     */
    const getUserCampaigns = async() => {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);

        const allCampaigns = await contract.getCampaigns();
        const accounts = await window.ethereum.request({method: "eth_accounts"});
        const currentUser = accounts[0];

        const filteredCampaigns = allCampaigns.filter((campaign) => campaign.owner === "Oxf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");

        const userData = filteredCampaigns.map((campaign,i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
            pId: i,
        }));

        return userData;
    };

    /**
     * Donate to a campaign.
     * @param {string} pId - The ID of the campaign.
     * @param {string} amount - The amount to donate.
     * @returns {Object} - The transaction data.
     */
    const donate = async (pId, amount) => {
        const web3Modal = new Wenb3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);

        const campaignData = await contract.donateToCampaign(pId, {
            value: ethers.utils.parseUnits(amount),
        });

        await campaignData.wait();
        location.reload();

        return campaignData;
    };

    /**
     * Get donations for a campaign.
     * @param {string} pId - The ID of the campaign.
     * @returns {Array} - An array of donation objects.
     */
    const getDonations = async (pId) => {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);

        const donations = await contract.getDonors(pId);
        const numberOfDonations = donations[0].length;

        const parsedDonations = [];

        for(let i =0; i< numberOfDonations; i++){
            parsedDonations.push({
                donor: donations[0][i],
                amount: ethers.utils.formatEther(donations[1][i].toString()),
            });
        }

        return parsedDonations;
    }

    /**
     * Check if the wallet is connected.
     * @returns {boolean} - True if the wallet is connected, false otherwise.
     */
    const checkIfWalletIsConnected = async () => {
        try{
            if(!window.ethereum){
                return setOpenError(true), setError("Please install MetaMask");
            }

            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });

            if(accounts.length){
                setCurrentAccount(accounts[0]);
                return true;
            } else {
                console.log("Please connect your wallet");
            }
        } catch (error){
            console.log("Error connecting wallet", error);
        }
    };

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    /**
     * Connect the wallet.
     */
    const connectWallet = async () => {
        try{
            if(!window.ethereum){
                return setOpenError(true), setError("Please install MetaMask");
            }

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });

            setCurrentAccount(accounts[0]);
        } catch (error){
            console.log("Error connecting wallet", error);
        }
    };

    return (
        <CrowdFundingContext.Provider value={{
            titleData,
            currentAccount,
            createCampaign,
            getCampaigns,
            getUserCampaigns,
            donate,
            getDonations,
            connectWallet,
        }}>
            {children}
        </CrowdFundingContext.Provider>
    );
};
