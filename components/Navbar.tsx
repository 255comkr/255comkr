'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isQuote  = pathname === '/quote'

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50" style={{
        background: 'rgba(26,26,26,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        paddingTop: 'calc(env(safe-area-inset-top,0px) + 13px)',
        paddingBottom: '13px',
      }}>
        <div className="max-w-4xl mx-auto flex items-center justify-between px-6">

          {/* 로고 */}
          <Link href="/">
            <Logo size={19} />
          </Link>

          {/* 데스크톱 */}
          <div className="hidden sm:flex items-center gap-7">
            {!isQuote && (
              <>
                {[['서비스','services'],['실적','reviews'],['오시는 길','contact']].map(([l, id]) => (
                  <button key={id} onClick={() => scrollTo(id)}
                    className="text-xs font-medium transition-colors"
                    style={{ color: 'var(--muted)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                    {l}
                  </button>
                ))}
                <Link href="/quote" className="text-xs font-medium transition-colors"
                  style={{ color: 'var(--muted)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                  추천 견적
                </Link>
              </>
            )}
            {isQuote && (
              <Link href="/" className="text-xs font-medium transition-colors"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                ← 홈으로
              </Link>
            )}
            <a href="http://pf.kakao.com/_xeDNxhX" target="_blank" rel="noopener"
              className="text-xs font-semibold px-4 py-2 rounded-lg"
              style={{ background: 'var(--accent)', color: '#fff' }}>
              문의하기
            </a>
          </div>

          {/* 햄버거 */}
          <button className="sm:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(v => !v)}>
            <span className="block w-5 h-px" style={{ background: 'var(--muted2)' }} />
            <span className="block w-5 h-px" style={{ background: 'var(--muted2)' }} />
            <span className="block w-5 h-px" style={{ background: 'var(--muted2)' }} />
          </button>
        </div>
      </nav>

      {/* 모바일 드롭다운 */}
      {menuOpen && (
        <div className="fixed left-0 right-0 z-40 flex flex-col px-6 py-5 gap-4"
          style={{
            top: 'calc(env(safe-area-inset-top,0px) + 54px)',
            background: '#1a1a1a',
            borderBottom: '1px solid var(--border)',
          }}>
          {!isQuote && (
            <>
              {[['서비스','services'],['실적','reviews'],['오시는 길','contact']].map(([l, id]) => (
                <button key={id} onClick={() => scrollTo(id)}
                  className="text-sm font-medium text-left" style={{ color: 'var(--text2)' }}>
                  {l}
                </button>
              ))}
              <Link href="/quote" onClick={() => setMenuOpen(false)}
                className="text-sm font-medium" style={{ color: 'var(--text2)' }}>
                추천 견적
              </Link>
            </>
          )}
          {isQuote && (
            <Link href="/" onClick={() => setMenuOpen(false)}
              className="text-sm font-medium" style={{ color: 'var(--text2)' }}>
              ← 홈으로
            </Link>
          )}
          <a href="http://pf.kakao.com/_xeDNxhX" target="_blank" rel="noopener"
            className="text-sm font-semibold py-2.5 rounded-lg text-center"
            style={{ background: 'var(--accent)', color: '#fff' }}>
            문의하기
          </a>
        </div>
      )}
    </>
  )
}
