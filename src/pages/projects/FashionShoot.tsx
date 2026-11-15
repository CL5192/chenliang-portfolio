import { Link } from 'react-router-dom'
import { PageSection } from '../../components/PageSection'
import { ZoomScrollImage } from '../../components/ZoomScrollImage'
import { getProjectBySlug } from '../../content/projects'
import n8nCanvas from '../../assets/projects/fashion-shoot/n8n-canvas.png'
import inputLook from '../../assets/projects/fashion-shoot/input-look.jpg'
import itemVest from '../../assets/projects/fashion-shoot/item-vest.jpg'
import itemTee from '../../assets/projects/fashion-shoot/item-tee.jpg'
import itemJeans from '../../assets/projects/fashion-shoot/item-jeans.jpg'
import itemSneakers from '../../assets/projects/fashion-shoot/item-sneakers.jpg'
import out1 from '../../assets/projects/fashion-shoot/out-1.jpg'
import out2 from '../../assets/projects/fashion-shoot/out-2.jpg'
import out3 from '../../assets/projects/fashion-shoot/out-3.jpg'
import out4 from '../../assets/projects/fashion-shoot/out-4.jpg'
import out5 from '../../assets/projects/fashion-shoot/out-5.jpg'
import out6 from '../../assets/projects/fashion-shoot/out-6.jpg'
import out7 from '../../assets/projects/fashion-shoot/out-7.jpg'
import out8 from '../../assets/projects/fashion-shoot/out-8.jpg'
import selects30 from '../../assets/projects/fashion-shoot/selects-30.jpg'
import fixHeadBefore from '../../assets/projects/fashion-shoot/fix-head-before.jpg'
import fixHeadAfter from '../../assets/projects/fashion-shoot/fix-head-after.jpg'
import fixChairBefore from '../../assets/projects/fashion-shoot/fix-chair-before.jpg'
import fixChairAfter from '../../assets/projects/fashion-shoot/fix-chair-after.jpg'
import { useI18n } from '../../i18n/I18nContext'

const slug = 'fashion-shoot'

const copyEn = {
  backToProjects: '<- Back to all work',
  fallbackTitle: 'Fashion Shoot Pipeline',
  lead: 'An n8n workflow that turns one photo of a look into a 30-shot editorial. GPT-5 mini checks each shot before it is generated; I pick the final images.',
  hero: {
    inputLabel: 'Input · the look + four garment references',
    itemAlts: ['Silver puffer vest, front and back', 'Striped t-shirt, front and back', 'Light-blue cargo jeans, front and back', 'Silver-blue sneakers from three sides'],
    inputAlt: 'The look, front view: silver puffer vest, striped t-shirt, light-blue cargo jeans, silver sneakers',
    outputLabel: 'Output · 30 shots, 8 shown',
    outputAlt: 'The same look in a different pose',
  },
  projectDetails: 'Project details',
  medium: 'Medium',
  mediumValue: '30 stills from one look',
  role: 'My role',
  roleValue: 'Solo, November 2026',
  output: 'Output',
  outputValue: '37 images generated, 30 kept',
  tools: 'Tools',
  toolsValue: 'n8n · Comfy Cloud API · Seedream 5.5 · OpenAI GPT-5 mini · Claude Code as production assistant',
  disclaimer: 'A self-initiated test project; the images were made with AI.',
  workflow: {
    id: 'workflow',
    title: 'The workflow',
    text: 'A shot list pairs a pose with a camera angle. For each shot, the workflow pulls the full descriptions from small tables, has GPT-5 mini check and adjust the shot, sends the prompt and five outfit references to Seedream 5.5, saves the image and logs the decision. One run covers all 30 shots.',
    animationTitle: 'How the workflow runs, step by step',
    animationHint: 'Use the arrows or click a step to move through it.',
    canvasAlt: 'The workflow on the n8n canvas',
    canvasCaption: 'The real workflow in n8n. Click to enlarge.',
    close: 'close ×',
  },
  design: {
    id: 'design',
    title: 'Setup',
    points: [
      {
        lead: 'Tables, not one long prompt.',
        text: 'Poses, camera angles, props and framings are rows I can edit without touching the workflow.',
      },
      {
        lead: 'The pose comes first.',
        text: 'GPT-5 mini can rewrite a pose, swap the camera or choose the prop and framing, but not replace the pose.',
      },
      {
        lead: 'Checks before generation.',
        text: 'Every shot is kept, changed or skipped before it costs anything.',
      },
    ],
  },
  testing: {
    id: 'fixes',
    title: 'Fixes from real runs',
    text: 'I ran small batches and traced each bad image to its source.',
    before: 'Before',
    after: 'After',
    pairs: [
      {
        caption: 'Heads cut off → framing fixed',
        alts: ['Model sitting on the floor, the frame cuts off the top of the head', 'Same shot after the framing fix, the whole head in frame'],
      },
      {
        caption: 'Chair bent to fit the pose → real proportions',
        alts: ['Wooden chair with a tilted seat and stretched legs', 'Same pose on a chrome folding chair with normal proportions'],
      },
    ],
    head: ['Problem', 'Cause', 'Fix'],
    rows: [
      ['Heads cut off', 'The framing table said “crop the top of the head”', 'Rewrote that framing: head always in frame'],
      ['Chairs bent to fit the pose', 'The rule let the chair give way', 'Adjust the body, not the chair; otherwise skip'],
      ['Plain wooden chairs', 'Seat descriptions too vague', 'Material and finish per seat; metal to match the outfit'],
      ['Catalogue-like framing', 'Every camera angle said “full body”', 'Added a framing table'],
    ],
  },
  results: {
    id: 'results',
    title: 'Results',
    text: 'Final round: 30 shots planned, 37 images generated (7 re-runs after the framing fix), 30 images kept. For two shots I kept both versions.',
    selectsAlt: 'The 30 kept images in a grid',
  },
  soft: {
    id: 'soft-rules',
    title: 'Soft rules, hard limits',
    text: [
      'The pose table is loose. Each entry says how the body relates to the seat and the camera. It does not say where the hands go. GPT-5 mini and the image model decide that, and the poses look more natural for it.',
      'The downside: the model bends whatever is not defined to make a pose work. In one batch it bent the chair. I added hard rules only where this happened: seats keep real proportions, the head stays in frame.',
    ],
  },
}

const copyDe: typeof copyEn = {
  backToProjects: '<- Zurück zur Übersicht',
  fallbackTitle: 'Fashion Shoot Pipeline',
  lead: 'Ein n8n-Workflow, der aus einem Foto eines Looks ein Editorial mit 30 Shots macht. GPT-5 mini prüft jeden Shot, bevor er generiert wird; die finalen Bilder wähle ich aus.',
  hero: {
    inputLabel: 'Input · der Look + vier Referenzen der Einzelteile',
    itemAlts: ['Silberne Pufferweste, vorne und hinten', 'Gestreiftes T-Shirt, vorne und hinten', 'Hellblaue Cargo-Jeans, vorne und hinten', 'Silberblaue Sneaker von drei Seiten'],
    inputAlt: 'Der Look von vorne: silberne Pufferweste, gestreiftes T-Shirt, hellblaue Cargo-Jeans, silberne Sneaker',
    outputLabel: 'Output · 30 Shots, 8 davon hier',
    outputAlt: 'Derselbe Look in einer anderen Pose',
  },
  projectDetails: 'Projektdetails',
  medium: 'Medium',
  mediumValue: '30 Stills aus einem Look',
  role: 'Meine Rolle',
  roleValue: 'Allein, November 2026',
  output: 'Output',
  outputValue: '37 Bilder generiert, 30 ausgewählt',
  tools: 'Tools',
  toolsValue: 'n8n · Comfy Cloud API · Seedream 5.5 · OpenAI GPT-5 mini · Claude Code als Produktionsassistent',
  disclaimer: 'Ein selbst initiiertes Testprojekt; die Bilder wurden mit KI erstellt.',
  workflow: {
    id: 'workflow',
    title: 'Der Workflow',
    text: 'Eine Shotliste kombiniert je eine Pose mit einem Kamerawinkel. Für jeden Shot holt der Workflow die vollständigen Beschreibungen aus kleinen Tabellen, lässt GPT-5 mini den Shot prüfen und anpassen, schickt den Prompt mit fünf Outfit-Referenzen an Seedream 5.5, speichert das Bild und protokolliert die Entscheidung. Ein Durchlauf deckt alle 30 Shots ab.',
    animationTitle: 'So läuft der Workflow, Schritt für Schritt',
    animationHint: 'Mit den Pfeilen oder per Klick auf einen Schritt durchgehen. Die Animation ist auf Englisch.',
    canvasAlt: 'Der Workflow im n8n-Editor',
    canvasCaption: 'Der echte Workflow in n8n. Zum Vergrößern klicken.',
    close: 'schließen ×',
  },
  design: {
    id: 'design',
    title: 'Aufbau',
    points: [
      {
        lead: 'Tabellen statt eines langen Prompts.',
        text: 'Posen, Kamerawinkel, Requisiten und Bildausschnitte sind Zeilen, die ich bearbeiten kann, ohne den Workflow anzufassen.',
      },
      {
        lead: 'Die Pose kommt zuerst.',
        text: 'GPT-5 mini darf eine Pose umformulieren, die Kamera wechseln oder Requisite und Bildausschnitt wählen, aber die Pose nicht ersetzen.',
      },
      {
        lead: 'Prüfen vor dem Generieren.',
        text: 'Jeder Shot wird behalten, geändert oder übersprungen, bevor er etwas kostet.',
      },
    ],
  },
  testing: {
    id: 'fixes',
    title: 'Korrekturen aus echten Durchläufen',
    text: 'Ich habe kleine Batches laufen lassen und jedes fehlerhafte Bild bis zu seiner Ursache zurückverfolgt.',
    before: 'Vorher',
    after: 'Nachher',
    pairs: [
      {
        caption: 'Kopf abgeschnitten → Bildausschnitt korrigiert',
        alts: ['Model sitzt am Boden, der Bildrand schneidet den Kopf oben ab', 'Derselbe Shot nach der Korrektur, der ganze Kopf im Bild'],
      },
      {
        caption: 'Stuhl verbogen, damit die Pose passt → echte Proportionen',
        alts: ['Holzstuhl mit schräger Sitzfläche und gestreckten Beinen', 'Dieselbe Pose auf einem verchromten Klappstuhl mit normalen Proportionen'],
      },
    ],
    head: ['Problem', 'Ursache', 'Korrektur'],
    rows: [
      ['Kopf abgeschnitten', 'Die Tabelle mit den Bildausschnitten sagte „Kopf oben anschneiden“', 'Diesen Ausschnitt neu geschrieben: Kopf immer im Bild'],
      ['Stühle verbogen, damit die Pose passt', 'Die Regel ließ den Stuhl nachgeben', 'Den Körper anpassen, nicht den Stuhl; sonst überspringen'],
      ['Schlichte Holzstühle', 'Sitzbeschreibungen zu vage', 'Material und Oberfläche pro Sitz; Metall passend zum Outfit'],
      ['Katalogartige Ausschnitte', 'Jeder Kamerawinkel sagte „Ganzkörper“', 'Eine Tabelle mit Bildausschnitten ergänzt'],
    ],
  },
  results: {
    id: 'results',
    title: 'Ergebnis',
    text: 'Letzter Durchlauf: 30 Shots geplant, 37 Bilder generiert (7 Wiederholungen nach der Korrektur des Bildausschnitts), 30 Bilder ausgewählt. Bei zwei Shots habe ich beide Versionen behalten.',
    selectsAlt: 'Die 30 ausgewählten Bilder im Raster',
  },
  soft: {
    id: 'soft-rules',
    title: 'Weiche Regeln, harte Grenzen',
    text: [
      'Die Posentabelle ist locker. Jeder Eintrag sagt, wie der Körper zum Sitz und zur Kamera steht. Er sagt nicht, wo die Hände sind. Das entscheiden GPT-5 mini und das Bildmodell, und die Posen wirken dadurch natürlicher.',
      'Der Nachteil: Das Modell verbiegt, was nicht festgelegt ist, damit eine Pose funktioniert. In einem Batch hat es den Stuhl verbogen. Harte Regeln habe ich nur dort ergänzt, wo das passiert ist: Sitze behalten echte Proportionen, der Kopf bleibt im Bild.',
    ],
  },
}

export function FashionShoot() {
  const { locale } = useI18n()
  const project = getProjectBySlug(slug, locale)
  const copy = locale === 'de' ? copyDe : copyEn

  return (
    <>
      <p className="page-lead page-back-link">
        <Link to="/">{copy.backToProjects}</Link>
      </p>
      <h1 className="page-title">{project?.title ?? copy.fallbackTitle}</h1>

      {/* Opening: one input photo -> many shots */}
      <div className="fashion-hero">
        <figure className="fashion-hero__input">
          <div className="fashion-hero__in">
            <div className="fashion-hero__items">
              {[itemVest, itemTee, itemJeans, itemSneakers].map((src, index) => (
                <img key={src} src={src} alt={copy.hero.itemAlts[index]} />
              ))}
            </div>
            <img className="fashion-hero__look" src={inputLook} alt={copy.hero.inputAlt} />
          </div>
          <figcaption>{copy.hero.inputLabel}</figcaption>
        </figure>
        <div className="fashion-hero__arrow" aria-hidden="true">
          →
        </div>
        <figure className="fashion-hero__output">
          <div className="fashion-hero__grid">
            {[out1, out2, out3, out4, out5, out6, out7, out8].map((src) => (
              <img key={src} src={src} alt={copy.hero.outputAlt} />
            ))}
          </div>
          <figcaption>{copy.hero.outputLabel}</figcaption>
        </figure>
      </div>

      <p className="page-lead page-lead--after-media">{copy.lead}</p>

      <div className="case-meta" aria-label={copy.projectDetails}>
        <p>
          <strong>{copy.medium}</strong> {copy.mediumValue}
        </p>
        <p>
          <strong>{copy.role}</strong> {copy.roleValue}
        </p>
        <p>
          <strong>{copy.output}</strong> {copy.outputValue}
        </p>
        <p>
          <strong>{copy.tools}</strong> {copy.toolsValue}
        </p>
      </div>

      <p className="page-lead detail-support-line">{copy.disclaimer}</p>

      <PageSection title={copy.workflow.title} id={copy.workflow.id}>
        <div className="case-copy">
          <p>{copy.workflow.text}</p>
        </div>
        <figure className="fashion-flow">
          <iframe src="/fashion-flow/index.html" title={copy.workflow.animationTitle} loading="lazy" />
          <figcaption>{copy.workflow.animationHint}</figcaption>
        </figure>
        <ZoomScrollImage
          src={n8nCanvas}
          alt={copy.workflow.canvasAlt}
          caption={copy.workflow.canvasCaption}
          closeLabel={copy.workflow.close}
        />
      </PageSection>

      <PageSection title={copy.design.title} id={copy.design.id}>
        <ul className="case-copy fashion-points">
          {copy.design.points.map((point) => (
            <li key={point.lead}>
              <strong>{point.lead}</strong> {point.text}
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection title={copy.testing.title} id={copy.testing.id}>
        <div className="case-copy">
          <p>{copy.testing.text}</p>
        </div>
        <div className="fashion-fixes">
          {[
            [fixHeadBefore, fixHeadAfter],
            [fixChairBefore, fixChairAfter],
          ].map((images, pairIndex) => {
            const pair = copy.testing.pairs[pairIndex]
            return (
              <figure key={pair.caption}>
                <div className="fashion-fixes__pair">
                  {images.map((src, index) => (
                    <div key={src}>
                      <img src={src} alt={pair.alts[index]} loading="lazy" />
                      <span>{index === 0 ? copy.testing.before : copy.testing.after}</span>
                    </div>
                  ))}
                </div>
                <figcaption>{pair.caption}</figcaption>
              </figure>
            )
          })}
        </div>
        <table className="fashion-table">
          <thead>
            <tr>
              {copy.testing.head.map((cell) => (
                <th key={cell}>{cell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {copy.testing.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </PageSection>

      <PageSection title={copy.soft.title} id={copy.soft.id}>
        <div className="case-copy">
          {copy.soft.text.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </PageSection>

      <PageSection title={copy.results.title} id={copy.results.id}>
        <div className="case-copy">
          <p>{copy.results.text}</p>
        </div>
        <figure className="fashion-selects">
          <img src={selects30} alt={copy.results.selectsAlt} loading="lazy" />
        </figure>
      </PageSection>

    </>
  )
}
