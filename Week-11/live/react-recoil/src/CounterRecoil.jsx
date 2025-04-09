import { CountDecreaseRecoil } from "./CountDecreaseRecoil"
import { CountIncreaseRecoil } from "./CountIncreaseRecoil"
import { CountValueRecoil } from "./CountValueRecoil"

export const CounterRecoil = () => {
  return (
    <>
    <CountValueRecoil />
    <CountIncreaseRecoil />
    <CountDecreaseRecoil />
    </>

  )
}