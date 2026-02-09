import './App.css'

function App() {
  return (
    <div className="mun-app">
      {/* Dais / Header */}
      <header className="dais">
        <div className="committee-info">
          <h1 className="committee-title">Digital Diplomat Simulator</h1>
          <p className="committee-subtitle">
            Committee: UN General Assembly • Topic: Global Vaccine Equity
          </p>
        </div>

        <div className="committee-status">
          <div className="status-item">
            <span className="status-label">Current Motion</span>
            <span className="status-value">
              Moderated Caucus on Renewable Energy Infrastructure
            </span>
          </div>
          <div className="status-item">
            <span className="status-label">Speaker Timer</span>
            <div className="timer-bar">
              <div className="timer-bar-fill" />
              <span className="timer-text">00:45 / 01:00</span>
            </div>
          </div>
        </div>

        <div className="chair">
          <div className="chair-avatar">SG</div>
          <div className="chair-text">
            <div className="chair-role">Secretary-General (AI Chair)</div>
            <div className="chair-line">
              The Delegate of Germany has the floor. Please keep your remarks to 60 seconds.
            </div>
          </div>
        </div>
      </header>

      <main className="layout">
        {/* Caucus Map / Left Sidebar */}
        <aside className="sidebar sidebar-left">
          <h2 className="panel-title">Caucus Map</h2>
          <div className="state-list">
            {[
              { name: 'Germany', mood: 'agree', block: 'G7' },
              { name: 'Brazil', mood: 'neutral', block: 'BRICS' },
              { name: 'India', mood: 'agree', block: 'BRICS' },
              { name: 'China', mood: 'hostile', block: 'BRICS' },
              { name: 'South Africa', mood: 'neutral', block: 'BRICS' },
              { name: 'United States', mood: 'neutral', block: 'G7' },
            ].map((s) => (
              <div key={s.name} className="state-row">
                <div className={`mood-dot mood-${s.mood}`} />
                <div className="state-meta">
                  <div className="state-name">{s.name}</div>
                  <div className="state-block">{s.block} block</div>
                </div>
              </div>
            ))}
          </div>

          <div className="coalitions">
            <h3 className="subheading">Coalition Blocks</h3>
            <div className="chip-row">
              <span className="chip chip-soft">G7 Alignment</span>
              <span className="chip chip-soft">BRICS Coalition</span>
              <span className="chip chip-soft">Non‑Aligned States</span>
            </div>
          </div>

          <div className="heatmap-card">
            <h3 className="subheading">Diplomatic Heatmap</h3>
            <div className="heatmap-placeholder">
              <span className="heatmap-label">Global Support: 62%</span>
              <span className="heatmap-sub">Your draft currently favors Global South priorities.</span>
            </div>
          </div>
        </aside>

        {/* Global Floor / Center */}
        <section className="center">
          <h2 className="panel-title">Global Floor</h2>

          <div className="feed">
            <div className="speech-bubble">
              <div className="speech-header">
                <div className="avatar-circle avatar-south-africa">SA</div>
                <div>
                  <div className="speaker-name">Delegate of South Africa (You)</div>
                  <div className="speaker-meta">Proposal • Moderated Caucus</div>
                </div>
              </div>
              <div className="speech-body">
                Honorable Chair, distinguished delegates, South Africa moves for a moderated caucus
                on vaccine equity with a speaking time of 45 seconds, so that this committee may
                directly address disparities in access to life‑saving doses.
              </div>
            </div>

            <div className="speech-bubble">
              <div className="speech-header">
                <div className="avatar-circle avatar-germany">DE</div>
                <div>
                  <div className="speaker-name">Delegate of Germany</div>
                  <div className="speaker-meta">Position Statement</div>
                </div>
              </div>
              <div className="speech-body">
                Honorable Chair, Germany believes that any framework on vaccine equity must preserve
                supply chain resilience while expanding technology transfer under voluntary, time‑bound
                licensing agreements.
              </div>
            </div>

            <div className="speech-bubble">
              <div className="speech-header">
                <div className="avatar-circle avatar-india">IN</div>
                <div>
                  <div className="speaker-name">Delegate of India</div>
                  <div className="speaker-meta">Backchannel Signal</div>
                </div>
              </div>
              <div className="speech-body">
                Honorable Chair, India stands ready to co‑sponsor any draft that meaningfully expands
                production in the Global South while respecting our national red lines on strategic
                technologies.
              </div>
            </div>
          </div>

          <div className="floor-controls">
            <div className="primary-actions">
              <button className="btn btn-primary">Motion for Moderated Caucus</button>
              <button className="btn btn-secondary">Motion for Unmoderated Caucus</button>
            </div>
            <div className="secondary-actions">
              <button className="btn btn-ghost">Point of Order</button>
              <button className="btn btn-ghost">Point of Inquiry</button>
              <button className="btn btn-ghost">Motion to Adjourn</button>
            </div>
          </div>

          <div className="input-card">
            <div className="input-header">
              <span className="input-label">Draft your speech</span>
              <span className="input-meta">Chair will gavel at 60 seconds</span>
            </div>
            <textarea
              className="speech-input"
              placeholder="Honorable Chair, distinguished delegates..."
              rows={4}
            />
            <div className="input-footer">
              <span className="char-count">0 / 800 characters</span>
              <button className="btn btn-primary">Yield the Floor</button>
            </div>
          </div>
        </section>

        {/* Resolution Drafter / Right Sidebar */}
        <aside className="sidebar sidebar-right">
          <h2 className="panel-title">Resolution Drafter</h2>

          <div className="resolution-card">
            <div className="resolution-header">
              <div>
                <div className="resolution-title">Working Paper 1.1</div>
                <div className="resolution-meta">Live draft by AI Rapporteur</div>
              </div>
              <span className="chip chip-compact">In Progress</span>
            </div>

            <div className="resolution-section">
              <div className="section-label">Preambulatory Clauses</div>
              <ul className="clause-list">
                <li>
                  Deeply concerned by persistent inequities in global vaccine distribution which
                  disproportionately impact low‑ and middle‑income countries,
                </li>
                <li>
                  Recalling previous resolutions on pandemic preparedness and access to essential
                  medicines,
                </li>
              </ul>
            </div>

            <div className="resolution-section">
              <div className="section-label">Operative Clauses</div>
              <ol className="clause-list numbered">
                <li>
                  Calls for the creation of a Global South Vaccine Manufacturing Network to expand
                  regional production capacity;
                </li>
                <li>
                  Encourages voluntary technology transfer agreements between patent holders and
                  qualified manufacturers in under‑served regions;
                </li>
              </ol>
            </div>

            <div className="sponsors">
              <div className="section-label">Sponsors &amp; Signatories</div>
              <div className="chip-row">
                <span className="chip chip-strong">South Africa (Sponsor)</span>
                <span className="chip chip-strong">India (Sponsor)</span>
                <span className="chip chip-soft">Brazil (Signatory)</span>
                <span className="chip chip-soft">Germany (Signatory)</span>
              </div>
            </div>

            <div className="amendments">
              <div className="section-label">Amendments</div>
              <button className="btn btn-secondary btn-full">Propose Amendment</button>
            </div>
          </div>

          <div className="strategy-card">
            <h3 className="subheading">Internal Monologue</h3>
            <p className="strategy-text">
              The AI Rapporteur believes you can secure a majority if you soften language on
              compulsory licensing and offer a phased implementation tied to capacity benchmarks.
            </p>
          </div>
        </aside>
      </main>
    </div>
  )
}

export default App
