import React, { useEffect, useState } from "react";
import { IInputModalInfo, IWhitelistWallet } from "../../interfaces";
// import { useAdmin } from "../../routes/admin-dashboard";
import toast from "react-hot-toast";
// import {
//   getMerkleRoot,
//   getTotalMinted,
//   isPausedState,
//   isPreSaleState,
//   isPublicSaleState,
//   getBalance,
//   getReavealedURI,
//   togglePause,
//   togglePresale,
//   togglePublicSale,
//   updateMerkleRoot,
//   updateBaseURI,
//   getHiddenURI,
//   withdraw,
//   updateHiddenURI,
// } from "../../utils/interact";
import { ethers } from "ethers";
import { config } from "../../caverConfig";
import Add from "../Icons/Add";
import Cancel from "../Icons/Cancel";
import Member from "../Icons/Member";
import Purse from "../Icons/Purse";
import Star from "../Icons/Star";
import InputModal from "../modal/InputModal";
// import { useConnectWallet } from "@web3-onboard/react";
// import { useAccount } from "../../contexts/AccountContext";
// import {
//   deleteWallet,
//   fetchWallet,
//   getWalletCount,
//   getWhitelist,
// } from "../../api";
import {
  Box,
  Container,
  InputTitle,
  InputWrapper,
  MemberContainer,
  MemberWrapper,
  StatsContainer,
  Title,
  WithdrawBtn,
  Wrapper,
} from "./styles/dashboard";
import StatComponent from "./dashboardComponent/StatComponent";
import ToggleBtnComponent from "./dashboardComponent/ToggleBtnComponent";
import InputComponent from "./dashboardComponent/InputComponent";
import MemberItemComponent from "./dashboardComponent/MemberItemComponent";
import { useAccount } from "../../contexts/AccountContext";

const DashboardComponent = () => {
  // const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  const wallet = useAccount()?.account;
  const [toastOn, setToastOn] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [paused, setPaused] = useState<boolean>(false);
  const [isPreSale, setIsPreSale] = useState<boolean>(false);
  const [isPublicSale, setIsPublicSale] = useState<boolean>(false);
  const [totalSupply, setTotalSupply] = useState<number>(0);
  const [merkleRoot, setMerkleRoot] = useState<string>("loading...");
  const [contractBalance, setContractBalance] = useState<number>(0);
  const [revealedURI, setRevealedURI] = useState<string>("loading...");
  const [hiddenURI, setHiddenURI] = useState<string>("loading...");
  const [text, setText] = useState<string>("");
  const [whitelist, setWhitelist] = useState<IWhitelistWallet[] | []>([]);
  const [whitelistCount, setWhitelistCount] = useState<number>(0);

  const handleClose = () => {
    setText("");
    setIsOpen(false);
  };
  const handleOpen = () => {
    setText("");
    setIsOpen(true);
  };
  const [inputModalInfo, setInputModalInfo] = useState<IInputModalInfo>({
    title: "",
    handleConfirm: (text: string) => {},
    confirmText: "",
  });

  // const ProjectInfo = useAdmin();

  const inputHandlerIsValid = (text: string): boolean => {
    if (!wallet) {
      toast.error("you need to connect your wallet");
      return false;
    }
    if (text.length === 0) {
      toast.error("you need to write something");
      return false;
    }
    return true;
  };

  const handleSetRevealedTokenUri = async (text: string) => {
    if (!inputHandlerIsValid(text)) return false;

    //  TODO:
    // const res = await updateBaseURI({ uri: text, account: wallet! });
    // res.status && setRevealedURI(await getReavealedURI());

    // handleClose();
    setText("");
    return true;
  };

  const handleSetHiddenTokenUri = async (text: string) => {
    if (!inputHandlerIsValid(text)) return false;
    //  TODO:

    // const res = await updateHiddenURI({ uri: text, account: wallet! });
    // res.status && setHiddenURI(await getHiddenURI());

    // handleClose();
    setText("");
    return true;
  };

  const handleSetMerkleRoot = async (text: string) => {
    if (!inputHandlerIsValid(text)) return false;
    //  TODO:

    // const res = await updateMerkleRoot({ root: text, account: wallet! });
    // res.status && setMerkleRoot(await getMerkleRoot());

    // handleClose();
    setText("");
    return true;
  };

  const handleClickWhitelist = async (_wallet: string) => {
    // if (!inputHandlerIsValid()) return false;
    if (!inputHandlerIsValid(_wallet)) return false;

    //오너만 추가할 수 있도록
    //  TODO:

    // const _id = await fetchWallet(_wallet);
    const walletObj: IWhitelistWallet = {
      wallet: _wallet,
      date: { nanoseconds: 123, seconds: 123 },
      id: "_id",
    };
    setWhitelist([walletObj, ...whitelist]);
    setWhitelistCount(whitelistCount + 1);

    // handleClose();
    setText("");
    return true;
  };

  const onClickRevealedTokenUri = () => {
    handleOpen();
    const update = {
      title: "Change Revealed Token URI",
      handleConfirm: handleSetRevealedTokenUri,
      confirmText: "CHANGE",
    };
    setInputModalInfo(update);
  };

  const onClickHiddenTokenUri = () => {
    handleOpen();
    const update = {
      title: "Change Hidden Token URI",
      handleConfirm: handleSetHiddenTokenUri,
      confirmText: "CHANGE",
    };
    setInputModalInfo(update);
  };

  const onClickMerkleRoot = () => {
    handleOpen();
    const update = {
      title: "Change Merkle Root",
      handleConfirm: handleSetMerkleRoot,
      confirmText: "CHANGE",
    };
    setInputModalInfo(update);
  };

  const onClickAddWhitelist = () => {
    handleOpen();
    const update = {
      title: "Add Whitelist Wallet",
      handleConfirm: handleClickWhitelist,
      confirmText: "Add",
    };
    setInputModalInfo(update);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const onClickTogglePause = async () => {
    try {
      setToastOn(true);
      const fn = async () => {
        //  TODO:
        // const res = await togglePause(wallet!);
        // res.status && setPaused(await isPausedState());
      };
      const options = {
        loading: "On Process",
        success: "Done!",
        error: "Failed.",
      };

      await toast.promise(fn(), options);
      setToastOn(false);
    } catch (error) {
      console.error(error);
      setToastOn(false);
    }
  };
  const onClickTogglePreSale = async () => {
    setToastOn(true);
    try {
      const fn = async () => {
        //  TODO:
        // const res = await togglePresale(wallet!);
        // res.status && setIsPreSale(await isPreSaleState());
      };
      const options = {
        loading: "On Process",
        success: "Done!",
        error: "Failed.",
      };

      await toast.promise(fn(), options);
      setToastOn(false);
    } catch (error) {
      console.error(error);
      setToastOn(false);
    }
  };

  const onClickTogglePublic = async () => {
    setToastOn(true);

    try {
      const fn = async () => {
        //  TODO:
        // const res = await togglePublicSale(wallet!);
        // res.status && setIsPublicSale(await isPublicSaleState());
      };
      const options = {
        loading: "On Process",
        success: "Done!",
        error: "Failed.",
      };

      await toast.promise(fn(), options);
      setToastOn(false);
    } catch (error) {
      console.error(error);
      setToastOn(false);
    }
  };

  const onClickWithdraw = async () => {
    setToastOn(true);

    try {
      const fn = async () => {
        //  TODO:

        // const res = await withdraw();
        // if (!res.status) return;
        // const _ether: string = ethers.utils.formatEther(await getBalance());
        setContractBalance(0);
      };
      const options = {
        loading: "On Process",
        success: "Done!",
        error: "Failed.",
      };

      await toast.promise(fn(), options);
      setToastOn(false);
    } catch (err) {
      console.error(err);
      setToastOn(false);
    }
  };

  const onClickDeleteWallet = async (id: string) => {
    setToastOn(true);
    try {
      const fn = async () => {
        //  TODO:

        // const status = await deleteWallet(id);
        if (!status) return;
        const update = whitelist.filter((wallet) => wallet.id !== id);
        setWhitelist(update);
        setWhitelistCount(whitelistCount - 1);
      };

      const options = {
        loading: "deleting...",
        success: "deleted!",
        error: "Could not delete.",
      };

      await toast.promise(fn(), options);
      setToastOn(false);
    } catch (err) {
      console.error(err);
      setToastOn(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      //  TODO:
      // setPaused(await isPausedState());
      // setIsPreSale(await isPreSaleState());
      // setIsPublicSale(await isPublicSaleState());
      // setTotalSupply(await getTotalMinted());
      // setMerkleRoot(await getMerkleRoot());
      // const _ether: string = ethers.utils.formatEther(await getBalance());
      // setContractBalance(parseFloat(_ether));
      // setRevealedURI(await getReavealedURI());
      // setHiddenURI(await getHiddenURI());
    };
    init();
  }, []);

  useEffect(() => {
    const init = async () => {
      //  TODO:
      // setWhitelist((await getWhitelist()) as IWhitelistWallet[]);
      // setWhitelistCount(await getWalletCount());
    };
    init();
  }, []);

  const mintPercent = (totalSupply / config.maxMintAmount) * 10;

  return (
    <Container toastOn={toastOn}>
      <StatsContainer>
        <StatComponent
          number={contractBalance}
          unit="ETH"
          title="Balance"
          icon={<Purse />}
        />
        <StatComponent
          number={mintPercent}
          unit="%"
          title="Minting Percent"
          icon={<Star />}
        />
        <StatComponent
          number={whitelistCount}
          unit=""
          title="Whitelist"
          icon={<Member />}
        />
      </StatsContainer>

      {/* 1st layer btns */}
      <Wrapper>
        <ToggleBtnComponent
          title="Pause Minting"
          status={paused}
          handleClick={onClickTogglePause}
        />
        <ToggleBtnComponent
          title="Pre Sale"
          status={isPreSale}
          handleClick={onClickTogglePreSale}
        />
        <ToggleBtnComponent
          title="Public Sale"
          status={isPublicSale}
          handleClick={onClickTogglePublic}
        />
        <Box>
          <Title style={{ visibility: "hidden" }}>w</Title>
          <WithdrawBtn
            onClick={onClickWithdraw}
            className="toast__icon__status"
          >
            Withdraw
          </WithdrawBtn>
        </Box>
      </Wrapper>

      {/* 2nd layer btns */}
      {/* <Wrapper>
        <Box>
          <Title style={{ visibility: "hidden" }}>w</Title>
          <WithdrawBtn onClick={() => {}} className="toast__icon__status">
            Reset Whitelist
          </WithdrawBtn>
        </Box>
        <Box>
          <Title style={{ visibility: "hidden" }}>w</Title>
          <WithdrawBtn onClick={() => {}} className="toast__icon__status">
            get All Whitelist
          </WithdrawBtn>
        </Box>
      </Wrapper> */}

      {/* 3rd layer input btns */}
      <InputWrapper style={{ width: "100%" }}>
        <InputComponent
          title="contract address"
          status={config.NFT_CONTRACT_ADDRESS}
          indicator="current token uri"
          onClick={() => {}}
        />
        <InputComponent
          title="revealed token uri"
          status={revealedURI}
          indicator="current token uri"
          onClick={onClickRevealedTokenUri}
        />

        <InputComponent
          title="hidden token uri"
          status={hiddenURI}
          indicator="current token uri"
          onClick={onClickHiddenTokenUri}
        />
        <InputComponent
          title="merkle root"
          status={merkleRoot}
          indicator="current token uri"
          onClick={onClickMerkleRoot}
        />
      </InputWrapper>
      {/* 먼저 100개 wallet만 get한 다음에 infinite scroll하거나 아니면 more버튼 하나 만들기 */}
      {/* 그리고 firebase auth 하나 만들수도 있음 */}
      <MemberWrapper>
        <Box style={{ flex: 1, width: "100%" }}>
          <InputTitle>
            <div>whitelist wallets</div>
            <div
              className="input__title__icon toast__icon__status"
              onClick={onClickAddWhitelist}
            >
              <Add />
            </div>
          </InputTitle>
          <MemberContainer>
            {whitelist.map((wallet, index) => (
              <MemberItemComponent
                title={`Whitelist ${index + 1}`}
                wallet={wallet.wallet}
                icon={<Cancel />}
                key={wallet.id}
                onClick={() => onClickDeleteWallet(wallet.id)}
              />
            ))}
            {whitelist.length === 0 && <div>add your whitelist</div>}
          </MemberContainer>
        </Box>
      </MemberWrapper>
      <InputModal
        isOpen={isOpen}
        handleClose={handleClose}
        handleConfirm={inputModalInfo?.handleConfirm}
        title={inputModalInfo?.title}
        confirmText={inputModalInfo?.confirmText}
        onChange={onChange}
        input={text}
      />
    </Container>
  );
};

export default DashboardComponent;
