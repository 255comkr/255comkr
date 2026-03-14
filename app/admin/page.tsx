import type { Metadata } from 'next'
import AdminDashboard from './AdminDashboard'

export const metadata: Metadata = {
  title: '255COM 관리자',
  robots: { index: false, follow: false },  // 검색엔진 차단
}

export default function AdminPage() {
  return <AdminDashboard />
}
