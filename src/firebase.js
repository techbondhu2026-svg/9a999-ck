* {
  box-sizing: border-box;
}

:root {
  --bg: #070b10;
  --bg-soft: #0f1419;
  --panel: rgba(17, 23, 28, 0.9);
  --panel-strong: rgba(22, 28, 34, 0.98);
  --card: #121a20;
  --card-alt: #0d1015;
  --orange: #ff9e3d;
  --orange-strong: #ff7b25;
  --orange-soft: rgba(255, 152, 67, 0.16);
  --text: #f6f7fb;
  --muted: #9da8b6;
  --line: rgba(255, 255, 255, 0.08);
  --success: #46d39a;
  --shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  background: linear-gradient(180deg, #060a0d 0%, #0b1016 100%);
  font-family: Inter, 'Segoe UI', sans-serif;
  color: var(--text);
}

body {
  min-height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  max-width: 580px;
  margin: 0 auto;
  min-height: 100vh;
  background: rgba(3, 6, 10, 0.85);
  border-left: 1px solid rgba(255, 255, 255, 0.04);
  border-right: 1px solid rgba(255, 255, 255, 0.04);
  padding-bottom: 96px;
}

.page-shell {
  padding: 20px 16px 24px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.eyebrow {
  margin: 0;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--orange);
}

h1, h2, h3, p {
  margin-top: 0;
}

h1 {
  font-size: 2rem;
  margin-bottom: 0;
}

h2 {
  font-size: 1.6rem;
  margin-bottom: 0;
}

p {
  margin-bottom: 0;
}

.muted {
  color: var(--muted);
}

.avatar-circle {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--orange) 0%, #ffb76a 100%);
  color: #130b04;
  font-weight: 700;
}

.avatar-circle.big {
  width: 58px;
  height: 58px;
}

.hero-card,
.promo-card,
.support-card,
.profile-card,
.card-panel,
.detail-card,
.admin-section {
  background: linear-gradient(180deg, rgba(18, 24, 29, 0.96), rgba(12, 18, 22, 0.96));
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  border-radius: 22px;
}

.hero-card {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  background:
    linear-gradient(135deg, rgba(255, 157, 79, 0.18), rgba(5, 8, 12, 0.22)),
    rgba(13, 17, 20, 0.96);
}

.points-pill {
  background: rgba(255, 153, 61, 0.15);
  color: var(--orange);
  border: 1px solid rgba(255, 153, 61, 0.25);
  border-radius: 999px;
  padding: 8px 12px;
  font-weight: 700;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}

.stat-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-card span {
  color: var(--muted);
  font-size: 12px;
}

.stat-card strong {
  font-size: 1rem;
}

.promo-card {
  padding: 18px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 22px;
}

.primary-btn,
.secondary-btn,
.text-btn,
.back-btn {
  border: 0;
  border-radius: 14px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--orange), var(--orange-strong));
  color: #130d08;
  font-weight: 800;
  padding: 12px 18px;
}

.primary-btn.small,
.secondary-btn.small {
  padding: 8px 12px;
  font-size: 0.8rem;
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  color: var(--text);
  padding: 12px 18px;
}

.text-btn {
  background: transparent;
  color: var(--orange);
  padding: 0;
}

.back-btn {
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  padding: 8px 12px;
  border: 1px solid var(--line);
}

.primary-btn:hover,
.secondary-btn:hover,
.text-btn:hover,
.back-btn:hover {
  transform: translateY(-1px);
}

.section-block {
  margin-bottom: 20px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.section-header a {
  color: var(--orange);
  font-size: 0.88rem;
}

.game-list,
.games-grid,
.stack-list,
.history-list,
.support-list,
.admin-list {
  display: grid;
  gap: 12px;
}

.game-list.compact {
  grid-template-columns: 1fr;
}

.game-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.game-card.slim {
  justify-content: space-between;
}

.game-emoji {
  font-size: 1.6rem;
  background: rgba(255, 152, 62, 0.12);
  width: 46px;
  height: 46px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.game-card strong,
.game-card span,
.game-card em {
  display: block;
}

.game-card span,
.game-card em {
  color: var(--muted);
  font-style: normal;
}

.activity-row,
.history-item,
.stack-item,
.profile-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 12px 14px;
}

.activity-row {
  align-items: flex-start;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--orange);
  margin-top: 6px;
  flex-shrink: 0;
}

.activity-row strong,
.history-item strong,
.support-list strong,
.profile-row strong {
  display: block;
  margin-bottom: 4px;
}

.activity-row p,
.history-item p,
.profile-row span,
.support-list span {
  color: var(--muted);
}

.activity-row span,
.history-item span {
  color: var(--orange);
  font-size: 12px;
}

.games-grid {
  grid-template-columns: 1fr;
}

.game-tile {
  background: var(--panel);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.game-cover {
  height: 140px;
  background: linear-gradient(135deg, var(--accent), rgba(10, 12, 15, 0.2));
}

.game-info {
  padding: 14px;
}

.game-tag,
.chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 7px 10px;
  background: rgba(255, 153, 61, 0.12);
  color: var(--orange);
  font-size: 0.72rem;
  border: 1px solid rgba(255, 153, 61, 0.2);
}

.game-info h3 {
  margin: 10px 0 6px;
}

.game-info p {
  color: var(--muted);
  font-size: 0.92rem;
  min-height: 2.9em;
}

.game-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  color: var(--muted);
  font-size: 12px;
}

.detail-card {
  padding: 16px;
}

.detail-card .detail-cover {
  height: 170px;
  border-radius: 18px;
  background: linear-gradient(135deg, var(--accent), rgba(11, 16, 20, 0.85));
  margin-bottom: 18px;
}

.detail-info h1 {
  margin-bottom: 8px;
}

.detail-info p {
  color: var(--muted);
  margin-bottom: 14px;
}

.game-meta.big {
  margin-bottom: 18px;
}

.card-panel,
.support-card,
.profile-card,
.admin-section {
  padding: 18px 16px;
  margin-bottom: 18px;
}

.stack-item {
  align-items: center;
}

.stack-item p {
  color: var(--muted);
  margin-top: 4px;
}

.reward-box {
  display: flex;
  align-items: center;
  gap: 10px;
}

.reward-box span {
  color: var(--orange);
  font-weight: 700;
}

.history-list {
  margin-top: 12px;
}

.positive {
  color: var(--success);
}

.negative {
  color: #ff6a6a;
}

.profile-card {
  display: grid;
  gap: 12px;
}

.profile-row {
  justify-content: space-between;
}

.profile-actions {
  display: flex;
  gap: 10px;
  margin-top: 16px;
}

.support-card h2 {
  margin-bottom: 12px;
}

.hotline {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--orange);
  margin-bottom: 18px;
}

.support-list {
  gap: 12px;
}

.support-list div {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.auth-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 18px;
}

.auth-card {
  width: min(100%, 420px);
  background: rgba(17, 21, 25, 0.95);
  border: 1px solid var(--line);
  border-radius: 26px;
  box-shadow: var(--shadow);
  padding: 26px 18px 20px;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}

.logo-badge {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--orange), #ffb662);
  color: #140d07;
  font-weight: 900;
}

.auth-form {
  display: grid;
  gap: 14px;
  margin-top: 18px;
}

.auth-form label {
  display: grid;
  gap: 8px;
  color: var(--muted);
  font-size: 0.9rem;
}

.auth-form input {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  color: var(--text);
  border-radius: 12px;
  padding: 12px 14px;
  outline: none;
}

.auth-form input:focus {
  border-color: rgba(255, 153, 61, 0.7);
  box-shadow: 0 0 0 3px rgba(255, 153, 61, 0.15);
}

.inline-link-row {
  display: flex;
  justify-content: center;
  margin-top: 4px;
}

.status-box {
  margin-top: 14px;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(255, 153, 61, 0.1);
  color: var(--orange);
  border: 1px solid rgba(255, 153, 61, 0.25);
}

.demo-badge {
  margin-top: 16px;
  text-align: center;
  color: var(--muted);
  font-size: 0.78rem;
}

.bottom-nav {
  position: fixed;
  left: 50%;
  bottom: 12px;
  transform: translateX(-50%);
  width: min(92vw, 540px);
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 8px;
  background: rgba(16, 21, 25, 0.92);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow);
  padding: 10px 10px 12px;
  backdrop-filter: blur(14px);
}

.bottom-nav a {
  text-align: center;
  color: var(--muted);
  border-radius: 12px;
  padding: 10px 6px;
  font-size: 0.78rem;
}

.bottom-nav a.active {
  background: rgba(255, 153, 61, 0.12);
  color: var(--orange);
}

@media (max-width: 420px) {
  .topbar h1 {
    font-size: 1.6rem;
  }

  .hero-card,
  .promo-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .reward-box {
    flex-direction: column;
    align-items: flex-end;
  }
}
