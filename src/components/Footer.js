export const Footer = (t) => `
  <footer style="padding: 4rem 1rem; border-top: 1px solid var(--glass-border); margin-top: 4rem; background: var(--color-bg-alt); color: var(--color-text-muted); font-size: 0.9rem;">
    <div class="container">
      <div style="display: flex; flex-direction: column; gap: 2rem; margin-bottom: 3rem;">
        <div>
           <h2 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 1rem; color: var(--color-text);">CSYSICS</h2>
           <p style="margin-bottom: 1rem;">${t.footer.tagline}</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; border-top: 1px solid #333; padding-top: 2rem;">
          <div>
            <strong style="color: var(--color-text); display: block; margin-bottom: 0.5rem;">${t.footer.contactInfo}</strong>
            <p>Email: ceo@csysics.com</p>
            <p>Mobile: 010-5725-2222</p>
            <p>Fax: 0504-159-1421</p>
          </div>
          <div>
            <strong style="color: var(--color-text); display: block; margin-bottom: 0.5rem;">${t.footer.companyInfo}</strong>
            <p>${t.footer.ceo}</p>
            <p>${t.footer.address}</p>
            <p>Business License: 710-34-01552</p>
          </div>

        </div>
      </div>
      
      <div style="border-top: 1px solid #333; padding-top: 1.5rem; text-align: center; color: #666;">
        <p>${t.footer.rights}</p>
      </div>
    </div>
  </footer>
`;
