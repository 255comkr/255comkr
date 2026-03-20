import React from 'react'
import Navbar from '@/components/Navbar'
import Logo from '@/components/Logo'
import Link from 'next/link'

/* ── 공통 Footer 컴포넌트 ── */
export function Footer({ hideLinks = false }: { hideLinks?: boolean }) {
  return (
    <footer className="px-6 pt-10 pb-16"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 mb-8">
          <div>
            <Logo size={17} className="mb-2" />
            <p className="text-xs" style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
              PC 판매 · 수리 · 견적 전문<br />
              포란재로 36 · tel.0504-2530-4083
            </p>
          </div>
          {!hideLinks && (
            <div className="flex gap-6 flex-wrap items-start pt-1">
              {[['서비스','/#services'],['후기','/#reviews'],['추천 견적','/quote'],['오시는 길','/#contact']].map(([l, h]) => (
                <Link key={l} href={h} className="text-xs transition-colors"
                  style={{ color: 'var(--muted)' }}>
                  {l}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="pt-6 flex flex-col gap-1" style={{ borderTop: '1px solid var(--border)', fontSize: '11px', color: 'var(--muted)' }}>
          <span>상호: 이오오컴 (255COM)</span>
          <span className="mt-1">© 2025 255COM. All rights reserved.</span>
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

      <main style={{ background: 'var(--bg)' }}>

        {/* ━━━━ HERO ━━━━ */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden"
          style={{ paddingTop: '100px', paddingBottom: '80px' }}>

          {/* 배경 — 클로드 앱처럼 아주 미묘한 그라데이션만 */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(201,100,66,0.06), transparent 70%)' }} />

          <div className="relative z-10 max-w-2xl mx-auto w-full">

            {/* 태그라인 */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 rounded-full live-dot" style={{ background: 'var(--green)' }} />
              <span className="text-xs font-medium" style={{ color: 'var(--muted)', letterSpacing: '0.5px' }}>
                지금 바로 견적 가능
              </span>
            </div>

            {/* 로고 대형 — 모바일 가로 70% 기준 */}
            <div className="mb-6">
              <div className="flex items-baseline" style={{ gap: 'clamp(3px, 1.06vw, 7px)' }}>
                <svg
                  viewBox="60 30 281 241"
                  style={{
                    height: 'clamp(23px, 9.5vw, 52px)',
                    width: 'auto',
                    display: 'block',
                    flexShrink: 0,
                  }}
                >
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
                <span style={{
                  fontFamily: 'var(--font-logo)',
                  fontSize: 'clamp(32px, 13.2vw, 72px)',
                  fontWeight: 900,
                  color: 'var(--text)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}>
                  255<span style={{ color: 'var(--accent)' }}>COM</span>
                </span>
              </div>
            </div>

            <p className="text-base font-light leading-relaxed mb-8"
              style={{ color: 'var(--text2)', maxWidth: 480, lineHeight: 1.8 }}>
              255COM은 단순히 컴퓨터를 판매하는 브랜드가 아니라,<br />
              <span style={{ color: 'var(--text)', fontWeight: 500 }}>인간과 네트워크를 연결하는 신뢰의 플랫폼</span>입니다.
            </p>

            {/* 철학 */}
            <div className="flex flex-col gap-3 mb-10">
              {[
                ['최적화된 성능', '목적과 예산에 맞는 가장 합리적인 솔루션'],
                ['투명한 신뢰',   '사양·가격·서비스 과정까지 모두 투명 공개'],
                ['지속 가능한 가치', '오래 사용하는 안정성과 효율성 추구'],
                ['네트워크 철학', '숫자 255 — 모든 연결의 완결성을 의미'],
              ].map(([t, d]) => (
                <div key={t} className="flex items-start gap-3">
                  <div className="w-px h-10 flex-shrink-0 mt-0.5" style={{ background: 'var(--border2)' }} />
                  <div>
                    <div className="text-sm font-semibold mb-0.5" style={{ color: 'var(--text)' }}>{t}</div>
                    <div className="text-xs" style={{ color: 'var(--muted2)', lineHeight: 1.6 }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-3 flex-wrap">
              <a href="http://pf.kakao.com/_xeDNxhX"
                target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all"
                style={{ background: 'var(--accent)' }}>
                문의하기
              </a>
              <Link href="/quote"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all"
                style={{ border: '1px solid var(--border2)', color: 'var(--text2)' }}>
                추천견적
              </Link>
            </div>

            {/* 스탯 */}
            <div className="flex gap-8 flex-wrap mt-14 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
              {[
                ['10,000+', '누적 조립 건수'],
                ['8년', '용산 조립 경력'],
                ['4.9 / 5', '고객 만족도'],
                ['당일', '(부품배송완료시) 조립 완료'],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="text-xl font-bold mb-0.5"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--text)' }}>{n}</div>
                  <div className="text-xs" style={{ color: 'var(--muted)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 스크롤 힌트 */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, transparent, var(--border2))' }} />
            <span className="text-xs" style={{ color: 'var(--muted)', letterSpacing: '2px', fontSize: '10px' }}>SCROLL</span>
          </div>
        </section>

        {/* ━━━━ SERVICES ━━━━ */}
        <section id="services" className="px-6 py-20" style={{ background: 'var(--s1)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-medium mb-3" style={{ color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>서비스</p>
            <h2 className="text-3xl font-light mb-2" style={{ fontFamily: 'var(--font-base)', color: 'var(--text)' }}>
              What We Do
            </h2>
            <p className="text-sm mb-12" style={{ color: 'var(--muted2)', lineHeight: 1.7 }}>
              조립부터 수리, 견적까지 255COM 하나로 해결하세요.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  label: 'PC 판매', icon: '○',
                  title: '맞춤 PC 조립 · 판매',
                  desc: '용도와 예산에 맞는 최적의 부품을 선정하여 직접 조립해 드립니다.',
                  items: ['게이밍 PC', '영상편집 · 렌더링 워크스테이션', '소형 사무용 미니PC'],
                },
                {
                  label: '수리 · AS', icon: '◎',
                  title: 'PC 수리 · 부품 교체',
                  desc: '부팅 불량, 블루스크린, 소음, 과열 등 모든 PC 트러블슈팅을 처리합니다.',
                  items: ['하드웨어 진단 · 교체', 'OS 재설치 · 최적화', '데이터 백업 · 복구'],
                },
                {
                  label: '견적 상담', icon: '●',
                  title: '무료 PC 견적 상담',
                  desc: '예산과 용도를 알려주시면 최적의 부품 구성을 무료로 제안해드립니다.',
                  items: ['카카오톡 상담', '컴퓨존 기준 실시간 가격', '신품 정품만 취급'],
                },
              ].map((s, i) => (
                <div key={s.title}
                  className="p-6 rounded-2xl transition-all"
                  style={{
                    background: 'var(--s2)',
                    border: '1px solid var(--border)',
                    animationDelay: `${i * 0.08}s`,
                  }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-md"
                      style={{ background: 'var(--s3)', color: 'var(--muted2)' }}>{s.label}</span>
                    <span style={{ color: 'var(--accent)', fontSize: '18px' }}>{s.icon}</span>
                  </div>
                  <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text)' }}>{s.title}</h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--muted2)', lineHeight: 1.7 }}>{s.desc}</p>
                  <ul className="flex flex-col gap-2">
                    {s.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-xs" style={{ color: 'var(--muted2)' }}>
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━ 추천 견적 배너 ━━━━ */}
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <Link href="/quote"
              className="flex items-center justify-between p-6 rounded-2xl transition-all group"
              style={{ background: 'var(--s1)', border: '1px solid var(--border2)' }}>
              <div>
                <p className="text-xs font-medium mb-1.5" style={{ color: 'var(--accent)', letterSpacing: '1px' }}>255COM PICK</p>
                <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--text)' }}>255COM 추천 견적</h3>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>사무용 · 게이밍 · 전문가 3종 구성</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  {['💼','🎮','⚡'].map(ic => (
                    <span key={ic} className="w-9 h-9 rounded-xl flex items-center justify-center text-base"
                      style={{ background: 'var(--s2)', border: '1px solid var(--border)' }}>{ic}</span>
                  ))}
                </div>
                <span style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>→</span>
              </div>
            </Link>
          </div>
        </section>

        {/* ━━━━ CTA ━━━━ */}
        <section className="px-6 py-12" style={{ background: 'var(--s1)' }}>
          <div className="max-w-4xl mx-auto rounded-2xl p-10 text-center"
            style={{ background: 'var(--s2)', border: '1px solid var(--border2)' }}>
            <p className="text-xs font-medium mb-3" style={{ color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Free Estimate
            </p>
            <h2 className="text-2xl font-light mb-3"
              style={{ fontFamily: 'var(--font-base)', color: 'var(--text)' }}>
              Tell Us Your Budget
            </h2>
            <p className="text-sm leading-relaxed mb-8 max-w-sm mx-auto" style={{ color: 'var(--muted2)', lineHeight: 1.8 }}>
              용도에 맞는 최적의 PC 구성을<br />바로 제안드립니다.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="http://pf.kakao.com/_xeDNxhX" target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ background: 'var(--accent)' }}>
                문의하기
              </a>
            </div>
          </div>
        </section>

        {/* ━━━━ REVIEWS ━━━━ */}
        <section id="reviews" className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-medium mb-3" style={{ color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>고객 후기</p>
            <h2 className="text-3xl font-light mb-12" style={{ fontFamily: 'var(--font-base)', color: 'var(--text)' }}>
              Real Reviews
            </h2>

            {/* 스탯 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {[['10,000+','누적 조립'],['4.9★','평균 평점'],['98%','재방문율'],['부품 배송완료시 당일','조립 완료']].map(([n, l]) => (
                <div key={l} className="p-4 rounded-xl text-center"
                  style={{ background: 'var(--s1)', border: '1px solid var(--border)' }}>
                  <div className="text-lg font-bold mb-1"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--text)' }}>{n}</div>
                  <div className="text-xs" style={{ color: 'var(--muted)' }}>{l}</div>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { e:'🎮', name:'이*준', date:'2025년 3월', tag:'게이밍 PC',  text:'예산 250만원으로 7500X3D + RTX 5060 구성으로 딱 맞게 맞춰주셨어요!' },
                { e:'🔧', name:'박*영', date:'2025년 2월', tag:'수리·AS',   text:'갑자기 PC가 안 켜져서 당일 연락했는데 당일 수리 완료해 주셨어요!' },
                { e:'🎬', name:'김*수', date:'2025년 1월', tag:'견적 상담', text:'영상편집용 PC 견적에서 예산 내 최선의 구성을 제안해 주셨어요.' },
              ].map(r => (
                <div key={r.name} className="p-5 rounded-2xl"
                  style={{ background: 'var(--s1)', border: '1px solid var(--border)' }}>
                  <div className="text-sm text-yellow-500 mb-3 tracking-widest">★★★★★</div>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--muted2)', lineHeight: 1.7 }}>{r.text}</p>
                  <div className="flex items-center gap-2.5 pt-3"
                    style={{ borderTop: '1px solid var(--border)' }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                      style={{ background: 'var(--s2)' }}>{r.e}</div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold" style={{ color: 'var(--text)' }}>{r.name}</div>
                      <div className="text-xs" style={{ color: 'var(--muted)' }}>{r.date}</div>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-md"
                      style={{ background: 'var(--s3)', color: 'var(--muted2)' }}>{r.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━ CONTACT ━━━━ */}
        <section id="contact" className="px-6 py-20" style={{ background: 'var(--s1)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-medium mb-3" style={{ color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>오시는 길</p>
            <h2 className="text-3xl font-light mb-12" style={{ fontFamily: 'var(--font-base)', color: 'var(--text)' }}>
              Find Us
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-4">
                {[
                  { label: '주소', value: '포란재로 36', sub: '주차 가능 · 네비 검색: 255COM' },
                ].map(c => (
                  <div key={c.label} className="flex gap-4 p-5 rounded-xl"
                    style={{ background: 'var(--s2)', border: '1px solid var(--border)' }}>
                    <div>
                      <div className="text-xs font-medium mb-1.5" style={{ color: 'var(--muted)', letterSpacing: '0.5px' }}>{c.label}</div>
                      <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>{c.value}</div>
                      {c.sub && <div className="text-xs mt-1" style={{ color: 'var(--muted)' }}>{c.sub}</div>}
                    </div>
                  </div>
                ))}

                {/* 영업시간 */}
                <div className="p-5 rounded-xl" style={{ background: 'var(--s2)', border: '1px solid var(--border)' }}>
                  <div className="text-xs font-medium mb-3" style={{ color: 'var(--muted)' }}>영업시간</div>
                  <div className="flex flex-col gap-2">
                    {[
                      { d: '월 — 금', t: '10:00 – 19:00', green: true },
                      { d: '토요일',   t: '10:00 – 17:00', green: false },
                      { d: '일요일',   t: '휴무', green: false },
                    ].map(h => (
                      <div key={h.d} className="flex justify-between text-xs"
                        style={{ color: h.green ? 'var(--green)' : 'var(--muted2)' }}>
                        <span>{h.d}</span>
                        <span style={{ fontFamily: 'var(--font-mono)' }}>{h.t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 지도 */}
              <div className="rounded-xl flex flex-col items-center justify-center gap-4 min-h-56"
                style={{ background: 'var(--s2)', border: '1px solid var(--border)' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--accent)', color: '#fff', fontSize: '14px' }}>📍</div>
                <div className="text-center">
                  <div className="text-sm font-semibold mb-0.5" style={{ color: 'var(--text)' }}>255COM</div>
                  <div className="text-xs" style={{ color: 'var(--muted)' }}>포란재로 36</div>
                </div>
                <a href="https://map.kakao.com/link/search/포란재로36" target="_blank" rel="noopener"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold"
                  style={{ background: 'var(--s3)', border: '1px solid var(--border2)', color: 'var(--text2)' }}>
                  지도에서 보기 →
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      {/* 플로팅 버튼 — 상담사 아이콘 */}
      <a href="http://pf.kakao.com/_xeDNxhX"
        target="_blank" rel="noopener"
        className="fixed z-50 flex items-center justify-center rounded-full"
        style={{
          bottom: 'calc(env(safe-area-inset-bottom,0px) + 24px)',
          right: '20px',
          width: '52px',
          height: '52px',
          background: 'var(--accent)',
          boxShadow: '0 4px 20px rgba(184,152,42,0.4)',
        }}>
        {/* 상담사 아이콘 SVG */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.51 15.58 3.38 17.06L2.08 21.92L6.94 20.62C8.42 21.49 10.15 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="white" opacity="0.95"/>
          <circle cx="8.5" cy="12" r="1.2" fill="var(--accent)"/>
          <circle cx="12" cy="12" r="1.2" fill="var(--accent)"/>
          <circle cx="15.5" cy="12" r="1.2" fill="var(--accent)"/>
        </svg>
      </a>
    </>
  )
}
