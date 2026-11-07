/**
 * Krospi Meer: how a spot was worked out. Drawn at the text-column width (620 units ≈ 607px).
 * Top row: decisions. Diamonds use Double Diamond notation (left half widens = explore,
 * right half narrows = choose one). Bottom row: the build, one layer after another.
 * Dashed accent lines are the way back: when a result is off, return to the layer that failed.
 */
export type FlowDiagramLabels = {
  aria: string
  explore: string
  choose: string
  concept: string
  conceptNote: string
  proposition: string
  propositionLines: [string, string]
  beats: string
  beatsNote: string
  beatCheck: [string, string]
  /** Six build layers: title + up to two short note lines */
  layers: { title: string; note: string[] }[]
  gate: string
  loop: string
  legendDiamond: string
  legendBack: string
}

const LAYER_X = [10, 106, 202, 298, 422, 518]
const LAYER_W = 84
const ROW2_Y = 180
const ROW2_H = 60

export function FlowDiagram({ labels }: { labels: FlowDiagramLabels }) {
  const mid = (i: number) => LAYER_X[i] + LAYER_W / 2
  return (
    <div className="flow">
      <div className="flow__scroll">
        <svg viewBox="0 0 620 306" role="img" aria-label={labels.aria}>
          <defs>
            <marker id="flow-next" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path className="flow__head" d="M0,0 L10,5 L0,10 z" />
            </marker>
            <marker id="flow-back" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path className="flow__head flow__head--back" d="M0,0 L10,5 L0,10 z" />
            </marker>
          </defs>

          {/* Row 1 — Concept: explore, then choose */}
          <polygon className="flow__diamond" points="10,70 75,32 140,70 75,108" />
          <line className="flow__divider" x1="75" y1="36" x2="75" y2="104" />
          <text x="43" y="74" textAnchor="middle" className="flow__tiny">{labels.explore}</text>
          <text x="107" y="74" textAnchor="middle" className="flow__tiny">{labels.choose}</text>
          <text x="75" y="130" textAnchor="middle" className="flow__title">{labels.concept}</text>
          <text x="75" y="145" textAnchor="middle" className="flow__note">{labels.conceptNote}</text>
          <line className="flow__next" x1="142" y1="70" x2="165" y2="70" markerEnd="url(#flow-next)" />

          {/* Proposition: the anchor */}
          <rect className="flow__anchor" x="168" y="38" width="150" height="64" rx="6" />
          <text x="243" y="61" textAnchor="middle" className="flow__title">{labels.proposition}</text>
          <text x="243" y="79" textAnchor="middle" className="flow__note">{labels.propositionLines[0]}</text>
          <text x="243" y="93" textAnchor="middle" className="flow__note">{labels.propositionLines[1]}</text>
          <line className="flow__next" x1="320" y1="70" x2="343" y2="70" markerEnd="url(#flow-next)" />

          {/* Beats: the same explore/choose, once per beat */}
          <polygon className="flow__diamond flow__diamond--faint" points="346,70 371,44 396,70 371,96" />
          <polygon className="flow__diamond flow__diamond--mid" points="364,70 389,44 414,70 389,96" />
          <polygon className="flow__diamond" points="382,70 407,44 432,70 407,96" />
          <text x="389" y="130" textAnchor="middle" className="flow__title">{labels.beats}</text>
          <text x="389" y="145" textAnchor="middle" className="flow__note">{labels.beatsNote}</text>
          <line className="flow__next" x1="434" y1="70" x2="475" y2="70" markerEnd="url(#flow-next)" />

          <rect className="flow__box" x="478" y="44" width="130" height="52" rx="6" />
          <text x="543" y="66" textAnchor="middle" className="flow__title">{labels.beatCheck[0]}</text>
          <text x="543" y="83" textAnchor="middle" className="flow__note">{labels.beatCheck[1]}</text>

          {/* Beat sheet doesn't hold up → back to the beats */}
          <path className="flow__back" d="M520,44 V20 H407 V41" markerEnd="url(#flow-back)" />

          {/* Into the build */}
          <path className="flow__next" d="M560,96 V160 H52 V177" markerEnd="url(#flow-next)" />

          {/* Row 2 — build layers */}
          {labels.layers.map((layer, i) => (
            <g key={layer.title}>
              <rect className="flow__box" x={LAYER_X[i]} y={ROW2_Y} width={LAYER_W} height={ROW2_H} rx="6" />
              <text x={mid(i)} y={ROW2_Y + 22} textAnchor="middle" className="flow__title flow__title--small">
                {layer.title}
              </text>
              {layer.note.map((line, j) => (
                <text key={line} x={mid(i)} y={ROW2_Y + 38 + j * 12} textAnchor="middle" className="flow__tiny">
                  {line}
                </text>
              ))}
            </g>
          ))}
          <line className="flow__next" x1="94" y1="210" x2="103" y2="210" markerEnd="url(#flow-next)" />
          <line className="flow__next" x1="190" y1="210" x2="199" y2="210" markerEnd="url(#flow-next)" />
          <line className="flow__next" x1="286" y1="210" x2="295" y2="210" markerEnd="url(#flow-next)" />
          <line className="flow__next" x1="382" y1="210" x2="419" y2="210" markerEnd="url(#flow-next)" />
          <line className="flow__next" x1="506" y1="210" x2="515" y2="210" markerEnd="url(#flow-next)" />

          {/* My OK: the gate before anything is generated */}
          <circle className="flow__gate" cx="400" cy="210" r="8" />
          <path className="flow__check" d="M396,210 l3,3 l5,-6" />
          <text x="400" y="176" textAnchor="middle" className="flow__tiny flow__tiny--strong">{labels.gate}</text>

          {/* Result off → back to the layer that failed */}
          <path className="flow__back" d={`M450,${ROW2_Y + ROW2_H} V258 H340 V${ROW2_Y + ROW2_H + 3}`} markerEnd="url(#flow-back)" />
          <path className="flow__back" d={`M478,${ROW2_Y + ROW2_H} V276 H52 V${ROW2_Y + ROW2_H + 3}`} markerEnd="url(#flow-back)" />
          <path className="flow__back" d={`M492,${ROW2_Y} V126 H520 V99`} markerEnd="url(#flow-back)" />
          <text x="52" y="298" className="flow__note flow__note--back">{labels.loop}</text>
        </svg>
      </div>
      <p className="flow__legend">
        <span>
          <svg viewBox="0 0 20 14" aria-hidden="true">
            <polygon className="flow__diamond" points="1,7 10,1 19,7 10,13" />
          </svg>
          {labels.legendDiamond}
        </span>
        <span>
          <svg viewBox="0 0 24 14" aria-hidden="true">
            <line className="flow__back" x1="1" y1="7" x2="23" y2="7" />
          </svg>
          {labels.legendBack}
        </span>
      </p>
    </div>
  )
}
