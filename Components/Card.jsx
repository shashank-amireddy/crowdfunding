import React from "react";

const Card = ({allcampaign, setOpenModel, setDonate, title }) => {
  console.log("titlee");
  console.log(allcampaign);
  console.log("title");
  const daysLeft = (deadline) => {
    const today = new Date();
    const end = new Date(deadline);
    const diff = end - today;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days;
  };

  return(
    <div className="px-4 py-16 mx-auto smn:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <p className="py-16 text-2xl font-bold leading-5"> {title} </p>
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {allcampaign?.map((campaign,i) => (
          <div onClick={() => (setDonate(campaign), setOpenModel(true))} key={i+1} className="cursor-pointer border overflow-hidden transition-shadow duration-300 bg-white rounded" >
            <img src="https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2&amp;dpr=3&amp;h=750&amp;w=1260" alt="" className="object-cover w-full h-64 rounded" />
            <div className="py-5 pl-2">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                Days Left: {daysLeft(campaign.deadline)}
              </p>
              <a href="/" className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                <p className="text-2xl font-bold leading-5">{campaign.title}</p>
              </a>
              <p className="mb-4 text-gray-700">
                {campaign.description}
              </p>
              <div className="flex space-x-4">
                <p className="font-semibold">Target: {campaign.target} ETH</p>
                <p className="font-semibold">
                  Raised: {campaign.amountCollected} ETH
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
