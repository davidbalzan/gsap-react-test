import gsap from "gsap";
import type { NextPage } from "next";
import { useEffect, useRef } from "react";

const Home: NextPage = () => {
  const boxRef: any = useRef();
  const boxRef2: any = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, { y: "+=100" });
    gsap.to(boxRef2.current, { y: "-=100" });
  });
  return (
    <>
      <div className="app">
        <div className="box" ref={boxRef}>
          Hello
        </div>
        <div className="box" ref={boxRef2}>
          There
        </div>
      </div>
    </>
  );
};

export default Home;
