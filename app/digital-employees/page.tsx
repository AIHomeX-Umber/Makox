import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Makox 数字员工 · Manufacturing Export AI Workforce",
  description: "面向制造业出海的 AI 员工团队。覆盖内容、报价、风险、恢复与技术部署工作流。",
};

type Officer = {
  name: string;
  role: string;
  color: string;
  status: string;
  slogan: string;
  description: string;
  skills: string[];
  cta: string;
  sigil: "geek" | "hype" | "banker" | "doom" | "odd" | "harbor";
};

const officers: Officer[] = [
  {
    name: "Geek",
    role: "Technical Operator",
    color: "#635BFF",
    status: "Active",
    slogan: "You tell me what to build. I ship it.",
    description: "把制造业出海中的页面、接口、自动化流程和系统结构搭起来。",
    skills: ["FIX", "CONNECT", "GENERATE", "STRUCTURE"],
    cta: "部署 Geek →",
    sigil: "geek",
  },
  {
    name: "Hype",
    role: "Attention Operator",
    color: "#FF6B9D",
    status: "Active",
    slogan: "No one knows you yet? I haven't started.",
    description: "把产品卖点、品牌故事和出海内容变成能被看见的信号。",
    skills: ["AMPLIFY", "POSITION", "SIGNAL", "DISTRIBUTE"],
    cta: "部署 Hype →",
    sigil: "hype",
  },
  {
    name: "Banker",
    role: "Finance Operator",
    color: "#5EEFB0",
    status: "Ready",
    slogan: "Numbers don't lie. Neither do I.",
    description: "处理报价、利润、现金流和单位经济模型，让每个订单算得清楚。",
    skills: ["PRICE", "MARGIN", "CASHFLOW", "UNIT ECONOMICS"],
    cta: "部署 Banker →",
    sigil: "banker",
  },
  {
    name: "Doom",
    role: "Risk Operator",
    color: "#FFD166",
    status: "Ready",
    slogan: "You move fast. I handle the fallout.",
    description: "提前识别供应链、平台、客户、合规和运营风险，避免出海翻车。",
    skills: ["PRE-MORTEM", "RISK MAP", "WEAK POINTS", "STRESS TEST"],
    cta: "部署 Doom →",
    sigil: "doom",
  },
  {
    name: "Odd",
    role: "Taste Operator",
    color: "#C8B8FF",
    status: "Classified",
    slogan: "I only work with taste.",
    description: "判断品牌、视觉和内容是否足够有记忆点，避免变成普通工厂官网。",
    skills: ["TASTE CHECK", "DIFFERENTIATION", "AESTHETIC DIRECTION", "MAKE IT MEMORABLE"],
    cta: "了解 Odd →",
    sigil: "odd",
  },
  {
    name: "Harbor",
    role: "Recovery Operator",
    color: "#8FA7FF",
    status: "Always On",
    slogan: "Rest. I'll keep watch.",
    description: "当创始人和团队被任务压垮时，Harbor 负责降低噪音、重排优先级、恢复聚焦。",
    skills: ["CLEAR NOISE", "SLOW DOWN", "REBUILD FOCUS", "WRITE THE UNSAID"],
    cta: "打开 Harbor →",
    sigil: "harbor",
  },
];

const activities = [
  {
    text: "Hype 完成了卫浴产品英文卖点重写，输出 3 个海外市场角度",
    meta: "内容与增长 · B2B 出海 · Product Positioning",
    result: "✓ 可发布",
  },
  {
    text: "Banker 重新测算了欧洲渠道报价，发现 12% 隐性利润损耗",
    meta: "财务与报价 · Export Pricing",
    result: "¥ 已标记",
  },
  {
    text: "Geek 生成了独立站落地页结构，并连接询盘表单",
    meta: "技术部署 · Landing Page",
    result: "部署就绪",
  },
  {
    text: "Doom 完成供应商依赖风险扫描，识别 2 个单点故障",
    meta: "风险控制 · Supply Chain",
    result: "风险已标记",
  },
  {
    text: "Harbor 重排了本周任务优先级，压缩为 3 个必须推进事项",
    meta: "恢复系统 · Founder Focus",
    result: "Space cleared",
  },
];

export default function DigitalEmployeesPage() {
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
        body { background: var(--bg); color: var(--text); font-family: 'Syne', -apple-system, sans-serif; -webkit-font-smoothing: antialiased; }
        a { color: inherit; text-decoration: none; }
        .grid-bg { position: fixed; inset: 0; z-index: 0; pointer-events: none; background-image: linear-gradient(rgba(232,105,58,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(232,105,58,0.045) 1px, transparent 1px); background-size: 42px 42px; }
        .scanline { position: fixed; inset: 0; z-index: 1; pointer-events: none; background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px); }
        .container { position: relative; z-index: 2; max-width: 1120px; margin: 0 auto; padding: 0 28px 84px; }
        .nav { display: flex; align-items: center; justify-content: space-between; padding: 22px 0 30px; border-bottom: 0.5px solid var(--border); }
        .logo { font-family: 'DM Serif Display', serif; font-size: 24px; letter-spacing: -0.5px; }
        .logo span { color: var(--accent); }
        .nav-right { display: flex; align-items: center; gap: 22px; }
        .nav-link { font-family: 'DM Mono', monospace; font-size: 11px; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; }
        .nav-link:hover { color: var(--text); }
        .nav-status { display: flex; align-items: center; gap: 7px; font-family: 'DM Mono', monospace; font-size: 10px; color: #5EEFB0; letter-spacing: 0.08em; }
        .pulse-dot { width: 7px; height: 7px; border-radius: 50%; background: #5EEFB0; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(94,239,176,0.45); } 50% { box-shadow: 0 0 0 5px rgba(94,239,176,0); } }
        .hero { display: grid; grid-template-columns: minmax(0, 1fr) 310px; gap: 52px; align-items: start; padding: 64px 0 52px; }
        .eyebrow, .section-kicker, .panel-title { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.18em; color: var(--accent); text-transform: uppercase; }
        .eyebrow { margin-bottom: 20px; }
        h1 { font-family: 'DM Serif Display', serif; font-size: clamp(44px, 6vw, 76px); line-height: 1.02; letter-spacing: -1px; margin-bottom: 24px; }
        h1 em { color: var(--accent2); font-style: italic; }
        .hero-sub { color: var(--muted); font-size: 15px; line-height: 1.85; max-width: 590px; margin-bottom: 30px; }
        .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn-primary, .btn-ghost, .officer-cta { border-radius: 6px; font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 600; padding: 13px 24px; display: inline-block; transition: all 0.2s; }
        .btn-primary { background: var(--accent); color: #fff; }
        .btn-primary:hover, .btn-ghost:hover, .officer-cta:hover { transform: translateY(-1px); opacity: 0.88; }
        .btn-ghost { border: 0.5px solid var(--border2); color: var(--muted); }
        .stat-panel { background: rgba(232,105,58,0.055); border: 0.5px solid rgba(232,105,58,0.22); border-radius: 18px; padding: 24px; }
        .panel-title { color: rgba(232,105,58,0.7); margin-bottom: 18px; }
        .stat-row { display: flex; justify-content: space-between; gap: 18px; align-items: baseline; padding: 11px 0; border-bottom: 0.5px solid rgba(255,255,255,0.06); }
        .stat-row:last-child { border-bottom: none; }
        .stat-label { color: var(--muted); font-size: 12px; }
        .stat-val { font-family: 'DM Mono', monospace; font-size: 18px; font-weight: 500; color: var(--text); }
        .divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(232,105,58,0.28), transparent); margin: 34px 0 44px; }
        .tabs { display: flex; gap: 4px; width: fit-content; max-width: 100%; flex-wrap: wrap; margin-bottom: 26px; padding: 4px; background: rgba(255,255,255,0.025); border: 0.5px solid var(--border); border-radius: 10px; }
        .tab { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.08em; color: var(--muted); padding: 8px 15px; border-radius: 7px; }
        .tab.active { background: rgba(232,105,58,0.12); color: var(--accent2); border: 0.5px solid rgba(232,105,58,0.28); }
        .section-head { display: flex; align-items: center; justify-content: space-between; gap: 18px; margin-bottom: 24px; }
        .badge { font-family: 'DM Mono', monospace; font-size: 10px; color: var(--muted); letter-spacing: 0.06em; }
        .officer-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; margin-bottom: 46px; }
        .officer-card { position: relative; overflow: hidden; background: rgba(255,255,255,0.025); border: 0.5px solid var(--border); border-radius: 18px; padding: 22px; min-height: 360px; transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s; }
        .officer-card:hover { transform: translateY(-4px); border-color: var(--officer-color); box-shadow: 0 18px 42px rgba(0,0,0,0.24); }
        .officer-card::before { content: ''; position: absolute; top: -58px; right: -58px; width: 138px; height: 138px; border-radius: 50%; background: var(--officer-color); opacity: 0.08; }
        .card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 18px; position: relative; }
        .sigil { width: 48px; height: 48px; border-radius: 13px; display: flex; align-items: center; justify-content: center; background: color-mix(in srgb, var(--officer-color) 16%, transparent); border: 0.5px solid color-mix(in srgb, var(--officer-color) 34%, transparent); }
        .status { font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.1em; padding: 4px 9px; border-radius: 99px; color: var(--officer-color); background: color-mix(in srgb, var(--officer-color) 10%, transparent); border: 0.5px solid color-mix(in srgb, var(--officer-color) 22%, transparent); text-transform: uppercase; }
        .role { font-family: 'DM Mono', monospace; font-size: 10px; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 6px; }
        .name { font-size: 28px; font-weight: 800; margin-bottom: 10px; }
        .slogan { border-left: 2px solid var(--officer-color); padding-left: 10px; color: rgba(240,237,232,0.62); font-style: italic; font-size: 13px; line-height: 1.6; margin-bottom: 16px; }
        .desc { color: var(--muted); font-size: 13px; line-height: 1.75; margin-bottom: 18px; }
        .skills { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 22px; }
        .skill { font-family: 'DM Mono', monospace; font-size: 9px; color: rgba(240,237,232,0.42); background: rgba(255,255,255,0.045); border: 0.5px solid rgba(255,255,255,0.06); border-radius: 4px; padding: 4px 7px; }
        .officer-cta { width: 100%; text-align: center; color: #fff; background: var(--officer-color); font-size: 12px; }
        .terminal { border: 0.5px solid var(--border); border-radius: 14px; background: rgba(0,0,0,0.32); padding: 18px 20px; font-family: 'DM Mono', monospace; font-size: 12px; color: rgba(240,237,232,0.62); margin-bottom: 44px; }
        .terminal strong { color: var(--accent2); font-weight: 500; }
        .feed-wrap { display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 22px; margin-bottom: 64px; }
        .activity-feed { border: 0.5px solid var(--border); border-radius: 18px; background: rgba(255,255,255,0.025); overflow: hidden; }
        .activity-item { padding: 18px 20px; border-bottom: 0.5px solid var(--border); }
        .activity-item:last-child { border-bottom: none; }
        .activity-text { font-size: 14px; line-height: 1.7; margin-bottom: 8px; }
        .activity-meta { font-family: 'DM Mono', monospace; font-size: 10px; color: var(--muted); letter-spacing: 0.04em; margin-bottom: 8px; }
        .activity-result { font-family: 'DM Mono', monospace; font-size: 10px; color: var(--accent2); }
        .workflow-note { border: 0.5px solid rgba(232,105,58,0.18); border-radius: 18px; padding: 24px; background: rgba(232,105,58,0.045); }
        .workflow-note h2, .cta-title { font-family: 'DM Serif Display', serif; font-size: clamp(30px, 4vw, 44px); line-height: 1.08; letter-spacing: -0.5px; margin-bottom: 18px; }
        .workflow-note p, .cta-sub { color: var(--muted); font-size: 15px; line-height: 1.85; }
        .cta-box { border: 0.5px solid rgba(232,105,58,0.22); border-radius: 22px; background: linear-gradient(135deg, rgba(232,105,58,0.1), rgba(196,168,130,0.04)); padding: 34px; display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: center; }
        .input-row { display: flex; gap: 10px; }
        .cta-input { flex: 1; min-width: 0; background: rgba(0,0,0,0.28); border: 0.5px solid var(--border2); border-radius: 6px; padding: 13px 14px; color: var(--text); font-family: 'Syne', sans-serif; }
        .cta-note { font-family: 'DM Mono', monospace; font-size: 10px; color: var(--muted); margin-top: 10px; }
        @media (max-width: 900px) { .hero, .feed-wrap, .cta-box { grid-template-columns: 1fr; } .officer-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } .nav-right { gap: 12px; } }
        @media (max-width: 640px) { .container { padding: 0 18px 64px; } .nav { align-items: flex-start; gap: 18px; flex-direction: column; } .nav-right { flex-wrap: wrap; } .officer-grid { grid-template-columns: 1fr; } .input-row { flex-direction: column; } }
      `}</style>
      <div className="grid-bg" />
      <div className="scanline" />
      <main className="container">
        <nav className="nav">
          <a href="/" className="logo">Ma<span>k</span>ox</a>
          <div className="nav-right">
            <a className="nav-link" href="/">返回首页</a>
            <a className="nav-link" href="/digital-employees">数字员工</a>
            <a className="nav-link" href="https://opceo.ai" target="_blank" rel="noopener noreferrer">OPCEO.ai</a>
            <span className="nav-status"><span className="pulse-dot" />SYSTEM ONLINE</span>
          </div>
        </nav>

        <section className="hero">
          <div>
            <div className="eyebrow">// Makox 数字员工系统 · Manufacturing Export AI Workforce</div>
            <h1>
              让制造业<em>出海</em>，<br />
              第一次拥有<br />
              <em>AI 员工团队。</em>
            </h1>
            <p className="hero-sub">
              从内容生产、外贸跟单、报价测算到风险预警，Makox 将制造业出海流程拆解成可部署、可执行、可复用的 AI 数字员工。
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="mailto:MashiTeam@163.com">预约 AI 工作流诊断</a>
              <a className="btn-ghost" href="#officers">查看六位数字员工 →</a>
            </div>
          </div>
          <aside className="stat-panel">
            <div className="panel-title">// 当前进展</div>
            <div className="stat-row"><span className="stat-label">早期收入</span><span className="stat-val">100万+</span></div>
            <div className="stat-row"><span className="stat-label">深度合作客户</span><span className="stat-val">3+</span></div>
            <div className="stat-row"><span className="stat-label">制造业背景</span><span className="stat-val">20年</span></div>
            <div className="stat-row"><span className="stat-label">双实体架构</span><span className="stat-val">苏州 × 香港</span></div>
          </aside>
        </section>

        <div className="divider" />

        <div className="tabs" aria-label="Manufacturing export workflow categories">
          <span className="tab active">全部员工</span>
          <span className="tab">内容与增长</span>
          <span className="tab">财务与报价</span>
          <span className="tab">风险与恢复</span>
        </div>

        <section id="officers">
          <div className="section-head">
            <div className="section-kicker">// 当前部署 · Makox 数字员工</div>
            <div className="badge">6 officers · manufacturing export workflow</div>
          </div>
          <div className="officer-grid">
            {officers.map((officer) => (
              <article className="officer-card" key={officer.name} style={{ "--officer-color": officer.color } as CSSProperties}>
                <div className="card-top">
                  <OfficerSigil type={officer.sigil} color={officer.color} />
                  <span className="status">{officer.status}</span>
                </div>
                <div className="role">{officer.role}</div>
                <h2 className="name">{officer.name}</h2>
                <div className="slogan">“{officer.slogan}”</div>
                <p className="desc">{officer.description}</p>
                <div className="skills">
                  {officer.skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}
                </div>
                <a className="officer-cta" href="mailto:MashiTeam@163.com">{officer.cta}</a>
              </article>
            ))}
          </div>
        </section>

        <div className="terminal">
          <strong>system@makox:~$</strong> 正在监控 6 位数字员工 · 制造业出海工作流运行中<br />
          Hype 已完成产品定位草案 · 等待发布确认 · Geek 已生成落地页结构 · 询盘表单待连接 · Banker 发现报价模型中的利润缺口 · 建议复核
        </div>

        <section className="feed-wrap">
          <div className="workflow-note">
            <div className="section-kicker" style={{ marginBottom: "18px" }}>// 真实业务动态</div>
            <h2>AI 员工不是演示界面。<br />是业务流程里的执行层。</h2>
            <p>
              Makox 关注的是真实制造业出海场景：产品内容、报价模型、供应链风险、独立站部署和创始人任务噪音。每一位数字员工都围绕一个可交付结果工作。
            </p>
          </div>
          <div className="activity-feed">
            <div className="panel-title" style={{ padding: "18px 20px 0" }}>workflow examples</div>
            {activities.map((item) => (
              <div className="activity-item" key={item.text}>
                <div className="activity-text">{item.text}</div>
                <div className="activity-meta">{item.meta}</div>
                <div className="activity-result">{item.result}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-box">
          <div>
            <div className="cta-title">准备把 AI 员工<br />放进你的出海流程了吗？</div>
            <p className="cta-sub">
              预约一次 AI 工作流诊断，<br />
              我们会帮你判断：<br />
              最值得先部署哪一位数字员工。
            </p>
          </div>
          <div>
            <div className="input-row">
              <input className="cta-input" type="email" placeholder="留下微信 / 邮箱" />
              <a href="mailto:MashiTeam@163.com" className="btn-primary" style={{ whiteSpace: "nowrap" }}>预约 AI 工作流诊断</a>
            </div>
            <div className="cta-note">通常 24 小时内回复 · 首次 AI 诊断免费</div>
          </div>
        </section>
      </main>
    </>
  );
}

function OfficerSigil({ type, color }: { type: Officer["sigil"]; color: string }) {
  return (
    <div className="sigil" aria-hidden="true">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        {type === "geek" && (
          <>
            <rect x="6" y="6" width="14" height="14" stroke={color} strokeWidth="1.4" />
            <rect x="10" y="10" width="10" height="10" stroke={color} strokeOpacity="0.45" />
            <circle cx="23" cy="23" r="2.4" fill={color} />
          </>
        )}
        {type === "hype" && (
          <>
            <circle cx="12" cy="14" r="8" stroke={color} strokeWidth="1.2" />
            <circle cx="18" cy="14" r="8" stroke={color} strokeOpacity="0.45" />
            <circle cx="15" cy="14" r="2.2" fill={color} />
          </>
        )}
        {type === "banker" && (
          <>
            <rect x="7" y="7" width="12" height="12" fill={color} fillOpacity="0.8" />
            <path d="M5 23H25" stroke={color} strokeWidth="1.6" />
          </>
        )}
        {type === "doom" && (
          <>
            <path d="M22 10A9 9 0 1 0 20 23" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M20 7L24 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="22" cy="22" r="2.2" fill={color} />
          </>
        )}
        {type === "odd" && (
          <path d="M8 6L23 9L20 23L10 25L5 15Z" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.12" />
        )}
        {type === "harbor" && (
          <>
            <path d="M7 17A8 8 0 0 1 23 17" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M15 8V22" stroke={color} strokeOpacity="0.5" />
            <circle cx="15" cy="19" r="2.4" fill={color} />
          </>
        )}
      </svg>
    </div>
  );
}
