import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import tick from '../../assets/images/tick.svg';
import './index.scss';

const BulletItem =({step, index}) => {
  return(
    <div className="infolistbullets__item mb-4 pb-8"> 
    <div className="infolistbullets__circle">
    <div className="infolistbullets__image my-3">

    <img src={tick} className="logo mx-auto" alt="logo" />
      </div>
    </div>
    <div className="infolistbullets__bulletText text-center ">{step.text}</div>
    </div>
  )
}

const InfoListBullets = () => {
  const configuration = useSelector((state) => state.configuration);

  useEffect(() => {
  }, [configuration])

  const { landingPage } = configuration;
  if(!landingPage) return null;

  const data = landingPage.content.components.find(x => x.id === 'c-infolist-tick-bullets');
  const headingText = data.object.heading;
  const steps = data.object.steps;

  return(
    <div className="infolistbullets">
    <div className="infolistbullets__heading text-center font-bold text-2xl md:text-3xl my-8 pt-8"><h2>{headingText}</h2> </div> 
    <div className="infolistbullets__content text-center grid grid-cols-3 md:grid-cols-1 ">
    { steps.map((step, index) => <BulletItem step={step} index={index+1} key={index} />)
    }
    </div>
    </div>
  )
}

export default InfoListBullets;