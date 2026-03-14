import Navbar from '@/components/Navbar'
import Logo255 from '@/components/Logo255'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-20 overflow-hidden">
        {/* 배경 그리드 */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(59,130,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.04) 1px,transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
        {/* 글로우 */}
        <div className="absolute -top-24 -left-20 w-96 h-96 pointer-events-none rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.12) 0%,transparent 65%)' }} />
        <div className="absolute -bottom-16 -right-16 w-72 h-72 pointer-events-none rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(249,115,22,0.1) 0%,transparent 65%)' }} />

        <div className="relative z-10 max-w-2xl">
          {/* LIVE 태그 */}
          <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)', color: 'var(--accent2)' }}>
            <span className="w-2 h-2 rounded-full live-dot" style={{ background: 'var(--green)' }} />
            지금 바로 견적 가능
          </div>

          {/* 로고 */}
          <div className="mb-7 flex justify-center sm:justify-start">
            <Logo255 size="lg" />
          </div>

          <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted2)', maxWidth: 440 }}>
            255COM은 단순히 컴퓨터를 판매하는 브랜드가 아니라,<br />
            <strong className="font-semibold" style={{ color: 'var(--text)' }}>인간과 네트워크를 연결하는 신뢰의 플랫폼</strong>입니다.
          </p>

          {/* 철학 */}
          <div className="flex flex-col gap-3 mb-6">
            {[
              { color: '#3b82f6', title: '최적화된 성능', desc: '목적과 예산에 맞는 가장 합리적인 솔루션' },
              { color: '#22c55e', title: '투명한 신뢰',   desc: '사양·가격·서비스 과정까지 모두 투명 공개' },
              { color: '#f97316', title: '지속 가능한 가치', desc: '오래 사용하는 안정성과 효율성 추구' },
              { color: '#a78bfa', title: '네트워크 철학', desc: '숫자 255 — 모든 연결의 완결성을 의미' },
            ].map(p => (
              <div key={p.title} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1" style={{ background: p.color, boxShadow: `0 0 8px ${p.color}` }} />
                <div>
                  <div className="text-sm font-bold" style={{ color: 'var(--text)' }}>{p.title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: 'var(--muted2)' }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* 인용구 */}
          <p className="text-sm leading-relaxed mb-8 px-4 py-4 rounded-r-xl"
            style={{ color: 'var(--muted2)', background: 'rgba(59,130,246,0.05)', borderLeft: '2px solid var(--accent)' }}>
            고객이 255COM을 선택하는 순간, 삶과 비즈니스는<br />
            더 <strong style={{ color: 'var(--accent2)' }}>안정적이고 신뢰할 수 있는 네트워크</strong> 위에서 성장합니다.
          </p>

          {/* CTA 버튼 */}
          <div className="flex gap-3 flex-wrap">
            <Link href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white"
              style={{ background: 'var(--accent)' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4z" stroke="#fff" strokeWidth="1.4"/><path d="M2 4l6 5 6-5" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round"/></svg>
              견적 문의하기
            </Link>
            <Link href="#services" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium"
              style={{ border: '1px solid var(--border2)', color: 'var(--text)' }}>
              서비스 보기 →
            </Link>
          </div>

          {/* 스탯 */}
          <div className="flex gap-7 flex-wrap mt-12 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
            {[
              { num: '1만+', label: '누적 조립 건수' },
              { num: '4.9/5', label: '고객 만족도' },
              { num: '1일', label: '조립완료' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-2xl font-bold" style={{ fontFamily: 'JetBrains Mono,monospace', color: '#fff' }}>
                  {s.num.replace(/[+/일]/g, m => `<span style="color:var(--accent)">${m}</span>`).includes('<') ? (
                    <span dangerouslySetInnerHTML={{ __html: s.num.replace(/([+/일])/g, '<span style="color:var(--accent)">$1</span>') }} />
                  ) : s.num}
                </div>
                <div className="text-xs mt-1" style={{ color: 'var(--muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 스크롤 힌트 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs tracking-widest uppercase animate-bounce"
          style={{ color: 'var(--muted)' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          scroll
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="px-6 py-20" style={{ background: 'var(--s1)' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-2.5" style={{ color: 'var(--accent)' }}>서비스</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ fontFamily: 'Orbitron,sans-serif', color: '#fff' }}>
            WE DO <span style={{ color: 'var(--accent)' }}>EVERYTHING</span>
          </h2>
          <p className="text-sm leading-relaxed mb-12" style={{ color: 'var(--muted2)' }}>
            조립부터 수리, 견적까지 255COM 하나로 해결하세요.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                badge: 'PC 판매', badgeColor: 'rgba(59,130,246,0.15)', badgeText: 'var(--accent2)',
                name: '맞춤 PC 조립 · 판매',
                desc: '용도와 예산에 맞는 최적의 부품을 선정하여 직접 조립해 드립니다.',
                items: ['게이밍 PC (100만~300만원대)', '영상편집 · 렌더링 워크스테이션', '소형 사무용 미니PC'],
              },
              {
                badge: '수리 · AS', badgeColor: 'rgba(249,115,22,0.15)', badgeText: '#fb923c',
                name: 'PC 수리 · 부품 교체',
                desc: '부팅 불량, 블루스크린, 소음, 과열 등 모든 PC 트러블슈팅을 처리합니다.',
                items: ['하드웨어 진단 · 교체', 'OS 재설치 · 최적화', '데이터 백업 · 복구'],
              },
              {
                badge: '견적', badgeColor: 'rgba(34,197,94,0.15)', badgeText: '#4ade80',
                name: '무료 PC 견적 상담',
                desc: '예산과 용도를 알려주시면 최적의 부품 구성을 무료로 제안해드립니다.',
                items: ['카카오톡 · 전화 견적 상담', '컴퓨존 기준 실시간 가격', '신품 정품만 취급'],
              },
            ].map(card => (
              <div key={card.name} className="rounded-2xl p-7 transition-all duration-200 hover:-translate-y-1"
                style={{ background: 'var(--s2)', border: '1px solid var(--border)' }}>
                <span className="inline-block text-xs font-bold px-2 py-1 rounded-md mb-3"
                  style={{ background: card.badgeColor, color: card.badgeText }}>{card.badge}</span>
                <h3 className="text-base font-bold mb-2" style={{ color: '#fff' }}>{card.name}</h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--muted2)' }}>{card.desc}</p>
                <ul className="flex flex-col gap-1.5">
                  {card.items.map(item => (
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

      {/* ── CTA 배너 ── */}
      <section className="px-6 py-10">
        <div className="max-w-3xl mx-auto rounded-3xl p-12 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg,#1a3a6e,#0f2348,#1a2a4a)', border: '1px solid rgba(59,130,246,0.3)' }}>
          <div className="absolute right-[-20px] top-[-30px] text-[160px] font-black pointer-events-none select-none leading-none"
            style={{ fontFamily: 'Orbitron,sans-serif', color: 'rgba(59,130,246,0.06)', letterSpacing: '-5px' }}>255</div>
          <h2 className="text-2xl sm:text-4xl font-black mb-4 relative z-10" style={{ fontFamily: 'Orbitron,sans-serif', color: '#fff' }}>
            지금 바로<br /><span style={{ color: 'var(--accent2)' }}>무료 견적</span> 받으세요
          </h2>
          <p className="text-sm leading-relaxed mb-6 relative z-10" style={{ color: '#94b4d4', maxWidth: 360 }}>
            예산만 말씀해 주세요. 용도에 맞는 최적의 PC 구성을 바로 제안드립니다.
          </p>
          <div className="flex gap-3 flex-wrap relative z-10">
            <a href="tel:05042530483" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold text-white"
              style={{ background: 'var(--accent)' }}>📞 &nbsp;전화 문의</a>
            <a href="https://pf.kakao.com" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-white"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>💬 &nbsp;카카오톡 채팅</a>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-2.5" style={{ color: 'var(--accent)' }}>고객 후기</p>
          <h2 className="text-3xl font-black mb-12" style={{ fontFamily: 'Orbitron,sans-serif', color: '#fff' }}>
            REAL <span style={{ color: 'var(--accent)' }}>REVIEWS</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              { num: '1만+', label: '누적 조립 건수' }, { num: '4.9★', label: '평균 평점' },
              { num: '98%', label: '재방문율' },         { num: '1일↓', label: '조립완료' },
            ].map(s => (
              <div key={s.label} className="rounded-2xl p-5 text-center" style={{ background: 'var(--s2)', border: '1px solid var(--border)' }}>
                <div className="text-2xl font-bold" style={{ fontFamily: 'JetBrains Mono,monospace', color: '#fff' }}>{s.num}</div>
                <div className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { emoji:'🎮', name:'이*준', date:'2025년 2월', tag:'게이밍 PC', text:'예산 150만원으로 RTX 5060 포함해서 딱 맞게 구성해주셨어요!' },
              { emoji:'🔧', name:'박*영', date:'2025년 1월', tag:'수리·AS', text:'갑자기 PC가 안 켜져서 당일 연락했는데 당일 수리 완료해 주셨어요!' },
              { emoji:'🎬', name:'김*수', date:'2025년 3월', tag:'견적 상담', text:'영상편집용 PC 견적에서 예산 내 최선의 구성을 제안해 주셨어요.' },
            ].map(r => (
              <div key={r.name} className="rounded-2xl p-5" style={{ background: 'var(--s2)', border: '1px solid var(--border)' }}>
                <div className="text-sm text-yellow-400 mb-3">★★★★★</div>
                <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--muted2)' }}>{r.text}</p>
                <div className="flex items-center gap-2.5 pt-3.5" style={{ borderTop: '1px solid var(--border)' }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                    style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.2)' }}>{r.emoji}</div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold" style={{ color: 'var(--text)' }}>{r.name}</div>
                    <div className="text-xs" style={{ color: 'var(--muted)' }}>{r.date}</div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md" style={{ background: 'rgba(34,197,94,0.12)', color: '#4ade80' }}>{r.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="px-6 py-20" style={{ background: 'var(--s1)' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-2.5" style={{ color: 'var(--accent)' }}>오시는 길 · 연락처</p>
          <h2 className="text-3xl font-black mb-12" style={{ fontFamily: 'Orbitron,sans-serif', color: '#fff' }}>
            FIND <span style={{ color: 'var(--accent)' }}>255COM</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              {[
                { label: '주소',  value: '포란재로 36', sub: '주차 가능 · 네비 검색: 255COM' },
                { label: '전화',  value: '0504-2530-4083', href: 'tel:05042530483' },
              ].map(c => (
                <div key={c.label} className="flex items-start gap-4 p-5 rounded-2xl" style={{ background: 'var(--s2)', border: '1px solid var(--border)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="#3b82f6" strokeWidth="1.5"/><path d="M10 2a7 7 0 0 1 7 7c0 5-7 11-7 11S3 14 3 9a7 7 0 0 1 7-7z" stroke="#3b82f6" strokeWidth="1.5"/></svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--muted)' }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-medium" style={{ color: 'var(--accent2)' }}>{c.value}</a>
                    ) : (
                      <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>{c.value}</div>
                    )}
                    {c.sub && <div className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{c.sub}</div>}
                  </div>
                </div>
              ))}
              {/* 영업시간 */}
              <div className="p-5 rounded-2xl" style={{ background: 'var(--s2)', border: '1px solid var(--border)' }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--muted)' }}>영업시간</div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs" style={{ color: 'var(--green)' }}>
                    <span>월~금</span><span style={{ fontFamily: 'JetBrains Mono,monospace' }}>10:00 – 19:00</span>
                  </div>
                  <div className="flex justify-between text-xs" style={{ color: 'var(--muted2)' }}>
                    <span>토요일</span><span style={{ fontFamily: 'JetBrains Mono,monospace' }}>10:00 – 17:00</span>
                  </div>
                  <div className="flex justify-between text-xs" style={{ color: 'var(--red-txt)', opacity: 0.7 }}>
                    <span>일요일</span><span>휴무</span>
                  </div>
                </div>
              </div>
            </div>
            {/* 지도 */}
            <div className="rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-4 min-h-64"
              style={{ background: 'var(--s2)', border: '1px solid var(--border)', backgroundImage: 'linear-gradient(rgba(59,130,246,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.03) 1px,transparent 1px)', backgroundSize: '30px 30px' }}>
              <div className="w-12 h-12 rounded-full" style={{ background: 'var(--accent)', boxShadow: '0 4px 20px rgba(59,130,246,0.5)', clipPath: 'polygon(50% 0%,100% 38%,82% 100%,18% 100%,0% 38%)' }} />
              <div className="text-center text-sm" style={{ color: 'var(--muted2)' }}>
                <strong style={{ color: 'var(--text)' }}>255COM</strong><br />포란재로 36
              </div>
              <a href="https://map.kakao.com/link/search/포란재로36" target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white" style={{ background: 'var(--accent)' }}>
                🗺️ &nbsp;지도에서 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-6 pt-10 pb-24 flex flex-col gap-5" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-3xl mx-auto w-full flex flex-col sm:flex-row sm:justify-between gap-5">
          <div>
            <div className="flex gap-1" style={{ fontFamily: 'Orbitron,sans-serif', fontSize: '18px' }}>
              <span className="logo-255">255</span><span className="logo-com">COM</span>
            </div>
            <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>PC 판매 · 수리 · 견적 전문</p>
          </div>
          <div className="flex gap-5 flex-wrap items-center">
            {['서비스','후기','오시는 길'].map(t => (
              <span key={t} className="text-xs cursor-pointer" style={{ color: 'var(--muted)' }}>{t}</span>
            ))}
            <a href="tel:05042530483" className="text-xs" style={{ color: 'var(--muted)' }}>전화 문의</a>
          </div>
        </div>
        <div className="max-w-3xl mx-auto w-full pt-5 flex flex-col gap-1" style={{ borderTop: '1px solid var(--border)', fontSize: '11px', color: 'var(--muted)' }}>
          <span>상호: 이오오컴 (255COM) · 주소: 포란재로 36</span>
          <span>Tel: 0504-2530-4083</span>
          <span className="mt-2">© 2025 255COM. All rights reserved.</span>
          {/* 관리자 숨김 링크 */}
          <a href="/admin" style={{ color: 'var(--bg)', fontSize: '10px', userSelect: 'none' }} title="">255</a>
        </div>
      </footer>

      {/* ── 플로팅 견적 버튼 ── */}
      <a href="tel:05042530483"
        className="fixed bottom-14 right-5 z-50 flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-bold text-white"
        style={{ background: 'var(--orange)', boxShadow: '0 8px 32px rgba(249,115,22,0.4)', bottom: 'calc(env(safe-area-inset-bottom,0px) + 56px)' }}>
        <span className="w-2 h-2 rounded-full live-dot" style={{ background: '#fff', opacity: 0.8 }} />
        지금 견적 문의
      </a>
    </>
  )
}
