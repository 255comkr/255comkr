'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
        style={{
          background: 'rgba(10,12,16,0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          paddingTop: 'calc(env(safe-area-inset-top,0px) + 12px)',
        }}
      >
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-1">
          <span className="logo-255" style={{ fontFamily: 'Orbitron,sans-serif', fontSize: '18px', letterSpacing: '1px' }}>255</span>
          <span className="logo-com" style={{ fontFamily: 'Orbitron,sans-serif', fontSize: '18px', letterSpacing: '1px' }}>COM</span>
        </Link>

        {/* 데스크톱 메뉴 */}
        <div className="hidden sm:flex items-center gap-6">
          {[['서비스','services'],['실적','reviews'],['오시는 길','contact']].map(([label,id]) => (
            <button key={id} onClick={() => scrollTo(id)}
              className="text-xs font-medium text-slate-400 hover:text-white transition-colors tracking-wide">
              {label}
            </button>
          ))}
          <button onClick={() => scrollTo('contact')}
            className="text-xs font-bold text-white px-3 py-1.5 rounded-lg transition-colors"
            style={{ background: 'var(--accent)' }}>
            견적 문의
          </button>
        </div>

        {/* 햄버거 (모바일) */}
        <button className="sm:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(v => !v)}>
          <span className="block w-5 h-0.5 bg-slate-300 rounded" />
          <span className="block w-5 h-0.5 bg-slate-300 rounded" />
          <span className="block w-5 h-0.5 bg-slate-300 rounded" />
        </button>
      </nav>

      {/* 모바일 드롭다운 */}
      {menuOpen && (
        <div className="fixed top-14 left-0 right-0 z-40 flex flex-col gap-4 px-6 py-5"
          style={{ background: 'rgba(10,12,16,0.98)', borderBottom: '1px solid #1e2535', backdropFilter: 'blur(16px)' }}>
          {[['서비스','services'],['실적','reviews'],['오시는 길','contact']].map(([label,id]) => (
            <button key={id} onClick={() => scrollTo(id)} className="text-sm font-medium text-slate-300 text-left">
              {label}
            </button>
          ))}
          <button onClick={() => scrollTo('contact')}
            className="text-sm font-bold text-white py-2 rounded-lg"
            style={{ background: 'var(--accent)' }}>
            견적 문의
          </button>
        </div>
      )}
    </>
  )
}
