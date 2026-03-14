'use client'

import { useEffect, useRef } from 'react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showCom?: boolean
}

export default function Logo255({ size = 'md', showCom = true }: LogoProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const line1Ref = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLDivElement>(null)

  const sizes = {
    sm: { num: '24px', svg: '50px', com: '16px', spacing: '10px' },
    md: { num: '48px', svg: '70px', com: '22px', spacing: '14px' },
    lg: { num: 'min(80px,21vw)', svg: 'min(84px,22vw)', com: 'min(28px,7vw)', spacing: '18px' },
  }
  const s = sizes[size]

  useEffect(() => {
    const adjust = () => {
      if (!svgRef.current || !line1Ref.current || !line2Ref.current) return
      const w = svgRef.current.getBoundingClientRect().width * 0.78
      line1Ref.current.style.width = `${w}px`
      line2Ref.current.style.width = `${w}px`
    }
    adjust()
    window.addEventListener('resize', adjust)
    return () => window.removeEventListener('resize', adjust)
  }, [])

  return (
    <div className="flex flex-col items-center">
      {/* 255 */}
      <div
        className="logo-255 font-black leading-none"
        style={{ fontFamily: 'Orbitron, sans-serif', fontSize: s.num, letterSpacing: '-3px' }}
      >
        255
      </div>

      {/* 라인 + SVG */}
      <div className="flex items-center w-full justify-center">
        <div
          ref={line1Ref}
          style={{
            height: '2px', background: '#fff', borderRadius: '2px', marginRight: '-16px', zIndex: 1,
            boxShadow: '0 0 4px #fff, 0 0 10px #ffe600, 0 0 20px #ffe600',
          }}
        />
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 300"
          style={{ width: s.svg, height: 'auto', display: 'block' }}
        >
          <defs>
            <filter id="gG"><feGaussianBlur stdDeviation="1.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            <filter id="gO"><feGaussianBlur stdDeviation="1.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          </defs>
          <rect x="70" y="40" width="260" height="220" fill="none" stroke="#fff" strokeWidth="8" />
          <rect x="90" y="60" width="60" height="40" rx="2" fill="none" stroke="#fff" strokeWidth="8" />
          <rect x="250" y="60" width="60" height="40" rx="2" fill="none" stroke="#fff" strokeWidth="8" />
          <rect x="90" y="60" width="60" height="40" rx="2" fill="#D97757" filter="url(#gO)">
            <animate attributeName="opacity" values="1;0.1;0.9;0.05;1;0.15;0.8;0.05;1;0.6;0.05;1" dur="1.5s" repeatCount="indefinite" />
          </rect>
          <rect x="250" y="60" width="60" height="40" rx="2" fill="#00cc33" filter="url(#gG)" opacity="1" />
          <path d="M90,240 L90,120 L170,120 L170,80 L230,80 L230,120 L310,120 L310,240 Z" fill="none" stroke="#fff" strokeWidth="8" strokeLinejoin="round" />
        </svg>
        <div
          ref={line2Ref}
          style={{
            height: '2px', background: '#fff', borderRadius: '2px', marginLeft: '-16px', zIndex: 1,
            boxShadow: '0 0 4px #fff, 0 0 10px #ffe600, 0 0 20px #ffe600',
          }}
        />
      </div>

      {/* COM */}
      {showCom && (
        <div
          className="logo-com font-bold leading-none"
          style={{ fontFamily: 'Orbitron, sans-serif', fontSize: s.com, letterSpacing: s.spacing, textIndent: s.spacing }}
        >
          COM
        </div>
      )}
    </div>
  )
}
