"use client";

import React, { useState } from "react";
import Input from "./Input";
import Selector from "./Selector";
import TextArea from "./Textarea";
import "./content.css";

function Content() {
  const [tablecount, setTablecount] = useState([1]);
  const [viewItem, setViewItem] = useState(false);
  return (
    <div className="w-full flex justify-center items-center gap-4 flex-col relative min-h-[200px]">
      <div className="flex flex-col lg:flex-row w-full gap-2">
        <Input placeholder={"token address"} label={"PAST TOKEN ADDRESS"} />
        {!viewItem && (
          <div
            className={`anireverse mt-5 bg-[#0075FF] text-white w-full lg:w-[200px] relative z-30 cursor-pointer py-3 font-semibold responsive-inside-switch-text text-base rounded-[36px] flex items-center justify-center`}
            onClick={() => setViewItem(true)}
          >
            Create Presale
          </div>
        )}
      </div>
      {viewItem && (
        <div className="launch w-full flex justify-center items-center gap-4 flex-col relative">
          <Input
            placeholder={"0.0"}
            label={"HOW MANY TOKEN ARE UP FOR PRESALE ?"}
            afterLabel={
              "NOTE: IF YOUR TOKEN HAS TAXES PLEASE WHITELIST OUR PRESALE CONTRACT 0x75accab733cc1ddf99b9a8613f6dc29b350c1e13"
            }
          />
          <div className="flex justify-end w-full">BALANCE: 0 ETH</div>
          <Input
            placeholder={"0x0000000000000000000000"}
            label={"Paste RAISE TOKEN ADDRESS (LEAVE EMPTY TO RAISE IN ETH)"}
          />
          <div className="flex-container">
            <Input placeholder={"00"} label={"PRESALE RATE (1 ETH)"} />
            <Input
              placeholder={"0"}
              label={"MAX ALLOCATION PER USER (MUST BE ABOVE 0)"}
            />
          </div>
          <div className="flex-container">
            <Input placeholder={"0.0"} label={"SOFTCAP"} tag={"ETH"} />
            <div className="flex-container">
              <Input placeholder={"0.0"} label={"Total Hardcap"} tag={"ETH"} />
              <Input placeholder={"0"} label={"Platform Hardcap"} tag={"ETH"} />
            </div>
          </div>
          <div className="flex-container">
            <Input placeholder={"00"} label={"Total tickets"} />
            <Input placeholder={"00"} label={"Initial Mcap"} />
            <Input placeholder={"00"} label={"Project valuation"} />
          </div>
          <div className="flex-container">
            <div className="flex justify-center items-start flex-col w-full">
              <label className="ml-2 text-lg mb-2">Subscription Period</label>
              <div className="flex-container">
                <Input placeholder={"00"} label={"START DATE"} type="date" />
                <Input placeholder={"00"} label={"END DATE"} type="date" />
              </div>
            </div>
            <div className="flex justify-center items-start flex-col w-full">
              <label className="ml-2 text-lg mb-2">Snapshot Period</label>
              <div className="flex-container">
                <Input placeholder={"00"} label={"START DATE"} type="date" />
                <Input placeholder={"00"} label={"END DATE"} type="date" />
              </div>
            </div>
          </div>
          <div className="flex-container">
            <div className="flex justify-center items-start flex-col w-full">
              <label className="ml-2 text-lg mb-2">Lottery Period</label>
              <div className="flex-container">
                <Input placeholder={"00"} label={"START DATE"} type="date" />
                <Input placeholder={"00"} label={"END DATE"} type="date" />
              </div>
            </div>
            <div className="flex justify-center items-start flex-col w-full">
              <label className="ml-2 text-lg mb-2">Redemption Period</label>
              <div className="flex-container">
                <Input placeholder={"00"} label={"START DATE"} type="date" />
                <Input placeholder={"00"} label={"END DATE"} type="date" />
              </div>
            </div>
          </div>
          <div className="flex-container">
            <Selector
              options={["REFUND", "BURN"]}
              label={"WHAT TO DO WITH UNSOLD TOKENS ?"}
            />
            <Selector
              options={["No", "Daily", "Weekly", "Monthly", "Yearly"]}
              label={"VESTING ?"}
            />
          </div>
          <div className="flex-container">
            <Input placeholder={""} label={"PROJECT NAME"} />
            <Input placeholder={""} label={"PROJECT WEBSITE"} />
          </div>
          <div className="flex-container">
            <Input placeholder={""} label={"PROJECT LOGO"} />
            <Input
              placeholder={""}
              label={"TWITTER (use # if not applicable)"}
            />
          </div>
          <div className="flex-container">
            <Input
              placeholder={""}
              label={"TELEGRAM (use # if not applicable)"}
            />
            <Input
              placeholder={""}
              label={"MEDIUM (use # if not applicable)"}
            />
          </div>
          <div className="flex-container">
            <Input
              placeholder={""}
              label={"DISCORD (use # if not applicable)"}
            />
            <Input placeholder={""} label={"PROJECT SALE SLUG"} />
          </div>

          <div className="flex-container">
            <div className="flex justify-start items-start w-full flex-col gap-3">
              <label className="ml-2 text-lg mb-2">Key Features</label>
              <Input
                placeholder={"Enter title"}
                label={"Title  (use # if not applicable)"}
              />
              <TextArea
                placeholder={"Enter points"}
                label={"Points (use # if not applicable)"}
              />
            </div>
            <div className="flex justify-start items-start w-full flex-col gap-3">
              <label className="ml-2 text-lg mb-2">Market Traction</label>
              <Input
                placeholder={"Enter title"}
                label={"Title  (use # if not applicable)"}
              />
              <TextArea
                placeholder={"Enter points"}
                label={"Points (use # if not applicable)"}
              />
            </div>
            <div className="flex justify-start items-start w-full flex-col gap-3">
              <label className="ml-2 text-lg mb-2">Token Utility</label>
              <Input
                placeholder={"Enter title"}
                label={"Title  (use # if not applicable)"}
              />
              <TextArea
                placeholder={"Enter points"}
                label={"Points (use # if not applicable)"}
              />
            </div>
            <div className="flex justify-start items-start w-full flex-col gap-3">
              <label className="ml-2 text-lg mb-2">Revenue</label>
              <Input
                placeholder={"Enter title"}
                label={"Title  (use # if not applicable)"}
              />
              <TextArea
                placeholder={"Enter points"}
                label={"Points (use # if not applicable)"}
              />
            </div>
          </div>

          <div className="flex-container">
            <div className="flex justify-center items-start flex-col w-full gap-3">
              <label className="ml-2 text-lg mb-2">Token Metrics</label>
              <div className="flex gap-3">
                <button
                  className="button anireverse"
                  onClick={() => {
                    setTablecount((prev) => [...prev, 1]);
                  }}
                >
                  Add more field
                </button>
                {tablecount.length !== 1 && (
                  <button
                    className="button anireverse"
                    onClick={() => {
                      setTablecount((prev) => {
                        const newState = [...prev];
                        newState.pop();
                        return newState;
                      });
                    }}
                  >
                    Remove field
                  </button>
                )}
              </div>
              {tablecount.map((_, i) => (
                <TableContents key={i} />
              ))}
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-center">
              NOTE: YOU WILL BE ABLE TO MANAGE WHITELISTED USERS ONLY AFTER
              PRE-SALE IS CREATED.
            </h1>
          </div>
          <div
            className={`anireverse mt-5 bg-[#0075FF] text-white w-[300px] relative z-30 cursor-pointer py-3 font-semibold responsive-inside-switch-text text-base rounded-[36px] flex items-center justify-center`}
          >
            Create Presale
          </div>
        </div>
      )}
    </div>
  );
}

export default Content;

<Input placeholder={""} label={""} />;

<div className="flex-container"></div>;

const TableContents = () => {
  return (
    <div className="flex-container">
      <Input placeholder={"00"} label={"Allocation"} />
      <Input placeholder={"00"} label={"Allocation %"} />
      <Input placeholder={"00"} label={"Amount"} />
      <Input placeholder={"00"} label={"Price"} />
      <Input placeholder={"00"} label={"Raise"} />
      <Input placeholder={"00"} label={"TGE %"} />
      <Input placeholder={""} label={"Vesting"} />
    </div>
  );
};
