/* eslint-disable no-undef */
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   // eslint-disable-next-line no-undef
//   plugins: [require("daisyui")],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{},
    container: {
      center: true,
    },
  },
  plugins: [ require("daisyui")],
}


