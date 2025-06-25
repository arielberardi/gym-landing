import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      backgroundImage: {
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      },
    },
  },
  plugins: [
    function ({ matchUtilities }) {
      matchUtilities(
        {
          content: (value) => ({
            content: value,
          }),
        },
        {
          values: {
            evolvetext: "url('./assets/EvolveText.png')",
            abstractwaves: "url('./assets/AbstractWaves.png')",
            sparkles: "url('./assets/Sparkles.png')",
            circles: "url('./assets/Circles.png')",
          },
        }
      );
    },
  ],
};

export default config;
