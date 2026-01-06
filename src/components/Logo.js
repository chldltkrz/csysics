export const Logo = (width = 100, height = 100, color = 'currentColor') => `
<svg width="${width}" height="${height}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 0 auto;">
  <path d="M50 10 L20 80 H45 L50 68 L55 80 H80 L50 10Z" fill="none" stroke="${color}" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 60 H70" stroke="${color}" stroke-width="8" stroke-linecap="round"/>
</svg>
`;

export const CsysicsLogo = () => `
<!-- 
  ViewBox: 180 50 150 150 (Unchanged)
  Width/Height: Reduced to 80% of previous (400 -> 320)
  Max-Width: Reduced to 400px
-->
<svg viewBox="180 50 150 150" width="320" height="320" xmlns="http://www.w3.org/2000/svg" class="company-logo" style="width: 100%; max-width: 400px; height: auto; display: block; margin: 0 auto;">
  <defs>
    <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
       <stop offset="0%" stop-color="#cccccc" /> <!-- Silver/White start -->
       <stop offset="100%" stop-color="#666666" /> <!-- Darker Grey end -->
    </linearGradient>
  </defs>
  <path id="&lt;Compound Path&gt;" fill-rule="evenodd" fill="url(#logoGradient)" d="m316.97 170.45h-103.45l-10.6 18.35-11.69-6.75 51.73-89.59-10.6-18.35 11.69-6.75 51.73 89.59h21.19zm-66.22-64.49l-29.44 50.99h58.88z"/>
</svg>
`;
