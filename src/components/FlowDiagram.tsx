/**
 * Krospi Meer: how a spot was worked out. Diamonds use Double Diamond notation
 * (left half widens = explore options, right half narrows = choose one), not flowchart decisions,
 * so the legend says so on the drawing itself.
 */
export type FlowDiagramLabels = {
  aria: string
  legendDiamond: string
  legendLoop: string
  explore: string
  choose: string
  concept: string
  conceptNote: [string, string]
  proposition: string
  propositionLines: [string, string, string, string]
  beats: string
  beatsNote: [string, string]
  beatCheck: [string, string]
  layers: [string, string][]
  loop: string
}

export function FlowDiagram({ labels }: { labels: FlowDiagramLabels }) {
  const layerX = [20, 160, 300, 440, 580, 720, 860]
  return (
    <div className="flow-diagram">
      <svg viewBox="0 0 1000 520" role="img" aria-label={labels.aria}>
        <defs>
          <marker id="flow-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path className="flow-diagram__arrowhead" d="M0,0 L10,5 L0,10 z" />
          </marker>
        </defs>

        {/* Legend */}
        <polygon className="flow-diagram__diamond" points="20,22 32,12 44,22 32,32" />
        <text x="54" y="27" className="flow-diagram__small">{labels.legendDiamond}</text>
        <line className="flow-diagram__loop" x1="560" y1="22" x2="600" y2="22" />
        <text x="610" y="27" className="flow-diagram__small">{labels.legendLoop}</text>

        {/* Concept: explore, then choose */}
        <polygon className="flow-diagram__diamond" points="30,140 180,60 330,140 180,220" />
        <line className="flow-diagram__divider" x1="180" y1="64" x2="180" y2="216" />
        <text x="118" y="145" textAnchor="middle" className="flow-diagram__small">{labels.explore}</text>
        <text x="242" y="145" textAnchor="middle" className="flow-diagram__small">{labels.choose}</text>
        <text x="180" y="248" textAnchor="middle" className="flow-diagram__label">{labels.concept}</text>
        <text x="180" y="267" textAnchor="middle" className="flow-diagram__small">{labels.conceptNote[0]}</text>
        <text x="180" y="284" textAnchor="middle" className="flow-diagram__small">{labels.conceptNote[1]}</text>

        <line className="flow-diagram__arrow" x1="332" y1="140" x2="372" y2="140" markerEnd="url(#flow-arrow)" />

        {/* Proposition as the anchor */}
        <rect className="flow-diagram__anchor" x="376" y="82" width="190" height="116" rx="8" />
        <text x="471" y="106" textAnchor="middle" className="flow-diagram__label">{labels.proposition}</text>
        {labels.propositionLines.map((line, index) => (
          <text key={line} x="471" y={128 + index * 16} textAnchor="middle" className="flow-diagram__small">
            {line}
          </text>
        ))}

        <line className="flow-diagram__arrow" x1="568" y1="140" x2="602" y2="140" markerEnd="url(#flow-arrow)" />

        {/* Beats: the same explore/choose, once per beat */}
        <polygon className="flow-diagram__diamond flow-diagram__diamond--faint" points="606,140 646,90 686,140 646,190" />
        <polygon className="flow-diagram__diamond flow-diagram__diamond--mid" points="636,140 676,90 716,140 676,190" />
        <polygon className="flow-diagram__diamond" points="666,140 706,90 746,140 706,190" />
        <text x="676" y="248" textAnchor="middle" className="flow-diagram__label">{labels.beats}</text>
        <text x="676" y="267" textAnchor="middle" className="flow-diagram__small">{labels.beatsNote[0]}</text>
        <text x="676" y="284" textAnchor="middle" className="flow-diagram__small">{labels.beatsNote[1]}</text>

        <line className="flow-diagram__arrow" x1="748" y1="140" x2="806" y2="140" markerEnd="url(#flow-arrow)" />
        <rect className="flow-diagram__box" x="810" y="102" width="170" height="76" rx="8" />
        <text x="895" y="136" textAnchor="middle" className="flow-diagram__label">{labels.beatCheck[0]}</text>
        <text x="895" y="155" textAnchor="middle" className="flow-diagram__small">{labels.beatCheck[1]}</text>

        <path className="flow-diagram__arrow" d="M895,180 L895,306 L80,306 L80,336" markerEnd="url(#flow-arrow)" />

        {/* Build layer by layer, each approved before the next */}
        {labels.layers.map(([title, note], index) => {
          const x = layerX[index]
          const isGate = index === 4
          return (
            <g key={title}>
              <rect className={isGate ? 'flow-diagram__gate' : 'flow-diagram__box'} x={x} y="340" width="120" height="64" rx="8" />
              <text x={x + 60} y="368" textAnchor="middle" className="flow-diagram__label">{title}</text>
              <text x={x + 60} y="387" textAnchor="middle" className="flow-diagram__small">{note}</text>
              {index < labels.layers.length - 1 && (
                <line className="flow-diagram__arrow" x1={x + 120} y1="372" x2={x + 136} y2="372" markerEnd="url(#flow-arrow)" />
              )}
            </g>
          )
        })}

        {/* Result off: trace upward to the layer that failed */}
        <path className="flow-diagram__loop" d="M780,406 L780,452 L80,452 L80,410" markerEnd="url(#flow-arrow)" />
        <text x="430" y="482" textAnchor="middle" className="flow-diagram__label">{labels.loop}</text>
      </svg>
    </div>
  )
}
