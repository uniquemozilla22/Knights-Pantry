/** @type {import('daisyui').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  plugins: [require("daisyui")],

  daisyui:{
    themes:["dracula","winter"]
  }
}

