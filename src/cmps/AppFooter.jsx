import { useSelector } from "react-redux"

export function AppFooter() {
  const count = useSelector((storeState) => storeState.userModule.count)

  return (
    <footer className="app-footer full">
      <div className="footer-content">
        <p>© 2024 Airdnd, Inc.</p>
        <div className="footer-links">
          <a href="/">Terms </a> 
          <a href="/">Sitemap </a>
          <a href="/">Privacy </a>
          <a href="/">Your Privacy Choices</a>
        </div>
      </div>

      <div className="footer-content">
		<div className="footer-lng">
        <img
          className="app-footer-world-svg"
          src="/public/svg/world.svg"
          alt=""
        />
        <h1>English (US)</h1>
		</div>
        <h1>₪ ILS</h1>
      </div>
    </footer>
  )
}
