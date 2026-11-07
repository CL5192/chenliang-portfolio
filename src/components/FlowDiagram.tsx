/**
 * Krospi Meer: how a spot was worked out, laid out in the text column.
 * Top row: the decisions, one at a time. Diamonds use Double Diamond notation
 * (left half widens = explore options, right half narrows = choose one).
 * Below: the build, one layer after another, with the trace-back rule.
 * Plain HTML so it reflows on phones instead of shrinking.
 */
export type FlowDiagramLabels = {
  aria: string
  legendDiamond: string
  decide: string
  build: string
  explore: string
  choose: string
  concept: string
  conceptNote: string
  proposition: string
  propositionLines: string[]
  beats: string
  beatsNote: string
  beatCheck: [string, string]
  /** [title, note]; the item at gateIndex is drawn as the approval gate */
  layers: [string, string][]
  gateIndex: number
  loop: string
}

function Diamond({ explore, choose }: { explore: string; choose: string }) {
  return (
    <svg className="flow__glyph" viewBox="0 0 160 48" aria-hidden="true">
      <polygon className="flow__diamond" points="2,24 80,2 158,24 80,46" />
      <line className="flow__divider" x1="80" y1="4" x2="80" y2="44" />
      <text x="44" y="28" textAnchor="middle">{explore}</text>
      <text x="116" y="28" textAnchor="middle">{choose}</text>
    </svg>
  )
}

function Diamonds() {
  return (
    <svg className="flow__glyph flow__glyph--small" viewBox="0 0 120 48" aria-hidden="true">
      <polygon className="flow__diamond flow__diamond--faint" points="2,24 26,2 50,24 26,46" />
      <polygon className="flow__diamond flow__diamond--mid" points="20,24 44,2 68,24 44,46" />
      <polygon className="flow__diamond" points="38,24 62,2 86,24 62,46" />
    </svg>
  )
}

export function FlowDiagram({ labels }: { labels: FlowDiagramLabels }) {
  return (
    <div className="flow" aria-label={labels.aria}>
      <p className="flow__legend">
        <svg viewBox="0 0 20 14" aria-hidden="true">
          <polygon className="flow__diamond" points="1,7 10,1 19,7 10,13" />
        </svg>
        {labels.legendDiamond}
      </p>

      <p className="flow__stage">{labels.decide}</p>
      <ol className="flow__decide">
        <li className="flow__step">
          <Diamond explore={labels.explore} choose={labels.choose} />
          <strong>{labels.concept}</strong>
          <span>{labels.conceptNote}</span>
        </li>
        <li className="flow__step flow__step--anchor">
          <strong>{labels.proposition}</strong>
          {labels.propositionLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </li>
        <li className="flow__step">
          <Diamonds />
          <strong>{labels.beats}</strong>
          <span>{labels.beatsNote}</span>
        </li>
        <li className="flow__step flow__step--box">
          <strong>{labels.beatCheck[0]}</strong>
          <span>{labels.beatCheck[1]}</span>
        </li>
      </ol>

      <p className="flow__stage">{labels.build}</p>
      <ol className="flow__build">
        {labels.layers.map(([title, note], index) => (
          <li key={title} className={index === labels.gateIndex ? 'is-gate' : undefined}>
            <strong>{title}</strong>
            {note && <span>{note}</span>}
          </li>
        ))}
      </ol>
      <p className="flow__loop">↑ {labels.loop}</p>
    </div>
  )
}
