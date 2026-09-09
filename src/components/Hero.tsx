import { profile } from '../data/profile'

export function Hero() {
  return (
    <header className="hero">
      <h1 className="hero__name">{profile.name}</h1>
      <p className="hero__headline">{profile.headline}</p>
      <p className="hero__summary">{profile.summary}</p>
      <div className="hero__meta">
        <span>{profile.location}</span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        {profile.links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
