import React from 'react'
import Navbar from '@/components/Navbar'
import Logo from '@/components/Logo'
import Link from 'next/link'

/* ── 공통 Footer ── */
export function Footer({ hideLinks = false }: { hideLinks?: boolean }) {
  return (
    <footer className="footer">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 mb-8">
          <div>
            <Logo size={17} className="mb-2" />
            <p className="footer-tagline">
              PC 판매 · 수리 · 견적 전문<br />
              포란재로 36 · 0504-2530-4083
            </p>
          </div>
          {!hideLinks && (
            <div className="flex gap-6 flex-wrap items-start pt-1">
              {[['서비스','/#services'],['후기','/#reviews'],['추천 견적','/quote'],['오시는 길','/#contact']].map(([l, h]) => (
                <Link key={l} href={h} className="footer-link">{l}</Link>
              ))}
            </div>
          )}
        </div>
        <div className="footer-bottom">
          <span>상호: 이오오컴 (255COM)</span>
          <span>© 2026 255COM. All rights reserved.</span>
          <a href="/admin" style={{ color: 'var(--bg)', fontSize: '10px', userSelect: 'none' }}>255</a>
        </div>
      </div>
    </footer>
  )
}

/* ── 메인 페이지 ── */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="page-bg">

        {/* HERO */}
        <section className="hero">
          <div className="hero-glow" />
          <div className="relative z-10 max-w-2xl mx-auto w-full">

            <div className="hero-tag">
              <div className="hero-tag-dot live-dot" />
              <span className="hero-tag-text">지금 바로 견적 가능</span>
            </div>

            <div className="hero-logo-wrap">
              <svg viewBox="60 30 281 241" className="hero-logo-svg">
                <defs>
                  <filter id="gHero">
                    <feGaussianBlur stdDeviation="1.2" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>
                <rect x="70" y="40" width="260" height="220" fill="none" stroke="var(--text)" strokeWidth="10" opacity="0.82" />
                <rect x="90" y="60" width="60" height="40" rx="2" fill="none" stroke="var(--text)" strokeWidth="10" opacity="0.82" />
                <rect x="250" y="60" width="60" height="40" rx="2" fill="none" stroke="var(--text)" strokeWidth="10" opacity="0.82" />
                <rect x="90" y="60" width="60" height="40" rx="2" fill="var(--accent)" filter="url(#gHero)">
                  <animate attributeName="opacity" values="0.85;0.1;0.75;0.05;0.9;0.15;0.6;0.02;0.88;0.08;0.7;0.03;0.85" dur="1.4s" repeatCount="indefinite" />
                </rect>
                <rect x="250" y="60" width="60" height="40" rx="2" fill="var(--green)" opacity="0.85" />
                <path d="M90,240 L90,120 L170,120 L170,80 L230,80 L230,120 L310,120 L310,240 Z"
                  fill="none" stroke="var(--text)" strokeWidth="10" strokeLinejoin="round" opacity="0.82" />
              </svg>
              <span className="hero-logo-text">
                255<span className="logo-com">COM</span>
              </span>
            </div>

            <p className="hero-desc">
              255COM은 단순히 컴퓨터를 판매하는 브랜드가 아니라,<br />
              <strong>인간과 네트워크를 연결하는 신뢰의 플랫폼</strong>입니다.
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {[
                ['최적화된 성능',   '목적과 예산에 맞는 가장 합리적인 솔루션'],
                ['투명한 신뢰',     '사양·가격·서비스 과정까지 모두 투명 공개'],
                ['지속 가능한 가치','오래 사용하는 안정성과 효율성 추구'],
                ['네트워크 철학',   '숫자 255 — 모든 연결의 완결성을 의미'],
              ].map(([t, d]) => (
                <div key={t} className="phil-item">
                  <div className="phil-line" />
                  <div>
                    <div className="phil-title">{t}</div>
                    <div className="phil-desc">{d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap mb-14">
              <a href="http://pf.kakao.com/_xeDNxhX" target="_blank" rel="noopener" className="btn btn-primary">
                문의하기
              </a>
              <Link href="/quote" className="btn btn-ghost">추천견적</Link>
            </div>

            <div className="flex gap-8 flex-wrap pt-8 border-top">
              {[
                ['10,000+', '누적 조립 건수'],
                ['8년', '용산 조립 경력'],
                ['4.9 / 5', '고객 만족도'],
                ['당일',    '조립 완료(부품배송완료시) '],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="stat-num">{n}</div>
                  <div className="stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-hint">
            <div className="scroll-hint-line" />
            <span className="scroll-hint-text">SCROLL</span>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section bg-s1">
          <div className="max-w-4xl mx-auto">
            <p className="sec-eyebrow">서비스</p>
            <h2 className="sec-title">What We Do</h2>
            <p className="sec-sub">조립부터 수리, 견적까지 255COM 하나로 해결하세요.</p>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label:'PC 판매',  icon:'○', title:'맞춤 PC 조립 · 판매',
                  desc:'용도와 예산에 맞는 최적의 부품을 선정하여 직접 조립해 드립니다.',
                  items:['소형 사무용 미니PC','게이밍 PC','영상편집 · 렌더링 워크스테이션'] },
                { label:'수리 · AS', icon:'◎', title:'PC 수리 · 부품 교체',
                  desc:'부팅 불량, 블루스크린, 소음, 과열 등 모든 PC 트러블슈팅을 처리합니다.',
                  items:['하드웨어 진단 · 교체','OS 재설치 · 최적화','데이터 백업 · 복구'] },
                { label:'견적 상담', icon:'●', title:'무료 PC 견적 상담',
                  desc:'예산과 용도를 알려주시면 최적의 부품 구성을 무료로 제안해드립니다.',
                  items:['카카오톡 상담','컴퓨존, 다나와 실시간 가격 기준','정품 취급'] },
              ].map(s => (
                <div key={s.title} className="svc-card">
                  <div className="flex items-center justify-between mb-4">
                    <span className="svc-badge">{s.label}</span>
                    <span className="svc-icon">{s.icon}</span>
                  </div>
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-desc">{s.desc}</p>
                  <ul className="flex flex-col gap-2">
                    {s.items.map(item => (
                      <li key={item} className="svc-item">
                        <span className="svc-dot" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 추천 견적 배너 */}
        <section className="section">
          <div className="max-w-4xl mx-auto">
            <Link href="/quote" className="quote-banner">
              <div>
                <p className="quote-banner-eye">255COM PICK</p>
                <h3 className="quote-banner-title">255COM 추천 견적</h3>
                <p className="quote-banner-sub">사무용 · 게이밍 · 전문가 3종 구성</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  {['💼','🎮','⚡'].map(ic => (
                    <span key={ic} className="quote-banner-ico">{ic}</span>
                  ))}
                </div>
                <span className="quote-banner-arrow">→</span>
              </div>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-s1">
          <div className="max-w-4xl mx-auto">
            <div className="cta-box">
              <p className="sec-eyebrow mb-3">무료 견적</p>
              <h2 className="cta-title">Tell Us Your Budget</h2>
              <p className="cta-sub">용도에 맞는 최적의 PC 구성을<br />바로 제안드립니다.</p>
              <a href="http://pf.kakao.com/_xeDNxhX" target="_blank" rel="noopener" className="btn btn-primary">
                문의하기
              </a>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="section">
          <div className="max-w-4xl mx-auto">
            <p className="sec-eyebrow">고객 후기</p>
            <h2 className="sec-title">Real Reviews</h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {[['10,000+','누적 조립'],['4.9★','평균 평점'],['98%','재방문율'],['당일','(부품배송완료시) 조립 완료']].map(([n, l]) => (
                <div key={l} className="stat-card">
                  <div className="stat-card-num">{n}</div>
                  <div className="stat-card-label">{l}</div>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { e:'🎮', name:'이*준', date:'2026년 3월', tag:'게이밍 PC',  text:'예산 250만원으로 7500X3D + RTX 5060 구성으로 딱 맞게 맞춰주셨어요!' },
                { e:'🔧', name:'박*영', date:'2026년 2월', tag:'수리·AS',   text:'갑자기 PC가 안 켜져서 당일 연락했는데 당일 수리 완료해 주셨어요!' },
                { e:'🎬', name:'김*수', date:'2026년 1월', tag:'견적 상담', text:'영상편집용 PC 견적에서 예산 내 최선의 구성을 제안해 주셨어요.' },
              ].map(r => (
                <div key={r.name} className="review-card">
                  <div className="review-stars">★★★★★</div>
                  <p className="review-text">{r.text}</p>
                  <div className="review-divider">
                    <div className="review-avatar">{r.e}</div>
                    <div>
                      <div className="review-name">{r.name}</div>
                      <div className="review-date">{r.date}</div>
                    </div>
                    <span className="review-tag">{r.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section bg-s1">
          <div className="max-w-4xl mx-auto">
            <p className="sec-eyebrow">오시는 길</p>
            <h2 className="sec-title">Find Us</h2>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-4">
                <div className="info-card">
                  <div className="info-label">주소</div>
                  <div className="info-value">포란재로 36</div>
                  <div className="info-sub">주차 가능 · 네비 검색: 255COM</div>
                </div>

                <div className="info-card">
                  <div className="info-label">영업시간</div>
                  <div className="flex flex-col gap-2 mt-1">
                    {[
                      { d:'월 — 금', t:'10:00 – 19:00', open:true  },
                      { d:'토요일',  t:'10:00 – 15:00', open:false },
                      { d:'일요일',  t:'휴무',           open:false },
                    ].map(h => (
                      <div key={h.d} className={`hours-row${h.open ? ' open' : ''}`}>
                        <span>{h.d}</span>
                        <span className="hours-time">{h.t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="map-box">
                <div className="map-pin">📍</div>
                <div>
                  <div className="map-name">255COM</div>
                  <div className="map-addr">포란재로 36</div>
                </div>
                <a href="https://map.kakao.com/link/search/포란재로36"
                  target="_blank" rel="noopener"
                  className="btn btn-ghost t-caption">
                  지도에서 보기 →
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      {/* 플로팅 버튼 */}
      <a href="http://pf.kakao.com/_xeDNxhX" target="_blank" rel="noopener" className="float-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.51 15.58 3.38 17.06L2.08 21.92L6.94 20.62C8.42 21.49 10.15 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="white" opacity="0.95"/>
          <circle cx="8.5" cy="12" r="1.2" fill="var(--accent)"/>
          <circle cx="12" cy="12" r="1.2" fill="var(--accent)"/>
          <circle cx="15.5" cy="12" r="1.2" fill="var(--accent)"/>
        </svg>
      </a>
    </>
  )
}
