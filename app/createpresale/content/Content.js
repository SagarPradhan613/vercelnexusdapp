"use client";

import React, { useState } from "react";
import Input from "./Input";
import Selector from "./Selector";
import TextArea from "./Textarea";
import "./content.css";
import { features } from "process";
import axios from "axios";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, IProvider, WEB3AUTH_NETWORK } from "@web3auth/base";
import { useEffect } from "react";
 
function Content() {
  const [tablecount, setTablecount] = useState([1]);
  const [viewItem, setViewItem] = useState(false); 
  const [token, setToken] = useState("");
  
  const clientId = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENTID
 
  const [features, setFeatures] = useState([]);
  const [tranction, setTranction] = useState([]);
  const [utility, setUtility] = useState([]);
  const [revenue, setRevenue] = useState([]);
  const [balance,setBalance] = useState(0) 

  const [featuresText, setFeaturesText] = useState("");
  const [tranctionText, setTranctionText] = useState("");
  const [utilityText, setUtilityText] = useState("");
  const [revenueText, setRevenueText] = useState("");

  const [featuresType, setFeaturesType] = useState("Title");
  const [tranctionType, setTranctionType] = useState("Title");
  const [utilityType, setUtilityType] = useState("Title");
  const [revenueType, setRevenueType] = useState("Title");
  const [errorText, setErrorText] = useState("");
  
  const [raiseToken, setRaiseToken] = useState("");
  const [presaleRate, setPresaleRate] = useState("");
  const [maxAllocation, setMaxAllocation] = useState("");
  const [softMarketCap, setSoftMarketCap] = useState("");
  const [totalHardCap, setTotalHardCap] = useState("");
  const [platformCap, setPlatformCap] = useState("");
  const [totalTickets, setTotalTickets] = useState("");
  const [initialMcap, setInitialMcap] = useState("");
  const [projectValuation, setProjectValuation] = useState("");
  const [subscriptionStartDate, setSubscriptionStartDate] = useState("");
  const [subscriptionEndDate, setSubscriptionEndDate] = useState("");
  const [snapshotStartDate, setSnapshotStartDate] = useState("");
  const [snapshotEndDate, setSnapshotEndDate] = useState("");
  const [lotteryStartDate, setLotteryStartDate] = useState("");
  const [lotteryEndDate, setLotteryEndDate] = useState("");
  const [redemptionStartDate, setRedemptionStartDate] = useState("");
  const [redemptionEndDate, setRedemptionEndDate] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectWebsite, setProjectWebsite] = useState("");
  const [projectLogo, setProjectLogo] = useState("");
  const [projectTwitter, setProjectTwitter] = useState("");
  const [projectTelegram, setProjectTelegram] = useState("");
  const [projectMedium, setProjectMedium] = useState("");
  const [projectDiscord, setProjectDiscord] = useState("");
  const [projectSlug, setProjectSlug] = useState("");
  const [receiverWallet, setReceiverWallet] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  
  const [allocation, setAllocation] = useState([]);
  const [allocationPer, setAllocationPer] = useState([]);
  const [amount, setAmount] = useState([]);
  const [price, setPrice] = useState([]);
  const [raise, setRaise] = useState([]);
  const [tgeper, settgeper] = useState([]);
  const [vesting, setVesting] = useState([]);

  const [tokenInfo, setTokenInfo] = useState({});

  const API_URL = process.env.NEXT_PUBLIC_API_URL ;
  const access_token = localStorage.getItem("access_token");

  // useEffect(() => {
  //   if(!access_token){
  //     window.location.href = "/" ; 
  //   }
  // },[])

  useEffect(() => {
    if(raiseToken == "0x0000000000000000000000000000000000000000" || raiseToken == ""){
      setTokenInfo({
        symbol: "ETH",

      })
    }else{
      fetchRaiseToken()
    }
  },[raiseToken])

  const handleAllocation = (e,i) => {
    let _temp = allocation ; 
    _temp[i] = e.target.value ; 
    setAllocation(_temp)
  }
  const handleAllocationPer = (e,i) => {
    let _temp = allocationPer ; 
    _temp[i] = e.target.value ; 
    setAllocationPer(_temp)
  }
  const handleAmount = (e,i) => {
    let _temp = amount ; 
    _temp[i] = e.target.value ; 
    setAmount(_temp)
  }
  const handlePrice = (e,i) => {
    let _temp = price ; 
    _temp[i] = e.target.value ; 
    setPrice(_temp)
  }
  const handleRaise = (e,i) => {
    let _temp = raise ; 
    _temp[i] = e.target.value ; 
    setRaise(_temp)
  }

  const handleTgeper = (e,i) => {
    let _temp = tgeper ; 
    _temp[i] = e.target.value ; 
    settgeper(_temp)
  }

  const handleVesting = (e,i) => {
    let _temp = vesting ; 
    _temp[i] = e.target.value ; 
    setVesting(_temp)
  }

  const fetchRaiseToken = () => {
    // setViewItem(false);
    setErrorText(false);

    try {
      let config = {
        method: "get",
        url: API_URL + `/get/token/${raiseToken}?token=${access_token}`,
        maxBodyLength: Infinity,
        headers: {
          "Content-Type": "application/json"
        }
      };

      axios
        .request(config)
        .then((response) => {
          if (response.data.status === "OK") {
            //  setViewItem(true);
             setTokenInfo(response.data.data)
          }
          if (response.data.status === "NOT OK") {
            setErrorText(response.data.message)
          }
        })
        .catch((error) => {
          console.log("axios", error);
        });
    } catch (e) {
      console.log(e);

    }
  }



  const fetchToken = () => {
    setViewItem(false);
    setErrorText(false);

    try {
      let config = {
        method: "get",
        url: API_URL + `/get/token/${token}?token=${access_token}`,
        maxBodyLength: Infinity,
        headers: {
          "Content-Type": "application/json"
        }
      };

      axios
        .request(config)
        .then((response) => {
          if (response.data.status === "OK") {
             setViewItem(true);
            //  setTokenInfo(response.data.data)
             
          }
          if (response.data.status === "NOT OK") {
            setErrorText(response.data.message)
          }
        })
        .catch((error) => {
          console.log("axios", error);
        });
    } catch (e) {
      console.log(e);

    }
  }

  const createProject = () => {
 
    setErrorText(false);

    try {
      let config = {
        method: "post",
        url: API_URL + `/create/project/`,
        maxBodyLength: Infinity,
        headers: {
          "Content-Type": "application/json",
          "x-access-token": access_token,
        },
        data: {
          tokenAmount, token, receiverWallet ,raiseToken, presaleRate, maxAllocation, softMarketCap, totalHardCap, platformCap , totalTickets , initialMcap, projectValuation, subscriptionStartDate, subscriptionEndDate, snapshotStartDate, snapshotEndDate, lotteryStartDate, lotteryEndDate, redemptionStartDate, redemptionEndDate, projectName, projectWebsite, projectLogo, projectTwitter, projectTelegram, projectMedium, projectDiscord, projectSlug, allocation, allocationPer, amount, price, raise, tgeper, vesting, featuresText,tranctionText,utilityText,revenueText
        }
      };

      axios
        .request(config)
        .then((response) => {
          if (response.data.status === "OK") {
              window.location.href = "/launchpad/"+projectSlug
          }
          if (response.data.status === "NOT OK") {
            setErrorText(response.data.message)
          }
        })
        .catch((error) => {
          console.log("axios", error);
        });
    } catch (e) {
      console.log(e);

    }
  }


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
            onClick={() => fetchToken()}
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
            setValue={setTokenAmount}
            value={tokenAmount}
          />
          {/* <div className="flex justify-end w-full">BALANCE: {balance} {tokenInfo?.symbol}</div> */}
          <Input
            placeholder={"0x0000000000000000000000"}
            value={raiseToken}
            setValue={setRaiseToken}
            label={"Paste RAISE TOKEN ADDRESS (LEAVE EMPTY TO RAISE IN ETH)"}
          />

          <Input
            placeholder={"0x0000000000000000000000"}
            value={receiverWallet}
            setValue={setReceiverWallet}
            label={"Paste Receiver Wallet"}
          />

          <div className="flex-container">
            <Input placeholder={"00"} value={presaleRate} setValue={setPresaleRate} label={"Presale Rate"} />
            <Input
              placeholder={"0"}
              value={maxAllocation}
              setValue={setMaxAllocation}
              label={"MAX ALLOCATION PER USER (MUST BE ABOVE 0)"}
            />
          </div>
          <div className="flex-container">
            <Input placeholder={"0.0"}  value={softMarketCap} setValue={setSoftMarketCap}  label={"SOFTCAP"} tag={tokenInfo?.symbol} />
            <div className="flex-container">
              <Input placeholder={"0.0"} value={totalHardCap} setValue={setTotalHardCap} label={"Total Hardcap"} tag={tokenInfo?.symbol} />
              <Input placeholder={"0"}  value={platformCap} setValue={setPlatformCap}  label={"Platform Hardcap"} tag={tokenInfo?.symbol} />
            </div>
          </div>
          <div className="flex-container">
            <Input placeholder={"00"} value={totalTickets} setValue={setTotalTickets} label={"Total tickets"} />
            <Input placeholder={"00"} value={initialMcap} setValue={setInitialMcap} label={"Initial Mcap"} />
            <Input placeholder={"00"} value={projectValuation} setValue={setProjectValuation} label={"Project valuation"} />
          </div>
          <div className="flex-container">
            <div className="flex justify-center items-start flex-col w-full">
              <label className="ml-2 text-lg mb-2">Subscription Period</label>
              <div className="flex-container">
                <Input placeholder={"00"} value={subscriptionStartDate} setValue={setSubscriptionStartDate} label={"START DATE"} type="date" />
                <Input placeholder={"00"} value={subscriptionEndDate} setValue={setSubscriptionEndDate} label={"END DATE"} type="date" />
              </div>
            </div>
            <div className="flex justify-center items-start flex-col w-full">
              <label className="ml-2 text-lg mb-2">Snapshot Period</label>
              <div className="flex-container">
                <Input placeholder={"00"}  value={snapshotStartDate} setValue={setSnapshotStartDate}  label={"START DATE"} type="date" />
                <Input placeholder={"00"}  value={snapshotEndDate} setValue={setSnapshotEndDate}  label={"END DATE"} type="date" />
              </div>
            </div>
          </div>
          <div className="flex-container">
            <div className="flex justify-center items-start flex-col w-full">
              <label className="ml-2 text-lg mb-2">Lottery Period</label>
              <div className="flex-container">
                <Input placeholder={"00"} label={"START DATE"}  value={lotteryStartDate} setValue={setLotteryStartDate}  type="date" />
                <Input placeholder={"00"} label={"END DATE"}  value={lotteryEndDate} setValue={setLotteryEndDate} type="date" />
              </div>
            </div>
            <div className="flex justify-center items-start flex-col w-full">
              <label className="ml-2 text-lg mb-2">Redemption Period</label>
              <div className="flex-container">
                <Input placeholder={"00"} label={"START DATE"}  value={redemptionStartDate} setValue={setRedemptionStartDate} type="date" />
                <Input placeholder={"00"} label={"END DATE"} value={redemptionEndDate} setValue={setRedemptionEndDate} type="date" />
              </div>
            </div>
          </div>
        
          <div className="flex-container">
            <Input placeholder={""} value={projectName} setValue={setProjectName} label={"PROJECT NAME"} />
            <Input placeholder={""} value={projectWebsite} setValue={setProjectWebsite} label={"PROJECT WEBSITE"} />
          </div>
          <div className="flex-container">
            <Input placeholder={""} value={projectLogo} setValue={setProjectLogo}  label={"PROJECT LOGO"} />
            <Input
              placeholder={""}
              value={projectTwitter} setValue={setProjectTwitter} 
              label={"TWITTER (use # if not applicable)"}
            />
          </div>
          <div className="flex-container">
            <Input
              placeholder={""}
              value={projectTelegram} setValue={setProjectTelegram}
              label={"TELEGRAM (use # if not applicable)"}
            />
            <Input
              placeholder={""}
              value={projectMedium} setValue={setProjectMedium}
              label={"MEDIUM (use # if not applicable)"}
            />
          </div>
          <div className="flex-container">
            <Input
              placeholder={""}
              value={projectDiscord} setValue={setProjectDiscord}
              label={"DISCORD (use # if not applicable)"}
            />
            <Input value={projectSlug} setValue={setProjectSlug} placeholder={""} label={"PROJECT SALE SLUG"} />
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
                <TableContents allocation={allocation} handleAllocation={handleAllocation} handleAllocationPer={handleAllocationPer} handleAmount={handleAmount} handlePrice={handlePrice} handleRaise={handleRaise} handleTgeper={handleTgeper} handleVesting={handleVesting} allocationPer={allocationPer} amount={amount} price={price} raise={raise} tgeper={tgeper} vesting={vesting} key={i} />
              ))}
            </div>
          </div>
          {/* <div className="mt-5">
            <h1 className="text-center">
              NOTE: YOU WILL BE ABLE TO MANAGE WHITELISTED USERS ONLY AFTER
              PRE-SALE IS CREATED.
            </h1>
          </div> */}
          <div
            className={`anireverse mt-5 bg-[#0075FF] text-white w-[300px] relative z-30 cursor-pointer py-3 font-semibold responsive-inside-switch-text text-base rounded-[36px] flex items-center justify-center`}
            onClick={createProject}
          >
            Create Presale
          </div>
        </div>
      )}
      {
        errorText &&
        <p>{errorText}</p>
      }
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

const TextCreator = ({ type, setType,label, setSave, text, setText }) => {
  return (
    <div className="flex flex-col w-full">
      <TextArea
        placeholder={`Enter`}
        label={label}
        value={text}
        setValue={setText}
      />
      {/* <div className="flex-container">
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
      </div> */}
    </div>
  );
};

const TableContents = ({allocation,allocationPer,amount,price,raise,tgeper,vesting,key, handleAllocation,handleAllocationPer,handleAmount,handlePrice,handleRaise,handleTgeper,handleVesting}) => {
  return (
    <div className="flex-container">
      <input type="text" placeholder={"00"} onChange={(e) => handleAllocation(e,key)} value={allocation[key]} label={"Allocation"} />
      <input type="text"  placeholder={"00"} onChange={(e) => handleAllocationPer(e,key)} value={allocationPer[key]} label={"Allocation %"} />
      <input type="text"  placeholder={"00"} onChange={(e) => handleAmount(e,key)} value={amount[key]} label={"Amount"} />
      <input type="text"  placeholder={"00"} onChange={(e) => handlePrice(e,key)} value={price[key]} label={"Price"} />
      <input type="text"  placeholder={"00"} onChange={(e) => handleRaise(e,key)} value={raise[key]} label={"Raise"} />
      <input type="text"  placeholder={"00"} onChange={(e) => handleTgeper(e,key)} value={tgeper[key]} label={"TGE %"} />
      <input type="text"  placeholder={""} onChange={(e) => handleVesting(e,key)} value={vesting[key]} label={"Vesting"} />
    </div>
  );
};
