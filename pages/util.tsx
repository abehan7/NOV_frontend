import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";
import nftHolders from "../data/nft_holders.json";
import novWhitelist from "../data/nov-whitelist.json";
import { NETWORK_NAMES } from "../constants";
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

  // const onReCAPTCHAChange = (captchaCode: any) => {
  //   // If the reCAPTCHA code is null or undefined indicating that
  //   // the reCAPTCHA was expired then return early
  //   if (!recaptchaRef.current) return;
  //   if (!captchaCode) {
  //     return;
  //   }
  //   // console.log(captchaCode);
  //   // Else reCAPTCHA was executed successfully so proceed with the
  //   // alert
  //   alert(`Hey, ${email}`);
  //   // Reset the reCAPTCHA so that it can be executed again if user
  //   // submits another email.
  //   recaptchaRef.current.reset();
  // };

  const onReCAPTCHAChange = async (captchaCode: any) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }
    try {
      const response = await fetch("/api/kickbot", {
        method: "POST",
        body: JSON.stringify({ captcha: captchaCode }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // 여기에 public sale을 넣기
        // await onClickPublicMint();
        // this is a test
        // If the response is ok than show the success alert
        alert("Email registered successfully");
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error: any) {
      alert(error?.message || "Something went wrong");
    } finally {
      // Reset the reCAPTCHA when the request has failed or succeeeded
      // so that it can be executed again if user submits another email.
      recaptchaRef.current.reset();
      // setEmail("");
    }
  };

  return (
    <Section>
      <form>
        {/* <form onSubmit={handleSubmit}> */}
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={NETWORK_NAMES.poligon}
          onChange={onReCAPTCHAChange}
        />
        404
        {/* <button onClick={handleSubmit}>Register</button> */}
      </form>
    </Section>
  );
};

export default Util;
const Section = styled.section`
  width: 100%;
  min-height: calc(100vh - ${({ theme }) => theme.headerHeight});
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: scroll; */

  button {
    cursor: pointer;
  }
`;
