import React from "react";
import TermsConditionsBody from "../../common-components/terms-conditions-body/terms-conditions-body";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

function TermsAndConditions() {
  return (
    <React.Fragment>
      <Header></Header>
      <TermsConditionsBody></TermsConditionsBody>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default TermsAndConditions;
