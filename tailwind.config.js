/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        obsidian: "#07080d",
        ink: "#0d111b",
        signal: "#49f2c2",
        ion: "#73a7ff",
        ember: "#ffb057"
      },
      boxShadow: {
        glow: "0 0 50px rgba(73, 242, 194, 0.18)",
        panel: "0 20px 80px rgba(0, 0, 0, 0.35)"
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseSoft: "pulseSoft 3s ease-in-out infinite",
        slideUp: "slideUp 700ms ease both"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: 0.55 },
          "50%": { opacity: 1 }
        },
        slideUp: {
          "0%": { transform: "translateY(28px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 }
        }
      }
    }
  },
  plugins: []
};
