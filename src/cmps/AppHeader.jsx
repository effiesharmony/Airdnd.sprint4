import { useState, useEffect } from "react"
import { AppHeaderFull } from "./AppHeaderFull"
import { AppHeaderMobile } from "./AppHeaderMobile"

export function AppHeader() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 745)

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  function handleResize() {
    setIsMobile(window.innerWidth < 745)
  }

  return isMobile ? <AppHeaderMobile /> : <AppHeaderFull />
}
