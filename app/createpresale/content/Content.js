"use client";

import React, { useState } from "react";
import Input from "./Input";
import Selector from "./Selector";
import TextArea from "./Textarea";
import "./content.css";
import { features } from "process";

function Content() {
  const [tablecount, setTablecount] = useState([1]);
  const [viewItem, setViewItem] = useState(false);
  const [vesting, setVesting] = useState("No");
  const [token, setToken] = useState("");
  
  const [features, setFeatures] = useState([]);
  const [tranction, setTranction] = useState([]);
  const [utility, setUtility] = useState([]);
  const [revenue, setRevenue] = useState([]);

  const [featuresText, setFeaturesText] = useState("");
  const [tranctionText, setTranctionText] = useState("");
  const [utilityText, setUtilityText] = useState("");
  const [revenueText, setRevenueText] = useState("");

  const [featuresType, setFeaturesType] = useState("Title");
  const [tranctionType, setTranctionType] = useState("Title");
  const [utilityType, setUtilityType] = useState("Title");
  const [revenueType, setRevenueType] = useState("Title");

  return (
    <div className="w-full flex justify-center items-center gap-4 flex-col relative min-h-[200px]">
      <div className="flex flex-col lg:flex-row w-full gap-2">
        <Input
          placeholder={"token address"}
          label={"PAST TOKEN ADDRESS"}
          value={token}
          setValue={setToken}
        />
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
              setState={setVesting}
            />
          </div>
          {vesting !== "No" && (
            <div className="flex-container">
              <Input placeholder={"0"} label={"Initial Vesting Percentage"} />
              <Input placeholder={"0"} label={"Regular Vesting Percentage"} />
            </div>
          )}

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
              <TextCreator
                type={featuresType}
                setType={setFeaturesType}
                setSave={setFeatures}
                text={featuresText}
                setText={setFeaturesText}
              />
            </div>
            <div className="flex justify-start items-start w-full flex-col gap-3">
              <label className="ml-2 text-lg mb-2">Market Traction</label>
              <TextCreator
                type={tranctionType}
                setType={setTranctionType}
                setSave={setTranction}
                text={tranctionText}
                setText={setTranctionText}
              />
            </div>
          </div>
          <div className="flex-container">
            <div className="flex justify-start items-start w-full flex-col gap-3">
              <label className="ml-2 text-lg mb-2">Token Utility</label>
              <TextCreator
                type={utilityType}
                setType={setUtilityType}
                setSave={setUtility}
                text={utilityText}
                setText={setUtilityText}
              />
            </div>
            <div className="flex justify-start items-start w-full flex-col gap-3">
              <label className="ml-2 text-lg mb-2">Revenue</label>
              <TextCreator
                type={revenueType}
                setType={setRevenueType}
                setSave={setRevenue}
                text={revenueText}
                setText={setRevenueText}
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

const handleSave = (setSave, type, text, setText, save) => {
  if (text.length === 0) return false;
  setSave((prev) => [...prev, { [type]: text }]);
  setText("");
};

const TextCreator = ({ type, setType, setSave, text, setText }) => {
  return (
    <div className="flex flex-col w-full">
      <TextArea
        placeholder={`Enter ${type}`}
        label={type}
        value={text}
        setValue={setText}
      />
      <div className="flex-container">
        <Selector
          options={["Title", "Text", "Points"]}
          label={"Type"}
          setState={setType}
        />
        <button
          className={`w-1/2 mt-5 button anireverse`}
          onClick={() => handleSave(setSave, type, text, setText)}
        >
          Enter more
        </button>
      </div>
    </div>
  );
};

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
