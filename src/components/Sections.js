export const About = (t) => `
  <section id="about">
    <div class="container">
      <h2 class="section-title">${t.about.title}</h2>
      <div class="grid">
        <div class="card">
          <h3>${t.about.cs.title}</h3>
          <p>${t.about.cs.desc}</p>
        </div>
        <div class="card">
          <h3>${t.about.physics.title}</h3>
          <p>${t.about.physics.desc}</p>
        </div>
        <div class="card">
          <h3>${t.about.csysics.title}</h3>
          <p>${t.about.csysics.desc}</p>
        </div>
      </div>
    </div>
  </section>
`;

export const Philosophy = (t) => `
  <section id="philosophy" style="background: var(--color-bg-alt);">
    <div class="container">
      <h2 class="section-title">${t.philosophy.title}</h2>
      <div style="max-width: 800px; margin: 0 auto; text-align: center;">
        <p style="font-size: 1.2rem; margin-bottom: 2rem;">
          ${t.philosophy.quote}
        </p>
        <p style="color: var(--color-text-muted);">
          ${t.philosophy.desc}
        </p>
      </div>
    </div>
  </section>
`;

export const Services = (t) => `
  <section id="services">
    <div class="container">
      <h2 class="section-title">${t.services.title}</h2>
      <div class="grid">
        <div class="card">
          <h3>${t.services.app.title}</h3>
          <p>${t.services.app.desc}</p>
        </div>
        <div class="card">
          <h3>${t.services.cloud.title}</h3>
          <p>${t.services.cloud.desc}</p>
        </div>
        <div class="card">
          <h3>${t.services.server.title}</h3>
          <p>${t.services.server.desc}</p>
        </div>
      </div>
    </div>
  </section>
`;
