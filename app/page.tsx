import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Makox · 制造业 AI 出海操作系统",
  description: "专注企业 Agent 部署、Makox 数字员工搭建、数据治理与 Workflow 梳理。帮制造业企业跑通真实业务场景。",
};

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Syne:wght@400;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0C0C0B;
          --surface: #141413;
          --surface2: #1C1C1A;
          --border: rgba(255,255,255,0.07);
          --border2: rgba(255,255,255,0.12);
          --text: #F0EDE8;
          --muted: #6B6860;
          --accent: #E8693A;
          --accent2: #C4A882;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Syne', -apple-system, sans-serif;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        /* ── NAV ── */
        .nav {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 40px;
          border-bottom: 0.5px solid var(--border);
          position: sticky; top: 0; z-index: 100;
          background: rgba(12,12,11,0.92);
          backdrop-filter: blur(12px);
        }
        .logo {
          font-family: 'DM Serif Display', serif;
          font-size: 22px; letter-spacing: -0.5px;
          color: var(--text); text-decoration: none;
        }
        .logo span { color: var(--accent); }
        .nav-tag {
          font-family: 'DM Mono', monospace;
          font-size: 11px; color: var(--muted);
          border: 0.5px solid var(--border2);
          padding: 4px 12px; border-radius: 20px;
          letter-spacing: 0.05em;
        }
        .nav-cta {
          background: var(--accent); color: #fff;
          border: none; padding: 9px 20px;
          border-radius: 6px;
          font-family: 'Syne', sans-serif;
          font-size: 13px; font-weight: 600;
          cursor: pointer; transition: opacity 0.2s;
          text-decoration: none; display: inline-block;
        }
        .nav-cta:hover { opacity: 0.85; }

        /* ── HERO ── */
        .hero {
          padding: 80px 40px 60px;
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 60px; align-items: center;
        }
        @media (max-width: 768px) {
          .hero { grid-template-columns: 1fr; padding: 48px 20px 40px; gap: 40px; }
          .nav { padding: 16px 20px; }
          .nav-tag { display: none; }
        }
        .eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 11px; color: var(--accent);
          letter-spacing: 0.15em; text-transform: uppercase;
          margin-bottom: 20px;
          display: flex; align-items: center; gap: 8px;
          animation: fadeUp 0.6s ease both;
        }
        .eyebrow::before {
          content: ''; display: block;
          width: 24px; height: 1px; background: var(--accent);
        }
        .hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(36px, 4.5vw, 56px);
          line-height: 1.08; letter-spacing: -1px;
          color: var(--text); margin-bottom: 20px;
          animation: fadeUp 0.6s ease 0.08s both;
        }
        .hero-title em { font-style: italic; color: var(--accent2); }
        .hero-sub {
          font-size: 15px; color: var(--muted);
          line-height: 1.75; margin-bottom: 32px;
          animation: fadeUp 0.6s ease 0.16s both;
        }
        .hero-actions {
          display: flex; gap: 12px; flex-wrap: wrap;
          animation: fadeUp 0.6s ease 0.22s both;
        }
        .btn-primary {
          background: var(--accent); color: #fff;
          border: none; padding: 13px 28px;
          border-radius: 6px;
          font-family: 'Syne', sans-serif;
          font-size: 14px; font-weight: 600;
          cursor: pointer; transition: all 0.2s;
          text-decoration: none; display: inline-block;
        }
        .btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn-ghost {
          background: none; color: var(--muted);
          border: 0.5px solid var(--border2); padding: 13px 24px;
          border-radius: 6px;
          font-family: 'Syne', sans-serif;
          font-size: 14px; cursor: pointer; transition: all 0.2s;
          text-decoration: none; display: inline-block;
        }
        .btn-ghost:hover { color: var(--text); border-color: rgba(255,255,255,0.22); }

        /* hero stat cards */
        .hero-stats { display: flex; flex-direction: column; gap: 2px; }
        .stat-card {
          background: var(--surface);
          border: 0.5px solid var(--border);
          border-radius: 10px; padding: 20px 24px;
          display: flex; align-items: center; gap: 16px;
          transition: border-color 0.2s, transform 0.2s;
          animation: slideIn 0.6s ease both;
        }
        .stat-card:nth-child(1) { animation-delay: 0.1s; }
        .stat-card:nth-child(2) { animation-delay: 0.2s; }
        .stat-card:nth-child(3) { animation-delay: 0.3s; }
        .stat-card:hover { border-color: var(--border2); transform: translateX(4px); }
        .stat-icon {
          width: 40px; height: 40px; border-radius: 8px;
          background: var(--surface2);
          border: 0.5px solid var(--border2);
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; flex-shrink: 0;
        }
        .stat-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px; color: var(--muted);
          letter-spacing: 0.08em; text-transform: uppercase;
          margin-bottom: 3px;
        }
        .stat-val { font-size: 15px; font-weight: 700; color: var(--text); }

        /* ── DIVIDER ── */
        .section-divider {
          border: none;
          border-top: 0.5px solid var(--border);
          margin: 0 40px;
        }
        @media (max-width: 768px) { .section-divider { margin: 0 20px; } }

        /* ── TRACTION BAND ── */
        .traction-band {
          background: var(--surface);
          border-top: 0.5px solid var(--border);
          border-bottom: 0.5px solid var(--border);
          padding: 36px 40px;
          display: flex; align-items: center;
          justify-content: center; gap: 0;
          flex-wrap: wrap;
        }
        .traction-item {
          text-align: center; padding: 12px 48px;
          position: relative;
        }
        .traction-item:not(:last-child)::after {
          content: '';
          position: absolute; right: 0; top: 20%; bottom: 20%;
          width: 0.5px; background: var(--border2);
        }
        .traction-num {
          font-family: 'DM Serif Display', serif;
          font-size: 34px; color: var(--text); line-height: 1;
        }
        .traction-num span { color: var(--accent); }
        .traction-label {
          font-family: 'DM Mono', monospace;
          font-size: 11px; color: var(--muted);
          margin-top: 6px; letter-spacing: 0.06em;
        }

        /* ── SERVICES ── */
        .services {
          padding: 80px 40px;
          max-width: 1100px; margin: 0 auto;
        }
        @media (max-width: 768px) { .services { padding: 60px 20px; } }
        .section-header {
          display: flex; align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 48px; flex-wrap: wrap; gap: 16px;
        }
        .section-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(28px, 3.5vw, 40px);
          line-height: 1.1; letter-spacing: -0.5px;
        }
        .section-title em { font-style: italic; color: var(--accent2); }
        .section-note {
          font-family: 'DM Mono', monospace;
          font-size: 12px; color: var(--muted);
          max-width: 260px; line-height: 1.65;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 0.5px solid var(--border);
          border-radius: 14px; overflow: hidden;
        }
        @media (max-width: 768px) { .service-grid { grid-template-columns: 1fr; } }
        .service-card {
          background: var(--surface);
          padding: 36px 32px;
          position: relative;
          transition: background 0.3s;
          border-right: 0.5px solid var(--border);
        }
        .service-card:last-child { border-right: none; }
        @media (max-width: 768px) {
          .service-card { border-right: none; border-bottom: 0.5px solid var(--border); }
          .service-card:last-child { border-bottom: none; }
        }
        .service-card:hover { background: var(--surface2); }
        .service-num {
          font-family: 'DM Mono', monospace;
          font-size: 11px; color: var(--muted);
          letter-spacing: 0.1em; margin-bottom: 24px;
          display: flex; align-items: center; gap: 8px;
        }
        .service-num::after {
          content: ''; flex: 1; height: 0.5px;
          background: var(--border2); max-width: 40px;
        }
        .service-icon-wrap {
          width: 52px; height: 52px;
          background: var(--surface2);
          border: 0.5px solid var(--border2);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; margin-bottom: 20px;
          transition: border-color 0.2s, transform 0.2s;
        }
        .service-card:hover .service-icon-wrap {
          border-color: var(--accent); transform: scale(1.05);
        }
        .service-name {
          font-size: 18px; font-weight: 700;
          color: var(--text); margin-bottom: 10px; line-height: 1.25;
        }
        .service-desc {
          font-size: 13px; color: var(--muted);
          line-height: 1.7; margin-bottom: 24px;
        }
        .service-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .tag {
          font-family: 'DM Mono', monospace;
          font-size: 10px; color: var(--accent2);
          border: 0.5px solid rgba(196,168,130,0.25);
          padding: 3px 8px; border-radius: 4px;
          letter-spacing: 0.04em;
        }
        .service-arrow {
          position: absolute; top: 36px; right: 32px;
          color: var(--border2); font-size: 20px;
          transition: color 0.2s, transform 0.2s;
        }
        .service-card:hover .service-arrow { color: var(--accent); transform: translate(3px,-3px); }

        /* ── HOW IT WORKS ── */
        .how {
          padding: 80px 40px;
          max-width: 1100px; margin: 0 auto;
        }
        @media (max-width: 768px) { .how { padding: 60px 20px; } }
        .steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px; margin-top: 48px;
        }
        @media (max-width: 768px) { .steps { grid-template-columns: 1fr 1fr; } }
        .step {
          padding: 28px 24px;
          border: 0.5px solid var(--border);
          border-radius: 10px;
          transition: border-color 0.2s, background 0.2s;
        }
        .step:hover { border-color: var(--border2); background: var(--surface); }
        .step-n {
          font-family: 'DM Mono', monospace;
          font-size: 10px; color: var(--accent);
          letter-spacing: 0.12em; margin-bottom: 16px;
        }
        .step-title {
          font-size: 14px; font-weight: 700;
          color: var(--text); margin-bottom: 8px;
        }
        .step-desc { font-size: 12px; color: var(--muted); line-height: 1.65; }

        /* ── CTA ── */
        .cta-section {
          padding: 40px 40px 80px;
          max-width: 1100px; margin: 0 auto;
        }
        @media (max-width: 768px) { .cta-section { padding: 40px 20px 60px; } }
        .cta-box {
          background: var(--surface);
          border: 0.5px solid var(--border2);
          border-radius: 16px; padding: 56px 60px;
          display: grid; grid-template-columns: 1fr auto;
          gap: 40px; align-items: center;
          position: relative; overflow: hidden;
        }
        @media (max-width: 768px) {
          .cta-box { grid-template-columns: 1fr; padding: 36px 28px; }
          .cta-right { align-items: stretch !important; }
          .input-row { flex-direction: column; }
          .cta-input { width: 100% !important; }
        }
        .cta-box::before {
          content: ''; position: absolute;
          top: -60px; right: -60px;
          width: 220px; height: 220px; border-radius: 50%;
          background: radial-gradient(circle, rgba(232,105,58,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(22px, 3vw, 34px);
          line-height: 1.15; letter-spacing: -0.5px;
          margin-bottom: 12px;
        }
        .cta-sub { font-size: 14px; color: var(--muted); max-width: 440px; line-height: 1.7; }
        .cta-right { display: flex; flex-direction: column; gap: 10px; align-items: flex-end; }
        .input-row { display: flex; gap: 8px; }
        .cta-input {
          background: var(--bg);
          border: 0.5px solid var(--border2);
          color: var(--text); padding: 11px 16px;
          border-radius: 6px;
          font-family: 'Syne', sans-serif;
          font-size: 13px; width: 210px;
          transition: border-color 0.2s;
        }
        .cta-input:focus { outline: none; border-color: var(--accent); }
        .cta-input::placeholder { color: var(--muted); }
        .cta-note {
          font-family: 'DM Mono', monospace;
          font-size: 10px; color: var(--muted);
          letter-spacing: 0.04em;
        }

        /* ── FOOTER ── */
        footer {
          border-top: 0.5px solid var(--border);
          padding: 24px 40px;
          display: flex; justify-content: space-between; align-items: center;
        }
        @media (max-width: 768px) { footer { padding: 20px; flex-direction: column; gap: 8px; } }
        .footer-logo {
          font-family: 'DM Serif Display', serif;
          font-size: 16px; color: var(--muted);
        }
        .footer-logo span { color: var(--accent); }
        .footer-logo a {
          color: inherit;
          text-decoration: none;
        }
        .footer-logo a:hover { color: var(--accent); }
        .footer-right {
          font-family: 'DM Mono', monospace;
          font-size: 10px; color: var(--muted);
          letter-spacing: 0.06em;
        }

        /* ── ANIMATIONS ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <a href="/" className="logo">Ma<span>k</span>ox</a>
        <div className="nav-tag">B · Enterprise AI</div>
        <a href="mailto:MashiTeam@163.com" className="nav-cta">预约诊断</a>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div>
          <div className="eyebrow">制造业 × AI 出海</div>
          <h1 className="hero-title">
            B 端 AI 服务，<br />专注<em>三件事</em>。
          </h1>
          <p className="hero-sub">
            不做大而全的 AI 平台。<br />
            只帮制造业企业跑通：Agent 部署、数字员工搭建、数据与 Workflow 治理。
          </p>
          <div className="hero-actions">
            <a href="mailto:MashiTeam@163.com" className="btn-primary">预约免费诊断</a>
            <a href="#services" className="btn-ghost">了解服务 →</a>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-icon">🤖</div>
            <div>
              <div className="stat-label">已交付</div>
              <div className="stat-val">企业版 Agent 系统 · 2 家</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⚙️</div>
            <div>
              <div className="stat-label">平均交付周期</div>
              <div className="stat-val">2 – 4 周完成部署</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏭</div>
            <div>
              <div className="stat-label">深耕行业</div>
              <div className="stat-val">制造业 · 跨境出海 · OPC</div>
            </div>
          </div>
        </div>
      </div>

      {/* TRACTION */}
      <div className="traction-band">
        <div className="traction-item">
          <div className="traction-num">¥<span>100</span>万+</div>
          <div className="traction-label">早期收入</div>
        </div>
        <div className="traction-item">
          <div className="traction-num"><span>3</span>+</div>
          <div className="traction-label">深度合作客户</div>
        </div>
        <div className="traction-item">
          <div className="traction-num"><span>20</span>年</div>
          <div className="traction-label">制造业背景</div>
        </div>
        <div className="traction-item">
          <div className="traction-num"><span>双</span>实体</div>
          <div className="traction-label">苏州运营 × 香港结算</div>
        </div>
      </div>

      {/* THREE SERVICES */}
      <div className="services" id="services">
        <div className="section-header">
          <div className="section-title">
            我们只解决<br /><em>三件事</em>
          </div>
          <div className="section-note">
            每一件都是制造业出海企业<br />真实遇到的瓶颈，不是概念。
          </div>
        </div>

        <div className="service-grid">
          <div className="service-card">
            <span className="service-arrow">↗</span>
            <div className="service-num">01</div>
            <div className="service-icon-wrap">🤖</div>
            <div className="service-name">企业 Agent<br />部署</div>
            <p className="service-desc">
              为企业定制并部署专属 AI Agent 团队——内容、销售、客服、数据 Agent 全套，替代重复性人工作业，让系统自己跑起来。
            </p>
            <div className="service-tags">
              <span className="tag">多 Agent 协同</span>
              <span className="tag">私有化部署</span>
              <span className="tag">出海场景适配</span>
            </div>
          </div>

          <div className="service-card">
            <span className="service-arrow">↗</span>
            <div className="service-num">02</div>
            <div className="service-icon-wrap" aria-hidden="true">
              <span style={{
                display: 'block',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                border: '1px solid rgba(232,230,255,0.34)',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: '28px',
                  height: '1px',
                  background: 'var(--accent)',
                  transform: 'translate(-50%, -50%)'
                }} />
              </span>
            </div>
            <div className="service-name">Makox 数字员工<br />搭建</div>
            <p className="service-desc">
              为企业部署 Makox 数字员工，覆盖内容、客服、外贸跟单、SOP 自动化、多语言执行与运营协同，让一个人撬动一组岗位产能。
              <br /><br />
              不是工具接入。是岗位级 AI 落地。
            </p>
            <div className="service-tags">
              <span className="tag">岗位级 AI</span>
              <span className="tag">数字员工</span>
              <span className="tag">工作流部署</span>
              <span className="tag">2–4 周上线</span>
            </div>
          </div>

          <div className="service-card">
            <span className="service-arrow">↗</span>
            <div className="service-num">03</div>
            <div className="service-icon-wrap">🗂️</div>
            <div className="service-name">数据治理 &amp;<br />Workflow 梳理</div>
            <p className="service-desc">
              梳理企业现有作业流程，建立 AI 可接入的数据结构，设计标准化 Workflow 与 SOP，让 Agent 真正能落地运转。
            </p>
            <div className="service-tags">
              <span className="tag">SOP 标准化</span>
              <span className="tag">数据结构化</span>
              <span className="tag">AI 就绪评估</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="section-divider" />

      {/* HOW IT WORKS */}
      <div className="how">
        <div className="section-header">
          <div className="section-title">怎么合作</div>
          <div className="section-note">从诊断到上线，全程陪跑。</div>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-n">STEP 01</div>
            <div className="step-title">免费诊断</div>
            <p className="step-desc">60 分钟深度访谈，梳理企业现状与 AI 落地优先级</p>
          </div>
          <div className="step">
            <div className="step-n">STEP 02</div>
            <div className="step-title">方案设计</div>
            <p className="step-desc">定制 Agent 架构与 Workflow 方案，明确交付范围与周期</p>
          </div>
          <div className="step">
            <div className="step-n">STEP 03</div>
            <div className="step-title">快速交付</div>
            <p className="step-desc">2–4 周完成部署，真实业务场景验证，陪跑磨合上线</p>
          </div>
          <div className="step">
            <div className="step-n">STEP 04</div>
            <div className="step-title">持续优化</div>
            <p className="step-desc">上线后持续迭代 Workflow，随业务扩展按需增加 Agent</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <div className="cta-box">
          <div>
            <div className="cta-title">准备好让 AI<br />进入你的企业了吗？</div>
            <p className="cta-sub">
              预约一次免费的 AI 工作流诊断，<br />
              我们会帮你判断：<br />
              现在最值得先跑通哪一件事。
            </p>
          </div>
          <div className="cta-right">
            <div className="input-row">
              <input className="cta-input" type="email" placeholder="留下微信 / 邮箱" />
              <a href="mailto:MashiTeam@163.com" className="btn-primary" style={{whiteSpace:'nowrap'}}>预约 AI 工作流诊断</a>
            </div>
            <div className="cta-note">通常 24 小时内回复 · 首次 AI 诊断免费</div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          <a href="#" onClick={(event) => event.preventDefault()}>Makox.AI</a>
          <span style={{color:'rgba(255,255,255,0.12)',fontSize:'12px'}}> × </span>
          <a href="https://opceo.ai" target="_blank" rel="noreferrer">OPCEO.ai</a>
        </div>
        <div className="footer-right">马时科技 · 苏州 × 香港 · 2026</div>
      </footer>
    </>
  );
}
