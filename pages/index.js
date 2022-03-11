import FlexWrapper from "../components/organisms/flexWrapper";
import { apiValues } from "./api/main";
import Download from './../assets/images/download.png'

export default function Home() {
  return (
    <>
      <FlexWrapper {...apiValues.firstState} icon={Download} />
    </>
  )
}
