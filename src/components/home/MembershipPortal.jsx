import React from "react";

const MembershipPortal = () => {
  return (
    <div className="sustainable-living my-8 bg-zinc-50 lg:p-16">
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/ghk090119covercleaning-002-2-1588899853.png?crop=0.616xw:0.346xh;0.384xw,0.363xh&resize=1200:*"
        alt="membership-portal-img"
      />
      <div className="flex flex-col justify-center items-center m-4">
        <p className="font-sans text-xs lg:text-base font-bold">
          Membership+ Portal
        </p>
        <h1 className="font-serif lg:text-4xl font-bold text-center">
          Access All Your Membership Perks here
        </h1>
      </div>
    </div>
  );
};

export default MembershipPortal;
