import React, { useRef } from "react";
import WebgiViewer from "./WebgiViewer";
import Nav from "./Nav";
import Jumbotron from "./Jumbotron";
import IntroSection from "./IntroSection";
import DisplaySection from "./DisplaySection";

function Bundle() {
  const webgiViewerRef = useRef();
  const contentRef = useRef();
  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  };

  return (
    <main>
      <section className={contentRef} ref={contentRef}>
        <Nav />
        <Jumbotron />
        <IntroSection />
        <DisplaySection triggerPreview={handlePreview} />
      </section>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
    </main>
  );
}

export default Bundle;
