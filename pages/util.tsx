import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";
import nftHolders from "../data/nft_holders.json";
import novWhitelist from "../data/nov-whitelist.json";
// import notReceivedHolders from "../data/notReceived_holders.json";
// import { getUniqueAddresses } from "../utils/common";

const Util = () => {
  const [email, setEmail] = React.useState("");
  const recaptchaRef = React.useRef<any | null>(null);

  const handleChange = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setEmail(value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!recaptchaRef.current) return;
    recaptchaRef.current.execute();
    // console.log(callback);

    // Execute the reCAPTCHA when the form is submitted
  };

  const onReCAPTCHAChange = (captchaCode: any) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!recaptchaRef.current) return;
    if (!captchaCode) {
      return;
    }
    // console.log(captchaCode);
    // Else reCAPTCHA was executed successfully so proceed with the
    // alert
    alert(`Hey, ${email}`);
    // Reset the reCAPTCHA so that it can be executed again if user
    // submits another email.
    recaptchaRef.current.reset();
  };

  useEffect(() => {
    const init = () => {
      const whitelistInfo = novWhitelist.map((wallet: string) => {
        return {
          wallet,
          gotNFT: nftHolders.includes(wallet),
        };
      });
      const notReceived = whitelistInfo.filter(
        (info: { wallet: string; gotNFT: boolean }) => !info.gotNFT
      );
      let arr: string[] = [];
      notReceived.forEach((info: { wallet: string; gotNFT: boolean }) => {
        arr.push(info.wallet);
      });
      console.log(arr);
    };
  }, []);

  useEffect(() => {
    // const notReceived = getUniqueAddresses(notReceivedHolders);
    // console.log(notReceived);
  }, []);
  return (
    <Section>
      <form>
        {/* <form onSubmit={handleSubmit}> */}
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={"6LdDuucgAAAAAJJfc9nWSkNp2B8cV5Gfdja3fFEl"}
          onChange={onReCAPTCHAChange}
        />
        {/* <input
          onChange={handleChange}
          required
          type="email"
          name="email"
          placeholder="Email"
        /> */}
        <button onClick={handleSubmit}>Register</button>
        {/* <button type="submit">Register</button> */}
      </form>
    </Section>
  );
};

export default Util;
const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;

  button {
    cursor: pointer;
  }
`;
