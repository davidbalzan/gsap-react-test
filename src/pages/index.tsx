import gsap from "gsap";
import type { NextPage } from "next";
import { useEffect, useRef } from "react";

const Home: NextPage = () => {
  const boxRef: any = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, { y: "+=360" });
  });
  return (
    <>
      <div className="app">
        <div className="box" ref={boxRef}>
          Hello
        </div>
      </div>
    </>
  );
};

export default Home;
