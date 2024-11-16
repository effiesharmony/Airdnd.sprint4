import { useState, useEffect } from "react"
import { AppHeaderFull } from "./AppHeaderFull"
import { AppHeaderMobile } from "./AppHeaderMobile"
import { handleMobileResize } from "../services/utils/util.service.js"

export function AppHeader() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 745)

  useEffect(() => {
    window.addEventListener("resize", handleMobileResize)

    return () => {
      window.removeEventListener("resize", handleMobileResize)
    }
  }, [])

  return isMobile ? <AppHeaderMobile /> : <AppHeaderFull />
}
