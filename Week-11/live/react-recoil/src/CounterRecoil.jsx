import { CountDecrease } from "./CountDecreaseRecoil"
import { CountIncrease } from "./CountIncreaseRecoil"
import { CountValue } from "./CountValueRecoil"

export const Counter = () => {
    return (
      <>
      <CountValue /> <br />
      <CountIncrease />
      <CountDecrease />
      </>
    )
  }