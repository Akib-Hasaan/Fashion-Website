/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        webtheme: "#FAE3B6",
        border: "#FFD687",
        btnhover: "#FDBB57",
        statistics: "#FEECC8",
        footer: "#CFA485"
      },
      fontFamily:{
        pop : "Poppins",
        Frank : "Frank Ruhl Libre",
        pod : "Podkova"
      },
      fontSize:{
        "64px" : "64px",
        "22px" : "22px",
        "28px" : "28px"
      },
      height:{
        "730px" : "730px",
        "135px" : "135px",
        "556px" : "556px"
      },
      width:{
        "44%" : "44%",
        "67%" : "67%",
        "59%" : "59%",
        "35%": "35%",
        "30%" : "30%",
        "37%" : "37%",
        "53%" : "53%"

      },
      maxWidth:{
        "1320px": "1320px",
        "92%": "92%",
        "88%": "88%",
        "33%": "33%",
        "89%": "89%",
        "55%": "55%",
        "87%": "87%",
      },
      margin:{
        "46px" : "46px",
        "78px" : "78px",
        "60px" : "60px",
        "30px" : "30px",
        "48px" : "48px",
        "672px" : "672px",
        "17%" : "17%"
      },
      padding:{
        "22px" : "22px",
        "53px" : "53px",
        "5px" : "5px",
        "13px" : "13px",
        "29px" : "29px",
        "19px" : "19px",
        "15px" : "15px",
        "123px" : "123px",
        "46px" : "46px",
        "102px" : "102px",
        "230px" : "230px",
        "108px" : "108px",
        "180px" : "180px",
        "145px" : "145px",
        "83px" : "83px",
        "66px" : "66px",
        "48px" : "48px",
        "340px" : "340px",
        "56px" : "56px",
        "191px" : "191px",
        "64px" : "64px",
        "87px" : "87px"
      },
      gap:{
        "60px" : "60px",
        "31px" : "31px"
      },
      borderRadius:{
        "10px" : "10px",
        "20px" : "20px"
      },
      inset:{
        "105px" : "105px",
        "101px" : "101px",
        "60px"  : "60px",
        "63px" : "63px",
        "88px" : "88px",
        "599px" : "599px",
        "147px" : "147px"
      }
    },
  },
  plugins: [],
}

