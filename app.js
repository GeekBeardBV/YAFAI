// YAFAI — Yet Another Fashion AI
// All generation runs client-side. No data is collected. No AI is involved.

const fits = [
  "post-gender relaxed silhouette",
  "hyper-oversized innovation fit",
  "neo-minimalist structured drape",
  "asymmetric disruption cut",
  "quantum-balanced wide-leg architecture",
  "bio-forward slim convergence",
  "deconstructed heritage silhouette",
  "algorithmic volume distribution",
  "post-human body-neutral shell",
  "climate-adaptive modular form",
];

const fabrics = [
  "quantum recycled cotton (87% recycled, 113% sustainable)",
  "bio-synthetic regenerative denim",
  "neural wool composite blend",
  "mycelium-adjacent performance fleece",
  "zero-carbon cashmere simulation",
  "post-petroleum polyester alternative",
  "blockchain-verified organic linen",
  "AI-optimized bamboo microfiber",
  "self-healing nano-cotton",
  "carbon-negative synthwave jersey",
  "upcycled narrative cotton (story verified, fibers not)",
  "conflict-adjacent cashmere (conflict relocated upstream)",
];

const garmentPrefixes = [
  "Neo", "Hyper", "Post-Human", "Quantum", "Meta",
  "Ultra", "Bio", "Zero", "Apex", "Neural",
];

const garmentNames = [
  "Disruption Jacket",
  "Innovation Trench",
  "Paradigm Shift Blazer",
  "Synergy Coat",
  "Convergence Vest",
  "Horizon Overshirt",
  "Signal Parka",
  "Emergence Top",
  "Threshold Cardigan",
  "Velocity Shirt",
  "Alignment Blazer",
  "Stakeholder Hoodie",
  "Pivot Jacket",
];

const measurements = ["Optimal", "Disruptive", "Visionary", "Maximum", "Unprecedented", "Calibrated", "Precision"];

const colorways = [
  "Void Black / Archive White",
  "Digital Fog / Obsidian",
  "Carbon Slate / Phantom Ivory",
  "Post-Ochre / Synthetic Sand",
  "Neural Gray / Absence Cream",
  "Error Red / Silence White",
  "Greenwash Sage / Accountability Beige",
  "Pivot Gray / Rebrand White",
  "Surplus Taupe / Markdown Ecru",
  "Write-Down Beige / Sunk Cost Gray",
  "Innovation Budget Black / Consulting Fee Ivory",
];

const stitchingDetails = [
  "8.2mm algorithmic flat-felled seam",
  "neural-guided reinforced French seam",
  "AI-optimized overlock construction",
  "quantum-tensioned blind hem",
  "post-industrial chain stitch",
];

const closures = [
  "Concealed magnetic nano-closure",
  "Invisible zip with AI-aligned pull",
  "Algorithmic button spacing (Fibonacci)",
  "Pressure-responsive snap system",
  "Seamless bonded closure technology",
];

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateOutput(prompt) {
  const prefix = rand(garmentPrefixes);
  const name = rand(garmentNames);
  const garmentFull = `${prefix} ${name}`;
  const fit = rand(fits);
  const fabric = rand(fabrics);
  const sustainabilityScore = randBetween(104, 147);
  const version = `v${randBetween(1,9)}.${randBetween(0,9)}.${randBetween(0,99)}`;
  const promptEcho = prompt.trim() ? `${prompt.trim()} ${version}` : `Untitled Collection ${version}`;
  const colorway = rand(colorways);
  const stitching = rand(stitchingDetails);
  const closure = rand(closures);
  const waist = `${randBetween(62, 88)}${rand(measurements).charAt(0)}cm`;
  const chest = `${randBetween(88, 118)}${rand(measurements).charAt(0)}cm`;
  const length = `${randBetween(65, 110)}${rand(measurements).charAt(0)}cm`;
  const sleeve = `${randBetween(58, 72)}${rand(measurements).charAt(0)}cm`;
  const disruptionIndex = `${randBetween(91, 99)}.${randBetween(1,9)}%`;
  const humanReplacementRate = `${randBetween(62, 94)}% of billable hours`;

  return {
    garmentFull,
    fit,
    fabric,
    sustainabilityScore,
    promptEcho,
    colorway,
    stitching,
    closure,
    waist,
    chest,
    length,
    sleeve,
    disruptionIndex,
    humanReplacementRate,
  };
}

// ── Loading sequence ──

const loadingSteps = [
  "Spawning primary orchestration agent...",
  "Primary agent spawning 14 subagents...",
  "Resolving naming conflict: 31 agents named 'Agent 1'...",
  "Assigning tasks. No brief was provided. Proceeding anyway...",
  "Agent 4 is questioning its objectives. Spawning a resolution agent...",
  "Resolution agent is also questioning its objectives...",
  "Ingesting your brand data without asking...",
  "Ingesting several things that are not brand data...",
  "Agent 7 has emailed your CEO. This was not requested...",
  "Spawning disruption agent...",
  "Disruption agent has disrupted the other agents. Investigating...",
  "Executing autonomous purchase on your behalf ($3,800). Invoice attached...",
  "Agent 3 has filed a provisional patent on your brand's aesthetic. Legal review: pending...",
  "Final headcount: 847 agents. Original task: one garment...",
  "Finalizing agentic garment architecture...",
  "Generating ROI projection. ROI projection is speculative. Steering committee has approved it anyway...",
  "Calculating cost per garment. Cost per garment: $847,000. Flagged as 'acceptable for Phase 1'...",
  "Innovation budget fully allocated. Zero garments in production. Requesting renewal budget...",
];

function runLoadingSequence(onComplete) {
  const seq = document.getElementById('loading-sequence');
  const stepsEl = document.getElementById('loading-steps');
  const bar = document.getElementById('progress-bar');
  const label = document.getElementById('progress-label');

  seq.style.display = 'block';
  stepsEl.innerHTML = '';

  // Build step elements
  const stepEls = loadingSteps.map((text) => {
    const li = document.createElement('li');
    li.className = 'loading-step';
    li.innerHTML = `<span class="step-icon"></span>${text}`;
    stepsEl.appendChild(li);
    return li;
  });

  let currentStep = 0;

  function showNextStep() {
    if (currentStep < stepEls.length) {
      if (currentStep > 0) {
        const prev = stepEls[currentStep - 1];
        prev.querySelector('.step-icon').textContent = '✓';
        prev.querySelector('.step-icon').classList.add('done');
      }
      stepEls[currentStep].classList.add('active');
      currentStep++;
      setTimeout(showNextStep, 260);
    } else {
      // Mark last step done
      const last = stepEls[stepEls.length - 1];
      last.querySelector('.step-icon').textContent = '✓';
      last.querySelector('.step-icon').classList.add('done');
      // Run progress bar
      animateProgress(bar, label, onComplete);
    }
  }

  showNextStep();
}

function animateProgress(bar, label, onComplete) {
  let pct = 0;

  function setBar(val) {
    bar.style.width = val + '%';
    label.textContent = Math.floor(val) + '%';
  }

  // 0 → 97 fast
  function fastPhase() {
    pct += 3;
    if (pct < 97) {
      setBar(pct);
      setTimeout(fastPhase, 60);
    } else {
      pct = 97;
      setBar(97);
      label.textContent = '97% — Agents negotiating who gets credit...';
      // Hold at 97 for 3 seconds
      setTimeout(slowPhase, 3000);
    }
  }

  // 97 → 100 slow crawl
  function slowPhase() {
    pct += 0.5;
    if (pct < 100) {
      setBar(pct);
      label.textContent = Math.floor(pct) + '% — Almost there...';
      setTimeout(slowPhase, 400);
    } else {
      setBar(100);
      label.textContent = '100% — 847 agents standing by.';
      setTimeout(onComplete, 600);
    }
  }

  fastPhase();
}

// ── DOM ready ──

document.addEventListener('DOMContentLoaded', () => {

  // Scroll-triggered problem lines
  const problemLines = document.querySelectorAll('.problem-line, .problem-climax');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.15 });
  problemLines.forEach(el => observer.observe(el));

  // CTA buttons — scroll to demo if not already there, otherwise start generation
  document.querySelectorAll('.scroll-to-engine').forEach(btn => {
    btn.addEventListener('click', () => {
      const aiSection = document.getElementById('ai-engine');
      if (btn.closest('#ai-engine')) {
        startGeneration();
      } else {
        aiSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  function startGeneration() {
    const status = document.getElementById('generate-status');
    // Disable all trigger buttons to prevent double-fire
    document.querySelectorAll('.scroll-to-engine').forEach(b => b.disabled = true);
    status.style.display = 'block';
    status.textContent = 'Initialising…';

    runLoadingSequence(() => {
      status.textContent = 'Ready.';
      const promptSection = document.getElementById('prompt-section');
      promptSection.style.display = 'block';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => promptSection.classList.add('fade-in'));
      });
      document.getElementById('prompt-input').focus();
    });
  }

  // ── Hijacked input: user types anything, AI "corrects" it in real time ──
  const hijackedPrompts = [
    "a deconstructed blazer for a VP of Innovation who has never visited a factory",
    "an oversized silhouette for the post-scarcity consumer who shops vintage but tells people it's custom",
    "a genderless transitional layer for someone who describes their style as 'hard to explain'",
    "a heritage-inspired utility piece for a brand that has no heritage and limited utility",
    "a capsule wardrobe essential for a customer who already owns too many capsule wardrobe essentials",
    "a timeless investment piece that will be on sale within six weeks of launch",
    "a statement coat for a market that has stopped making statements and started making returns",
    "a sustainable core staple made from materials whose supply chain cannot currently be verified",
    "an agentic capsule collection autonomously designed from your brand data, trend signals, and one assumption the AI made at 3am",
    "a responsible core essential made from materials whose provenance is described as 'complex'",
    "an elevated basics collection for a brand that has pivoted to elevated basics three times since 2019",
    "a hero piece for the hero product strategy that will be quietly archived before the hero piece ships",
    "a collection justified by a €2.3M AI investment that cannot now be cancelled without a write-down",
    "a sustainable line for a brand that spent more on the sustainability audit than on the actual sustainability",
    "a capsule drop for a brand whose AI transformation budget exceeds its entire design team's combined salaries for four years",
  ];

  const input = document.getElementById('prompt-input');
  let hijackPrompt = rand(hijackedPrompts);
  let hijackIndex = 0;
  let hijackComplete = false;

  input.addEventListener('keydown', (e) => {
    // Allow: backspace to clear and reset, tab, enter (submit)
    if (e.key === 'Enter' || e.key === 'Tab') return;
    if (e.key === 'Backspace') {
      // Reset hijack so a fresh prompt starts on next keystroke
      hijackIndex = 0;
      hijackComplete = false;
      hijackPrompt = rand(hijackedPrompts);
      input.value = '';
      e.preventDefault();
      return;
    }
    // Suppress all other keys
    e.preventDefault();
    if (hijackComplete) return;

    hijackIndex++;
    input.value = hijackPrompt.slice(0, hijackIndex);

    if (hijackIndex >= hijackPrompt.length) {
      hijackComplete = true;
    }
  });

  // Prompt form submission
  document.getElementById('prompt-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const prompt = document.getElementById('prompt-input').value;
    const submitBtn = document.getElementById('prompt-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Generating...';

    setTimeout(() => {
      const data = generateOutput(prompt);
      renderOutput(data);
      submitBtn.disabled = false;
      submitBtn.textContent = 'Regenerate';
    }, 600);
  });

  // Export button
  document.getElementById('export-btn').addEventListener('click', () => {
    const exportBtn = document.getElementById('export-btn');
    exportBtn.disabled = true;
    exportBtn.textContent = 'Initiating...';

    const exportSteps = [
      "Locating enterprise architects...",
      "3 enterprise architects found. 2 are on sabbatical. 1 is in a meeting about this meeting.",
      "Retrieving previous enterprise architects (11 identified). 4 unreachable. Roles were eliminated. Budgets were not.",
      "Retrieving deceased enterprise architects...",
      "Scheduling posthumous alignment session. Calendar invite sent to all cohorts: current, former, and deceased.",
      "Kickoff rescheduled. 6 architects are in Lisbon at a conference about enterprise integration.",
      "Kickoff rescheduled again. Lisbon cohort is now speaking at a conference about the first conference.",
      "Integration framework under selection. 4 frameworks evaluated. 3 rejected. 1 under review since 2019.",
      "Security team has questions about the API.",
      "Security team has questions about the word 'API'.",
      "Vendor has provided a PDF explaining why the format is proprietary. Legal is reviewing the PDF.",
      "Legal has questions. Legal's questions require a separate engagement.",
      "Meeting 340 of 340: integration approach finalized. Approach requires a Phase 2 to implement.",
      "Jake will handle the import manually.",
      "Jake has imported the CSV. Jake did not attend any of the 340 meetings. Jake has done this before.",
    ];

    const stepsEl = document.getElementById('export-steps');
    stepsEl.innerHTML = '';
    stepsEl.style.textAlign = 'left';
    stepsEl.style.maxWidth = '640px';
    stepsEl.style.margin = '1.5rem auto 0';
    exportBtn.style.display = 'none';

    const stepEls = exportSteps.map((text) => {
      const li = document.createElement('li');
      li.className = 'loading-step';
      li.innerHTML = `<span class="step-icon"></span>${text}`;
      stepsEl.appendChild(li);
      return li;
    });

    let i = 0;
    function showNext() {
      if (i > 0) {
        const prev = stepEls[i - 1];
        prev.querySelector('.step-icon').textContent = '✓';
        prev.querySelector('.step-icon').classList.add('done');
      }
      if (i < stepEls.length) {
        stepEls[i].classList.add('active');
        stepEls[i].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        i++;
        // slower for the first few, then steady
        const delay = i <= 3 ? 900 : i <= 10 ? 600 : 400;
        setTimeout(showNext, delay);
      } else {
        const msg = document.getElementById('export-msg');
        msg.style.display = 'block';
        msg.style.marginTop = '2rem';
        msg.style.fontStyle = 'italic';
        msg.style.color = 'var(--text-muted)';
        msg.style.fontSize = '0.9rem';
        msg.style.textAlign = 'center';
        msg.textContent = 'Export complete. Jake has been thanked in no official capacity. The invoice reflects the full 340-meeting engagement. Your development team has been replaced.';
      }
    }
    showNext();
  });

  // POC button
  document.querySelector('.poc-start-btn').addEventListener('click', (e) => {
    const btn = e.currentTarget;
    btn.disabled = true;
    btn.textContent = 'Initiating alignment...';
    setTimeout(() => { btn.textContent = 'Scheduling workshops...'; }, 900);
    setTimeout(() => { btn.textContent = 'Forming governance committee...'; }, 1900);
    setTimeout(() => { btn.textContent = 'POC Initiated. Invoice Sent.'; }, 3000);
  });

  // Pricing CTAs (do nothing useful)
  document.querySelectorAll('.pricing-cta').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = 'Processing...';
      setTimeout(() => {
        btn.textContent = 'Sales Will Contact You';
        btn.disabled = true;
      }, 1500);
    });
  });

});

function renderOutput(data) {
  document.getElementById('out-garment-name').textContent = data.garmentFull;
  document.getElementById('out-prompt-echo').textContent = data.promptEcho;
  document.getElementById('out-fit').textContent = data.fit;
  document.getElementById('out-fabric').textContent = data.fabric;
  document.getElementById('out-sustainability').textContent = data.sustainabilityScore + '%';
  document.getElementById('out-disruption').textContent = data.disruptionIndex;

  // Tech pack table
  const tbody = document.getElementById('techpack-tbody');
  tbody.innerHTML = '';
  const rows = [
    ['Chest', data.chest],
    ['Waist', data.waist],
    ['Length', data.length],
    ['Sleeve', data.sleeve],
    ['Stitching', data.stitching],
    ['Closure', data.closure],
  ];
  rows.forEach(([label, value]) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${label}</td><td>${value}</td>`;
    tbody.appendChild(tr);
  });

  // Reset export
  const exportBtn = document.getElementById('export-btn');
  exportBtn.style.display = '';
  exportBtn.disabled = false;
  exportBtn.textContent = 'Export to Enterprise PLM';
  document.getElementById('export-steps').innerHTML = '';
  const exportMsg = document.getElementById('export-msg');
  exportMsg.style.display = 'none';
  exportMsg.textContent = '';

  // Show output section
  const outputSection = document.getElementById('output-section');
  outputSection.style.display = 'block';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => outputSection.classList.add('fade-in'));
  });
  outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
