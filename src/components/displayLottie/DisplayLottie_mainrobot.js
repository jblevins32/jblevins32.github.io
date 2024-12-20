import React, {Component, Suspense} from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    const {animationData, height, width, topOffset} = this.props; // Get topOffset from props
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
    };

    return (
      <Suspense fallback={<Loading />}>
        <Lottie
          animationData={defaultOptions.animationData}
          loop={defaultOptions.loop}
          style={{ 
            height: 1000, 
            width: width,
            position: 'relative', // Allow movement on the page
            top: topOffset || '-175px',  // Use the topOffset to move it up or down
            marginBottom: '-150px'  // Adjust to decrease bottom border/spacing
          }}
        />
      </Suspense>
    );
  }
}