import React from 'react'
'use client'

interface LogoProps {
  size?: number   // font-size (px) 기준, 기본 19
  className?: string
}

export default function Logo({ size = 19, className = '' }: LogoProps) {
  const filterId  = `gLogo${size}`
  // 심볼 높이 = cap-height ≈ font-size * 0.72
  const symHeight = Math.round(size * 0.72)
  // 간격 = font-size * 0.12 (최소 3px)
  const gap       = Math.max(3, Math.round(size * 0.12))

  return (
    <div
      className={`flex items-baseline select-none ${className}`}
      style={{ gap: `${gap}px` }}
    >
      {/* 심볼 — cap-height와 동일한 높이, viewBox는 콘텐츠 bbox에 클립 */}
      <svg
        viewBox="60 30 281 241"
        style={{ height: symHeight, width: 'auto', display: 'block', flexShrink: 0 }}
      >
        <defs>
          <filter id={filterId}>
            <feGaussianBlur stdDeviation="1.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect x="70" y="40" width="260" height="220" fill="none" stroke="var(--text)" strokeWidth="10" opacity="0.82" />
        <rect x="90" y="60" width="60" height="40" rx="2" fill="none" stroke="var(--text)" strokeWidth="10" opacity="0.82" />
        <rect x="250" y="60" width="60" height="40" rx="2" fill="none" stroke="var(--text)" strokeWidth="10" opacity="0.82" />
        <rect x="90" y="60" width="60" height="40" rx="2" fill="var(--accent)" filter={`url(#${filterId})`}>
          <animate attributeName="opacity" values="0.85;0.1;0.75;0.05;0.9;0.15;0.6;0.02;0.88;0.08;0.7;0.03;0.85" dur="1.4s" repeatCount="indefinite" />
        </rect>
        <rect x="250" y="60" width="60" height="40" rx="2" fill="var(--green)" opacity="0.85" />
        <path
          d="M90,240 L90,120 L170,120 L170,80 L230,80 L230,120 L310,120 L310,240 Z"
          fill="none" stroke="var(--text)" strokeWidth="10" strokeLinejoin="round" opacity="0.82"
        />
      </svg>

      {/* 텍스트 */}
      <span style={{
        fontFamily: 'var(--font-logo)',
        fontSize: size,
        fontWeight: 900,
        color: 'var(--text)',
        letterSpacing: '-0.5px',
        lineHeight: 1,
      }}>
        255<span style={{ color: 'var(--accent)' }}>COM</span>
      </span>
    </div>
  )
}
