import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { Footer } from '@/app/page'

export const metadata: Metadata = {
  title: '255COM 추천 견적',
  description: '2026년 3월 최신 견적 · 사무용 / FHD 고사양 게이밍 / 전문가 작업용',
}

const BUILDS = [
  {
    num: '01', type: 'Office · AMD', label: 'OFFICE',
    title: '사무용 PC', icon: '💼',
    color: '#6b9e7e',
    border: 'rgba(107,158,126,.2)',
    glow:  'rgba(107,158,126,.06)',
    bgNum: 'rgba(107,158,126,.05)',
    badgeBg: 'rgba(107,158,126,.14)', badgeBorder: 'rgba(107,158,126,.28)',
    priceBg: 'rgba(107,158,126,.1)',  priceBorder: 'rgba(107,158,126,.22)',
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
    hl:   ['웹서핑','유튜브','문서작업'],
    note: 'AMD 내장그래픽이 인텔 대비 우위',
  },
  {
    num: '02', type: 'Gaming · FHD High-End', label: 'GAMING',
    title: 'FHD 고사양 게이밍 PC', icon: '🎮',
    color: '#6e93b5',
    border: 'rgba(110,147,181,.2)',
    glow:  'rgba(110,147,181,.06)',
    bgNum: 'rgba(110,147,181,.05)',
    badgeBg: 'rgba(110,147,181,.14)', badgeBorder: 'rgba(110,147,181,.28)',
    priceBg: 'rgba(110,147,181,.1)',  priceBorder: 'rgba(110,147,181,.22)',
    partsBorder: 'rgba(110,147,181,.15)',
    price: '2,448,130',
    desc: '주식 · 포토샵 · 라이트룸 · FHD 풀옵 게이밍\n대부분의 가정용도를 한 번에 커버',
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
    hl:   ['FHD 풀옵 게이밍','포토샵','주식'],
    note: '7500X3D는 프레임 방어 특화 *메모리 단발 가능',
  },
  {
    num: '03', type: 'Professional · Intel', label: 'PRO',
    title: '전문가 작업용 PC', icon: '⚡',
    color: '#9b8ab5',
    border: 'rgba(155,138,181,.2)',
    glow:  'rgba(155,138,181,.06)',
    bgNum: 'rgba(155,138,181,.05)',
    badgeBg: 'rgba(155,138,181,.14)', badgeBorder: 'rgba(155,138,181,.28)',
    priceBg: 'rgba(155,138,181,.1)',  priceBorder: 'rgba(155,138,181,.22)',
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
    hl:   ['4K 렌더링','영상편집','AI 입문'],
    note: '멀티성능 147KF 대비 30% 우위',
  },
]

export default function QuotePage() {
  return (
    <>
      <Navbar />
      <main className="page-bg" style={{ minHeight: '100dvh' }}>

        {/* HERO */}
        <div className="quote-hero">
          <div className="quote-hero-glow" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="t-eyebrow mb-4">2026년 3월 최신 견적 · 인터넷 최저가 기준</p>
            <h1 className="quote-h1">추천 견적</h1>
            <p className="quote-sub">THREE BUILDS</p>
            <p className="quote-desc">
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
        </div>

        {/* 섹션 라벨 */}
        <div className="px-6 max-w-3xl mx-auto mb-5">
          <p className="parts-label">견적 구성 · 2026 Mar</p>
        </div>

        {/* CARDS */}
        <div className="px-4 pb-24 max-w-3xl mx-auto flex flex-col gap-5">
          {BUILDS.map((b) => (
            <div key={b.num} className="qcard"
              style={{ background: 'var(--s1)', border: `1px solid ${b.border}` }}>

              {/* 카드 헤더 */}
              <div className="qcard-head"
                style={{ background: `linear-gradient(135deg,${b.glow},transparent 60%)` }}>
                <div className="qcard-bgnum" style={{ color: b.bgNum }}>{b.num}</div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="qcard-badge"
                      style={{ background: b.badgeBg, color: b.color, border: `1px solid ${b.badgeBorder}` }}>
                      {b.label}
                    </span>
                    <span className="qcard-type">{b.num} · {b.type}</span>
                  </div>
                  <h2 className="qcard-title">
                    <span style={{ marginRight: '8px' }}>{b.icon}</span>{b.title}
                  </h2>
                  <p className="qcard-desc">{b.desc}</p>
                  <div className="inline-flex items-baseline gap-1.5 px-4 py-2 rounded-xl"
                    style={{ background: b.priceBg, border: `1px solid ${b.priceBorder}` }}>
                    <span className="qcard-price-from">FROM</span>
                    <span className="qcard-price-num" style={{ color: b.color }}>{b.price}</span>
                    <span className="qcard-price-unit">원~</span>
                  </div>
                </div>
              </div>

              {/* 부품 목록 */}
              <div className="qcard-parts" style={{ borderTop: `1px solid ${b.partsBorder}` }}>
                <p className="parts-label">부품 구성</p>
                <div className="parts-table">
                  {b.parts.map((p, i) => (
                    <div key={p.k} className="part-row"
                      style={{ background: i % 2 === 0 ? 'var(--s2)' : 'transparent' }}>
                      <span className="part-key" style={{ color: b.color }}>{p.k}</span>
                      <div className="flex-1 min-w-0">
                        <div className="part-val">{p.v}</div>
                        <div className="part-sub">{p.s}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 태그 */}
              <div className="qcard-tags">
                {b.tags.map(t => (
                  <span key={t} className={`tag ${b.hl.includes(t) ? '' : 'tag-normal'}`}
                    style={b.hl.includes(t)
                      ? { background: `${b.color}20`, color: b.color, border: `1px solid ${b.color}35` }
                      : undefined}>
                    {t}
                  </span>
                ))}
              </div>

              {/* 하단 */}
              <div className="qcard-bottom">
                <p className="qcard-note">※ {b.note}</p>
                <a href="http://pf.kakao.com/_xeDNxhX"
                  target="_blank" rel="noopener"
                  className="btn btn-primary flex-shrink-0 whitespace-nowrap">
                  문의하기
                </a>
              </div>

            </div>
          ))}

          {/* 하단 안내 */}
          <div className="card text-center">
            <p className="t-h4 mb-2">💡 더 정확한 견적이 필요하신가요?</p>
            <p className="t-caption mb-4" style={{ color: 'var(--muted2)' }}>
              위 구성은 2026년 3월 인터넷 최저가 기준입니다.<br />
              예산과 용도에 맞는 맞춤 견적은 직접 문의해 주세요.
            </p>
            <a href="http://pf.kakao.com/_xeDNxhX" target="_blank" rel="noopener"
              className="btn btn-primary">
              문의하기
            </a>
          </div>
        </div>

        <Footer hideLinks />
      </main>
    </>
  )
}
