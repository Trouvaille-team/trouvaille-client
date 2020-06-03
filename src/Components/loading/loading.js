import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as loadingData from "../../lf30_editor_KVgdmK.json"


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,

};
console.log(loadingData.default)
export default class Loading extends React.Component {

  render() {
    return (
      <div>
        <FadeIn>
          <div className="loading-icon">
            <h1>Finding some dope ass muthafuckin spots for ya bruh</h1>
            <Lottie options={defaultOptions} />
          </div>
        </FadeIn>
      </div>)
  }
}
