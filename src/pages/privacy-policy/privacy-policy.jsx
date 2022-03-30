import PrivPolicyBody from "../../common-components/policy-privacity/policy-privacy-body";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import React from "react";

function PrivacyPolicy() {
  return (
    <React.Fragment>
      <Header></Header>
      <PrivPolicyBody></PrivPolicyBody>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default PrivacyPolicy;
