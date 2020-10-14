import React, { useRef, useEffect } from 'react';
import SpaceImg from '../../assets/images/contact/space.svg';
import gsap from 'gsap';
import styled from 'styled-components';

const SpaceSvg = styled(SpaceImg)`
  width: 100%;
`;

const Space = () => {
  const wrapper = useRef(null);
  useEffect(() => {
    const [elements] = wrapper.current.children;
    const background = elements.getElementById('background');
    const details = elements.getElementById('details');
    const rocket = elements.getElementById('rocket');
    const guy = elements.getElementById('guy');
    const fire = elements.getElementById('fire');

    gsap.set([background.children, details.children, rocket, guy, fire], {
      autoAlpha: 0,
    });
    let tl = gsap.timeline({
      duration: 1,
    });
    tl.fromTo(
      [guy, rocket, fire],
      { x: 100, y: 100 },
      { x: 0, y: 0, autoAlpha: 1, duration: 1 },
      1
    );
    tl.fromTo(fire, { scale: 0 }, { scale: 1, duration: 2 }, 1);
    tl.fromTo(background.children, {}, { autoAlpha: 1, duration: 5 }, 2);
    tl.fromTo(details.children, {}, { autoAlpha: 1, duration: 4 }, 3);
  }, []);
  return (
    <div ref={wrapper}>
      <SpaceSvg />
    </div>
  );
};
export default Space;
