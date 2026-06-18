/**
 * Swizzled @theme/Mermaid — themes every Mermaid diagram on the site with the
 * CNTUG design system, with correct light/dark palettes.
 *
 * WHY A SWIZZLE: @docusaurus/theme-mermaid only accepts ONE static `options`
 * object (incl. themeVariables) shared across colour modes, so per-mode colours
 * are impossible from docusaurus.config.js alone. The render hook
 * (useMermaidRenderResult) does accept a custom `config`, so we build it here
 * from useColorMode() and feed Mermaid a different palette per mode.
 *
 * COLOURS MUST BE CONCRETE HEX. Mermaid derives shades with the khroma colour
 * library and strips values containing dashes, so CSS `var(--token)` cannot be
 * used in themeVariables. The hex values below mirror the design tokens in
 * src/css/cntug-tokens.css (light :root and [data-theme="dark"]). Keep them in
 * sync if the tokens change. `fontFamily` is NOT colour-processed, so the font
 * stack (matching --font-sans) is fine there.
 */
import React, {useEffect, useMemo, useRef} from 'react';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import {useColorMode, ErrorBoundaryErrorMessageFallback} from '@docusaurus/theme-common';
import {
  MermaidContainerClassName,
  useMermaidRenderResult,
} from '@docusaurus/theme-mermaid/client';

const FONT =
  '"Clarity City", "Noto Sans TC", -apple-system, BlinkMacSystemFont, "PingFang TC", "Microsoft JhengHei", system-ui, sans-serif';

// Light palette — mirrors src/css/cntug-tokens.css :root.
const LIGHT = {
  background: '#ffffff',
  // Nodes
  primaryColor: '#E6F3FF', // --blue-50
  mainBkg: '#E6F3FF',
  primaryTextColor: '#001A33', // --blue-900
  nodeTextColor: '#001A33',
  primaryBorderColor: '#0086FF', // --cncf-blue
  nodeBorder: '#0086FF',
  secondaryColor: '#F4F4F5', // --bg-muted
  tertiaryColor: '#FAFAFA', // --neutral-50
  secondaryTextColor: '#0A0A0A',
  tertiaryTextColor: '#0A0A0A',
  // Edges / text
  lineColor: '#737373', // --neutral-500
  textColor: '#0A0A0A', // --fg
  titleColor: '#0A0A0A',
  edgeLabelBackground: '#ffffff',
  // Subgraphs
  clusterBkg: '#F4F4F5',
  clusterBorder: '#D4D4D4', // --border-strong
  // Sequence diagrams
  actorBkg: '#E6F3FF',
  actorBorder: '#0086FF',
  actorTextColor: '#001A33',
  actorLineColor: '#737373',
  signalColor: '#525252', // --neutral-600
  signalTextColor: '#0A0A0A',
  labelBoxBkgColor: '#F4F4F5',
  labelBoxBorderColor: '#D4D4D4',
  labelTextColor: '#0A0A0A',
  loopTextColor: '#525252',
  noteBkgColor: '#E0F7FB', // --info-soft
  noteTextColor: '#0A0A0A',
  noteBorderColor: '#0AA8C0', // --info
  activationBkgColor: '#CCE7FF', // --blue-100
  activationBorderColor: '#0086FF',
  sequenceNumberColor: '#ffffff',
};

// Dark palette — mirrors src/css/cntug-tokens.css [data-theme="dark"].
const DARK = {
  background: '#1C1C1E',
  primaryColor: '#16314F', // dark blue surface
  mainBkg: '#16314F',
  primaryTextColor: '#EBEBF5',
  nodeTextColor: '#EBEBF5',
  primaryBorderColor: '#4DA8FF', // dark --cncf-blue
  nodeBorder: '#4DA8FF',
  secondaryColor: '#2C2C2E', // dark --bg-muted
  tertiaryColor: '#232326', // dark --bg-subtle
  secondaryTextColor: '#EBEBF5',
  tertiaryTextColor: '#EBEBF5',
  lineColor: '#98989D',
  textColor: '#EBEBF5',
  titleColor: '#EBEBF5',
  edgeLabelBackground: '#1C1C1E',
  clusterBkg: '#232326',
  clusterBorder: '#48484A',
  actorBkg: '#16314F',
  actorBorder: '#4DA8FF',
  actorTextColor: '#EBEBF5',
  actorLineColor: '#98989D',
  signalColor: '#C7C7CC',
  signalTextColor: '#EBEBF5',
  labelBoxBkgColor: '#2C2C2E',
  labelBoxBorderColor: '#48484A',
  labelTextColor: '#EBEBF5',
  loopTextColor: '#C7C7CC',
  noteBkgColor: '#143A42', // dark info tint
  noteTextColor: '#EBEBF5',
  noteBorderColor: '#4DD3E8', // dark --info
  activationBkgColor: '#22344A',
  activationBorderColor: '#4DA8FF',
  sequenceNumberColor: '#1C1C1E',
};

function MermaidRenderResult({renderResult}) {
  const ref = useRef(null);
  useEffect(() => {
    // Capture the node at effect-setup time (mirrors upstream) so a strict-mode
    // remount can't hand bindFunctions a different/stale node.
    const div = ref.current;
    renderResult.bindFunctions?.(div);
  }, [renderResult]);
  return (
    <div
      ref={ref}
      className={MermaidContainerClassName}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: renderResult.svg}}
    />
  );
}

function MermaidRenderer({value}) {
  const {colorMode} = useColorMode();
  // Memoise so Mermaid only re-renders when the colour mode actually flips,
  // not on every parent render.
  const config = useMemo(
    () => ({
      startOnLoad: false,
      theme: 'base',
      fontFamily: FONT,
      themeVariables: colorMode === 'dark' ? DARK : LIGHT,
    }),
    [colorMode],
  );
  const renderResult = useMermaidRenderResult({text: value, config});
  if (renderResult === null) {
    return null;
  }
  return <MermaidRenderResult renderResult={renderResult} />;
}

export default function Mermaid(props) {
  return (
    <ErrorBoundary
      fallback={(params) => <ErrorBoundaryErrorMessageFallback {...params} />}>
      <MermaidRenderer {...props} />
    </ErrorBoundary>
  );
}
