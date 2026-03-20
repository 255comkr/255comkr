'use client'

import React, { useState, useEffect, useCallback } from 'react'
import type { PriceData, Category } from '@/lib/types'

// 인증 상태는 서버 httpOnly 쿠키 기반 — 클라이언트 저장소 미사용

const won = (n: number) => '₩' + n.toLocaleString()
const man = (n: number) => '₩' + (n / 10000).toFixed(1) + '만'
const rankClass = (i: number) =>
  i === 0 ? 'bg-amber-500/15 text-amber-400'
  : i === 1 ? 'bg-slate-400/10 text-slate-400'
  : i === 2 ? 'bg-orange-900/15 text-orange-700'
  : 'text-slate-600'

export default function AdminDashboard() {
  const [authed, setAuthed]       = useState(false)
  const [checking, setChecking]   = useState(true)   // 초기 세션 확인 중
  const [pw, setPw]               = useState('')
  const [pwErr, setPwErr]         = useState('')
  const [remaining, setRemaining] = useState<number | null>(null)
  const [data, setData]           = useState<PriceData | null>(null)
  const [activeCat, setActiveCat] = useState('all')
  const [query, setQuery]         = useState('')
  const [crawling, setCrawling]   = useState(false)
  const [prog, setProg]           = useState(0)
  const [toastMsg, setToastMsg]   = useState('')
  const [time, setTime]           = useState('')

  // 서버 세션 확인 (페이지 로드 시)
  useEffect(() => {
    fetch('/api/admin/check')
      .then(r => r.json())
      .then(d => { if (d.ok) setAuthed(true) })
      .finally(() => setChecking(false))
  }, [])

  // 시계
  useEffect(() => {
    const t = setInterval(() => setTime(new Date().toLocaleTimeString('ko-KR')), 1000)
    return () => clearInterval(t)
  }, [])

  const loadData = useCallback(async (manual = false) => {
    try {
      const r = await fetch('/api/data?t=' + Date.now())
      if (!r.ok) throw new Error()
      const d: PriceData = await r.json()
      setData(d)
      if (manual) toast('✅ 최신 데이터 갱신 완료!')
    } catch {
      if (manual) toast('❌ 데이터를 불러올 수 없습니다.')
    }
  }, [])

  useEffect(() => {
    if (authed) loadData()
  }, [authed, loadData])

  const doLogin = async () => {
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pw }),
      })
      const data = await res.json()
      if (res.ok && data.ok) {
        setAuthed(true)
        setRemaining(null)
      } else if (res.status === 429) {
        setPwErr('❌ 너무 많은 시도 — 30분 후 재시도하세요.')
      } else {
        setRemaining(data.remaining ?? null)
        setPwErr(
          data.remaining != null && data.remaining <= 2
            ? `❌ 틀렸습니다. 남은 시도: ${data.remaining}회`
            : '❌ 비밀번호가 틀렸습니다.'
        )
        setPw('')
        setTimeout(() => setPwErr(''), 4000)
      }
    } catch {
      setPwErr('❌ 서버 오류가 발생했습니다.')
      setTimeout(() => setPwErr(''), 3000)
    }
  }

  const doLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    setAuthed(false)
    setData(null)
  }

  const toast = (msg: string) => {
    setToastMsg(msg)
    setTimeout(() => setToastMsg(''), 3500)
  }

  const startCrawl = async () => {
    if (crawling) return
    setCrawling(true)
    setProg(5)
    toast('🕷️ 수집 시작! 약 1분 소요됩니다.')

    // 진행바 시뮬레이션
    const interval = setInterval(() => setProg((p: number) => Math.min(p + 3, 88)), 2000)

    try {
      const before = data?.last_updated
      // GitHub Actions가 실제 크롤링 — 여기선 새로고침만
      await new Promise(r => setTimeout(r, 3000))
      await loadData()
      if (data?.last_updated !== before) toast('✅ 수집 완료!')
    } finally {
      clearInterval(interval)
      setCrawling(false)
      setProg(0)
    }
  }

  const cats = data?.categories ?? {}
  const catKeys = Object.keys(cats)
  const filteredKeys = activeCat === 'all' ? catKeys : catKeys.filter(k => k === activeCat)

  // ── 초기 세션 확인 중
  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg)' }}>
        <div className="w-4 h-4 rounded-full" style={{ background: 'var(--accent)', animation: 'pulse-soft 1s infinite' }} />
      </div>
    )
  }

  // ── 로그인 화면 ──
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ background: 'var(--bg)' }}>
        <div className="w-full max-w-sm rounded-3xl p-9 text-center" style={{ background: 'var(--s2)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="flex justify-center mb-3">
            <span className="logo-255" style={{ fontSize: '24px' }}>255</span>
            <span className="logo-com" style={{ fontSize: '24px' }}>COM</span>
          </div>
          <p className="text-xs tracking-widest uppercase mb-8" style={{ color: 'var(--muted)' }}>관리자 전용</p>

          <label className="block text-xs font-bold text-left mb-1.5 tracking-wide" style={{ color: 'var(--muted2)' }}>비밀번호</label>
          <input
            type="password" value={pw} placeholder="••••••••"
            onChange={e => setPw((e as React.ChangeEvent<HTMLInputElement>).target.value)}
            onKeyDown={e => (e as React.KeyboardEvent).key === 'Enter' && doLogin()}
            className="w-full rounded-xl px-4 py-3 text-base outline-none mb-3"
            style={{ background: 'var(--s1)', border: '1px solid var(--border)', color: 'var(--text)', fontFamily: 'inherit' }}
            maxLength={200}
            autoFocus
          />
          <button onClick={doLogin}
            className="w-full py-3 rounded-xl text-sm font-black text-white mb-2"
            style={{ background: 'var(--accent)' }}>
            로그인
          </button>
          {pwErr && <p className="text-xs text-red-400 mt-2">{pwErr}</p>}
          <p className="text-xs mt-5" style={{ color: 'var(--muted)' }}>이 페이지는 관리자만 접근 가능합니다.</p>
        </div>
      </div>
    )
  }

  // ── 대시보드 ──
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100dvh' }}>

      {/* 프로그레스 바 */}
      {crawling && (
        <div className="fixed top-0 left-0 right-0 h-0.5 z-50" style={{ background: 'var(--border)' }}>
          <div className="h-full transition-all duration-500"
            style={{ width: `${prog}%`, background: 'linear-gradient(90deg,var(--accent),#a78bfa)' }} />
        </div>
      )}

      {/* 탑바 */}
      <header className="sticky top-0 z-40 px-4" style={{
        background: 'rgba(10,12,16,0.9)',
        backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid var(--border)',
        paddingTop: 'calc(env(safe-area-inset-top,0px)+10px)', paddingBottom: '10px',
      }}>
        <div className="max-w-2xl mx-auto flex items-center gap-2.5">
          <span className="logo-255" style={{ fontSize: '16px', fontStyle: 'italic' }}>255</span>
          <span className="logo-com" style={{ fontSize: '16px', fontStyle: 'italic' }}>COM</span>
          <span className="text-xs font-black px-2 py-0.5 rounded-full flex-shrink-0"
            style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171' }}>
            ADMIN
          </span>
          <div className="flex-1 min-w-0">
            <span className="block text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--muted)', fontSize: '11px' }}>{time}</span>
            {data?.last_updated && (
              <span className="text-xs" style={{ color: 'var(--muted)', fontSize: '11px' }}>
                갱신 <b style={{ color: 'var(--green)' }}>{data.last_updated}</b>
              </span>
            )}
          </div>
          <button onClick={() => loadData(true)}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
            style={{ background: 'var(--s2)', border: '1px solid var(--border)', color: 'var(--muted2)' }}>🔄</button>
          <button onClick={startCrawl} disabled={crawling}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black text-white flex-shrink-0"
            style={{ background: crawling ? '#1e3a6e' : 'linear-gradient(135deg,var(--accent),#2563eb)', opacity: crawling ? 0.6 : 1 }}>
            <span className={crawling ? 'spin' : ''}>🕷️</span> 수집
          </button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pb-12" style={{ paddingTop: '16px' }}>

        {/* 히어로 스탯 */}
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          {[
            { val: data ? catKeys.reduce((s,k)=>s+cats[k].count,0).toLocaleString()+'개' : '-', lbl: '수집 상품', color: 'var(--accent2)' },
            { val: data ? man(catKeys.reduce((s,k)=>s+(cats[k].min_price||0),0)) : '-',            lbl: '최저 견적', color: 'var(--green)' },
            { val: catKeys.length ? catKeys.length+'개' : '7개',                                   lbl: '카테고리', color: 'var(--amber)' },
          ].map(h => (
            <div key={h.lbl} className="rounded-2xl p-3.5 text-center fade-up" style={{ background: 'var(--s1)', border: '1px solid var(--border)' }}>
              <div className="text-lg font-bold leading-none mb-1" style={{ fontFamily: 'var(--font-mono)', color: h.color }}>{h.val}</div>
              <div className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--muted)', fontSize: '10px' }}>{h.lbl}</div>
            </div>
          ))}
        </div>

        {/* 카테고리 칩 스크롤 */}
        {data && (
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 mb-3">
            {catKeys.map((k, i) => {
              const cat = cats[k]
              return (
                <div key={k} onClick={() => setActiveCat(k)}
                  className="flex-shrink-0 rounded-xl px-3 py-2.5 cursor-pointer fade-up"
                  style={{ animationDelay: `${i * 0.04}s`, minWidth: 100, background: 'var(--s1)', border: `1px solid var(--border)`, borderLeft: `3px solid ${cat.color}` }}>
                  <div className="text-sm mb-0.5">{cat.icon}</div>
                  <div className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: 'var(--muted)', fontSize: '10px' }}>{k}</div>
                  <div className="text-xs font-bold" style={{ fontFamily: 'var(--font-mono)', color: cat.color }}>{man(cat.min_price || 0)}</div>
                </div>
              )
            })}
          </div>
        )}

        {/* 안내 배너 */}
        <div className="flex gap-2.5 rounded-xl p-3 mb-3 text-xs leading-relaxed"
          style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)', color: 'var(--muted2)' }}>
          <span className="flex-shrink-0 text-base">🤖</span>
          <span>매일 <strong style={{ color: 'var(--text)' }}>오전 9시 · 오후 2시</strong> 자동 수집 &nbsp;|&nbsp; 수동: GitHub → Actions → Run workflow</span>
        </div>

        {/* 로그아웃 */}
        <div className="flex items-center justify-between rounded-xl px-3.5 py-2.5 mb-3"
          style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)' }}>
          <span className="text-xs" style={{ color: '#f87171' }}>🔐 관리자 세션 활성</span>
          <button onClick={doLogout} className="text-xs font-bold px-3 py-1 rounded-lg"
            style={{ border: '1px solid rgba(239,68,68,0.3)', color: '#f87171', background: 'transparent' }}>
            로그아웃
          </button>
        </div>

        {/* 검색 */}
        <div className="relative mb-3">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm pointer-events-none">🔍</span>
          <input type="search" value={query} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            placeholder="CPU, RTX 4070, DDR5..."
            className="w-full rounded-xl pl-10 pr-4 py-3 text-sm outline-none"
            style={{ background: 'var(--s1)', border: '1px solid var(--border)', color: 'var(--text)', fontFamily: 'inherit' }}
          />
        </div>

        {/* 카테고리 탭 */}
        {data && (
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1 mb-5">
            <button onClick={() => setActiveCat('all')}
              className="flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold"
              style={{ background: activeCat==='all' ? 'var(--accent)' : 'var(--s1)', border: `1px solid ${activeCat==='all' ? 'var(--accent)' : 'var(--border)'}`, color: activeCat==='all' ? '#fff' : 'var(--muted)' }}>
              전체
            </button>
            {catKeys.map(k => {
              const on = activeCat === k
              return (
                <button key={k} onClick={() => setActiveCat(k)}
                  className="flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap"
                  style={{ background: on ? cats[k].color : 'var(--s1)', border: `1px solid ${on ? cats[k].color : 'var(--border)'}`, color: on ? '#fff' : 'var(--muted)' }}>
                  {cats[k].icon} {k}
                </button>
              )
            })}
          </div>
        )}

        {/* 상품 목록 */}
        {!data ? (
          <div className="text-center py-16" style={{ color: 'var(--muted)' }}>
            <div className="text-5xl mb-4">🤖</div>
            <h2 className="text-base font-black mb-2" style={{ color: 'var(--text)' }}>데이터가 없습니다</h2>
            <p className="text-sm">GitHub Actions에서 첫 수집을 실행해 주세요.</p>
          </div>
        ) : (
          filteredKeys.map((k, si) => {
            const cat: Category = cats[k]
            let prods = [...cat.products]
            if (query) prods = prods.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
            if (!prods.length) return null

            return (
              <div key={k} className="mb-5 fade-up" style={{ animationDelay: `${si * 0.05}s` }}>
                {/* 섹션 헤더 */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm"
                      style={{ background: `${cat.color}1a`, color: cat.color }}>{cat.icon}</div>
                    <span className="text-sm font-black">{k}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold" style={{ fontFamily: 'var(--font-mono)', color: 'var(--green)' }}>{man(cat.min_price || 0)}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'var(--s2)', border: '1px solid var(--border)', color: 'var(--muted)' }}>{prods.length}개</span>
                  </div>
                </div>

                {/* 상품 카드 */}
                <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--s1)', border: '1px solid var(--border)' }}>
                  {prods.map((p, i) => (
                    <a key={i} href={p.url} target="_blank" rel="noopener"
                      className="flex items-center gap-2.5 px-4 py-3 no-underline transition-colors"
                      style={{ borderBottom: i < prods.length - 1 ? `1px solid var(--border)` : 'none', color: 'inherit' }}
                      onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.background = 'var(--s2)')}
                      onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.background = '')}>
                      {/* 순위 */}
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0 ${rankClass(i)}`}
                        style={{ fontFamily: 'var(--font-mono)' }}>{i + 1}</div>
                      {/* 상품명 */}
                      <div className="flex-1 min-w-0 text-xs font-medium leading-snug"
                        style={{ color: 'var(--text)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', wordBreak: 'keep-all' }}>
                        {p.name}
                      </div>
                      {/* 가격 */}
                      <div className="text-right flex-shrink-0">
                        <div className="text-xs font-bold" style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent2)' }}>{won(p.price)}</div>
                        <div className="text-xs mt-0.5" style={{ color: 'var(--muted)', fontSize: '10px' }}>컴퓨존 ↗</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )
          })
        )}
      </main>

      {/* 토스트 */}
      {toastMsg && (
        <div className="fixed left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-2xl text-sm font-medium whitespace-nowrap"
          style={{ bottom: 'calc(env(safe-area-inset-bottom,0px)+20px)', background: 'var(--s3)', border: '1px solid rgba(255,255,255,0.1)' }}>
          {toastMsg}
        </div>
      )}
    </div>
  )
}
