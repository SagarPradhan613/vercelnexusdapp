"use client";

import React, { useState } from "react";
import Input from "./Input";
import Selector from "./Selector";
import TextArea from "./Textarea";
import "./content.css";

function Content() {
  const [tablecount, setTablecount] = useState([1]);
  const [viewItem, setViewItem] = useState(false);
  const [vesting, setVesting] = useState("No");
  const [token, setToken] = useState("");
  const [features, setFeatures] = useState([1]);
  const [tranction, setTranction] = useState([1]);
  const [utility, setUtility] = useState([1]);
  const [revenue, setRevenue] = useState([1]);
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
              <TextArea
                placeholder={
                  features.includes(5) ? "Enter points" : "Enter text"
                }
                label={"Description"}
                controller={features}
              />
              <OptionSelector state={features} setState={setFeatures} />
            </div>
            <div className="flex justify-start items-start w-full flex-col gap-3">
              <label className="ml-2 text-lg mb-2">Market Traction</label>
              <TextArea
                placeholder={
                  tranction.includes(5) ? "Enter points" : "Enter text"
                }
                label={"Description"}
                controller={tranction}
              />
              <OptionSelector state={tranction} setState={setTranction} />
            </div>
          </div>
          <div className="flex-container">
            <div className="flex justify-start items-start w-full flex-col gap-3">
              <label className="ml-2 text-lg mb-2">Token Utility</label>
              <TextArea
                placeholder={
                  utility.includes(5) ? "Enter points" : "Enter text"
                }
                label={"Description"}
                controller={utility}
              />
              <OptionSelector state={utility} setState={setUtility} />
            </div>
            <div className="flex justify-start items-start w-full flex-col gap-3">
              <label className="ml-2 text-lg mb-2">Revenue</label>
              <TextArea
                placeholder={
                  revenue.includes(5) ? "Enter points" : "Enter text"
                }
                label={"Description"}
                controller={revenue}
              />
              <OptionSelector state={revenue} setState={setRevenue} />
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

const OptionSelector = ({ state, setState }) => {
  const handle = (key) => {
    let values = [...state];

    // Check if the key being added is 1 or 4
    if (key === 1 || key === 4) {
      // Remove the opposite value if present
      const oppositeKey = key === 1 ? 4 : 1;
      values = values.filter((value) => value !== oppositeKey);

    }

    if (values.includes(key)) {
      values = values.filter((value) => value !== key);
      setState(values);
    } else {
      setState([...values, key]);
    }
  };

  const check = (key) => {
    return state.includes(key);
  };

  return (
    <div className="flex-container">
      <button
        className={`${check(1) ? "button" : "button-disabled"} anireverse`}
        onClick={() => handle(1)}
      >
        Text
      </button>
      <button
        className={`${check(2) ? "button" : "button-disabled"} anireverse`}
        onClick={() => handle(2)}
      >
        Bold
      </button>
      <button
        className={`${check(3) ? "button" : "button-disabled"} anireverse`}
        onClick={() => handle(3)}
      >
        Italic
      </button>
      <button
        className={`${check(4) ? "button" : "button-disabled"} anireverse`}
        onClick={() => handle(4)}
      >
        Numbering
      </button>
      <button
        className={`${check(5) ? "button" : "button-disabled"} anireverse`}
        onClick={() => handle(5)}
      >
        Bullet Points
      </button>
    </div>
  );
};

