import { useEffect, useState } from "react";
import "./index.css";

function Tips(props) {
  const TipContent = [
    'This is the version one of the MagX, if you have any comments or feature recommendations feel free to give you feedback to Ilyass B. - ACCMA 8 .',
    'Join our discord community from the community hub , <a href="https://community.vatsim.net/">Community Hub</a>',
  ]
  const [Tip, SetTip] = useState('Do you have Any FeedBack ? click here <a href="mailto:management@vatsim.ma">management@vatsim.ma</a>');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      SetTip(TipContent[currentIndex]);
      setCurrentIndex((currentIndex + 1) % TipContent.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, TipContent]);

  return (
    <div className="Tips">
      <div className="Tips-Container">
        <div className="Tips-Container-Icon">
          <i className="fa-regular fa-circle-question"></i>
        </div>
        <div className="Tips-Container-Text">
          <h1>Tips</h1>
          <p dangerouslySetInnerHTML={{ __html: Tip }}></p>
        </div>
      </div>
    </div>
  );
}

export default Tips;