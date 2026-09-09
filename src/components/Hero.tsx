import { profile } from '../data/profile'

export function Hero() {
  return (
    <header className="hero" id="top">
      <h1 className="hero__name">{profile.name}</h1>
      <p className="hero__headline">{profile.headline}</p>

      <div className="highlights">
        {profile.highlights.map((highlight) => (
          <div key={highlight.label}>
            <span className="highlight__value">{highlight.value}</span>
            <span className="highlight__label">{highlight.label}</span>
          </div>
        ))}
      </div>

      <div className="hero__actions">
        <a className="button button--primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        {profile.links.map((link) => (
          <a
            key={link.href}
            className="button"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
