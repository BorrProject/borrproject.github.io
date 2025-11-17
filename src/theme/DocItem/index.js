import React, {useEffect, useState} from 'react';
import * as OriginalModule from '@theme-original/DocItem';
import ReadingProgress from '@site/src/components/ReadingProgress/ReadingProgress';
import {createPortal} from 'react-dom';

export default function DocItem(props) {
  const [portalContainer, setPortalContainer] = useState(null);

  useEffect(() => {
    // Find the main article for the current doc page
    const article = document.querySelector('article');
    if (!article) return;

    // Create a container and insert it before the doc footer (if any)
    const container = document.createElement('div');
    container.className = 'borr-reading-progress-portal';
    container.style.width = '100%';
    container.style.marginTop = '1rem';

    const footer = article.querySelector('.theme-doc-footer');
    if (footer) article.insertBefore(container, footer);
    else article.appendChild(container);

    setPortalContainer(container);

    return () => {
      try {
        if (container && container.parentNode) container.parentNode.removeChild(container);
      } catch (e) {}
    };
  }, []);

  // Support both default and named module shapes that docusaurus might provide
  const OriginalDocItem = OriginalModule && (OriginalModule.default ?? OriginalModule);
  if (!OriginalDocItem) {
    // Provide a helpful diagnostic if the theme original couldn't be resolved
    // Render only the reading progress so the site remains usable.
    // eslint-disable-next-line no-console
    console.warn('[DocItem swizzle] @theme-original/DocItem resolved to', OriginalModule);
    return portalContainer ? createPortal(<ReadingProgress />, portalContainer) : <ReadingProgress />;
  }

  return (
    <>
      <OriginalDocItem {...props} />
      {portalContainer ? createPortal(<ReadingProgress />, portalContainer) : null}
    </>
  );
}
