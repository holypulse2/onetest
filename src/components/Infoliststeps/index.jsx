import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import chat from '../../assets/images/circle-chat.svg';
import './index.scss';

const InfoItem =({step, index}) => {
  return(
    <div className="infoliststeps__item mb-4"> 
    <div className="infoliststeps__circle">
    <div className="infoliststeps__image my-3">

    <img src={chat} className="logo mx-auto" alt="logo" />
      </div>
    </div>
    <div className="infoliststeps__step text-center text-xl font-bold my-2">Step {index}</div>
    <div className="infoliststeps__stepText text-center ">{step.text}</div>
    </div>
  )
}

const InfoListSteps = () => {
  const configuration = useSelector((state) => state.configuration);

  useEffect(() => {
  }, [configuration])

  const { landingPage } = configuration;
  if(!landingPage) return null;

  const data = landingPage.content.components.find(x => x.id === 'c-infolist-steps');
  const headingText = data.object.heading;
  const steps = data.object.steps;

  return(
    <div className="infoliststeps">
    <div className="infoliststeps__heading text-center font-bold text-2xl md:text-3xl my-8"><h2>{headingText}</h2> </div> 
    <div className="infoliststeps__content text-center grid grid-cols-3 md:grid-cols-1 ">
    { steps.map((step, index) => <InfoItem step={step} index={index+1} key={index} />)
    }
    </div>
    </div>
  )
}

export default InfoListSteps;