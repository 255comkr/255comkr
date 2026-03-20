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
    price: '838,940',
    desc: '웹서핑 · 유튜브 · 문서작업 · 인강 · 영상감상\nAMD 내장그래픽(Vega 7)으로 여유로운 멀티 성능',
    parts: [
      { k:'CPU',   v:'AMD 라이젠5 5500GT (멀티팩)',           s:'215,600원 / 5600G: 226,000원' },
      { k:'쿨러',  v:'기본 쿨러 사용 가능',                    s:'소음 신경 쓰이면 DEEPCOOL AG400 G2 (22,890원)' },
      { k:'M/B',   v:'ASUS PRIME A520M-A II',               s:'87,480원 · 램슬롯 4개 · 전원부 방열판' },
      { k:'RAM',   v:'마이크론 Crucial DDR4-3200 CL22 8G×2', s:'228,540원 (32GB: 16G×2 = 416,420원)' },
      { k:'GPU',   v:'내장 그래픽 Vega 7',                   s:'HDMI · DP · D-SUB / 롤·오버워치 하옵 가능' },
      { k:'SSD',   v:'삼성전자 980 M.2 NVMe 500GB',          s:'228,580원 (고신뢰 PM9A1: 255,060원)' },
      { k:'PSU',   v:'마이크로닉스 Classic II 500W 브론즈',   s:'52,920원 / FSP HYPER K PRO 500W: 56,680원' },
      { k:'케이스', v:'EDDY A0',                              s:'25,820원 · 가격 대비 탄탄한 사무용' },
    ],
    tags: ['웹서핑','유튜브','문서작업','롤 · 캐주얼 게임','인강','매장 포스'],
    hl:   ['웹서핑','유튜브','문서작업'],
    note: '5500GT · 5600G 성능 동일 / AMD 내장그래픽이 인텔 대비 우위\n가격은 인터넷 최저가 합산 · 조립비 4~5만원 및 택배비 별도',
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
    price: '2,286,490',
    desc: '주식 · 포토샵 · 라이트룸 · FHD 풀옵 게이밍\n대부분의 가정용도를 한 번에 커버',
    parts: [
      { k:'CPU',   v:'AMD 라이젠5 9600X (Granite Ridge)',       s:'325,910원 / 프레임 방어↑ 7500X3D: 378,670원' },
      { k:'쿨러',  v:'DEEPCOOL AG400 G2 (싱글타워 공랭)',         s:'22,890원 / PCCOOLER PALADIN 400: 30,020원' },
      { k:'M/B',   v:'ASUS PRIME B650EM-A',                    s:'144,970원 / GIGABYTE B650M K: 126,360원' },
      { k:'RAM',   v:'ADATA DDR5-5600 CL46 16G×2 (32GB)',      s:'688,560원 ※ AM5는 DDR5 전용 — DDR4 사용 불가' },
      { k:'GPU',   v:'PALIT RTX 5060 DUAL OC D7 8GB',          s:'599,000원 / SAPPHIRE RX 9060 XT: 606,040원' },
      { k:'SSD',   v:'SK하이닉스 Platinum P41 M.2 NVMe 1TB',   s:'402,210원 / WD Black SN850X 1TB: 396,000원' },
      { k:'PSU',   v:'마이크로닉스 Classic II 600W 브론즈 ATX3.1', s:'61,320원 / 750W 골드 풀모듈러: 116,640원' },
      { k:'케이스', v:'1stPlayer T7-P (팬 6개 · LED 온오프)',    s:'41,630원 / 화이트: 44,690원' },
    ],
    tags: ['FHD 풀옵 게이밍','포토샵','주식','라이트룸','영화감상','여유로운 사무'],
    hl:   ['FHD 풀옵 게이밍','포토샵','주식'],
    note: '9600X: 구형 i9 대비 게이밍 프레임 우위 / 7500X3D는 프레임 방어 특화\n9600X + B650EM + RTX 5060 기준 합계 · 가격은 인터넷 최저가 합산',
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
    price: '4,704,040',
    desc: 'QHD 165 · 4K 렌더링 · 영상편집 · AI 작업\n높은 멀티성능 + 고성능 그래픽 카드 조합',
    parts: [
      { k:'CPU',   v:'인텔 코어 울트라7 시리즈2 265KF (벌크)',         s:'402,870원 (정품: 483,420원) / 285K: 951,550원' },
      { k:'쿨러',  v:'발키리 GL360 ARGB (360mm 수랭)',                s:'165,780원 / 잘만 ALPHA II DS A36: 167,860원' },
      { k:'M/B',   v:'ASUS ROG STRIX B860-G GAMING WIFI',           s:'295,920원 (B보드 최강) / MSI PRO Z890-A: 393,860원' },
      { k:'RAM',   v:'ESSENCORE KLEVV DDR5-5600 CL46 16G×2',        s:'698,760원 / SK하이닉스 DDR5-5600: 733,740원' },
      { k:'GPU',   v:'COLORFUL iGame RTX 5070 Ti 토마호크 EX',       s:'1,614,600원 / ZOTAC RTX 5070 Ti SOLID OC: 1,685,880원' },
      { k:'SSD',   v:'삼성전자 990 PRO M.2 NVMe 1TB',               s:'444,720원 / SK하이닉스 Platinum P41: 408,000원' },
      { k:'PSU',   v:'시소닉 NEW FOCUS V4 GX-850 풀모듈러 ATX3.1',  s:'196,310원 / SuperFlower LEADEX VII 850W: 194,840원' },
      { k:'케이스', v:'리안리 LANCOOL 207',                           s:'109,330원 · 그래픽카드 온도 낮추는 케이스 · 수랭 OK' },
    ],
    tags: ['4K 렌더링','영상편집','AI 입문','QHD 165Hz','인코딩','포토샵·라이트룸'],
    hl:   ['4K 렌더링','영상편집','AI 입문'],
    note: '265KF는 12900K 완벽 상위호환 / 멀티성능 147KF 대비 30% 우위\n265KF + 5070Ti + 수랭 + B860 기준 합계 · 가격은 인터넷 최저가 합산',
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
              목적과 예산에 맞는 최적화된 구성을 제안합니다
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
