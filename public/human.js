const tlStroke = gsap.timeline({ repeat: -1 });

tlStroke
  .to("#strokeI", {
    duration: 4,
    morphSVG: {
      shape: "#strokeIII",
      type: "rotational"
    },
    ease: Linear.easeNone
  })
  .to("#strokeI", {
    duration: 4,
    morphSVG: {
      shape: "#strokeIV",
      type: "rotational"
    },
    ease: Linear.easeNone
  })
  .to("#strokeI", {
    duration: 4,
    morphSVG: {
      shape: "#strokeII",
      type: "rotational"
    },
    ease: Linear.easeNone
  })
  .to("#strokeI", {
    duration: 4,
    morphSVG: {
      shape: "#strokeI",
      type: "rotational"
    },
    ease: Linear.easeNone
  });
