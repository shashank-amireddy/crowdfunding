import React, {useEffect, useContext ,useState}from "react";

import { CrowdFundingContext } from "../Context/CrowdFunding";
import {Hero, Card, PopUp} from "../components";

const index = () => {
  const {
    titleDtata,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext);

  const [allcampaign, setAllCampaign] = useState();
  const [userCampaign, setUserCampaign] = useState();

  useEffect(() => {
    const getCampaignsData = getCampaigns();
    const userCampaignData = getUserCampaigns();
    return async () => {
      const allData = await getCampaignsData;
      const userData = await userCampaignData;
      setAllCampaign(allData);
      setUserCampaign(userData);
    };
  }, []);

  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();

  console.log(donateCampaign);
  console.log(allcampaign);
  // console.log("returnedData");
  return (
    <>
      <Hero titleDtata={titleDtata} createCampaign={createCampaign}/>

      <Card titel="All listed Campaigns" allcampaign={allcampaign} setOpenModel={setOpenModel} setDonate={setDonateCampaign} />
      
      {openModel && (
          <PopUp setOpenModel={setOpenModel} getDonations={getDonations} donate={donateCampaign} donateFunction={donate}/>
        )}
    </>
  );
};

export default index;