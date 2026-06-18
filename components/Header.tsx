import Link from 'next/link'

export default function Header() {
  return (
    <header style={{background: '#fff', borderBottom: '1px solid #eee'}}>
      <div className="container header" style={{paddingTop: 12, paddingBottom: 12}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <div style={{width: 40, height: 40, background: '#0ea5a2', borderRadius: 6, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>X</div>
          <div>
            <strong>XIVIA</strong>
            <div style={{fontSize: 12, color: '#6b7280'}}>Social platform prototype</div>
          </div>
        </div>
        <nav style={{marginLeft: 'auto'}}>
          <Link href="/"><a style={{marginRight: 12}}>Home</a></Link>
          <Link href="/profile"><a>Profile</a></Link>
        </nav>
      </div>
    </header>
  )
}
