import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer & Data Science Enthusiast"
        ],
        autoStart: true,
        loop: false,
        delay: 70,
        deleteSpeed: Infinity,
      }}
    />
  );
}

export default Type;
