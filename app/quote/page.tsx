import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { Footer } from '@/app/page'

export const metadata: Metadata = {
  title: '255COM 추천 견적',
  description: '2026년 3월 견적 · 사무용 / 고사양 게이밍 / 전문가 작업용',
}

const BUILDS = [
  {
    num: '01', type: 'Office · AMD', label: 'OFFICE',
    title: '사무용 PC', icon: '💼',
    // 차분한 세이지 그린
    color: '#6b9e7e', border: 'rgba(107,158,126,.2)',
    glow: 'rgba(107,158,126,.06)', bgNum: 'rgba(107,158,126,.05)',
    badgeBg: 'rgba(107,158,126,.14)', badgeBorder: 'rgba(107,158,126,.28)',
    priceBg: 'rgba(107,158,126,.1)', priceBorder: 'rgba(107,158,126,.22)',
    partsBorder: 'rgba(107,158,126,.15)',
    price: '846,880',
    desc: '웹서핑 · 유튜브 · 문서작업 · 인강 · 영상감상\nAMD 내장그래픽(Vega 7)으로 여유로운 멀티 성능',
    parts: [
      { k:'CPU',  v:'AMD 라이젠5 5500GT (멀티팩)',           s:'215,600원' },
      { k:'쿨러', v:'기본 쿨러 사용 가능',                    s:'' },
      { k:'M/B',  v:'ASUS PRIME A520M-A II',               s:'87,480원' },
      { k:'RAM',  v:'마이크론 Crucial DDR4-3200 CL22 8G×2', s:'228,540원' },
      { k:'GPU',  v:'내장 그래픽 Vega 7',                   s:'롤·오버워치 하옵 가능' },
      { k:'SSD',  v:'삼성전자 980 M.2 NVMe 500GB',          s:'228,580원' },
      { k:'PSU',  v:'FSP HYPER K PRO 500W',                s:'56,680원' },
      { k:'케이스',v:'구매자 취향',                           s:'30,000원대' },
    ],
    tags: ['웹서핑','유튜브','문서작업','롤 · 캐주얼 게임','인강','매장 포스'],
    hl:  ['웹서핑','유튜브','문서작업'],
    note: 'AMD 내장그래픽이 인텔 대비 우위',
    ctaBg: 'var(--accent)',
  },
  {
    num: '02', type: 'Gaming · FHD High-End', label: 'GAMING',
    title: 'FHD 고사양 게이밍 PC', icon: '🎮',
    // 차분한 스틸 블루
    color: '#6e93b5', border: 'rgba(110,147,181,.2)',
    glow: 'rgba(110,147,181,.06)', bgNum: 'rgba(110,147,181,.05)',
    badgeBg: 'rgba(110,147,181,.14)', badgeBorder: 'rgba(110,147,181,.28)',
    priceBg: 'rgba(110,147,181,.1)', priceBorder: 'rgba(110,147,181,.22)',
    partsBorder: 'rgba(110,147,181,.15)',
    price: '2,448,130',
    desc: '주식 · 포토샵 · 라이트룸 · 풀옵 게이밍\n대부분의 가정용도를 한 번에 커버',
    parts: [
      { k:'CPU',  v:'AMD 라이젠5 7500X3D',                      s:'378,670원' },
      { k:'쿨러', v:'PCCOOLER PALADIN 400',                     s:'30,020원' },
      { k:'M/B',  v:'GIGABYTE B650M K',                         s:'126,360원' },
      { k:'RAM',  v:'ADATA DDR5-5600 CL46 16G×2 (32GB)',      s:'688,560원' },
      { k:'GPU',  v:'PALIT RTX 5060 DUAL OC D7 8GB',          s:'599,000원' },
      { k:'SSD',  v:'SK하이닉스 Platinum P41 M.2 NVMe 1TB',   s:'402,210원' },
      { k:'PSU',  v:'SuperFlower LEADEX III GOLD UP ATX3.1 750W', s:'143,310원' },
      { k:'케이스',v:'구매자 취향(어항 또는 팬 많은 케이스)',    s:'80,000원대' },
    ],
    tags: ['FHD 풀옵 게이밍','포토샵','주식','라이트룸','영화감상','여유로운 사무'],
    hl:  ['FHD 풀옵 게이밍','포토샵','주식'],
    note: '7500X3D는 프레임 방어 특화\n메모리 단발 가능',
    ctaBg: 'var(--accent)',
  },
  {
    num: '03', type: 'Professional · Intel', label: 'PRO',
    title: '전문가 작업용 PC', icon: '⚡',
    // 차분한 모브 퍼플
    color: '#9b8ab5', border: 'rgba(155,138,181,.2)',
    glow: 'rgba(155,138,181,.06)', bgNum: 'rgba(155,138,181,.05)',
    badgeBg: 'rgba(155,138,181,.14)', badgeBorder: 'rgba(155,138,181,.28)',
    priceBg: 'rgba(155,138,181,.1)', priceBorder: 'rgba(155,138,181,.22)',
    partsBorder: 'rgba(155,138,181,.15)',
    price: '4,053,920',
    desc: 'QHD 165 · 4K 렌더링 · 영상편집 · AI 작업\n높은 멀티성능 + 고성능 그래픽 카드 조합',
    parts: [
      { k:'CPU',  v:'인텔 코어 울트라7 시리즈2 265KF (벌크)',         s:'402,870원' },
      { k:'쿨러', v:'발키리 GL360 ARGB (360mm 수랭)',                s:'165,780원' },
      { k:'M/B',  v:'MSI PRO Z890-A',                             s:'393,860원' },
      { k:'RAM',  v:'ESSENCORE KLEVV DDR5-5600 CL46 16G×2',        s:'698,760원' },
      { k:'GPU',  v:'COLORFUL iGame RTX 5070 Ti 토마호크 EX',       s:'1,614,600원' },
      { k:'SSD',  v:'삼성전자 990 PRO M.2 NVMe 1TB',               s:'444,720원' },
      { k:'PSU',  v:'SuperFlower LEADEX VII GOLD ATX3.11000W',     s:'224,000원' },
      { k:'케이스',v:'리안리 LANCOOL 207',                           s:'109,330원' },
    ],
    tags: ['4K 렌더링','영상편집','AI 입문','QHD 165Hz','인코딩','포토샵·라이트룸'],
    hl:  ['4K 렌더링','영상편집','AI 입문'],
    note: '멀티성능 147KF 대비 30% 우위\n',
    ctaBg: 'var(--accent)',
  },
]

export default function QuotePage() {
  return (
    <>
      <Navbar />

      <main style={{ background: 'var(--bg)', minHeight: '100dvh' }}>

        {/* ── HERO ── */}
        <section className="relative px-6 pt-28 pb-12 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(59,130,246,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,.035) 1px,transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse,rgba(99,102,241,.1),transparent 70%)' }} />

          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase mb-4" style={{ color: 'var(--muted)', letterSpacing: '2px' }}>
              2026년 3월 최신 견적 · 인터넷 최저가 기준
            </p>
            <h1 className="font-black leading-none mb-2"
              style={{ fontFamily: 'var(--font-base)', fontSize: 'clamp(2.2rem,8vw,4rem)', color: '#fff', letterSpacing: '-1px' }}>
              추천 견적
            </h1>
            <p className="font-bold mb-5"
              style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(.9rem,3vw,1.1rem)', color: 'var(--muted)', letterSpacing: '3px' }}>
              THREE BUILDS
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--muted2)', maxWidth: 480 }}>
              사무용 · FHD 고사양 게이밍 · 전문가 작업용<br />
              목적과 예산에 맞는 최적화된 구성을 제안합니다<br />
              가격은 인터넷 최저가 합산<br />
              조립비 44,000원부터 · 택배비 별도
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg,var(--accent),transparent)' }} />
              <div className="flex gap-2">
                {BUILDS.map(b => <span key={b.num} className="w-2 h-2 rounded-full" style={{ background: b.color }} />)}
              </div>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(270deg,var(--accent),transparent)' }} />
            </div>
          </div>
        </section>

        {/* 섹션 라벨 */}
        <div className="px-6 max-w-4xl mx-auto mb-5">
          <p className="text-xs font-bold uppercase" style={{ color: 'var(--muted)', letterSpacing: '2.5px' }}>
            견적 구성 · 2026 Mar
          </p>
        </div>

        {/* ── CARDS ── */}
        <div className="px-4 pb-24 max-w-4xl mx-auto flex flex-col gap-5">
          {BUILDS.map((b) => (
            <div key={b.num} className="rounded-2xl overflow-hidden"
              style={{ background: 'var(--s1)', border: `1px solid ${b.border}` }}>

              {/* 헤더 */}
              <div className="p-6 pb-5 relative overflow-hidden"
                style={{ background: `linear-gradient(135deg,${b.glow},transparent 60%)` }}>
                {/* 배경 번호 워터마크 */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 font-black pointer-events-none select-none leading-none"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '80px', color: b.bgNum, letterSpacing: '-4px' }}>
                  {b.num}
                </div>

                <div className="relative z-10">
                  {/* 배지 + 타입 */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-black px-2.5 py-1 rounded-lg tracking-wider"
                      style={{ background: b.badgeBg, color: b.color, border: `1px solid ${b.badgeBorder}` }}>
                      {b.label}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
                      {b.num} · {b.type}
                    </span>
                  </div>

                  {/* 제목 (아이콘 + 텍스트) */}
                  <h2 className="font-black leading-tight mb-2"
                    style={{ fontSize: 'clamp(1.3rem,4vw,1.7rem)', color: '#fff' }}>
                    <span style={{ marginRight: '8px' }}>{b.icon}</span>{b.title}
                  </h2>

                  {/* 설명 */}
                  <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--muted2)', whiteSpace: 'pre-line' }}>
                    {b.desc}
                  </p>

                  {/* 가격 */}
                  <div className="inline-flex items-baseline gap-1.5 px-4 py-2 rounded-xl"
                    style={{ background: b.priceBg, border: `1px solid ${b.priceBorder}` }}>
                    <span className="text-xs font-bold" style={{ color: 'var(--muted)' }}>FROM</span>
                    <span className="font-black" style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1rem,3vw,1.3rem)', color: b.color }}>
                      {b.price}
                    </span>
                    <span className="text-sm font-bold" style={{ color: 'var(--muted2)' }}>원~</span>
                  </div>
                </div>
              </div>

              {/* 부품 목록 */}
              <div className="px-5 py-4" style={{ borderTop: `1px solid ${b.partsBorder}` }}>
                <p className="text-xs font-black uppercase mb-3" style={{ color: 'var(--muted)', letterSpacing: '2px', fontSize: '10px' }}>
                  부품 구성
                </p>
                <div className="flex flex-col rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
                  {b.parts.map((p, i) => (
                    <div key={p.k} className="flex gap-3 px-4 py-3"
                      style={{
                        borderBottom: i < b.parts.length - 1 ? '1px solid var(--border)' : 'none',
                        background: i % 2 === 0 ? 'var(--s2)' : 'transparent',
                      }}>
                      <span className="flex-shrink-0 pt-0.5 font-black"
                        style={{ width: '44px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: b.color }}>
                        {p.k}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium leading-snug" style={{ color: 'var(--text)' }}>{p.v}</div>
                        <div className="text-xs mt-0.5 leading-snug" style={{ color: 'var(--muted)', fontSize: '11px' }}>{p.s}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 태그 */}
              <div className="px-5 py-3 flex flex-wrap gap-1.5" style={{ borderTop: '1px solid var(--border)' }}>
                {b.tags.map(t => {
                  const isHL = b.hl.includes(t)
                  return (
                    <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-lg"
                      style={isHL
                        ? { background: `${b.color}20`, color: b.color, border: `1px solid ${b.color}35` }
                        : { background: 'var(--s2)', color: 'var(--muted2)', border: '1px solid var(--border)' }
                      }>
                      {t}
                    </span>
                  )
                })}
              </div>

              {/* 주석 + 문의 버튼 */}
              <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3"
                style={{ borderTop: '1px solid var(--border)', background: 'var(--s2)' }}>
                <p className="flex-1 leading-relaxed" style={{ color: 'var(--muted)', whiteSpace: 'pre-line', fontSize: '11px' }}>
                  ※ {b.note}
                </p>
                <a href="http://pf.kakao.com/_xeDNxhX"
                  target="_blank" rel="noopener"
                  className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-black text-white whitespace-nowrap"
                  style={{ background: b.ctaBg }}>
                  문의하기
                </a>
              </div>

            </div>
          ))}

          {/* 하단 안내 */}
          <div className="rounded-2xl p-5 text-center" style={{ background: 'var(--s1)', border: '1px solid var(--border)' }}>
            <p className="text-sm font-bold mb-1.5" style={{ color: 'var(--text)' }}>💡 더 정확한 견적이 필요하신가요?</p>
            <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--muted2)' }}>
              위 구성은 2026년 3월 인터넷 최저가 기준입니다.<br />
              예산과 용도에 맞는 맞춤 견적은 직접 문의해 주세요.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="http://pf.kakao.com/_xeDNxhX" target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white"
                style={{ background: 'var(--accent)' }}>
                문의하기
              </a>
            </div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <Footer hideLinks />

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
