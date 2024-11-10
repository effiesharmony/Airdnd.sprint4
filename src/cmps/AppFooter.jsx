import { useSelector } from "react-redux";

export function AppFooter() {
  const count = useSelector((storeState) => storeState.userModule.count);

  return (
    <footer className="app-footer full">
      <div class="footer-content">
        <p>© 2024 Airbnb, Inc.</p>
        <div class="footer-links">
          <a href="/">Terms</a>
          <a href="/">Sitemap</a>
          <a href="/">Privacy</a>
          <a href="/">Your Privacy Choices</a>
        </div>
      </div>

      <div class="footer-content">
		<div class="footer-lng">
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
  );
}
