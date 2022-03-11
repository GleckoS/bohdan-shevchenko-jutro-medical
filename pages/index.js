import react, { useState, useEffect } from "react";
import FlexWrapper from "../components/organisms/flexWrapper";
import { apiValues } from "./api/main";
import { PreventScroll } from "../functions/preventScroll";

export default function Home() {

  useEffect(() => { PreventScroll() }, [])

  const [currState, changeCurrState] = useState({ ...apiValues.firstState })
  const [currStateNum, changeCurrStateNum] = useState(1)

  const changeCurrStateButton = (direction) => {
    if (direction === 'next') {
      switch (currStateNum) {
        case 1:
          changeCurrState({ ...apiValues.secondState })
          changeCurrStateNum(2)
          window.scrollTo(0, document.body.scrollHeight);
          break
        case 2:
          changeCurrState({ ...apiValues.thirdState })
          changeCurrStateNum(3)
          window.scrollTo(0, 0);
          break
        case 3:
          changeCurrState({ ...apiValues.firstState })
          changeCurrStateNum(1)
          window.scrollTo(0, 0);
          break
        default:
          break
      }
    } else if (direction === 'prev') {
      switch (currStateNum) {
        case 1:
          changeCurrState({ ...apiValues.thirdState })
          changeCurrStateNum(3)
          window.scrollTo(0, 0);
          break
        case 2:
          changeCurrState({ ...apiValues.firstState })
          changeCurrStateNum(1)
          window.scrollTo(0, 0);
          break
        case 3:
          changeCurrState({ ...apiValues.secondState })
          changeCurrStateNum(2)
          window.scrollTo(0, document.body.scrollHeight);
          break
        default:
          break
      }
    }
  }

  return (
    <main>
      <div className="bg-sky-800 bg-emerald-400 text-slate-700 bg-pink-300 hidden" /> {/* dynamic styles */}
      <FlexWrapper
        {...currState}
        changeCurrState={changeCurrStateButton}
        currStateNum={currStateNum}
        iphoneScreens={apiValues.iphoneScreens}
        organismClasses={''}
      />
    </main>
  )
}
