import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Every Life Matter",
          "You Can Help Many",
          "Start Donating Now",
          "Or Join as Volunteer",
          "Donate Money",
          "Donate Goods",
          "Donate Mobile For Education",
          "Donate Food"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;