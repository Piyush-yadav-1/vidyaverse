// app/academic/topicData.ts

export const topicContent: Record<string, any> = {
    "intro-upper-limb": {
      title: "Introduction to Upper Limb",
      videoUrl: "coming-soon", 
      duration: "15 mins",
      notes: `<h3>Overview</h3><p>The upper limb is divided into the shoulder, arm, forearm, and hand...</p>`
    },
    "brachial-plexus": {
      title: "The Brachial Plexus",
      videoUrl: "coming-soon", 
      duration: "45 mins",
      notes: `
        <h2>1. Introduction</h2>
        <p>The brachial plexus is a network of nerves formed by the anterior rami of C5-T1.</p>
        <h2>2. Structure (RTDCB)</h2>
        <ul>
          <li><strong>Roots:</strong> C5, C6, C7, C8, T1</li>
          <li><strong>Trunks:</strong> Superior, Middle, Inferior</li>
          <li><strong>Divisions:</strong> Anterior and Posterior</li>
          <li><strong>Cords:</strong> Lateral, Posterior, Medial</li>
          <li><strong>Branches:</strong> Musculocutaneous, Axillary, etc.</li>
        </ul>
        <h2>3. Clinical Anatomy</h2>
        <p><strong>Erb's Palsy:</strong> Injury to the upper trunk (C5-C6). Results in "Waiter's Tip" deformity.</p>
      `
    },
    "shoulder-joint": {
      title: "The Shoulder Joint",
      videoUrl: "coming-soon",
      duration: "30 mins",
      notes: `<p>The glenohumeral joint is a ball and socket joint...</p>`
    },

    // --- Anatomy: Head, Neck  & Face
    
    "scalp-face": {
      title: "Scalp & Face",
      videoUrl: "coming-soon", 
      duration: "15 mins",
      notes:   
             `
      <div class="topic-content">
        <h1>Scalp and Face Anatomy</h1>
        <p><em>High-Yield PYQ Notes for MBBS Final Year</em></p>

        <h2>1. Layers of Scalp (3 Marks)</h2>
        <p><em>Remember the mnemonic <strong>SCALP</strong>. The first three layers are firmly bound together and move as a single unit (the surgical scalp).</em></p>
        <ul>
            <li><strong>S - Skin:</strong> Thick, contains numerous hair follicles and sebaceous glands. (Most common site for sebaceous cysts).</li>
            <li><strong>C - Connective Tissue (Superficial Fascia):</strong> Fibro-fatty layer. Highly vascular. <span class="highlight">Applied:</span> Blood vessels are firmly attached to fibrous septa. If cut, they cannot retract, leading to <strong>profuse bleeding</strong>.</li>
            <li><strong>A - Aponeurosis (Galea Aponeurotica):</strong> A broad tendinous sheet connecting the frontal and occipital bellies of the occipitofrontalis muscle.</li>
            <li><strong>L - Loose Areolar Tissue:</strong> The <strong>"Dangerous area of the scalp"</strong>. <span class="highlight">Applied:</span> Contains emissary veins. Infection here can spread via these valveless veins to the intracranial dural venous sinuses, causing thrombosis.</li>
            <li><strong>P - Pericranium:</strong> The outer periosteum of the skull bones. Loosely attached to the bone surface but firmly attached at the sutures.</li>
        </ul>

        <h2>2. Cutaneous Nerve Supply of Scalp (2 Marks)</h2>
        <p><em>The scalp is innervated by branches of the Trigeminal nerve (anteriorly) and Cervical spinal nerves (posteriorly). The division line is the auricle (ear).</em></p>
        
        <div style="text-align: center; margin: 20px 0; padding: 20px; border: 2px dashed #3498db; background-color: #f7f9fa; color: #2980b9; font-weight: bold;">
            [Insert Hand-Drawn Diagram: Cutaneous Nerve Supply of Scalp]
        </div>

        <h3>A. Anterior to the Auricle (Trigeminal Nerve Branches)</h3>
        <ul>
            <li><strong>Supratrochlear Nerve</strong> (V1 - Ophthalmic)</li>
            <li><strong>Supraorbital Nerve</strong> (V1 - Ophthalmic)</li>
            <li><strong>Zygomaticotemporal Nerve</strong> (V2 - Maxillary)</li>
            <li><strong>Auriculotemporal Nerve</strong> (V3 - Mandibular)</li>
        </ul>

        <h3>B. Posterior to the Auricle (Cervical Spinal Nerves)</h3>
        <ul>
            <li><strong>Great Auricular Nerve</strong> (Ventral rami C2, C3)</li>
            <li><strong>Lesser Occipital Nerve</strong> (Ventral ramus C2)</li>
            <li><strong>Greater Occipital Nerve</strong> (Dorsal ramus C2)</li>
            <li><strong>Third Occipital Nerve</strong> (Dorsal ramus C3)</li>
        </ul>
        <p><strong>Applied Anatomy:</strong> Because nerves run in the superficial connective tissue layer from the periphery toward the crown, a "Scalp Block" (local anesthesia injected in a ring around the head) can effectively anesthetize the entire scalp for laceration repairs.</p>

        <h2>3. Dangerous Area of Face (3 Marks)</h2>
        <p><em>A region where superficial facial infections can lead to life-threatening intracranial complications.</em></p>

        <div style="text-align: center; margin: 20px 0; padding: 20px; border: 2px dashed #3498db; background-color: #f7f9fa; color: #2980b9; font-weight: bold;">
            [Insert Hand-Drawn Diagram: Dangerous Area of Face and Venous Communications]
        </div>

        <ul>
            <li><strong>Location:</strong> The lower part of the nose, upper lip, and adjoining areas of the cheek.</li>
            <li><strong>Anatomical Basis:</strong> The <strong>Facial Vein</strong> is valveless. It communicates directly with the intracranial <span class="highlight">Cavernous Sinus</span>.</li>
            <li><strong>Routes of Communication:</strong>
                <ol>
                    <li>Facial Vein ➔ Superior Ophthalmic Vein ➔ Cavernous Sinus.</li>
                    <li>Deep Facial Vein ➔ Pterygoid Venous Plexus ➔ Emissary Veins ➔ Cavernous Sinus.</li>
                </ol>
            </li>
            <li><strong>Clinical Application:</strong> Infections (like boils/furuncles) in this area should never be squeezed. Retrograde spread of infected emboli can lead to <strong>Cavernous Sinus Thrombosis</strong> (characterized by high fever, chemosis, ophthalmoplegia, and potential fatality).</li>
        </ul>

        <h2>4. Black Eye (3 Marks)</h2>
        <p><em>Also known as periorbital ecchymosis or "Raccoon eyes".</em></p>
        <ul>
            <li><strong>Definition:</strong> Accumulation of blood and fluid in the loose areolar tissue surrounding the orbit (specifically the eyelids).</li>
            <li><strong>Mechanism:</strong> The frontal belly of the occipitofrontalis muscle has <strong>no bony attachment anteriorly</strong>; its fibers blend directly with the skin of the eyebrows and eyelids.</li>
            <li><strong>Causes:</strong>
                <ul>
                    <li><strong>Direct Trauma:</strong> A blow to the face.</li>
                    <li><strong>Indirect (Base of Skull Fracture):</strong> A fracture in the <span class="highlight">Anterior Cranial Fossa</span>. Blood tracks forward under the epicranial aponeurosis (loose areolar tissue layer) and settles in the upper eyelids due to gravity and lack of anterior bony attachment.</li>
                </ul>
            </li>
        </ul>

        <h2>5. Blood Supply of Face (3 Marks)</h2>
        <p><em>The face has an extremely rich blood supply, which allows for rapid healing of facial wounds but also causes heavy bleeding.</em></p>

        <div style="text-align: center; margin: 20px 0; padding: 20px; border: 2px dashed #3498db; background-color: #f7f9fa; color: #2980b9; font-weight: bold;">
            [Insert Hand-Drawn Diagram: Arterial and Venous Supply of Face]
        </div>

        <h3>A. Arterial Supply</h3>
        <ul>
            <li><strong>Facial Artery (Chief Artery):</strong> Branch of the external carotid artery. It is notably <strong>tortuous</strong> to accommodate stretching during chewing, swallowing, and facial expressions. Branches include the inferior labial, superior labial, and lateral nasal arteries.</li>
            <li><strong>Transverse Facial Artery:</strong> A branch of the superficial temporal artery.</li>
            <li><strong>Other Branches:</strong> Supratrochlear & Supraorbital (from Ophthalmic artery), Infraorbital & Mental (from Maxillary artery).</li>
        </ul>

        <h3>B. Venous Drainage</h3>
        <ul>
            <li><strong>Facial Vein:</strong> Formed at the medial angle of the eye by the union of the supratrochlear and supraorbital veins (angular vein). It runs downwards and backwards to join the anterior division of the retromandibular vein, eventually draining into the <strong>Internal Jugular Vein</strong>.</li>
            <li><strong>Retromandibular Vein:</strong> Formed by the union of the superficial temporal and maxillary veins.</li>
        </ul>

        <div class="viva-section">
            <h3 style="margin-top:0;">🔥 Rapid Fire Viva (High Yield)</h3>
            <p><em>Cover the notes above and answer:</em></p>
            <ol style="margin-left: 20px; list-style-type: decimal;">
                <li>Why do superficial scalp wounds bleed so profusely?</li>
                <li>Which specific layer is known as the "Dangerous area of the scalp" and why?</li>
                <li>Why is it strictly advised not to squeeze a boil located on the upper lip?</li>
                <li>Why is the facial artery highly tortuous?</li>
                <li>How can a fracture of the anterior cranial fossa result in a "Black Eye"?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol>
                        <li>Because the blood vessels are firmly attached to the dense fibrous septa of the <strong>connective tissue layer</strong>, preventing the cut ends from retracting and closing off.</li>
                        <li>The <strong>Loose Areolar Tissue</strong> (Layer 4). It contains emissary veins which can transmit infection directly into the intracranial dural venous sinuses.</li>
                        <li>The upper lip is in the <strong>Dangerous Area of the Face</strong>. Squeezing can push infected emboli retrogradely through valveless facial veins into the <strong>Cavernous Sinus</strong>.</li>
                        <li>To allow for the significant stretching and movement of the face during <strong>mastication (chewing) and facial expressions</strong> without occluding blood flow.</li>
                        <li>Because the frontalis muscle has <strong>no anterior bony attachment</strong>. Blood from the fractured fossa tracks forward through the loose areolar tissue and settles directly into the eyelids.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
      `

    },

    
    // --- SURGERY: UROLOGY ---
    
    
    "genital-tb-males": {
    title: "Genital Tuberculosis in Males",
    videoUrl: "coming-soon",
    duration: "35 mins",
    notes: `
      <style>
        /* Scoped Styles for these notes to ensure they look exactly like your HTML */
        .tb-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .tb-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; margin-top: 0; }
        .tb-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 10px; margin-top: 35px; border-radius: 0 5px 5px 0; font-size: 1.5rem; font-weight: bold; }
        .tb-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-size: 1.25rem; font-weight: bold; }
        .tb-notes ul { list-style-type: disc; padding-left: 20px; margin-bottom: 1rem; }
        .tb-notes li { margin-bottom: 0.5rem; }
        .tb-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .tb-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 20px 0; border-radius: 8px; }
        .tb-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; list-style: none; }
        .tb-notes details summary::-webkit-details-marker { display: none; } /* Hide default arrow to use custom styling if needed, or keep simple */
        .tb-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .tb-notes .viva-section h3 { color: #ffd54f; border: none; }
        .tb-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .tb-notes .answer-reveal ol { list-style-type: decimal; padding-left: 20px; }
      </style>

      <div class="tb-notes">
        
        <p><em>Urology / Infectious Disease | Exam Focus: Routes of Spread, "Beaded Vas", and Infertility.</em></p>

        <h2>1. Introduction & Pathogenesis</h2>
        <ul>
            <li><strong>Nature:</strong> Almost always secondary to Tuberculosis elsewhere (Renal TB or Pulmonary TB).</li>
            <li><strong>Routes of Spread:</strong>
                <ul>
                    <li><strong>Canalicular (Retrograde):</strong> Infected urine from bladder/prostate refluxes via the vas deferens. This is the most common route for Epididymo-orchitis.</li>
                    <li><strong>Hematogenous:</strong> Direct spread from lungs/bone.</li>
                    <li><strong>Lymphatic:</strong> Rare.</li>
                </ul>
            </li>
        </ul>

        <h2>2. Sites & Specific Features</h2>

        <h3>A. Epididymis (Most Common Site)</h3>
        <ul>
            <li><strong>Start Site:</strong> <span class="highlight">Globus Minor (Tail)</span> because it has the richest blood supply and is the first point of entry for retrograde reflux.</li>
            <li><strong>Progression:</strong> Spreads to the body and head (Globus Major) → Then involves the Testis.</li>
            <li><strong>Complication:</strong> Cold Abscess formation which may rupture posteriorly to form a scrotal sinus.</li>
        </ul>
        
        <h3>B. Vas Deferens</h3>
        <ul>
            <li><strong>Classic Sign:</strong> <span class="highlight">"Beaded" Appearance</span> (Moniliform thickening).</li>
            <li><strong>Mechanism:</strong> Alternating areas of fibrotic stricture and dilatation/granuloma formation.</li>
        </ul>
        
        <h3>C. Prostate & Seminal Vesicles</h3>
        <ul>
            <li>Often asymptomatic but found on DRE.</li>
            <li><strong>Prostate:</strong> Craggy, nodular, or boggy (mimics cancer).</li>
            <li><strong>Seminal Vesicles:</strong> Palpable, indurated.</li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Why does TB involve the tail of the epididymis first?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> Because the infection typically spreads via the <strong>retrograde canalicular route</strong> (through the Vas Deferens) from the urinary tract. The tail (Globus Minor) is continuous with the vas, making it the first point of contact.</p>
                </div>
            </details>
        </div>

        <h2>3. Clinical Presentation</h2>
        <ul>
            <li><strong>Chronic Scrotal Swelling:</strong> Usually painless or mild dragging sensation.</li>
            <li><strong>"Cold" Abscess / Sinus:</strong> A discharging sinus on the <strong>posterior</strong> aspect of the scrotum (Epididymis is posterior). Discharge is thin, watery.</li>
            <li><strong>Infertility:</strong> A common presentation. Causes <strong>Obstructive Azoospermia</strong> due to fibrosis of the epididymis/vas.</li>
            <li><strong>Constitutional Symptoms:</strong> Fever (evening rise), weight loss (often absent in isolated genital TB).</li>
        </ul>

        <h2>4. Diagnosis</h2>
        <ul>
            <li><strong>Early Morning Urine (EMU):</strong> 3 consecutive samples for Acid Fast Bacilli (AFB) culture/stain. (Positive if concurrent Renal TB).</li>
            <li><strong>Semen Analysis:</strong> Low volume (SV obstruction), Azoospermia, Pus cells. PCR for TB DNA in semen.</li>
            <li><strong>FNAC / Biopsy:</strong> From epididymal nodule. Shows <span class="highlight">Caseating Granulomas</span> with Langhans Giant Cells.</li>
            <li><strong>Scrotal Ultrasound:</strong> Heterogeneous epididymis, calcifications.</li>
        </ul>

        <h2>5. Management</h2>
        <p><em>Mainstay is Medical. Surgery is adjunctive.</em></p>

        <h3>A. Medical Therapy</h3>
        <ul>
            <li><strong>Anti-Tubercular Therapy (ATT):</strong> Standard regimen (RIPE) for <strong>6 to 9 months</strong>.</li>
            <li>Most lesions (nodules/swelling) resolve, but fibrosis/infertility often persists.</li>
        </ul>

        <h3>B. Surgical Intervention</h3>
        <ul>
            <li><strong>Drainage:</strong> Of large cold abscesses.</li>
            <li><strong>Epididymectomy:</strong> For non-healing sinuses or chronic painful masses despite full ATT.</li>
            <li><strong>Orchidectomy:</strong> If the testis is completely destroyed (caseous necrosis).</li>
            <li><strong>Infertility Mgmt:</strong> Vaso-epididymostomy (if obstruction is segmental) or IVF/ICSI.</li>
        </ul>

        <div class="viva-section">
            <h3 style="margin-top:0;">🔥 Rapid Fire Viva (High Yield)</h3>
            <p><em>Cover the notes above and answer:</em></p>
            <ol style="margin-left: 20px; list-style-type: decimal;">
                <li>How do you clinically differentiate TB Epididymitis from Acute Bacterial Epididymitis?</li>
                <li>Which part of the Epididymis is involved first in Tuberculosis?</li>
                <li>What is the pathological basis for the "Beaded" appearance of the Vas Deferens?</li>
                <li>Is infertility caused by Genital TB easily reversible with ATT?</li>
                <li>What is the characteristic appearance of a Tuberculous sinus in the scrotum?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol>
                        <li>TB is <strong>chronic/insidious</strong>, minimally painful, and the vas is beaded. Acute bacterial is sudden, severe pain, with fever and acute signs of inflammation (Rubor/Calor).</li>
                        <li><strong>The Tail (Globus Minor)</strong>.</li>
                        <li>Segmental areas of <strong>inflammation/granuloma</strong> alternating with fibrosis.</li>
                        <li><strong>No.</strong> Fibrosis usually causes permanent obstruction (Obstructive Azoospermia), often requiring IVF/ICSI.</li>
                        <li>Located <strong>posteriorly</strong>, with <strong>undermined edges</strong> (blue/thin margins) and discharging thin, watery pus.</li>
                    </ol>
                </div>
            </details>
        </div>

      </div>
      `
    },

    // Add this inside the topicContent object in app/academic/topicData.ts

"cataract-basics": {
    title: "Cataract: Etiology & Class",
    videoUrl: "coming-soon",
    duration: "35 mins",
    notes: `
      <style>
        .etiology-class-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .etiology-class-notes h1 { color: #002244; border-bottom: 4px solid #002244; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .etiology-class-notes h2 { color: #002244; background-color: #f0f4f8; border-left: 6px solid #1565c0; padding: 12px; margin-top: 35px; border-radius: 0 5px 5px 0; font-weight: bold; font-size: 1.5rem; }
        .etiology-class-notes h3 { color: #1565c0; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; font-size: 1.25rem; }
        .etiology-class-notes .highlight { background-color: #e3f2fd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #0d47a1; border: 1px solid #bbdefb; }
        .etiology-class-notes .clinical-box { background-color: #fff8e1; border: 2px solid #ffb300; border-radius: 8px; padding: 15px; margin: 20px 0; color: #5d4037; }
        .etiology-class-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.2); }
        .etiology-class-notes th { background-color: #002244; color: white; padding: 12px 15px; text-align: left; text-transform: uppercase; font-size: 0.9em; }
        .etiology-class-notes td { border: 1px solid #ddd; padding: 12px 15px; vertical-align: top; }
        .etiology-class-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .etiology-class-notes .recall-box { background-color: #f3e5f5; border: 2px dashed #8e24aa; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .etiology-class-notes details summary { cursor: pointer; color: #6a1b9a; font-weight: bold; outline: none; list-style: none; }
        .etiology-class-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 50px; border: 1px solid #37474f; }
        .etiology-class-notes .viva-title { color: #ffd54f; border-bottom: 1px solid #7f8c8d; padding-bottom: 10px; margin-top: 0; }
        .etiology-class-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .etiology-class-notes ul { list-style-type: disc; padding-left: 20px; margin-bottom: 1rem; }
        .etiology-class-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="etiology-class-notes">
        <h1>Cataract: Etiology & Classification</h1>

        <p><strong>Definition:</strong> Any opacification of the normally clear crystalline lens or its capsule that disrupts vision. It remains the leading cause of blindness worldwide, accounting for over 50% of global blindness cases.</p>

        <h2>1. Etiological Classification</h2>
        <p>Cataracts are classified based on their underlying cause or timing of onset:</p>
        
        <h3>A. Congenital & Developmental</h3>
        <ul>
            <li>Present at birth or develops during early childhood due to genetic mutations, chromosomal anomalies, or intrauterine insults (e.g., Maternal Rubella).</li>
        </ul>

        <h3>B. Acquired Cataracts</h3>
        <ul>
            <li><strong>Age-Related (Senile):</strong> Most common type. Driven by oxidative stress and protein aggregation over time.</li>
            <li><strong>Traumatic:</strong> Occurs post mechanical trauma (blunt or penetrating), infrared radiation (Glassblower’s cataract), or electric shock.</li>
            <li><strong>Metabolic:</strong> Secondary to systemic metabolic diseases.
                <ul>
                    <li><em>Diabetes Mellitus:</em> Classic <span class="highlight">"Snowflake" cataract</span> due to sorbitol accumulation.</li>
                    <li><em>Galactosemia:</em> "Oil-droplet" appearance.</li>
                    <li><em>Wilson's Disease:</em> "Sunflower" cataract from copper deposition.</li>
                </ul>
            </li>
            <li><strong>Complicated (Secondary):</strong> Caused by intraocular disease like chronic anterior uveitis, high myopia, or acute glaucoma.</li>
            <li><strong>Toxic/Drug-Induced:</strong> Most notably caused by prolonged systemic or topical <span class="highlight">Corticosteroid</span> use (leads to Posterior Subcapsular opacity) and Miotics.</li>
        </ul>

        <h2>2. Morphological Classification (High Yield)</h2>
        <p>This details the specific anatomical site within the lens matrix where the opacity forms.</p>

        <table>
            <thead>
                <tr>
                    <th style="width: 25%;">Anatomical Location</th>
                    <th style="width: 50%;">Key Features</th>
                    <th style="width: 25%;">Classic Associations</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Capsular</strong></td>
                    <td>Involves either the anterior or posterior capsule layout. Spares the cortex.</td>
                    <td>Congenital alterations</td>
                </tr>
                <tr>
                    <td><strong>Subcapsular</strong></td>
                    <td>Forms directly beneath the lens capsule matrix.
                        <br>• <strong>Anterior:</strong> Located under the anterior capsule.
                        <br>• <strong>Posterior (PSC):</strong> Located under the posterior capsule.
                    </td>
                    <td>• Anterior: Amidarone use<br>• Posterior: <span class="highlight">Steroid use</span>, Radiation, Inflammation</td>
                </tr>
                <tr>
                    <td><strong>Cortical</strong></td>
                    <td>Involves the hydration and opacification of the lens cortex. Presents with prominent wedge-shaped radial opacities called <span class="highlight">"Cuneiform Spokes"</span>.</td>
                    <td>Senile Cataract (early stage)</td>
                </tr>
                <tr>
                    <td><strong>Nuclear</strong></td>
                    <td>Involves condensation and yellowing/browning (brunescence) of the oldest, central fibers within the lens nucleus.</td>
                    <td>Systemic aging, Myopic shift (Second sight phenomenon)</td>
                </tr>
            </tbody>
        </table>

        <div class="clinical-box">
            <strong>👁️ CLINICAL INSIGHT: Second Sight Phenomenon</strong>
            <br>Nuclear sclerosis increases the refractive power of the lens core, acting like a natural reading glass. This induces a temporary "myopic shift," allowing elderly patients who previously needed reading glasses to read without them again. However, this is short-lived as the opacity worsens.
        </div>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Why do Posterior Subcapsular Cataracts (PSC) affect daytime vision worse than night vision?</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> Under bright daylight conditions, the pupil constricts (miosis). This forces all incoming light directly through the tiny, dense center of the posterior subcapsular space where the cataract is located, severely impairing vision. At night, the pupil dilates (mydriasis), letting light pass through the clear peripheral lens around the central opacity.</p>
                </div>
            </details>
        </div>

        <div class="viva-section">
            <h3 class="viva-title">🔥 Rapid Fire Viva</h3>
            <p><em>Test your baseline retention:</em></p>
            <ol style="margin-left: 20px;">
                <li>Which type of cataract presents with "Cuneiform Spokes"?</li>
                <li>What metabolic abnormality is tied directly to a "Snowflake Cataract"?</li>
                <li>Long-term topical corticosteroid drops are notorious for inducing which morphological cataract type?</li>
            </ol>

            <details style="margin-top: 20px;">
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol>
                        <li><strong>Cortical Cataract</strong>.</li>
                        <li><strong>Diabetes Mellitus</strong> (due to increased sorbitol path activity pathway via aldose reductase).</li>
                        <li><strong>Posterior Subcapsular Cataract (PSC)</strong>.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"senile-cataract": {
    title: "Senile Cataract (Age-Related)",
    videoUrl: "coming-soon",
    duration: "45 mins",
    notes: `
      <style>
        .cataract-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .cataract-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; margin-bottom: 30px; }
        .cataract-notes h2 { color: #003366; background-color: #f1f8e9; border-left: 6px solid #689f38; padding: 10px; margin-top: 35px; border-radius: 0 5px 5px 0; font-size: 1.5rem; font-weight: bold; }
        .cataract-notes h3 { color: #d32f2f; margin-top: 25px; font-weight: bold; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-size: 1.25rem; }
        .cataract-notes ul { list-style-type: disc; padding-left: 20px; margin-bottom: 1rem; }
        .cataract-notes li { margin-bottom: 0.5rem; }
        .cataract-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .cataract-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 0.95em; }
        .cataract-notes th { background-color: #003366; color: white; padding: 12px; text-align: left; }
        .cataract-notes td { border: 1px solid #ddd; padding: 12px; vertical-align: top; }
        .cataract-notes .recall-box { background-color: #fff0f6; border: 2px dashed #ff85c0; padding: 15px; margin: 20px 0; border-radius: 8px; }
        .cataract-notes details summary { cursor: pointer; color: #c41d7f; font-weight: bold; outline: none; list-style: none; }
        .cataract-notes .viva-section { background-color: #2c3e50; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .cataract-notes .viva-section h3 { color: #ffd54f; border: none; margin-top: 0; }
        .cataract-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .cataract-notes .answer-reveal ol { list-style-type: decimal; padding-left: 20px; }
      </style>

      <div class="cataract-notes">
        <h1>Senile Cataract</h1>
        <p><strong>Definition:</strong> An opacity of the crystalline lens or its capsule occurring in persons <span class="highlight">> 50 years of age</span>, not associated with trauma or metabolic disease. It is the <span class="highlight">leading cause of treatable blindness</span> worldwide.</p>

        <h2>1. Morphological Classification</h2>
        
        
        <table>
            <thead>
                <tr>
                    <th style="width: 50%;">Cortical Cataract (Soft)</th>
                    <th style="width: 50%;">Nuclear Cataract (Hard)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <ul>
                            <li>Affects the <strong>Cortex</strong>.</li>
                            <li>Mechanism: <strong>Hydration</strong> (water influx).</li>
                            <li>Common types: <strong>Cuneiform</strong> (wedge-shaped) and <strong>Cupuliform</strong> (posterior subcapsular).</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Affects the <strong>Nucleus</strong>.</li>
                            <li>Mechanism: <strong>Sclerosis</strong> (hardening).</li>
                            <li>Clinical Sign: <strong>Index Myopia</strong> ("Second Sight" - patient can read without glasses).</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>

        <h3>Stages of Maturation (Cortical)</h3>
        
        <ol>
            <li><strong>Incipient:</strong> Wedge-shaped spokes (cuneiform) at periphery.</li>
            <li><strong>Immature (ISC):</strong> Lens partially opaque; <span class="highlight">Iris Shadow is Positive</span>.</li>
            <li><strong>Mature (MSC):</strong> Lens totally opaque (pearly white); <span class="highlight">Iris Shadow is Absent</span>.</li>
            <li><strong>Hyper-mature:</strong> 
                <ul>
                    <li><em>Morgagnian:</em> Cortex liquefies, nucleus sinks.</li>
                    <li><em>Sclerotic:</em> Lens becomes shrunken and wrinkled.</li>
                </ul>
            </li>
        </ol>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Why is the Iris Shadow absent in a Mature Cataract?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> In a Mature Cataract, the opacification reaches the anterior capsule (it is "flush" against the iris). There is no clear cortex between the iris and the opacity, so no shadow can be cast on the lens.</p>
                </div>
            </details>
        </div>

        <h2>2. Clinical Features</h2>
        <ul>
            <li><strong>Glare / Photophobia:</strong> Often the earliest symptom due to light scattering.</li>
            <li><strong>Uniocular Polyopia:</strong> Seeing multiple images (due to irregular refraction).</li>
            <li><strong>Colored Halos:</strong> Hydration/water droplets act as prisms.</li>
            <li><strong>Vision Loss:</strong> Painless, gradual, and progressive diminution of vision.</li>
        </ul>

        <h2>3. Management</h2>
        <p>Surgery is the only definitive treatment. <strong>Phacoemulsification</strong> is currently the gold standard.</p>
        
        

        <table>
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>SICS (Small Incision)</th>
                    <th>Phacoemulsification</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Incision Size</strong></td>
                    <td>6.0 - 7.0 mm (Sclerocorneal)</td>
                    <td><span class="highlight">2.2 - 2.8 mm (Clear Corneal)</span></td>
                </tr>
                <tr>
                    <td><strong>Nucleus removal</strong></td>
                    <td>Delivered as a whole</td>
                    <td>Ultrasound Emulsification</td>
                </tr>
                <tr>
                    <td><strong>Astigmatism</strong></td>
                    <td>Moderate</td>
                    <td>Minimal to Neutral</td>
                </tr>
                <tr>
                    <td><strong>Sutures</strong></td>
                    <td>Self-sealing (No sutures)</td>
                    <td>Self-sealing (No sutures)</td>
                </tr>
            </tbody>
        </table>

        <div class="viva-section">
            <h3>🔥 Rapid Fire Viva (High Yield)</h3>
            <p><em>Attempt to answer these before revealing:</em></p>
            <ol style="margin-left: 20px; list-style-type: decimal;">
                <li>What is the most common late post-operative complication of cataract surgery?</li>
                <li>Which formula is commonly used for IOL power calculation?</li>
                <li>Name the microorganism most commonly responsible for Acute Post-operative Endophthalmitis.</li>
                <li>What is the refractive status of an eye after cataract removal without an IOL?</li>
                <li>What is "Second Sight" and in which type of cataract is it seen?</li>
            </ol>

            <details style="margin-top: 20px;">
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol>
                        <li><strong>Posterior Capsular Opacification (PCO)</strong> or "After Cataract". Treated with Nd:YAG Laser.</li>
                        <li><strong>SRK Formula</strong> (P = A - 2.5L - 0.9K).</li>
                        <li><strong>Staphylococcus epidermidis</strong> (most common) or Staph. aureus.</li>
                        <li><strong>Aphakia</strong> (High degree of Hypermetropia).</li>
                        <li><strong>Index Myopia</strong>; seen in <strong>Nuclear Cataract</strong> (allows elderly patients to read near text without glasses again).</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
    },
    
"cataract-surgery": {
    title: "Cataract Surgery & IOL",
    videoUrl: "coming-soon",
    duration: "50 mins",
    notes: `
      <style>
        .surgery-iol-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .surgery-iol-notes h1 { color: #002244; border-bottom: 4px solid #002244; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .surgery-iol-notes h2 { color: #002244; background-color: #f0f4f8; border-left: 6px solid #00838f; padding: 12px; margin-top: 35px; border-radius: 0 5px 5px 0; font-weight: bold; font-size: 1.5rem; }
        .surgery-iol-notes h3 { color: #00838f; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; font-size: 1.25rem; }
        .surgery-iol-notes .highlight { background-color: #e0f7fa; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #006064; border: 1px solid #b2ebf2; }
        .surgery-iol-notes .step-box { background-color: #f9f9f9; border-left: 4px solid #002244; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
        .surgery-iol-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.2); }
        .surgery-iol-notes th { background-color: #002244; color: white; padding: 12px 15px; text-align: left; text-transform: uppercase; font-size: 0.9em; }
        .surgery-iol-notes td { border: 1px solid #ddd; padding: 12px 15px; vertical-align: top; }
        .surgery-iol-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .surgery-iol-notes .recall-box { background-color: #e0f2f1; border: 2px dashed #004d40; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .surgery-iol-notes details summary { cursor: pointer; color: #004d40; font-weight: bold; outline: none; list-style: none; }
        .surgery-iol-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 50px; border: 1px solid #37474f; }
        .surgery-iol-notes .viva-title { color: #ffd54f; border-bottom: 1px solid #7f8c8d; padding-bottom: 10px; margin-top: 0; }
        .surgery-iol-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .surgery-iol-notes ul { list-style-type: disc; padding-left: 20px; margin-bottom: 1rem; }
        .surgery-iol-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="surgery-iol-notes">
        <h1>Cataract Surgery & Intraocular Lens (IOL)</h1>

        <p><strong>Overview:</strong> Modern cataract surgery has evolved from a sight-restoring procedure to a highly precise refractive surgery. The primary objective is the clean removal of the opacified lens nucleus and cortex followed by the implantation of a permanent artificial lens into the remaining capsular bag.</p>

        <h2>1. Evolution of Surgical Techniques</h2>
        <p>Understanding the structural distinctions between approaches is a common focus in university examinations:</p>

        <table>
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>Conventional ECCE</th>
                    <th>Manual SICS</th>
                    <th>Phacoemulsification</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Incision Size</strong></td>
                    <td>Large (10–12 mm)</td>
                    <td>Medium (6–7 mm)</td>
                    <td>Serrated/Micro (2.2–2.8 mm)</td>
                </tr>
                <tr>
                    <td><strong>Incision Shape</strong></td>
                    <td>Limbal Corneoscleral</td>
                    <td>Scleral Tunnel (Self-sealing)</td>
                    <td>Clear Corneal (Self-sealing)</td>
                </tr>
                <tr>
                    <td><strong>Sutures Required</strong></td>
                    <td>Yes (5–7 interrupted sutures)</td>
                    <td>No (Usually sutureless)</td>
                    <td>No (Sutureless)</td>
                </tr>
                <tr>
                    <td><strong>Astigmatism Risk</strong></td>
                    <td>High postoperative astigmatism</td>
                    <td>Minimal/Moderate</td>
                    <td>Negligible (Allows rapid recovery)</td>
                </tr>
                <tr>
                    <td><strong>Nucleus Delivery</strong></td>
                    <td>Expressed entirely as a whole</td>
                    <td>Slipped out through scleral tunnel</td>
                    <td><span class="highlight">Emulsified in situ</span> using ultrasound</td>
                </tr>
            </tbody>
        </table>

        <h2>2. Key Surgical Steps in Phacoemulsification</h2>
        <p>The standard steps must be executed in a precise structural sequence:</p>

        <div class="step-box">
            <strong>Step 1: Clear Corneal Incision</strong>
            <br>A micro-keratome blade creates a multiplanar, self-sealing tunnel incision (2.2 to 2.8 mm) inside the clear avascular cornea.
        </div>

        <div class="step-box">
            <strong>Step 2: Continuous Curvilinear Capsulorhexis (CCC)</strong>
            <br>An ultra-fine cystotome or micro-forceps shears a perfectly circular opening (5.0 to 5.5 mm) in the center of the anterior lens capsule matrix while keeping the peripheral margin intact.
        </div>

        <div class="step-box">
            <strong>Step 3: Hydrodissection & Hydrodelineation</strong>
            <br>• <strong>Hydrodissection:</strong> Fluid injection separates the outer lens capsule from the cortex.
            <br>• <strong>Hydrodelineation:</strong> Fluid separates the inner epinucleus shell from the dense central nucleus core.
        </div>

        <div class="step-box">
            <strong>Step 4: Nuclear Phacoemulsification</strong>
            <br>An ultrasonic handpiece vibrates at high frequencies to groove, crack, and break the hard nucleus into smaller quadrants (e.g., "Divide and Conquer" or "Phaco Chop" techniques), which are then aspirated out safely.
        </div>

        <div class="step-box">
            <strong>Step 5: Cortical Aspiration</strong>
            <br>An automated Irrigation/Aspiration (I/A) handpiece strips away remaining sticky soft cortical fibers while preserving the clear posterior capsule wall.
        </div>

        <div class="step-box">
            <strong>Step 6: IOL Implantation</strong>
            <br>An injector system delivers a flexible, folded artificial lens directly inside the pristine capsular bag, where it unrolls into place.
        </div>

        <h2>3. Intraocular Lens (IOL) Biometry & Design</h2>
        <p>Before any surgery can take place, the specific refractive power of the planned artificial IOL must be computed with accuracy.</p>
        
        <h3>The SRK (Sanders-Retzlaff-Kraff) Formula</h3>
        <p>The most famous baseline formula used for calculating ideal power is:</p>
        $$P = A - 2.5L - 0.9K$$
        <p>Where:</p>
        <ul>
            <li><strong>$P$:</strong> Power of the required IOL (in Diopters)</li>
            <li><strong>$A$:</strong> A-Constant (specific to the lens design and manufacturer)</li>
            <li><strong>$L$:</strong> Axial length of the eyeball (measured via ultrasound A-scan or optical biometry)</li>
            <li><strong>$K$:</strong> Average keratometry reading (curvature of the cornea in Diopters)</li>
        </ul>

        <h3>Common Modern IOL Optic Configurations</h3>
        <ul>
            <li><strong>Monofocal Lenses:</strong> Provides crisp vision for a single fixed distance (usually set for distance; the patient will require reading glasses for close work).</li>
            <li><strong>Multifocal / Bifocal Lenses:</strong> Uses diffractive rings to divide light into separate distinct focal planes (near and far), making patients independent of reading glasses. Can cause mild halos or glare at night.</li>
            <li><strong>Toric IOLs:</strong> Specially marked lenses aligned to correct significant preexisting corneal astigmatism.</li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What occurs if Hydrodissection fluid is injected too aggressively in a patient with a known Posterior Polar Cataract?</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> Posterior polar cataracts are often inherently adherent to or associated with a weak, fragile posterior capsule. Aggressive fluid injection building up hydraulic pressure can precipitate an immediate, catastrophic <strong>Posterior Capsule Rupture (PCR)</strong>, dropping lens material backward into the vitreous chamber.</p>
                </div>
            </details>
        </div>

        <div class="viva-section">
            <h3 class="viva-title">🔥 Rapid Fire Viva</h3>
            <p><em>Check your procedural and theoretical knowledge:</em></p>
            <ol style="margin-left: 20px;">
                <li>What is the core conceptual difference between Hydrodissection and Hydrodelineation?</li>
                <li>What does the variable 'L' represent in the classic SRK equation formula?</li>
                <li>Which specific structural step of Phacoemulsification creates a continuous, tear-resistant margin using a shearing force?</li>
            </ol>

            <details style="margin-top: 20px;">
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol>
                        <li><strong>Hydrodissection</strong> separates the lens capsule from the cortex, whereas <strong>Hydrodelineation</strong> splits the epinucleus outer shell from the dense endonucleus central core.</li>
                        <li><strong>Axial Length</strong> of the eyeball (measured from the anterior corneal surface to the fovea).</li>
                        <li><strong>Continuous Curvilinear Capsulorhexis (CCC)</strong>.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"cataract-complications": {
    title: "Complications of Cataract Surgery",
    videoUrl: "coming-soon",
    duration: "40 mins",
    notes: `
      <style>
        .complications-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .complications-notes h1 { color: #000080; border-bottom: 4px solid #000080; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .complications-notes h2 { color: #000080; background-color: #f2f7ff; border-left: 6px solid #8B0000; padding: 10px; margin-top: 30px; border-radius: 0 5px 5px 0; font-weight: bold; font-size: 1.5rem; }
        .complications-notes h3 { color: #8B0000; margin-top: 25px; border-bottom: 1px solid #eee; padding-bottom: 5px; font-weight: bold; }
        .complications-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 5px; border-radius: 3px; border: 1px solid #ffeeba; color: #000; }
        .complications-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 0.95em; }
        .complications-notes th { background-color: #000080; color: white; padding: 12px; text-align: left; }
        .complications-notes td { border: 1px solid #ddd; padding: 12px; vertical-align: top; }
        .complications-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .complications-notes .flowchart-box { background-color: #e8f4f8; border: 2px solid #0056b3; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; font-weight: bold; color: #004085; }
        .complications-notes .arrow { display: block; font-size: 24px; color: #d9534f; margin: 5px 0; }
        .complications-notes .management-box { background-color: #f0fff4; border: 2px solid #28a745; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .complications-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d63384; padding: 15px; margin: 20px 0; border-radius: 8px; }
        .complications-notes details summary { cursor: pointer; color: #d63384; font-weight: bold; outline: none; list-style: none; }
        .complications-notes .viva-section { background-color: #2c3e50; color: #ecf0f1; padding: 30px; border-radius: 12px; margin-top: 60px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
        .complications-notes .viva-title { color: #f1c40f; border-bottom: 1px solid #7f8c8d; padding-bottom: 10px; margin-top: 0; }
        .complications-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .complications-notes .answer-reveal ol { list-style-type: decimal; padding-left: 20px; }
      </style>

      <div class="complications-notes">
        <h1>Complications of Cataract Surgery</h1>
        <p><strong>Introduction:</strong> Although cataract surgery is one of the most successful procedures, complications can occur. They are classified into <strong>Intra-operative</strong>, <strong>Early Post-operative</strong>, and <strong>Late Post-operative</strong>.</p>

        <h2>1. Early Post-Operative Complications (Days to Weeks)</h2>
        
        <table>
            <thead>
                <tr>
                    <th style="width: 30%;">Complication</th>
                    <th style="width: 70%;">Key Features & Management</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Acute Bacterial Endophthalmitis</strong><br><span style="font-size:0.8em; color: red; font-weight: bold;">(OPHTHALMIC EMERGENCY)</span></td>
                    <td>
                        <ul>
                            <li><strong>Onset:</strong> 24-72 hours post-op.</li>
                            <li><strong>Etiology:</strong> <em>Staph. epidermidis</em> (MC), <em>Staph. aureus</em>.</li>
                            <li><strong>Signs:</strong> Severe pain, lid edema, <span class="highlight">Hypopyon</span>, loss of red reflex.</li>
                            <li><strong>Rx:</strong> Intravitreal Antibiotics (Vancomycin + Ceftazidime).</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td><strong>Striate Keratopathy</strong><br>(Corneal Edema)</td>
                    <td>
                        <ul>
                            <li>Due to endothelial trauma during phacoemulsification.</li>
                            <li><strong>Rx:</strong> Topical Hypertonic Saline (5% NaCl) + Steroids. Usually resolves.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td><strong>TASS</strong><br>(Toxic Anterior Segment Syndrome)</td>
                    <td>
                        <ul>
                            <li><span class="highlight">Sterile</span> inflammatory reaction (Non-infectious).</li>
                            <li><strong>Onset:</strong> Within 12-24 hours (Faster than endophthalmitis).</li>
                            <li><strong>Rx:</strong> Intensive Topical Steroids.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td><strong>Iris Prolapse</strong></td>
                    <td>
                        <ul>
                            <li>Seen in SICS/ECCE with poor wound construction.</li>
                            <li><strong>Rx:</strong> Surgical Repositioning (early) or Excision (if old/infected).</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What is the key clinical differentiator between TASS and Acute Endophthalmitis?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> <strong>Onset time.</strong> TASS presents very early (12-24 hours), whereas Bacterial Endophthalmitis typically presents after 24-48 hours (due to the incubation period of the bacteria).</p>
                </div>
            </details>
        </div>

        <h2>2. Late Post-Operative Complications (> Months)</h2>
        <ol>
            <li><strong>Cystoid Macular Edema (CME):</strong> Painless drop in vision 4-6 weeks post-op. Known as <span class="highlight">Irvine-Gass Syndrome</span>.</li>
            <li><strong>Pseudophakic Bullous Keratopathy (PBK):</strong> Permanent corneal decompensation.</li>
            <li><strong>Retinal Detachment (RD):</strong> Increased risk in high myopes.</li>
            <li><strong>Posterior Capsular Opacification (PCO):</strong> The <span class="highlight">most common</span> late complication.</li>
        </ol>

        <h2>3. Secondary Cataract (After Cataract / PCO)</h2>
        <p><strong>Definition:</strong> Opacification of the posterior capsule behind the IOL.</p>

        <div class="flowchart-box">
            <h3>⚡ Pathophysiology of PCO</h3>
            
            <br><br>
            Residual Lens Epithelial Cells (LECs) at the Equator
            <span class="arrow">⬇</span>
            <strong>Proliferation & Migration</strong>
            <span class="arrow">⬇</span>
            <strong>Metaplasia</strong> (LECs → Myofibroblasts)
            <span class="arrow">⬇</span>
            <span style="background-color: #fff3cd; padding: 5px;"><strong>POSTERIOR CAPSULAR OPACIFICATION</strong></span>
        </div>

        <h3>Morphological Types of PCO:</h3>
        <ul>
            <li><strong>Elschnig's Pearls:</strong> Clusters of swollen epithelial cells (look like bunches of grapes). </li>
            <li><strong>Fibrous PCO:</strong> Fibrosis and wrinkling of the capsule.</li>
            <li><strong>Sommerring's Ring:</strong> Thick ring of cortical matter trapped in the periphery.</li>
        </ul>

        <div class="management-box">
            <h3 style="margin-top:0;">💊 Management of PCO</h3>
            <p><strong>Treatment of Choice:</strong> <span class="highlight">Nd:YAG Laser Capsulotomy</span>.</p>
            
            <ul>
                <li><strong>Type:</strong> Photodisruption (creates an opening in the capsule).</li>
                <li><strong>Complications:</strong> Transient rise in IOP, IOL Pitting, CME.</li>
            </ul>
        </div>

        <div class="viva-section">
            <h3 class="viva-title">🔥 Rapid Fire Viva (High Yield)</h3>
            <p><em>Test your active recall. Attempt to answer before revealing!</em></p>
            <ol style="margin-left: 20px; list-style-type: decimal;">
                <li>What is the classic appearance of Cystoid Macular Edema (CME) on FFA?</li>
                <li>Which bacteria is most associated with Chronic/Delayed onset Endophthalmitis?</li>
                <li>What is the "Sunset Syndrome" in relation to IOLs?</li>
                <li>In which type of cataract surgery (ECCE vs Phaco) is PCO more common?</li>
            </ol>

            <details style="margin-top: 20px;">
                <summary style="font-size: 1.1em; color: #f1c40f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol>
                        <li><strong>Flower-petal appearance</strong> (due to leakage in Henle's layer).</li>
                        <li><strong>Propionibacterium acnes</strong>.</li>
                        <li><strong>Inferior dislocation</strong> of the IOL (looks like a setting sun).</li>
                        <li><strong>ECCE</strong> (due to more residual cortex and epithelial cells compared to Phacoemulsification).</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
    },
"retinopathy": {
    title: "Retinal Vascular Disorders",
    videoUrl: "coming-soon",
    duration: "45 mins",
    notes: `
      <style>
        .retinal-vascular-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #2c3e50; }
        .retinal-vascular-notes h1 { color: #002244; border-bottom: 4px solid #002244; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .retinal-vascular-notes h2 { color: #002244; background-color: #f0f8ff; border-left: 6px solid #8B0000; padding: 12px; margin-top: 35px; border-radius: 0 5px 5px 0; font-weight: bold; font-size: 1.5rem; }
        .retinal-vascular-notes h3 { color: #8B0000; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; font-size: 1.25rem; }
        .retinal-vascular-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #333; border: 1px solid #ffeeba; }
        .retinal-vascular-notes .box-patho { background-color: #eef6fc; border: 2px solid #1e88e5; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; font-weight: bold; color: #0d47a1; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .retinal-vascular-notes .arrow { display: block; font-size: 22px; color: #d32f2f; margin: 8px 0; }
        .retinal-vascular-notes .pathway-container { display: flex; justify-content: space-between; gap: 15px; margin-top: 15px; }
        .retinal-vascular-notes .pathway-box { width: 48%; border: 1px dashed #1e88e5; padding: 15px; border-radius: 6px; background-color: #fff; font-weight: normal; color: #333; text-align: left; }
        .retinal-vascular-notes .pathway-title { font-weight: bold; color: #d32f2f; display: block; margin-bottom: 5px; text-align: center; }
        .retinal-vascular-notes .box-mgmt { background-color: #e8f5e9; border: 2px solid #2e7d32; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .retinal-vascular-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .retinal-vascular-notes th { background-color: #002244; color: white; padding: 12px 15px; text-align: left; text-transform: uppercase; font-size: 0.9em; }
        .retinal-vascular-notes td { border: 1px solid #ddd; padding: 12px 15px; vertical-align: top; }
        .retinal-vascular-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .retinal-vascular-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d81b60; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .retinal-vascular-notes details summary { cursor: pointer; color: #ad1457; font-weight: bold; outline: none; list-style: none; }
        .retinal-vascular-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 50px; border: 1px solid #37474f; }
        .retinal-vascular-notes .viva-title { color: #ffd54f; border-bottom: 1px solid #7f8c8d; padding-bottom: 10px; margin-top: 0; }
        .retinal-vascular-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .retinal-vascular-notes .clinical-sign { display: flex; flex-direction: column; margin-bottom: 12px; background: #fafafa; padding: 12px; border-left: 4px solid #fbc02d; border-radius: 0 4px 4px 0; }
        .retinal-vascular-notes ul { list-style-type: disc; padding-left: 20px; margin-bottom: 1rem; }
        .retinal-vascular-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="retinal-vascular-notes">
        <h1>Retinal Vascular Disorders</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -20px; margin-bottom: 30px;">
          Comprehensive Modules on Diabetic Retinopathy (DR) & Hypertensive Retinopathy (HTN-R)
        </p>

        <h2>A. Diabetic Retinopathy (DR)</h2>
        <p><strong>Definition:</strong> A retinal microangiopathy affecting precapillary arterioles, capillaries, and venules, causing vascular occlusion and leakage. It stands as a leading cause of acquired blindness among the working-age population globally.</p>

        <p><strong>Risk Factors:</strong></p>
        <ul>
            <li><span class="highlight">Duration of Diabetes</span>: The single most critical predictive indicator.</li>
            <li>Poor metabolic control highlighted by a consistently elevated HbA1c.</li>
            <li>Comorbid systemic factors: Hypertension, Pregnancy, Nephropathy, and Chronic Anemia.</li>
        </ul>

        <h3>1. Pathogenesis</h3>
        <div class="box-patho">
            <h4 style="margin-top:0; color: #0d47a1; font-size: 1.1em;">⚡ Mechanism of Microangiopathy</h4>
            Chronic Hyperglycemia
            <span class="arrow">⬇</span>
            <strong>Loss of Pericytes</strong> (Supportive structural cells of retinal capillaries)
            <span class="arrow">⬇</span>
            Capillary Wall Weakness + Increased Platelet Aggregation
            <span class="arrow">⬇</span>
            
            <div class="pathway-container">
                <div class="pathway-box">
                    <span class="pathway-title">PATHWAY A: LEAKAGE</span>
                    Breakdown of Blood-Retinal Barrier
                    <br><span style="color:#d32f2f; display:block; text-align:center; margin:4px 0;">⬇</span>
                    Leakage of plasma components and lipids
                    <br><span style="color:#d32f2f; display:block; text-align:center; margin:4px 0;">⬇</span>
                    <strong>Retinal Edema & Hard Exudates</strong>
                </div>
                <div class="pathway-box">
                    <span class="pathway-title">PATHWAY B: OCCLUSION</span>
                    Capillary Non-Perfusion & Micro-infarcts
                    <br><span style="color:#d32f2f; display:block; text-align:center; margin:4px 0;">⬇</span>
                    Progressive Retinal Ischemia (Hypoxia)
                    <br><span style="color:#d32f2f; display:block; text-align:center; margin:4px 0;">⬇</span>
                    Upregulated production of <span class="highlight">VEGF</span>
                    <br><span style="color:#d32f2f; display:block; text-align:center; margin:4px 0;">⬇</span>
                    <strong>Neovascularization (PDR)</strong>
                </div>
            </div>
        </div>

        <h3>2. Clinical Features (The Key Signs)</h3>
        
        <div class="clinical-sign">
            <span><strong>🔴 Microaneurysms:</strong> The earliest clinically visible sign. Presents as tiny red dots representing focal saccular outpouchings of the capillary walls.</span>
        </div>
        <div class="clinical-sign">
            <span><strong>🩸 Dot & Blot Hemorrhages:</strong> Deep retinal hemorrhages situated primarily within the Inner Nuclear Layer. They are structurally confined by the vertical arrangement of surrounding axons.</span>
        </div>
        <div class="clinical-sign">
            <span><strong>🟡 Hard Exudates:</strong> Waxy, yellowish lipid deposits with sharp, distinct margins. Composed of <span class="highlight">Lipoproteins</span> leaking from damaged vessels, often coalescing into a structural "Circinate Ring" surrounding a leaking microaneurysm core.</span>
        </div>
        <div class="clinical-sign">
            <span><strong>☁️ Cotton Wool Spots (Soft Exudates):</strong> Fluffy white lesions characterized by indistinct, feathery margins. They represent acute <span class="highlight">infarction of the nerve fiber layer</span> leading to micro-vascular stasis and axoplasmic debris accumulation—a definitive warning sign of localized tissue ischemia.</span>
        </div>
        <div class="clinical-sign">
            <span><strong>🕸️ Neovascularization:</strong> Fragile, poorly formed new blood vessels multiplying on the Optic Disc surface (NVD) or Elsewhere across the retinal landscape (NVE). This serves as the defining hallmark of the proliferative stage.</span>
        </div>

        <h3>3. Grading Classification: NPDR vs. PDR</h3>
        <table>
            <thead>
                <tr>
                    <th style="width: 35%;">Clinical Stage</th>
                    <th style="width: 65%;">Defining Structural Diagnostic Criteria</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="2" style="background-color:#eef6fc; text-align:center; font-weight:bold; color:#0d47a1;">Non-Proliferative Diabetic Retinopathy (NPDR)</td>
                </tr>
                <tr>
                    <td><strong>Mild NPDR</strong></td>
                    <td>Presence of Microaneurysms exclusively.</td>
                </tr>
                <tr>
                    <td><strong>Moderate NPDR</strong></td>
                    <td>Features exceed mild severity but stop short of severe criteria (scattered exudates, intraretinal hemorrhages, and cotton wool spots).</td>
                </tr>
                <tr>
                    <td><strong>Severe NPDR</strong><br><span style="color:#d32f2f; font-weight:bold;">(The 4-2-1 Rule)</span></td>
                    <td>
                        Requires the presence of <strong>ANY ONE</strong> of the following criteria:
                        <ul style="margin-top: 5px; margin-bottom: 0;">
                            <li><strong>4 quadrants</strong> of severe intraretinal hemorrhages.</li>
                            <li><strong>2 quadrants</strong> of definitive Venous Beading.</li>
                            <li><strong>1 quadrant</strong> of prominent IRMA (Intraretinal Microvascular Abnormalities).</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="background-color:#fce4ec; text-align:center; font-weight:bold; color:#c2185b;">Proliferative Diabetic Retinopathy (PDR)</td>
                </tr>
                <tr>
                    <td><strong>PDR</strong></td>
                    <td>Evident <span class="highlight">Neovascularization</span> (NVD / NVE) or associated preretinal/vitreous hemorrhage complications.</td>
                </tr>
            </tbody>
        </table>

        <h3>4. Clinically Significant Macular Edema (CSME)</h3>
        <p>A high-yield clinical standard for examinations. CSME is diagnosed stereoscopically if <strong>any one</strong> of the following metrics is reached:</p>
        <ol>
            <li>Retinal thickening located at or within <strong>500 µm</strong> of the center of the macula.</li>
            <li>Hard exudates located at or within <strong>500 µm</strong> of the macular center, provided they are associated with adjacent retinal thickening.</li>
            <li>A zone of retinal thickening equal to or exceeding <strong>1 disc area</strong> in size, any portion of which resides within 1 disc diameter of the macular center.</li>
        </ol>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What is the structural and angiographic difference between IRMA and Neovascularization?</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> <strong>IRMA</strong> represents shunts formed by dilated, pre-existing intraretinal capillaries responsive to hypoxia; they remain within the retina and do not leak extensively on Fundus Fluorescein Angiography (FFA). <strong>Neovascularization</strong> defines new, anomalous vessels growing through the internal limiting membrane into the vitreous interface; they lack endothelial junctions and leak profusely on FFA.</p>
                </div>
            </details>
        </div>

        <h3>5. Structured Management Protocol</h3>
        <div class="box-mgmt">
            <ul style="margin-bottom:0;">
                <li><strong>Systemic Optimization:</strong> Strict multi-factorial management targeting blood glucose (HbA1c &lt; 7.0%), systemic blood pressure, and lipid profiles.</li>
                <li><strong>NPDR Approach:</strong>
                    <ul>
                        <li>Mild to Moderate: Observational monitoring and scheduling checkups every 3 to 6 months.</li>
                        <li>Severe: Proactive consideration for laser options if patient compliance with regular follow-ups is uncertain.</li>
                    </ul>
                </li>
                <li><strong>CSME Treatment:</strong> Delivery of <span class="highlight">Focal or Grid Laser Photocoagulation</span> or repeated intravitreal anti-VEGF injections.</li>
                <li><strong>PDR Intervention (The Gold Standard):</strong> Implementation of <strong>Pan-Retinal Photocoagulation (PRP)</strong>.
                    <ul>
                        <li><em>Mechanism:</em> Applies targeted laser burns across non-perfused ischemic peripheral retina. This lowers total metabolic demand and stops the production of VEGF, forcing the structural regression of fragile new vessel clusters.</li>
                    </ul>
                </li>
                <li><strong>Medical Therapeutics:</strong> Intravitreal administration of Anti-VEGF agents (Ranibizumab, Bevacizumab, or Aflibercept).</li>
                <li><strong>Surgical Indications:</strong> Implementation of <strong>Pars Plana Vitrectomy (PPV)</strong> reserved for un-clearing dense Vitreous Hemorrhage or secondary Tractional Retinal Detachment (TRD).</li>
            </ul>
        </div>

        <h2>B. Hypertensive Retinopathy (HTN-R)</h2>
        <p><strong>Core Pathophysiology Sequence:</strong> Acute Vasoconstriction (local vascular autoregulation response) <span style="color:#d32f2f;">➔</span> Intimal Hyperplasia & Arteriolosclerosis (vessel wall thickening) <span style="color:#d32f2f;">➔</span> Blood-Retinal Barrier Breakdown (exudative leakage).</p>

        <h3>1. Key Vascular Signatures</h3>
        <ul>
            <li><strong>Arteriolar Caliber Narrowing:</strong> Exhibits either localized focal constriction or generalized attenuation.</li>
            <li><strong>AV Nipping / Crossing Changes (Gunn's Sign):</strong> A thickened, rigid arteriole spans across a retinal vein, compressing its structural path within the shared adventitial sheath, making the underlying vein appear cut or deflected.</li>
            <li><strong>Copper Wiring:</strong> Progressive sclerosis turns the central blood column reflection into a distinct reddish-brown/bronze metallic hue (Grade 3).</li>
            <li><strong>Silver Wiring:</strong> Extreme wall opacification obscures the underlying blood column completely, rendering the vessel look like a solid, opaque white line (Grade 4).</li>
            <li><strong>Macular Star:</strong> Linear arrangements of lipid exudates tracking radially along Henle's layer at the macula, classic for accelerated Malignant Hypertension states.</li>
        </ul>

        <h3>2. Keith-Wagener-Barker (KWB) Classification</h3>
        <table>
            <thead>
                <tr>
                    <th style="width: 20%;">Grade</th>
                    <th style="width: 50%;">Retinal & Fundus Presentations</th>
                    <th style="width: 30%;">Systemic Health Correlation</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Grade I</strong></td>
                    <td>Mild, generalized narrowing and attenuation of arterioles. Early copper wire reflections.</td>
                    <td>Benign essential hypertension; completely asymptomatic.</td>
                </tr>
                <tr>
                    <td><strong>Grade II</strong></td>
                    <td>Pronounced arteriolar narrowing accompanied by localized <strong>AV Nipping Changes</strong> (e.g., Salus Sign presenting as venous deflection).</td>
                    <td>Chronic, established systemic hypertension.</td>
                </tr>
                <tr>
                    <td><strong>Grade III</strong></td>
                    <td>Grade II alterations accompanied by structural <span class="highlight">Flame-shaped Hemorrhages</span>, Cotton Wool Spots, and extensive hard exudation.</td>
                    <td>High risk of active target organ damage (CNS, Renal, Cardiac).</td>
                </tr>
                <tr>
                    <td><strong>Grade IV</strong></td>
                    <td>All features of Grade III compounded by bilateral <span class="highlight">Papilledema</span> (swelling of the optic nerve head).</td>
                    <td><strong>Malignant Hypertension Emergency</strong>; demands immediate inpatient stabilization.</td>
                </tr>
            </tbody>
        </table>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Why are hemorrhages in Hypertensive Retinopathy predominantly "Flame-shaped" compared to Diabetic dots and blots?</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> The micro-infarcts and hemorrhages in hypertensive states occur superficially within the shallow <strong>Nerve Fiber Layer (NFL)</strong>. Because the red blood cells pool between the horizontally arranged architecture of the nerve axons, they spread out in a linear, striated pattern that mimics a flame shape.</p>
                </div>
            </details>
        </div>

        <div class="viva-section">
            <h3 class="viva-title">🔥 Rapid Fire Viva</h3>
            <p><em>Synthesize your systemic and micro-vascular knowledge:</em></p>
            <ol style="margin-left: 20px;">
                <li>What is the primary operational indication for deploying Pan-Retinal Photocoagulation (PRP)?</li>
                <li>In the diagnostic "4-2-1 Rule" used to identify Severe NPDR, what clinical feature does the value "2" represent?</li>
                <li>Name the exact physical layer of the retinal matrix where leaking Hard Exudates accumulate.</li>
                <li>What represents the single most common cause of gradual, central vision loss in patients diagnosed with Diabetic Retinopathy?</li>
            </ol>

            <details style="margin-top: 20px;">
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol>
                        <li><strong>Proliferative Diabetic Retinopathy (PDR)</strong> displaying high-risk characteristics like neovascularization of the disc (NVD) or elsewhere (NVE).</li>
                        <li><strong>Venous Beading</strong> present across 2 or more distinct retinal quadrants.</li>
                        <li>The <strong>Outer Plexiform Layer (OPL)</strong> of the retina.</li>
                        <li><strong>Diabetic Macular Edema (DME) / Clinically Significant Macular Edema (CSME)</strong>, which can manifest during any phase from mild NPDR through advanced PDR.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"retinal-vascular-occlusions-cme": {
    title: "Retinal Vascular Occlusions & CME",
    videoUrl: "coming-soon",
    duration: "45 mins",
    notes: `
      <style>
        .vascular-occlusion-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .vascular-occlusion-notes h1 { color: #002244; border-bottom: 4px solid #002244; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .vascular-occlusion-notes h2 { color: #002244; background-color: #e3f2fd; border-left: 6px solid #b71c1c; padding: 12px; margin-top: 35px; border-radius: 0 5px 5px 0; font-weight: bold; font-size: 1.5rem; }
        .vascular-occlusion-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; font-size: 1.25rem; }
        .vascular-occlusion-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #333; border: 1px solid #ffeeba; }
        .vascular-occlusion-notes .box-patho { background-color: #fdf2e9; border: 2px solid #d35400; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; font-weight: bold; color: #a04000; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .vascular-occlusion-notes .arrow { display: block; font-size: 22px; color: #d35400; margin: 8px 0; }
        .vascular-occlusion-notes .box-mgmt { background-color: #e8f5e9; border: 2px solid #2e7d32; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .vascular-occlusion-notes .box-mgmt h3 { color: #1b5e20; margin-top: 0; border-bottom: 1px solid #a5d6a7; padding-bottom: 5px; }
        .vascular-occlusion-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .vascular-occlusion-notes th { background-color: #002244; color: white; padding: 12px 15px; text-align: left; text-transform: uppercase; font-size: 0.9em; }
        .vascular-occlusion-notes td { border: 1px solid #ddd; padding: 12px 15px; vertical-align: top; }
        .vascular-occlusion-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .vascular-occlusion-notes .recall-box { background-color: #fff0f6; border: 2px dashed #c2185b; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .vascular-occlusion-notes details summary { cursor: pointer; color: #c2185b; font-weight: bold; outline: none; list-style: none; }
        .vascular-occlusion-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 50px; border: 1px solid #37474f; }
        .vascular-occlusion-notes .viva-title { color: #ffd54f; border-bottom: 1px solid #7f8c8d; padding-bottom: 10px; margin-top: 0; }
        .vascular-occlusion-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .vascular-occlusion-notes .clinical-sign { background: #fafafa; padding: 12px; border-left: 4px solid #1976d2; margin-bottom: 12px; border-radius: 0 4px 4px 0; }
        .vascular-occlusion-notes .mnemonic-list { column-count: 2; column-gap: 30px; list-style-type: none; padding-left: 0; }
        .vascular-occlusion-notes .mnemonic-list li { margin-bottom: 0.8rem; break-inside: avoid; }
        .vascular-occlusion-notes ul { list-style-type: disc; padding-left: 20px; margin-bottom: 1rem; }
        .vascular-occlusion-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="vascular-occlusion-notes">
        <h1>Retinal Vascular Occlusions & CME</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -20px; margin-bottom: 30px;">
          High-Yield Exam Modules covering CRAO, CRVO, BRVO, and Cystoid Macular Edema
        </p>

        <h2>1. Central Retinal Artery Occlusion (CRAO)</h2>
        <p><strong>Definition:</strong> Acute complete blockage of the central retinal artery, resulting in profound ischemic infarction of the inner retinal layers. It represents a <span class="highlight">TRUE Ophthalmic Emergency</span> because the functional retinal survival window following total occlusion is less than 90–100 minutes.</p>

        <p><strong>Etiology & Risk Profiles:</strong></p>
        <ul>
            <li><strong>Embolism (Most Common Mechanism):</strong>
                <ul>
                    <li><em>Calcific Emboli:</em> Large, white thrombi originating directly from damaged cardiac valves.</li>
                    <li><em>Cholesterol Emboli (Hollenhorst Plaques):</em> Tiny, glinting orange-yellow crystals breaking off from atheromatous carotid arteries.</li>
                </ul>
            </li>
            <li><strong>Thrombosis:</strong> Localized vessel occlusion secondary to progressive atherosclerosis.</li>
            <li><strong>Vasculitis:</strong> Giant Cell Arteritis (GCA)—always prioritize ruling this out immediately in any elderly patient presenting with acute vision loss.</li>
        </ul>

        <h3>Pathophysiology: The "Cherry Red Spot"</h3>
        <div class="box-patho">
            <h4 style="margin-top:0; color: #a04000;">⚡ Mechanism of Retinal Opacification</h4>
            Acute Occlusion of the Central Retinal Artery
            <span class="arrow">⬇</span>
            Severe Ischemia of the Inner Retinal Layers (Ganglion Cell & Inner Nuclear Layers)
            <span class="arrow">⬇</span>
            Rapid Intracellular Edema, Organelle Swelling, and Coagulative Necrosis
            <span class="arrow">⬇</span>
            The entire superficial inner retina turns an <span class="highlight">Opaque Milky White</span>
            <span class="arrow">⬇</span>
            <strong>EXCEPT at the center of the Fovea</strong>
            <br><span style="font-weight: normal; font-size: 0.95em; color: #555;">(The foveal floor is anatomically thin, completely lacks inner retinal layers, and is nourished by the underlying choroid)</span>
            <span class="arrow">⬇</span>
            The highly vascularized, red choroidal bed shines through the thin foveal floor by contrast
            <span class="arrow">⬇</span>
            <strong>CHERRY RED SPOT APPEARANCE</strong>
        </div>

        

        <h3>Clinical Features</h3>
        <ul>
            <li><strong>Core Symptom:</strong> <span class="highlight">Sudden, painless, profound monocular loss of vision</span>. A distinct preceding history of transient monocular blindness (Amaurosis Fugax) is frequently reported.</li>
            <li><strong>Pupillary Reflex:</strong> Demonstrates a total Relative Afferent Pupillary Defect (RAPD / Amaurotic Pupil).</li>
            <li><strong>Diagnostic Fundus Signs:</strong>
                <ul>
                    <li>Diffuse, chalky milky white appearance of the posterior pole retina.</li>
                    <li>A sharp, circular <strong>Cherry Red Spot</strong> demarcated at the macula center.</li>
                    <li><strong>Cattle-trucking Sign:</strong> Marked segmentation and stagnation of the blood column within the narrowed retinal arterioles.</li>
                </ul>
            </li>
        </ul>

        <div class="box-mgmt">
            <h3>🚨 Emergency Clinical Protocol for CRAO</h3>
            <p><em>Primary Objective: Lower intraocular pressure (IOP) rapidly to induce reflex vascular dilation and shift the obstructing embolus downstream into a peripheral branch. Highly time-critical.</em></p>
            <ol>
                <li><strong>Immediate Firm Ocular Massage:</strong> Manual digital pressure applied to the globe (Compress for 10 seconds, release for 5 seconds) to create artificial fluctuations in pressure.</li>
                <li><strong>Aggressive IOP Lowering:</strong> Intravenous administration of Acetazolamide (500 mg) combined with topical Beta-blockers, followed by an immediate micro-needle Anterior Chamber Paracentesis.</li>
                <li><strong>Systemic Vasodilators:</strong> Administration of Carbogen inhalation therapy (95% O₂ combined with 5% CO₂) or sublingual Isosorbide Dinitrate.</li>
                <li><strong>Systemic Workup:</strong> Order urgent Carotid Doppler studies and Echocardiography. If Giant Cell Arteritis is clinically suspected, immediately initiate high-dose intravenous corticosteroid pulse therapy.</li>
            </ol>
        </div>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What constitutes a "Cilio-Retinal Artery" and what clinical protective benefit does it offer during a CRAO?</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> A Cilio-Retinal Artery is a common anatomical variant present in roughly 15–20% of the population. It arises directly from the short posterior ciliary (choroidal) circulation rather than the central retinal artery. When present, it completely spares the central papillomacular bundle from ischemia, preserving a small, functional island of 20/20 central vision despite total occlusion of the main central retinal artery.</p>
                </div>
            </details>
        </div>

        <h2>2. Central Retinal Vein Occlusion (CRVO)</h2>
        <p><strong>Definition:</strong> Thrombotic occlusion localized within the lumen of the central retinal vein at or near its exit passage through the rigid <strong>Lamina Cribrosa</strong>.
        <br><strong>Pathognomonic Fundus Signature:</strong> Classically described as a <span class="highlight">"Slashed Tomato"</span>, "Stormy Sunset", or "Blood and Thunder" fundus presentation.</p>

        

        <h3>Diagnostic Stratification: Ischemic vs. Non-Ischemic CRVO</h3>
        <table>
            <thead>
                <tr>
                    <th style="width: 50%;">Non-Ischemic Variant (Venous Stasis) — ~75% Cases</th>
                    <th style="width: 50%;">Ischemic Variant (Hemorrhagic) — ~25% Cases</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Visual Acuity:</strong> Mild to moderate impairment (typically remains better than 6/60).</td>
                    <td><strong>Visual Acuity:</strong> Profound, immediate reduction (frequently restricted to Counting Fingers or Hand Motions).</td>
                </tr>
                <tr>
                    <td><strong>Relative Afferent Pupillary Defect:</strong> Completely absent or presents as a mild trace.</td>
                    <td><strong>Relative Afferent Pupillary Defect:</strong> High-grade, <span class="highlight">marked RAPD</span> is consistently present.</td>
                </tr>
                <tr>
                    <td><strong>Retinal Hemorrhages:</strong> Scant, scattered intraretinal dot, blot, and flame hemorrhages.</td>
                    <td><strong>Retinal Hemorrhages:</strong> Massive, dense, confluent superficial and deep hemorrhages covering all 4 quadrants.</td>
                </tr>
                <tr>
                    <td><strong>Neovascular Risk:</strong> Highly rare transition to anterior segment proliferation.</td>
                    <td><strong>Neovascular Risk:</strong> Exceptionally high risk for developing refractory <span class="highlight">Neovascular Glaucoma (NVG)</span>.</td>
                </tr>
                <tr>
                    <td><strong>Angiographic (FFA) Profile:</strong> Demonstrates healthy, intact capillary bed perfusion.</td>
                    <td><strong>Angiographic (FFA) Profile:</strong> Extensive, flat areas of capillary non-perfusion extending beyond 10 disc areas.</td>
                </tr>
            </tbody>
        </table>

        <h3>Major Sight-Threatening Complications</h3>
        <ul>
            <li><strong>Cystoid Macular Edema (CME):</strong> The single most common driver of progressive, long-term visual impairment across both classifications.</li>
            <li><strong>Neovascular Glaucoma (NVG):</strong> Universally called <strong>"90-Day Glaucoma"</strong> or "100-Day Glaucoma" because of its classic presentation timing at roughly 3 months post-thrombosis.
                <ul>
                    <li><em>Pathophysiology Pathway:</em> Severe retinal ischemia drives massive upregulation and release of VEGF into the vitreous ➔ VEGF diffuses forward into the anterior chamber angle ➔ Induces a fibrovascular membrane across the iris surface (Rubeosis Iridis) ➔ Mechanically zips closed the trabecular meshwork angle, causing severe angle-closure glaucoma.</li>
                </ul>
            </li>
        </ul>

        <div class="box-mgmt">
            <h3>Management Framework for CRVO</h3>
            <ul>
                <li><strong>Macular Edema Interventions:</strong> Repeated injections of Intravitreal Anti-VEGF agents (e.g., Ranibizumab) or long-acting slow-release corticosteroid implants (Dexamethasone Implant / Ozurdex).</li>
                <li><strong>Ischemia Management (NVG Prophylaxis):</strong> Prompt execution of <strong>Pan-Retinal Photocoagulation (PRP)</strong> laser application across non-perfused fields to eliminate ischemic tissue and downregulate global VEGF synthesis.</li>
                <li><strong>Systemic Optimization:</strong> Aggressive clinical screening and management of hypertension, dyslipidemia, hyperhomocysteinemia, and hyperviscosity states.</li>
            </ul>
        </div>

        <h3>Branch Retinal Vein Occlusion (BRVO)</h3>
        <div class="clinical-sign">
            <strong>Anatomical Site:</strong> Blockage occurs localized at a single arteriovenous (AV) crossing intersection where a rigid arteriole compresses the underlying vein. The **Supero-temporal quadrant** is the most common site.
        </div>
        <div class="clinical-sign">
            <strong>Pathognomonic Marker:</strong> The presence of the <strong>Bonnet Sign</strong>, characterized by distinct structural banking, dilation, and twisting of the vein segment distal to the crossing point. Presents with localized, sectoral flame hemorrhages.
        </div>

        <h2>3. Cystoid Macular Edema (CME)</h2>
        <p><strong>Definition:</strong> Formed by the intraretinal accumulation of fluid within fluid-filled micro-cystic spaces localized inside the clear <strong>Outer Plexiform Layer (Henle's Fiber Layer)</strong> and the Inner Nuclear Layer of the central macula.</p>

        

        <h3>Etiology Breakdown</h3>
        <p>Memory mapping tool for exams: the high-yield <strong>"DEPRIVED"</strong> mnemonic:</p>
        <ul class="mnemonic-list">
            <li><strong>D</strong> – Diabetic Retinopathy</li>
            <li><strong>E</strong> – Epinephrine (Topical formulation use in aphakic eyes)</li>
            <li><strong>P</strong> – Pars Planitis (Chronic Intermediate Uveitis)</li>
            <li><strong>R</strong> – Retinitis Pigmentosa</li>
            <li><strong>I</strong> – Irvine-Gass Syndrome (Post-Cataract extraction edema)</li>
            <li><strong>V</strong> – Venous Vascular Occlusions (CRVO / BRVO)</li>
            <li><strong>E</strong> – E2-Prostaglandin Analgogues (e.g., Latanoprost)</li>
            <li><strong>D</strong> – Macular Dystrophies</li>
        </ul>

        <h3>Diagnostic Angiography (FFA) Signs</h3>
        <p><strong>Classic Signature:</strong> Displays a high-contrast, symmetrical <strong>"Flower Petal Appearance"</strong> during late-phase imaging frames.
        <br><em>Anatomical Basis:</em> The unique oblique layout of Henle's fibers radiating outwards from the fovea physically forces leaking fluid collections into distinct, symmetrical petaloid compartments.</p>

        <h3>Therapeutic Management Sequence</h3>
        <ul>
            <li><strong>First-Line Topical Agents:</strong> High-penetration topical NSAIDs (Nepafenac / Bromfenac) paired with topical Corticosteroids.</li>
            <li><strong>Systemic Interventions:</strong> Oral Carbonic Anhydrase Inhibitors (Acetazolamide) to optimize metabolic fluid pumping across the retinal pigment epithelium.</li>
            <li><strong>Advanced Therapeutics:</strong> Intravitreal injections of Anti-VEGF compounds or long-acting Triamcinolone acetonide suspensions.</li>
        </ul>

        <div class="viva-section">
            <h3 class="viva-title">🔥 Rapid Fire Viva</h3>
            <p><em>Consolidate your diagnostic vascular knowledge before closing the module:</em></p>
            <ol style="margin-left: 20px;">
                <li>Explain the distinct mechanism that preserves the choroidal circulation path at the foveal floor during an acute CRAO.</li>
                <li>What transient micro-vascular phenomenon does the term "Amaurosis Fugax" clinically describe?</li>
                <li>Which specific structural sub-classification of central retinal vein thrombosis is responsible for triggering "90-Day Glaucoma"?</li>
                <li>Which specific investigative tool remains the absolute gold standard to definitively distinguish an Ischemic CRVO from a Non-Ischemic presentation?</li>
            </ol>

            <details style="margin-top: 20px;">
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol>
                        <li>The fovea lacks internal branches of the central retinal artery and relies entirely on oxygen diffusion from the underlying **Choroidal Choriocapillaris**, which remains patent and unaffected by central retinal artery blockages.</li>
                        <li>An acute, transient, completely **painless monocular loss of vision** caused by micro-emboli temporarily blocking the ocular circulation before spontaneously dissolving.</li>
                        <li>The **Ischemic sub-classification of CRVO** showing more than 10 disc areas of capillary drop-out on angiography.</li>
                        <li>**Fundus Fluorescein Angiography (FFA)**, by identifying and mapping areas of peripheral capillary non-perfusion.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"retinal-structure-pathology": {
    title: "Retinal Structure & Pathology",
    videoUrl: "coming-soon",
    duration: "50 mins",
    notes: `
      <style>
        .retinal-pathology-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .retinal-pathology-notes h1 { color: #000080; border-bottom: 4px solid #000080; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .retinal-pathology-notes h2 { color: #000080; background-color: #f2f7ff; border-left: 6px solid #8B0000; padding: 12px; margin-top: 35px; border-radius: 0 5px 5px 0; font-weight: bold; font-size: 1.5rem; }
        .retinal-pathology-notes h3 { color: #8B0000; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; font-size: 1.25rem; }
        .retinal-pathology-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #333; border: 1px solid #ffeeba; }
        .retinal-pathology-notes .box-patho { background-color: #fff8e1; border: 2px solid #ffa000; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; font-weight: bold; color: #bf360c; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .retinal-pathology-notes .arrow { display: block; font-size: 24px; color: #d35400; margin: 8px 0; }
        .retinal-pathology-notes .box-mgmt { background-color: #e8f5e9; border: 2px solid #2e7d32; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .retinal-pathology-notes .box-mgmt h3 { color: #1b5e20; margin-top: 0; border-bottom: 1px solid #a5d6a7; padding-bottom: 5px; }
        .retinal-pathology-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .retinal-pathology-notes th { background-color: #000080; color: white; padding: 12px 15px; text-align: left; text-transform: uppercase; font-size: 0.9em; }
        .retinal-pathology-notes td { border: 1px solid #ddd; padding: 12px 15px; vertical-align: top; }
        .retinal-pathology-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .retinal-pathology-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d81b60; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .retinal-pathology-notes details summary { cursor: pointer; color: #c2185b; font-weight: bold; outline: none; list-style: none; }
        .retinal-pathology-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 50px; border: 1px solid #37474f; }
        .retinal-pathology-notes .viva-title { color: #ffd54f; border-bottom: 1px solid #7f8c8d; padding-bottom: 10px; margin-top: 0; }
        .retinal-pathology-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .retinal-pathology-notes .mnemonic { background-color: #e0f7fa; padding: 12px; border-left: 4px solid #00acc1; font-style: italic; margin: 15px 0; border-radius: 0 4px 4px 0; color: #006064; font-weight: 500; }
        .retinal-pathology-notes ul { list-style-type: disc; padding-left: 20px; margin-bottom: 1rem; }
        .retinal-pathology-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="retinal-pathology-notes">
        <h1>Retinal Structure & Pathology</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -20px; margin-bottom: 30px;">
          High-Yield Study Module: Microanatomy, Retinal Detachment Types, and Retinoblastoma Oncogenesis
        </p>

        <h2>1. Anatomy of the Retina</h2>
        <p>The human retina is organized into <strong>10 histologically distinct layers</strong>. Structurally and embryologically, it is broadly partitioned into the outermost monolayer—the <strong>Retinal Pigment Epithelium (RPE)</strong>—and the remaining 9 inner layers which collectively comprise the <strong>Neurosensory Retina (NSR)</strong>.</p>

        

        <div class="mnemonic">
            <strong>🧠 Memory Mapping Tool (Outer to Inner Sequence):</strong> <br>
            "<strong>R</strong>eally <strong>P</strong>oor <strong>E</strong>yes <strong>O</strong>ften <strong>O</strong>mit <strong>I</strong>nnocent <strong>I</strong>mages <strong>G</strong>enerated <strong>N</strong>aturally <strong>I</strong>nside."
        </div>

        <table>
            <thead>
                <tr>
                    <th style="width: 10%;">Layer</th>
                    <th style="width: 30%;">Anatomical Name</th>
                    <th style="width: 60%;">High-Yield Features & Clinical Pathologies</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>1</strong></td>
                    <td><strong>Retinal Pigment Epithelium (RPE)</strong></td>
                    <td>A monolayer of hexagonal, melanin-rich cells. Core functions include Vitamin A/retinoid metabolism, phagocytosis of shed photoreceptor outer segment discs, and forming the outer blood-retinal barrier.</td>
                </tr>
                <tr>
                    <td><strong>2</strong></td>
                    <td><strong>Photoreceptor Layer</strong></td>
                    <td>Contains the specialized outer and inner segments of <strong>Rods</strong> (responsible for low-light scotopic vision) and <strong>Cones</strong> (responsible for high-acuity photopic and color vision).</td>
                </tr>
                <tr>
                    <td><strong>3</strong></td>
                    <td><strong>External Limiting Membrane (ELM)</strong></td>
                    <td>Not a structural membrane. It is a fenestrated line formed by zonula adherens junctional complexes bridging Muller glial cells and photoreceptor inner segments.</td>
                </tr>
                <tr>
                    <td><strong>4</strong></td>
                    <td><strong>Outer Nuclear Layer (ONL)</strong></td>
                    <td>Houses the cell bodies and nuclei of the rods and cones.</td>
                </tr>
                <tr>
                    <td><strong>5</strong></td>
                    <td><strong>Outer Plexiform Layer (OPL)</strong></td>
                    <td>The zone of synaptic connections linking photoreceptor axons with dendrites of bipolar and horizontal cells. <br><strong>Clinical Correlation:</strong> This is the structural site where lipid/lipoprotein accumulation manifests as <span class="highlight">Hard Exudates</span>.</td>
                </tr>
                <tr>
                    <td><strong>6</strong></td>
                    <td><strong>Inner Nuclear Layer (INL)</strong></td>
                    <td>Contains the nuclei of intermediate neurons: Bipolar, Amacrine, Horizontal, and Muller cells. <br><strong>Clinical Correlation:</strong> Primary site for microaneurysms and <span class="highlight">Dot/Blot Hemorrhages</span>.</td>
                </tr>
                <tr>
                    <td><strong>7</strong></td>
                    <td><strong>Inner Plexiform Layer (IPL)</strong></td>
                    <td>The synaptic zone where bipolar cell axons synapse with the dendrites of ganglion cells and processes of amacrine cells.</td>
                </tr>
                <tr>
                    <td><strong>8</strong></td>
                    <td><strong>Ganglion Cell Layer (GCL)</strong></td>
                    <td>Contains the cell bodies of the second-order visual pathway neurons (ganglion cells).</td>
                </tr>
                <tr>
                    <td><strong>9</strong></td>
                    <td><strong>Nerve Fiber Layer (NFL)</strong></td>
                    <td>Consists of unmyelinated axons arising from the ganglion cells which course toward the optic disc to form the optic nerve. <br><strong>Clinical Correlation:</strong> Structural site of <span class="highlight">Flame-shaped Hemorrhages</span> and axoplasmic stagnation known as <span class="highlight">Cotton Wool Spots</span>.</td>
                </tr>
                <tr>
                    <td><strong>10</strong></td>
                    <td><strong>Internal Limiting Membrane (ILM)</strong></td>
                    <td>The true innermost basement membrane separating the retina from the vitreous body, synthesized entirely by the vitreal expansions of Muller cell end-feet.</td>
                </tr>
            </tbody>
        </table>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Between which two specific layers does a pathological Retinal Detachment occur, and what is its embryological explanation?</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> It occurs between <strong>Layer 1 (RPE)</strong> and <strong>Layer 2 (Photoreceptor Layer)</strong>. This line represents a persistent potential space derived from the primitive intraretinal space of the embryonic optic vesicle. Because no cellular junctions anchor the neurosensory retina to the underlying RPE, they easily separate when fluid collects between them.</p>
                </div>
            </details>
        </div>

        <h2>2. Retinal Detachment (RD)</h2>
        <p><strong>Definition:</strong> The physical separation of the neurosensory retina (NSR) from the underlying retinal pigment epithelium (RPE), leading to ischemia and subsequent degeneration of the photoreceptor matrix due to loss of choroidal blood supply.</p>

        

        <h3>Diagnostic Stratification: RRD vs. TRD vs. ERD</h3>
        <table>
            <thead>
                <tr>
                    <th style="width: 22%;">Feature</th>
                    <th style="width: 26%;">Rhegmatogenous (RRD)</th>
                    <th style="width: 26%;">Tractional (TRD)</th>
                    <th style="width: 26%;">Exudative / Serous (ERD)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Primary Mechanism</strong></td>
                    <td>A structural <span class="highlight">full-thickness retinal break/tear</span> allows fluid to enter the subretinal space.</td>
                    <td>Physical pull exerted on the retina by contracting <span class="highlight">fibrovascular membranes</span>.</td>
                    <td>Active <span class="highlight">hydrostatic fluid leakage</span> underneath the retina without any breaks.</td>
                </tr>
                <tr>
                    <td><strong>Etiology & Risk Factors</strong></td>
                    <td>High axial myopia, blunt ocular trauma, aphakia, or peripheral lattice degeneration.</td>
                    <td>Proliferative Diabetic Retinopathy (PDR), Retinopathy of Prematurity (ROP), or Eales disease.</td>
                    <td>Primary choroidal tumors (Melanoma), Coats disease, posterior uveitis, or malignant systemic hypertension.</td>
                </tr>
                <tr>
                    <td><strong>Subretinal Fluid Dynamics</strong></td>
                    <td>Gravity-dependent fluid movement; borders usually extend to the ora serrata.</td>
                    <td>Local fluid containment; the fluid configuration typically shows a concave meniscus.</td>
                    <td>Characterized by highly diagnostic <span class="highlight">Shifting Fluid</span> (rapidly changes position with head tilt).</td>
                </tr>
                <tr>
                    <td><strong>Retinal Mobility & Contour</strong></td>
                    <td>Highly mobile, undulating, convex retinal folds presenting with a grey, wrinkled appearance.</td>
                    <td>Markedly immobile, rigid, tented-up retina with localized traction points.</td>
                    <td>Smooth, taut, dome-shaped retinal elevation completely lacking folds or breaks.</td>
                </tr>
            </tbody>
        </table>

        <h3>Pathophysiology of Rhegmatogenous Retinal Detachment (RRD)</h3>
        <div class="box-patho">
            <h4 style="margin-top:0; color: #bf360c;">⚡ Cascading Mechanism of RRD</h4>
            Age-related or Myopic Liquefaction of the Vitreous Gel (Syneresis)
            <span class="arrow">⬇</span>
            Development of an acute <strong>Posterior Vitreous Detachment (PVD)</strong>
            <span class="arrow">⬇</span>
            Vitreous gel exerts focused mechanical pull (traction) at an area of vitreoretinal adhesion
            <span class="arrow">⬇</span>
            Formation of a full-thickness <strong>Retinal Tear or Break</strong>
            <span class="arrow">⬇</span>
            Liquefied vitreous fluid tracks through the open break under hydrodynamic pressure
            <span class="arrow">⬇</span>
            The fluid overcomes RPE pump capacity, leading to separation of the <strong>Neurosensory Retina from the RPE</strong>
        </div>

        <h3>Clinical Presentations</h3>
        <ul>
            <li><strong>Premonitory Warnings:</strong> Flash sensations (<span class="highlight">Photopsia</span> caused by vitreoretinal traction) paired with sudden bursts of dark spots (<span class="highlight">Floaters</span> reflecting vitreal debris or blood).</li>
            <li><strong>Defining Symptom:</strong> A dense, progressive visual field defect often described as a <span class="highlight">"curtain falling"</span> across the field of vision (oriented opposite to the physical site of the detachment).</li>
            <li><strong>Key Clinical Signs:</strong>
                <ul>
                    <li><strong>Shafer's Sign ("Tobacco Dust"):</strong> Fine, brownish pigment granules suspended in the anterior vitreous humor. This finding is highly specific for a full-thickness retinal tear.</li>
                    <li><strong>Altered Red Reflex:</strong> The normal bright red reflex is replaced by a dull, greyish or white reflex on distant direct ophthalmoscopy.</li>
                    <li>An undulating, greyish, opaque sheet identified on direct or indirect ophthalmoscopic evaluation.</li>
                </ul>
            </li>
        </ul>

        <div class="box-mgmt">
            <h3>🛠️ Management Framework for RRD</h3>
            <p><em>Surgical Principle: Locate and seal every retinal break, eliminate active dynamic vitreoretinal traction, and encourage apposition of the neurosensory layers back onto the RPE bed.</em></p>
            <ol>
                <li><strong>Scleral Buckling:</strong> An exoplant (silicone band or sponge) is sutured onto the outer sclera, indenting the eye wall inward to close and seal the break.</li>
                <li><strong>Pneumatic Retinopexy:</strong> An expanding intraocular gas bubble (e.g., $SF_6$ or $C_3F_8$) is injected into the vitreous cavity to provide temporary internal support, pushing the retina back against the RPE. This is followed by retinopexy (laser or cryo) around the break.</li>
                <li><strong>Pars Plana Vitrectomy (PPV):</strong> Controlled surgical removal of the vitreous gel to completely relieve tractional pull, combined with endolaser photocoagulation around the break and internal tamponade using gas or silicone oil.</li>
                <li><strong>Prophylactic Laser Barrage:</strong> Prompt delivery of demarcating laser photocoagulation circles around asymptomatic peripheral lattice degeneration or horse-shoe tears to prevent fluid tracking.</li>
            </ol>
        </div>

        <h2>3. Retinoblastoma (Rb)</h2>
        <p><strong>Definition:</strong> The most common primary malignant intraocular neuroepithelial tumor presenting in early childhood, typically diagnosed before 3 years of age.</p>

        

        <p><strong>Oncogenesis and Genetics:</strong></p>
        <ul>
            <li><strong>Locus Mapping:</strong> Driven by inactivation mutations localized to the <strong>RB1 Gene</strong> (a classic tumor suppressor gene) located on Chromosome <strong>13q14</strong>.</li>
            <li><strong>Knudson's Two-Hit Hypothesis:</strong>
                <ul>
                    <li><em>Heritable Form (40%):</em> The initial "first hit" is a germline mutation present in all somatic cells. The "second hit" is a localized somatic mutation. These cases typically present early in life with bilateral, multi-focal tumors.</li>
                    <li><em>Non-Heritable Form (60%):</em> Both distinct genetic "hits" occur as spontaneous somatic mutations within a single retinal cell. These cases present later in childhood as a unilateral, isolated unifocal tumor.</li>
                </ul>
            </li>
        </ul>

        <h3>Clinical Presentation Staging</h3>
        <ol>
            <li><strong>Leukocoria (~60%):</strong> A whitish pupillary reflex that replaces the normal red reflex (often called an *Amaurotic Cat's Eye* reflex). This is the most common presentation.</li>
            <li><strong>Strabismus (Squint):</strong> The second most common manifestation, triggered when an expanding tumor involves the macular region and disrupts central foveal fixation.</li>
            <li><strong>Secondary Glaucoma:</strong> Caused by forward displacement of the lens-iris diaphragm or direct tumor cells blocking the trabecular meshwork.</li>
            <li><strong>Proptosis:</strong> Marked orbital proptosis occurs in late-stage disease, indicating extraocular tumor spread beyond the lamina cribrosa.</li>
        </ol>

        <h3>Histopathology Hallmarks</h3>
        <ul>
            <li><strong>Flexner-Wintersteiner Rosettes:</strong> Highly specific for retinoblastoma. Composed of specialized cuboidal or columnar cells organized in a ring around a clear, central lumen containing cytoplasmic extensions (indicative of photoreceptor differentiation).</li>
            <li><strong>Homer-Wright Rosettes:</strong> Cells arranged circularly around a central hub of pink neurofibrillary meshwork. These lack a true lumen and are also found in other primitive neuroectodermal tumors (e.g., neuroblastoma, medulloblastoma).</li>
            <li><strong>Dystrophic Calcification:</strong> Found in over 90% of cases due to focal necrosis within tumor zones outgrowing their blood supply. This appears as a highly diagnostic pattern on orbital CT scans or B-scan ultrasonography.</li>
        </ul>

        <div class="box-mgmt">
            <h3>Management Protocol</h3>
            <ul>
                <li><strong>Small, Localized Tumors:</strong> Managed using focal ablation techniques such as Transpupillary Thermotherapy (TTT), Cryotherapy, or plaque brachytherapy.</li>
                <li><strong>Medium-Sized Tumors:</strong> Managed with systemic <span class="highlight">Chemoreduction</span> (typically utilizing intravenous Vincristine, Etoposide, and Carboplatin) to shrink the tumor volume, followed by local consolidative focal ablation.</li>
                <li><strong>Advanced Advanced Intraocular Disease (Unilateral):</strong> Immediate <span class="highlight">Enucleation</span> is performed. The eye is surgically removed along with a long (10–15 mm) stump of the optic nerve to ensure clean margins past the lamina cribrosa.</li>
                <li><strong>Metastatic or Extraocular Disease:</strong> Managed with intensive systemic multi-agent chemotherapy combined with external beam radiotherapy (EBRT).</li>
            </ul>
        </div>

        <div class="viva-section">
            <h3 class="viva-title">🔥 Rapid Fire Viva</h3>
            <p><em>Test your clinical recall and diagnostic readiness:</em></p>
            <ol style="margin-left: 20px;">
                <li>What pathological material constitutes "Shafer's Sign" on slit-lamp biomicroscopy, and why does it form?</li>
                <li>Identify the specific retinal layer that becomes structurally swollen or packed during the formation of standard diabetic "hard exudates."</li>
                <li>Why do survivors of heritable retinoblastoma face a life-long risk of developing secondary non-ocular cancers, and what is the most common tumor type encountered?</li>
                <li>Which specific histological rosette features an empty central lumen, and what form of tissue differentiation does it represent?</li>
            </ol>

            <details style="margin-top: 20px;">
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol>
                        <li>**Shafer's sign** consists of liberated **RPE pigment granules** that escape into the vitreous cavity after a full-thickness retinal tear forms. They migrate into the anterior vitreous under thermal convection currents.</li>
                        <li>The **Outer Plexiform Layer (OPL)** houses these lipid precipitates within Henle's fiber network.</li>
                        <li>Because their heritable **germline RB1 mutation** is present in every cell in the body, they lack systemic protection against subsequent mutations. The most common secondary malignancy encountered is an **Osteosarcoma** (frequently involving the long bones or femur).</li>
                        <li>The **Flexner-Wintersteiner Rosette**, which represents primitive **photoreceptor differentiation**.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"squint-basics-exotropia": {
    title: "Squint Basics & Exotropia",
    videoUrl: "coming-soon",
    duration: "40 mins",
    notes: `
      <style>
        .squint-basics-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .squint-basics-notes h1 { color: #000080; border-bottom: 4px solid #000080; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .squint-basics-notes h2 { color: #000080; background-color: #f0f8ff; border-left: 6px solid #8B0000; padding: 12px; margin-top: 35px; border-radius: 0 5px 5px 0; font-weight: bold; font-size: 1.5rem; }
        .squint-basics-notes h3 { color: #8B0000; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; font-size: 1.25rem; }
        .squint-basics-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #333; border: 1px solid #ffeeba; }
        .squint-basics-notes .box-patho { background-color: #e3f2fd; border: 2px solid #1976d2; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; font-weight: bold; color: #0d47a1; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .squint-basics-notes .arrow { display: block; font-size: 24px; color: #d32f2f; margin: 8px 0; }
        .squint-basics-notes .box-mgmt { background-color: #e8f5e9; border: 2px solid #2e7d32; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .squint-basics-notes .box-mgmt h4 { color: #1b5e20; margin-top: 15px; margin-bottom: 5px; font-weight: bold; }
        .squint-basics-notes .box-mgmt h4:first-of-type { margin-top: 0; }
        .squint-basics-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .squint-basics-notes th { background-color: #000080; color: white; padding: 12px 15px; text-align: left; text-transform: uppercase; font-size: 0.9em; }
        .squint-basics-notes td { border: 1px solid #ddd; padding: 12px 15px; vertical-align: top; }
        .squint-basics-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .squint-basics-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d81b60; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .squint-basics-notes details summary { cursor: pointer; color: #c2185b; font-weight: bold; outline: none; list-style: none; }
        .squint-basics-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 50px; border: 1px solid #37474f; }
        .squint-basics-notes .viva-title { color: #ffd54f; border-bottom: 1px solid #7f8c8d; padding-bottom: 10px; margin-top: 0; }
        .squint-basics-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .squint-basics-notes .mnemonic { background-color: #fff3e0; padding: 12px; border-left: 4px solid #ff9800; margin: 15px 0; border-radius: 0 4px 4px 0; color: #e65100; font-weight: 500; }
        .squint-basics-notes ul, .squint-basics-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .squint-basics-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="squint-basics-notes">
        <h1>Squint (Strabismus) Basics</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -20px; margin-bottom: 30px;">
          Core Exam Module: Extraocular Muscle Kinematics, Comitant vs. Incomitant Deviations, and Divergent Squint Protocols
        </p>

        <h2>1. Actions of Extraocular Muscles (EOM)</h2>
        <p>A comprehensive grasp of individual and synergistic extraocular muscle vectors is essential for diagnosing strabismus. All four recti muscles originate from a shared tendinous structure—the <strong>Annulus of Zinn</strong>—located at the orbital apex.</p>
        
        

[Image of Extraocular Muscle Actions]


        <div class="mnemonic">
            <strong>🧠 High-Yield Kinematic Mnemonic: "SIN RAD"</strong><br>
            • <strong>S</strong>uperiors are <strong>In</strong>torters (Superior Rectus & Superior Oblique execute in-cycloduction).<br>
            • <strong>R</strong>ecti are <strong>Ad</strong>ductors (Superior, Inferior, and Medial Recti pull inward, except the Lateral Rectus).<br>
            • <strong>Obliques</strong> are primary/secondary <strong>Ab</strong>ductors (Superior and Inferior Obliques move the globe outward).
        </div>

        <table>
            <thead>
                <tr>
                    <th style="width: 25%;">Muscle</th>
                    <th style="width: 25%;">Primary Action</th>
                    <th style="width: 25%;">Secondary Action</th>
                    <th style="width: 25%;">Tertiary Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Medial Rectus (MR)</strong></td>
                    <td><span class="highlight">Adduction</span></td>
                    <td>None</td>
                    <td>None</td>
                </tr>
                <tr>
                    <td><strong>Lateral Rectus (LR)</strong></td>
                    <td><span class="highlight">Abduction</span></td>
                    <td>None</td>
                    <td>None</td>
                </tr>
                <tr>
                    <td><strong>Superior Rectus (SR)</strong></td>
                    <td>Elevation</td>
                    <td>Intorsion (In-cycloduction)</td>
                    <td>Adduction</td>
                </tr>
                <tr>
                    <td><strong>Inferior Rectus (IR)</strong></td>
                    <td>Depression</td>
                    <td>Extorsion (Ex-cycloduction)</td>
                    <td>Adduction</td>
                </tr>
                <tr>
                    <td><strong>Superior Oblique (SO)</strong></td>
                    <td>Intorsion</td>
                    <td>Depression</td>
                    <td>Abduction</td>
                </tr>
                <tr>
                    <td><strong>Inferior Oblique (IO)</strong></td>
                    <td>Extorsion</td>
                    <td>Elevation</td>
                    <td>Abduction</td>
                </tr>
            </tbody>
        </table>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Which specific extraocular muscle acts as the primary elevator of the globe when the eye is pre-positioned in a state of abduction?</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> The <strong>Superior Rectus (SR)</strong>. Clinically, remember that the vertical vector of the Recti muscles is maximized in abduction (the muscle alignment parallels the optical axis), whereas the vertical vector of the Oblique muscles is maximized in adduction.</p>
                </div>
            </details>
        </div>

        <h2>2. Concomitant vs. Paralytic Squint</h2>
        <p><strong>Core Clinical Distinctions:</strong><br>
        • <strong>Concomitant (Comitant):</strong> The measured angle of misalignment remains completely constant in all directional quadrants of gaze, regardless of which eye is fixating. It is highly prevalent in pediatric populations.<br>
        • <strong>Incomitant (Paralytic/Restrictive):</strong> The angle of misalignment varies significantly across different directions of gaze. It typically presents acutely in adult populations following neurologic insults or trauma.</p>

        

        <table>
            <thead>
                <tr>
                    <th style="width: 30%;">Clinical Feature</th>
                    <th style="width: 35%;">Concomitant Strabismus</th>
                    <th style="width: 35%;">Paralytic Strabismus</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Ocular Excursions</strong></td>
                    <td>Full, symmetrical, and non-restricted bilaterally.</td>
                    <td><span class="highlight">Markedly limited</span> or absent in the vector of action of the paretic muscle.</td>
                </tr>
                <tr>
                    <td><strong>Angle of Deviation</strong></td>
                    <td>Primary Deviation equals Secondary Deviation.</td>
                    <td><span class="highlight">Secondary Deviation &gt; Primary Deviation</span>.</td>
                </tr>
                <tr>
                    <td><strong>Diplopia Profile</strong></td>
                    <td>Absent due to early pediatric neuro-adaptation (cortical suppression or anomalous retinal correspondence [ARC]).</td>
                    <td><strong>Present and acute</strong>; typically severe, distressing, and constant.</td>
                </tr>
                <tr>
                    <td><strong>Abnormal Head Posture (AHP)</strong></td>
                    <td>Typically absent or minimal.</td>
                    <td><strong>Prominent</strong> (head turns, tilts, or chins up/down to place the eyes away from the paretic field and resolve diplopia).</td>
                </tr>
                <tr>
                    <td><strong>Past-Pointing Phenomenon</strong></td>
                    <td>Absent.</td>
                    <td>Present (the patient points past an object due to altered egocentric localization).</td>
                </tr>
                <tr>
                    <td><strong>Primary Etiologies</strong></td>
                    <td>Uncorrected hypermetropia/myopia, uncompensated latent phorias, or innate fusion defects.</td>
                    <td>Cranial Nerve Palsies (CN 3, 4, or 6), direct muscle trauma, or neuromuscular junction defects (e.g., Myasthenia Gravis).</td>
                </tr>
            </tbody>
        </table>

        <p style="font-size: 0.95em; color: #555; background-color: #f9f9f9; padding: 10px; border-left: 3px solid #000080;">
            <em>*Primary Deviation defined:</em> The angle of ocular misalignment measured when the normal, non-paretic eye is actively maintaining central fixation.<br>
            <em>*Secondary Deviation defined:</em> The angle measured when the paretic or misaligned eye is forced to hold central fixation.
        </p>

        <h2>3. Concomitant Exotropia (Divergent Squint)</h2>
        <p><strong>Definition:</strong> An outward horizontal deviation of the visual axes where the measured angle of divergence remains stable across all gaze coordinates. In contrast to esotropia, it exhibits a later clinical onset, commonly manifesting in older pediatric age brackets and young adults.</p>

        <h3>Etiological Drivers</h3>
        <ul>
            <li><strong>Uncorrected Refractive Profile:</strong> Closely linked with uncorrected <span class="highlight">Myopia</span>. Because near-sighted individuals require less accommodation to see near targets clearly, they drop their accommodative-convergence drive, predisposing the eyes to drift outward.</li>
            <li><strong>Anatomical Variation:</strong> Widely spaced orbits or divergent structural alignment of the bony orbit.</li>
            <li><strong>Sensory Deprivation:</strong> Disruption of the binocular fusion loop due to dense structural visual loss in one eye (e.g., unilateral advanced congenital cataract or corneal scarring), leading to *Sensory Exotropia*.</li>
        </ul>

        <h3>Pathophysiology: The Decompensation Pathway</h3>
        <div class="box-patho">
            <h4 style="margin-top:0; color: #0d47a1;">⚡ Mechanisms of Comitant Exotropia Progression</h4>
            Genetic Susceptibility / Interpupillary Disparity / Uncorrected High Myopia
            <span class="arrow">⬇</span>
            Gradual attenuation or weakness of the binocular active fusion loop
            <span class="arrow">⬇</span>
            <strong>Latent Divergent State (Exophoria)</strong>
            <br><span style="font-size: 0.9em; font-weight: normal; color: #555;">(Maintained under conscious binocular alignment effort)</span>
            <span class="arrow">⬇</span>
            Triggering factors: Physical fatigue, systemic illness, stress, or advancing age
            <span class="arrow">⬇</span>
            Breakdown and failure of the active fusional vergence reserve mechanism
            <span class="arrow">⬇</span>
            <strong>Intermittent Exotropia Presentation (X(T))</strong>
            <br><span style="font-size: 0.9em; font-weight: normal; color: #555;">(Exhibits transient drifting when fixating at a distance or during moments of daydreaming)</span>
            <span class="arrow">⬇</span>
            Cortical suppression maps onto the temporal retina of the deviating eye
            <span class="arrow">⬇</span>
            <strong>Manifest Constant Exotropia (XT)</strong>
        </div>

        <h3>Clinical Phenotypic Variations</h3>
        <ol>
            <li><strong>Congenital/Infantile Exotropia:</strong> Rare, large-angle outward deviation presenting within the first six months of life, unrelated to refractive anomalies.</li>
            <li><strong>Intermittent Exotropia (X(T)):</strong> The most common form; accounts for the majority of exotropia cases. Misalignment is intermittent and often triggered by bright sunlight, fatigue, or illness.</li>
            <li><strong>Sensory Exotropia:</strong> Unilateral outward drift following a primary drop in sensory input in that eye.</li>
            <li><strong>Consecutive Exotropia:</strong> An outward shift occurring after surgical over-correction of a pre-existing esotropia.</li>
        </ol>

        

        <h3>Management Protocol Matrix</h3>
        <div class="box-mgmt">
            <h4>1. Optical Rehabilitation</h4>
            <ul>
                <li><strong>Refractive Correction:</strong> Provide full, sharp correction of any underlying myopic errors using concave lenses. This forces the patient to accommodate for near tasks, which stimulates accommodative convergence and helps pull the eyes inward.</li>
                <li><strong>Overcorrecting Minus Lenses:</strong> Temporarily prescribing an additional -1.00 to -3.00 diopters beyond the baseline refractive profile can be used in intermittent cases to trigger extra accommodative convergence and control the deviation.</li>
            </ul>

            <h4>2. Orthoptic Interventions</h4>
            <ul>
                <li>Indicated primarily for handling Intermittent Exotropia or isolated Convergence Insufficiency.</li>
                <li><strong>Pencil Push-Ups:</strong> Structured training designed to improve the Near Point of Convergence (NPC) and build fusional amplitudes.</li>
                <li><strong>Synoptophore Training:</strong> In-office exercises aimed at strengthening fusional convergence reserves.</li>
            </ul>

            <h4>3. Surgical Intervention</h4>
            <p><strong>Indications:</strong> Indicated when there is a large-angle constant exotropia, a high frequency of intermittent drift that compromises stereopsis, or for cosmetic realignment.</p>
            <p><strong>Surgical Methods:</strong></p>
            <ul>
                <li><strong>Lateral Rectus (LR) Recession:</strong> A weakening procedure where the LR insertion is moved posteriorly on the sclera, reducing its outward pull.</li>
                <li><strong>Medial Rectus (MR) Resection:</strong> A strengthening procedure where a segment of the MR muscle is excised and the shortened muscle is reattached, increasing its inward pull.</li>
                <li><em>Standard Surgical Selection:</em> A combined unilateral **Recession of the Lateral Rectus + Resection of the Medial Rectus (R&R)** on the same eye.</li>
            </ul>
        </div>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What is the underlying physiological reason why the Secondary Deviation is larger than the Primary Deviation in paralytic strabismus?</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> This asymmetry is governed by <strong>Hering's Law of Equal Innervation</strong>, which states that equal and simultaneous motor voltage is sent to yoke muscles. When fixating with the paretic eye, the brain must send a massive motor signal to force the weak muscle to contract. Following Hering's law, an identical, massive motor signal is automatically delivered to the yoke muscle of the normal, healthy eye, resulting in a significantly larger deviation.</p>
                </div>
            </details>
        </div>

        <div class="viva-section">
            <h3 class="viva-title">🔥 Rapid Fire Viva</h3>
            <p><em>Synthesize your strabismus mechanics and diagnostic logic:</em></p>
            <ol style="margin-left: 20px;">
                <li>Based on Hering's Law of Equal Innervation, which specific deviation is larger in a case of paralytic strabismus: primary or secondary?</li>
                <li>Which specific refractive error is most commonly linked with comitant exotropia, and what is its mechanism?</li>
                <li>What is the tertiary action of the Superior Oblique muscle?</li>
                <li>Name the definitive objective diagnostic charting system used to map and differentiate a paralytic muscle palsy from a mechanical restriction using a red-green goggles framework.</li>
                <li>If a patient presents with an isolated right Cranial Nerve 6 (Abducens) palsy, in which horizontal direction will they mechanically turn their head to achieve binocular alignment?</li>
            </ol>

            <details style="margin-top: 20px;">
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol>
                        <li>The <strong>Secondary Deviation</strong> is always larger than the primary deviation due to the excessive innervation required by the paretic eye, which is simultaneously transmitted to the yoke muscle of the sound eye.</li>
                        <li><strong>Myopia</strong>. Uncorrected myopes do not need to accommodate for near tasks, which leads to a corresponding drop in their accommodative-convergence reflex and allows the eyes to drift outward.</li>
                        <li><strong>Abduction</strong>. (Based on *SIN RAD*, the superiors are intorters and recti are adductors. As a superior oblique, its actions are intorsion [primary], depression [secondary], and abduction [tertiary]).</li>
                        <li>The <strong>Hess Chart</strong> or <strong>Lees Screen</strong> test.</li>
                        <li>They will turn their head <strong>toward the right side</strong> (the direction of the paralyzed right lateral rectus muscle). Turning the face toward the paretic field brings the fixating target into a position where the right eye does not need to abduce, minimizing diplopia.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"pneumonia": {
    title: "Pneumonia: Integrated Medicine & Pediatrics",
    videoUrl: "coming-soon",
    duration: "45 mins",
    notes: `
      <style>
        @media print {
            .pneumonia-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .pneumonia-notes details[open] summary ~ * { animation: none; }
        }
        .pneumonia-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .pneumonia-notes h1 { color: #000080; border-bottom: 4px solid #000080; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .pneumonia-notes h2 { color: #000080; background-color: #f0f8ff; border-left: 6px solid #8B0000; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .pneumonia-notes h3 { color: #8B0000; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .pneumonia-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #333; border: 1px solid #ffeeba; }
        .pneumonia-notes .box-patho { background-color: #fff3e0; border: 2px solid #ef6c00; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; font-weight: bold; color: #e65100; box-shadow: 3px 3px 8px rgba(0,0,0,0.05); }
        .pneumonia-notes .arrow { display: block; font-size: 24px; color: #d84315; margin: 8px 0; }
        .pneumonia-notes .box-curb { background-color: #e8f5e9; border: 2px solid #2e7d32; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .pneumonia-notes .box-mgmt { background-color: #e3f2fd; border: 2px solid #1565c0; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .pneumonia-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .pneumonia-notes th, .pneumonia-notes td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; vertical-align: top; }
        .pneumonia-notes th { background-color: #000080; color: white; text-transform: uppercase; font-size: 0.9em; }
        .pneumonia-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .pneumonia-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d81b60; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .pneumonia-notes details summary { cursor: pointer; color: #c2185b; font-weight: bold; outline: none; }
        .pneumonia-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .pneumonia-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .pneumonia-notes ul, .pneumonia-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .pneumonia-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="pneumonia-notes">
        <h1>Pneumonia: Integrated Medicine & Pediatrics</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Comprehensive Clinical Guide: Microbial Taxonomy, Pathological Phases of Consolidation, Triage Scoring, and Pharmacotherapeutic Frameworks
        </p>

        <h2>1. Diagnostic Classification Criteria</h2>
        <p><strong>Definition:</strong> Acute infectious inflammation targeting the lung parenchyma distal to the terminal bronchioles, presenting microstructurally as exudative alveolar engorgement and alveolar consolidation.</p>

        <table>
            <thead>
                <tr>
                    <th style="width: 50%;">Community-Acquired Pneumonia (CAP)</th>
                    <th style="width: 50%;">Hospital-Acquired Pneumonia (HAP) / Nosocomial</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Infection acquired out-of-hospital or manifesting <span class="highlight">&lt; 48 hours</span> post-hospitalization.</td>
                    <td>Infection developing <span class="highlight">&gt; 48 hours</span> following inpatient admission, which was explicitly non-incubating at the time of entry.</td>
                </tr>
                <tr>
                    <td>
                        <strong>Predominant Pathogens:</strong>
                        <ul>
                            <li><em>Streptococcus pneumoniae</em> (most common typic pathogen)</li>
                            <li><em>Haemophilus influenzae</em></li>
                            <li><em>Mycoplasma pneumoniae</em> (atypical agent)</li>
                        </ul>
                    </td>
                    <td>
                        <strong>Predominant Pathogens (High Multi-Drug Resistance):</strong>
                        <ul>
                            <li><em>Pseudomonas aeruginosa</em></li>
                            <li>Methicillin-Resistant <em>Staphylococcus aureus</em> (MRSA)</li>
                            <li>Gram-negative enteric bacilli (<em>Escherichia coli</em>, <em>Klebsiella pneumoniae</em>)</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>

        <h2>2. Microbial Etiology Strategy Map</h2>
        <p>Pathogen distributions are highly age-dependent and stratified across specialized high-risk systemic phenotypes:</p>

        <table>
            <thead>
                <tr>
                    <th>Patient Demographics</th>
                    <th>Primary Pathogen Lineage</th>
                    <th>Secondary & Opportunistic Pathogens</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Neonates (&lt; 3 weeks)</strong></td>
                    <td><span class="highlight">Group B Streptococcus (Streptococcus agalactiae)</span></td>
                    <td><em>Escherichia coli</em>, <em>Listeria monocytogenes</em></td>
                </tr>
                <tr>
                    <td><strong>Infants & Children (3 weeks to 5 years)</strong></td>
                    <td><span class="highlight">Respiratory Viruses (Respiratory Syncytial Virus - RSV)</span></td>
                    <td><em>Streptococcus pneumoniae</em>, <em>Haemophilus influenzae</em> (Type B)</td>
                </tr>
                <tr>
                    <td><strong>Children & Adolescents (&gt; 5 years)</strong></td>
                    <td><span class="highlight">Mycoplasma pneumoniae</span> (Atypical framework)</td>
                    <td><em>Streptococcus pneumoniae</em>, <em>Chlamydia pneumoniae</em></td>
                </tr>
                <tr>
                    <td><strong>Adult Cohorts (Typical Presentation)</strong></td>
                    <td><span class="highlight">Streptococcus pneumoniae</span> (Lancet-shaped Gram-positive diplococci)</td>
                    <td><em>Haemophilus influenzae</em>, <em>Moraxella catarrhalis</em></td>
                </tr>
                <tr>
                    <td><strong>Adult Cohorts (Atypical Presentation)</strong></td>
                    <td><em>Mycoplasma pneumoniae</em> (lacks a peptidoglycan cell wall)</td>
                    <td><em>Legionella pneumophila</em> (linked with contaminated aerosolized water networks), <em>Chlamydia psittaci</em></td>
                </tr>
                <tr>
                    <td><strong>Chronic Alcohol Use / Aspiration Risk</strong></td>
                    <td><em>Klebsiella pneumoniae</em> encapsulated Gram-negative rod</td>
                    <td>Anaerobic oral microbiota (<em>Peptostreptococcus</em>, <em>Fusobacterium</em>)</td>
                </tr>
            </tbody>
        </table>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Formulate the pathogenesis link between Mycoplasma pneumoniae infection, its classic tympanic membrane presentation, and autoimmune hemolytic sequelae.</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> <em>Mycoplasma pneumoniae</em> triggers **Bullous Myringitis** via direct localized inflammatory vesiculation of the tympanic membrane. Systemically, it prompts the generation of IgM autoantibodies directed against the I-antigen on human erythrocyte membranes. At lower temperatures, these **Cold Agglutinins** cause intravascular RBC auto-agglutination, resulting in a **Cold Agglutinin Hemolytic Anemia** phenotype.</p>
                </div>
            </details>
        </div>

        <h2>3. Pathophysiology: Architectural Stages of Lobar Pneumonia</h2>
        <p>Classic macro- and microscopic parenchymal modifications progress through four highly distinct chronological stages, originally codified by Laennec:</p>

        <div class="box-patho">
            <h4 style="margin-top:0; color:#bf360c;">⚡ Exudative & Tissue-Hepatic Metamorphosis Pathway</h4>
            Inhalation / Microaspiration of Microbial Pathogens & Failure of the Mucociliary Escalator Mechanics
            <span class="arrow">⬇</span>
            <strong>1. Stage of Congestion (Duration: Days 1–2)</strong><br>
            <span style="font-weight: normal; color: #555;">Marked intra-alveolar vascular engorgement, high-volume serous proteinaceous fluid exudation, heavy bacterial proliferation, minimal neutrophil recruitment. Lung feels boggy and heavy.</span>
            <span class="arrow">⬇</span>
            <strong>2. Stage of Red Hepatization (Duration: Days 3–4)</strong><br>
            <span style="font-weight: normal; color: #555;">Massive confluent intra-alveolar packing of <span class="highlight">Erythrocytes (RBCs)</span>, activated neutrophils, and dense structural fibrin meshes. The parenchymal architecture transforms, mimicking a firm, airless liver-like state (**Hepar**).</span>
            <span class="arrow">⬇</span>
            <strong>3. Stage of Grey Hepatization (Duration: Days 5–7)</strong><br>
            <span style="font-weight: normal; color: #555;">Progressive lysis and disintegration of intra-alveolar red cells. The exudate shifts toward a heavy dominance of fibrin networks and phagocytic macrophages. The lobe transitions to an airless, crisp, dry grey coloration.</span>
            <span class="arrow">⬇</span>
            <strong>4. Stage of Resolution (Duration: Day 8 Onward)</strong><br>
            <span style="font-weight: normal; color: #555;">Enzymatic digestion of fibrinous matrices via leukocyte-derived hydrolases; clearance via macrophage phagocytosis or productive expectoration. Parenchymal architecture returns to baseline.</span>
        </div>

        <h2>4. Clinical Presentation & Semiology</h2>
        
        <h3>Systemic Symptoms</h3>
        <ul>
            <li><strong>Abrupt Pyrexia:</strong> High-grade fever accompanied by shaking chills and severe rigors (highly characteristic of <em>S. pneumoniae</em>).</li>
            <li><strong>Tussis Dynamics:</strong> Initially a non-productive dry cough that transitions into a highly productive state displaying pathognomonic secretions:
                <ul>
                    <li><span class="highlight">Rusty-Colored Sputum:</span> Secondary to degraded intra-alveolar RBC components during red hepatization (<em>S. pneumoniae</em>).</li>
                    <li><span class="highlight">Red Currant Jelly Sputum:</span> Thick, viscous, mucoid bloody expectoration caused by structural tissue necrosis and capsule overproduction (<em>Klebsiella</em>).</li>
                </ul>
            </li>
            <li><strong>Pleuritic Chest Pain:</strong> Sharp, localized stabbing pain mediated by inflammation of the parietal pleura, exacerbated by respiratory excursions or coughing.</li>
            <li><strong>Ventilatory Stress:</strong> Escalating dyspnea and compensatory tachypnea.</li>
        </ul>

        <h3>Physical Signs of Alveolar Consolidation</h3>
        <p>Contrast these classic physical findings against alternative pleural pathologies to ensure accurate diagnosis:</p>
        <table>
            <thead>
                <tr>
                    <th style="width: 25%;">Physical Exam Step</th>
                    <th style="width: 75%;">Pathognomonic Findings in Lobar Consolidation</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Inspection</strong></td>
                    <td>Asymmetric respiratory lag with restricted thoracic excursion on the affected hemithorax.</td>
                </tr>
                <tr>
                    <td><strong>Palpation</strong></td>
                    <td>Marked increase in **Vocal Fremitus** (solid parenchymal tissue conducts low-frequency vocalizations better than air-filled alveoli).</td>
                </tr>
                <tr>
                    <td><strong>Percussion</strong></td>
                    <td><span class="highlight">Dull percussion note</span> over the consolidated margins (distinguished from the *stony dullness* characteristic of free pleural fluid accumulation).</td>
                </tr>
                <tr>
                    <td><strong>Auscultation</strong></td>
                    <td>
                        <ul>
                            <li>Harsh **Bronchial Breath Sounds** (loss of the normal vesicular filtering mechanism; expiration phase equals/exceeds inspiration).</li>
                            <li>Increased **Vocal Resonance** displaying **Egophony** ("E-to-A" nasal transition), **Whispering Pectoriloquy**, and fine, end-inspiratory crackles (crepitations) as collapsed alveoli snap open.</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>

        <h2>5. Diagnostic Workup</h2>
        <ul>
            <li><strong>Thoracic Radiography (Chest X-Ray PA & Lateral):</strong>
                <ul>
                    <li><em>Lobar Pattern:</em> Homogeneous dense opacity confined strictly to an anatomical lobe or segment, defined by a distinct <span class="highlight">Air Bronchogram Sign</span> (lucent, air-filled bronchi outlined against fluid-dense, non-aerated alveoli).</li>
                    <li><em>Bronchopneumonia Pattern:</em> Ill-defined, patchy, heterogeneous consolidations centered on small airways, demonstrating a predominantly basal and bilateral distribution.</li>
                </ul>
            </li>
        </ul>
        
        

        <ul>
            <li><strong>Microbiological Assessments:</strong> Expectorated sputum samples matching quality metrics (&lt; 10 epithelial cells, &gt; 25 PMNs per low-power field) are advanced to Gram staining and culture isolation.</li>
            <li><strong>Serologic Profiles:</strong> Complete blood count showing leukocytosis with a prominent left shift (neutrophilia); elevated quantitative C-reactive protein (CRP) and erythrocyte sedimentation rate (ESR).</li>
            <li><strong>Urinary Antigen Immunoassays:</strong> Rapid diagnostic profiling optimized for the detection of *Legionella pneumophila* (Serogroup 1) and *Streptococcus pneumoniae* metabolic products.</li>
        </ul>

        <h2>6. Risk Stratification: The CURB-65 Triage Scoring System</h2>
        <p>Utilized for calculating 30-day mortality risk in Community-Acquired Pneumonia to guide the clinical site-of-care decision matrix (Outpatient vs. Ward vs. ICU):</p>

        <div class="box-curb">
            <h4 style="margin-top:0; color:#1b5e20; font-size: 1.25em;">🛑 CURB-65 Metric Breakdown</h4>
            <ul style="list-style-type: none; padding-left: 0;">
                <li><strong>[C] Confusion:</strong> Acute cognitive disorientation defined by an Abbreviated Mental Test Score (AMTS) $\le$ 8 out of 10.</li>
                <li><strong>[U] Urea:</strong> Serum Blood Urea Nitrogen levels &gt; 7 mmol/L (&gt; 19 mg/dL).</li>
                <li><strong>[R] Respiratory Rate:</strong> Acute tachypnea matching or exceeding $\ge$ 30 breaths per minute.</li>
                <li><strong>[B] Blood Pressure:</strong> Hypotensive markers showing Systolic BP &lt; 90 mmHg OR Diastolic BP $\le$ 60 mmHg.</li>
                <li><strong>[65] Age:</strong> Patient age index $\ge$ 65 years.</li>
            </ul>
            <hr style="border: 0; border-top: 1px solid #a5d6a7; margin: 15px 0;">
            <p><strong>Clinical Disposition Action Plan:</strong></p>
            <ul>
                <li><strong>Cumulative Score 0–1:</strong> Low Risk Protocol ($\le$ 1.5% mortality). Formulate <span class="highlight">Outpatient Care (Domiciliary Management)</span>.</li>
                <li><strong>Cumulative Score 2:</strong> Moderate Risk Protocol (~9% mortality). Recommend <span class="highlight">Inpatient Admission to the Medical Ward</span>.</li>
                <li><strong>Cumulative Score 3–5:</strong> High Risk Protocol (15–40% mortality). Promptly initiate <span class="highlight">Intensive Care Unit (ICU) Evaluation and Admission</span>.</li>
            </ul>
        </div>

        <h2>7. Empirical Antimicrobial Therapeutics & Complications</h2>
        
        <div class="box-mgmt">
            <h4 style="color:#0d47a1; margin-top:0; font-size: 1.25em;">💊 Site-Stratified Empirical Antibiotic Matrix</h4>
            
            <p><strong>Scenario A: Outpatient Management (CURB-65 Score 0–1)</strong></p>
            <ul>
                <li><em>Primary Monotherapy:</em> High-dose Oral **Amoxicillin** (500 mg to 1 g TID) targeting typical bacterial structures.</li>
                <li><em>Alternative Selection:</em> Oral **Macrolide** (Azithromycin 500 mg Day 1, followed by 250 mg daily OR Clarithromycin) or **Doxycycline** if penicillin allergies are documented or atypical pathogens are strongly suspected.</li>
            </ul>

            <p><strong>Scenario B: General Medical Ward Admission (CURB-65 Score 2)</strong></p>
            <ul>
                <li><em>Combination Synergy Protocol:</em> Intravenous **Beta-Lactam** (Ceftriaxone 1–2 g IV daily OR Co-amoxiclav 1.2 g IV TID) to cover typical strains **PLUS** an Oral/IV **Macrolide** (Clarithromycin 500 mg BID) to provide comprehensive protection against atypical pathogens.</li>
            </ul>

            <p><strong>Scenario C: Intensive Care Admission Suite (CURB-65 Score $\ge$ 3)</strong></p>
            <ul>
                <li><em>Escalated Combination Therapy:</em> Antipneumococcal/Antipseudomonal Beta-Lactam (**Piperacillin-Tazobactam** 4.5 g IV QID OR Cefepime) **PLUS** an Intravenous **Macrolide** (Azithromycin) or an advanced Respiratory Fluoroquinolone (**Levofloxacin** 750 mg IV daily).</li>
                <li><em>MRSA Risk Modification:</em> Add **Vancomycin** (trough targeted to 15–20 mcg/mL) or **Linezolid** (600 mg IV BID).</li>
            </ul>
        </div>

        <h3>Pathological Complications</h3>
        <ul>
            <li><strong>Parapneumonic Effusion & Empyema:</strong> Exudative fluid migration into the pleural space; transitions into empyema if frank purulent fluid, positive Gram stains, or macroscopic loculations develop (requiring chest tube thoracostomy).</li>
            <li><strong>Necrotizing Pneumonia & Lung Abscess:</strong> Cavitary liquefaction necrosis within the lung parenchyma (classically driven by virulent strains of <em>S. aureus</em>, <em>K. pneumoniae</em>, or polymicrobial anaerobes).</li>
            <li><strong>Acute Respiratory Distress Syndrome (ARDS):</strong> Diffuse inflammatory alveolar-capillary membrane injury leading to non-cardiogenic pulmonary edema and refractory hypoxemia.</li>
            <li><strong>Severe Systemic Sepsis & Septic Shock.</strong></li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Define the radiological mechanism of the "Silhouette Sign" and map its localization properties within the distinct fields of the left and right lung fields.</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> The **Silhouette Sign** occurs when two structures of similar radiodensity (e.g., fluid/consolidated lung tissue and the muscular heart border) lie in direct anatomical contiguity, causing the normal sharp dividing border between them to be obliterated on a chest X-ray. 
                    <br>• Obliteration of the **Right Heart Border** localizes the consolidation to the **Right Middle Lobe**.
                    <br>• Obliteration of the **Left Heart Border** localizes the consolidation to the **Lingula segment of the Left Upper Lobe**.</p>
                </div>
            </details>
        </div>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High Yield)</h3>
            <p><em>Examine the integrated core curriculum above and formulate responses to these examiner scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>What is the chemical or cellular driver behind the unique "red currant jelly" sputum seen in severe Klebsiella infections?</li>
                <li>Provide the exact pathophysiologic definition of an "Air Bronchogram" as seen on a chest radiograph.</li>
                <li>During which exact stage of lobar pneumonia does the cut surface of the lung appear gray-brown, dry, and distinctly firm, mimicking hepatic architecture?</li>
                <li>What is the precise millimeter-per-liter (or milligram-per-deciliter) threshold value assigned to the Blood Urea Nitrogen component in the CURB-65 triage tool?</li>
                <li>An HIV-positive patient with a CD4+ T-cell count of &lt; 200 cells/$\mu$L presents with subacute dyspnea and dry cough. What organism is the most likely culprit, and what classic diagnostic stain is utilized?</li>
            </ol>

            <details style="margin-top: 20px;">
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol>
                        <li>The appearance is driven by <strong>tissue necrosis</strong> combined with alveolar hemorrhage and the overproduction of **thick capsular polysaccharides** by the replicating *Klebsiella pneumoniae* bacilli.</li>
                        <li>An **Air Bronchogram** refers to the visualization of dark, air-filled bronchi fluid-dynamically outlined against surrounding alveoli that have become filled with fluid, pus, or dense inflammatory exudate. It confirms that the underlying pathology is a true parenchymal consolidation rather than a simple pleural fluid collection or complete lobar atelectasis.</li>
                        <li>The **Stage of Grey Hepatization** (typically occurring on Days 5–7 of the untreated disease process).</li>
                        <li>A serum Urea concentration greater than **7 mmol/L** (which corresponds directly to a Blood Urea Nitrogen [BUN] value greater than **19 mg/dL**).</li>
                        <li>***Pneumocystis jirovecii* Pneumonia (PCP)**. The classic diagnostic staining method utilizes **Gomori Methenamine Silver (GMS) Staining** on induced sputum or bronchoalveolar lavage fluid to visualize the characteristic wall structures of the fungal cysts.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>

      <script>
        // Script to automatically expand details when printing
        window.onbeforeprint = function() {
            const details = document.querySelectorAll("details");
            details.forEach(detail => detail.setAttribute("open", ""));
        };
      </script>
    `
},

"empirical-treatment-pneumonia": {
    title: "Empirical Treatment of Pneumonia",
    videoUrl: "coming-soon",
    duration: "45 mins",
    notes: `
      <style>
        @media print {
            .pneumo-treatment { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .pneumo-treatment details { display: block; }
            .pneumo-treatment details[open] summary ~ * { animation: none; }
        }
        .pneumo-treatment { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .pneumo-treatment h1 { color: #000080; border-bottom: 4px solid #000080; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .pneumo-treatment h2 { color: #000080; background-color: #e8eaf6; border-left: 6px solid #1a237e; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .pneumo-treatment h3 { color: #b71c1c; margin-top: 20px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .pneumo-treatment .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .pneumo-treatment .regimen-box { border: 2px solid #333; border-radius: 8px; margin: 20px 0; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .pneumo-treatment .regimen-header { background-color: #283593; color: white; padding: 12px 15px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; }
        .pneumo-treatment .regimen-content { padding: 15px; background-color: #f5f5f5; }
        .pneumo-treatment .sub-group { background-color: white; border-left: 4px solid #fbc02d; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); border-radius: 0 4px 4px 0; }
        .pneumo-treatment table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        .pneumo-treatment td { padding: 8px; vertical-align: top; border-bottom: 1px solid #eee; }
        .pneumo-treatment tr:last-child td { border-bottom: none; }
        .pneumo-treatment .recall-box { background-color: #fff0f6; border: 2px dashed #d81b60; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .pneumo-treatment details summary { cursor: pointer; color: #c2185b; font-weight: bold; outline: none; }
        .pneumo-treatment .criteria-box { background-color: #e0f2f1; border: 2px solid #00695c; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .pneumo-treatment .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .pneumo-treatment .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .pneumo-treatment ul, .pneumo-treatment ol { padding-left: 20px; margin-bottom: 1rem; }
        .pneumo-treatment li { margin-bottom: 0.5rem; }
      </style>

      <div class="pneumo-treatment">
        <h1>Empirical Treatment of Acute Lobar Pneumonia (CAP)</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Clinical Management Protocol: Risk Stratification, IDSA/ATS Guidelines, and Antimicrobial Stewardship
        </p>

        <h2>1. Principles of Empirical Stewardship & Stratification</h2>
        <p><strong>Clinical Strategy:</strong> Initiating targeted antimicrobial coverage before isolating the specific microbiological pathogen through blood/sputum cultures. Prescribing selections target the most statistically likely pathogens—primarily <em>Streptococcus pneumoniae</em>, <em>Haemophilus influenzae</em>, and atypical respiratory flora (<em>Mycoplasma pneumoniae</em>, <em>Chlamydophila pneumoniae</em>)—calibrated against localized resistance patterns.</p>
        
        <ul>
            <li><strong>The Golden Window:</strong> The initial broad-spectrum antimicrobial dose must be administered <span class="highlight">within 4 hours</span> of clinical diagnosis. Early administration correlates directly with a reduction in sepsis progression, mechanical ventilation requirements, and overall inpatient mortality.</li>
            <li><strong>Disposition Triaging:</strong> Objective localization of treatment (Outpatient vs. Inpatient Ward vs. Intensive Care Unit) is driven by verified severity scoring indices, primarily the **CURB-65 Criteria** or the more comprehensive **Pneumonia Severity Index (PSI)**.</li>
        </ul>

        <div class="criteria-box">
            <h4 style="margin-top:0; color:#00695c; font-size: 1.15em;">📊 CURB-65 Severity Scoring Framework for Disposition</h4>
            <p>Assign 1 point for each verified clinical indicator present:</p>
            <ul style="margin-top: 5px;">
                <li><strong>C – Confusion:</strong> New-onset disorientation to person, place, or time.</li>
                <li><strong>U – Urea:</strong> Serum Blood Urea Nitrogen (BUN) concentration &gt; 19 mg/dL (&gt; 7 mmol/L).</li>
                <li><strong>R – Respiratory Rate:</strong> Tachypnea $\ge 30\text{ breaths/min}$.</li>
                <li><strong>B – Blood Pressure:</strong> Hypotension verified by a Systolic BP &lt; 90 mmHg OR Diastolic BP &le; 60 mmHg.</li>
                <li><strong>65 – Age:</strong> Patient age $\ge 65\text{ years}$.</li>
            </ul>
            <p style="margin-bottom: 0; font-weight: bold; color: #004d40;">
                ➔ Score 0–1: Low Risk (Outpatient management home-safe)<br>
                ➔ Score 2: Moderate Risk (Indicates brief inpatient admission or close observation)<br>
                ➔ Score 3–5: High Risk (Mandatory inpatient admission; evaluate for ICU if score &ge; 4)
            </p>
        </div>

        <h2>2. Targeted Antibiotic Regimens (By Patient Risk Group)</h2>
        <p><em>Aligned with the consensus guidelines of the Infectious Diseases Society of America (IDSA) and the American Thoracic Society (ATS).</em></p>

        <div class="regimen-box">
            <div class="regimen-header">Group A: Outpatient Management (Home Optimization)</div>
            <div class="regimen-content">
                
                <div class="sub-group">
                    <strong style="color: #1a237e; font-size: 1.05em;">1. Previously Healthy Individuals (No systemic antimicrobials within the past 90 days)</strong>
                    <br><span style="font-style: italic; color: #555;">Pathogen Profile: Penicillin-sensitive S. pneumoniae, Mycoplasma, Chlamydophila.</span>
                    <ul style="margin-top: 8px;">
                        <li><strong>Option 1 (Preferred Monotherapy):</strong> High-dose <span class="highlight">Amoxicillin</span> (1 g orally, Three Times Daily [TDS]). Provides optimal coverage against standard penicillin-binding protein targets.</li>
                        <li><strong>Option 2 (Alternative Monotherapy):</strong> <span class="highlight">Doxycycline</span> (100 mg orally, Twice Daily [BD]). Excellent choice if atypical coverage is highly prioritized or if the patient has a mild penicillin allergy.</li>
                        <li><strong>Option 3 (Macrolide Monotherapy):</strong> <span class="highlight">Azithromycin</span> (500 mg orally on Day 1, followed by 250 mg daily) or Clarithromycin. <ul style="margin-top: 2px; list-style-type: square;"><li><strong style="color: #b71c1c;">Stewardship Warning:</strong> Only use as monotherapy in regions where local macrolide resistance among *S. pneumoniae* isolates is strictly documented to be &lt; 25%.</li></ul></li>
                    </ul>
                </div>

                <div class="sub-group">
                    <strong style="color: #1a237e; font-size: 1.05em;">2. Outpatients with Significant Comorbidities (Diabetes Mellitus, COPD, Chronic Heart/Renal/Hepatic Disease, Malignancy)</strong>
                    <br><span style="font-style: italic; color: #555;">Pathogen Profile: Beta-lactamase producing H. influenzae, Moraxella catarrhalis, drug-resistant S. pneumoniae (DRSP).</span>
                    <ul style="margin-top: 8px;">
                        <li><strong>Preferred Combination Therapy:</strong>
                            <br>An oral Beta-lactamase stable agent: <span class="highlight">Co-amoxiclav (Amoxicillin-Clavulanate)</span> 2 g daily in divided doses, or an oral 3rd generation cephalosporin (Cefpodoxime 200 mg BD)
                            <br><strong style="color: #e65100;">PLUS</strong>
                            <br>An oral Macrolide (<span class="highlight">Azithromycin</span> 500 mg daily) OR oral Doxycycline 100 mg BD.
                        </li>
                        <li><strong>Alternative Monotherapy:</strong>
                            <br>A single oral <span class="highlight">Respiratory Fluoroquinolone</span>: Levofloxacin (750 mg daily) or Moxifloxacin (400 mg daily).
                        </li>
                    </ul>
                </div>

            </div>
        </div>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Formulate the exact pharmacological rationale explaining why Ciprofloxacin is excluded from the "Respiratory Fluoroquinolones" classification despite belonging to the same drug class.</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> <strong>Ciprofloxacin has poor intrinsic in-vitro activity against Gram-positive cocci</strong>, particularly <em>Streptococcus pneumoniae</em>, which remains the number one bacterial cause of Community-Acquired Pneumonia. While ciprofloxacin achieves high tissue distribution and is effective against Gram-negative bacilli like <em>Pseudomonas aeruginosa</em>, its structural design lacks the enhanced affinity for Gram-positive DNA gyrase and topoisomerase IV found in advanced **Respiratory Fluoroquinolones** such as <strong>Levofloxacin</strong> and <strong>Moxifloxacin</strong>.</p>
                </div>
            </details>
        </div>

        <div class="regimen-box">
            <div class="regimen-header" style="background-color: #00695c;">Group B: Inpatient Medical-Surgical Ward (Non-ICU Admission)</div>
            <div class="regimen-content">
                <p><strong>Standard First-Line Regimen (Intravenous Beta-Lactam + Macrolide Adjuvant):</strong></p>
                <ul>
                    <li>IV <span class="highlight">Ceftriaxone</span> (1–2 g intravenously, Once Daily [OD]) OR IV Ampicillin-Sulbactam (1.5–3.0 g every 6 hours).</li>
                    <li><strong>PLUS</strong></li>
                    <li>Oral or IV <span class="highlight">Azithromycin</span> (500 mg daily) to provide atypical coverage and leverage its anti-inflammatory effects.</li>
                </ul>
                <p><strong>Alternative Strategy (Severe Beta-Lactam Hypersensitivity / Allergy):</strong></p>
                <ul>
                    <li>IV Monotherapy with a Respiratory Fluoroquinolone: <span class="highlight">Levofloxacin</span> (750 mg IV daily) or Moxifloxacin (400 mg IV daily).</li>
                </ul>
            </div>
        </div>

        <div class="regimen-box">
            <div class="regimen-header" style="background-color: #b71c1c;">Group C: Inpatient Intensive Care Unit (Severe CAP)</div>
            <div class="regimen-content">
                <p style="font-style: italic; color: #222;">Severe CAP mandates prompt, dual-coverage anti-infective therapy targeting both macro-organisms and atypical biological structures simultaneously.</p>
                
                <div class="sub-group" style="border-left-color: #b71c1c;">
                    <strong style="color: #b71c1c;">Standard Empiric ICU Protocol</strong>
                    <br>IV <span class="highlight">Ceftriaxone</span> (2 g IV daily) OR IV Ampicillin-Sulbactam (3 g IV every 6 hours)
                    <br><strong>PLUS</strong>
                    <br>IV <span class="highlight">Azithromycin</span> (500 mg daily) OR IV <span class="highlight">Levofloxacin</span> (750 mg daily).
                </div>

                <div class="sub-group" style="border-left-color: #212121;">
                    <strong style="color: #212121;">Targeted Risk-Factor Modifications (Escalation Path)</strong>
                    <table>
                        <tr>
                            <td style="width: 35%;"><strong>If Patient Demonstrates Pseudomonas aeruginosa Risk Factors</strong><br><span style="font-size: 0.85em; color: #555;">(Chronic structural bronchiectasis, severe COPD requiring frequent systemic steroids, or prior isolation of the organism)</span></td>
                            <td>Swap out Ceftriaxone for an **Anti-Pseudomonal Beta-Lactam core**:
                                <br>• <span class="highlight">Piperacillin-Tazobactam</span> (4.5 g IV every 6 hours)
                                <br>• Cefepime (2 g IV every 8 hours)
                                <br>• Meropenem (1 g IV every 8 hours).
                            </td>
                        </tr>
                        <tr>
                            <td><strong>If Patient Demonstrates MRSA Risk Factors</strong><br><span style="font-size: 0.85em; color: #555;">(Prior history of MRSA colonization, presentation with necrotizing cavitary pneumonia, or secondary bacterial infection following acute Influenza)</span></td>
                            <td>Maintain the baseline regimen and add an anti-MRSA agent with optimal pulmonary tissue penetration:
                                <br>• <span class="highlight">Vancomycin</span> (IV trough-guided dosing)
                                <br>• <span class="highlight">Linezolid</span> (600 mg IV or orally, Twice Daily [BD]).
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        <h2>3. Treatment Duration & De-escalation Dynamics</h2>
        
        <div class="criteria-box" style="background-color: #ffffff; border-color: #004d40;">
            <h3 style="margin-top:0; color:#004d40;">⏳ Stewardship Metric: Duration of Therapy</h3>
            <ul>
                <li><strong>Uncomplicated CAP Rule:</strong> Maintain antibiotic therapy for a minimum of <span class="highlight">5 to 7 days</span>.</li>
                <li><strong>Safe Discontinuation Criteria:</strong> The patient must be objectively afebrile ($< 37.8^\circ\text{C}$ / $100^\circ\text{F}$) for 48 to 72 hours and display no more than one sign of clinical instability (e.g., tachypnea, tachycardia, hypotension) before stopping treatment.</li>
                <li><strong>Mandatory Prolonged Regimens:</strong> Therapy must be extended beyond the standard window (often 14–21 days) if pneumonia is complicated by lung abscess formation, empyema, or if the confirmed pathogen is *Pseudomonas aeruginosa* or *MRSA*.</li>
            </ul>
        </div>

        <div class="criteria-box" style="background-color: #fff3e0; border-color: #ef6c00;">
            <h3 style="margin-top:0; color:#e65100;">🔄 Clinical Criteria for Safe IV-to-Oral Switch</h3>
            <p>Transitioning from intravenous to oral medication should occur as soon as the patient meets all of the following physiological criteria:</p>
            <ol>
                <li><strong>Hemodynamic Stability:</strong> Intact autoregulation without requiring active vasopressor or fluid resuscitation.</li>
                <li><strong>Objective Clinical Improvement:</strong> Documented downward trend in white blood cell counts, resolution of tachypnea, and an afebrile presentation on two consecutive clinical charts.</li>
                <li><strong>Intact Gastrointestinal Function:</strong> Functional, accessible gastrointestinal tract with the patient demonstrating the ability to swallow and swallow safely without nausea or vomiting.</li>
            </ol>
        </div>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva</h3>
            <p><em>Evaluate your clinical reasoning and prepare for bedside or locker-room questioning:</em></p>
            <ol style="margin-left: 20px;">
                <li>Identify and state two primary "Respiratory Fluoroquinolones" used in modern hospital practice.</li>
                <li>What is the standard empirical adult dosing regimen for Azithromycin when managing an inpatient ward pneumonia case?</li>
                <li>If a patient with chronic alcoholism presents with "Red Currant Jelly Sputum," what pathogen should you suspect, and what is your first-line antibiotic choice?</li>
                <li>Explain why Daptomycin is clinically ineffective for treating MRSA pneumonia, despite having strong in-vitro activity against Gram-positive pathogens.</li>
                <li>Identify the drug class of choice for managing atypical pneumonia caused by Mycoplasma pneumoniae, and explain its mechanism of action.</li>
            </ol>
            
            <details style="margin-top: 20px;">
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>The two primary respiratory fluoroquinolones are <strong>Levofloxacin</strong> (typically dosed at 750 mg daily) and <strong>Moxifloxacin</strong> (dosed at 400 mg daily).</li>
                        <li>The standard inpatient dose is <strong>500 mg intravenously or orally once daily (OD)</strong>, typically used as part of a combination regimen with a beta-lactam core.</li>
                        <li>You should suspect <strong>Klebsiella pneumoniae</strong>. The preferred first-line empiric choice is an intravenous third-generation cephalosporin such as <strong>Ceftriaxone</strong>, or an antipseudomonal penicillin/beta-lactamase inhibitor combo if nosocomial risks are present.</li>
                        <li><strong>Daptomycin is bound and completely inactivated by pulmonary surfactant</strong> in the alveoli. Because it cannot remain free or functional within the lung parenchyma, it is clinically useless for respiratory infections and can lead to rapid treatment failure.</li>
                        <li><strong>Macrolides</strong> (such as <strong>Azithromycin</strong>) or tetracyclines (such as <strong>Doxycycline</strong>). Macrolides work by <strong>reversibly binding to the 50S ribosomal subunit</strong> of the bacteria, which inhibits transpeptidation and translocation, halting bacterial protein synthesis.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"respiratory-system": {
    title: "Respiratory System",
    videoUrl: "coming-soon",
    duration: "45 mins",
    notes: `
      <style>
        @media print {
            .resp-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .resp-notes details { display: block; }
            .resp-notes details[open] summary ~ * { animation: none; }
        }
        .resp-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .resp-notes h1 { color: #000080; border-bottom: 4px solid #000080; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .resp-notes h2 { color: #000080; background-color: #f0f8ff; border-left: 6px solid #8B0000; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .resp-notes h3 { color: #8B0000; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .resp-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #333; border: 1px solid #ffeeba; }
        .resp-notes .box-red { background-color: #ffebee; border: 2px solid #c62828; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 3px 3px 8px rgba(0,0,0,0.05); }
        .resp-notes .box-blue { background-color: #e3f2fd; border: 2px solid #1976d2; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .resp-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .resp-notes th, .resp-notes td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; vertical-align: top; }
        .resp-notes th { background-color: #000080; color: white; text-transform: uppercase; font-size: 0.9em; }
        .resp-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .resp-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d81b60; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .resp-notes details summary { cursor: pointer; color: #c2185b; font-weight: bold; outline: none; }
        .resp-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .resp-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .resp-notes ul, .resp-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .resp-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="resp-notes">
        <h1>Respiratory System: High-Yield Clinical Notes</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Exam Core Focus: Opportunistic Fungal Pathogens, Parenchymal Necrosis, Hemodynamic vs. Permeability Edema, and Critical Care Intubation Bundles
        </p>

        <h2>1. Pneumocystis Jirovecii Pneumonia (PCP)</h2>
        <p><strong>Etiology & Pathobiology:</strong> Caused by <em>Pneumocystis jirovecii</em>. Although phylogenetically classified as a <span class="highlight">Yeast-like Fungus</span> based on ribosomal RNA analysis, its cell membrane contains cholesterol instead of ergosterol. Consequently, it **does not respond to standard antifungal agents** (amphotericin B, azoles).</p>
        
        <div class="box-blue">
            <strong>Clinical Vulnerability Factors:</strong>
            <ul>
                <li><strong>HIV/AIDS-Driven Immunosuppression:</strong> Represents the classic index opportunistic infection, typically surfacing when the absolute <span class="highlight">CD4+ T-lymphocyte count falls below 200/µL</span>.</li>
                <li><strong>Non-HIV Immunosuppression:</strong> Solid organ transplant recipients on maintenance calcineurin inhibitors, cytotoxic oncological chemotherapy, or individuals on high-dose systemic corticosteroids.</li>
            </ul>
        </div>

        <h3>Clinical Presentation Profile</h3>
        <ul>
            <li><strong>Classic Clinical Triad:</strong> Subacute onset of low-grade pyrexia, a non-productive/dry cough, and progressive exertional dyspnea.</li>
            <li><strong>Exertional Desaturation:</strong> Characterized by a distinctive, striking clinical discordance where resting oxygen saturations may appear near-normal, but undergo profound, rapid de-saturation upon minimal physical exertion.</li>
        </ul>

        <h3>Diagnostic Workup</h3>
        <ul>
            <li><strong>Chest Radiography (CXR):</strong> Demonstrates classic bilateral, symmetric perihilar reticular or interstitial opacities (<span class="highlight">Bat-wing distribution</span>). Early stages may present with entirely normal imaging.</li>
            <li><strong>High-Resolution CT (HRCT):</strong> Reveals diffuse, patchy, patch-like **Ground Glass Opacities (GGO)** representing alveoli partially filled with proteinaceous, foamy exudate.</li>
            <li><strong>Cytological Staining (Induced Sputum or BAL):</strong> Microscopic analysis using the <span class="highlight">Gomori Methenamine Silver (GMS) stain</span> identifies characteristic round, crescentic, or collapsed ("crushed ping-pong ball") fungal cysts.</li>
            <li><strong>Serum Biomarkers:</strong> Markedly elevated Lactate Dehydrogenase (LDH &gt; 450 IU/L) due to diffuse lung parenchymal injury.</li>
        </ul>
        

        <h3>Therapeutic Management</h3>
        <ul>
            <li><strong>First-Line Targeted Therapy:</strong> High-dose <span class="highlight">Co-trimoxazole (Trimethoprim-Sulfamethoxazole / TMP-SMX)</span> administered either intravenously or orally (15–20 mg/kg/day of the TMP component) split into divided doses for a strict 21-day course.</li>
            <li><strong>Adjuvant Corticosteroid Protocol:</strong> Indicate systemic **Prednisolone** within 72 hours of antimicrobial initiation if severe hypoxia is verified ($\text{PaO}_2 < 70\text{ mmHg}$ on room air OR an alveolar-arterial oxygen gradient, $\text{P(A-a)O}_2 \ge 35\text{ mmHg}$).</li>
            <li><strong>Chemoprophylactic Window:</strong> Initiate daily low-dose oral Co-trimoxazole (single-strength or double-strength tablet daily) as primary prophylaxis in HIV-infected individuals when the CD4 count drops below 200/µL.</li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Explain why the introduction of targeted antimicrobials can trigger severe respiratory decline in PCP, and why adjunctive steroids mitigate this.</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> The rapid lysis of <em>Pneumocystis jirovecii</em> organisms by antibiotics releases a massive load of fungal surface antigens into the alveolar spaces. This induces a profound, paradoxical <strong>inflammatory surge</strong> mediated by host macrophages and neutrophils, causing a sudden worsening of gas exchange and severe hypoxia. Administering <strong>systemic corticosteroids</strong> suppresses this treatment-induced inflammatory response, protecting the alveolar-capillary membrane and reducing mortality.</p>
                </div>
            </details>
        </div>

        <h2>2. Necrotizing Pneumonia & Parenchymal Destruction</h2>
        <p><strong>Pathological Characterization:</strong> A highly destructive form of pulmonary infection marked by progressive liquefactive necrosis of the lung parenchyma, culminating in tissue breakdown and the formation of multiple small, thin-walled cavities within areas of consolidation.</p>

        <h3>Etiology & High-Virulence Pathogens</h3>
        <ul>
            <li><strong>Staphylococcus aureus:</strong> Primarily strains producing the <span class="highlight">Panton-Valentine Leukocidin (PVL) toxin</span> (frequently associated with virulent Community-Acquired MRSA), which creates pores in host white blood cells to drive extensive tissue necrosis.</li>
            <li><strong>Klebsiella pneumoniae:</strong> Classically termed **Friedländer’s Pneumonia**. Commonly seen in chronic alcoholics or diabetic patients, producing a thick, mucoid, blood-tinged sputum ("currant jelly sputum").</li>
            <li><strong>Pseudomonas aeruginosa:</strong> Frequently seen in neutropenic patients or individuals with structural lung disease (cystic fibrosis, bronchiectasis).</li>
            <li><strong>Polymicrobial Anaerobes:</strong> Driven by micro-aspiration of oropharyngeal flora (e.g., *Bacteroides*, *Peptostreptococcus*, *Fusobacterium*) in patients with altered consciousness or severe periodontal disease.</li>
        </ul>

        <h3>Structural & Vascular Complications</h3>
        <ul>
            <li><strong>Lung Abscess Formation:</strong> Coalescence of necrotic zones into a large, dominant pathological cavity filled with purulent debris, presenting radiographically with a distinct **air-fluid level**.</li>
            <li><strong>Pulmonary Gangrene:</strong> A catastrophic complication where inflammatory occlusion of local nutrient arteries causes ischemic necrosis and sloughing of an entire lung segment or lobe.</li>
            <li><strong>Bronchopleural Fistula (BPF):</strong> Erosion of a peripheral necrotic cavity into the pleural space, establishing a tract that leads to a complicated **pyopneumothorax** (simultaneous air and pus in the pleural cavity).</li>
        </ul>

        <h2>3. Acute Pulmonary Edema</h2>
        <p><strong>Pathophysiologic Stratification:</strong> Characterized by the rapid movement of fluid from the pulmonary capillaries into the interstitial spaces and alveoli. It is divided into **Cardiogenic Edema** (elevated hydrostatic pressure due to left-sided heart failure) and **Non-Cardiogenic Edema / ARDS** (loss of alveolar-capillary membrane integrity due to direct or indirect inflammatory injury).</p>

        <h3>Clinical Presentation & Semiology</h3>
        <ul>
            <li><strong>Cardiorespiratory Symptoms:</strong> Acute, terrifying onset of dyspnea, orthopnea, paroxysmal nocturnal dyspnea (PND), and a sensation of suffocation.</li>
            <li><strong>Pathognomonic Secretions:</strong> Production of copious, <span class="highlight">pink, frothy sputum</span>, driven by transudative fluid mixing with air and red blood cells in the alveolar spaces.</li>
            <li><strong>Physical Examination Signs:</strong> Widespread, symmetric bilateral basal end-expiratory crackles (crepitations) that ascend as severity increases, coupled with a tachypneic $S_3$ gallop rhythm.</li>
        </ul>

        <div class="box-red">
            <h4 style="margin-top:0; color:#b71c1c; font-size: 1.25em;">🚨 Emergency Management Protocol: The LMNOP Regimen</h4>
            <p><em>Indicated strictly for the stabilization of Acute Cardiogenic (Hemodynamic) Pulmonary Edema:</em></p>
            <ul style="margin-top: 5px;">
                <li><strong>L – Lasix (Furosemide):</strong> Administered via immediate IV bolus. It exerts an initial, fast-acting venodilatory effect that reduces cardiac preload within minutes, followed by loop diuresis to eliminate fluid overload.</li>
                <li><strong>M – Morphine Sulfate:</strong> Administered via cautious IV titration. It provides excellent anxiolysis to lower sympathetic drive and acts as a mild venodilator, reducing preload.</li>
                <li><strong>N – Nitrates (Nitroglycerin):</strong> Administered sublingually or via continuous IV infusion. Acts as a potent venodilator at lower doses (reducing preload) and an arteriodilator at higher doses (reducing afterload). *Contraindicated if systolic blood pressure is below 90 mmHg.*</li>
                <li><strong>O – Oxygen Therapy & Ventilatory Support:</strong> Delivered via high-flow masks or non-invasive positive pressure ventilation (**NIV / CPAP**). CPAP provides positive pressure to push fluid out of the alveoli back into the vasculature and recruits collapsed alveoli.</li>
                <li><strong>P – Positioning:</strong> Place the patient in a strictly **propped-up, high-Fowler's position** with the legs dangling over the edge of the bed. This harnesses gravity to pool blood in the lower extremities, lowering venous return to the failing left ventricle.</li>
            </ul>
        </div>

        <h2>4. Ventilator-Associated Pneumonia (VAP)</h2>
        <p><strong>Nosocomial Definition:</strong> A sub-type of hospital-acquired pneumonia that develops <span class="highlight">&gt; 48 hours</span> after endotracheal intubation and mechanical ventilation.</p>

        <h3>Evidence-Based Prevention Care Bundle</h3>
        <p><em>A high-yield set of clinical interventions designed to prevent the micro-aspiration of colonized oropharyngeal and gastric secretions past the endotracheal tube cuff:</em></p>
        
        <ul>
            <li><strong>Optimized Head Elevation:</strong> Maintain the head of the bed continuously elevated between <span class="highlight">30 degrees and 45 degrees</span> to structurally limit gastroesophageal reflux and aspiration.</li>
            <li><strong>Oropharyngeal Decontamination:</strong> Perform scheduled oral care using **Chlorhexidine gluconate mouthwash** to lower the bacterial burden of dental plaque and saliva.</li>
            <li><strong>Daily "Sedation Vacations" & Weaning Trials:</strong> Conduct daily structured interruptions of sedative infusions to assess neurologic status and speed up extubation readiness.</li>
            <li><strong>Stress Ulcer Prophylaxis:</strong> Administer histamine-2 receptor antagonists ($H_2\text{RAs}$) or proton pump inhibitors (PPIs). *Note: While standard, this requires balancing because raising gastric pH can increase bacterial colonization of stomach fluids.*</li>
            <li><strong>Deep Vein Thrombosis (DVT) Prophylaxis:</strong> Sequential compression devices or low-molecular-weight heparin.</li>
            <li><strong>Continuous Subglottic Secretion Suctioning:</strong> Use specialized endotracheal tubes equipped with a dedicated suction port above the cuff to clear accumulated secretions before they slip into the lower airway.</li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Differentiate the microbiological patterns between Early-Onset and Late-Onset Ventilator-Associated Pneumonia.</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> 
                    <br>• <strong>Early-Onset VAP (&le; 4 days):</strong> Typically caused by community-acquired pathogens that happen to require ventilation, such as antibiotic-sensitive <em>Streptococcus pneumoniae</em>, <em>Haemophilus influenzae</em>, or Methicillin-Sensitive <em>Staphylococcus aureus</em> (MSSA). It generally carries a better prognosis.
                    <br>• <strong>Late-Onset VAP (&gt; 4 days):</strong> Driven by highly virulent **Multidrug-Resistant (MDR) hospital pathogens** that colonize the ICU environment. Primary culprits include <em>Pseudomonas aeruginosa</em>, <em>Acinetobacter baumannii</em>, Extended-Spectrum Beta-Lactamase (ESBL) producing Enterobacteriaceae, and Methicillin-Resistant <em>Staphylococcus aureus</em> (MRSA). These require broad, empiric dual-antibiotic coverage.</p>
                </div>
            </details>
        </div>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva</h3>
            <p><em>Evaluate your clinical retention against these common oral board examination questions:</em></p>
            <ol style="margin-left: 20px;">
                <li>Name the specific diagnostic histological stain used to highlight the cyst wall of Pneumocystis jirovecii.</li>
                <li>What does the acronym "PVL" signify in necrotizing Staphylococcal pneumonia, and what is its cellular mechanism of damage?</li>
                <li>State the primary drug of choice used for both primary prophylaxis and active treatment of Pneumocystis jirovecii pneumonia.</li>
                <li>Describe the radiographic finding known as the "Bat-wing appearance" and name two major cardiopulmonary pathologies that cause it.</li>
                <li>In the VAP prevention bundle, what is the minimum required angle for head-of-bed elevation, and what physiologic mechanism does it assist?</li>
            </ol>
            
            <details style="margin-top: 20px;">
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>The <strong>Gomori Methenamine Silver (GMS) stain</strong>. Under this stain, the cyst walls appear dark brown or black against a light green background, often looking like collapsed or crushed ping-pong balls.</li>
                        <li>It stands for <strong>Panton-Valentine Leukocidin</strong>. It is a cytotoxin produced by certain strains of *Staphylococcus aureus* that targets host immune cells. It binds to the plasma membranes of polymorphonuclear leukocytes (neutropenias, macrophages), forming pores that cause cell lysis and release destructive lysosomal enzymes into surrounding lung tissue, driving severe liquefactive necrosis.</li>
                        <li><strong>Co-trimoxazole</strong> (also called <strong>Trimethoprim-Sulfamethoxazole / TMP-SMX</strong> or Septran/Bactrim).</li>
                        <li>The **Bat-wing appearance** refers to bilateral, symmetric perihilar consolidations or interstitial opacities that spare the peripheral lung zones. It is classic for <strong>Acute Cardiogenic Pulmonary Edema</strong> and severe <strong>Pneumocystis jirovecii Pneumonia (PCP)</strong>.</li>
                        <li>A minimum angle of <strong>30 degrees to 45 degrees</strong>. This relies on gravity to keep gastric contents down, significantly decreasing the risk of gastroesophageal reflux and silent micro-aspiration of oral and gastric secretions past the endotracheal tube cuff.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"pulmonary-tuberculosis": {
    title: "Pulmonary Tuberculosis",
    videoUrl: "coming-soon",
    duration: "50 mins",
    notes: `
      <style>
        @media print {
            .tb-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .tb-notes details { display: block; }
            .tb-notes details[open] summary ~ * { animation: none; }
        }
        .tb-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .tb-notes h1 { color: #000080; border-bottom: 4px solid #000080; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .tb-notes h2 { color: #000080; background-color: #f0f8ff; border-left: 6px solid #8B0000; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .tb-notes h3 { color: #8B0000; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .tb-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #333; border: 1px solid #ffeeba; }
        .tb-notes .box-flowchart { background-color: #fff3e0; border: 2px solid #e65100; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; font-weight: bold; color: #bf360c; box-shadow: 3px 3px 8px rgba(0,0,0,0.05); }
        .tb-notes .box-treatment { background-color: #e8f5e9; border: 2px solid #2e7d32; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .tb-notes .box-algo { background-color: #e3f2fd; border: 2px solid #1565c0; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; }
        .tb-notes .arrow { display: block; font-size: 24px; color: #d84315; margin: 8px 0; }
        .tb-notes .arrow-blue { display: block; font-size: 24px; color: #1565c0; margin: 8px 0; }
        .tb-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .tb-notes th, .tb-notes td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; vertical-align: top; }
        .tb-notes th { background-color: #000080; color: white; text-transform: uppercase; font-size: 0.9em; }
        .tb-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .tb-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d81b60; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .tb-notes details summary { cursor: pointer; color: #c2185b; font-weight: bold; outline: none; }
        .tb-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .tb-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .tb-notes ul, .tb-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .tb-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="tb-notes">
        <h1>Pulmonary Tuberculosis</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Comprehensive Clinical Guide: Pathogenesis, National Tuberculosis Elimination Program (NTEP) Diagnostic Algorithms, and Chemotherapeutic Protocols
        </p>

        <h2>1. Diagnostic Frame & Etiology</h2>
        <p><strong>Definition:</strong> A chronic, progressive granulomatous infectious disease caused by members of the <em>Mycobacterium tuberculosis</em> complex. While it predominantly targets the well-oxygenated lung parenchyma (Pulmonary TB), it can undergo hematogenous or lymphatic dissemination to any organ system (Extrapulmonary TB).</p>
        
        <ul>
            <li><strong>Pathogen Characteristics:</strong> <em>Mycobacterium tuberculosis</em> is an obligate aerobic, slow-growing intracellular bacillus characterized by an outer envelope rich in complex lipids.</li>
            <li><strong>Transmission Dynamics:</strong> Propagated almost exclusively via the inhalation of microscopic <span class="highlight">Droplet Nuclei</span> (measuring 1–5 micrometers) suspended in air currents following coughing, sneezing, or phonation by an individual with active cavitary pulmonary disease.</li>
            <li><strong>Systemic Susceptibility Factors:</strong> Co-infection with HIV (the single most potent statistical driver of progression from latent to active status), Diabetes Mellitus, chronic malnutrition, immunosuppressive drug therapies, and occupational Silicosis.</li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Formulate the biochemical basis underlying the "Acid-Fastness" characteristic of Mycobacterium species during cytological staining.</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> The cell wall of <em>Mycobacterium tuberculosis</em> contains an extraordinarily high concentration of **Mycolic Acids** (long-chain branched fatty acids bonded to arabinogalactan-peptidoglycan complexes). This thick, waxy hydrophobic lipid barrier prevents water-soluble dyes from easily entering. However, once forced inside using a phenolic solvent and heat (as in the **Ziehl-Neelsen / Carbol Fuchsin stain**), the mycolic acid complex binds the dye tightly and resists decolorization even when treated with harsh **acid-alcohol solutions**.</p>
                </div>
            </details>
        </div>

        <h2>2. Pathogenesis & Granuloma Evolution</h2>
        <p>The progression from initial droplet exposure to tissue hypersensitivity and cavitary necrosis marks the classic immunologic battlefield of tuberculosis:</p>

        <div class="box-flowchart">
            <h4 style="margin-top:0; color:#bf360c;">⚡ Structural Evolution of Mycobacterial Infection</h4>
            Inhalation of Droplet Nuclei Containing Viable Bacilli → Bypass of Upper Airway Defenses to Reach the Alveoli
            <span class="arrow">⬇</span>
            Engulfment by Alveolar Macrophages → Sulfatides and Cord Factor Inhibit Phagolysosome Fusion, Allowing Intracellular Replication
            <span class="arrow">⬇</span>
            <strong>GHON FOCUS FORMATION</strong><br>
            <span style="font-weight: normal; color: #555;">Sub-pleural inflammatory nidus characterized by localized caseous necrosis, typically situated in the lower zone of the upper lobe or upper zone of the lower lobe.</span>
            <span class="arrow">⬇</span>
            Lymphatic Drainage of Free Bacilli and Antigen-Presenting Cells to Regional Peribronchial/Hilar Lymph Nodes
            <span class="arrow">⬇</span>
            <strong>PRIMARY COMPLEX FORMATION (GHON COMPLEX)</strong><br>
            <span style="font-weight: normal; color: #555;">Consists of the parenchymal Ghon Focus + Inflammatory Lymphangitis + Sentinel Hilar Lymphadenopathy.</span>
            <span class="arrow">⬇</span>
            Development of Type IV Delayed-Type Hypersensitivity & Cell-Mediated Immunity (Weeks 3–6)
            <span class="arrow">⬇</span>
            <strong>90% Clinical Resolution:</strong> Dystrophic Calcification & Fibrous Encasement (**Ranke Complex**)<br>➔ Transitions to **Latent Tuberculosis Infection (LTBI)**
            <span class="arrow">⬇</span>
            <strong>10% Immunological Failure / Reactivation Pathway (Post-Primary TB):</strong><br>
            <span style="font-weight: normal; color: #555;">Triggered by a decline in cell-mediated immunity. Macrophage-derived TNF-$\alpha$ and matrix metalloproteinases drive liquefactive caseous necrosis, destroying tissue to produce **Apical Cavitary Lesions** with prominent erosion into nearby bronchial vessels.</span>
        </div>
        

        <h2>3. Semiology & Clinical Presentation</h2>
        <ul>
            <li><strong>Constitutional Manifestations:</strong> A classic systemic profile featuring an <span class="highlight">evening rise of fever</span> (low-grade pyrexia demonstrating diurnal variation), drenching night sweats, progressive anorexia, and unexplained cachexia/weight loss.</li>
            <li><strong>Bronchopulmonary Symptoms:</strong>
                <ul>
                    <li>Persistent, unremitting cough lasting more than 2 weeks, progressing from an irritative dry hack to a productive mucopurulent cough.</li>
                    <li><strong>Hemoptysis:</strong> Ranges from mild blood-streaked sputum to life-threatening exsanguination, signifying structural cavity erosion into the pulmonary or bronchial circulation (frequently localized to a **Rasmussen's Aneurysm**).</li>
                    <li>Localized, pleuritic chest pain reflecting inflammatory pleural involvement.</li>
                </ul>
            </li>
        </ul>

        <h2>4. Diagnostic Framework: NTEP Algorithm</h2>
        <p>Current protocol emphasizes the utilization of **Upfront Molecular Diagnostics** (Nucleic Acid Amplification Testing) over traditional smear microscopy to optimize diagnostic speed, sensitivity, and drug resistance profiling.</p>

        <div class="box-algo">
            <h4 style="color:#1565c0; margin-top:0; font-size: 1.25em;">🔍 Screening & Diagnostic Algorithm for Presumptive Pulmonary TB</h4>
            
            <strong>Patient Presenting with Cough &gt; 2 Weeks, Unexplained Pyrexia, Weight Loss, OR Suggestive Chest Radiograph Findings</strong>
            <span class="arrow-blue">⬇</span>
            <strong>Indicate and Execute UPFRONT MOLECULAR NAAT (CBNAAT / TrueNat Assay)</strong><br>
            <span style="font-size: 0.9em; color: #555;">(Sputum Smear Microscopy is reserved as a secondary tool for monitoring therapeutic progress)</span>
            <span class="arrow-blue">⬇</span>
            
            <div style="display: flex; justify-content: space-around; text-align: left; margin-top: 15px; gap: 15px;">
                <div style="background: white; padding: 15px; border-radius: 8px; width: 50%; border: 1px solid #90caf9;">
                    <strong style="color: #2e7d32;">Scenario A: MTB DNA Detected</strong>
                    <br><span style="color: #555;">Immediately analyze the co-amplified Molecular Rifampicin Resistance Status:</span>
                    <ul style="margin-top: 5px; padding-left: 15px;">
                        <li><strong>Rifampicin-Sensitive:</strong> Initiate the standard 6-month daily Fixed-Dose Combination regimen for Drug-Sensitive TB.</li>
                        <li><strong>Rifampicin-Resistant:</strong> Isolate the patient from general wards and transfer to a specialized Drug-Resistant TB (DR-TB) center for second-line therapy.</li>
                    </ul>
                </div>
                <div style="background: white; padding: 15px; border-radius: 8px; width: 50%; border: 1px solid #90caf9;">
                    <strong style="color: #c62828;">Scenario B: MTB DNA Not Detected</strong>
                    <br><span style="color: #555;">Correlate with High-Resolution Chest X-ray (CXR) and clinical risk factors:</span>
                    <ul style="margin-top: 5px; padding-left: 15px;">
                        <li><strong>High Clinical Suspicion:</strong> Diagnose as **Clinically Diagnosed Pulmonary TB** and initiate standard therapy under close monitoring.</li>
                        <li><strong>Low Clinical Suspicion:</strong> Halt empirical anti-TB treatment and pursue alternative diagnoses (e.g., fungal infection, malignancy, atypical pneumonia).</li>
                    </ul>
                </div>
            </div>
        </div>

        <h2>5. National Tuberculosis Elimination Program (NTEP) Management Guidelines</h2>
        <p>The core strategy for managing **Drug-Sensitive Pulmonary Tuberculosis** relies on a daily, weight-banded, directly observed treatment short-course (DOTS) framework using Fixed-Dose Combinations (FDCs).</p>

        <div class="box-treatment">
            <h4 style="margin-top:0; color:#2e7d32; font-size: 1.25em;">💊 Standard Pharmacotherapeutic Regimen for Adults (New / Relapse Cases)</h4>
            
            <table style="background: white;">
                <thead>
                    <tr>
                        <th style="width: 25%;">Therapeutic Phase</th>
                        <th style="width: 20%;">Duration</th>
                        <th style="width: 55%;">Drug Composition & Regimen (Daily Fixed-Dose Combination)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Intensive Phase (IP)</strong></td>
                        <td>2 Months</td>
                        <td><strong>2 HRZE</strong><br>• **H**: Isoniazid<br>• **R**: Rifampicin<br>• **Z**: Pyrazinamide<br>• **E**: Ethambutol</td>
                    </tr>
                    <tr>
                        <td><strong>Continuation Phase (CP)</strong></td>
                        <td>4 Months</td>
                        <td><strong>4 HRE</strong><br>• **H**: Isoniazid<br>• **R**: Rifampicin<br>• **E**: Ethambutol</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Total Duration of Standard Regimen:</strong> 6 Months ($2\text{ HRZE} + 4\text{ HRE}$ daily).</p>
            <p style="font-size: 0.9em; color: #555; font-style: italic;">*Clinical Design Pearl: Unlike older international variations that drop Ethambutol during the continuation phase, NTEP retains it ($4\text{ HRE}$) to minimize the risk of treatment failure or relapse in settings with high baseline isoniazid resistance.*</p>
        </div>

        <h3>Pediatric TB Management Principles</h3>
        <ul>
            <li><strong>Pharmacokinetic Dose Scaling:</strong> Children require significantly higher milligram-per-kilogram doses compared to adults due to accelerated hepatic metabolism and rapid clearance pathways.</li>
            <li><strong>Drug Delivery:</strong> Utilizes specialized, water-soluble, dispersible FDC formulations flavored to improve adherence and prevent dose spitting.</li>
            <li><strong>Ethambutol Toxicity Profile:</strong> Found to be highly safe in pediatric patient populations. The risk of dose-dependent optic neuritis is exceedingly low when strictly managed within standard therapeutic weight bands.</li>
            <li><strong>Adjuvant Corticosteroid Protocol:</strong> Systemic steroids (e.g., Prednisolone 1–2 mg/kg/day) are strictly indicated in cases of concurrent **Tuberculous Meningitis** and **Tuberculous Pericardial Effusion** to mitigate severe fibrotic and inflammatory complications.</li>
        </ul>

        <h2>6. Drug-Resistant Tuberculosis Taxonomy</h2>
        <table>
            <thead>
                <tr>
                    <th style="width: 30%;">Classification Profile</th>
                    <th style="width: 70%;">Defining Resistance Parameters</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>MDR-TB</strong> (Multidrug-Resistant)</td>
                    <td>Demonstrates in-vitro or molecular resistance to at least <span class="highlight">Isoniazid AND Rifampicin</span>, the two foundational first-line agents.</td>
                </tr>
                <tr>
                    <td><strong>Pre-XDR TB</strong></td>
                    <td>Meets criteria for MDR-TB or Rifampicin-Resistant TB (RR-TB) and demonstrates additional resistance to **any Fluoroquinolone** agent (e.g., Levofloxacin or Moxifloxacin).</td>
                </tr>
                <tr>
                    <td><strong>XDR-TB</strong> (Extensively Drug-Resistant)</td>
                    <td>Meets criteria for MDR/RR-TB plus resistance to any Fluoroquinolone **AND** resistance to at least <span class="highlight">Bedaquiline OR Linezolid</span> (the high-potency WHO Group A second-line anti-TB drugs).</td>
                </tr>
            </tbody>
        </table>

        <h2>7. Destructive Anatomical Complications</h2>
        <ul>
            <li><strong>Exsanguinating Hemoptysis:</strong> Driven by inflammatory destruction and aneurysmal thinning of a pulmonary or bronchial artery branch running inside an active cavity wall (**Rasmussen's Aneurysm**).</li>
            <li><strong>Secondary Mycotic Colonization (Aspergilloma):</strong> Saprophytic growth of an *Aspergillus* fungal ball within a structurally distorted, old, healed tuberculous cavity.</li>
            <li><strong>Traction Bronchiectasis:</strong> Permanent, structural distortion and ectasia of the bronchial tree caused by severe parenchymal scarring and cicatricial fibrosis.</li>
            <li><strong>Extrapulmonary Dissemination:</strong> Hematogenous seeding resulting in Tuberculous Meningitis, musculoskeletal destruction (**Pott's Spine**), or ileocecal ileitis.</li>
        </ul>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High Yield)</h3>
            <p><em>Mastered the comprehensive clinical architecture above? Evaluate your performance against these standard board exam scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>Identify the precise anatomical location where a "Ghon Focus" most commonly forms, and explain the physiologic reason for this preference.</li>
                <li>What specific neuro-ophthalmologic toxicity requires systematic monitoring when a patient is receiving long-term Ethambutol therapy?</li>
                <li>Identify the gold-standard solid nutrient medium traditionally used to culture Mycobacterium tuberculosis, and state its approximate incubation duration.</li>
                <li>Provide the full clinical phrase for the acronym CBNAAT and name the primary genetic marker it detects alongside the target bacillus DNA.</li>
                <li>Explain the underlying vascular pathology and anatomical origin of "Rasmussen's Aneurysm".</li>
            </ol>
            
            <details style="margin-top: 20px;">
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol>
                        <li>The **Ghon Focus** forms most frequently in the sub-pleural zone of the **lower part of the upper lobe** or the upper part of the lower lobe. This is because droplet nuclei measuring 1–5 microns settle in these areas due to the higher volume of ventilation (airflow) directed toward the middle and lower lung zones during normal breathing.</li>
                        <li>**Optic Neuritis**. This presents as a gradual decrease in visual acuity, central scotomas, and a loss of **red-green color discrimination**. It requires immediate discontinuation of the drug.</li>
                        <li>**Lowenstein-Jensen (LJ) Medium**. Because *M. tuberculosis* is a slow-growing organism with a long generation time, it requires **3 to 6 weeks** of incubation to show visible, rough, buff-colored colonies.</li>
                        <li>**Cartridge Based Nucleic Acid Amplification Test**. It simultaneously amplifies the *rpoB* gene sequence of *M. tuberculosis* to detect the bacillus and identify mutations that cause **Rifampicin resistance**.</li>
                        <li>A **Rasmussen's Aneurysm** is an aneurysm that forms in a branch of the **pulmonary artery** located in the wall of a chronic tuberculous cavity. The progressive inflammatory erosion of the artery's outer adventitia and media layers weakens the vessel wall, leading to localized dilation and a high risk of rupture, which can cause massive, fatal hemoptysis.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"vitreous-disorders": {
    title: "Vitreous Disorders",
    videoUrl: "coming-soon",
    duration: "35 mins",
    notes: `
      <style>
        .vitreous-disorders-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .vitreous-disorders-notes h1 { color: #000080; border-bottom: 4px solid #000080; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .vitreous-disorders-notes h2 { color: #000080; background-color: #f2f7ff; border-left: 6px solid #8B0000; padding: 12px; margin-top: 35px; border-radius: 0 5px 5px 0; font-weight: bold; font-size: 1.5rem; }
        .vitreous-disorders-notes h3 { color: #8B0000; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; font-size: 1.25rem; }
        .vitreous-disorders-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #333; border: 1px solid #ffeeba; }
        .vitreous-disorders-notes .box-patho { background-color: #e3f2fd; border: 2px solid #1565c0; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; font-weight: bold; color: #0d47a1; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .vitreous-disorders-notes .arrow { display: block; font-size: 24px; color: #d32f2f; margin: 8px 0; }
        .vitreous-disorders-notes .box-mgmt { background-color: #e8f5e9; border: 2px solid #2e7d32; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .vitreous-disorders-notes .box-mgmt h4 { color: #1b5e20; margin-top: 15px; margin-bottom: 5px; font-weight: bold; }
        .vitreous-disorders-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .vitreous-disorders-notes th { background-color: #000080; color: white; padding: 12px 15px; text-align: left; text-transform: uppercase; font-size: 0.9em; }
        .vitreous-disorders-notes td { border: 1px solid #ddd; padding: 12px 15px; vertical-align: top; }
        .vitreous-disorders-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .vitreous-disorders-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d81b60; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .vitreous-disorders-notes details summary { cursor: pointer; color: #c2185b; font-weight: bold; outline: none; list-style: none; }
        .vitreous-disorders-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 50px; border: 1px solid #37474f; }
        .vitreous-disorders-notes .viva-title { color: #ffd54f; border-bottom: 1px solid #7f8c8d; padding-bottom: 10px; margin-top: 0; }
        .vitreous-disorders-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .vitreous-disorders-notes ul, .vitreous-disorders-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .vitreous-disorders-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="vitreous-disorders-notes">
        <h1>Vitreous Disorders</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -20px; margin-bottom: 30px;">
          High-Yield Exam Notes: Vitreous Hemorrhage Dynamics, Posterior Vitreous Detachment Kinematics, and Degenerative Matrices
        </p>

        <h2>1. Vitreous Hemorrhage (VH)</h2>
        <p><strong>Definition:</strong> The abnormal extravasated presence of blood either directly inside the primary vitreous cavity gel structure or contained within the retro-hyaloid space, culminating clinical presentation as an acute, painless drop in visual acuity.</p>

        <h3>Etiological Framework</h3>
        <ul>
            <li><strong>Spontaneous Vascular Disruption (Highest Clinical Incidence):</strong>
                <ul>
                    <li><span class="highlight">Proliferative Diabetic Retinopathy (PDR)</span>: Mechanical shear stress or rupture targeting fragile, dysregulated neovascular complexes.</li>
                    <li><strong>Eales' Disease:</strong> Idiopathic retinal periphlebitis classically presenting in young adult males across the Indian subcontinent; strongly linked with hypersensitivity reactions to tuberculoprotein.</li>
                    <li><strong>Posterior Vitreous Detachment (PVD):</strong> Physical avulsion tracking a peripheral retinal blood vessel during acute vitreoretinal separation.</li>
                    <li><strong>Retinal Vein Occlusions (RVO):</strong> Secondary neovascularization secondary to Central or Branch Retinal Vein Occlusion ischemic events.</li>
                </ul>
            </li>
            <li><strong>Traumatic Insult:</strong> Secondary to either closed-globe blunt contusional trauma or open-globe penetrating ocular injuries.</li>
            <li><strong>Systemic Pathologies:</strong> Underlying bleeding diatheses, anticoagulation therapeutics, or **Terson's Syndrome** (intracranial subarachnoid hemorrhage leading to intraocular extravasation).</li>
        </ul>

        <h3>Pathophysiology & Metabolic Breakdown</h3>
        <div class="box-patho">
            <h4 style="margin-top:0; color: #0d47a1;">⚡ Hemodynamics & Intravitreal Metabolic Degradation Pathway</h4>
            Vessel Wall Breakdown (Trauma, Ischemia, or Neovascularization)
            <span class="arrow">⬇</span>
            Extravasation of Erythrocytes into the Dense Vitreous Microfibrillar Network
            <span class="arrow">⬇</span>
            <strong>Immediate Intravitreal Clot Aggregation</strong> (Perceived as "Red-Hued" Vision)
            <span class="arrow">⬇</span>
            Hemolysis, Fibrinolysis, & Enzymatic Cellular Degeneration of RBCs
            <span class="arrow">⬇</span>
            Accelerated Structural Vitreous Liquefaction (Synchysis) & Macrophage Depigmentation
            <span class="arrow">⬇</span>
            <strong>Final Clinical Fate:</strong> Slow Progressive <span class="highlight">Absorption</span> OR Chronic <span class="highlight">Organization</span> (Fibrovascular Proliferation & Tractional RD)
        </div>

        <h3>Clinical Profile</h3>
        <ul>
            <li><strong>Symptomatology:</strong>
                <ul>
                    <li><em>Low-Volume Micro-hemorrhage:</em> Acute manifestation of floating elements described by the patient as moving "cobwebs," red strands, or localized dark spots.</li>
                    <li><em>Massive Macro-hemorrhage:</em> <span class="highlight">Sudden, painless, profound loss of central vision</span>, frequently descending rapidly down to Hand Movements (HM) or Perception of Light (PL) status.</li>
                </ul>
            </li>
            <li><strong>Objective Diagnostic Signs:</strong>
                <ul>
                    <li>Complete attenuation or total absence of the normal red fundus reflex (replaced by a dull black reflex).</li>
                    <li>Slit-lamp Biomicroscopy reveals free-floating red blood cells suspended in the anterior vitreous face.</li>
                    <li><strong>Ultrasonography (USG) B-Scan:</strong> Absolutely mandatory whenever structural opacities obscure clear visualization of the fundus, primarily executed to confirm or rule out a concurrent Rhegmatogenous or Tractional Retinal Detachment.</li>
                </ul>
            </li>
        </ul>

        

        <div class="box-mgmt">
            <h4 style="color: #2e7d32; margin-top: 0; font-size: 1.2em;">Management Protocol Matrix</h4>
            <p><strong>1. Conservative Stratification (Observation Phase):</strong></p>
            <ul>
                <li><strong>Postural Positioning:</strong> Strict bed rest with the head of the bed elevated up to 45° to allow gravity-assisted settling of cellular debris inferiorly, opening up the superior visual axis.</li>
                <li><strong>Clearance Windows:</strong> Typical monitoring timeline spans 1 to 3 months to wait for clear signs of spontaneous physiological clearance. (Accelerated to ~4 weeks in cases of uncontrolled Type 1 Diabetes Mellitus).</li>
                <li><strong>Targeted Primary Care:</strong> The moment clearing allows fundus visualization, immediate deployment of Panretinal Photocoagulation (PRP) laser treatment to suppress ischemic drivers in PDR or Eales' disease.</li>
            </ul>

            <p><strong>2. Interventional Surgical Suite (Pars Plana Vitrectomy - PPV):</strong></p>
            <p><em>Definitive Indications for Surgical Extraction:</em></p>
            <ul>
                <li>Persistent non-clearing vitreous opacity exceeding the designated 3-month observational window.</li>
                <li>Concomitant **Retinal Detachment** or a distinct retinal tear explicitly identified on diagnostic B-scan ultrasonography.</li>
                <li>Development of secondary **Ghost Cell Glaucoma**.</li>
                <li>Bilateral simultaneous massive vitreous hemorrhages (indicates urgent early intervention on the better-functioning eye).</li>
            </ul>
        </div>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Outline the unique mechanism driving the intraocular pressure spike seen in "Ghost Cell Glaucoma."</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> Ghost cell glaucoma is a form of secondary open-angle glaucoma. It occurs when long-standing vitreous erythrocytes lose their hemoglobin content and transform into rigid, hollow, khaki-colored "ghost cells." These non-deformable cells slowly migrate anteriorly into the anterior chamber through a disrupted hyaloid face and physically plug up the trabecular meshwork micropores, blocking normal aqueous humor drainage.</p>
                </div>
            </details>
        </div>

        <h2>2. Posterior Vitreous Detachment (PVD)</h2>
        <p><strong>Definition:</strong> The physical separation of the posterior vitreous cortex layer away from its natural anatomical apposition against the internal limiting membrane (ILM) of the neurosensory retina.</p>
        <p><strong>Pathophysiology:</strong> Driven by age-related architectural collapse, a process combining progressive liquefaction (**Synchysis**) alongside subsequent vitreous matrix retraction and contraction (**Syneresis**). It presents with a heightened incidence in high axial <span class="highlight">Myopia</span> and senile cohorts (>60 years of age).</p>

        <h3>Clinical Profile (The Classic Symptom Duo)</h3>
        <ul>
            <li><strong>1. Micro-Opacities (Floaters):</strong> Abrupt appearance of semi-transparent mobile lines, "hair-like webs," or rings moving in tandem with saccadic eye excursions. These represent condensed vitreous collagen fibrils or detached peripapillary glial tissue projecting shadows onto the macular photoreceptors.</li>
            <li><strong>2. Photic Flashes (Photopsia):</strong> Transient, arc-shaped structural flashes of light typically observed in the peripheral visual field. These are produced by mechanical vitreoretinal traction, stimulation, and pulling at residual focal vitreoretinal adhesion sites.</li>
        </ul>

        <h3>Diagnostic Signposts</h3>
        <ul>
            <li><strong>Weiss Ring:</strong> The definitive <span class="highlight">pathognomonic clinical sign</span>. A distinct, structured, semi-opaque circular or oval glial ring observed floating freely within the mid-vitreous cavity space. It represents the avulsed fibrous attachment where the vitreous cortex was originally tethered to the rim of the optic nerve head.</li>
        </ul>

        

        <h3>Vitreoretinal Complications</h3>
        <ul>
            <li><strong>Retinal Tear / Horseshoe Break formation:</strong> Occurs in approximately 10–15% of all acutely symptomatic PVD cases due to localized dynamic traction over thin peripheral retina.</li>
            <li><strong>Tractional Vitreous Hemorrhage:</strong> Occurs when an adherent vitreous strand shears open a peripheral retinal vessel during detachment.</li>
            <li><strong>Rhegmatogenous Retinal Detachment (RRD):</strong> Developed secondary to fluid ingress passing through a newly created retinal tear.</li>
        </ul>
        <p style="font-style: italic; background-color: #fff3e0; padding: 10px; border-left: 4px solid #ff9800; border-radius: 4px;">
            <strong>Clinical Directive:</strong> Any presentation of acute floaters or photopsia warrants an immediate, comprehensive 360° peripheral fundus assessment utilizing indented indirect ophthalmoscopy. If no structural break is confirmed, the patient is counseled on warning signs and reassured as symptoms typically abate over weeks via cortical neuro-adaptation.
        </p>

        <h2>3. Asteroid Hyalosis vs. Synchysis Scintillans</h2>
        <p>This classic structural pair represents an important point of differentiation for clinical board examinations and viva voice evaluations.</p>

        

        <table>
            <thead>
                <tr>
                    <th style="width: 50%;">Asteroid Hyalosis</th>
                    <th style="width: 50%;">Synchysis Scintillans (Cholesterolosis Bulbi)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Biochemical Composition</strong></td>
                    <td>Composed of structured <span class="highlight">Calcium Soaps</span> (complexed lipid-calcium-phosphate structures).</td>
                    <td>Composed of highly reflective, pure <span class="highlight">Cholesterol Crystals</span>.</td>
                </tr>
                <tr>
                    <td><strong>Biomicroscopic Appearance</strong></td>
                    <td>Spherical, creamy-white to brilliant opacities resembling a starfield.</td>
                    <td>Flat, angular, highly refractile polychromatic golden-bronze crystal structures.</td>
                </tr>
                <tr>
                    <td><strong>Underlying Pathogenesis</strong></td>
                    <td>Idiopathic senile degeneration; strongly correlated with advancing physiological age.</td>
                    <td>Secondary end-stage sequela following severe ocular trauma, chronic vitreal hemorrhage, or long-standing uveitic inflammation.</td>
                </tr>
                <tr>
                    <td><strong>Physical Vitreous Matrix State</strong></td>
                    <td>Occurs within a **structurally solid, intact** vitreous gel framework (bodies remain suspended).</td>
                    <td>Occurs within a **completely liquefied** vitreous gel matrix (advanced synchysis).</td>
                </tr>
                <tr>
                    <td><strong>Gravitational Kinetic Profile</strong></td>
                    <td><strong>Move strictly in sync with eye movements</strong> before returning back to their fixed structural baseline locations (they do not settle inferiorly).</td>
                    <td><strong>"Snow-Globe Effect":</strong> Crystals rapidly shower down and sediment at the floor of the vitreous cavity when the eye is stationary, then swirl upward with movement.</td>
                </tr>
                <tr>
                    <td><strong>Clinical Laterality</strong></td>
                    <td>Predominantly presenting as a **unilateral** condition (~75% of cases).</td>
                    <td>Frequently presenting as a **bilateral** condition or localized strictly to a previously diseased, injured eye.</td>
                </tr>
                <tr>
                    <td><strong>Visual Acuity Correlation</strong></td>
                    <td>Visual acuity remains **unaffected/normal** (the patient is completely asymptomatic; shadows are suppressed).</td>
                    <td>Visual acuity is **significantly diminished**, primarily compromised by the severe underlying primary intraocular pathology.</td>
                </tr>
            </tbody>
        </table>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Explain why patients with extensive Asteroid Hyalosis present with perfect visual acuity despite the examiner seeing a dense field of opacities.</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> The calcium soap spheres in asteroid hyalosis are firmly bound and locked within the structural collagen framework of an intact vitreous gel. Because these bodies are structurally static relative to the visual axis, they do not cast moving shadows across different parts of the retina. The brain easily suppress and filters out these stationary focal shadows, leaving the patient completely asymptomatic. This presents a stark contrast to the highly mobile, free-floating opacities seen in vitreous hemorrhage or PVD.</p>
                </div>
            </details>
        </div>

        <div class="viva-section">
            <h3 class="viva-title">🔥 Rapid Fire Viva</h3>
            <p><em>Test your diagnostic accuracy against these high-yield scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>Define the structural and clinical boundaries of "Terson's Syndrome."</li>
                <li>Why is an urgent B-scan ultrasound considered an mandatory protocol element in a dense, non-clearing vitreous hemorrhage?</li>
                <li>Anatomically, what structural site does the Weiss Ring demarcate prior to avulsion?</li>
                <li>Which condition produces a classic "golden rain" sedimentation pattern upon halting ocular saccades?</li>
                <li>Eales' disease demonstrates a selective vasculitis profile targeting which precise components of the retinal circulation?</li>
            </ol>

            <details style="margin-top: 20px;">
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol>
                        <li>**Terson's Syndrome** is the specific occurrence of intraocular hemorrhage (vitreous, sub-hyaloid, or intraretinal) in association with acute intracranial subarachnoid or subdural hemorrhage, driven by a rapid spike in intracranial pressure transmitted down the optic nerve sheath.</li>
                        <li>To evaluate the structural integrity of the underlying retina. When a dense vitreous hemorrhage completely blocks optical visualization via ophthalmoscopy, a **B-scan ultrasound** is necessary to rule out or map out any secondary rhegmatogenous or tractional retinal detachments that would require immediate surgical intervention.</li>
                        <li>The **peripapillary ring**, which marks the margin of the optic disc where the vitreous cortex forms a firm structural adhesion around the optic nerve head.</li>
                        <li>**Synchysis Scintillans** (Cholesterolosis bulbi), due to the rapid gravitational settling of heavy cholesterol crystals within a fully liquefied vitreous cavity.</li>
                        <li>The peripheral **retinal veins** (**Retinal Periphlebitis**), presenting clinically as structural vascular sheathing, peripheral non-perfusion, and subsequent neovascularization.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"amd": {
    title: "Macular Disorders: ARMD, CSR & RP",
    videoUrl: "coming-soon",
    duration: "45 mins",
    notes: `
      <style>
        .macular-disorders-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .macular-disorders-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .macular-disorders-notes h2 { color: #003366; background-color: #f0f4f8; border-left: 6px solid #8B0000; padding: 12px; margin-top: 35px; border-radius: 0 5px 5px 0; font-weight: bold; font-size: 1.5rem; }
        .macular-disorders-notes h3 { color: #8B0000; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; font-size: 1.25rem; }
        .macular-disorders-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #333; border: 1px solid #ffeeba; }
        .macular-disorders-notes .box-patho { background-color: #e3f2fd; border: 2px solid #2196f3; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; font-weight: bold; color: #0d47a1; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .macular-disorders-notes .arrow { display: block; font-size: 24px; color: #d32f2f; margin: 8px 0; }
        .macular-disorders-notes .box-mgmt { background-color: #e8f5e9; border: 2px solid #43a047; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .macular-disorders-notes .box-mgmt h3 { color: #1b5e20; margin-top: 0; border-bottom: 1px solid #a5d6a7; padding-bottom: 5px; }
        .macular-disorders-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .macular-disorders-notes th { background-color: #003366; color: white; padding: 12px 15px; text-align: left; text-transform: uppercase; font-size: 0.9em; }
        .macular-disorders-notes td { border: 1px solid #ddd; padding: 12px 15px; vertical-align: top; }
        .macular-disorders-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .macular-disorders-notes .recall-box { background-color: #fff0f6; border: 2px dashed #f06292; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .macular-disorders-notes details summary { cursor: pointer; color: #c2185b; font-weight: bold; outline: none; list-style: none; }
        .macular-disorders-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 50px; border: 1px solid #37474f; }
        .macular-disorders-notes .viva-title { color: #ffd54f; border-bottom: 1px solid #7f8c8d; padding-bottom: 10px; margin-top: 0; }
        .macular-disorders-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .macular-disorders-notes ul { list-style-type: disc; padding-left: 20px; margin-bottom: 1rem; }
        .macular-disorders-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="macular-disorders-notes">
        <h1>Macular Disorders</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -20px; margin-bottom: 30px;">
          Comprehensive Exam Modules on ARMD, CSR, and Retinitis Pigmentosa
        </p>

        <h2>1. Age-Related Macular Degeneration (ARMD)</h2>
        <p><strong>Definition:</strong> A progressive, degenerative disease affecting the macular architectural interface, resulting in irreversible loss of central vision. It stands as the leading cause of blindness in developed countries for populations aged <span class="highlight">&gt; 50 years</span>.</p>

        <h3>Core Stratification: Dry vs. Wet ARMD</h3>
        
        
        
        <table>
            <thead>
                <tr>
                    <th style="width: 50%;">Dry ARMD (Non-Exudative) — ~90% of Cases</th>
                    <th style="width: 50%;">Wet ARMD (Exudative) — ~10% of Cases</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Clinical Onset:</strong> Insidious, slowly progressive central blur developing over years.</td>
                    <td><strong>Clinical Onset:</strong> <span class="highlight">Rapid, sudden</span> onset of central visual distortions over weeks/days.</td>
                </tr>
                <tr>
                    <td><strong>Primary Pathology:</strong> Progressive geographic atrophy of the Retinal Pigment Epithelium (RPE) and overlying photoreceptor matrix.</td>
                    <td><strong>Primary Pathology:</strong> Development of a functional <span class="highlight">CNVM</span> (Choroidal Neovascular Membrane).</td>
                </tr>
                <tr>
                    <td><strong>Pathognomonic Sign:</strong> <strong>Drusen</strong> clusters (extracellular lipid/protein deposits under the RPE).</td>
                    <td><strong>Pathognomonic Sign:</strong> Sub-retinal/Sub-RPE exudation, hemorrhage, and fluid pooling.</td>
                </tr>
                <tr>
                    <td><strong>Visual Prognosis:</strong> Relatively stable; slow functional decline.</td>
                    <td><strong>Visual Prognosis:</strong> Guarded to poor without rapid intervention due to fibrovascular disciform scarring.</td>
                </tr>
            </tbody>
        </table>

        <h3>Pathophysiology</h3>
        <div class="box-patho">
            <h4 style="margin-top:0; color: #0d47a1; font-size: 1.1em;">⚡ Cascading Mechanism of ARMD</h4>
            Chronic Oxidative Stress + Advanced Aging + Genetic Susceptibility (e.g., Complement Factor H [CFH] Gene)
            <span class="arrow">⬇</span>
            Inability of RPE to process outer segment waste, leading to lipofuscin accumulation
            <span class="arrow">⬇</span>
            Extracellular deposition and formation of structural <span class="highlight">DRUSEN</span> colloid bodies
            <br><span style="font-size: 0.9em; font-weight: normal; color: #555;">(Pathological staging threshold for Dry ARMD)</span>
            <span class="arrow">⬇</span>
            Progressive focal inflammation, RPE hypoxia, and local tissue starvation
            <span class="arrow">⬇</span>
            Upregulated expression and release of Angiogenic Drivers (<span class="highlight">VEGF</span>)
            <span class="arrow">⬇</span>
            Abnormal neovascular sprouts burst from the choriocapillaris through a compromised Bruch's Membrane
            <span class="arrow">⬇</span>
            <strong>Active CNVM Presentation (Wet ARMD)</strong> ➔ Structural Exudative Leakage, Hemorrhage, and Fibrous Destructive Scarring
        </div>

        <h3>Clinical Presentations & Multi-Modal Diagnostics</h3>
        <ul>
            <li><strong>Key Symptoms:</strong> Metamorphopsia (warping or distortion of straight lines), dense Central Scotoma, and marked difficulty with high-resolution, near-vision tasks (e.g., reading).</li>
            <li><strong>Bedside Screening Tool:</strong> <span class="highlight">Amsler Grid Testing</span> (classic diagnostic finding shows distorted, wavy, or missing grid lines).</li>
            <li><strong>Gold Standard Diagnostic Diagnostics:</strong>
                <ul>
                    <li><strong>OCT (Optical Coherence Tomography):</strong> High-yield non-invasive imaging mapping intraretinal/subretinal fluid pockets, pigment epithelial detachments (PEDs), or cross-sectional CNVM profiles.</li>
                    <li><strong>FFA (Fundus Fluorescein Angiography):</strong>
                        <ul>
                            <li><em>Classic CNVM:</em> Early-phase, sharp, well-demarcated lacy hyperfluorescence with intense late-phase leakage.</li>
                            <li><em>Occult CNVM:</em> Ill-defined, diffuse hyperfluorescence displaying late-phase leakage without a clear early frame core.</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>

        <div class="box-mgmt">
            <h3>💊 Therapeutic Management of Wet ARMD</h3>
            <p><strong>Anti-VEGF Pharmacotherapy (The Gold Standard Pathway):</strong></p>
            <ul>
                <li>Administered via regular monthly intravitreal injections (loading dose phase), shifting subsequently to pro-re-nata (PRN) or treat-and-extend dosing protocols.</li>
                <li>Primary Biological Agents: <span class="highlight">Ranibizumab (Lucentis)</span>, Bevacizumab (Avastin), and Aflibercept (Eylea).</li>
                <li><strong>Mechanism of Action:</strong> Binds and inactivates vascular endothelial growth factor isoforms to inhibit active angiogenesis and normalize compromised capillary permeability.</li>
            </ul>
            <p style="margin-bottom:0; font-style: italic; color: #2e7d32;">Note: Dry ARMD possesses no structural cure; progression is managed preventatively via nutritional supplementation following the validated AREDS-2 Antioxidant Formula (High-dose Vitamin C, Vitamin E, Zinc, Copper, Lutein, and Zeaxanthin).</p>
        </div>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Why was Beta-Carotene deliberately omitted and replaced with Lutein/Zeaxanthin in the transition from the original AREDS to the AREDS-2 formula?</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> Randomized clinical trial data revealed that high-dose Beta-Carotene supplementation significantly increased the statistical risk of developing lung malignancies in patients with a history of smoking.</p>
                </div>
            </details>
        </div>

        <h2>2. Central Serous Chorioretinopathy (CSR / CSCR)</h2>
        <p><strong>Definition:</strong> A spontaneous, typically self-limiting localized serous detachment of the neurosensory retina over the central macula.
        <br><strong>Classic Epidemiological Profile:</strong> <span class="highlight">Young Males (20–40 years old)</span> presenting with a distinct <span class="highlight">Type A Personality</span> (high chronic stress environment) or individuals on systemic exogenous corticosteroid therapy.</p>

        

        <h3>Pathophysiology</h3>
        <div class="box-patho">
            Chronic Stress / Exogenous Corticosteroids / Elevated Endogenous Cortisol Levels
            <span class="arrow">⬇</span>
            Choroidal hyperpermeability and congestion under vascular hydrostatic pressure
            <span class="arrow">⬇</span>
            Disruption and breakdown of the localized RPE tight junction blood-retinal barrier
            <span class="arrow">⬇</span>
            Decompensation and structural failure of the active RPE metabolic fluid pump mechanism
            <span class="arrow">⬇</span>
            Hydrostatic fluid tracking from the choroidal space into the subretinal landscape
            <span class="arrow">⬇</span>
            <strong>Localized Macular Serous Detachment</strong>
        </div>

        <h3>Clinical Features</h3>
        <ul>
            <li>Sudden onset of completely painless, dull blurring affecting central visual acuity.</li>
            <li><strong>Micropsia:</strong> Anomalous minification of objects caused by physical separation and spreading out of photoreceptor cells over the fluid dome.</li>
            <li><strong>Metamorphopsia:</strong> Linear wave-like spatial distortions.</li>
            <li><strong>Relative Central Scotoma:</strong> A localized gray or shaded circular patch matching the central visual axis.</li>
            <li><strong>Refractive Shift:</strong> Induces a temporary, transient <span class="highlight">Hypermetropia</span> because the fluid bubble physically elevates and moves the neurosensory retina forward toward the lens plane.</li>
        </ul>

        <h3>Angiographic Diagnostics: FFA Classic Signatures</h3>
        <ul>
            <li><strong>Ink-Blot Pattern (Most Common):</strong> A solitary focal point of hyperfluorescence that slowly and symmetrically expands in size during later diagnostic frames.</li>
            <li><strong>Smoke-Stack Pattern (Pathognomonic but Rare):</strong> Fluorescein dye leaks vertically upward into the subretinal space like a plume of smoke before spreading out laterally at its apex, creating a mushroom-cloud configuration.</li>
        </ul>

        <div class="box-mgmt">
            <h3>Management Strategy for CSR</h3>
            <ul style="margin-bottom:0;">
                <li><strong>Conservative Observation:</strong> Spontaneous resolution occurs in roughly 80–90% of acute presentations within a 3-month window.</li>
                <li><strong>Lifestyle Modulation:</strong> Immediate cessation of all forms of corticosteroid formulations and active implementation of stress reduction protocols.</li>
                <li><strong>Indications for Active Intervention (Focal Laser Photocoagulation / PDT):</strong>
                    <ul>
                        <li>Failure of the fluid bubble to clear after 3–4 months of monitoring.</li>
                        <li>Chronic, recurrent episodes threatening structural macular integrity.</li>
                        <li>High-priority occupational demands requiring rapid stereoscopic recovery (e.g., commercial airline pilots).</li>
                    </ul>
                </li>
            </ul>
        </div>

        <h2>3. Retinitis Pigmentosa (RP)</h2>
        <p><strong>Definition:</strong> A heterogenous group of inherited retinal dystrophies characterized by progressive, bilateral genetic degeneration of the photoreceptor matrix, characteristically destroying the <span class="highlight">Rod system before the Cone system</span>.</p>

        <h3>Genetic Transmission Patterns</h3>
        <ul>
            <li><strong>Sporadic / Simplex Presentation:</strong> Most common manifestation in clinical practice.</li>
            <li><strong>Autosomal Recessive (AR):</strong> Typically displays the most aggressive and rapid visual field deterioration.</li>
            <li><strong>Autosomal Dominant (AD):</strong> Typically associated with the mildest, slowly progressive clinical course.</li>
            <li><strong>X-Linked Recessive (XL):</strong> Represents the rarest mode of inheritance but results in early-onset severe visual loss.</li>
        </ul>

        <h3>Pathophysiology</h3>
        <div class="box-patho" style="background-color: #fff3e0; border-color: #ff9800; color: #e65100;">
            Targeted Genetic Mutations (e.g., Rhodopsin Gene anomalies)
            <span class="arrow" style="color: #ff9800;">⬇</span>
            Accelerated Apoptosis of Rod Photoreceptors localized initially across the mid-peripheral retina
            <span class="arrow" style="color: #ff9800;">⬇</span>
            <strong>Clinical Emergence of Nyctalopia (Night Blindness) + Progressive Ring Scotoma</strong>
            <span class="arrow" style="color: #ff9800;">⬇</span>
            Melanin pigment migration from dying RPE cells into the inner perivascular retina
            <span class="arrow" style="color: #ff9800;">⬇</span>
            Late-stage structural decay and apoptosis of the central Cone Photoreceptor pool
            <span class="arrow" style="color: #ff9800;">⬇</span>
            <strong>Constricted Tunnel Vision progressing toward Total Loss of Vision</strong>
        </div>

        

        <h3>The Classic Diagnostic Fundus Triad</h3>
        <table>
            <thead>
                <tr>
                    <th style="width: 30%;">Pathological Sign</th>
                    <th style="width: 70%;">Morphological Description & Clinical Correlate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1. <strong>Bony Spicules</strong></td>
                    <td>Jet-black, branching pigmentary clusters concentrated in the mid-peripheral retina, forming perivascular patterns resembling bone corpuscles.</td>
                </tr>
                <tr>
                    <td>2. <strong>Arteriolar Attenuation</strong></td>
                    <td>Severe generalized narrowing of the retinal vasculature, leaving vessels looking like thin, thread-like strands.</td>
                </tr>
                <tr>
                    <td>3. <strong>Waxy Pale Optic Disc</strong></td>
                    <td>Consecutive optic nerve head atrophy characterized by a distinct waxy, yellowish-white pallor caused by glial proliferation.</td>
                </tr>
            </tbody>
        </table>
        <p><em>*High-Yield Symptom Note: <strong>Nyctalopia (Night Blindness)</strong> represents the earliest, defining clinical symptom of this disease course.</em></p>

        <h3>Management & Rehabilitation Framework</h3>
        <ul>
            <li>There is currently no definitive curative therapeutic option to halt the disease.</li>
            <li><strong>Low Vision Aids (LVA):</strong> Implementation of high-power optical magnifiers, field-expanding prisms, and electronic night-vision goggles.</li>
            <li><strong>Nutritional Stabilization:</strong> Use of oral Vitamin A Palmitate (15,000 IU/day) under medical supervision to marginally delay functional rod decline.</li>
            <li><strong>Advanced Interventions & Research:</strong> Formal genetic counseling across families and consideration for advanced surgical interventions such as the Argus II Bionic Eye Retinal Prosthesis in select end-stage patients.</li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What specific eponym defines the syndrome where Retinitis Pigmentosa co-exists with congenital sensorineural hearing loss?</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> Usher Syndrome (the most common genetic driver of concurrent deaf-blindness).</p>
                </div>
            </details>
        </div>

        <div class="viva-section">
            <h3 class="viva-title">🔥 Rapid Fire Viva</h3>
            <p><em>Synthesize your macular and electrophysiological knowledge:</em></p>
            <ol style="margin-left: 20px;">
                <li>During an active CSR episode, does the patient's subjective refractive error undergo a myopic or a hypermetropic shift?</li>
                <li>What specific morphology of Drusen (Hard vs. Soft) indicates an advanced risk for progressing into Wet ARMD?</li>
                <li>The functional manifestation of a "Ring Scotoma" matches structural damage localized to which specific zone of the retinal topography?</li>
                <li>Which specific diagnostic electrophysiological test displays a classic "Extinguished" or completely "Flat" trace even during early-to-mid stage Retinitis Pigmentosa?</li>
            </ol>

            <details style="margin-top: 20px;">
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol>
                        <li>A **Hypermetropic shift**, because the accumulation of subretinal fluid physically pushes the neurosensory macular floor forward, reducing the effective axial length of the eye.</li>
                        <li>Large, confluent **Soft Drusen** with poorly defined borders, indicating extensive RPE stress and a high risk of developing a CNVM.</li>
                        <li>The **Mid-peripheral retina**, which corresponds to the region with the highest physiological density of rod photoreceptors.</li>
                        <li>The **Electroretinogram (ERG)**; specifically, photopic and scotopic responses show severe reduction in A and B wave amplitudes long before the fundus triad fully forms.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"cystic-hygroma": {
    title: "Cystic Hygroma (Lymphangioma)",
    videoUrl: "coming-soon",
    duration: "30 mins",
    notes: `
      <style>
        @media print {
            .hygroma-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .hygroma-notes details { display: block; }
            .hygroma-notes details[open] summary ~ * { animation: none; }
        }
        .hygroma-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .hygroma-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .hygroma-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .hygroma-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .hygroma-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .hygroma-notes .box-red { background-color: #ffebee; border: 2px solid #c62828; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .hygroma-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .hygroma-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .hygroma-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .hygroma-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .hygroma-notes ul, .hygroma-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .hygroma-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="hygroma-notes">
        <h1>Cystic Hygroma (Lymphangioma)</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Pediatric Surgery Focus: Embryological Dissociation, Transillumination Diagnostics, and Targeted Sclerotherapy
        </p>

        <h2>1. Anatomical Definition & Embryology</h2>
        <ul>
            <li><strong>Pathological Definition:</strong> A benign congenital macrocystic malformation of the lymphatic system. It is characterized by multi-loculated, fluid-filled vascular spaces that arise from the failure of primitive lymphatic tissue to establish a functional communication network with the systemic venous circulation.</li>
            <li><strong>Embryological Misstep:</strong> Arises during the 6th to 7th week of gestation due to the complete or partial isolation/sequestration of the primitive <strong>Jugular Lymph Sacs</strong> from the developing Internal Jugular Vein.</li>
            <li><strong>Anatomical Distribution:</strong>
                <ul>
                    <li><strong>Posterior Triangle of the Neck (75%):</strong> The classic clinical location, frequently presenting behind the sternocleidomastoid muscle.</li>
                    <li><strong>Axillary Region (20%):</strong> Arising from embryonic lateral sac projections.</li>
                    <li><strong>Mediastinum, Retroperitoneum, and Groin (&lt;5%):</strong> Rare manifestations presenting unique surgical and visceral compression risks.</li>
                </ul>
            </li>
        </ul>

        <h2>2. Pathology & Microscopic Landscape</h2>
        <ul>
            <li><strong>Macroscopic Morphology:</strong> Multilocular, thin-walled, translucent cystic masses of variable sizes. They contain clear, straw-colored, protein-poor, watery lymph fluid unless modified by secondary infection or hemorrhage.</li>
            <li><strong>Microscopic Visuals:</strong> The internal walls of individual cysts are lined by a delicate, uniform **single layer of flattened endothelial cells**. The supporting fibrovascular stroma frequently contains collections of lymphoid tissue aggregates.</li>
            <li><strong>Radiographic Appearance:</strong> Classically produces a characteristic <strong>"Soap Bubble"</strong> architecture on high-resolution ultrasonography and MRI due to the presence of multiple internal fibrous septations splitting the fluid volume.</li>
        </ul>
        

        <h2>3. Clinical Presentation & Features</h2>
        <ul>
            <li><strong>Chronology:</strong> Congenitally manifest at <strong>Birth</strong> in roughly 50–60% of documented cases, with up to 90% becoming clinically apparent before 2 years of age as the infant grows.</li>
            <li><strong>Palpation Findings:</strong> Typically presents as a soft, completely painless, painless cystic mass that is fluctuant, poorly defined, and highly <span class="highlight">Compressible</span> (empties partially into adjacent structures under gentle manual pressure).</li>
            <li><strong>Transillumination:</strong> Serves as the primary, high-yield clinical physical exam maneuver.</li>
        </ul>

        <div class="box-red">
            <h4 style="margin-top:0; color:#b71c1c; font-size: 1.15em;">💡 Clinical Diagnostic Rule: Transillumination</h4>
            <p><strong>Brilliantly Transilluminant Signature</strong></p>
            <ul style="margin-top: 5px;">
                <li>The absolute clarity of the uninfected lymph fluid combined with ultra-thin cyst walls allows light to travel completely uninhibited through the mass.</li>
                <li><strong style="color: #b71c1c;">Critical Bedside Pearl:</strong> If a previously transilluminant mass turns opaque or rapidly expands, suspect either an <strong>Acute Bacterial Infection</strong> or an <strong>Intracystic Hemorrhage</strong>.</li>
            </ul>
        </div>

        <h3>Secondary Clinical Complications</h3>
        <ul>
            <li><strong>Superimposed Infection:</strong> Frequently triggered by upper respiratory tract infections, resulting in rapid inflammatory enlargement, extreme tenderness, localized erythema, and systemic pyrexia.</li>
            <li><strong>Spontaneous Intracystic Hemorrhage:</strong> Triggered by minor, unnoticed trauma, leading to rapid expansion, loss of transillumination, and sudden mass effect.</li>
            <li><strong>Acute Airway Compromise:</strong> Occurs when medial extension tracks beneath the deep cervical fascia into the floor of the mouth, retro-esophageal space, or mediastinum, creating a life-threatening airway obstruction that mimics Ludwig's angina.</li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Contrast the clinical presentations of a Cystic Hygroma and a Second Branchial Cleft Cyst to avoid diagnostic errors at the bedside.</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong>
                    <br>1. <strong>Anatomical Landmark:</strong> A <strong>Cystic Hygroma</strong> is typically centered in the lower <strong>Posterior Triangle</strong> of the neck. A <strong>Branchial Cyst</strong> presents along the <strong>Anterior Triangle</strong>, specifically emerging along the upper 1/3 of the anterior border of the Sternocleidomastoid (SCM) muscle.
                    <br>2. <strong>Optical Properties:</strong> A Cystic Hygroma is always <strong>brilliantly transilluminant</strong> due to its thin walls and clear fluid. A Branchial Cyst is typically <strong>opaque</strong> to transillumination because its fluid contains dense cellular debris and cholesterol crystals.</p>
                </div>
            </details>
        </div>

        <h2>4. Modern Management Paradigms</h2>

        <h3>A. Diagnostic and Therapeutic Needle Aspiration</h3>
        <ul>
            <li><strong>Strict Treatment Rule:</strong> Needle aspiration is <strong style="color: #b71c1c;">Contraindicated</strong> as a primary, standalone therapy. It is associated with a near-100% recurrence rate, high risks of introducting bacterial infections, and potential internal scarring. *Its use is strictly limited to emergency decompression of the airway.*</li>
        </ul>

        <h3>B. Target-Directed Sclerotherapy (First-Line Interventional Strategy)</h3>
        <p>Now preferred over immediate open surgery for macrocystic lesions because it avoids the need for aggressive dissection through delicate pediatric neck structures.</p>
        <ul>
            <li><strong>Functional Mechanism:</strong> Controlled injection of an irritating chemical agent directly into the cyst causes localized endothelial sloughing, intense aseptic inflammation, subsequent fibrosis, and permanent collapse/adhesion of the cyst walls.</li>
            <li><strong>Primary Clinical Agents:</strong>
                <ul>
                    <li><strong>OK-432 (Picibanil):</strong> Considered the <span class="highlight">Gold Standard Sclerosant</span>. Formulated from a lyophilized mixture of Group A *Streptococcus pyogenes* treated with penicillin G. It functions as an immunomodulator, activating local **macrophages and a cytokine cascade** (IL-6, TNF-alpha) to obliterate the space with minimal risk of external skin scarring or nerve damage.</li>
                    <li><strong>Bleomycin:</strong> An antineoplastic antibiotic that provides excellent sclerosing action, though it requires careful monitoring for systemic pulmonary toxicities.</li>
                    <li><strong>Doxycycline / Hypertonic Alcohol:</strong> Alternative chemical options used primarily for highly specific multilocular configurations.</li>
                </ul>
            </li>
        </ul>

        <h3>C. Radical Surgical Excision</h3>
        <ul>
            <li><strong>Clinical Indications:</strong> Reserved for cases that fail primary sclerotherapy, lesions with microcystic dominance that resist chemical agents, or acute visceral/airway compression.</li>
            <li><strong>The Surgical Challenge:</strong> Cystic hygromas lack a true fibrous capsule. Instead, they propagate along deep fascial planes, sending finger-like projections that encase major neck structures, including the Internal Jugular Vein, Carotid Artery, **Facial Nerve (Marginal Mandibular Branch)**, and the Spinal Accessory Nerve.</li>
            <li><strong>Post-Surgical Risks:</strong> Permanent iatrogenic nerve palsy, salivary or lymphatic fistulas, and an increased risk of local recurrence if microscopic fragments of the cyst wall are left behind.</li>
        </ul>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Evaluation)</h3>
            <p><em>Test your clinical recall and pathophysiological understanding against these common oral board prompts:</em></p>
            <ol style="margin-left: 20px;">
                <li>Explain the underlying physical properties that allow an uncomplicated cystic hygroma to demonstrate brilliant transillumination.</li>
                <li>Which specific neck zone represents the most common anatomical site for these lymphatic malformations?</li>
                <li>What clinical complications should you prioritize if a known cystic hygroma presents with sudden painful expansion, tenderness, and an opaque response to a light test?</li>
                <li>Describe the precise pharmacological/immunological mechanism of action by which OK-432 (Picibanil) eliminates cystic spaces.</li>
                <li>Trace the embryological defect responsible for the development of a classic congenital cystic hygroma.</li>
            </ol>
            
            <details style="margin-top: 20px;">
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>It contains <strong>clear, protein-poor lymphatic fluid</strong> enclosed within ultra-thin, non-vascularized, single-layered endothelial walls, allowing light rays to pass through without being scattered or absorbed.</li>
                        <li>The <strong>Posterior Triangle of the Neck</strong> (accounting for approximately 75% of clinical presentations).</li>
                        <li>You must immediately prioritize either a <strong>Superimposed Bacterial Infection</strong> or an acute <strong>Intracystic Hemorrhage</strong>.</li>
                        <li>OK-432 acts as an immunomodulator. It stimulates host **macrophages and triggers a localized release of inflammatory cytokines** (such as Interleukin-6 and Tumor Necrosis Factor-alpha). This inflammatory response degrades the endothelial lining, leading to fibrosis and the permanent fusion of the opposing cyst walls.</li>
                        <li>It stems from the developmental failure or failure of communication of the **Jugular Lymph Sacs** with the internal jugular vein during the 6th week of gestation, causing a localized accumulation of isolated lymph fluid.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"lymphedema": {
    title: "Lymphedema",
    videoUrl: "coming-soon",
    duration: "35 mins",
    notes: `
      <style>
        @media print {
            .lymphedema-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .lymphedema-notes details { display: block; }
            .lymphedema-notes details[open] summary ~ * { animation: none; }
        }
        .lymphedema-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .lymphedema-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .lymphedema-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .lymphedema-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .lymphedema-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .lymphedema-notes .box-red { background-color: #ffebee; border: 2px solid #c62828; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .lymphedema-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background-color: #fff; }
        .lymphedema-notes th, .lymphedema-notes td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; vertical-align: top; }
        .lymphedema-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; }
        .lymphedema-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .lymphedema-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .lymphedema-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .lymphedema-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .lymphedema-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .lymphedema-notes ul, .lymphedema-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .lymphedema-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="lymphedema-notes">
        <h1>Lymphedema Management Protocol</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Vascular Surgery & Metaplastic Pathology: Stratified Classification, Physical Signs, and Debulking vs. Physiological Repairs
        </p>

        <h2>1. Core Definition & Pathophysiology</h2>
        <p><strong>Lymphedema</strong> is a progressive, chronic macromolecular disease process characterized by the abnormal accumulation of <span class="highlight">Protein-Rich Fluid</span> within the interstitial compartments. It results from a profound mechanical failure or structural insufficiency of the lymphatic transport architecture.</p>
        
        <p>Unlike regular venous edema, the persistent high-concentration interstitial protein collection exerts an altered colloid osmotic gradient. This gradient drives a chronic inflammatory cycle that induces fibroblast proliferation, keratinocyte activation, progressive adipogenesis, and extensive <strong>subcutaneous fibrosis</strong>.</p>

        <h2>2. Clinical Classification Matrix</h2>
        <p>Lymphedema is divided into primary developmental anomalies and secondary acquired obstructions:</p>
        
        <table>
            <thead>
                <tr>
                    <th>Etiological Division</th>
                    <th>Subtype Configuration</th>
                    <th>Clinical Onset Windows / Pathogenesis</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="3"><strong>Primary Lymphedema</strong><br>(Intrinsic Developmental Dysplasia)</td>
                    <td><strong>Congenital Hereditary</strong><br>(Milroy's Disease)</td>
                    <td>Manifests at <strong>Birth</strong>. Autosomal dominant transmission linked to VEGFR3 mutations. Characterized by profound structural hypoplasia or complete aplasia of local lymphatic channels.</td>
                </tr>
                <tr>
                    <td><strong>Lymphedema Praecox</strong><br>(Meige's Disease)</td>
                    <td>Manifests from <strong>Puberty up to 35 years of age</strong>. Represents the <span class="highlight">Most Common Form of Primary Lymphedema</span> (~80%). Strong female-to-male dominance; driven by structural lymphatic valvular incompetence.</td>
                </tr>
                <tr>
                    <td><strong>Lymphedema Tarda</strong></td>
                    <td>Delayed clinical manifestation presenting strictly <strong>after 35 years of age</strong>. Typically presents as a milder, localized form of structural lymphatic decompensation.</td>
                </tr>
                <tr>
                    <td rowspan="3"><strong>Secondary Lymphedema</strong><br>(Extrinsic Acquired Pathology)</td>
                    <td><strong>Lymphatic Filariasis</strong><br>(Elephantiasis)</td>
                    <td>Etiology: Nematode infection by <em>Wuchereria bancrofti</em> (or <em>Brugia malayi</em>). Vector-borne transit leads to adult worms nesting within regional nodes, causing severe obliterative lymphangitis. This is the <span class="highlight">Most Common Cause Worldwide</span>.</td>
                </tr>
                <tr>
                    <td><strong>Iatrogenic / Oncosurgical</strong></td>
                    <td>Secondary to oncological interventions. Typically caused by radical axillary or pelvic lymph node clearance (e.g., post-mastectomy breast protocols) or secondary tissue obliteration via high-dose <strong>Radiotherapy</strong>.</td>
                </tr>
                <tr>
                    <td><strong>Malignant Occlusion</strong></td>
                    <td>Direct, mechanical tumor infiltration or dense metastatic cellular plugs blocking draining regional lymph node centers.</td>
                </tr>
            </tbody>
        </table>

        <h2>3. Clinical Presentation & Physical Examination</h2>
        <ul>
            <li><strong>Chronological Progression:</strong> Swelling typically initiates <strong>distally</strong> on the dorsum of the foot or hand before spreading proximally.
                <ul>
                    <li><em>"Buffalo Hump" Morphology:</em> A distinct, dome-shaped swelling on the dorsum of the foot, sparing the digits early on but obscuring normal extensor tendon outlines.</li>
                    <li><em>"Squaring" of the Toes:</em> Transverse flattening and rectangular remodeling of the digits caused by persistent structural crowding against the footwear.</li>
                </ul>
            </li>
            <li><strong>Tissue Consistency Variations:</strong>
                <ul>
                    <li><em>Early (Stage I):</em> Soft, fluid-driven, and demonstrating classic <strong>Pitting Edema</strong>. Readily reversible with nocturnal limb elevation.</li>
                    <li><em>Late (Stage II/III):</em> Hard, dense, indurated, and completely <strong>Non-Pitting Edema</strong>. Tissue transformation occurs as interstitial proteins trigger adipose deposition and deep dermal collagen fibrosis.</li>
                </ul>
            </li>
            <li><strong>Metaplastic Dermal Manifestations:</strong> Marked skin changes develop over time, including severe hyperkeratosis, verrucous papillomatosis (wart-like skin projections), deep anatomical skin folds, fissures, and progression to full <strong>Elephantiasis</strong>.</li>
        </ul>
        

        <div class="box-red">
            <h4 style="margin-top:0; color:#b71c1c; font-size: 1.15em;">🚨 Pathognomonic Test: Stemmer's Sign</h4>
            <p><strong>Clinical Examination Technique:</strong> Attempt to actively pinch and lift a fold of skin over the dorsal aspect of the base of the second toe or middle finger.</p>
            <ul style="margin-top: 5px;">
                <li><strong>Positive Stemmer's Sign:</strong> The clinician <strong>cannot grasp or lift the skin fold</strong> due to severe thickening and induration of the underlying dermis. This is a highly specific <span class="highlight">Diagnostic Indicator for Lymphedema</span>.</li>
                <li><strong>Negative Stemmer's Sign:</strong> The skin fold is easily pinched and lifted away from the underlying structures. This presentation is characteristic of simple chronic venous insufficiency or lipedema.</li>
            </ul>
        </div>

        <h2>4. Modern Comprehensive Management</h2>

        <h3>A. Conservative First-Line Protocols</h3>
        <p>The standard non-surgical approach is <strong>Complex Decongestive Therapy (CDT)</strong>, a multi-modal management strategy executed in two active phases:</p>
        <ol>
            <li><strong>Meticulous Dermatological Hygiene:</strong> Focuses on aggressive topical hydration, elimination of skin fissures, and direct application of targeted antifungals. This approach is critical for blocking portals of bacterial entry and preventing recurrent acute bacterial dermatolymphangioadenitis (cellulitis loops).</li>
            <li><strong>Manual Lymphatic Drainage (MLD):</strong> A highly specialized, light-touch manual massage protocol. It bypasses occluded dermal tracts by moving fluid toward open, uncompromised adjacent collateral lymphatic drainage basins.</li>
            <li><strong>Rigid Multi-Layer Compression Bandaging:</strong> Utilizes non-elastic, short-stretch bandages to deliver high working pressures during movement. This setup assists the muscle pump, reducing fluid recurrence before transitioning to long-term wear of Class II or Class III medical compression garments.</li>
            <li><strong>Directed Pharmacotherapy:</strong>
                <ul>
                    <li><strong>Diethylcarbamazine (DEC):</strong> A targeted systemic microfilaricidal agent administered strictly for active, microfilaria-positive filarial infestations.</li>
                    <li><strong>Prophylactic Antibiotic Cycles:</strong> Long-term, continuous oral or intramuscular Penicillin regimens reserved for patients experiencing more than three distinct bouts of cellulitis per year.</li>
                </ul>
            </li>
        </ol>

        <h3>B. Advanced Surgical Management Options</h3>
        <p><em>Surgical indications: Complete failure of optimized conservative therapy, severe functional limitations from limb mass, or recurrent systemic sepsis.</em></p>

        <ul>
            <li><strong>Ablative / Excisional Procedures (Debulking Strategies):</strong>
                <ul>
                    <li><strong>Charles' Operation (Radical Excision):</strong> Complete, circumferential excision of all compromised skin and subcutaneous structures down to the deep muscular fascia. The remaining raw surface is covered using split-skin autografts harvested directly from the excised tissue. While cosmetically severe, it remains highly effective for massive, non-pitting <strong>Elephantiasis</strong>.</li>
                    <li><strong>Sistrunk's Operation:</strong> A targeted, less aggressive approach involving wedge-shaped tissue excisions to debulk localized areas of fibrosclerotic skin and subcutaneous tissue.</li>
                </ul>
            </li>
            <li><strong>Physiological Procedures (Supermicrosurgical Restorations):</strong>
                <ul>
                    <li><strong>Lymphovenous Anastomosis (LVA):</strong> A microsurgical technique where patent subdermal lymphatic channels ($\ge 0.3\text{ mm}$) are anastomosed directly into adjacent venules. This creation of a low-resistance shunt bypasses more proximal lymphatic obstructions.</li>
                    <li><strong>Vascularized Lymph Node Transfer (VLNT):</strong> Autologous transplantation of functional lymph node groups (e.g., from the groin or submental space) along with their feeding vascular pedicle into the affected extremity to jump-start functional lymphangiogenesis.</li>
                </ul>
            </li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What is the most feared oncological complication of long-standing, chronic lymphedema, and how does it clinically present?</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> The most feared complication is <strong>Lymphangiosarcoma</strong>, a highly aggressive vascular malignancy famously termed <strong>Stewart-Treves Syndrome</strong>. It typically develops within a chronically edematous limb (most classically in the upper extremity 10–20 years following an axillary lymph node dissection for breast cancer). It presents as rapidly expanding, multifocal, firm, cutaneous **purple-red nodules or bruised macules** that frequently ulcerate and carry a poor long-term prognosis.</p>
                </div>
            </details>
        </div>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Evaluation)</h3>
            <p><em>Evaluate your clinical reasoning and recall against these key surgical board entry questions:</em></p>
            <ol style="margin-left: 20px;">
                <li>Describe the precise anatomical maneuver required to elicit a positive Stemmer's sign.</li>
                <li>Explain the underlying histopathological transitions that turn early-stage pitting lymphedema into late-stage non-pitting lymphedema.</li>
                <li>Identify the specific biological pathogen responsible for the vast majority of filarial lymphedema worldwide.</li>
                <li>Outline the major tissue layers removed and the coverage method used during a radical Charles' operation.</li>
                <li>How can you distinguish lymphedema from standard chronic venous insufficiency based purely on physical examination of the foot?</li>
            </ol>
            
            <details style="margin-top: 20px;">
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>The clinician attempts to pinch and elevate a fold of skin over the <strong>dorsum of the second toe</strong> or middle finger. An inability to lift the skin fold indicates a positive sign.</li>
                        <li>The initial swelling is fluid-driven and mobile (pitting). Over time, the persistent retention of high-molecular-weight interstitial proteins triggers a chronic inflammatory response. This induces extensive **subcutaneous fibroblast proliferation, collagen deposition, and adipogenesis**, creating a hard, fibrotic mass that resists manual displacement (non-pitting).</li>
                        <li>The filarial nematode <strong>Wuchereria bancrofti</strong> is responsible for over 90% of cases.</li>
                        <li>The procedure requires the <strong>complete excision of all skin and subcutaneous fat down to the deep investing muscle fascia</strong>. The large raw surface area is subsequently covered with **Split-Thickness Skin Grafts (STSG)**.</li>
                        <li>Lymphedema characteristically involves the <strong>dorsum of the foot and digits</strong> (producing the "buffalo hump" and "squared toes"). In contrast, venous edema is a gravity-dependent process that typically spares the dorsum of the foot and digits, concentrating instead around the medial and lateral malleoli.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"cervical-rib": {
    title: "Cervical Rib (Thoracic Outlet Syndrome)",
    videoUrl: "coming-soon",
    duration: "25 mins",
    notes: `
      <style>
        @media print {
            .cervical-rib-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .cervical-rib-notes details { display: block; }
            .cervical-rib-notes details[open] summary ~ * { animation: none; }
        }
        .cervical-rib-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .cervical-rib-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .cervical-rib-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .cervical-rib-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .cervical-rib-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .cervical-rib-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background-color: #fff; }
        .cervical-rib-notes th, .cervical-rib-notes td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; vertical-align: top; }
        .cervical-rib-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; }
        .cervical-rib-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .cervical-rib-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .cervical-rib-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .cervical-rib-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .cervical-rib-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .cervical-rib-notes ul, .cervical-rib-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .cervical-rib-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="cervical-rib-notes">
        <h1>Cervical Rib & Thoracic Outlet Syndrome</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Neurovascular & Orthopedic Board Focus: Costoclavicular Crowding, Gilliatt-Sumner Hand Architecture, and Decompression Exposures
        </p>

        <h2>1. Definition & Clinical Epidemiology</h2>
        <ul>
            <li><strong>Pathological Definition:</strong> A supernumerary, congenital accessory rib originating directly from the anterior root of the transverse process of the <strong>7th Cervical Vertebra</strong> (C7).</li>
            <li><strong>Population Incidence:</strong> Found in approximately 0.5% of the general population. It is frequently asymptomatic until structural alterations or changes in posture occur.</li>
            <li><strong>Symmetry and Expression:</strong> Demonstrates bilateral development in 50–80% of cases. However, clinical presentation is typically <strong>Unilateral</strong>, localizing to the side with either a more developed bony rib segment or a tighter fibrous band configuration.</li>
            <li><strong>Structural Variations:</strong> Ranges from an entirely formed, independent articulating bone to a short, stunted exostosis that continues down to the first thoracic rib via a sharp, rigid <strong>fibrous band</strong>.</li>
        </ul>

        <h2>2. Pathophysiology of the Scalene Triangle</h2>
        <p>The anomaly alters the borders of the scalene triangle, narrowing the costoclavicular gate and compressing neurovascular structures passing through the thoracic outlet.</p>
        
        <ul>
            <li><strong>Neurogenic Compression Loop:</strong> The lower trunk of the brachial plexus—specifically carrying the nerve fibers of the <strong>C8 and T1</strong> roots—is stretched and angled over the hard edge of the rib or its fibrous expansion.</li>
            <li><strong>Arterial Vascular Impact:</strong> The subclavian artery is compressed against adjacent bones as it crosses over the accessory rib.
                <ul>
                    <li><em>Hemodynamic Turbulence:</em> High-velocity flow through the compressed area creates turbulent jets immediately distal to the obstruction.</li>
                    <li><em>Pathological Sequelae:</em> This constant turbulence weakens the vessel wall, leading to <span class="highlight">Post-Stenotic Dilatation</span> (aneurysmal transformation). This site can collect mural thrombi, which may throw off micro-emboli down the arm, causing ischemia and <strong>digital gangrene</strong>.</li>
                </ul>
            </li>
        </ul>

        <h2>3. Clinical Presentation Matrix</h2>
        <p>Classically seen in middle-aged females. Drooping shoulder posture or carrying heavy loads can increase traction over the accessory rib segment.</p>

        <h3>A. Neurological Manifestations (Most Common)</h3>
        <ul>
            <li><strong>Sensory Deficits:</strong> Pain, paresthesia, and numbness traveling along the <strong>Ulnar Border</strong> of the forearm, radiating into the hypothenar eminence and the medial 1.5 digits (C8–T1 dermatomal pathway).</li>
            <li><strong>Motor Denervation:</strong> Progressive wasting and weakness of the intrinsic small muscles of the hand.
                <ul>
                    <li><span class="highlight">Gilliatt-Sumner Hand:</span> A pathognomonic wasting pattern where severe, isolated atrophy of the <strong>Thenar Eminence</strong> (specifically the Abductor Pollicis Brevis and Opponens Pollicis) coexists with ulnar-sided sensory loss. This occurs because T1 motor fibers traveling to thenar muscles are severely affected by lower trunk traction.</li>
                </ul>
            </li>
        </ul>

        <h3>B. Vascular Manifestations (Less Common but Limb-Threatening)</h3>
        <ul>
            <li><strong>Arterial Insufficiency:</strong> Cold sensitivity, exertional upper limb fatigue, asymmetric blood pressures, blanching pallor, or dynamic weakening of the radial pulse during provocative physical maneuvers. Advanced cases present with embolic digital gangrene.</li>
            <li><strong>Venous Insufficiency:</strong> Extremely rare in isolation, as the subclavian vein runs an anatomical course outside the primary area of compression.</li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Explain the exact anatomical relationship that protects the Subclavian Vein from being compressed by a Cervical Rib.</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> The **Subclavian Vein** passes completely **Anterior** to the Scalenus Anterior muscle. In contrast, the Cervical Rib, the Subclavian Artery, and the Brachial Plexus trunks are located **Posterior** to the Scalenus Anterior muscle within the interscalene triangle. Because the muscle acts as a barrier, the vein is protected from direct compression by the accessory bony structure.</p>
                </div>
            </details>
        </div>

        <h2>4. Diagnostic Investigations</h2>
        <ul>
            <li><strong>Cervical Spine Radiography (AP View):</strong> 
                <ul>
                    <li>Visualizes the accessory rib extending from the C7 transverse process.</li>
                    <li><strong style="color: #b71c1c;">Diagnostic Note:</strong> Radiographic size does not correlate with symptom severity. A small, pointed rib variant attached to a tight, invisible **fibrous band** can cause more severe neurovascular irritation than a large, smoothly shaped bony rib.</li>
                </ul>
            </li>
            
            <li><strong>Duplex Ultrasonography & CT Angiography:</strong> Evaluates structural arterial narrowing, documents post-stenotic aneurysmal changes, and rules out standard mural thrombosis.</li>
            <li><strong>Electromyography & Nerve Conduction Studies (EMG/NCS):</strong> Confirms low-amplitude sensory nerve action potentials along the ulnar nerve alongside selective T1 axon loss, helping differentiate the condition from peripheral nerve entrapments.</li>
        </ul>

        <h2>5. Differential Diagnosis Interface</h2>
        <p>It is critical to distinguish Thoracic Outlet Syndrome from distal upper extremity nerve entrapment syndromes:</p>

        <table>
            <thead>
                <tr>
                    <th>Clinical Entity</th>
                    <th>Anatomical Pattern of Sensory Loss</th>
                    <th>Objective Muscle Wasting Signature</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Cervical Rib (True Neurogenic TOS)</strong></td>
                    <td><strong>Medial 1.5 Digits</strong> and the matching ulnar border of the forearm (C8/T1 tracking).</td>
                    <td>Diffuse wasting of all intrinsic hand muscles, with marked atrophy of the **Thenar Eminence** (Gilliatt-Sumner signature).</td>
                </tr>
                <tr>
                    <td><strong>Carpal Tunnel Syndrome</strong></td>
                    <td><strong>Lateral 3.5 Digits</strong> on the palmar surface (Spares the proximal palm via the palmar cutaneous branch).</td>
                    <td>Isolated wasting of the **Thenar muscles** (LOAF muscles); the hypothenar and interossei groups remain fully intact.</td>
                </tr>
                <tr>
                    <td><strong>Cubital Tunnel Syndrome</strong> (Ulnar Entrapment)</td>
                    <td><strong>Medial 1.5 Digits</strong> (Includes both the palmar and dorsal aspects of the ulnar hand).</td>
                    <td>Wasting of the **Hypothenar Eminence** and Interossei fields; the thenar eminence is entirely spared.</td>
                </tr>
            </tbody>
        </table>

        <h2>6. Management Paradigms</h2>

        <h3>A. Conservative & Rehabilitative Protocols</h3>
        <ul>
            <li>Indicated for mild, intermittent neurogenic symptoms without objective motor loss. Focuses on targeted physical therapy for shoulder girdle elevation and scalene muscle lengthening to widen the costoclavicular space.</li>
        </ul>

        <h3>B. Operative Surgical Decompression</h3>
        <ul>
            <li><strong>Definitive Surgical Indications:</strong>
                <ol>
                    <li>Intolerable pain or paresthesias that fail standard non-operative therapy.</li>
                    <li>Progressive motor deficits, including visible hand muscle wasting or weakness.</li>
                    <li>Vascular complications, such as peripheral ischemia, structural aneurysms, or distal micro-emboli.</li>
                </ol>
            </li>
            <li><strong>Surgical Technique:</strong> Resection of the cervical rib structure along with complete division of its associated compressive fibrous bands.
                <ul>
                    <li><em>Anatomical Exposure Options:</em> The <strong>Supraclavicular Approach</strong> is generally preferred because it provides excellent visualization of the brachial plexus trunks and the subclavian artery. The transaxillary approach is an alternative option often used for simpler rib configurations.</li>
                </ul>
            </li>
        </ul>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Evaluation)</h3>
            <p><em>Synthesize your anatomical and surgical knowledge against these oral examination scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>Explain how structural arterial narrowing leads to aneurysmal dilatation directly after the point of compression.</li>
                <li>Why can an accessory cervical rib cause symptoms if it appears tiny or incomplete on a standard neck X-ray?</li>
                <li>How do you differentiate a cervical rib from carpal tunnel syndrome based on sensory symptoms?</li>
                <li>Which surgical exposure offers the clearest access to the trunks of the brachial plexus during an accessory rib resection?</li>
                <li>True or False: The absolute length of a cervical rib on an X-ray correlates directly with the severity of a patient's neurological symptoms.</li>
            </ol>
            
            <details style="margin-top: 20px;">
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>According to fluid dynamics, blood velocity increases as it passes through the narrowed stenotic segment. As it exits this zone, it creates **high-energy turbulent flow and vortex currents**. This constant mechanical stress degrades the elastic lamina of the vessel wall over time, leading to an aneurysm.</li>
                        <li>An incomplete bony rib often continues as a **dense, unyielding fibrous band** that connects directly to the first rib. While this radiolucent band is invisible on an X-ray, it can cause severe mechanical traction and compression on the adjacent lower trunk of the brachial plexus.</li>
                        <li>A **Cervical Rib** causes sensory disturbances along the **medial 1.5 digits and the ulnar border of the forearm** (C8/T1). **Carpal Tunnel Syndrome** causes sensory deficits across the **lateral 3.5 digits** (Median nerve) and does not affect the forearm.</li>
                        <li>The **Supraclavicular Approach** provides the most direct visualization, allowing the surgeon to safely isolate the trunks of the brachial plexus and control the subclavian vessels.</li>
                        <li>**False.** Small, incomplete cervical ribs associated with tight fibrous bands frequently cause more severe nerve traction and compression symptoms than large, fully formed, asymptomatic bony ribs.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"diabetic-foot": {
    title: "Diabetic Foot: Pathogenesis & Prevention",
    videoUrl: "coming-soon",
    duration: "22 mins",
    notes: `
      <style>
        @media print {
            .df-path-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .df-path-notes details { display: block; }
            .df-path-notes details[open] summary ~ * { animation: none; }
        }
        .df-path-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .df-path-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .df-path-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .df-path-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .df-path-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .df-path-notes .box-red { background-color: #ffebee; border: 2px solid #c62828; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .df-path-notes .box-green { background-color: #e8f5e9; border: 2px solid #2e7d32; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .df-path-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background-color: #fff; }
        .df-path-notes th, .df-path-notes td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; vertical-align: top; }
        .df-path-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; }
        .df-path-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .df-path-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .df-path-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .df-path-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .df-path-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .df-path-notes ul, .df-path-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .df-path-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="df-path-notes">
        <h1>Diabetic Foot: Pathogenesis & Prevention</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Surgery Core Curriculum: The Neuropathic Triad, Diagnostic Microvascular Assessment, and Proactive Podiatric Protocols
        </p>

        <h2>1. Etiology & Pathogenesis: The Pathological Triad</h2>
        <p>Diabetic foot ulceration and tissue loss are driven by three distinct yet synergistic pathological vectors: **Neuropathy**, **Ischemia**, and **Infection**. Prolonged tissue exposure to hyperglycemia sets off a cascade of non-enzymatic glycation, leading to advanced glycation end-products (AGEs) and structural micro/macrovascular damage.</p>

        <div class="box-red">
            <h3 style="margin-top:0; color:#b71c1c;">🚨 Core Surgical Concept: The Insidious Painless Trauma</h3>
            <p>The primary driver of tissue destruction is the absolute **Loss of Protective Sensation (LOPS)**. Because mechanical warning signals are lost, repetitive micro-trauma—such as an ill-fitting shoe or an overlooked foreign object—goes completely unnoticed. The patient continues normal weight-bearing activities, converting unrecognized blisters into deep, contaminated plantar space ulcerations.</p>
        </div>

        <h3>A. Peripheral Neuropathy (The Core Initiator)</h3>
        <ul>
            <li><strong>Sensory Neuropathy:</strong> Symmetric axonal degeneration affecting the longest nerve fibers first, creating a classic **"glove-and-stocking"** deficit. This compromises fine touch, pain, and thermal awareness, establishing LOPS.</li>
            <li><strong>Motor Neuropathy:</strong> Denervation and subsequent atrophy of the intrinsic foot musculature (specifically the lumbrical and interossei muscles).
                <br><em>Biomechanical Collapse:</em> The loss of intrinsic stabilization allows the long extensors to pull unopposed, producing structural **claw toe** or hammer toe deformities. This shifts the protective distal fat pads forward, exposing the prominent **metatarsal heads** to extreme localized mechanical stress.</li>
            <li><strong>Autonomic Neuropathy:</strong> Loss of sympathetic cholinergic input to the eccrine sweat glands leads to absolute **hidrosis/anhidrosis**. The skin becomes dry, inelastic, and prone to linear cracks and deep fissures that serve as direct portals for bacterial entry. Additionally, the loss of sympathetic vascular tone causes persistent arteriovenous (A-V) shunting, which bypasses the capillary bed and leads to localized osteoclast upregulation.</li>
        </ul>

        <h3>B. Ischemia (Peripheral Arterial Disease)</h3>
        <ul>
            <li><strong>Macrovascular Occlusion:</strong> Accelerated atherosclerosis with a strong predilection for the infrapopliteal segment (specifically the anterior and posterior tibial arteries). The vessels show characteristically diffuse, multi-segmental narrowing, though the dorsalis pedis artery is often spared.</li>
            <li><strong>Microvascular Changes:</strong> Capillary basement membrane thickening compromises endothelial cell plasticity and slows down leukocyte transmigration, creating an ischemic microenvironment that impairs normal tissue remodeling.</li>
        </ul>

        <h3>C. Superimposed Tissue Infection</h3>
        <ul>
            <li><strong>Polymicrobial Synergy:</strong> Chronic diabetic foot infections are characteristically complex and polymicrobial. They involve Gram-positive cocci (Staphylococcus aureus, Streptococcus spp.), Gram-negative rods (Pseudomonas aeruginosa, Proteus spp.), and fastidious **anaerobes** (Bacteroides fragilis, Clostridium spp.) residing in deep fascial planes, which produce a distinct putrid odor.</li>
            <li><strong>Metabolic Immunosuppression:</strong> Intracellular hyperglycemia impairs normal polymorphonuclear leukocyte function, blunting chemotaxis, adherence, and superoxide radical generation.</li>
        </ul>

        <h2>2. Ulcer Typology Comparison</h2>
        
        

        <table>
            <thead>
                <tr>
                    <th>Diagnostic Feature</th>
                    <th>Pure Neuropathic Ulceration</th>
                    <th>Pure Ischemic / Arterial Ulceration</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Symptomatology</strong></td>
                    <td>**Asymptomatic / Painless**; often discovered incidentally by inspection or via staining on socks.</td>
                    <td>Exquisitely **painful**; exacerbated by limb elevation and dynamic exertion; often causes severe nocturnal rest pain.</td>
                </tr>
                <tr>
                    <td><strong>Anatomical Positioning</strong></td>
                    <td>Confined to weight-bearing plantar pressure zones (e.g., over the first metatarsal head, sub-hallux, or heel matrix).</td>
                    <td>Located on non-weight-bearing zones: Tips of digits, interdigital webs, or the lateral border of the foot.</td>
                </tr>
                <tr>
                    <td><strong>Morphological Character</strong></td>
                    <td>Classic **"punched-out"** geometry with a deep granulating base, surrounded by a thick, hyperkeratotic ring of callus.</td>
                    <td>Irregular, shallow borders with a pale, fibrotic, or necrotic black eschar base; completely lacks surrounding callus.</td>
                </tr>
                <tr>
                    <td><strong>Perfusion Signs</strong></td>
                    <td>The foot remains warm with bounding, palpable dorsalis pedis and posterior tibial arterial pulses.</td>
                    <td>The foot is cold and pale with marked dependent rubor, trophic skin changes (loss of hair, shiny skin), and absent pulses.</td>
                </tr>
            </tbody>
        </table>

        <h2>3. Objective Bedside Clinical Assessment</h2>

        <h3>A. Neurological Mapping</h3>
        <ul>
            <li><strong>10g Semmes-Weinstein Monofilament Test (Gold Standard):</strong> Consists of a calibrated nylon filament applied perpendicular to the skin until it bows, delivering exactly 10 grams of linear force. This specific threshold identifies the loss of protective touch sensation.
                <br><em>Anatomical Evaluation Sites:</em> Evaluated at 10 reproducible zones: Plantar aspects of digits 1, 3, and 5; metatarsal heads 1, 3, and 5; the medial and lateral midfoot; the heel matrix; and the first dorsal web space. Inability to perceive the stimulus at any of these sites establishes LOPS.</li>
            <li><strong>Vibratory Threshold Tracking:</strong> Quantitative evaluation using a 128 Hz tuning fork over the bony dorsal aspect of the first hallux IP joint, or using an electronic biothesiometer (voltages &gt; 25V indicate high risk).</li>
        </ul>

        <h3>B. Macrovascular Perfusion Evaluation</h3>
        <ul>
            <li><strong>Ankle-Brachial Pressure Index (ABPI):</strong> Calculated by dividing the highest systolic pressure at the ankle by the highest brachial systolic pressure. Normal ranges span 0.9 to 1.2.
                <br><em>Diagnostic Pitfall:</em> Long-standing diabetic patients often undergo **Mönckeberg's medial calcification** (tunica media sclerosis). This rendering of the lower extremity arteries non-compressible yields falsely elevated, high ABPI values (&gt; 1.3). In this scenario, physicians must verify perfusion using a **Toe-Brachial Index (TBI)**, as the small digital arteries are typically spared from medial calcification.</li>
        </ul>

        <h3>C. The Probe-to-Bone (PTB) Test</h3>
        <ul>
            <li><strong>Clinical Execution:</strong> Advancing a sterile, blunt-ended metal probe gently through the base of an open ulceration.</li>
            <li><strong>Interpretation:</strong> A positive result is recorded when the probe encounters a hard, gritty, unyielding surface. This bedside finding has a high positive predictive value for underlying **Osteomyelitis**, mandating targeted radiological verification and bone biopsy protocols.</li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Outline the detailed pathophysiological sequence responsible for Charcot Neuroarthropathy (Neuropathic Osteoarthropathy) in the diabetic foot.</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> Charcot Neuroarthropathy is triggered by a combination of neurovascular and neurotraumatic factors. **Autonomic neuropathy** eliminates sympathetic tone, causing persistent microvascular dilatation and arteriovenous shunting. This markedly increases localized osseous blood flow, triggering osteoclast upregulation and bone demineralization. Concurrently, **sensory neuropathy** eliminates protective pain feedback. The patient continue to walk on micro-fractures, causing progressive, unchecked osteochondral fragmentation, joint subluxation, and ligamentous laxity. Ultimately, the midfoot collapse produces the classic **"rocker-bottom" deformity**, establishing high-pressure bony prominences that are highly vulnerable to breakdown.</p>
                </div>
            </details>
        </div>

        <h2>4. Preventative Strategies: The Podiatric Safety Network</h2>
        <p>Proactive podiatric intervention is the single most effective way to reduce major amputation rates in patients with diabetes.</p>

        <div class="box-green">
            <h3 style="margin-top:0; color:#1b5e20;">🦶 Evidence-Based Home Care Protocols</h3>
            <ol>
                <li><strong>Systematic Visual Inspection:</strong> Daily evaluation of both plantar surfaces using a specialized long-handled mirror or with the assistance of a caregiver. Patients must look for early erythema, hidden blisters, interdigital maceration, or subungual ecchymosis.</li>
                <li><strong>Biomechanical Footwear Modifications:</strong> Wearing specialized custom-molded shoes equipped with soft Microcellular Rubber (MCR) orthotic insoles to evenly distribute weight. Shoes must feature a deep, wide toe box to prevent digital friction. Walking barefoot—even indoors—is strictly prohibited. Patients must inspect inside their shoes before wearing them to remove any foreign objects.</li>
                <li><strong>Hygienic Maintenance:</strong> Daily washing with lukewarm water, verifying the temperature first with the elbow to avoid thermal injury. The skin must be patted dry completely, with particular attention to the **interdigital spaces** to prevent fungal proliferation.</li>
                <li><strong>Targeted Emollient Application:</strong> High-urea creams should be applied daily to dry heels and soles to prevent cracking. However, emollients must **never be applied between the toes**, as this can cause tissue maceration and create a portal for bacterial infection.</li>
                <li><strong>Prohibition of Self-Treatment:</strong> Absolute avoidance of sharp instruments or over-the-counter chemical salicylic acid pads to self-treat calluses or corns. All hyperkeratotic tissue must be pared down exclusively by a trained podiatrist.</li>
            </ol>
        </div>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Synthesize your understanding of diabetic foot pathogenesis against these standard oral examination questions:</em></p>
            <ol style="margin-left: 20px;">
                <li>Describe the precise structural mechanism by which motor neuropathy leads to plantar ulceration at the metatarsal heads.</li>
                <li>An elderly diabetic patient presents with an ABPI of 1.45, but demonstrates a cool foot with absent pulses. Explain this clinical discrepancy.</li>
                <li>What is the precise physical property and force calibration of the Semmes-Weinstein monofilament used to diagnose LOPS?</li>
                <li>Explain why autonomic neuropathy increases the risk of deep bacterial infections even in the absence of mechanical trauma.</li>
                <li>How does the presence of Charcot neuroarthropathy fundamentally alter the selection of custom orthotics compared to a standard neuropathic foot?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>Motor neuropathy causes wasting of the intrinsic lumbrical and interossei muscles of the foot. These muscles normally flex the metatarsophalangeal (MTP) joints and extend the interphalangeal (IP) joints. Their loss allows the long extensors to pull unopposed, causing hyperextension at the MTP joint and flexion at the IP joints (**claw toe deformity**). This structural shift pulls the protective plantar fat pad forward, exposing the bare metatarsal heads to high focal pressure and shear forces during walking, which leads to tissue breakdown.</li>
                        <li>An ABPI of 1.45 is falsely elevated due to **Mönckeberg's medial calcification**. Calcium deposits within the tunica media create highly rigid, non-compressible arterial walls that resist external blood pressure cuff inflation, requiring very high pressures to occlude the vessel. This artifact hides underlying, severe lower extremity peripheral arterial disease (PAD), which is clinically confirmed by the cold skin and absent pulses. Perfusion should instead be evaluated using a Toe-Brachial Index (TBI) or pulse volume recordings.</li>
                        <li>The diagnostic monofilament is precisely calibrated to use a **size 5.07 nylon filament**, which buckles or bends when exactly **10 grams of linear force** is applied perpendicular to the skin. Inability to feel this specific stimulus confirms the loss of protective sensation, identifying patients at high risk for neuropathic ulceration.</li>
                        <li>Autonomic neuropathy impairs sympathetic cholinergic pathways, leading to a complete loss of sweating (**anhidrosis**). Without normal hydration, the stratum corneum dries out, loses elasticity, and develops deep cracks and linear fissures. These fissures break the physical skin barrier, providing a direct route for ambient skin bacteria to bypass the dermis and seed deep fascial spaces, even without an external mechanical injury.</li>
                        <li>A standard neuropathic foot requires custom orthotics focused on reducing pressure beneath the metatarsal heads and toes. In contrast, Charcot neuroarthropathy causes collapse of the midfoot arch, creating a classic **"rocker-bottom" deformity** with a prominent, down-dropped medial midfoot bony structure. Orthotics for a Charcot foot must be custom-molded to accommodate this abnormal midfoot prominence, using a total-contact approach to prevent high-pressure ulceration along the middle of the sole.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"diabetic-foot-management": {
    title: "Management of Diabetic Foot Ulcers",
    videoUrl: "coming-soon",
    duration: "25 mins",
    notes: `
      <style>
        @media print {
            .dfu-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .dfu-notes details { display: block; }
            .dfu-notes details[open] summary ~ * { animation: none; }
        }
        .dfu-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .dfu-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .dfu-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .dfu-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .dfu-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .dfu-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background-color: #fff; }
        .dfu-notes th, .dfu-notes td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; vertical-align: top; }
        .dfu-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; }
        .dfu-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .dfu-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .dfu-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .dfu-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .dfu-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .dfu-notes ul, .dfu-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .dfu-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="dfu-notes">
        <h1>Management of Diabetic Foot Ulcers</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          General Surgery Board Focus: Meggit-Wagner Staging, Neuropathic Biomechanics, Off-loading Protocols, and Limb-Salvage Decisions
        </p>

        <h2>1. Meggit-Wagner Classification System</h2>
        <p><em>This remains the standard classification scheme for assessing diabetic foot pathology in clinical examinations. Staging correlates directly with amputation risk and drives the management algorithm.</em></p>
        
        

        <table>
            <thead>
                <tr>
                    <th>Grade</th>
                    <th>Pathomorphological Status</th>
                    <th>Definitive Surgical / Clinical Strategy</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Grade 0</strong></td>
                    <td>**High-Risk Foot Structure:** No active open ulcer. Presence of thick hyperkeratotic callus, structural bone deformities (e.g., claw toes, Charcot arthropathy), or fully healed previous ulcers.</td>
                    <td>Aggressive prevention: Custom orthotics, accommodative wide-toe box footwear modification, and routine podiatric care.</td>
                </tr>
                <tr>
                    <td><strong>Grade 1</strong></td>
                    <td>**Superficial Ulceration:** Full-thickness skin loss that isolates to the epidermis and dermis, without penetrating subcutaneous tissue or fascia.</td>
                    <td>Local wound optimization: Moist wound healing dressings, aggressive off-loading, and tight glycemic modulation.</td>
                </tr>
                <tr>
                    <td><strong>Grade 2</strong></td>
                    <td>**Deep Ulcer Extension:** Base penetrates deeply through subcutaneous fat to expose underlying tendon, ligament, joint capsule, or cortical bone. No localized abscess or bone infection is present.</td>
                    <td>Sharp operational debridement, targeted empirical or culture-guided antibiotic therapy, and total mechanical off-loading.</td>
                </tr>
                <tr>
                    <td><strong>Grade 3</strong></td>
                    <td>**Complicated Deep Tissue Sepsis:** Deep ulcer complicated by localized tracking abscess, tendon sheath infection, purulent joint sepsis, or frank **Osteomyelitis**.</td>
                    <td>Urgent surgical emergency: Formal incision, drainage, exploration, and non-viable bone resection/sequestrectomy.</td>
                </tr>
                <tr>
                    <td><strong>Grade 4</strong></td>
                    <td>**Forefoot Gangrene:** Localized dry or wet ischemic necrosis restricted entirely to the toes, webs, or digital metatarsal heads.</td>
                    <td>Urgent revascularization assessment followed by **Minor Amputation** (e.g., ray amputation or transmetatarsal amputation).</td>
                </tr>
                <tr>
                    <td><strong>Grade 5</strong></td>
                    <td>**Unsalvageable Foot Gangrene:** Extensive, irreversible ischemic necrosis involving the entire midfoot, hindfoot, or total foot envelope.</td>
                    <td>Limb-stabilizing **Major Amputation** (typically Below-Knee Amputation) to eliminate structural systemic sepsis.</td>
                </tr>
            </tbody>
        </table>

        <h2>2. Foundational Pillars of Management</h2>
        <p>Diabetic foot complications mandate an integrated multidisciplinary approach. The core guiding principle is: **Treat the complex metabolic patient, not simply the physical wound in the foot.**</p>

        <h3>A. Metabolic & Nutritional Optimization</h3>
        <ul>
            <li><strong>Intensive Glycemic Regulation:</strong> Continuous **intravenous insulin infusions** are highly preferred over oral hypoglycemic agents in the setting of acute wound sepsis. Hyperglycemia profoundly compromises neutrophil chemotaxis, phagocytosis, and intracellular oxidative killing.</li>
            <li><strong>Nutritional Support:</strong> Wound healing relies heavily on protein-calorie equilibrium. A serum **albumin &gt; 3.0 g/dL** and a total lymphocyte count &gt; 1,500/mm³ are required to support collagen synthesis and fibroblast proliferation.</li>
            <li><strong>Comorbidity Control:</strong> Optimization of cardiorenal reserve, correcting severe anemia, and modifying microvascular risk drivers.</li>
        </ul>

        <h3>B. Advanced Wound Bed Preparation (Surgical Debridement)</h3>
        <ul>
            <li><strong>Sharp Surgical Debridement:</strong> Serial removal of all chronic, senescent, necrotic, and non-viable bacterial bioburden until a healthy, bleeding margin of vascularized tissue is established.</li>
            <li><strong>Complete Callus Paring:</strong> The hyperkeratotic rim surrounding a neuropathic ulcer must be trimmed down to skin level.
                <br><em>Pathophysiological Rationale:</em> The thick callus acts as an unyielding mechanical foreign body. It concentrates high shear-stress pressures directly onto the delicate ulcer edges and physically arrests inward **epithelial cell migration**, resulting in a static, "stepped" non-healing edge.</li>
        </ul>

        <h3>C. Microbiological Clearance</h3>
        <ul>
            <li><strong>Tissue Biopsy vs. Surface Swabs:</strong> Superficial wound swabs are frequently contaminated by benign skin commensals and fail to reflect deep pathogens. Diagnostic clarity requires **deep tissue punch biopsies** or scrapings from the ulcer base after thorough debridement.</li>
            <li><strong>Antimicrobial Selection:</strong> Early initiation of empiric broad-spectrum intravenous therapy, which is quickly tailored to specific cultures. 
                <br><em>Required Coverage:</em> Must cover Gram-positive cocci (including MRSA), Gram-negative bacilli (Pseudomonas aeruginosa), and mandatory coverage for deep tissue virulent **anaerobes** (e.g., using Metronidazole, Clindamycin, or Piperacillin/Tazobactam).</li>
        </ul>

        <h3>D. Biomechanical Off-loading</h3>
        <p style="font-weight: bold; font-style: italic; color: #b71c1c;">"You cannot heal an ischemic or neuropathic wound that you continue to walk on."</p>
        
        
        
        <ul>
            <li><strong>Total Contact Cast (TCC):</strong> Globally accepted as the **Gold Standard** for managing non-infected, non-ischemic neuropathic plantar ulcers (Wagner Grades 1–2). It is custom-molded to the patient's lower extremity, transferring and redistributing weight away from the high-pressure forefoot metatarsal heads onto the broad muscular surface of the calf belly.</li>
            <li><strong>Alternative Modalities:</strong> Removable pneumatic walking boots (Air-cast) rendered irremovable via security bands, half-shoes designed to off-load the forefoot, or specialized Microcellular Rubber (MCR) orthotic footwear.</li>
        </ul>

        <h3>E. Macro- and Micro-Vascular Assessment</h3>
        <ul>
            <li><strong>Ischemic Screening:</strong> Every patient must undergo continuous lower extremity arterial mapping. If peripheral arterial disease is present (e.g., flat pulse volume recordings, monophasic Doppler waveforms, Ankle-Brachial Index &lt; 0.5), **revascularization must take priority** over major surgical interventions. Debriding or amputating tissues without restoring macroscopic pulsatile blood flow leads to non-healing wounds and progressive tissue necrosis.</li>
            <li><strong>Revascularization Strategies:</strong> Percutaneous transluminal angioplasty (PTA) with stenting or open autologous saphenous vein bypass grafting (e.g., femoral-to-distal target vessels).</li>
        </ul>

        <h2>3. Advanced Adjunctive Therapies</h2>
        <ul>
            <li><strong>Negative Pressure Wound Therapy (NPWT/VAC):</strong> Applies controlled negative sub-atmospheric pressure to the wound bed. This drains interstitial edema, accelerates local microvascular perfusion, and triggers macro-deformation to support rapid granulation tissue development.</li>
            <li><strong>Hyperbaric Oxygen Therapy (HBOT):</strong> Intermittent inhalation of 100% oxygen at pressures greater than 1 atmosphere. This elevates tissue oxygen tension in ischemic beds, enhancing oxidative leukocyte killing and suppressing fastidious anaerobic bacteria.</li>
            <li><strong>Bioactive Growth Factors:</strong> Topically applied recombinant human platelet-derived growth factor (rhPDGF) gels to stimulate chemotaxis and mitogenesis in chronic, indolent wounds.</li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What are the two absolute clinical contraindications for utilizing a Total Contact Cast (TCC) for off-loading a diabetic foot ulcer?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong>
                    <br>1. **Active deep infection or undrained tract abscess (Wagner Grade &ge; 3):** Encasing an infected limb in a semi-permanent cast prevents mandatory daily visual inspection, wound hygiene, and serial tracking of necrotizing progression.
                    <br>2. **Severe Peripheral Arterial Disease / Critical Ischemia (ABI &lt; 0.5 or flat waveforms):** Rigid cast contact pressure against thin, poorly perfused skin can cause friction, localized pressure necrosis, and trigger secondary ischemic tissue loss.</p>
                </div>
            </details>
        </div>

        <h2>4. Definitive Surgical Approaches</h2>
        <ul>
            <li><strong>Incision, Drainage & Compartment Exploration:</strong> Indicated immediately for deep plantar space abscesses. The thick plantar fascia can mask tense loculations of pus, requiring long longitudinal incisions to open deep muscle compartments and prevent progressive ischemia of intrinsic foot muscles.</li>
            <li><strong>Minor Amputations (Flow Preservation):</strong>
                <ul>
                    <li>**Ray Amputation:** Resection of an entire infected digit along with its corresponding metatarsal head. This preserves lateral balance but alters weight-bearing distribution.</li>
                    <li>**Transmetatarsal Amputation (TMA):** Transverse mid-shaft transection of all five metatarsals. This creates a functional, balanced construct that preserves normal heel strike and ankle dorsiflexion.</li>
                </ul>
            </li>
            <li><strong>Major Amputations (Life over Limb):</strong>
                <ul>
                    <li>**Transtibial / Below-Knee Amputation (BKA):** Highly preferred over Above-Knee Amputations because it preserves the native knee joint mechanism. This vastly improves energy-efficient prosthetic rehabilitation and functional mobility.</li>
                    <li>**Primary Indications:** Uncontrollable, life-threatening necrotizing soft tissue sepsis, total loss of the heel/hindfoot weight-bearing matrix, or irreversible extensive gangrene in a limb with completely un-reconstructable peripheral arterial disease.</li>
                </ul>
            </li>
        </ul>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Apply your general surgery and limb-salvage principles to these advanced oral examination scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>Explain why a routine superficial swab taken from a wet, open diabetic foot ulcer is considered inadequate and potentially dangerous for guiding antibiotic adjustments.</li>
                <li>What precise clinical or radiographic findings elevate a diabetic foot ulcer from a Wagner Grade 2 to a Wagner Grade 3 designation?</li>
                <li>Describe the physiological mechanism by which poorly controlled diabetes causes Charcot neuroarthropathy, and explain how it alters weight-bearing mechanics.</li>
                <li>A patient presents with a foul-smelling, gas-forming ulcer on the sole of the foot, accompanied by fever, tachycardia, and a serum glucose of 450 mg/dL. Outline your immediate management steps.</li>
                <li>Why is the preservation of the knee joint during a Below-Knee Amputation (BKA) considered so critical to the long-term survival of a diabetic patient?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>Superficial swabs reflect surface colonization by non-pathogenic environmental commensals rather than the virulent pathogens causing deep tissue necrosis. Relying on swab data can lead to inadequate treatment of deep anaerobes or Gram-negative bacilli, increasing the risk of uncontrolled sepsis and unexpected amputation.</li>
                        <li>An ulcer is elevated to a **Grade 3** when it is complicated by deep tissue collections (abscess), active joint space purulent contamination (septic arthritis), or clear evidence of **Osteomyelitis** (confirmed by a positive "probe-to-bone" test, cortical erosion on plain radiographs, or bone marrow signal changes on MRI).</li>
                        <li>Diabetes induces peripheral **sensory and autonomic neuropathy**. Sensory loss eliminates protective pain reflexes, exposing the foot to chronic repetitive micro-trauma. Autonomic neuropathy causes chronic digital arteriolar vasodilation, resulting in hyperemic osteoclast activation and bone resorption. This causes micro-fractures and collapse of the midfoot joints (classic **"rocker-bottom" deformity**), creating new high-pressure bony prominences that break down into recurrent plantar ulcers.</li>
                        <li>This is a surgical emergency requiring immediate admission and stabilization. Initial steps include **aggressive fluid resuscitation**, starting an **intravenous regular insulin infusion** to safely bring down blood glucose, and administering empiric, broad-spectrum IV antibiotics (e.g., Piperacillin/Tazobactam + Vancomycin). Plain X-rays should be checked for soft-tissue gas, followed by an immediate transfer to the operating room for formal **incision, wide drainage, and thorough debridement** of all non-viable tissue.</li>
                        <li>Preserving the knee joint lowers the mechanical energy cost of walking with a prosthesis by 30-40% compared to an Above-Knee Amputation (AKA). Because diabetic patients often have significant cardiovascular disease, the high cardiac demand of an AKA can prevent successful prosthetic rehabilitation, confining the patient to a wheelchair. Maintaining a functional knee joint preserves mobility, helps prevent pressure injuries, and significantly reduces the 5-year mortality rate associated with post-amputation immobility.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"acute-limb-ischemia": {
    title: "Acute Limb Ischemia",
    videoUrl: "coming-soon",
    duration: "24 mins",
    notes: `
      <style>
        @media print {
            .ali-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .ali-notes details { display: block; }
            .ali-notes details[open] summary ~ * { animation: none; }
        }
        .ali-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .ali-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .ali-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .ali-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .ali-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .ali-notes .box-red { background-color: #ffebee; border: 2px solid #c62828; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .ali-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background-color: #fff; }
        .ali-notes th, .ali-notes td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; vertical-align: top; }
        .ali-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; }
        .ali-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .ali-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .ali-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .ali-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .ali-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .ali-notes ul, .ali-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .ali-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="ali-notes">
        <h1>Acute Limb Ischemia (ALI)</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Vascular Surgery Emergency: Differential Pathomechanics, The 6 Ps, Fogarty De-clotting Maneuvers, and Reperfusion Biochemistry
        </p>

        <h2>1. Differential Pathogenesis: Embolism vs. Thrombosis</h2>
        <p>Acute Limb Ischemia is defined as a sudden, rapid decrease in lower extremity limb perfusion that threatens structural viability. Distinguishing between an embolic and a thrombotic etiology is crucial for selecting the appropriate surgical treatment.</p>
        
        <table>
            <thead>
                <tr>
                    <th>Clinical Axis</th>
                    <th>Embolic Occlusion (~80%)</th>
                    <th>In Situ Thrombotic Occlusion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Temporal Onset</strong></td>
                    <td>**Hyper-acute / Dramatic:** Sudden onset over seconds or minutes. Complete lack of time for collateral vascular recruitment.</td>
                    <td>**Sub-acute / Stuttering:** Evolution over hours or days, frequently masked by preexisting collaterals.</td>
                    <td>**Sub-acute / Stuttering:** Evolution over hours or days, frequently masked by preexisting collaterals.</td>
                </tr>
                <tr>
                    <td><strong>Primary Source</strong></td>
                    <td>**Cardiogenic Migration:** Structural thrombi from Atrial Fibrillation, mural thrombus post-Myocardial Infarction, or valvular vegetations.</td>
                    <td>**Atherosclerotic Plaque Rupture:** Localized coagulation over a chronic plaque, bypass graft failure, or popliteal aneurysm degradation.</td>
                </tr>
                <tr>
                    <td><strong>Vascular History</strong></td>
                    <td>No structural history of peripheral vascular deficits or intermittent claudication.</td>
                    <td>Long-standing, well-documented history of **intermittent claudication** or ischemic rest pain.</td>
                </tr>
                <tr>
                    <td><strong>Contralateral Pulse Profile</strong></td>
                    <td>**Normal / Bounding:** Systemic peripheral vessels typically display robust, uncompromised pulses.</td>
                    <td>**Absent / Diminished:** Contralateral limb demonstrates diffuse, multi-segmental occlusive arterial disease.</td>
                </tr>
            </tbody>
        </table>

        <h2>2. Clinical Presentation: The Seminal "6 Ps"</h2>
        <p>The standard clinical presentation of a classic ischemic extremity combines six key signs. The sequence of their emergence tracks the progression of ischemic cellular death.</p>
        
        

        <ul>
            <li><strong>Pain:</strong> The earliest, most consistent, and most prominent clinical sign. It presents as an agonizing, unremitting ache that is completely refractory to conventional non-opioid analgesia, driven by localized tissue ischemia.</li>
            <li><strong>Pallor:</strong> Initial vasoconstriction produces a cold, waxy-white appearance. Over time, capillary stagnation leads to irregular **mottling** (livedo reticularis). Fixed, non-blanching mottling is an indicator of irreversible tissue death.</li>
            <li><strong>Pulselessness:</strong> Absolute lack of palpable arterial waveforms at the femoral, popliteal, dorsalis pedis, or posterior tibial stations.</li>
            <li><strong>Paresthesia:</strong> Loss of light touch, vibratory sense, and proprioception. <span class="highlight">Ominous Diagnostic Sign</span>—the fastidious peripheral A-alpha sensory axons are highly sensitive to oxygen deprivation, indicating immediate threat to the limb.</li>
            <li><strong>Paralysis:</strong> Structural loss of motor control (e.g., foot drop, inability to flex the digits). This indicates advanced ischemic injury to deep muscle bodies and carries a poor prognosis for limb salvage.</li>
            <li><strong>Poikilothermia:</strong> The limb becomes cold to the touch, losing its ability to auto-regulate temperature and matching the ambient room temperature.</li>
        </ul>

        <h2>3. Emergency Therapeutic Workup</h2>
        <p><strong>The Golden Window:</strong> Complete revascularization must be established within **6 hours** of onset to prevent extensive ischemic contractures, gangrene, and lower extremity loss.</p>

        <h3>A. Immediate Medical Stabilization</h3>
        <ul>
            <li><strong>Aggressive Intravenous Heparinization:</strong> Administer an immediate system-wide **5,000 IU unfractionated heparin bolus**, followed by a continuous infusion to keep the aPTT within 2.0 to 2.5 times control.
                <br><em>Mechanism:</em> Heparin does not dissolve the primary structural thrombus. Instead, it prevents downstream thrombus propagation into distal small-vessel capillary beds and protects existing collateral pathways from thrombosing.</li>
            <li><strong>Systemic Support:</strong> High-flow oxygen supplementation and continuous, titratable intravenous opioid analgesia.</li>
        </ul>

        <h3>B. Emergency Surgical Intervention (Embolic Disease)</h3>
        <ul>
            <li><strong>Fogarty Balloon Embolectomy:</strong> The standard surgical procedure for hyper-acute, accessible embolic blockages.</li>
            <li><strong>Operative Technique:</strong>
                <ol>
                    <li>Expose the target vessel under local or general anesthesia and perform a formal transverse arteriotomy (typically targeting the common femoral artery bifurcation).</li>
                    <li>Advance a deflated Fogarty balloon catheter smoothly through the obstructive embolus into the patent distal vascular bed.</li>
                    <li>Inflate the balloon to its calibrated pressure limit using sterile saline solution.</li>
                    <li>Carefully withdraw the inflated catheter back toward the arteriotomy site, extracting the organized embolic mass and secondary thrombi with it. Achieve robust proximal and distal flush before closure.</li>
                </ol>
            </li>
        </ul>

        <h3>C. Catheter-Directed Thrombolysis (Thrombotic Disease)</h3>
        <ul>
            <li><strong>Indications:</strong> Reserved for clinically stable limbs with intact sensory/motor function (**Rutherford Class I or IIa**) where the thrombotic blockage has evolved over less than 14 days.</li>
            <li><strong>Methodology:</strong> Placing an angiographic multi-side-hole infusion catheter directly into the proximal face of the thrombus. This allows continuous infusion of recombinant tissue plasminogen activator (**tPA** or Urokinase) to safely dissolve the clot without risking mechanical vessel wall damage.</li>
        </ul>

        <h2>4. Systemic Metabolic Complications</h2>

        <h3>A. Systemic Reperfusion Syndrome</h3>
        <p>Restoring blood flow to long-deprived ischemic muscle tissue can paradoxically trigger severe systemic illness. When vascular channels reopen, toxic cellular byproducts from ischemic rhabdomyolysis wash out into the central systemic circulation.</p>
        
        <ul>
            <li><strong>Potassium ($K^+$):</strong> Massive hyperkalemia due to cell membrane failure, which can trigger lethal cardiac arrhythmias, including ventricular fibrillation and asystole.</li>
            <li><strong>Myoglobin:</strong> Large proteins filter into the kidney, precipitating in the proximal convoluted tubules. This combines with direct toxic effects to cause **Acute Tubular Necrosis (ATN)** and acute renal failure.</li>
            <li><strong>Lactic Acid & Hydrogen Ions:</strong> Massive washout of anaerobic metabolites causes profound systemic metabolic acidosis, which compromises myocardial contractility.</li>
        </ul>

        <div class="box-red">
            <h3 style="margin-top:0; color:#b71c1c;">🚨 Reperfusion-Induced Compartment Syndrome</h3>
            <p><strong>Pathophysiology:</strong> Severe ischemia degrades capillary endothelial tight junctions. Restoring arterial blood pressure triggers a massive influx of fluid into injured tissues, causing rapid edema. This fluid shift occurs within rigid, unyielding osteofascial boundaries, raising pressures above capillary perfusion pressure and cutting off micro-vascular blood supply.</p>
            <ul>
                <li><strong>Earliest Pathognomonic Sign:</strong> Unbearable, disproportionate **pain elicited during passive stretching** of the involved muscle groups (e.g., passive plantarflexion stretching the anterior tibial compartment).</li>
                <li><strong>Clinical Presentations:</strong> The calf compartment feels tense and wood-hard to the touch. It is critical to note that distal arterial pulses **may still be present** during early stages, as systolic pressure can override tissue pressures. Do not wait for pulselessness to diagnose this condition.</li>
                <li><strong>Definitive Management:</strong> Emergency **four-compartment double-incision lower extremity fasciotomy**. This requires deep surgical incisions to fully open the anterior, lateral, superficial posterior, and deep posterior compartments. It should be performed prophylactically if the limb has been ischemic for more than 4 to 6 hours.</li>
            </ul>
        </div>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Why is monitoring urine output and urine color an absolute requirement after a successful lower-limb embolectomy?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> This monitoring is critical to detect early **myoglobinuria** resulting from ischemic rhabdomyolysis. When myoglobin enters the urine, it causes a distinct dark reddish-brown color (often test-positive for blood on dipstick without red blood cells on microscopy). To protect the kidneys from myoglobin-induced Acute Tubular Necrosis, clinicians must initiate aggressive intravenous fluid resuscitation to maintain high urine output ($\ge 100\text{ mL/hr}$) and administer sodium bicarbonate to **alkalize the urine (target pH }\ge 7.5\text{)}$, which increases myoglobin solubility and prevents intra-tubular precipitation.</p>
                </div>
            </details>
        </div>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Analyze these clinical scenarios using your understanding of vascular emergencies and reperfusion physiology:</em></p>
            <ol style="margin-left: 20px;">
                <li>During a Fogarty embolectomy, how does the surgeon determine the correct inflation volume of the balloon catheter while pulling it through the artery?</li>
                <li>An elderly patient with chronic atrial fibrillation presents with sudden foot pain and severe paresthesias. Doppler ultrasound shows no signal in the dorsalis pedis, but the leg is warm. Where is the most likely location of the embolus?</li>
                <li>Why is the loss of light touch sensation considered a much more urgent clinical warning sign than a pale, cold foot?</li>
                <li>A patient develops peaked T-waves on ECG and a serum potassium of $6.8\text{ mEq/L}$ exactly 30 minutes after successful arterial de-clotting. Explain the cellular mechanism behind this response.</li>
                <li>What are the four specific fascial compartments of the lower leg that must be decompressed during a complete fasciotomy for compartment syndrome?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>The surgeon must monitor the catheter by tactile feedback, using a "fluid-filled syringe" technique. As the catheter is pulled through tapering arterial walls, the balloon must be gradually deflated or inflated to match the narrowing or widening diameter. This maintains constant, gentle contact with the vessel wall to extract the clot without causing internal endothelial tearing or arterial rupture.</li>
                        <li>The embolus is likely lodged at the **popliteal artery trifurcation**. Large emboli from the heart typically travel down the lower limb until they hit a sudden narrowing where the vessel branches. In the lower leg, this occurs either at the common femoral bifurcation or the popliteal trifurcation. Because the popliteal artery branches into three smaller vessels, an embolus here cuts off direct distal flow while preserving some collateral flow around the knee, keeping the thigh warm but the foot ischemic.</li>
                        <li>A cold, pale foot indicates skin ischemia, which can tolerate low oxygen levels for relatively long periods without permanent damage. In contrast, paresthesia indicates that the highly metabolic peripheral sensory nerves are undergoing acute ischemic starvation. This sign indicates that the ischemia has progressed to nerve compromise, warning that muscle necrosis and irreversible tissue loss are imminent unless blood flow is restored immediately.</li>
                        <li>This is a classic manifestation of **systemic reperfusion washout**. While the artery was occluded, the tissue shifted to anaerobic metabolism, which depleted ATP. Without ATP, the energy-dependent cellular $Na^+/K^+$ ATPase pumps failed, allowing large amounts of intracellular potassium to leak into the ischemic interstitial spaces. Once the artery is reopened, this high concentration of extracellular potassium is washed straight into the systemic circulation, causing hyperkalemia and characteristic cardiac conduction changes like peaked T-waves.</li>
                        <li>The four lower leg compartments are the **Anterior compartment** (containing the deep peroneal nerve and anterior tibial artery), the **Lateral compartment** (containing the superficial peroneal nerve), the **Superficial Posterior compartment** (containing the gastrocnemius and soleus muscles), and the **Deep Posterior compartment** (containing the posterior tibial artery and tibial nerve). All four must be opened to prevent localized muscle necrosis.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"chronic-limb-ischemia": {
    title: "Chronic Lower Limb Ischemia (PAD)",
    videoUrl: "coming-soon",
    duration: "26 mins",
    notes: `
      <style>
        @media print {
            .cli-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .cli-notes details { display: block; }
            .cli-notes details[open] summary ~ * { animation: none; }
        }
        .cli-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .cli-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .cli-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .cli-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .cli-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .cli-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background-color: #fff; }
        .cli-notes th, .cli-notes td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; vertical-align: top; }
        .cli-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; }
        .cli-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .cli-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .cli-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .cli-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .cli-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .cli-notes ul, .cli-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .cli-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="cli-notes">
        <h1>Chronic Lower Limb Ischemia (PAD)</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Advanced Vascular Curriculum: Hemodynamic Stratification, Angiographic Paradigms, and the Revascularization Management Ladder
        </p>

        <h2>1. Systemic Etiology & Risk Aggravators</h2>
        <ul>
            <li><strong>Atherosclerosis Obliterans:</strong> The underlying driver in over 90% of cases. It represents a systemic, pan-arterial fibroproliferative process that is progressive and typically multi-segmental.</li>
            <li><strong>Synergistic Risk Profiles:</strong>
                <ul>
                    <li><strong>Tobacco Abuse:</strong> The single most potent, modifiable risk factor. Tobacco combustion toxins directly induce endothelial injury, accelerate lipid peroxidation, and double the risk of progressive limb loss.</li>
                    <li><strong>Diabetes Mellitus:</strong> Drives an aggressive, early-onset variant of peripheral arterial disease (PAD). This condition characteristically targets distal, infrapopliteal vessels (tibial segments) and triggers extensive Mönckeberg's medial sclerosis.</li>
                    <li><strong>Additional Metabolic Vectors:</strong> Sustained systemic hypertension, dyslipidemia (high LDL, low HDL), and hyperhomocysteinemia accelerate lesion formation.</li>
                </ul>
            </li>
        </ul>

        <h2>2. Clinical Progression & Symptom Axis</h2>
        <p>Chronic ischemia progresses predictably as luminal narrowing worsens, eventually preventing the arterial tree from meeting metabolic tissue demands.</p>

        <h3>A. Intermittent Claudication (IC)</h3>
        <ul>
            <li><strong>Pathophysiology:</strong> Ischemic muscular pain that develops when exercise-induced metabolic demand outstrips the available arterial blood supply. Anaerobic metabolism triggers the accumulation of noxious metabolites (lactic acid, adenosine), which stimulate local nociceptive nerve endings.</li>
            <li><strong>Clinical Signature:</strong> A predictable cramping sensation or ache in a specific muscle group that is consistently brought on by walking a set distance, and is completely <span class="highlight">relieved by rest</span> (standing still) within 2 to 5 minutes.</li>
            <li><strong>Anatomical Localization:</strong> The symptoms consistently occur one skeletal muscle group distal to the primary site of arterial occlusion:
                <ul>
                    <li><em>Aortoiliac Inflow Segment:</em> Buttock, hip, or thigh claudication.</li>
                    <li><em>Femoropopliteal Outflow Segment:</em> Calf claudication (the most common clinical presentation worldwide).</li>
                </ul>
            </li>
            <li><strong>The Claudication Distance:</strong> A reproducible and objective measure of a patient's functional impairment.</li>
        </ul>

        <h3>B. Ischemic Rest Pain</h3>
        <ul>
            <li><strong>Pathogenesis:</strong> Severe, end-stage arterial narrowing where blood flow drops below the baseline threshold needed to support resting tissue cellular metabolism.</li>
            <li><strong>Clinical Characteristics:</strong> A burning or gnawing pain localized to the most distal structures, typically the **toes or forefoot matrix**.</li>
            <li><strong>Temporal Exacerbation:</strong> Characteristically worsens at <span class="highlight">night</span>. This occurs because the loss of gravity's hydrostatic pressure when supine reduces distal perfusion, and a natural nocturnal drop in cardiac output further decreases flow.</li>
            <li><strong>Positional Relief maneuvers:</strong> Patients often find relief by hanging the affected limb over the edge of the bed or sleeping upright in a chair. This utilizes gravity to assist marginal microvascular perfusion.</li>
        </ul>

        <h3>C. Chronic Limb-Threatening Ischemia (CLTI)</h3>
        <ul>
            <li><strong>Definition:</strong> The presence of ischemic rest pain persisting for **more than 2 weeks** that requires regular opioid analgesia, OR the presence of ischemic tissue loss (chronic non-healing ulcers or dry gangrene). This indicates an immediate, high risk of major limb amputation, typically associated with an ABPI of less than 0.4.</li>
        </ul>

        <h2>3. Clinical Classification Systems</h2>
        <p>The severity of peripheral arterial disease is stratified using two primary staging systems: the clinical Fontaine classification and the more detailed Rutherford category framework.</p>

        <table>
            <thead>
                <tr>
                    <th>Objective Clinical Status</th>
                    <th>Fontaine Staging System</th>
                    <th>Rutherford Classification Category</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>**Asymptomatic State** (Objective perfusion deficit only)</td>
                    <td>Stage I</td>
                    <td>Category 0</td>
                </tr>
                <tr>
                    <td>**Mild Intermittent Claudication**</td>
                    <td>Stage IIa</td>
                    <td>Category 1</td>
                </tr>
                <tr>
                    <td>**Moderate Intermittent Claudication**</td>
                    <td>Stage IIb</td>
                    <td>Category 2</td>
                </tr>
                <tr>
                    <td>**Severe Intermittent Claudication** (Disabling functional deficit)</td>
                    <td>Stage IIb</td>
                    <td>Category 3</td>
                </tr>
                <tr>
                    <td>**Ischemic Rest Pain**</td>
                    <td><span class="highlight">Stage III</span></td>
                    <td>Category 4</td>
                </tr>
                <tr>
                    <td>**Minor Ischemic Tissue Loss** (Focal focal ulceration, no structural necrosis)</td>
                    <td>Stage IV</td>
                    <td>Category 5</td>
                </tr>
                <tr>
                    <td>**Major Ischemic Tissue Loss** (Deep gangrene extending into the tarsal spaces)</td>
                    <td>Stage IV</td>
                    <td>Category 6</td>
                </tr>
            </tbody>
        </table>

        <h2>4. Non-Invasive & Angiographic Diagnostic Workup</h2>

        <h3>A. Ankle-Brachial Pressure Index (ABPI)</h3>
        <p>The definitive initial screening test, calculated by dividing the highest Doppler-derived systolic blood pressure at the ankle (dorsalis pedis or posterior tibial artery) by the highest brachial systolic pressure. Continuous-wave Doppler ultrasound is required for accurate assessment.</p>
        
        

        <ul>
            <li><strong>Normal Baseline Perfusion Profile:</strong> 0.90 to 1.30</li>
            <li><strong>Mild-to-Moderate Intermittent Claudication:</strong> 0.50 to 0.89</li>
            <li><strong>Severe Ischemic Rest Pain / CLTI:</strong> &lt; 0.40</li>
            <li><strong>Established Trans-digital Tissue Loss:</strong> &lt; 0.30</li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What is the underlying mechanism for an artificially elevated ABPI (&gt; 1.40) in long-standing diabetic populations?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> This is due to **Mönckeberg's medial calcification** (tunica media sclerosis). Heavy calcium deposition transforms the lower extremity arteries into rigid, non-compressible "lead pipes." These calcified walls resist compression from the external blood pressure cuff, yielding falsely elevated ankle systolic pressure readings (&gt; 1.40). In this scenario, clinicians must evaluate perfusion using a **Toe-Brachial Index (TBI)** or continuous pulse volume recordings, as the small digital arteries typically lack significant medial calcification.</p>
                </div>
            </details>
        </div>

        <h3>B. Vascular Imaging Modalities</h3>
        <ul>
            <li><strong>Arterial Duplex Ultrasound:</strong> The first-line screening tool. It combines B-mode imaging with color flow Doppler to map anatomical stenosis and measure peak systolic velocity shifts.</li>
            <li><strong>Computed Tomography Angiography (CTA):</strong> Provides high-resolution 3D vascular reconstruction and serves as the **gold standard for operative planning**. It allows multiplanar evaluation of the length, severity, and calcification of stenotic segments.</li>
                    <li><strong>Digital Subtraction Angiography (DSA):</strong> An invasive, catheter-based fluoroscopic modality. It remains the gold standard for imaging distal runoff vessels and is typically reserved for concurrent endovascular therapeutic procedures.</li>
        </ul>

        <h2>5. The Tiered Therapeutic Management Ladder</h2>

        <h3>A. Conservative Best Medical Therapy (BMT)</h3>
        <ul>
            <li><strong>Primary Target Population:</strong> Patients with stable Fontaine Stage II (mild-to-moderate claudication) whose functional impairment is not lifestyle-disabling.</li>
            <li><strong>Absolute Cessation of Tobacco:</strong> Eliminates nicotine-mediated vasoconstriction and stabilizes existing atheromatous plaques.</li>
            <li><strong>Supervised Exercise Therapy (SET):</strong> A structured program requiring patients to walk until they reach near-maximal claudication pain, rest briefly, and repeat for a minimum of 30 to 45 minutes, three times per week. Over 3 to 6 months, this exercise induces physiological angiogenesis and **collateral capillary recruitment**.</li>
            <li><strong>Pharmacological Management:</strong>
                <ul>
                    <li>*Antiplatelet Agents:* Aspirin (75–100 mg daily) or Clopidogrel (75 mg daily) to lower the risk of major adverse cardiovascular events (MACE).</li>
                    <li>*High-Intensity Statin Therapy:* Atorvastatin (40–80 mg) or Rosuvastatin to reduce systemic cardiovascular events and stabilize plaques.</li>
                    <li>***Cilostazol**:* A potent phosphodiesterase-3 (PDE-3) inhibitor. It provides dual action via antiplatelet inhibition and direct smooth muscle vasodilation, and is clinically proven to increase pain-free walking distance.</li>
                </ul>
            </li>
        </ul>

        <h3>B. Endovascular Intervention</h3>
        <ul>
            <li><strong>Indications:</strong> Disabling claudication refractory to maximal medical therapy, or for limb salvage in CLTI patients with anatomically favorable short-segment lesions (TASC A and B classifications).</li>
            <li><strong>Modality Spectrum:</strong> Percutaneous Transluminal Angioplasty (PTA) followed by selective stenting using self-expanding nitinol stents. The use of drug-eluting balloons (DEB) and drug-eluting stents (DES) coated with anti-proliferative agents (e.g., paclitaxel) is common to minimize restenosis.</li>
        </ul>

        <h3>C. Open Surgical Revascularization</h3>
        <ul>
            <li><strong>Indications:</strong> Diffuse, long-segment occlusive lesions (TASC C and D classifications), multi-segmental disease blocks, or cases where prior endovascular attempts have failed in patients with a salvageable limb.</li>
            <li><strong>Autologous Conduit Selection:</strong>
                <ul>
                    <li>The **Great Saphenous Vein (GSV)** is the definitive **conduit of choice** due to its superior long-term patency rates and resistance to bacterial infection.</li>
                    <li>*Reversed Vein Grafting:* The vein is harvested, flipped 180 degrees so its internal valves do not block distal blood flow, and anastomosed.</li>
                    <li>*In-Situ Vein Grafting:* The vein is left in its native anatomical bed; its internal valves are systematically disrupted using an intraluminal valvulotome, and proximal/distal cut-downs are performed for the anastomoses.</li>
                </ul>
            </li>
            <li><strong>Synthetic Prosthetics:</strong> Expanded polytetrafluoroethylene (ePTFE) or Dacron grafts are used when the GSV is absent or inadequate, primarily for large-bore proximal aortoiliac reconstructions.</li>
        </ul>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Synthesize vascular surgery principles to answer these clinical board questions:</em></p>
            <ol style="margin-left: 20px;">
                <li>Define the classic clinical triad that constitutes "Leriche Syndrome" and localize the primary site of occlusion.</li>
                <li>What is the molecular mechanism of action of Cilostazol, and what is its absolute contraindication in cardiovascular medicine?</li>
                <li>Describe the physiological mechanism behind the "Dependent Rubor" and "Buerger's Angle" signs observed during physical examination.</li>
                <li>Why do autologous vein grafts demonstrate significantly higher long-term patency rates than synthetic ePTFE grafts when performing a below-knee femoropopliteal bypass?</li>
                <li>Under what hemodynamic circumstances would an open surgical bypass be considered a failure despite the presence of palpable pedal pulses postoperatively?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>**Leriche Syndrome** is caused by complete atherosclerotic occlusion of the **distal abdominal aorta at the bifurcation level**. It is characterized by a classic clinical triad: 1) Bilateral claudication involving the buttocks, hips, and thighs; 2) Symmetrical absence or marked diminution of both femoral arterial pulses; and 3) Erectile dysfunction/impotence due to bilateral internal iliac artery hypoperfusion.</li>
                        <li>Cilostazol is an inhibitor of **phosphodiesterase-3 (PDE-3)**. By inhibiting PDE-3, it increases intracellular cyclic adenosine monophosphate (cAMP) levels within platelets and vascular smooth muscle cells, leading to reversible inhibition of platelet aggregation and direct arterial vasodilation. It is **absolutely contraindicated in patients with heart failure of any severity**, as PDE-3 inhibitors possess inotropic properties linked to increased ventricular tachyarrhythmias and higher mortality in this population.</li>
                        <li>**Dependent Rubor ("Sunset Foot")** occurs because chronic ischemia causes maximal compensatory dilation of the distal arterioles. When the leg is placed in a dependent position, gravity drives an influx of blood into these dilated vessels; because tissue oxygen extraction is high, the blood quickly becomes deoxygenated, creating a deep dusky-red appearance. Conversely, when the leg is elevated, the marginal perfusion pressure cannot overcome hydrostatic resistance, causing the foot to turn pale. The angle at which this pallor occurs is **Buerger's Angle**; an angle less than 20 degrees indicates severe, critical ischemia.</li>
                        <li>Synthetic grafts (like ePTFE) have a high elastic mismatch compared to native arteries, which triggers **neointimal hyperplasia** at the distal anastomosis site. This effect is amplified below the knee due to increased knee joint flexion and smaller vessel diameters. Additionally, autologous veins retain an active, viable **endothelial cell lining** that continuously secretes nitric oxide and prostacyclin, providing intrinsic resistance to localized thrombus formation.</li>
                        <li>This describes a scenario with inadequate **distal runoff**. Even if the proximal surgical graft is patent and produces a palpable pulse at the upper anastomosis, the bypass will fail to save the limb if the distal microvascular bed is completely occluded by diffuse disease. Without a patent downstream vessel network to receive the blood, the graft cannot reduce local resistance or deliver enough oxygenated blood to heal distal ischemic ulcers or rest pain.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"buergers-disease": {
    title: "Thromboangiitis Obliterans (TAO) / Buerger's Disease",
    videoUrl: "coming-soon",
    duration: "22 mins",
    notes: `
      <style>
        @media print {
            .tao-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .tao-notes details { display: block; }
            .tao-notes details[open] summary ~ * { animation: none; }
        }
        .tao-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .tao-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .tao-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .tao-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .tao-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .tao-notes .box-red { background-color: #ffebee; border: 2px solid #c62828; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .tao-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background-color: #fff; }
        .tao-notes th, .tao-notes td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; vertical-align: top; }
        .tao-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; }
        .tao-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .tao-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .tao-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .tao-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .tao-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .tao-notes ul, .tao-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .tao-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="tao-notes">
        <h1>Thromboangiitis Obliterans (TAO) / Buerger's Disease</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Advanced Vascular Curriculum: Pan-Vasculitis Pathology, Shionoya's Diagnostic Framework, and Sympathetic Modulation Paradigms
        </p>

        <h2>1. Nosology & Clinical Demographics</h2>
        <ul>
            <li><strong>Definition:</strong> Thromboangiitis Obliterans (TAO) is an inflammatory, non-atherosclerotic, segmental, vaso-occlusive disease. It primarily insults the **small and medium-sized** distal arteries and veins of both the upper and lower extremities.</li>
            <li><strong>Classic Phenotypic Demographic:</strong> Typically manifests in young males (&lt; 40–45 years) who are heavy consumers of tobacco, often presenting within lower socioeconomic populations.</li>
        </ul>

        <h2>2. Etiology & Microstructural Pathogenesis</h2>
        <ul>
            <li><strong>Tobacco-Induced Endothelial Hypersensitivity:</strong> Nicotine and tobacco glycoproteins serve as the primary trigger, provoking an immune-mediated pan-vasculitis (Type I and Type III hypersensitivity cascades).</li>
            <li><strong>Histopathology (The Inflammatory Neurovascular Bundle):</strong>
                <ul>
                    <li>The inflammatory process involves the adjacent artery, vein, and peripheral nerve concurrently. This intense transmural inflammation causes perivascular fibrosis, binding the entire neurovascular bundle into a dense fibrous mass.</li>
                    <li><strong>Thrombus Characteristics:</strong> Features a highly cellular, occlusive intraluminal thrombus containing specialized **microabscesses** (neutrophilic core surrounded by granulomatous giant cells).</li>
                    <li><strong>Pathognomonic Structural Distinction:</strong> The <span class="highlight">internal elastic lamina remains completely intact and preserved</span>. This stands in sharp contrast to atherosclerosis and systemic necrotizing vasculitides, which characteristically disrupt and destroy this elastic layer.</li>
                </ul>
            </li>
        </ul>

        <h2>3. Clinical Symptom Matrix & Evolution</h2>
        
        <h3>A. The Classic Diagnostic Triad</h3>
        <ol>
            <li><strong>Distal-to-Proximal Claudication:</strong> Ischemia begins in the most distal muscular beds. **Instep claudication** (exquisite, cramping pain localized to the plantar arch of the foot during ambulation) is highly characteristic of this infrapopliteal disease process.</li>
            <li><strong>Raynaud's Phenomenon:</strong> Cold-induced, episodic digital vasospasm demonstrating the classic triphasic color sequence (pallor to cyanosis, followed by rubor revascularization).</li>
            <li><strong>Superficial Migratory Thrombophlebitis:</strong> Recurrent, tender, erythematous cords or nodules that migrate along the distribution of the superficial venous system.</li>
        </ol>

        <h3>B. Advanced Tissue Deficits</h3>
        <ul>
            <li><strong>Ischemic Rest Pain:</strong> An excruciating, unremitting burning or gnawing sensation localized to the digits and forefoot matrix, typically peaking during nocturnal hours. Patients frequently present with their limbs dangling over the edge of the bed, relying on gravity to assist marginal microvascular perfusion.</li>
            <li><strong>Digital Gangrene and Ulceration:</strong> Spontaneous or trauma-induced ischemic ulcerations that target the terminal borders of the fingers and toes, frequently leading to dry gangrene.</li>
        </ul>

        <h2>4. Diagnostic Framework: Shionoya's Criteria</h2>
        <p>A definitive clinical diagnosis of Thromboangiitis Obliterans requires the patient to meet **all five** of Shionoya's specific criteria:</p>

        <ul>
            <li><strong>Criterion 1:</strong> An established, verifiable history of **heavy tobacco utilization**.</li>
            <li><strong>Criterion 2:</strong> Clinical onset of ischemic vascular symptoms before the age of **50 years**.</li>
            <li><strong>Criterion 3:</strong> Documented infra-popliteal arterial occlusions (isolated, distal small-vessel patterns).</li>
            <li><strong>Criterion 4:</strong> Objective upper limb vascular involvement (e.g., abnormal Allen's test) OR a history of migratory superficial thrombophlebitis.</li>
            <li><strong>Criterion 5:</strong> The complete **absence of typical atherosclerotic risk factors** (specifically ruling out Diabetes Mellitus, advanced hyperlipidemia, and long-standing severe hypertension).</li>
        </ul>

        <h2>5. Non-Invasive & Angiographic Evaluations</h2>
        <ul>
            <li><strong>The Allen's Test:</strong> A mandatory clinical bedside assessment used to evaluate the patency of the radial and ulnar arterial inflows and the integrity of the palmar arch matrix, which are frequently compromised in TAO.</li>
            <li><strong>Digital Subtraction Angiography (DSA):</strong> The diagnostic gold standard for visualizing the distal lower and upper extremity vascular architecture.
                <ul>
                    <li><em>Classic Radiographic Findings:</em> Demonstrates abrupt, smooth, segmental cut-offs of the distal infrapopliteal or distal upper extremity vessels, contrasted against completely normal, disease-free proximal inflow vessels.</li>
                    <li><strong>"Corkscrew Collaterals" (Martorell's Sign):</strong> Maxially dilated vasa vasorum and perivascular collateral networks wind around the occluded segments, resembling tree roots or corkscrews. While highly characteristic, this sign is an indicator of chronic small-vessel occlusion rather than pathognomonic for TAO alone.</li>
                </ul>
            </li>
        </ul>

        

        <h2>6. Tiered Management Paradigms</h2>

        <div class="box-red">
            <h3 style="margin-top:0; color:#b71c1c;">⛔ The Axiomatic Golden Rule</h3>
            <p><strong>"Absolute Tobacco Cessation vs. Inevitable Major Amputation."</strong></p>
            <p>Complete and total elimination of all forms of tobacco exposure—including cigarettes, e-cigarettes, smokeless tobacco, and passive secondary smoke—is the **only** therapeutic intervention clinically proven to arrest disease progression and prevent successive digit or limb loss. Nicotine replacement therapy is strictly contraindicated, as nicotine itself serves as an endothelial toxin in this disease model.</p>
        </div>

        <h3>A. Medical Therapeutics</h3>
        <ul>
            <li><strong>Intravenous Iloprost Infusion:</strong> A stable prostacyclin ($PGI_2$) analogue. It acts as a potent microvascular vasodilator and inhibitor of platelet activation. Administered via a continuous daily protocol lasting 14 to 28 days, it helps suppress severe rest pain and accelerate ischemic ulcer healing.</li>
            <li><strong>Rheological Modulation (Pentoxifylline):</strong> A methylxanthine derivative that reduces blood viscosity by enhancing red blood cell deformability and suppressing platelet aggregation.</li>
            <li><strong>Antiplatelet Regimens:</strong> Maintenance therapy with low-dose Aspirin or Clopidogrel to optimize microvascular flow.</li>
        </ul>

        <h3>B. Interventional and Surgical Options</h3>
        <ul>
            <li><strong>Surgical Lumbar Sympathectomy:</strong>
                <ul>
                    <li>*Physiological Mechanism:* Excising the $L_2\text{–}L_4$ sympathetic ganglia interrupts sympathetic vasoconstrictor tone. This induces maximal vasodilation of the high-resistance **cutaneous microcirculation**.</li>
                    <li>*Clinical Indications:* Selected for patients with intractable ischemic rest pain or non-healing ischemic skin ulcers who have stopped smoking but have no reconstructable distal target vessels.</li>
                    <li>*Critical Limitation:* This procedure **provides no benefit for intermittent claudication**, because blood flow within skeletal muscle beds is regulated by local metabolic byproducts rather than sympathetic autonomic tone.</li>
                </ul>
            </li>
            <li><strong>Omentoplasty (Salvage Paradigm):</strong> A surgical option where a vascularized, pedicled flap of greater omentum is tunneled down into the lower leg to introduce new collateral vascular connections to the ischemic tissues.</li>
            <li><strong>Conservative Amputation Principles:</strong> Ulcer debridement or minor digit amputations are delayed until sharp demarcation is achieved. Every effort is made to maximize residual limb length and avoid major transtibial or transfemoral amputations.</li>
        </ul>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Apply your knowledge of small-vessel vasculitis and autonomic physiology to analyze these clinical scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>Explain the underlying histopathological differences between the vascular walls in Buerger's disease versus those in advanced Atherosclerosis Obliterans.</li>
                <li>Why is nicotine replacement therapy (such as transdermal patches or nicotine gum) strictly banned when treating a patient with active Thromboangiitis Obliterans?</li>
                <li>A 34-year-old male presents with severe pain in the sole of his foot after walking 50 meters, along with a history of recurrent tender red streaks on his calves. Which clinical signs point toward TAO rather than atherosclerotic PAD?</li>
                <li>How does a lumbar sympathectomy reduce rest pain and promote ulcer healing, and why does it fail to improve a patient's walking distance?</li>
                <li>Describe how you would perform and interpret a modified Allen's test at the bedside of a patient suspected of having upper extremity involvement from Buerger's disease.</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>In **Buerger's disease (TAO)**, the disease process is an inflammatory pan-vasculitis where the structural architecture of the vessel wall—specifically the **internal elastic lamina**—remains completely intact and preserved, despite the presence of a highly cellular, occlusive thrombus. In contrast, **Atherosclerosis Obliterans** is a degenerative, lipid-driven process that causes disruption of the internal elastic lamina, significant smooth muscle proliferation in the media, and the accumulation of acellular lipid pools within subendothelial plaques.</li>
                        <li>Nicotine replacement therapy is prohibited because nicotine itself is a potent mediator of endothelial dysfunction and direct microvascular vasospasm. In a patient with TAO, the endothelium is hypersensitive; continuing to introduce nicotine maintains hyper-reactivity and microvascular occlusion, which neutralizes the benefits of smoking cessation and drives disease progression toward limb loss.</li>
                        <li>The patient exhibits two classic features of the diagnostic triad: **instep claudication** (pain in the sole/arch of the foot due to isolated infrapopliteal disease) and **superficial migratory thrombophlebitis** (represented by the recurrent tender red streaks on the calves). Atherosclerotic PAD rarely causes migratory phlebitis, as it does not involve the venous system, and it typically presents with calf claudication rather than isolated plantar arch pain.</li>
                        <li>A lumbar sympathectomy surgically disrupts the sympathetic postganglionic fibers that maintain baseline tone in **cutaneous (skin) arterioles**. This interruption causes vasodilation in the skin, increasing local perfusion to relieve resting pain and deliver oxygen to heal superficial ulcers. However, blood flow in skeletal muscle during exercise is governed by local **metabolic autacoids** (such as adenosine, lactate, and $H^+$ ions) that cause vasodilation. Removing sympathetic innervation cannot overcome physical arterial occlusions during exercise, leaving the claudication distance unchanged.</li>
                        <li>To perform the test, compress both the radial and ulnar arteries at the patient's wrist while they repeatedly fist to exsanguinate the hand. When the palm turns pale, release pressure from the ulnar artery alone while maintaining compression on the radial artery. A normal hand shows reperfusion and returns to a pink color within 5 to 7 seconds. If the palm remains pale for more than 10 seconds, it indicates occlusion of the ulnar artery or an incomplete palmar arch, confirming distal upper extremity involvement characteristic of TAO.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"varicose-veins": {
    title: "Varicose Veins: Etiology & Clinical Tests",
    videoUrl: "coming-soon",
    duration: "24 mins",
    notes: `
      <style>
        @media print {
            .vv-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .vv-notes details { display: block; }
            .vv-notes details[open] summary ~ * { animation: none; }
        }
        .vv-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .vv-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .vv-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .vv-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .vv-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .vv-notes .box-red { background-color: #ffebee; border: 2px solid #c62828; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .vv-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background-color: #fff; }
        .vv-notes th, .vv-notes td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; vertical-align: top; }
        .vv-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; }
        .vv-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .vv-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .vv-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .vv-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .vv-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .vv-notes ul, .vv-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .vv-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="vv-notes">
        <h1>Varicose Veins: Etiology & Clinical Tests</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Advanced Surgical Curriculum: Venous Hemodynamics, Perforator Physiology, and Bedside Diagnostic Stratification
        </p>

        <h2>1. Nosology & Definitions</h2>
        <p><strong>Varicose Veins</strong> are defined as permanently dilated, tortuous, and elongated components of the superficial venous system of the lower extremity. This pathology stems from a breakdown in venous hemodynamics, driven either by primary structural wall weakness or secondary valvular incompetence.</p>

        <h2>2. Hemodynamic Etiology & Risk Vectors</h2>
        <ul>
            <li><strong>Primary Varicosities (Most Common Paradigm):</strong>
                <ul>
                    <li><strong>Valvular Incompetence:</strong> Characterized by structural failure of the delicate bicuspid valves. This failure occurs most frequently at critical venous junctions: the **Saphenofemoral Junction (SFJ)** and the **Saphenopopliteal Junction (SPJ)**.</li>
                    <li><strong>Intrinsic Wall Dystrophy:</strong> Inherited structural alterations in the collagen-to-elastin matrix ratio within the tunica media. Advanced forms manifest in congenital vascular malformations such as *Klippel-Trénaunay Syndrome*.</li>
                    <li><em>Risk Aggravators:</em> Prolonged orthostatic positioning (gravity-induced hydrostatic stress), multiparity (progesterone-mediated smooth muscle relaxation combined with pelvic venous outflow compression), and advanced body mass index.</li>
                </ul>
            </li>
            <li><strong>Secondary Varicosities (Outflow Alterations):</strong>
                <ul>
                    <li><strong>Deep Vein Thrombosis (DVT / Post-Thrombotic Syndrome):</strong> Chronic occlusion or valvular destruction within the deep venous network forces the superficial veins to act as high-pressure collateral conduits.</li>
                    <li><strong>Extrinsic Pelvic Obstruction:</strong> Space-occupying lesions or an enlarging gravid uterus compress the common iliac veins, driving retrograde hypertension downstream.</li>
                    <li><strong>Arteriovenous Fistulae (AVFs):</strong> Congenital or post-traumatic macrovascular shunts that deliver high-pressure arterial flow directly into the low-resistance venous system, causing rapid varicosity development.</li>
                </ul>
            </li>
        </ul>

        <h2>3. Bedside Evaluation & Clinical Diagnostics</h2>
        <p>Bedside testing maps venous reflux patterns and assesses the integrity of the deep venous clearance system before surgical intervention.</p>
        
        <h3>A. The Trendelenburg Reflux Assessment (SFJ and Perforator Mapping)</h3>
        <p>Designed to differentiate between proximal junctional reflux and distal perforator incompetence.</p>
        
        
        
        <p><strong>Procedural Execution:</strong></p>
        <ol>
            <li>Place the patient in a supine position and elevate the lower limb to empty the superficial venous reservoirs.</li>
            <li>Apply a soft rubber tourniquet (or digital compression) immediately distal to the **Saphenofemoral Junction (SFJ)**, located 4 cm below and lateral to the pubic tubercle.</li>
            <li>Instruct the patient to assume an upright, standing position while maintaining occlusion. Observe the filling pattern of the varicosities for 30 seconds.</li>
            <li>Swiftly release the tourniquet or compression vector, and observe the immediate effect on venous filling.</li>
        </ol>

        <table>
            <thead>
                <tr>
                    <th>Test Phase</th>
                    <th>Clinical Manifestation</th>
                    <th>Hemodynamic Interpretation</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Trendelenburg 1</strong><br>(Tourniquet Maintained)</td>
                    <td>Rapid, retrograde varicosity engorgement from below within the 30-second window.</td>
                    <td><strong>Incompetence of Communicating Perforator Veins.</strong> High-pressure blood shunts from deep to superficial systems via incompetent valves located downstream from the tourniquet block.</td>
                </tr>
                <tr>
                    <td><strong>Trendelenburg 2</strong><br>(Tourniquet Released)</td>
                    <td>An immediate, downward surge of blood that rapidly fills the great saphenous system from above.</td>
                    <td><strong>Isolated Saphenofemoral Junction (SFJ) Incompetence.</strong> Validates complete failure of the terminal valve at the junction of the great saphenous and femoral veins.</td>
                </tr>
            </tbody>
        </table>

        <h3>B. The Perthes Functional Ambulation Test (Deep Venous Patency Axis)</h3>
        <div class="box-red">
            <h3 style="margin-top:0; color:#b71c1c;">🚨 Axiomatic Surgical Guardrail: Validate Deep Outflow</h3>
            <p><strong>Never ablate, sclerose, or strip a patient's superficial varicosities without first proving complete patency of the deep venous system.</strong></p>
            <p>If the deep venous network is occluded (e.g., due to extensive chronic DVT), the superficial varicose veins serve as the primary remaining drainage pathway for the limb. Eliminating these superficial channels will trigger severe venous congestion, which can progress to **venous gangrene** and require limb amputation.</p>
        </div>
        
        <ul>
            <li><strong>Procedural Execution:</strong> Apply a tourniquet around the upper-to-mid thigh with enough tension to compress the superficial veins without obstructing deep or arterial flow. Have the patient walk vigorously or perform continuous heel lifts for 5 minutes to activate the **calf muscle pump**.</li>
            <li><strong>Diagnostic Interpretation:</strong>
                <ul>
                    <li><em>Normal Finding (Patent Deep System):</em> The superficial varicosities collapse and empty, and leg discomfort improves. The contracting calf muscle pumps blood into a patent deep venous network and up toward the pelvis.</li>
                    <li><em>Abnormal Finding (Deep Occlusion / DVT):</em> The superficial varicosities become increasingly engorged and turgid, and the patient describes a severe, **"bursting" pain** in the calf. Because the deep system is blocked and the superficial escape route is occluded by the tourniquet, the calf pump cannot clear the blood, causing acute venous hypertension.</li>
                </ul>
            </li>
        </ul>

        <h3>C. Ancillary Bedside Maneuvers</h3>
        <ul>
            <li><strong>The Schwartz Percussion Test:</strong> Deliver a gentle tap to the proximal great saphenous trunk while palpating distally (or vice versa). Transmitting a fluid thrill confirms a continuous, uninterrupted column of blood caused by extensive valvular incompetence.</li>
            <li><strong>The Morrissey Cough Impulse Test:</strong> Place a fingers gently over the SFJ anatomy and ask the patient to perform a forced cough. A palpable fluid thrill indicates retrograde valvular incompetence at the saphenofemoral junction.</li>
            <li><strong>The Fegan Perforator Mapping Protocol:</strong> Palpate the lower leg while the patient stands to identify focal fascial defects or "pits." These soft fascial gaps indicate where incompetent perforating veins pierce the deep fascia.</li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What are the exact anatomical relationships and orientation of the Saphenofemoral Junction (SFJ)?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> The SFJ is located **4 cm inferior and lateral to the pubic tubercle landmark**. At this anatomical site, the great saphenous vein traverses the cribriform fascia via the saphenous opening (fossa ovalis) to terminate in the femoral vein. This location serves as the point of entry for high-focal ligation and stripping operations (the Trendelenburg procedure).</p>
                </div>
            </details>
        </div>

        <h2>4. Venous Anatomy & Clinical Staging Matrix</h2>
        <p>The lower extremity venous system relies on proper coordination between three venous networks: the high-pressure deep system (beneath the deep fascia), the low-pressure superficial system (within the subcutaneous tissue), and the communicating perforators that bridge them.</p>

        

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Synthesize clinical anatomy and venous hemodynamics to address these questions:</em></p>
            <ol style="margin-left: 20px;">
                <li>Identify the anatomical boundary that separates the Great Saphenous Vein (GSV) from the Short Saphenous Vein (SSV) regarding their proximal termination.</li>
                <li>Detail the precise anatomical location of the three primary lower extremity perforator groups: Dodd's, Boyd's, and Cockett's.</li>
                <li>Explain the cellular mechanism behind the characteristic hyperpigmentation (brawney edema) and lipodermatosclerosis seen in advanced chronic venous insufficiency.</li>
                <li>During a Perthes test, a patient experiences severe calf pain, and the superficial varicosities become visibly distended. What is your diagnosis, and how does it change your surgical plan?</li>
                <li>What is the difference between a "true" recurrence and a "tactical" failure following a saphenofemoral junction high ligation procedure?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>The **Great Saphenous Vein (GSV)** originates at the medial marginal venous architecture of the foot, ascends anterior to the medial malleolus, runs along the medial aspect of the leg and thigh, and terminates at the **Saphenofemoral Junction (SFJ)** into the femoral vein. The **Short Saphenous Vein (SSV)** ascends posterior to the lateral malleolus, runs along the midline of the calf posterior aspect, and pierces the deep popliteal fascia to terminate at the **Saphenopopliteal Junction (SPJ)** directly into the popliteal vein.</li>
                        <li>The anatomical locations are structured as follows:
                            <ul>
                                <li>*Hunterian Perforators:* Located in the mid-to-lower third of the thigh, mapping along the adductor (Hunter’s) canal.</li>
                                <li>*Dodd's Perforators (Thigh Perforators):* Located in the lower third of the thigh, just superior to the knee joint.</li>
                                <li>*Boyd's Perforators (Knee Perforators):* Located along the medial aspect of the upper tibia, approximately 10 cm inferior to the knee joint line.</li>
                                <li>*Cockett's Perforators (Ankle Perforators):* Positioned as a lower, middle, and upper triad along the medial "gaiter zone" aspect of the distal calf (at roughly 7 cm, 13 cm, and 18 cm above the medial malleolus).</li>
                            </ul>
                        </li>
                        <li>Sustained venous hypertension causes hydrostatic leakage of red blood cells through stretched capillary walls into the surrounding interstitium. These erythrocytes break down and release hemoglobin, which degrades into **hemosiderin**, a pigment taken up by local macrophages that produces a permanent brawny brown hyperpigmentation. This process triggers a chronic inflammatory response; extracellular matrix leaks proteins like fibrinogen, which forms a dense pericapillary fibrin cuff. This barrier prevents oxygen diffusion, leading to subcutaneous fat necrosis, skin fibrosis, and the characteristic **"champagne bottle leg" (lipodermatosclerosis)**.</li>
                        <li>This finding indicates an **abnormal Perthes test**, confirming deep venous obstruction or deep vein thrombosis (DVT). The calf muscle pump is forcing blood out of the deep veins, but because the deep path is blocked and the superficial path is occluded by your tourniquet, blood cannot escape the limb. This causes immediate venous engorgement and severe bursting pain. **Surgical ablation or stripping of the superficial varicosities is strictly contraindicated**, as these superficial veins represent the primary remaining venous drainage pathway for the lower extremity.</li>
                        <li>A **true recurrence** often stems from **neovascularization**, a physiological process where new, incompetent endothelial channels form across the surgical scar tissue, reconnecting the residual GSV trunk to the femoral vein despite correct initial surgical ligation. A **tactical failure** occurs due to an incomplete initial dissection, such as leaving behind the terminal tributaries of the GSV (e.g., the superficial epigastric, superficial circumflex iliac, or external pudendal veins). These un-ligated tributaries eventually dilate under pressure, re-establishing proximal reflux into the thigh varicosities.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"management-varicose-veins": {
    title: "Management of Varicose Veins",
    videoUrl: "coming-soon",
    duration: "26 mins",
    notes: `
      <style>
        @media print {
            .mvv-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .mvv-notes details { display: block; }
            .mvv-notes details[open] summary ~ * { animation: none; }
        }
        .mvv-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .mvv-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .mvv-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .mvv-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .mvv-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .mvv-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background-color: #fff; }
        .mvv-notes th, .mvv-notes td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; vertical-align: top; }
        .mvv-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; }
        .mvv-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .mvv-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .mvv-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .mvv-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .mvv-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .mvv-notes ul, .mvv-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .mvv-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="mvv-notes">
        <h1>Management of Varicose Veins</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Advanced Surgical Curriculum: Conventional Open Ligation vs. Minimally Invasive Endovenous Thermal and Chemical Ablation
        </p>

        <h2>1. Conservative & Mechanical Interventions</h2>
        <p>Primarily targeted at patients who are poor surgical candidates, experiencing pregnancy-induced venous distension, or presenting with uncomplicated, minimally symptomatic disease states.</p>
        <ul>
            <li><strong>Graduated Compression Therapy:</strong> The physiological cornerstone of non-operative management.
                <ul>
                    <li><strong>Class II Medical Stockings (20–30 mmHg):</strong> Exert a <span class="highlight">graduated pressure profile</span>—maximal at the ankle matrix with a progressive decrease proximally. This mechanically narrows dilated vein diameters, restores leaflet coaptation, and accelerates deep venous return.</li>
                    <li><em>Absolute Contraindication:</em> Concomitant severe peripheral arterial disease ($ABPI < 0.8$), as external compression can precipitate critical limb ischemia.</li>
                </ul>
            </li>
            <li><strong>Dynamic Behavioral Modifications:</strong> Scheduled limb elevation above the level of the right atrium to encourage gravity-assisted venous drainage, structured ankle-flexion regimens to engage the calf muscle pump, and absolute avoidance of static orthostatic standing.</li>
            <li><strong>Venoactive Pharmacotherapy:</strong> Micronized Purified Flavonoid Fraction (MPFF—Diosmin/Hesperidin). These agents improve venous wall elasticity and reduce capillary hyperpermeability; they provide palliative relief from heaviness and tension but do not reverse structural varicosities.</li>
        </ul>

        <h2>2. Conventional Open Surgery (The Historical Ligation Era)</h2>
        <p>An understanding of open junctional anatomy remains critical for managing atypical patterns or recurrent disease.</p>

        <h3>A. The Trendelenburg Procedure (Juxtafemoral Flush Ligation)</h3>
        <ul>
            <li><strong>Surgical Objective:</strong> To isolate and interrupt the saphenofemoral junction (SFJ) to prevent deep-to-superficial gravitational reflux.</li>
            <li><strong>Anatomical Incision Vector:</strong> A transverse groin crease incision placed 4 cm inferior and lateral to the pubic tubercle.</li>
            <li><strong>The Core Technical Mandate:</strong> The Great Saphenous Vein (GSV) must be ligated **completely flush** with its origin at the femoral vein. Leaving a residual saphenous stump creates a blind, stagnant pouch that prone to local thrombosis and recurrence.</li>
            <li><strong>Systematic Tributary Isolation:</strong> To prevent collateral neovascularization, surgeons must isolate and divide all terminal tributaries of the proximal GSV, which typically include:
                <br><em>1. Superficial Epigastric Vein</em>
                <br><em>2. Superficial Circumflex Iliac Vein</em>
                <br><em>3. Superficial External Pudendal Vein</em>
                <br><em>4. Deep External Pudendal Vein</em>
                <br><em>5. Thoracoepigastric/Accessory Saphenous Networks</em>
            </li>
        </ul>

        <h3>B. Conventional Axial Stripping</h3>
        <ul>
            <li><strong>Methodology:</strong> Passing a flexible intraluminal wire stripper (Myers device) through the vein lumen to pull the main GSV trunk out of its subcutaneous bed.</li>
            <li><strong>Anatomical Restricton:</strong> Stripping is safely limited down to the **level of the knee joint (upper calf)**. Advancing the stripper past the infrapatellar region significantly increases the risk of traction or laceration injury to the <span class="highlight">saphenous nerve</span>.</li>
        </ul>

        <h3>C. Subfascial Endoscopic Perforator Surgery (SEPS)</h3>
        <ul>
            <li><strong>Indications:</strong> Designed to treat incompetent communicating perforators (primarily Cockett’s groups) in patients with advanced chronic venous insufficiency (CEAP class C5–C6) where skin changes make direct open incisions risky.</li>
            <li><strong>Surgical Technique:</strong> Endoscopic instruments are introduced into the subfascial plane through healthy proximal skin, allowing remote ligation of incompetent perforators away from ulcerated areas.</li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What specific neurological deficit occurs if the saphenous nerve is injured during a vein stripping procedure?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> The patient will experience permanent anesthesia, paresthesia, or burning neuroma pain along the **medial aspect of the lower leg, extending down to the medial malleolus and foot arch**. This occurs because the saphenous nerve emerges from the adductor canal and runs alongside the GSV below the knee.</p>
                </div>
            </details>
        </div>

        <h2>3. Modern Endovenous Modalities (The Current Gold Standard)</h2>
        <p>Per international guidelines (e.g., NICE, SVS), endovenous thermal ablation has replaced conventional open stripping as the first-line intervention for axial venous reflux.</p>

        <h3>A. Endovenous Thermal Ablation (EVLA & RFA)</h3>
        <ul>
            <li><strong>Endovenous Laser Ablation (EVLA):</strong> Delivers targeted laser energy (typically wavelengths between 980–1470 nm) via an optical fiber to vaporize local blood and generate high temperatures that destroy the endothelial wall.</li>
            <li><strong>Radiofrequency Ablation (RFA):</strong> Utilizes a specialized catheter segment to deliver high-frequency alternating current, heating the adjacent vein wall directly to approximately 120°C.</li>
            <li><strong>Biophysical Mechanism:</strong> Thermal energy causes structural collagen denaturation within the tunica media. This triggers immediate transmural contraction, localized thrombosis, and progressive fibrotic occlusion of the lumen.</li>
            <li><strong>Tumescent Anesthesia Axis:</strong> Ultrasound-guided infiltration of a large volume of dilute anesthetic solution (typically lidocaine, epinephrine, and sodium bicarbonate in normal saline) into the perivenous saphenous space.
                <ul>
                    <li><em>Three Vital Functions:</em> Provides local anesthesia, physically compresses the vein wall against the thermal source to optimize energy transfer, and acts as a **protective heat sink** to safeguard adjacent nerves and skin from thermal injury.</li>
                </ul>
            </li>
        </ul>

        

        <h3>B. Ultrasound-Guided Foam Sclerotherapy (UGFS)</h3>
        <ul>
            <li><strong>Chemical Sclerosants:</strong> **Polidocanol** or Sodium Tetradecyl Sulfate (STS)—potent detergent agents.</li>
            <li><strong>The Tessari Formulation Technique:</strong> Agitating 1 part liquid sclerosant with 4 parts sterile air (or a $CO_2$/oxygen mixture) through a three-way stopcock to produce a cohesive, micro-foam matrix.</li>
            <li><strong>Mechanism:</strong> The foam displaces intravascular blood rather than diluting within it. It chemically strips the endothelial cell layer, exposing the underlying collagen matrix to trigger rapid thrombosis and subsequent cord-like fibrosis.</li>
            <li><strong>Clinical Role:</strong> Selected for treating tortuous accessory trunks, isolated incompetent perforators, reticular networks, or recurrent varicosities where catheter advancement is difficult.</li>
        </ul>

        <h3>C. Ambulatory Hook Microphlebectomy (Stab Avulsion)</h3>
        <ul>
            <li><strong>Execution:</strong> Removing large, bulging subcutaneous tributaries through 1–2 mm micro-stab incisions using specialized hooks. This is typically performed as an adjunct immediately following thermal ablation of the primary trunk.</li>
        </ul>

        <h2>4. Comparative Complication Profiles</h2>
        <table>
            <thead>
                <tr>
                    <th>Complication Type</th>
                    <th>Conventional Open Surgery Matrix</th>
                    <th>Endovenous Thermal Ablation (EVLA/RFA) Axis</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Neurological Deficits</strong></td>
                    <td>Higher risk of saphenous nerve injury (medial leg) or sural nerve injury (lateral foot during SSV stripping).</td>
                    <td>Lower risk, but can occur if perivenous tumescent anesthesia is inadequate near nerve boundaries.</td>
                </tr>
                <tr>
                    <td><strong>Thromboembolic Events</strong></td>
                    <td>Baseline risk of postoperative Deep Vein Thrombosis (DVT) or Pulmonary Embolism (PE) (~0.5%).</td>
                    <td>Risk of **EHIT (Endovenous Heat-Induced Thrombosis)**, where a thrombus extends from the ablated GSV into the deep femoral vein.</td>
                </tr>
                <tr>
                    <td><strong>Soft Tissue Trauma</strong></td>
                    <td>Significant groin ecchymosis, hematoma formation along the stripped tract, and wound healing complications.</td>
                    <td>Minimal bruising, no groin incisions, rare superficial skin burns (prevented by proper tumescence).</td>
                </tr>
                <tr>
                    <td><strong>Recurrence Dynamics</strong></td>
                    <td>Often driven by **neovascularization** across the open groin scar matrix or missed proximal tributaries.</td>
                    <td>Driven by incomplete initial ablation, technical delivery failure, or recanalization of the fibrotic tract.</td>
                </tr>
            </tbody>
        </table>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Synthesize surgical anatomy and advanced endovascular principles to analyze these questions:</em></p>
            <ol style="margin-left: 20px;">
                <li>Define "Endovenous Heat-Induced Thrombosis" (EHIT), classify its stages, and outline the corresponding management steps.</li>
                <li>Why is the administration of perivenous tumescent anesthesia considered mandatory for thermal ablation (EVLA/RFA) but unnecessary during mechanochemical ablation (MOCA/ClariVein)?</li>
                <li>A patient presents with a large recurrent groin varicosity five years after a high ligation and stripping procedure. Duplex ultrasound reveals multiple small, tortuous vessels connecting the femoral vein to the residual GSV. What is this phenomenon called, and how does it happen?</li>
                <li>Explain the biophysical reason why a 1470 nm radial laser fiber is associated with less postoperative pain and ecchymosis compared to an older 810 nm bare-tip laser fiber in EVLA.</li>
                <li>What are the absolute contraindications to performing an endovenous thermal ablation of the great saphenous vein?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>**EHIT** describes the extension of a thrombus from an ablated superficial vein into a deep venous junction. It is classified into four classes:
                            <ul>
                                <li>*Class I:* Thrombus extends up to the SFJ/SPJ but does not enter the deep lumen. (Monitor with ultrasound; no anticoagulation needed).</li>
                                <li>*Class II:* Thrombus enters the deep vein, occupying &lt;50% of its lumen. (Treat with low-molecular-weight heparin or DOAC until resolved).</li>
                                <li>*Class III:* Thrombus occupies &gt;50% of the deep venous lumen. (Full therapeutic anticoagulation required).</li>
                                <li>*Class IV:* Complete occlusion of the deep vein. (Full therapeutic anticoagulation; manage as an acute DVT).</li>
                            </ul>
                        </li>
                        <li>Thermal ablation requires high thermal energy to denature the vein wall, which can cause significant pain and conduct heat outward to damage adjacent structures. Tumescent anesthesia is required to numb the area, compress the vein, and act as a protective thermal barrier. Mechanochemical ablation (MOCA), however, uses a rotating wire catheter tip to mechanically disrupt the endothelium while simultaneously infusing a liquid sclerosant. Because no heat is generated, there is no risk of thermal injury to surrounding nerves or skin, making perivenous tumescent fluid unnecessary.</li>
                        <li>This presentation describes **neovascularization**. When the endothelial architecture is surgically disrupted during an open groin dissection, local tissue hypoxia and wound-healing pathways trigger the release of angiogenic factors like Vascular Endothelial Growth Factor (VEGF). This induces the formation of tiny, fragile, and valve-less new vessels that cross the surgical scar tissue. Over time, these networks thin and dilate under high deep venous pressure, re-establishing a reflux pathway into the superficial system.</li>
                        <li>Older **810 nm laser wavelengths** are primarily absorbed by hemoglobin. This causes intravascular blood to boil, creating high-temperature steam bubbles that cause focal perforations in the vein wall, leading to collateral tissue burning, post-procedural bruising (ecchymosis), and pain. Modern **1470 nm wavelengths** target water molecules within the vessel wall itself. This allows for direct, uniform absorption by the endothelium and tunica media at lower overall energy settings, minimizing vein wall perforation and collateral tissue injury.</li>
                        <li>Absolute contraindications to endovenous thermal ablation include:
                            <ul>
                                <li>Acute deep vein thrombosis (DVT) or superficial thrombophlebitis at the access site.</li>
                                <li>Inability to ambulate post-procedure (which drastically increases DVT/PE risk).</li>
                                <li>Severe peripheral arterial disease ($ABPI < 0.5$) preventing mandatory post-procedural compression.</li>
                                <li>Active local systemic sepsis or cutaneous infection over the intended venous access site.</li>
                                <li>Pregnancy (due to hypercoagulability and altered pelvic hemodynamics).</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"benign-scrotal-swellings": {
    title: "Benign Scrotal Swellings: Varicocele & Hydrocele",
    videoUrl: "coming-soon",
    duration: "26 mins",
    notes: `
      <style>
        @media print {
            .bss-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .bss-notes details { display: block; }
            .bss-notes details[open] summary ~ * { animation: none; }
        }
        .bss-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .bss-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .bss-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .bss-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .bss-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .bss-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background-color: #fff; }
        .bss-notes th, .bss-notes td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; vertical-align: top; }
        .bss-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; }
        .bss-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .bss-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .bss-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .bss-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .bss-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .bss-notes ul, .bss-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .bss-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="bss-notes">
        <h1>Benign Scrotal Swellings: Varicocele &amp; Hydrocele</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Advanced Urological Curriculum: Surgical Anatomy, Hemodynamic Incompetence, and Modern Operative Interventions
        </p>

        <h2>1. Varicocele</h2>
        <p><strong>Definition:</strong> Abnormal, permanent dilatation, elongation, and tortuosity of the pampiniform venous plexus within the spermatic cord. It represents a focal failure of venous drainage from the male gonad.</p>

        <h3>The Left-Sided Predominance Vector (Anatomical Basis)</h3>
        <p>Varicoceles occur on the <strong>Left side in approximately 90%</strong> of clinical presentations. This marked asymmetry is driven by distinct hemodynamic and structural variations:</p>
        
        

[Image of testicular vein drainage anatomy]


        <ul>
            <li><strong>The Inflow Angle:</strong> The left testicular vein inserts directly into the <span class="highlight">Left Renal Vein</span> at a perpendicular <strong>90° angle</strong>. This right-angle insertion causes turbulent flow and higher hydrostatic back-pressure compared to the right testicular vein, which inserts obliquely and smoothly into the lower-pressure Inferior Vena Cava (IVC).</li>
            <li><strong>Hydrostatic Column Height:</strong> The left testicular vein is roughly 8–10 cm longer than the right due to the low anatomical position of the left testis and the higher destination point of the left renal vein. This taller fluid column exerts greater mechanical pressure on the vessel valves.</li>
            <li><strong>Nutcracker Phenomenon:</strong> The left renal vein passes between the abdominal aorta and the superior mesenteric artery (SMA). Compression of the vein between these two stiff arterial structures increases backward pressure down the left testicular vein.</li>
            <li><strong>Valvular Incompetence:</strong> The left testicular vein frequently lacks competent internal valves, removing the physiological barriers that prevent backward blood flow.</li>
        </ul>

        <h3>Clinical Presentations &amp; Pathophysiology</h3>
        <ul>
            <li><strong>Symptoms:</strong> Most patients are asymptomatic. Symptomatic individuals describe a dull, persistent, aching or dragging pain in the scrotum that worsens with prolonged standing or physical exertion and is relieved by lying flat. It is a major treatable cause of male subfertility.</li>
            <li><strong>Physical Inspection and Palpation:</strong> Classically described as a soft, irregular, compressible structure that feels like a <span class="highlight">"Bag of Worms"</span> superior to the testis.
                <ul>
                    <li><strong>Primary Varicocele:</strong> A benign condition that visibly drains and deflates when the patient moves from a standing to a supine position.</li>
                    <li><strong>Secondary Varicocele:</strong> A rare presentation that <strong>fails to decompress or reduce</strong> when the patient lies supine. This warning sign alerts the clinician to retroperitoneal pathology, such as a Renal Cell Carcinoma (RCC) extending a tumor thrombus into the renal vein or an extensive retroperitoneal lymphoma blocking venous flow.</li>
                </ul>
            </li>
        </ul>

        <h3>Clinical Grading Framework (Dubin &amp; Amelar)</h3>
        <table>
            <thead>
                <tr>
                    <th>Clinical Grade</th>
                    <th>Diagnostic Criteria &amp; Physical Findings</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Grade 1 (Subclinical Variant)</strong></td>
                    <td>The distended venous plexus is not visible and cannot be felt at rest. It becomes palpable *only* when venous pressure is spiked using the **Valsalva Maneuver** (sustained coughing or straining).</td>
                </tr>
                <tr>
                    <td><strong>Grade 2 (Moderate)</strong></td>
                    <td>The tortuous pampiniform plexus is easily felt while the patient stands at rest, but it remains hidden on visual inspection.</td>
                </tr>
                <tr>
                    <td><strong>Grade 3 (Severe / Gross)</strong></td>
                    <td>The dilated venous structures are **clearly visible through the scrotal skin** from a distance, creating an obvious cosmetic irregularity and palpable deformity.</td>
                </tr>
            </tbody>
        </table>

        <h3>Management &amp; Repair Paradigms</h3>
        <ul>
            <li><strong>Evidence-Based Indications for Operative Intervention:</strong>
                <ol>
                    <li>Documented **male subfertility** presenting with abnormal semen parameters (oligospermia, asthenospermia, or high sperm DNA fragmentation).</li>
                    <li>Symptomatic, severe, unremitting scrotal ache or structural discomfort that limits daily activities.</li>
                    <li>Progressive **Testicular Atrophy** (defined as a verified loss of gonadal tissue volume &gt;20% compared to the unaffected contralateral side, particularly critical during adolescent monitoring).</li>
                </ol>
            </li>
            <li><strong>Surgical and Interventional Strategies:</strong>
                <ul>
                    <li><strong>Open Retroperitoneal High Ligation (Palomo Procedure):</strong> Ligation of the testicular veins cephalad to the deep inguinal ring. Carries a higher risk of accidental lymphatic ligation, leading to postoperative hydrocele formation.</li>
                    <li><strong>Open Inguinal Approach (Ivanissevich Procedure):</strong> Accesses the spermatic cord within the inguinal canal. Requires dividing multiple individual venous branches.</li>
                    <li><strong>Microsurgical Sub-inguinal Varicocelectomy:</strong> The undisputed <span class="highlight">Gold Standard</span>. Utilizing a high-power operating microscope allows the surgeon to selectively ligate all internal and external spermatic veins while carefully preserving the delicate testicular arteries and lymphatic channels. This approach yields the lowest recurrence rate (&lt;1%) and the lowest complication rate.</li>
                    <li><strong>Laparoscopic Ligation:</strong> A minimally invasive trans-abdominal option that allows for high bilateral ligation but requires general anesthesia.</li>
                    <li><strong>Radiological Percutaneous Retrograde Embolization:</strong> An outpatient procedure that occludes the incompetent vein using micro-coils or sclerosing agents via femoral or jugular access. Highly dependent on the operator's skill.</li>
                </ul>
            </li>
        </ul>

        <h2>2. Vaginal Hydrocele</h2>
        <p><strong>Definition:</strong> An abnormal, excessive collection of clear serous fluid contained within the virtual cavity between the visceral and parietal layers of the tunica vaginalis, which surrounds the anterior and lateral aspects of the testis.</p>

        <h3>Etiological and Structural Types</h3>
        <ul>
            <li><strong>Congenital / Communicating Hydrocele:</strong> Caused by a failed closure of the **Processus Vaginalis (PPV)**, leaving a channel that connects the peritoneal cavity directly to the scrotum. The fluid shifts dynamically throughout the day, decreasing when supine overnight and increasing after standing all day. It shares the same underlying anatomy as an indirect inguinal hernia.</li>
            <li><strong>Primary Idiopathic Hydrocele:</strong> Typically seen in adult men. It stems from a slow, chronic imbalance where fluid production by the mesothelial cells of the tunica vaginalis outpaces lymphatic drainage. The underlying testis is entirely normal.</li>
            <li><strong>Secondary Hydrocele:</strong> A reactive fluid collection triggered by an underlying disease process within the scrotum:
                <ul>
                    <li>*Acute Causes:* Severe bacterial epididymo-orchitis, direct scrotal trauma, or acute testicular torsion.</li>
                    <li>*Chronic Drivers:* **Lymphatic Filariasis** (endemic infection by *Wuchereria bancrofti* obstructing lymphatic drainage), granulomatous Tuberculosis, or an underlying **Testicular Tumor** causing a reactive fluid collection.</li>
                </ul>
            </li>
        </ul>

        <h3>Diagnostic Assessment</h3>
        <ul>
            <li><strong>Clinical Palpation:</strong> Reveals a smooth, tense or lax, non-tender cystic mass. A key clinical finding is that the examiner **"can get above the swelling"**—the spermatic cord can be clearly felt between the thumb and forefinger at the top of the scrotum. This safely excludes an incarcerated or irreducible inguino-scrotal hernia.</li>
            <li><strong>Transillumination Test:</strong> When a penlight is pressed against the side of the scrotum in a darkened room, the clear serous fluid glows with a **brilliant red illumination**. This confirms the presence of clear fluid and excludes solid tissue masses or blood collections.</li>
            <li><strong>Scrotal Duplex Ultrasonography:</strong> Mandatory in adult presentations to evaluate the underlying architecture of the testis. A small, reactive hydrocele can sometimes mask an early-stage **Testicular Cancer** on manual exam.</li>
        </ul>

        <h3>Operative Management Strategies</h3>
        <table>
            <thead>
                <tr>
                    <th>Surgical Procedure</th>
                    <th>Anatomical Technique &amp; Indications</th>
                    <th>Clinical Advantages &amp; Trade-offs</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Lord's Plication</strong></td>
                    <td>Indicated for **thin-walled, translucent primary sacs**. The sac is opened via an anterior incision, and the redundant borders are collapsed inward and secured to the testis using interrupted rows of absorbable sutures, gathering the tissue like a folded curtain.</td>
                    <td>Minimizes tissue dissection and avoids disrupting the surrounding fascial layers. This significantly reduces the risk of postoperative hematoma and infection. Not suitable for thickened, long-standing sacs.</td>
                </tr>
                <tr>
                    <td><strong>Jaboulay's Eversion</strong></td>
                    <td>Indicated for **large, thick-walled, or chronic secondary sacs**. The redundant hydrocele sac is inverted 180 degrees behind the testis and epididymis, exposing the endothelial surface outward toward the scrotal tissues for fluid reabsorption. The edges are sutured together behind the cord.</td>
                    <td>Effectively prevents recurrence in large hydroceles but requires wider surgical dissection, which increases the risk of postoperative ooze and scrotal swelling.</td>
                </tr>
                <tr>
                    <td><strong>Subtotal Excision</strong></td>
                    <td>Reserved for **massive, fibrotic, calcified, or multi-loculated hydrocele sacs** (commonly seen in long-standing tropical lymphatic filariasis). The redundant tunica vaginalis is excised completely, leaving only a small cuff near the mediastinum testis.</td>
                    <td>Provides definitive treatment for distorted tissue structures but carries a high risk of postoperative scrotal hematoma. Requires meticulous hemostasis and often placement of a temporary suction drain.</td>
                </tr>
            </tbody>
        </table>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What is the underlying pathophysiology of spermatogenesis impairment in patients with an uncorrected clinical varicocele?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> The pooling of blood within the dilated pampiniform plexus disrupts the counter-current heat exchange mechanism of the testicular artery. This raises the intrascrotal temperature above its normal physiological level of **$34^\circ\text{C}$ to $35^\circ\text{C}$** ($1^\circ\text{C}$ to $2^\circ\text{C}$ below core body temperature). This chronic heat stress induces oxidative stress, tissue hypoxia, and local accumulation of toxic adrenal metabolites, which damages the germinal epithelium and leads to impaired spermatogenesis, lower sperm counts, and poor motility.</p>
                </div>
            </details>
        </div>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Apply your knowledge of retroperitoneal anatomy, vascular mechanics, and embryology to evaluate these clinical questions:</em></p>
            <ol style="margin-left: 20px;">
                <li>A 45-year-old male presents with a sudden-onset, non-reducing right-sided varicocele. What immediate diagnostic workup is required, and what specific pathology must you rule out?</li>
                <li>How does the surgical management of a congenital communicating hydrocele in a 3-year-old child differ fundamentally from the surgical management of a primary idiopathic hydrocele in an adult?</li>
                <li>Why is the microsurgical sub-inguinal approach associated with a significantly lower incidence of postoperative hydrocele formation compared to high retroperitoneal ligation (Palomo)?</li>
                <li>During a physical exam, how do you reliably differentiate a spermatocele (epididymal cyst) from a primary vaginal hydrocele if both are transilluminating cystic lesions?</li>
                <li>Explain the embryological development of the left renal vein and how it contributes to the "Nutcracker Phenomenon."</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>An isolated, sudden-onset right-sided varicocele requires an immediate **Abdominal and Pelvic CT scan or Ultrasound**. Because the right testicular vein drains obliquely directly into the high-flow IVC, a right-sided varicocele is rare. Its presence suggests a space-occupying **retroperitoneal mass, a primary renal cell carcinoma with a tumor thrombus invading the IVC**, or deep retroperitoneal fibrosis obstructing the venous ostium.</li>
                        <li>A congenital communicating hydrocele in a child is caused by a **Patent Processus Vaginalis (PPV)**. The definitive treatment requires an **inguinal incision and high ligation of the patent sac at the deep internal ring**, identical to an indirect inguinal herniotomy; the scrotal sac itself is left untouched. In contrast, an adult primary hydrocele is treated via a **scrotal incision followed by plication (Lord's) or eversion (Jaboulay's) of the tunica vaginalis sac**, as there is no open connection to the peritoneal cavity.</li>
                        <li>The microsurgical sub-inguinal approach utilizes high-power magnification, allowing the surgeon to clearly identify and **preserve the delicate lymphatic vessels** of the spermatic cord while selectively ligating the veins. In contrast, the Palomo mass ligation procedure cuts across the entire vascular bundle at a higher level, inadvertently ligating the lymphatic channels. This prevents normal fluid drainage from the tunica vaginalis and causes **postoperative hydrocele formation** in up to 10–15% of cases.</li>
                        <li>A primary vaginal hydrocele completely surrounds the testis, making the testis difficult to palpate separately from the fluid collection. A **spermatocele/epididymal cyst is an extra-testicular lesion** that sits superior and posterior to the testis. On palpation, it can be clearly separated from the body of the testis, which feels completely normal and distinct below the cyst.</li>
                        <li>During embryogenesis, the left renal vein is formed from the **inter-subcardinal anastomosis**, a channel that crosses anterior to the aorta to link the left subcardinal vein system with the right side (which forms the IVC). The Superior Mesenteric Artery (SMA) branches off the aorta just above this cross-over point. If the origin angle of the SMA is narrow, the left renal vein becomes trapped and compressed in the **acute angle between the SMA and the abdominal aorta**, causing venous hypertension that backs up into the left gonadal vein.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"undescended-testis": {
    title: "Undescended Testis (Cryptorchidism)",
    videoUrl: "coming-soon",
    duration: "24 mins",
    notes: `
      <style>
        @media print {
            .udt-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .udt-notes details { display: block; }
            .udt-notes details[open] summary ~ * { animation: none; }
        }
        .udt-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .udt-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .udt-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .udt-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .udt-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .udt-notes .box-flow { background-color: #e8f5e9; border: 2px solid #2e7d32; padding: 20px; border-radius: 8px; margin: 25px 0; }
        .udt-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .udt-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .udt-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .udt-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .udt-notes .arrow { font-weight: bold; color: #003366; font-size: 1.2em; display: block; text-align: center; margin: 5px 0; }
        .udt-notes ul, .udt-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .udt-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="udt-notes">
        <h1>Undescended Testis (Cryptorchidism)</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Pediatric Surgical Curriculum: Embryonic Migration Arrest, Histological Dysplasia Vectors, and Operative Strategies
        </p>

        <h2>1. Embryological Migration &amp; Anatomical Classification</h2>
        <p><strong>Cryptorchidism</strong> is the arrest of the normal unilateral or bilateral physiological descent of the testis from its embryonic retroperitoneal origin into the lower scrotum. True cryptorchidism must be strictly differentiated from anomalous migrations or hyperactive muscle reflexes.</p>
        
        

        <ul>
            <li><strong>True Undescended Testis (UDT):</strong> The gonad is mechanically stalled at some point along its physiological path of descent:
                <ul>
                    <li>*Intra-abdominal:* Positioned proximal to the internal (deep) inguinal ring within the retroperitoneal or pelvic space.</li>
                    <li>*Intracanalicular:* Located within the margins of the inguinal canal between the deep and superficial rings. This represents the <span class="highlight">Most Common Variant</span>, accounting for roughly 70% of clinical cases.</li>
                    <li>*High Scrotal (Prescrotal):* Positioned just outside the external (superficial) inguinal ring, failing to reach the lower scrotal floor.</li>
                </ul>
            </li>
            <li><strong>Ectopic Testis:</strong> The gonad completes its passage through the inguinal canal but is misdirected by an anomalous path of the gubernaculum testis, implanting outside its normal physiological pathway:
                <ul>
                    <li><span class="highlight">Superficial Inguinal Pouch (Denis Browne Pouch)</span>: Located anterior to the external oblique aponeurosis. This is the most common ectopic presentation.</li>
                    <li>*Other Ectopic Vectors:* Perineal, femoral canal, crural, or contralateral hemiscrotal configurations.</li>
                </ul>
            </li>
            <li><strong>Retractile Testis:</strong> A normal physiological variant where a highly active **Cremasteric Muscle Reflex** pulls the gonad back into the groin. On clinical examination, the testis can be gently "milked" down into the lower scrotum, where it **remains without tension** once released. This condition does not cause structural tissue damage and requires monitoring rather than surgery.</li>
        </ul>

        <h2>2. Pathophysiological Complications (The Rationale for Intervention)</h2>
        <p>Normal spermatogenesis requires a localized environment that is **1°C to 2°C cooler** than core body temperature. The higher temperature of the abdomen or inguinal canal triggers progressive thermal injury to the cellular elements of the testicular parenchyma.</p>
        
        <ul>
            <li><strong>Impairment of Fertility Dynamics:</strong> Thermal injury to the sensitive **Sertoli cells** and germinal epithelium begins within the first 12 to 18 months of life. If bilateral undescended testes are left untreated past this window, the risk of permanent adult sterility rises significantly.</li>
            <li><strong>Malignant Transformation Risk:</strong> Cryptorchidism is associated with up to a 40-fold increase in the lifetime risk of developing testicular cancer.
                <ul>
                    <li>*Histological Type:* <span class="highlight">Seminoma</span> is the most common malignancy observed in uncorrected cases.</li>
                    <li>*Anatomical Risk Vector:* Intra-abdominal location carries the highest risk of malignant transformation.</li>
                    <li>*Surgical Caveat:* **Orchidopexy does not eliminate the underlying risk of malignant transformation.** Instead, it repositions the gonad into an accessible location within the scrotum, allowing for regular manual self-examination and early detection.</li>
                </ul>
            </li>
            <li><strong>Ischemic Torsion Risk:</strong> Anomalous development of the regional mesentery and gubernaculum creates high structural mobility, increasing the baseline risk of acute testicular torsion.</li>
            <li><strong>Mechanical Vulnerability:</strong> An intracanalicular or prescrotal testis can be compressed against the hard surface of the pubic bone during direct trauma.</li>
            <li><strong>Concomitant Indirect Inguinal Hernia:</strong> A patent, non-obliterated **Processus Vaginalis (PPV)** is present in over 90% of cases, creating a direct pathway for a hernia sac.</li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What is the optimal surgical window for performing an Orchidopexy, and what is the biological justification for this timeline?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> The ideal window for orchidopexy is between **6 and 12 months of age** (and should be completed by 18 months at the latest). Spontaneous descent of a true undescended testis is rare after 6 months of age. Performing surgery within this timeframe minimizes irreversible ultrastructural damage, such as loss of spermatogonia, conversion failure of gonocytes, and interstitial fibrosis, which begin to develop around 1.5 to 2 years of age.</p>
                </div>
            </details>
        </div>

        <h2>3. Clinical Diagnostic and Management Algorithm</h2>
        <p>Physical examination must be performed in a warm environment to minimize cremasteric muscle contraction. The patient is placed in a "frog-leg" position, and the clinician gently sweeps or "milks" the inguinal canal from the anterior superior iliac spine down toward the scrotum.</p>

        <div class="box-flow">
            <h3 style="margin-top:0; text-align:center; display: block; border-bottom: none;">Diagnostic Pathway: Is the Testis Palpable on Clinical Exam?</h3>
            
            <div style="display:flex; gap:20px; margin-top: 20px;">
                <div style="flex:1; background:white; padding:15px; border-radius:5px; border: 1px solid #2e7d32;">
                    <h4 style="color:#2e7d32; text-align:center; margin-top: 0;">✅ YES (Palpable)</h4>
                    <p style="text-align:center; font-size: 0.9em; color: #555;">(Typically located within the Inguinal Canal or High Scrotal Position)</p>
                    <span class="arrow">⬇</span>
                    <p style="text-align:center; font-weight: bold; color: #003366;">Open Inguinal Orchidopexy</p>
                    <p style="font-size: 0.85em; text-align: center; color: #666; margin-bottom: 0;">Standard single-stage surgical repositioning and fixation approach.</p>
                </div>
                
                <div style="flex:1; background:white; padding:15px; border-radius:5px; border: 1px solid #c62828;">
                    <h4 style="color:#c62828; text-align:center; margin-top: 0;">❌ NO (Non-Palpable)</h4>
                    <p style="text-align:center; font-size: 0.9em; color: #555;">(Intra-abdominal, Atrophic, or Congenitally Absent / Vanished)</p>
                    <span class="arrow">⬇</span>
                    <p style="text-align:center; font-weight: bold; color: #b71c1c;">Diagnostic Laparoscopy (<span class="highlight">Gold Standard</span>)</p>
                    <span class="arrow">⬇</span>
                    <p style="font-size: 0.9em; font-weight: bold; margin-bottom: 5px;">Intra-operative Findings &amp; Next Steps:</p>
                    <ul style="font-size: 0.85em; margin-bottom: 0; padding-left: 15px;">
                        <li><strong>Vanishing Testis Syndrome:</strong> Blind-ending testicular vessels are identified, confirming in-utero vascular loss. (Terminate procedure).</li>
                        <li><strong>Intra-abdominal Testis:</strong> Proceed directly to Laparoscopic Orchidopexy (Single-stage or multi-stage approach).</li>
                    </ul>
                </div>
            </div>
        </div>

        <h2>4. Advanced Surgical Techniques</h2>

        <h3>A. Standard Open Inguinal Orchidopexy (For Palpable Gonads)</h3>
        <ol>
            <li><strong>Surgical Incision:</strong> A transverse incision is placed along the lower inguinal skin crease on the affected side.</li>
            <li><strong>Mobilization Phase:</strong> The external oblique aponeurosis is incised to open the inguinal canal, allowing the testis and spermatic cord to be carefully isolated from surrounding tissues.</li>
            <li><strong>Herniotomy Step:</strong> The **Patent Processus Vaginalis (PPV)** is dissected free from the anterior-medial aspect of the cord structures, divided, and high-ligated at the internal inguinal ring. This step is mandatory to correct the associated indirect hernia pathway.</li>
            <li><strong>Retroperitoneal Dissection (Prentiss Maneuver):</strong> The lateral spermatic fascia is divided, and retroperitoneal dissection is performed to gain adequate length on the testicular vessels, allowing the gonad to reach the scrotum without tension.</li>
            <li><strong>Scrotal Fixation:</strong> A sub-dartos pouch is created in the lower scrotum. The testis is passed down into the pouch and secured to the dartos fascia, preventing upward retraction.</li>
        </ol>

        <h3>B. Laparoscopic Multi-Stage Approaches (For High Intra-Abdominal Gonads)</h3>
        <ul>
            <li><strong>The Stephen-Fowler Technique:</strong> Employed when the short length of the primary testicular artery prevents tension-free mobilization into the lower scrotum.
                <ul>
                    <li>*Stage 1 Interventions:* The main testicular vessels are clipped or ligated *in situ* well proximal to the testis. This forces the gonad to adapt and increase its blood supply over the next 6 months via collateral vessels traveling along the **Vas Deferens (Deferential Artery)**.</li>
                    <li>*Stage 2 Interventions:* Six months later, the mobilized testis is moved down into the scrotum on a vascular pedicle supplied entirely by these collateral pathways.</li>
                </ul>
            </li>
        </ul>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Apply your knowledge of pediatric anatomy, vascular physiology, and oncology to evaluate these clinical scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>Explain why utilizing modern diagnostic modalities like MRI or CT scans is discouraged when evaluating a child presenting with a non-palpable undescended testis.</li>
                <li>What is the embryological role of the gubernaculum, and which main hormonal factors control the first and second phases of testicular descent?</li>
                <li>During an open inguinal orchidopexy, what is the anatomical hazard associated with over-dissection or rough handling along the posterior-medial aspect of the spermatic cord?</li>
                <li>A 14-year-old adolescent is found to have an uncorrected intra-abdominal testis during an evaluation for groin discomfort. What is the recommended management plan, and what justifies this choice?</li>
                <li>How can a clinician differentiate a retractile testis from an ectopic testis located in the superficial inguinal pouch on physical exam?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>Imaging modalities like Ultrasound, CT, and MRI have a high rate of false-negative results and **cannot reliably rule out the presence of a small intra-abdominal or atrophic testis**. A negative scan still requires surgical verification. Because it has near-perfect sensitivity and specificity while allowing for immediate treatment, **diagnostic laparoscopy remains the gold standard** for managing a non-palpable testis, making prior cross-sectional imaging unnecessary.</li>
                        <li>The gubernaculum is a mesenchymal cord that links the lower pole of the fetal testis to the inguinal region, guiding its descent. Testicular descent occurs in two distinct phases: **(1) The Transabdominal Phase (weeks 10–15)**, which is primarily regulated by Leydig cell production of **Insulin-like 3 (INSL3)**; and **(2) The Transinguinal Phase (weeks 25–35)**, which is driven by **testosterone** and mediated via the genitofemoral nerve.</li>
                        <li>The posterior-medial aspect of the spermatic cord contains the **vas deferens and the deferential artery**. Rough dissection or excessive thermal energy in this area can damage the deferential artery or cause complete transection of the vas deferens. This can compromise the blood supply to the testis and cause permanent blockage of sperm transport from that side.</li>
                        <li>The recommended treatment for an uncorrected intra-abdominal testis discovered after puberty is a formal **Orchidectomy**. At 14 years of age, the germinal epithelium has already suffered irreversible thermal damage, making the potential for fertility recovery minimal. Given the significantly high risk of **malignant transformation (seminoma)** in an intra-abdominal location, removing the non-functional organ is preferred over repositioning it.</li>
                        <li>A **retractile testis can be swept down into the scrotum along its normal path and will remain there** without tension because the cremasteric reflex can be temporarily overcome. An **ectopic testis cannot be manipulated into the lower scrotum** because it is restricted by abnormal fascial attachments outside the physiological path of descent. It will spring back to its ectopic position immediately when released.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"ca-penis": {
    title: "Carcinoma of the Penis",
    videoUrl: "coming-soon",
    duration: "26 mins",
    notes: `
      <style>
        @media print {
            .ca-penis-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .ca-penis-notes details { display: block; }
            .ca-penis-notes details[open] summary ~ * { animation: none; }
        }
        .ca-penis-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .ca-penis-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .ca-penis-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .ca-penis-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .ca-penis-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .ca-penis-notes .box-flow { background-color: #e8f5e9; border: 2px solid #2e7d32; padding: 20px; border-radius: 8px; margin: 25px 0; }
        .ca-penis-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .ca-penis-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .ca-penis-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .ca-penis-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .ca-penis-notes .arrow { font-weight: bold; color: #003366; font-size: 1.2em; display: block; text-align: center; margin: 5px 0; }
        .ca-penis-notes ul, .ca-penis-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .ca-penis-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="ca-penis-notes">
        <h1>Carcinoma of the Penis</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Uro-Oncology Curriculum: Carcinogenic Microenvironments, Micro-Metastatic Dynamics, and Inguinal Block Dissection
        </p>

        <h2>1. Etiology &amp; Molecular Risk Factors</h2>
        <p>Carcinoma of the penis is an epithelial malignancy strongly tied to chronic regional irritation, chemical carcinogens, and oncogenic viral integration. Its incidence varies widely based on regional hygiene and cultural practices.</p>

        <ul>
            <li><strong>Phimosis, Smegma, and Chronic Inflammation:</strong> 
                <ul>
                    <li>*Pathophysiology:* Phimosis prevents proper retraction of the foreskin, trapping **smegma** (a mixture of desquamated epithelial cells, skin oils, and moisture) within the preputial sac. </li>
                    <li>*Carcinogenesis:* Bacterial breakdown of trapped smegma by species like *Mycobacterium smegmatis* produces sterol derivatives that act as chronic chemical carcinogens. This induces low-grade, persistent balanoposthitis, leading to cellular atypia and DNA damage over time.</li>
                    <li>*Prophylactic Value:* Neonatal circumcision provides near-100% protection against penile cancer by eliminating the subpreputial space. Circumcision performed after adolescence does not offer the same degree of protection.</li>
                </ul>
            </li>
            <li><strong>Viral Oncogenesis:</strong> Infection with high-risk <span class="highlight">Human Papillomavirus (HPV Types 16 and 18)</span> is seen in 40–50% of cases. The viral oncogenes **E6 and E7** integrate into host keratinocyte DNA, inactivating the tumor suppressor proteins **p53 and pRb** respectively. This disrupts the cell cycle control network and leads to unregulated cellular proliferation.</li>
            <li><strong>Synergistic Carcinogens:</strong> Tobacco smoking increases the risk of penile cancer through the accumulation of systemic nitrosamines and polycyclic aromatic hydrocarbons within preputial tissues, compounding local inflammatory irritation.</li>
            <li><strong>Premalignant Lesions and Carcinoma In Situ (CIS):</strong>
                <ul>
                    <li><strong>Erythroplasia of Queyrat:</strong> A bright red, velvety, un-keratinized Carcinoma In Situ plaque characteristically localized to the <span class="highlight">Glans or Inner Prepuce</span>.</li>
                    <li><strong>Bowen's Disease:</strong> A gray-white, hyperkeratotic, crusting plaque presenting on the fully keratinized skin of the <span class="highlight">Penile Shaft</span>.</li>
                    <li><strong>Balanitis Xerotica Obliterans (BXO):</strong> The penile presentation of lichen sclerosus, characterized by chronic white leukoplakic plaques near the urethral meatus. It causes dense tissue scarring and poses a long-term risk for invasive squamous cell carcinoma.</li>
                </ul>
            </li>
        </ul>

        <h2>2. Pathology &amp; Clinical Presentations</h2>
        <ul>
            <li><strong>Histological Patterns:</strong> Over 95% of primary malignant penile tumors are **Squamous Cell Carcinomas (SCC)**. Subtypes include well-differentiated verrucous carcinoma (which grows locally but rarely metastasizes), basaloid SCC, and sarcomatoid variants (which behave aggressively).</li>
            <li><strong>Anatomical Distribution:</strong> Glans ($48\%$) &gt; Prepuce ($21\%$) &gt; Glans and Prepuce combined ($9\%$) &gt; Penile Shaft ($2\%$).</li>
            <li><strong>Clinical Signs:</strong>
                <ul>
                    <li>Presents as a firm, non-healing ulcerating nodule or an exophytic, cauliflower-like mass that bleeds easily on contact.</li>
                    <li>Often accompanied by a foul-smelling, purulent, or blood-tinged subpreputial discharge. In patients with severe phimosis, the primary lesion may remain hidden, presenting only as a firm, palpable mass beneath the foreskin.</li>
                    <li><strong>Inguinal Lymphadenopathy:</strong> Over 50% of patients present with enlarged inguinal lymph nodes at diagnosis. **Crucial Oncological Point: More than half of these initial palpable nodes are inflammatory (reactive hyperplasia) rather than metastatic.** Chronic ulceration of the primary tumor leads to secondary bacterial infections, causing painful swelling of the regional lymph nodes.</li>
                </ul>
            </li>
        </ul>

        <h2>3. Surgical Management of the Primary Lesion</h2>
        <p>The primary surgical goal is complete oncological clearance with negative margins, while preserving enough penile tissue to maintain standing micturition and, when possible, sexual function.</p>

        <ul>
            <li><strong>Superficial Carcinoma In Situ (Tis):</strong> Treated with lung-sparing, non-mutilating approaches. Options include topical chemotherapy using 5-Fluorouracil (5-FU) or Imiquimod creams, Carbon Dioxide ($CO_2$) or Nd:YAG laser ablation, or complete glans resurfacing with skin grafting.</li>
            <li><strong>Invasive Disease (Stages T1 and T2):</strong>
                <ul>
                    <li><strong>Partial Penectomy:</strong> Indicated for distal tumors of the glans or prepuce where a <span class="highlight">minimum 2 mm histologically clean margin</span> can be achieved while leaving a functional penile stump of at least **2 to 3 cm**. This remaining length is necessary to direct the urinary stream during standing voiding.</li>
                    <li><strong>Total Penectomy:</strong> Required for large, deeply invasive, or proximally located shaft tumors where a partial resection cannot guarantee clear margins or would leave an unusable stump. The surgery requires complete removal of the penile structures and the creation of a permanent **Perineal Urethrostomy**, requiring the patient to sit down to void.</li>
                </ul>
            </li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What is the "Sentinel Lymph Node of Cabanas"? What is its precise anatomical location and clinical significance?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> The **Node of Cabanas** is the primary sentinel lymph node repository for the glans penis. It is located within the superficial inguinal lymph node cluster, situated **medial to the junction of the superficial epigastric vein and the greater saphenous vein**. Because penile malignancies spread in a step-wise fashion through lymphatic embolization rather than hematogenous routes, this node represents the first site of micro-metastasis. If this node is tumor-free, the rest of the inguinal cluster is highly likely to be clear.</p>
                </div>
            </details>
        </div>

        <h2>4. Management of Inguinal Lymph Nodes (The Critical Prognostic Choice)</h2>
        <p>Patient survival is directly determined by nodal status. Penile cancer metastasizes in a predictable, step-wise pathway: it travels first to the <strong>Superficial Inguinal Nodes</strong>, moves down to the <strong>Deep Inguinal Nodes</strong> (beneath the fascia lata), and finally progresses to the <strong>Pelvic Lymph Nodes</strong> (External Iliac cluster).</p>
        
        

        <div class="box-flow">
            <h3 style="margin-top:0; display: block; border-bottom: none;">Management Pathway A: Palpable Inguinal Lymph Nodes (Clinically Positive)</h3>
            <p><strong>Step 1: Antibiotic Optimization:</strong> Administer a broad-spectrum 4-to-6-week course of antibiotics (e.g., fluoroquinolones or co-amoxiclav) following treatment of the primary tumor to clear secondary bacterial lymphadenitis. Re-evaluate the groin after the course.</p>
            <span class="arrow">⬇</span>
            <p><strong>Step 2: Clinical Re-Assessment:</strong>
                <ul style="margin-bottom: 10px;">
                    <li>*Resolution of Nodal Swelling:* Nodes disappear completely $\rightarrow$ Transition to close **Surveillance** every 2–3 months.</li>
                    <li>*Persistent Nodal Swelling:* Nodes remain palpable $\rightarrow$ Perform an ultrasound-guided **Fine Needle Aspiration Cytology (FNAC)** or core biopsy.</li>
                </ul>
            </p>
            <span class="arrow">⬇</span>
            <p><strong>Step 3: Definitive Operation:</strong> If FNAC confirms malignant cells $\rightarrow$ Proceed to a formal **Radical Ilio-Inguinal Block Dissection** (comprising complete inguinal and ipsilateral pelvic lymphadenectomy).</p>
        </div>

        <div class="box-flow" style="border-color: #0277bd; background-color: #e1f5fe;">
            <h3 style="margin-top:0; display: block; border-bottom: none; color: #01579b;">Management Pathway B: Non-Palpable Inguinal Lymph Nodes (Clinically Negative - cN0)</h3>
            <p><em>Up to 20% of patients with non-palpable groins harbor occult, microscopic metastases that cannot be detected by physical exam or conventional imaging.</em></p>
            
            <ul style="margin-bottom: 0;">
                <li><strong>Low-Risk Primary Tumors (Tis, Ta, T1G1):</strong> The risk of occult disease is$&lt;5\%$. The recommended plan is close clinical **Surveillance** without invasive staging.</li>
                <li><strong>High-Risk Primary Tumors ($\ge$T1G3, T2, T3):</strong> The risk of micro-metastasis exceeds 20%. Invasive staging or preventative dissection is required:
                    <ul>
                        <li><strong>Dynamic Sentinel Lymph Node Biopsy (DSNB):</strong> Utilizes an intraoperative injection of Technetium-99m ($^{99\text{m}}\text{Tc}$) radiocolloid and patent blue dye around the primary tumor site to identify and biopsy the sentinel node. This is the gold standard for staging cN0 groins when available.</li>
                        <li><strong>Modified Inguinal Lymph Node Dissection (Catalona Approach):</strong> An alternative approach that limits dissection by avoiding the lateral and inferior femoral regions, preserving the greater saphenous vein and the fascia lata to reduce postoperative complications. If frozen section analysis reveals positive nodes, the surgeon proceeds to a complete radical lymphadenectomy.</li>
                    </ul>
                </li>
            </ul>
        </div>

        <h3>Complications of Radical Ilio-Inguinal Block Dissection</h3>
        <p>Radical groin dissection carries significant postoperative morbidity due to the disruption of regional skin flaps and lymphatic pathways:</p>
        <ul>
            <li><strong>Skin Flap Necrosis and Wound Dehiscence:</strong> The most common early complication. It occurs due to damage to the fragile subdermal vascular plexus of the inguinal skin flaps during wide undermining.</li>
            <li><strong>Chronic Inguinal Lymphedema:</strong> The most common long-term complication, affecting up to 30–50% of patients. Severe disruption of lymphatic drainage leads to chronic, often permanent swelling of the lower extremities and scrotum.</li>
            <li><strong>Lymphocele and Lymphatic Fistula:</strong> Accumulation of lymphatic fluid within the femoral triangle due to inadequate ligation of afferent lymphatic vessels.</li>
        </ul>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Synthesize lymphatic anatomy, staging guidelines, and microvascular surgical principles to evaluate these clinical scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>Explain why a standard incisional or excisional biopsy of a palpable inguinal lymph node is strongly discouraged in penile cancer staging.</li>
                <li>During a radical inguinal lymphadenectomy, what are the precise boundaries of the Femoral Triangle (Scarpa’s Triangle) that define a complete nodal dissection?</li>
                <li>Describe the anatomical rationale for preserving the greater saphenous vein during a modified (Catalona) inguinal lymph node dissection.</li>
                <li>What is the clinical role of pelvic lymphadenectomy (ilio-lymphadenectomy) in penile cancer, and what finding indicates the need for this procedure?</li>
                <li>Why is the translocation of the sartorius muscle (Sartorius Myoplasty) performed during a radical groin block dissection?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>Open incisional or excisional biopsies disrupt the natural lymphatic pathways and violate tissue planes. This increases the risk of **local tumor spill, skin tract seeding, and unmanageable regional recurrence**. Fine Needle Aspiration Cytology (FNAC) or core needle biopsy under ultrasound guidance is preferred because it achieves tissue diagnosis without altering lymphatic drainage patterns or damaging the overlying skin flaps.</li>
                        <li>The boundaries of the femoral triangle include the **Inguinal Ligament** superiorly, the medial border of the **Sartorius Muscle** laterally, and the medial border of the **Adductor Longus Muscle** medially. The floor is formed by the iliopsoas and pectineus muscles. A complete radical inguinal lymphadenectomy requires removing all fatty and lymphatic tissue within these boundaries down to the femoral vessel sheath.</li>
                        <li>Preserving the greater saphenous vein maintains a primary venous return pathway from the lower extremity. This helps lower hydrostatic pressure in the skin and subcutaneous tissues, **reducing the incidence and severity of postoperative skin flap breakdown, acute wound infection, and chronic lymphedema**.</li>
                        <li>Pelvic lymphadenectomy is indicated when **histological involvement of the deep inguinal lymph nodes** (such as Cloquet's node) is confirmed, or when **two or more superficial inguinal nodes** test positive on final pathology. Penile cancer spreads in a step-wise pattern from the superficial to the deep inguinal clusters before moving to the external iliac pelvic chain. Finding disease in the deep groin indicates a high risk of pelvic involvement.</li>
                        <li>During a radical groin dissection, removing the overlying deep fascia leaves the **femoral artery and vein exposed within the femoral triangle**. The sartorius muscle is detached from its origin at the anterior superior iliac spine, rotated medially, and sutured to the inguinal ligament. This transposition covers and protects the femoral vessels, reducing the risk of catastrophic vascular rupture if skin flap necrosis or a deep wound infection develops.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"phimosis-circumcision": {
    title: "Phimosis & Circumcision",
    videoUrl: "coming-soon",
    duration: "22 mins",
    notes: `
      <style>
        @media print {
            .phimosis-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .phimosis-notes details { display: block; }
            .phimosis-notes details[open] summary ~ * { animation: none; }
        }
        .phimosis-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .phimosis-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .phimosis-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .phimosis-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .phimosis-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .phimosis-notes table { width: 100%; border-collapse: collapse; margin: 25px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .phimosis-notes th, .phimosis-notes td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; vertical-align: top; }
        .phimosis-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; letter-spacing: 0.5px; }
        .phimosis-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .phimosis-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .phimosis-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .phimosis-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .phimosis-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .phimosis-notes ul, .phimosis-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .phimosis-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="phimosis-notes">
        <h1>Phimosis &amp; Circumcision</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          General Surgery &amp; Pediatric Urology: Histological Vectors, Structural Constriction Emergencies, and Operative Reconstruction
        </p>

        <h2>1. Definition &amp; Pathophysiological Mechanisms</h2>
        <p><strong>Phimosis</strong> is defined as the structural inability to retract the prepuce (foreskin) smoothly behind the coronal sulcus of the glans penis. While universal at birth as a natural protective state, its persistence or secondary development into late childhood and adulthood indicates a transition from physiological anatomy to distinct tissue pathology.</p>

        <h2>2. Clinical Differentiation: Physiological vs. Pathological</h2>
        <p>Accurately distinguishing between physiological non-retraction and pathological cicatricial narrowing is essential to prevent unnecessary surgical trauma and avoid mismanaging progressive tissue scarring.</p>

        

        <table>
            <thead>
                <tr>
                    <th>Diagnostic Feature</th>
                    <th>Physiological Phimosis</th>
                    <th>Pathological Phimosis</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Clinical Profile &amp; Age Group</strong></td>
                    <td>Neonates, infants, and toddlers. Normal, expected developmental state.</td>
                    <td>Older children, adolescents, and adults. Always considered abnormal.</td>
                </tr>
                <tr>
                    <td><strong>Gross Structural Appearance</strong></td>
                    <td>Pliable, healthy preputial skin. Distal edge appears unscarred, opening smoothly like a flexible "pout" or trumpet when retracted gently.</td>
                    <td>Presence of a rigid, **whitish cicatricial fibrotic ring (cicatrix)** at the distal preputial tip. The tissue loses compliance and feels distinctly thickened.</td>
                </tr>
                <tr>
                    <td><strong>Etiology &amp; Histology</strong></td>
                    <td>Natural congenital epithelial adhesions between the squamous lining of the inner prepuce and the glans penis.</td>
                    <td>Secondary to **Balanitis Xerotica Obliterans (BXO)**, recurrent bacterial balanoposthitis, or micro-tearing caused by premature, forced retraction.</td>
                </tr>
                <tr>
                    <td><strong>Dynamic Signs during Voiding</strong></td>
                    <td>Adhesions break down naturally by age 3–5 due to intermittent erections and keratin accumulation (smegma pearls). Normal, non-obstructed stream.</td>
                    <td>**"Ballooning"** of the preputial sac during micturition. Urine fills the trapped space before exiting slowly through a narrowed opening, indicating high-pressure urinary obstruction.</td>
                </tr>
                <tr>
                    <td><strong>Therapeutic Strategy</strong></td>
                    <td>**Conservative reassurance.** Avoid forced retraction, which tears the tissue. Gentle manual hygiene or short courses of topical steroids ($\le 0.05\%$ betamethasone) can accelerate separation.</td>
                    <td>**Surgical intervention.** Definitive management requires a formal surgical circumcision or an adapted preputioplasty.</td>
                </tr>
            </tbody>
        </table>

        <h2>3. Clinical Complications of Uncorrected Pathological Phimosis</h2>
        <ul>
            <li><strong>Recurrent Balanoposthitis:</strong> Trapped urine and secretions create a stagnant microenvironment that promotes the growth of pathogens like *Candida albicans* and *Gram-negative bacilli*. This leads to recurrent acute infections of both the glans (balanitis) and prepuce (posthitis).</li>
            <li><strong>Paraphimosis:</strong> A critical **urological emergency**. This occurs when a tight, non-compliant prepuce is forcibly retracted behind the corona and left there. The narrow ring acts as a tight tourniquet:
                <ul>
                    <li>*Pathophysiologic Cascade:* Local constriction impedes venous and lymphatic drainage $\rightarrow$ Progressive, severe edema of the isolated glans and inner prepuce $\rightarrow$ Increased tissue pressure limits arterial perfusion $\rightarrow$ Acute ischemic necrosis and gangrene of the glans if left uncorrected.</li>
                </ul>
            </li>
            <li><strong>Carcinoma of the Penis:</strong> Long-term retention of **smegma** beneath a non-retractable prepuce leads to chronic chemical irritation and low-grade inflammation. This environment acts as a local carcinogen, significantly increasing the lifetime risk of developing squamous cell carcinoma (SCC).</li>
            <li><strong>Preputial Calculi:</strong> Chronic urinary stasis combined with desquamated epithelial sheets can cause minerals and salts to precipitate, forming hard, palpable stones within the preputial sac.</li>
            <li><strong>Ascending Urinary Tract Infections (UTIs):</strong> The subpreputial space can become a reservoir for bacterial colonization, increasing the risk of ascending infections that can compromise the upper urinary tract in pediatric patients.</li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What congenital abnormality represents an absolute surgical contraindication for routine Circumcision, and why?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> **Hypospadias** (and other significant congenital penile anomalies like epispadias or severe webbed penis) is an absolute contraindication for circumcision. In these conditions, the vascularized dorsal preputial hood skin is essential to reconstruct the missing urethra (**urethroplasty**) and provide skin coverage during surgical repair. Performing a circumcision in these patients discards this critical tissue reservoir, complicating future reconstructive surgeries.</p>
                </div>
            </details>
        </div>

        <h2>4. Circumcision: Surgical Indications, Variations, and Approaches</h2>
        
        <h3>Definitive Surgical Indications</h3>
        <ul>
            <li>Proven Pathological Phimosis secondary to Balanitis Xerotica Obliterans (BXO).</li>
            <li>Recurrent, documented episodes of acute balanoposthitis unresponsive to topical hygiene measures.</li>
            <li>Recurrent ascending urinary tract infections in males with underlying anatomical vesicoureteral reflux.</li>
            <li>Refractory paraphimosis that cannot be reduced using manual compression techniques.</li>
            <li>Prophylactic protection against HIV acquisition and human papillomavirus (HPV) transmission in endemic environments.</li>
        </ul>

        <h3>Operative Strategies &amp; Procedures</h3>
        <ol>
            <li><strong>The Dorsal Slit Procedure:</strong> A targeted, longitudinal incision is made along the dorsal midline of the constricting preputial skin down to the corona. This immediately relieves the tight ring. It is used as an emergency procedure to resolve **paraphimosis** or to drain severe, purulent balanoposthitis when full excision carries a high risk of spreading infection.</li>
            <li><strong>The Sleeve Resection Approach:</strong> The standard, gold-standard open surgical technique in adolescents and adults. It utilizes circular skin incisions around both the outer and inner preputial layers. The intermediate sleeve of skin is dissected away, allowing for excellent control of bleeding and optimal cosmetic realignment of skin edges.</li>
            <li><strong>The Guillotine Excision Method:</strong> The prepuce is drawn forward ahead of the glans, clamped with a protective device or bone-cutting instrument, and excised cleanly in a single movement. While efficient for infant procedures, it carries an inherent risk of accidental glans amputation if the underlying anatomy is not precisely isolated.</li>
        </ol>

        

        <h3>Key Steps of the Standard Open Sleeve Circumcision</h3>
        <ol>
            <li><strong>Adhesion Clearance:</strong> The prepuce is carefully retracted to break down all remaining subpreputial epithelial bridge adhesions, exposing the coronal sulcus and allowing the removal of all trapped smegma.</li>
            <li><strong>Anatomical Marking:</strong> Circumferential marking lines are placed on the skin at the level of the corona to establish symmetric boundaries for excision.</li>
            <li><strong>Dual Sleeve Incisions:</strong> Circular incisions are made through the outer penile skin and the inner mucosal preputial reflection, keeping a safe margin from the coronal edge.</li>
            <li><strong>Sleeve De-gloving and Excision:</strong> The bounded segment of preputial skin is dissected away from the underlying buck's fascia and superficial dartos layer.</li>
            <li><strong>Targeted Hemostasis:</strong> Precise ligation or bipolar coagulation is carried out, with special focus on the **Frenular Artery** located at the 6 o'clock position. This vessel is the most common source of postoperative hematomas.</li>
            <li><strong>Anatomical Approximation:</strong> The outer skin edge is aligned with the remaining inner preputial mucosa using interrupted, absorbable sutures (such as 4-0 or 5-0 Vicryl or Chromic Catgut), burying the knots to reduce local tissue irritation.</li>
        </ol>

        <h2>5. Postoperative Complications</h2>
        <ul>
            <li><strong>Postoperative Bleeding and Hematoma Formation:</strong> Typically stems from inadequate initial control of the fast-flowing frenular artery or superficial dartos veins, sometimes requiring surgical re-exploration to secure the vessel.</li>
            <li><strong>Meatal Stenosis:</strong> A late complication observed primarily in infants. Removing the protective prepuce exposes the delicate external urethral meatus to direct friction from clothing or diapers. This causes persistent irritation and localized chemical urethritis from ammonia in urine, leading to ulceration, scabbing, and fibrotic narrowing of the opening.</li>
            <li><strong>Inadvertent Glans Amputation:</strong> A rare but catastrophic injury caused by improper placement of clamps during blind guillotine procedures.</li>
            <li><strong>Inadequate Skin Excision or Recurrent Phimosis:</strong> Leaving too much inner preputial mucosa can lead to secondary cicatricial ring contraction over the glans, resulting in a recurrence of phimotic non-retraction.</li>
        </ul>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Synthesize histopathology, microvascular anatomy, and emergency urological principles to evaluate these clinical scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>Identify the histopathological condition known as Balanitis Xerotica Obliterans (BXO). What specific tissue layer changes differentiate it from simple post-infectious scarring?</li>
                <li>Describe the stepwise manual technique used to reduce an acute paraphimosis before resorting to emergency surgical incisions.</li>
                <li>Why is applying aggressive monopolar electrosurgery directly to the frenulum or shaft skin discouraged during circumcision hemostasis?</li>
                <li>An infant develops a weakened, high-velocity, upward-deviated urinary stream 6 months after routine neonatal circumcision. What is the diagnosis, and what is the definitive management?</li>
                <li>How does the deep dorsal vein of the penis relate to the surgical planes accessed during a sleeve circumcision?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>BXO is the penile presentation of **Lichen Sclerosus**. Histologically, it is characterized by hyperkeratosis, significant vacuolar degeneration of the basal epithelial layer, an acellular zone of collagen sclerosis in the upper dermis, and a deep, band-like lymphocytic infiltrate. Simple post-infectious scarring shows disordered collagen deposition without this distinct zonal basal degradation and lichenoid inflammation.</li>
                        <li>Manual reduction is initiated by placing digital pressure on the glans penis for several minutes using a saline-soaked compress to compress and displace interstitial edema fluid. Next, the surgeon places both index fingers distal to the constricting preputial ring while using both thumbs to apply constant, steady downward pressure on the glans, pushing it back through the narrow ring into the compliant shaft skin.</li>
                        <li>The penile skin and subcutaneous tissue possess a delicate terminal vascular supply. Applying unipolar current can lead to **deep thermal energy transfer along the path of least resistance (the blood vessels)**, risking unexpected thrombosis of the deep dorsal artery or terminal frenular structures. This can cause localized skin sloughing, tissue loss, or ischemic necrosis of the glans. Bipolar cautery or fine suture ligation is preferred.</li>
                        <li>The patient has developed **Meatal Stenosis**, a late complication caused by chronic exposure and rubbing of the unprotected urethral meatus against diapers. Initial mild cases can be treated with topical lubricants or steroid creams. If there is significant fibrotic narrowing causing high-pressure voiding, the definitive treatment is a formal surgical **Meatotomy** or meatoplasty to restore a normal downward-directed urinary stream.</li>
                        <li>The **Deep Dorsal Vein** lies along the dorsal midline of the penis, situated deep to Buck’s Fascia and superficial to the tunica albuginea of the corpora cavernosa. During a standard sleeve circumcision, dissection should remain superficial within the loose dartos fascia layer, completely avoiding Buck's fascia. This preserves the deep dorsal vein, artery, and dorsal nerve networks, preventing severe venous hemorrhage or permanent sensory loss.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"hypospadias": {
    title: "Hypospadias: Classification & Management",
    videoUrl: "coming-soon",
    duration: "28 mins",
    notes: `
      <style>
        @media print {
            .hypospadias-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .hypospadias-notes details { display: block; }
            .hypospadias-notes details[open] summary ~ * { animation: none; }
        }
        .hypospadias-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .hypospadias-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .hypospadias-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .hypospadias-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .hypospadias-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .hypospadias-notes .box-red { background-color: #ffebee; border: 2px solid #c62828; padding: 20px; border-radius: 8px; margin: 25px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .hypospadias-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .hypospadias-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .hypospadias-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .hypospadias-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .hypospadias-notes ul, .hypospadias-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .hypospadias-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="hypospadias-notes">
        <h1>Hypospadias: Classification &amp; Management</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Pediatric Urology &amp; Plastic Reconstruction: Embryonic Fusion Failures, Microvascular Urethroplasty, and Intersex Diagnostics
        </p>

        <h2>1. Embryology &amp; The Pathognomonic Clinical Triad</h2>
        <p>Hypospadias is a congenital conditions resulting from an arrest in the androgen-dependent development of the male external genitalia during embryogenesis ($8^{\text{th}}$ to $14^{\text{th}}$ week of gestation). Specifically, there is incomplete fusion of the **urethral folds** on the ventral surface of the phallus, accompanied by defective development of the corpus spongiosum and prepuce.</p>
        
        <p>Diagnosis relies on identifying the classic presentation triad:</p>
        <ol>
            <li><strong>Anomalous Ectopic Ventral Meatus:</strong> The external urethral orifice terminates prematurely along the <span class="highlight">Ventral aspect</span> (underside) of the penis, tracking anywhere along a line from the glans down to the perineum.</li>
            <li><strong>True Chordee (Ventral Curvature):</strong> A structural bend or down-turning of the phallus, which becomes most prominent during erection. It is caused by fibrous tissue tethering (dysplastic dartos/fascial bands), an abnormally short urethral plate, or asymmetry in the length of the corpora cavernosa.</li>
            <li><strong>Deficient Dorsal Hood Prepuce:</strong> The preputial tissue fails to fuse ventrally. Instead, it aggregates excessively on the dorsal side, wrapping around the phallus to form a prominent "hooded" appearance, leaving the ventral glans completely bare.</li>
        </ol>

        <h2>2. Anatomical Classification (By Post-Correction Meatal Position)</h2>
        <p>The clinical severity and surgical planning are determined by the position of the urethral meatus **after** any associated chordee has been completely released and the penis straightened.</p>
        
        

        <ul>
            <li><strong>Distal (Anterior) Variants – Occurs in approximately 70% of cases:</strong>
                <ul>
                    <li>**Glanular:** Located entirely within the glans, failing to reach the tip.</li>
                    <li>**Coronal:** Positioned directly at the junction of the glans and the penile shaft.</li>
                    <li>**Sub-coronal:** Located just proximal to the coronal sulcus along the distal shaft.</li>
                    <li>*Clinical Insight:* These variants present minimal functional impairment; surgery is primarily indicated to normalize stream direction and improve cosmetic appearance.</li>
                </ul>
            </li>
            <li><strong>Intermediate (Middle) Variants:</strong>
                <ul>
                    <li>**Distal Penile / Midshaft / Proximal Penile:** The meatus terminates along the mobile anterior shaft of the penis.</li>
                </ul>
            </li>
            <li><strong>Proximal (Posterior) Variants – Severe Presentation:</strong>
                <ul>
                    <li>**Penoscrotal / Scrotal / Perineal:** The meatus is located near or behind the scrotum. The scrotum may appear split or bifid, and chordee is typically severe.</li>
                    <li><strong>Important Embryonal Association:</strong> Severe posterior hypospadias shows a strong association with cryptorchidism (undescended testes) and congenital inguinal hernias.</li>
                </ul>
            </li>
        </ul>

        <div class="box-red">
            <h3 style="margin-top:0; color:#b71c1c; display: block; border-bottom: none;">⛔ CRITICAL SURGICAL GUARDRAIL: Neonatal Circumcision</h3>
            <p><strong>NEVER PERFORM A ROUTINE CIRCUMCISION on an infant presenting with any degree of hypospadias.</strong></p>
            <p>The tissue of the vascularized dorsal hood prepuce is considered **"Gold Dust"** by reconstructive surgeons. It provides the primary tissue reservoir used as local vascularized flaps or grafts (**Byers Flaps**) needed to rebuild the missing urethra and provide adequate ventral skin coverage during later reconstruction.</p>
        </div>

        <h2>3. Optimal Surgical Timing &amp; Preoperative Optimization</h2>
        <ul>
            <li><strong>Ideal Surgical Window:</strong> Between <span class="highlight">6 and 18 months</span> of age.</li>
            <li><strong>Clinical Rationale:</strong>
                <ul>
                    <li>*Anatomical Growth:* The phallus has developed sufficient size to allow microvascular dissection. In micro-phallic presentations, a short course of **Preoperative Topical or Systemic Testosterone** may be given to temporarily increase penile size and improve vascularity.</li>
                    <li>*Psychological Advantages:* Performing surgery within this window minimizes the risk of long-term separation or castration anxiety, as it takes place before the child develops declarative memory or gender awareness.</li>
                    <li>*Functional Milestones:* Completing the repair before potty training and school entry helps avoid the social and psychological stress of abnormal voiding mechanics.</li>
                </ul>
            </li>
        </ul>

        <h2>4. Structural Principles of Surgical Reconstruction</h2>
        <p>Reconstructive surgery aims to achieve a straight penis during erection, a uniform neo-urethra that avoids strictures or leaks, a normal-appearing slit-like meatus at the apex of the glans, and a flat ventral skin cover that allows standing voiding.</p>

        

        <ol>
            <li><strong>Orthoplasty (Release of Chordee):</strong> All restricting ventral fibrous tissue bands are dissected away to straighten the phallus. 
                <br><em>Intraoperative Verification:</em> Confirmed using the **Gittes Test**. A soft tourniquet is placed around the base of the penis, and sterile normal saline is injected directly into the corpora cavernosa using a fine-gauge needle. This induces an **artificial erection**, allowing the surgeon to visually confirm that the phallus is completely straight.</li>
            <li><strong>Urethroplasty (Neo-Urethral Construction):</strong>
                <ul>
                    <li><strong>TIP (Tubularized Incised Plate) / Snodgrass Repair:</strong> The international gold standard for distal and midshaft repairs. The surgeon creates a longitudinal incision down the midline of the existing urethral plate. This opens up the tissue plate, allowing it to be rolled over a stent and tubularized into a wide neo-urethra.</li>
                    <li><strong>MAGPI (Meatal Advancement and Glanduloplasty):</strong> Used only for minor, non-chordee glanular variants; advances the meatus to the apex using simple tissue redirection.</li>
                    <li><strong>Onlay Island Flap (Duckett Technique):</strong> Reserved for severe proximal presentations. A vascularized island patch of inner preputial tissue is harvested from the dorsal hood, rotated ventrally, and sutured onto the remaining plate to reconstruct the long urethral defect.</li>
                </ul>
            </li>
            <li><strong>Meatoplasty &amp; Glanuloplasty:</strong> The newly formed urethral opening is reshaped into a vertical slit at the tip of the penis, and the structural wings of the glans are wrapped around it to restore a normal look.</li>
            <li><strong>Ventral Skin Coverage:</strong> The dorsal hood tissue is split down the midline (**Byers Flaps**), rotated ventrally around both sides of the shaft, and closed to provide comprehensive skin coverage over the new urethra.</li>
        </ol>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What specific diagnostic and chromosomal evaluations are mandatory if an infant presents with severe proximal hypospadias combined with unilateral or bilateral cryptorchidism?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> The combination of severe proximal (scrotal/perineal) hypospadias and undescended testes indicates a potential **Disorder of Sex Development (DSD)** or an intersex condition until proven otherwise. The patient must undergo **urgent genetic karyotyping** and a rapid screen for **Congenital Adrenal Hyperplasia (CAH)** via serum 17-hydroxyprogesterone levels. CAH can cause life-threatening salt-wasting crises due to aldosterone and cortisol deficiencies. Groin ultrasound or MRI should also be performed to assess for internal müllerian structures.</p>
                </div>
            </details>
        </div>

        <h2>5. Postoperative Complications</h2>
        <ul>
            <li><strong>Urethrocutaneous Fistula:</strong> The <span class="highlight">most common</span> complication of hypospadias surgery, occurring in 5–15% of cases depending on the severity of the anomaly. It presents as an abnormal tract that leaks urine along the ventral shaft during voiding, caused by localized ischemia or subclinical breakdown of the suture line. Repair requires waiting 6 months to allow tissue inflammation to completely resolve.</li>
            <li><strong>Meatal Stenosis and Urethral Stricture:</strong> Scarring and narrowing at the new opening or along the neo-urethral tube, resulting in a high-pressure, thin, straining urinary stream. This is typically managed with careful calibration or direct surgical meatoplasty.</li>
            <li><strong>Urethral Diverticulum:</strong> A localized outpouching or ballooning of the newly reconstructed urethra. It occurs when there is lack of supportive tissue coverage or distal resistance from a stenotic meatus, causing urine to pool and drip after voiding.</li>
        </ul>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Synthesize embryonic lines, micro-surgical tissue transfers, and metabolic risk profiles to evaluate these clinical scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>During a Snodgrass (TIP) repair, why does making a deep longitudinal midline incision along the urethral plate not cause severe bleeding or damage the erection chambers?</li>
                <li>What is the purpose of harvesting a dartos fascial barrier flap (or a tunica vaginalis flap) to cover a newly reconstructed neo-urethra?</li>
                <li>How do you distinguish between "true chordee" caused by structural tissue defects and "cutaneous chordee" during an operative evaluation?</li>
                <li>Why is the use of non-absorbable silk or braided synthetic sutures strictly contraindicated for suturing the neo-urethra during a urethroplasty?</li>
                <li>A 12-month-old child with a perineal hypospadias demonstrates a 46,XX karyotype on genetic analysis. What is the underlying condition, and what metabolic crisis must the medical team monitor for?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>The urethral plate lies within the ventral midline groove between the two corpora cavernosa. This midline zone is **largely avascular and fibrous**, lacking major deep terminal vessels or erectile sinusoids. Incising the plate along the exact midline provides the needed tissue mobility for tubularization without disrupting the blood supply or violating the tunica albuginea of the adjacent erectile bodies.</li>
                        <li>An intermediate dartos or tunica vaginalis tissue layer provides a **vascularized barrier covering the neo-urethral suture lines**. This layer ensures that the skin closure line does not sit directly over the urethral closure line. This separation significantly lowers the risk of subclinical tissue breakdown and limits the formation of a **urethrocutaneous fistula**.</li>
                        <li>Cutaneous chordee is caused simply by restrictions in the superficial skin layers and dartos fascia. It is completely resolved once the ventral skin is degloved down to the base of the penis. If the phallus remains bent during a saline injection test after complete degloving, **true chordee** is present. This indicates deep structural restrictions within the urethral plate itself or an asymmetry in the corpora cavernosa.</li>
                        <li>Sutures exposed to the urinary tract must be absorbable. Non-absorbable or braided filaments can act as a permanent foreign body nidus. This promotes chronic local inflammation, tissue tracking, and the **precipitation of urinary salts, leading to urethral stone formation and recurrent strictures**. Monofilament absorbable sutures (like PDS or Monocryl) are preferred.</li>
                        <li>This finding indicates **Congenital Adrenal Hyperplasia (CAH)** presenting as severe virilization in a genetic female. The clinician must check for a potential **adrenal salt-wasting crisis**. This can cause life-threatening hyponatremia, hyperkalemia, dehydration, and cardiovascular collapse due to the lack of mineralocorticoid production. Emergency management requires immediate intravenous hydration and hydrocortisone/fludrocortisone replacement.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"periurethral-abscess": {
    title: "Periurethral Abscess",
    videoUrl: "coming-soon",
    duration: "25 mins",
    notes: `
      <style>
        @media print {
            .abscess-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .abscess-notes details { display: block; }
            .abscess-notes details[open] summary ~ * { animation: none; }
        }
        .abscess-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .abscess-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .abscess-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .abscess-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .abscess-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .abscess-notes .box-red { background-color: #ffebee; border: 2px solid #c62828; padding: 20px; border-radius: 8px; margin: 25px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .abscess-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .abscess-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .abscess-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .abscess-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .abscess-notes ul, .abscess-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .abscess-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="abscess-notes">
        <h1>Periurethral Abscess</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Urology &amp; Pelvic Reconstruction: Fascial Boundary Extravasation, Suppurative Littritis, and Strategic Urinary Diversion
        </p>

        <h2>1. Definition &amp; Pathophysiologic Mechanics</h2>
        <p>A <strong>Periurethral Abscess</strong> is an acute localized collection of pus within the deep urogenital tissues surrounding the urethra—specifically involving the corpus spongiosum and bounded by regional fascial networks. It typically originates as an infection of the periurethral glands (**Glands of Littre**) or from micro-perforation and subsequent extravasation of infected urine through compromised urethral mucosa.</p>

        <h2>2. Etiology &amp; Pathogenesis</h2>
        <ul>
            <li><strong>Urethral Stricture Disease (Most Common):</strong> Chronic downstream lumen narrowing creates a high-pressure zone proximal to the stricture during micturition. This chronic hydraulic tension causes localized mucosal ischemic necrosis, leading to micro-perforation, urinary extravasation into the periurethral space, secondary bacterial invasion, and abscess formation.</li>
            <li><strong>Suppurative Neisserian Infection (STI):</strong> Acute *Neisseria gonorrhoeae* or *Chlamydia trachomatis* urethritis can manifest as profound inflammation of the Glands of Littre (**Littritis**), leading to glandular occlusion, tissue breakdown, and abscess development.</li>
            <li><strong>Mechanical &amp; Iatrogenic Trauma:</strong> Direct mucosal injury from forceful urethral catheterization, improper instrumentation (such as urethral sounding), or retained indwelling foreign bodies introduces pathogens directly into the periurethral space.</li>
            <li><strong>Non-Specific Bacterial Invasion:</strong> Infections caused by mixed enteric opportunistic pathogens, primarily *Escherichia coli*, *Klebsiella pneumoniae*, *Pseudomonas aeruginosa*, and various anaerobes.</li>
        </ul>

        <h2>3. Clinical Presentation &amp; Diagnostic Markers</h2>
        <ul>
            <li><strong>Systemic Manifestations:</strong> High-grade spiking fevers, chills, rigors, tachycardia, and progressive leukocytosis indicating systemic inflammatory response syndrome (SIRS) or sepsis.</li>
            <li><strong>Local Symptomatology:</strong> Severe, throbbing perineal, scrotal, or penile pain; intense dysuria; straining to urinate; or acute urinary retention due to mechanical compression of the urethral lumen by the mass.</li>
            <li><strong>Objective Physical Findings:</strong>
                <ul>
                    <li>A highly tender, firm, or fluctuant indurated mass felt along the path of the anterior urethra (most commonly at the bulbar urethra, perineum, or penoscrotal junction).</li>
                    <li>Overlying perineal or scrotal skin is hot, erythematous, and edematous.</li>
                </ul>
            </li>
        </ul>

        

        <h3>Progressive and Neglected Complications</h3>
        <ol>
            <li><strong>Watering Can Perineum (Chronic Fistulization):</strong> If left untreated, the high-pressure abscess breaks through the overlying skin at multiple points across the perineum and scrotum. This creates permanent, epithelized **urethrocutaneous fistulae**. During voiding, urine exits through these multiple perineal openings, resembling the spray of a watering can.</li>
            <li><strong>Fournier's Gangrene:</strong> A life-threatening, rapidly progressing **necrotizing fasciitis** of the perineum, scrotum, and genitalia. If the infection breaks through regional fascial barriers, synergistic polymicrobial aerobes and anaerobes travel along fascial planes, causing endarteritis obliterans, subcutaneous vascular thrombosis, and widespread tissue gangrene.</li>
        </ol>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What specific fascial boundaries dictate and contain the spread of an uncorrected periurethral abscess originating in the anterior bulbar urethra?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> The infection is initially contained by **Buck’s Fascia** (deep fascia of the penis). If the abscess expands and ruptures through Buck's fascia, the extravasated fluid and pus enter the superficial perineal pouch. Here, the spread is guided by **Colles' Fascia** (superficial perineal fascia). Colles' fascia attaches posteriorly to the triangular ligament (urogenital diaphragm) and laterally to the fascia lata of the thighs. This directs the infection **superiorly into the scrotum, around the penile shaft, and upward into the anterior abdominal wall beneath Scarpa's fascia**, while completely sparing the thighs.</p>
                </div>
            </details>
        </div>

        <h2>4. Management Principles &amp; Surgical Strategies</h2>
        <p>Definitive management requires an immediate three-part approach: broad-spectrum antimicrobial therapy, timely surgical decompression, and complete urinary diversion away from the affected area.</p>

        <h3>A. Targeted Medical Optimization</h3>
        <ul>
            <li>**Empiric Intravenous Antibiotics:** Immediate administration of broad-spectrum antibiotics covering Gram-negative enterics, Gram-positive cocci, and anaerobic organisms. A typical regimen includes a third-generation cephalosporin (e.g., Ceftriaxone) or piperacillin-tazobactam, combined with metronidazole and an aminoglycoside (e.g., Gentamicin).</li>
        </ul>

        <h3>B. Urgent Surgical Decompression (Incision &amp; Drainage)</h3>
        
        <div class="box-red">
            <h3 style="margin-top:0; color:#b71c1c; display: block; border-bottom: none;">⚠️ CRITICAL OPERATIVE GUARDRAIL: Incision Placement</h3>
            <p><strong>NEVER make a midline longitudinal incision directly over the urethral axis when draining a periurethral abscess.</strong></p>
            <ul>
                <li>All drainage incisions must be placed **parallel and lateral to the perineal midline**.</li>
                <li>*Anatomical Rationale:* A midline incision cuts through the compromised, inflamed corpus spongiosum and directly violates the urethral wall. This results in a large, non-healing **urethrocutaneous fistula** that is exceptionally difficult to close due to poor tissue quality and surrounding scar tissue.</li>
            </ul>
        </div>

        <ul>
            <li>**Operative Execution:** A lateral incision is made over the point of maximal fluctuation. All internal loculations are gently broken down using a blunt clamp, the cavity is thoroughly irrigated with sterile saline, and a soft, non-collapsible drain (such as a Penrose or corrugated drain) is left in place.</li>
        </ul>

        <h3>C. Proximal Urinary Diversion</h3>
        <ul>
            <li><strong>Suprapubic Cystostomy (SPC) – The Preferred Method:</strong>
                <ul>
                    <li>*Urethral Rest:* Completely diverts the urinary stream away from the active infection, placing the urethra at complete rest to limit urine extravasation and optimize tissue healing.</li>
                    <li>*Avoiding Secondary Trauma:* Eliminates the risk of creating a false passage, worsening stricture disease, or inducing bacteremia/septic shock, which can occur when trying to pass a transurethral Foley catheter through an actively inflamed, occluded, or strictured lumen.</li>
                </ul>
            </li>
            <li>**Transurethral Catheterization:** Strictly avoided during the acute inflammatory phase of a periurethral abscess.</li>
        </ul>

        <h3>D. Definitive Etiological Resolution</h3>
        <ul>
            <li>Once the acute infection and inflammation have fully resolved (typically 6 to 12 weeks post-drainage), the patient must undergo a **Retrograde Urethrogram (RGU) and Voiding Cystourethrogram (VCUG)** to evaluate the underlying stricture architecture. After mapping the stricture, a formal elective **Urethroplasty** (such as an excision and primary anastomosis or a buccal mucosa graft repair) is planned.</li>
        </ul>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Synthesize micro-anatomical planes, fascial vectors, and reconstructive steps to evaluate these clinical scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>Explain why a periurethral abscess located proximal to the urogenital diaphragm presents differently in terms of physical findings compared to one located distally in the bulbous urethra.</li>
                <li>A patient with an unrecognized periurethral abscess presents with crepitus and dark, desquamated skin patches across the scrotum. What is the diagnosis, and what are the immediate surgical steps?</li>
                <li>Why does the urine stream spray in multiple directions in a patient presenting with a classic "watering can perineum"?</li>
                <li>What role do the Glands of Littre play in the normal physiology of the anterior urethra, and where are they most densely clustered?</li>
                <li>If an open lateral perineal incision fails to resolve a periurethral abscess completely, and a post-operative RGU demonstrates a large segment of necrotic urethral wall, how is this complex tissue defect managed?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>An abscess proximal to the urogenital diaphragm (posterior urethra) is contained within the pelvic cavity, pointing toward the levator ani and pelvic spaces. It presents with deep pelvic pain, rectal pressure, and urinary retention, but **lacks a palpable external perineal mass**. Conversely, an abscess distal to the urogenital diaphragm (anterior urethra) is contained within the superficial perineal pouch, presenting as a highly visible, palpable, fluctuant **perineal or penoscrotal swelling**.</li>
                        <li>This presentation indicates a progression into **Fournier's Gangrene** (necrotizing fasciitis). Treatment requires immediate, aggressive **radical surgical debridement of all necrotic fascia and subcutaneous tissue** until healthy, bleeding margins are reached. This must be accompanied by broad-spectrum empiric IV antibiotics (such as Meropenem + Vancomycin + Clindamycin to inhibit toxin production) and a suprapubic cystostomy for urinary diversion.</li>
                        <li>The condition results from a chronic, untreated abscess that has ruptured through the skin via **multiple independent fistulous tracts**. Because these tracts directly connect the urethral lumen to various exit points on the perineal and scrotal skin, the hydraulic force generated during bladder contraction pushes urine through all these low-resistance openings simultaneously, creating a scattered, spray-like pattern.</li>
                        <li>The Glands of Littre are mucus-secreting exocrine glands located within the lamina propria of the anterior urethra. They produce an alkaline mucus secretion that protects the urethral epithelium from the acidic and abrasive properties of passing urine, while also aiding in semen transport. They are most densely concentrated along the **dorsal aspect of the cavernous and bulbar segments of the anterior urethra**.</li>
                        <li>This scenario requires a staged reconstructive approach. The immediate goal is to establish adequate drainage and maintain complete urinary diversion via a suprapubic tube. Once the infection has cleared and the tissue beds are healthy, the large, necrotic urethral gap cannot be repaired primarily. It requires a **staged substitution urethroplasty**, typically using a harvested **buccal mucosa graft (BMG)** or a vascularized preputial skin flap to reconstruct a functional, non-strictured urethral channel.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"wilms-tumor": {
    title: "Wilms Tumor (Nephroblastoma)",
    videoUrl: "coming-soon",
    duration: "28 mins",
    notes: `
      <style>
        @media print {
            .wilms-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .wilms-notes details { display: block; }
            .wilms-notes details[open] summary ~ * { animation: none; }
        }
        .wilms-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .wilms-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .wilms-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .wilms-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .wilms-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .wilms-notes .box-red { background-color: #ffebee; border: 2px solid #c62828; padding: 20px; border-radius: 8px; margin: 25px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .wilms-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .wilms-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .wilms-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .wilms-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .wilms-notes ul, .wilms-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .wilms-notes li { margin-bottom: 0.5rem; }
        .wilms-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 3px rgba(0,0,0,0.05); }
        .wilms-notes th, .wilms-notes td { border: 1px solid #ddd; padding: 12px; text-align: left; vertical-align: top; }
        .wilms-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; letter-spacing: 0.5px; }
        .wilms-notes tr:nth-child(even) { background-color: #f9f9f9; }
      </style>

      <div class="wilms-notes">
        <h1>Wilms Tumor (Nephroblastoma)</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Pediatric Oncology: Metanephric Blastema Oncogenesis, Syndromic Dysmorphology, and Multi-institutional Therapeutic Protocols
        </p>

        <h2>1. Introduction &amp; Molecular Genetics</h2>
        <p><strong>Wilms Tumor (Nephroblastoma)</strong> is an embryonal malignant renal neoplasm that serves as the classic model of abnormal organogenesis interlinked with oncogenesis. It arises from the malignant transformation of residual embryonic renal tissue, specifically the <strong>metanephric blastema</strong>, which fails to differentiate properly into normal renal glomeruli and tubules.</p>
        
        <p>Characterized histologically by a classic **triphasic** pattern comprising blastemal, epithelial, and stromal elements, its development is strongly tied to genetic mutations on the short arm of chromosome 11:</p>

        <ul>
            <li><strong>WT1 Gene (Locus 11p13):</strong> A zinc-finger transcription factor vital for normal genitourinary development. Mutations disrupt differentiation and are highly associated with genitourinary anomalies.</li>
            <li><strong>WT2 Gene (Locus 11p15.5):</strong> Implicated in genomic imprinting; alterations often cause cellular overgrowth phenotypes.</li>
        </ul>

        <h3>High-Yield Syndromic Associations</h3>
        <ul>
            <li><strong>WAGR Syndrome:</strong> A contiguous gene deletion syndrome at 11p13 presenting with **W**ilms tumor, **A**niridia (absence of the iris), **G**enitourinary anomalies (e.g., cryptorchidism, hypospadias), and mental **R**etardation.</li>
            <li><strong>Beckwith-Wiedemann Syndrome (BWS):</strong> An overgrowth syndrome linked to alterations at 11p15.5. Features include **macroglossia, gigantism/hemihypertrophy, omphalocele, and visceromegaly**. These patients require routine serial renal ultrasound screening due to a high risk of embryonal tumors.</li>
            <li><strong>Denys-Drash Syndrome (DDS):</strong> Driven by point mutations in the WT1 gene, presenting with a clinical triad of **early-onset diffuse mesangial sclerosis (leading to childhood ESRD), XY male pseudohermaphroditism/gonadal dysgenesis**, and a >90% lifetime risk of Wilms tumor.</li>
        </ul>

        <h2>2. Clinical Presentation &amp; Hemodynamic Signatures</h2>
        <p>The tumor peaks in incidence between <strong>3 and 4 years of age</strong>, and is rarely identified beyond the age of 7.</p>
        
        <ul>
            <li><strong>Asymptomatic Abdominal Mass:</strong> Discovered incidentally in over 80% of cases by parents or caregivers during routine bathing or dressing. The mass is typically **smooth, firm, lobulated, and restricted to one flank; it does not cross the midline**.</li>
            <li><strong>Hematuria:</strong> Identified in ~20% of patients due to tumor invasion through the renal pelvis mucosa into the collecting system.</li>
            <li><strong>Secondary Hypertension:</strong> Found in 25–60% of patients. Driven by hypersecretion of **renin** from the tumor cells themselves or by local arterial compression causing ischemia and activating the systemic RAAS pathway.</li>
        </ul>

        <div class="box-red">
            <h3 style="margin-top:0; color:#b71c1c; display: block; border-bottom: none;">⛔ CRITICAL OPERATIVE GUARDRAIL: Pre-operative Palpation</h3>
            <p><strong>Vigorous, deep, or repeated abdominal palpation of a suspected Wilms tumor by clinicians must be strictly avoided.</strong></p>
            <p>The tumor is enclosed by a thin, fragile capsule. Forceful manipulation can result in **subcapsular rupture or free intraperitoneal spillage** of viable malignant cells. This capsule breach instantly upstages the patient to **Stage III disease**, necessitating abdominal radiation and aggressive triple-agent chemotherapy, worsening the prognosis.</p>
        </div>

        <h2>3. Differential Diagnosis: Wilms Tumor vs. Neuroblastoma</h2>
        <p>Distinguishing between these two conditions is a classic clinical dilemma when assessing a large pediatric abdominal mass.</p>

        <table>
            <thead>
                <tr>
                    <th>Diagnostic Feature</th>
                    <th>Wilms Tumor (Nephroblastoma)</th>
                    <th>Neuroblastoma</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Anatomical Origin</strong></td>
                    <td>Intra-renal parenchyma (Metanephric blastema)</td>
                    <td>Extra-renal (Adrenal medulla or paraspinal sympathetic chain)</td>
                </tr>
                <tr>
                    <td><strong>Physical Inspection</strong></td>
                    <td>Smooth, uniform, stable flank mass; **Does NOT cross the midline**</td>
                    <td>Hard, irregular, nodular mass; **Frequently crosses the midline**</td>
                </tr>
                <tr>
                    <td><strong>Calcification (Imaging)</strong></td>
                    <td>Rare (~10% on CT), faint and amorphous</td>
                    <td>**Highly common (~90%)**, dense and stippled/granular</td>
                </tr>
                <tr>
                    <td><strong>Metastatic Tropism</strong></td>
                    <td>Predominantly hematogenous to the **Lungs** ("cannonball" opacities)</td>
                    <td>Hematogenous to **Cortical Bone, Skull/Orbit**, and Bone Marrow</td>
                </tr>
                <tr>
                    <td><strong>Excretory Urography (IVU)</strong></td>
                    <td>Intrinsic destruction and distortion of the renal calyces</td>
                    <td>Extrinsic downward/outward displacement of an intact kidney (**"Drooping Lily"** appearance)</td>
                </tr>
                <tr>
                    <td><strong>Biochemical Markers</strong></td>
                    <td>None specific; elevated plasma renin occasionally observed</td>
                    <td>**Elevated urinary catecholamine metabolites (VMA and HVA)**</td>
                </tr>
            </tbody>
        </table>

        <h2>4. Surgical-Pathological Staging (NWTS / COG System)</h2>
        <p>Staging is fundamentally **surgical-pathological**, determined by surgical findings and margin analysis after upfront tumor resection.</p>

        

        <ul>
            <li><strong>Stage I:</strong> Tumor is limited entirely to the kidney parenchyma and has been **completely excised**. The renal capsule remains structurally intact without pre-operative or intra-operative rupture.</li>
            <li><strong>Stage II:</strong> Tumor extends beyond the renal capsule into the perirenal soft tissues or exhibits vascular infiltration (e.g., renal vein involvement), but has been **completely excised** with negative margins.</li>
            <li><strong>Stage III:</strong> Residual non-hematogenous tumor remains confined to the abdomen post-resection. Criteria include:
                <ul>
                    <li>Positive regional lymph nodes within the abdomen or pelvis.</li>
                    <li>**Pre-operative or intra-operative tumor rupture** with peritoneal spill.</li>
                    <li>Tumor transection or positive surgical margins.</li>
                    <li>Prior diagnostic open or percutaneous biopsy performed before definitive surgical resection.</li>
                </ul>
            </li>
            <li><strong>Stage IV:</strong> Distant hematogenous macrometastases are present, most frequently involving the **lungs**, followed by liver, bone, or brain.</li>
            <li><strong>Stage V:</strong> **Bilateral synchronous renal involvement** by Wilms tumor at the time of initial clinical presentation.</li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What anatomical sign on a contrast-enhanced CT scan helps confirm the intra-renal origin of a tumor?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> The **"Claw Sign"** (or sharp-margin parenchymal rim sign). This radiological sign occurs when a rim of normal, enhanced renal parenchyma wraps sharply around the periphery of a large, expanding intra-renal tumor mass, confirming that the tumor originated from within the kidney tissue rather than compressing it from the outside.</p>
                </div>
            </details>
        </div>

        <h2>5. Multimodal Management &amp; Treatment Frameworks</h2>
        <p>Modern management emphasizes a highly integrated, multimodal approach incorporating surgery, systemic chemotherapy, and targeted radiation therapy.</p>

        <h3>A. Diagnostic Workup</h3>
        <ul>
            <li><strong>Contrast-Enhanced CT (CECT) of the Abdomen and Pelvis:</strong> The primary imaging study. It shows a large, heterogeneous, low-attenuation intra-renal mass that distorts the renal architecture and confirms the presence of the classic "Claw Sign."</li>
            <li><strong>Chest CT / High-Resolution Chest X-ray:</strong> Essential to evaluate for pulmonary macrometastases ("cannonball" lesions).</li>
            <li><strong>Color Doppler Ultrasonography:</strong> Critical to assess the patency of the renal vein and Inferior Vena Cava (IVC) to rule out an intraluminal tumor thrombus before surgery.</li>
        </ul>

        <h3>B. Multi-Institutional Protocols: COG vs. SIOP</h3>
        <p>Two distinct management philosophies govern global pediatric oncology:</p>
        <ul>
            <li><strong>Children’s Oncology Group (COG / NWTS - North America):</strong> Advocates for **upfront radical nephrectomy without prior biopsy** for unilateral resectable lesions, followed by stage-tailored chemotherapy. This approach ensures precise, unaltered initial histopathological classification and avoids therapeutic under-staging.</li>
            <li><strong>Société Internationale d’Oncologie Pédiatrique (SIOP - Europe):</strong> Advocates for empiric **pre-operative neoadjuvant chemotherapy** (Vincristine + Actinomycin D) without initial biopsy. This shrinks the tumor and solidifies the capsule, significantly reducing the risk of intra-operative rupture and down-staging the tumor before resection.</li>
            <li><em>Standard Exam Paradigm:</em> Upfront radical nephrectomy is typically considered the standard answer unless dealing with bilateral tumors (Stage V) or an unresectable horse-shoe kidney variant.</li>
        </ul>

        <h3>C. Surgical Strategy: Radical Nephrectomy</h3>
        <ul>
            <li><strong>Surgical Access:</strong> Performed via a wide, transperitoneal trans-abdominal approach (such as a large subcostal or transverse incision) to optimize exposure and minimize tumor manipulation.</li>
            <li><strong>Resection Boundaries:</strong> En-bloc removal of the affected kidney, surrounding perinephric fat, intact renal capsule, homolateral adrenal gland, and the ureter down to the level of the bladder basin.</li>
            <li><strong>Mandatory Operative Step:</strong> Visual inspection and manual palpation of the **contralateral (opposite) kidney** must be performed intra-operatively after opening Gerota’s fascia to rule out occult synchronous Stage V disease before removing the primary organ.</li>
        </ul>

        <h3>D. Adjuvant Chemotherapeutic Regimens</h3>
        <ul>
            <li>**Favorable Histology (Stages I &amp; II):** Managed with the double-agent **"VA" regimen** (Vincristine + Actinomycin D) for 18–24 weeks.</li>
            <li>**Favorable Histology (Stages III &amp; IV):** Requires triple-agent therapy by adding **Doxorubicin** (Adriamycin), along with concurrent **flank or whole-lung radiation therapy**.</li>
            <li><em>Prognostic Outlook:</em> Excellent. Children with favorable histology Stage I or II disease achieve long-term disease-free survival and cure rates exceeding 90%.</li>
        </ul>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Synthesize histopathological profiles, genetic markers, and operative steps to answer these scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>What is the significance of "anaplasia" when evaluating a Wilms tumor biopsy, and how does it alter management?</li>
                <li>How do you surgically approach a patient presenting with synchronous bilateral Wilms tumor (Stage V) at diagnosis?</li>
                <li>A 3-year-old child presents with a large left flank mass, periorbital ecchymosis ("raccoon eyes"), and opsoclonus-myoclonus syndrome. Which tumor is most likely?</li>
                <li>What genetic mechanism links Beckwith-Wiedemann syndrome to cellular overgrowth, and what specific molecular pathway is altered?</li>
                <li>If a color Doppler ultrasound reveals a Wilms tumor thrombus extending into the suprahepatic IVC, how does this alter the surgical plan?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>Anaplasia (defined by marked nuclear enlargement, hyperchromasia, and multipolar mitotic figures) is the primary marker of **unfavorable histology**. It indicates resistance to standard chemotherapy agents and carries a significantly worse prognosis. Its presence shifts treatment toward aggressive, high-dose multi-agent salvage chemo regimens and early, comprehensive radiation therapy.</li>
                        <li>Stage V disease requires a **nephron-sparing strategy**. Upfront radical surgery is contraindicated. Patients receive initial neoadjuvant chemotherapy according to SIOP guidelines to reduce tumor volume in both kidneys. This is followed by bilateral **partial nephrectomies or wedge resections** to clear the malignant tissue while preserving maximum residual functional renal parenchyma, avoiding immediate lifelong dialysis.</li>
                        <li>This presentation points directly to a metastatic **Neuroblastoma**. Periorbital ecchymosis ("raccoon eyes") results from retro-orbital tumor metastasis, and opsoclonus-myoclonus ("dancing eyes, dancing feet") is a classic paraneoplastic syndrome characteristic of neuroblastoma, which is not seen with a Wilms tumor.</li>
                        <li>BWS is driven by mutations or epigenetic alterations on chromosome 11p15.5 involving **genomic imprinting**. This leads to the abnormal overexpression of the paternal **IGF-2 (Insulin-like Growth Factor 2) gene**, a potent cellular growth factor, combined with the loss of maternal tumor suppressor genes (like H19), causing generalized somatic overgrowth and organomegaly.</li>
                        <li>An IVC tumor thrombus does not make the condition unresectable, but it requires careful preparation for an **en-bloc cavotomy**. Following proximal and distal vascular isolation of the IVC, the vena cava is opened, the thrombus is extracted, and the vessel wall is repaired. In advanced cases extending above the diaphragm, a coordinated effort with a cardiothoracic surgeon using cardiopulmonary bypass may be necessary to prevent fatal intra-operative tumor pulmonary embolization.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"hematuria": {
    title: "Hematuria: Clinical Approach & Management",
    videoUrl: "coming-soon",
    duration: "30 mins",
    notes: `
      <style>
        @media print {
            .hematuria-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .hematuria-notes details { display: block; }
            .hematuria-notes details[open] summary ~ * { animation: none; }
        }
        .hematuria-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .hematuria-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .hematuria-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .hematuria-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .hematuria-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .hematuria-notes .box-red { background-color: #ffebee; border: 2px solid #c62828; padding: 20px; border-radius: 8px; margin: 25px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .hematuria-notes .box-algo { background-color: #e8f5e9; border: 2px solid #2e7d32; padding: 20px; border-radius: 8px; margin: 25px 0; font-size: 1.05em; }
        .hematuria-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .hematuria-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .hematuria-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .hematuria-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .hematuria-notes ul, .hematuria-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .hematuria-notes li { margin-bottom: 0.5rem; }
        .hematuria-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 3px rgba(0,0,0,0.05); }
        .hematuria-notes th, .hematuria-notes td { border: 1px solid #ddd; padding: 12px; text-align: left; vertical-align: top; }
        .hematuria-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; letter-spacing: 0.5px; }
        .hematuria-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .hematuria-notes .arrow { font-size: 1.3em; color: #2e7d32; font-weight: bold; display: block; margin: 8px 0 8px 20px; }
      </style>

      <div class="hematuria-notes">
        <h1>Hematuria: Clinical Approach &amp; Management</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Urology &amp; Nephrology: Differential Diagnosis of Traced Erythrocyturia, Upper vs. Lower Tract Localizing Clues, and Malignancy Workups
        </p>

        <h2>1. Objective Definitions &amp; Pathophysiological Classification</h2>
        <ul>
            <li><strong>Microscopic Hematuria:</strong> Defined as the presence of <span class="highlight">$\ge 3$ Red Blood Cells (RBCs) per high-power field (hpf)</span> on microscopic evaluation of centrifuged urine from a properly collected midstream clean-catch sample. A positive chemical dipstick test must always be confirmed by microscopy, as it cannot distinguish intact erythrocytes from free hemoglobin or myoglobin.</li>
            <li><strong>Macroscopic (Gross) Hematuria:</strong> Visibly evident pink, red, or tea-colored urine indicating a significant hemorrhagic source.
                <br><em>Clinical Fact:</em> It requires as little as **1 mL of whole blood within 1 Liter of urine** to create a distinct, visible color change.</li>
            <li><strong>False (Pseudo) Hematuria:</strong> Reddish discoloration of the urine in the presence of a **negative dipstick and zero erythrocytes** on microscopy.
                <br><em>Etiology:</em> Exogenous pharmacotherapy (e.g., **Rifampicin**, Phenazopyridine), dietary pigments (anthocyanin in **beetroots**, blackberries), or metabolic pigments (free **hemoglobinuria** from hemolysis, or **myoglobinuria** from rhabdomyolysis).</li>
        </ul>

        <h2>2. Etiological Mapping: The "KUB" Structural Framework</h2>
        <p>Evaluating hematuria requires distinguishing between systemic disorders, glomerular parenchymal lesions, and structural, non-glomerular conditions along the urinary tract.</p>

        <table>
            <thead>
                <tr>
                    <th>Anatomical Level</th>
                    <th>Pathological Conditions &amp; Etiologies</th>
                    <th>Key Clinical Clues &amp; Lab Signatures</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Pre-Renal / Systemic</strong></td>
                    <td>Primary coagulopathies (Hemophilia, von Willebrand disease), systemic anticoagulation therapy (Warfarin, Heparin, DOACs), and Sickle Cell Trait/Disease (causing papillary necrosis).</td>
                    <td>Presence of multi-site systemic bleeding (petechiae, ecchymosis, epistaxis) and altered coagulation panels (PT/INR or aPTT).</td>
                </tr>
                <tr>
                    <td><strong>Renal Parenchymal</strong></td>
                    <td>
                        • <strong>Glomerular:</strong> IgA Nephropathy (Berger's disease), Post-Streptococcal Glomerulonephritis (PSGN), Alport syndrome.<br>
                        • <strong>Non-Glomerular:</strong> <span class="highlight">Renal Cell Carcinoma (RCC)</span>, Autosomal Dominant Polycystic Kidney Disease (ADPKD), acute pyelonephritis, renal infarction, or major vascular trauma.
                    </td>
                    <td>**Dysmorphic RBCs (acanthocytes)**, **RBC casts**, concurrent significant proteinuria ($>500\text{ mg/day}$), and tea- or cola-colored urine.</td>
                </tr>
                <tr>
                    <td><strong>Post-Renal / Urological</strong><br>(Ureters, Bladder, Prostate, Urethra)</td>
                    <td>
                        • <strong>Nerolithiasis:</strong> Ureteric, renal pelvic, or vesical calculi.<br>
                        • <strong>Oncology:</strong> <span class="highlight">Urothelial / Transitional Cell Carcinoma (TCC)</span> of the bladder or upper tracts, Benign Prostatic Hyperplasia (BPH), or Prostate Cancer.<br>
                        • <strong>Infectious / Inflammatory:</strong> Acute bacterial cystitis, schistosomiasis, or genitourinary tuberculosis.
                    </td>
                    <td>**Isomorphic (normal, uniform shape) RBCs**, presence of **macroscopic blood clots**, absence of cellular casts, and bright red or pink urine.</td>
                </tr>
            </tbody>
        </table>

        <h2>3. Clinical Evaluation of the Geriatric Patient</h2>
        
        <div class="box-red">
            <h3 style="margin-top:0; color:#b71c1c; display: block; border-bottom: none;">🚨 THE AXIOSTOMATIC RULE OF GERIATRIC UROLOGY</h3>
            <p><strong>Painless, gross (macroscopic) hematuria in an individual over the age of 50 is a genitourinary malignancy—specifically Transitional Cell Carcinoma (TCC) of the bladder or Renal Cell Carcinoma (RCC)—until definitively proven otherwise by dual-axis workup (imaging + cystoscopy).</strong></p>
        </div>

        <h3>A. Targeted History Taking &amp; Diagnostic Clues</h3>
        <ul>
            <li><strong>Nociceptive Alterations (Painful vs. Painless):</strong>
                <ul>
                    <li><em>Painful Hematuria:</em> Typically points toward an inflammatory, infectious, or obstructive mechanism. Sharp, radiating loin-to-groin renal colic indicates an **obstructing urinary calculus** passing down the ureter; dysuria and suprapubic pain indicate **acute bacterial cystitis**.</li>
                    <li><em>Painless Hematuria:</em> The classic presentation of a **urothelial or renal parenchymal malignancy**. The tumor bleeds intermittently as it outgrows its blood supply, meaning a cessation of bleeding does *not* rule out malignancy.</li>
                </ul>
            </li>
            <li><strong>Clot Morphology as a Localizing Tool:</strong>
                <ul>
                    <li><span class="highlight">Vermiform / Worm-like Clots:</span> Strongly indicate an **upper urinary tract origin** (renal pelvis or ureter). The blood clots within the narrow ureteral lumen, creating a structural mold of the ureter.</li>
                    <li><em>Amorphous, Large, or Irregular Clots:</em> Point toward a **lower urinary tract origin**, typically forming within the spacious bladder basin or prostatic urethra.</li>
                </ul>
            </li>
            <li><strong>Temporal Synchronization (The Three-Glass Test Paradigm):</strong>
                <ul>
                    <li><em>Initial Hematuria (Blood in the first part of the stream):</em> Suggests an **anterior urethral lesion** (e.g., urethritis, stricture, or urethral trauma). The initial stream flushes out accumulated blood.</li>
                    <li><em>Terminal Hematuria (Blood at the very end of micturition):</em> Points toward pathology in the **bladder neck, prostatic urethra, or bladder trigone**. The contraction of the bladder at the end of voiding squeezes these highly vascularized tissues.</li>
                    <li><em>Total Hematuria (Blood uniform throughout the entire stream):</em> Indicates that the bleeding source is **above the bladder neck** (bladder proper, ureters, or renal parenchyma), allowing blood to mix completely with urine within the bladder.</li>
                </ul>
            </li>
        </ul>

        <h2>4. Evidence-Based Diagnostic Workup Algorithm</h2>
        <p>When investigating non-glomerular hematuria in patients at risk for malignancy, clinicians utilize a comprehensive dual-axis approach to evaluate both the upper and lower urinary tracts.</p>

        

        <div class="box-algo">
            <strong>Step 1: Urine Routine, Microscopy, and Culture</strong>
            <br>Rule out active urinary tract infections (UTIs) using quantitative cultures. Assess for markers of glomerular parenchymal disease, including dysmorphic acanthocytes, erythrocyte cellular casts, or concurrent high-grade proteinuria.
            <span class="arrow">⬇</span>
            <strong>Step 2: Urinary Cytology Evaluation</strong>
            <br>Obtain a midstream specimen to look for exfoliated malignant urothelium. While highly specific for high-grade Transitional Cell Carcinoma (TCC) and Carcinoma in Situ (CIS), it has low sensitivity for low-grade, well-differentiated tumors.
            <span class="arrow">⬇</span>
            <strong>Step 3: Upper Tract Assessment (The "Hematuria Protocol")</strong>
            <br>Perform a multi-phase **Contrast-Enhanced CT Urography (CTU)**, the <span class="highlight">Gold Standard</span> imaging modality for evaluating the renal parenchyma and ureteral linings. It offers high sensitivity for small renal masses ($<1\text{ cm}$) and urothelial filling defects. 
            <br><em>Note:</em> Standard transabdominal ultrasound serves as an initial screen but lacks sufficient sensitivity to rule out small tumors or upper-tract urothelial lesions.
            <span class="arrow">⬇</span>
            <strong>Step 4: Lower Tract Endoscopy (Mandatory Axis)</strong>
            <br>Perform a **Flexible or Rigid Outpatient Cystoscopy**, the definitive <span class="highlight">Gold Standard</span> for evaluating the bladder cavity. 
            <br><em>Critical Rule:</em> Because multi-phase CTU cannot reliably detect flat urothelial lesions like Carcinoma in Situ (CIS) or small papillomas, **a direct visual cystoscopy is mandatory for any high-risk patient presenting with painless hematuria, even if all cross-sectional imaging is normal.**
        </div>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What specific morphological feature defines an "Acanthocyte" on phase-contrast urine microscopy, and why does it form?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> An acanthocyte is a dysmorphic erythrocyte characterized by a ring-like shape with **distinct, vesicle-like membrane protrusions or blebs** ("mickey mouse ears"). It forms when an RBC is forced through the tight mechanical fenestrations of an injured glomerular basement membrane, and is then exposed to the high osmotic gradients and changing pH profiles within the renal tubular lumens. Finding acanthocytes confirms a **glomerular parenchymal origin** for the bleeding.</p>
                </div>
            </details>
        </div>

        <h2>5. Emergency Stabilization &amp; Management Principles</h2>
        <ul>
            <li><strong>Etiology-Specific Interventions:</strong>
                <ul>
                    <li><em>Infectious Cystitis / Pyelonephritis:</em> Target with pathogen-directed antimicrobial therapy based on culture results.</li>
                    <li><em>Obstructing Nephrolithiasis:</em> Manage with decompressive endourology, such as Retrograde Ureteroscopy (URS) or Extracorporeal Shockwave Lithotripsy (ESWL).</li>
                    <li><em>Bladder Urothelial Carcinoma:</em> Perform a diagnostic and therapeutic **Transurethral Resection of Bladder Tumor (TURBT)**.</li>
                    <li><em>Renal Cell Carcinoma:</em> Surgical management via a partial or radical nephrectomy.</li>
                </ul>
            </li>
            <li><strong>Intractable Hematuria &amp; Acute Clot Retention (Urological Emergency):</strong>
                <ul>
                    <li>**Mechanical Bladder Decompression:** Immediately insert a large-bore **3-way Foley catheter** (typically 22 Fr to 24 Fr) to perform manual clot evacuation using a Toomey or Ellik evacuator.</li>
                    <li>**Continuous Bladder Irrigation (CBI):** Initiate high-volume continuous irrigation with sterile 0.9% Normal Saline to flush the bladder cavity, prevent further fibrin clot polymerization, and protect against urinary tract obstruction.</li>
                    <li>**Hemostatic Refractory Intervention:** If active bleeding continues despite irrigation, request an urgent interventional radiology consultation for **selective angiographic embolization** of the internal iliac or vesical arterial branches. Alternatively, perform emergency cystoscopic loop electro-coagulation in the operating room.</li>
                </ul>
            </li>
        </ul>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Synthesize hydrodynamics, anatomical relationships, and oncology workflows to analyze these clinical scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>Why is an active, gross hematuria event considered the ideal time to perform a diagnostic flexible cystoscopy when looking for a suspected upper-tract urothelial tumor?</li>
                <li>A 68-year-old heavy smoker presents with painless gross hematuria and a left-sided varicocele that does not decompress when the patient lies supine. What specific condition must be ruled out, and what is the underlying anatomical mechanism?</li>
                <li>How can you clinically differentiate between hemoglobinuria and myoglobinuria in a patient presenting with red, dipstick-positive urine but zero RBCs on microscopy?</li>
                <li>An elderly patient with chronic kidney disease (CKD Stage G4) presents with new-onset painless gross hematuria. Why can you not order a standard CT Urography protocol, and what alternative imaging strategy should be used?</li>
                <li>What is "cyclophosphamide-induced hemorrhagic cystitis," and what pharmacological agent is co-administered to neutralize this risk?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>Performing a cystoscopy during an active bleeding event allows the urologist to view the bladder cavity and directly observe **unilateral or bilateral "blood spurting" from the ureteral orifices**. This clinical finding localizes the source of upper tract bleeding to a specific side (left vs. right kidney/ureter) before cross-sectional imaging or retrograde pyelography is completed.</li>
                        <li>This presentation points toward a **Left-sided Renal Cell Carcinoma (RCC) with renal vein invasion**. The left gonadal (testicular) vein drains directly at a 90-degree angle into the left renal vein, whereas the right gonadal vein drains directly into the IVC. A tumor thrombus from an RCC invading the left renal vein blocks this venous outlet, causing back-pressure that creates a secondary varicocele. Because this obstruction is mechanical and fixed, **the varicocele fails to decompress when supine**, unlike a benign primary varicocele.</li>
                        <li>Both pigments cause a false-positive chemical dipstick for blood due to their intrinsic peroxidase-like activity. To differentiate them, measure **serum creatine kinase (CK) levels and examine the plasma color**. Myoglobinuria is associated with severe muscle damage, showing markedly elevated serum CK levels ($>10,000\text{ U/L}$) and clear, straw-colored blood plasma (as myoglobin binds minimally to circulating proteins and is rapidly cleared by the kidneys). Hemoglobinuria presents with features of intravascular hemolysis, elevated LDH, decreased haptoglobin, and distinctly **pink- or red-tinted blood plasma** due to free hemoglobin binding to circulating haptoglobin proteins.</li>
                        <li>Multi-phase CT Urography requires a high volume of intravenous iodinated contrast material, which carries a high risk of worsening renal function (**Contrast-Induced Nephropathy**) in patients with an eGFR $<30\text{ mL/min/1.73 m}^2$. The preferred alternative approach is to use **non-contrast CT KUB combined with Retrograde Pyelography (RPG)** in the operating room, or an unenhanced Magnetic Resonance Urography (MRU) protocol, to safely map the upper tract anatomy without exposing the patient to nephrotoxic contrast agents.</li>
                        <li>Hemorrhagic cystitis is a severe, sterile inflammatory complication caused by high-dose cyclophosphamide or ifosfamide therapy. These chemotherapeutic agents metabolize into **acrolein**, a toxic substance that accumulates in the bladder and causes sloughing of the urothelium, mucosal ulceration, and severe hemorrhage. To prevent this, patients are given **MESNA (2-Mercaptoethane Sulfonate Sodium)**. MESNA accumulates in the urine, where its reactive thiol groups bind directly to acrolein, neutralizing its toxic effect on the bladder mucosa.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"urethral-rupture": {
    title: "Traumatic Urethral Rupture",
    videoUrl: "coming-soon",
    duration: "42 mins",
    notes: `
      <style>
        @media print {
            .rupture-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .rupture-notes details { display: block; }
            .rupture-notes details[open] summary ~ * { animation: none; }
        }
        .rupture-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .rupture-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .rupture-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .rupture-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .rupture-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .rupture-notes .box-red { background-color: #ffebee; border: 2px solid #c62828; padding: 20px; border-radius: 8px; margin: 25px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .rupture-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .rupture-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .rupture-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .rupture-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .rupture-notes ul, .rupture-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .rupture-notes li { margin-bottom: 0.5rem; }
        .rupture-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .rupture-notes th, .rupture-notes td { border: 1px solid #ddd; padding: 12px; text-align: left; vertical-align: top; }
        .rupture-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; letter-spacing: 0.5px; }
        .rupture-notes tr:nth-child(even) { background-color: #f9f9f9; }
      </style>

      <div class="rupture-notes">
        <h1>Traumatic Urethral Rupture</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Genitourinary Trauma: Anatomo-Fascial Boundaries of Urinary Extravasation, Pelvic Shearing Kinetics, and Acute and Delayed Reconstructive Paradigms
        </p>

        <h2>1. Surgical Classification &amp; Biomechanical Mechanisms</h2>
        <p>Traumatic disruptions of the male urethra are grouped according to their relationship to the **perineal membrane (urogenital diaphragm)** into anterior and posterior segments. The structural outcomes, presentation patterns, and fluid containment pathways are entirely determined by local facial anatomy.</p>

        <table>
            <thead>
                <tr>
                    <th>Anatomical Parameter</th>
                    <th>Anterior Urethral Disruption</th>
                    <th>Posterior Urethral Disruption</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Primary Segment Involved</strong></td>
                    <td><span class="highlight">Bulbar Urethra</span> (most frequent) or Penile segment.</td>
                    <td><span class="highlight">Membranous Urethra</span> (at the prostatomembranous junction).</td>
                </tr>
                <tr>
                    <td><strong>Classic Traumatic Etiology</strong></td>
                    <td><strong>Straddle Injury:</strong> Direct perineal impact against a rigid, narrow object (e.g., crossbar, fence). Translates upward crushing forces against the pubic bone.</td>
                    <td><strong>High-Energy Pelvic Fractures:</strong> Crush injuries or motor vehicle accidents disrupting the pelvic ring. Shearing actions tear the fixed tissue interfaces.</td>
                </tr>
                <tr>
                    <td><strong>Pathophysiology of Injury</strong></td>
                    <td>The bulbar urethra is compressed directly against the inferior margin of the pubic symphysis, leading to tissue contusion or complete transection.</td>
                    <td>The bony pelvis shifts, causing the puboprostatic ligaments to violently shear the mobile prostate apex away from the fixed perineal membrane.</td>
                </tr>
                <tr>
                    <td><strong>Fluid Extravasation Pouch</strong></td>
                    <td>Contained within the **Superficial Perineal Pouch** beneath Colles' fascia.</td>
                    <td>Escapes into the **Deep Perineal Pouch** and spreads into the extraperitoneal pelvic retropubic space (cave of Retzius).</td>
                </tr>
            </tbody>
        </table>

        <h2>2. Clinical Manifestations &amp; Fascial Anatomy Defenses</h2>

        <div class="box-red">
            <h3 style="margin-top:0; color:#b71c1c; display: block; border-bottom: none;">🚨 CLINICAL HALMARK: URETHRORRHAGIA</h3>
            <p><strong>Blood at the external urethral meatus</strong> is the single most reliable clinical indicator of a urethral tear, seen in up to 98% of cases. It indicates an injury distal to the external urinary sphincter.</p>
            <p><strong>The Absolute Surgical Rule:</strong> If blood is present at the meatus in a trauma setting, <span style="font-size:1.1em; color:#b71c1c;">⚠️</span> **NEVER ATTEMPT BLIND URETHRAL CATHETERIZATION**. This can turn a partial mucosal tear into a complete transection and introduce bacteria into a sterile pelvic hematoma.</p>
        </div>

        <h3>A. Anterior Rupture Mechanics &amp; the "Butterfly Hematoma"</h3>
        <p>When the bulbar urethra ruptures and the deep fascia of the penis (Buck's fascia) is breached, escaping urine and blood enter the superficial perineal pouch. Its spread is limited by the anatomical attachments of **Colles' fascia**:</p>
        
        

        <ul>
            <li><strong>Posterior Boundary:</strong> Colles' fascia fuses firmly with the posterior margin of the perineal membrane, preventing fluid from tracking backward into the anal triangle.</li>
            <li><strong>Lateral Boundary:</strong> Fuses tightly to the deep fascia covering the ischiopubic rami, stopping lateral tracking into the thighs.</li>
            <li><strong>Anterior Escape:</strong> Continuous with **Scarpa's fascia** of the lower abdominal wall and Dartos fascia of the scrotum and penis. Consequently, fluid tracks upward, resulting in a characteristic <span class="highlight">"Butterfly Hematoma"</span> ecchymosis restricted to the perineum, scrotum, and penile shaft.</li>
        </ul>

        <h3>B. Posterior Rupture Signatures</h3>
        <ul>
            <li><strong>Acute Urinary Retention:</strong> Fluid back-pressure accumulates behind a disrupted prostatomembranous junction, causing an exquisitely tender, over-distended suprapubic bladder mass.</li>
            <li><strong>Digital Rectal Examination (DRE) Profile:</strong> Reveals a characteristic <span class="highlight">"High-Riding Prostate"</span> or a soft, fluid-filled space where the prostate normally sits. As the apex shears free, a large pelvic hematoma forms in the retropubic space, lifting the unanchored prostate upward away from the pelvic floor.</li>
        </ul>

        <h2>3. Diagnostic Stratification</h2>
        <ul>
            <li><strong>Retrograde Urethrogram (RGU):</strong> The absolute diagnostic <span class="highlight">Gold Standard</span>.
                <br><em>Technique:</em> Conducted under fluoroscopic guidance in a 45-degree oblique position. A 12-14 Fr Foley catheter is inserted gently into the fossa navicularis, the balloon is inflated slightly with 1-2 mL of water to secure it, and 20-30 mL of water-soluble iodinated contrast is injected under gentle pressure.</li>
            <li><strong>Interpretation of RGU Findings:</strong>
                <ul>
                    <li>**Partial Rupture:** Contrast material extravasates into surrounding tissue beds while simultaneously filling the proximal urethra and bladder.</li>
                    <li>**Complete Rupture:** Massive contrast extravasation is visible at the point of injury, with an absolute absence of contrast within the prostatic urethra or bladder cavity.</li>
                </ul>
            </li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What is the clinical risk of using non-water-soluble contrast (e.g., barium suspension) during an acute RGU investigation?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> Barium or lipid-based contrast agents can induce severe, irreversible granulomatous reactions and extensive pelvic fibrosis when extravasated into soft tissue spaces. Additionally, if the contrast enters open venous channels within the vascular corpus spongiosum or pelvic venous plexus, it can trigger **fatal pulmonary embolism**. Only sterile, water-soluble iodinated contrast agents should be used.</p>
                </div>
            </details>
        </div>

        <h2>4. Reconstructive Management Pathways</h2>

        

        <h3>Phase 1: Hyper-Acute Resuscitation &amp; Urinary Diversion</h3>
        <p>The primary goal during initial trauma stabilization is to establish dependable urinary drainage without disturbing local tissues:</p>
        <ul>
            <li><strong>Percutaneous Suprapubic Cystostomy (SPC):</strong> The preferred emergency procedure. An SPC tube is placed into the distended bladder two fingerbreadths above the pubic symphysis, bypassing the injured area and allowing local bleeding and urine collections to settle.</li>
            <li><strong>Primary Endoscopic Realignment ("Railroading"):</strong> A specialized approach that may be considered in stable patients under expert care. Working simultaneously from above (via a suprapubic tract) and below (via the meatus), dual endoscopes pass a guide wire across the tear to align the segments. This is avoided in unstable multi-trauma cases due to risks of increased bleeding or nerve injury.</li>
        </ul>

        <h3>Phase 2: Delayed Definitive Reconstruction</h3>
        <ul>
            <li><strong>Anterior Partial Injuries:</strong> Often heal cleanly over 3–6 weeks with simple SPC urinary diversion, requiring only close monitoring with follow-up uroflowmetry.</li>
            <li><strong>Posterior/Complete Disruptions (Pelvic Fracture Defects):</strong> Treated with **Delayed Anastomotic Urethroplasty** after a waiting period of **3 months**. This delay allows pelvic hematomas to completely reabsorb, inflammation to subside, and the prostate to settle into a stable position. The scar tissue is then excised, and a tension-free, end-to-end anastomosis is performed through a perineal approach.</li>
        </ul>

        <h2>5. Long-Term Sequelae &amp; Neurologic Complications</h2>
        <ol>
            <li><strong>Post-Traumatic Urethral Stricture:</strong> The most common long-term complication, requiring close monitoring via flow rates and contrast imaging after the diversion tubes are removed.</li>
            <li><strong>Erectile Dysfunction (ED):</strong> Occurs in up to 50% of high-energy pelvic fractures. The injury is typically neurogenic, caused by direct damage to the **cavernous nerve bundles** as they run along the posterolateral aspect of the membranous urethra, or vasculogenic from disruption of the internal pudendal arterial network.</li>
            <li><strong>Urinary Incontinence:</strong> Occurs if the internal bladder neck sphincter is damaged during a posterior shearing injury, especially since the external urinary sphincter within the membranous segment is often compromised by the primary tear.</li>
        </ol>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Apply principles of fascial boundaries, vascular perfusion, and neurologic anatomy to solve these high-level clinical scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>If a patient sustains a complete tear of the penile urethra *anterior* to the suspensory ligament but Buck's fascia remains entirely intact, describe the anatomical limits of the resulting hematoma.</li>
                <li>Why is the incidence of long-term urinary incontinence significantly higher if a delayed anastomotic urethroplasty for a posterior rupture requires a wedge-resection inferior pubectomy?</li>
                <li>An RGU reveals contrast extravasation at the bulbar segment, but contrast is also seen entering the deep dorsal vein of the penis and pelvic venous plexus. What is this phenomenon called, and what immediate precaution must be taken?</li>
                <li>Explain why immediate open exploration and primary suturing of a sheared prostatomembranous disruption is associated with higher rates of permanent erectile dysfunction and severe bleeding compared to a delayed repair approach.</li>
                <li>A patient with an indwelling SPC following a pelvic fracture undergoes a pre-operative evaluation. An RGU shows complete occlusion at the membranous segment, but the bladder neck cannot be visualized. What secondary imaging step must be added before surgery?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>If Buck's fascia remains intact, the extravasated blood and urine are confined beneath it, tracking along the penile shaft up to the attachment of the suspensory ligament. This produces a characteristic **"sleeve" or sausage-shaped swelling** limited strictly to the penile cylinder, without spreading into the scrotum or perineal pouch as seen when Buck's fascia is ruptured.</li>
                        <li>An inferior pubectomy involves removing a wedge of bone from the lower pubic symphysis to shorten the pathway for reconstruction. However, this bone segment serves as the primary attachment site for the **puboprostatic ligaments and elements of the external urinary sphincter**. Removing it can destabilize these supporting structures, putting more reliance on the internal bladder neck sphincter. If that internal sphincter was also injured during the primary pelvic fracture, the risk of permanent stress urinary incontinence increases significantly.</li>
                        <li>This finding is known as **urethrovenous intravasation**, where contrast breaks through the torn mucosal barrier directly into the high-capacity venous sinuses of the corpus spongiosum and pelvic veins. If observed, the injection pressure must be reduced immediately or the procedure stopped. The patient should be monitored closely for systemic signs of an adverse contrast reaction or pyrogen-induced rigors, as this portal can allow bacteria from the tract to enter the bloodstream directly, causing rapid sepsis.</li>
                        <li>Acute pelvic fractures generate large, active retropubic hematomas that provide a tamponade effect against deeper venous bleeding. Exploring this area acutely can disrupt this clot, leading to severe, hard-to-control pelvic hemorrhage. Additionally, the nerves responsible for erections (the cavernosal neurovascular bundles) are delicate and difficult to identify within acutely traumatized, blood-stained tissue. A delayed approach allows the tissues to heal and form a stable scar, making it easier to preserve these nerve paths during reconstruction.</li>
                        <li>When an RGU shows a complete blockage, the proximal boundary of the scar cannot be mapped because contrast cannot pass beyond the obstruction. To see the upper limit, a **Simultaneous Up-and-Down Study (Combined RGU + VCUG)** is required. Contrast is introduced into the bladder through the existing suprapubic tube, and the patient is asked to strain or void while contrast is simultaneously injected from below. This highlights both sides of the scar canal, allowing the surgeon to measure the exact length of the missing segment and plan the reconstruction.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"urethral-anatomy": {
    title: "Surgical Anatomy of the Male Urethra",
    videoUrl: "coming-soon",
    duration: "38 mins",
    notes: `
      <style>
        @media print {
            .anatomy-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .anatomy-notes details { display: block; }
            .anatomy-notes details[open] summary ~ * { animation: none; }
        }
        .anatomy-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .anatomy-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .anatomy-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .anatomy-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .anatomy-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .anatomy-notes .box-blue { background-color: #e8eaf6; border: 2px solid #3f51b5; padding: 20px; border-radius: 8px; margin: 25px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .anatomy-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .anatomy-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .anatomy-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .anatomy-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .anatomy-notes ul, .anatomy-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .anatomy-notes li { margin-bottom: 0.5rem; }
        .anatomy-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .anatomy-notes th, .anatomy-notes td { border: 1px solid #ddd; padding: 12px; text-align: left; vertical-align: top; }
        .anatomy-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; letter-spacing: 0.5px; }
        .anatomy-notes tr:nth-child(even) { background-color: #f9f9f9; }
      </style>

      <div class="anatomy-notes">
        <h1>Surgical Anatomy of the Male Urethra</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Anatomical Topography, Histological Transitions, Functional Sphincteric Mechanisms, and Endourological Dynamics
        </p>

        <h2>1. Structural Dimensions &amp; Anatomical Subdivisions</h2>
        <p>The male urethra is a complex, continuous, fibro-elastic conduit tracking approximately **18–20 cm** in length from the internal bladder neck orifice to the external meatus. In its anatomical resting state, it describes an S-shaped path. Structurally, the perineal membrane serves as the dividing line, separating the channel into the **posterior** and **anterior** regions.</p>
        
        

[Image of Male urethra anatomy sagittal view]


        <table>
            <thead>
                <tr>
                    <th>Anatomical Zone</th>
                    <th>Subdivision</th>
                    <th>Average Length</th>
                    <th>Histological Lining &amp; Surgical Landmarks</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="3" style="background-color: #e8eaf6; font-weight: bold; text-align: center; vertical-align: middle;">Posterior Urethra</td>
                    <td><strong>1. Pre-Prostatic (Bladder Neck)</strong></td>
                    <td>1.0–1.5 cm</td>
                    <td>**Transitional epithelium (Urothelium)**. Encircled by the smooth-muscle internal urethral sphincter. Prevents retrograde semen migration.</td>
                </tr>
                <tr>
                    <td><strong>2. Prostatic</strong></td>
                    <td>3.0–4.0 cm</td>
                    <td>**Urothelium**. This is the **widest and most dilatable segment** of the entire conduit. Traversed by the verumontanum; home to the prostatic sinus channels. Primary zone for TURP resection.</td>
                </tr>
                <tr>
                    <td><strong>3. Membranous</strong></td>
                    <td>1.5–2.0 cm</td>
                    <td>Gradual transition to **stratified columnar epithelium**. This is the **narrowest fixed segment** within the deep pelvis. Pierces the perineal membrane; tightly encircled by the skeletal voluntary external sphincter ring. Extremely vulnerable to shearing stresses in pelvic ring disruptions.</td>
                </tr>
                <tr>
                    <td rowspan="2" style="background-color: #fff3e0; font-weight: bold; text-align: center; vertical-align: middle;">Anterior Urethra</td>
                    <td><strong>4. Bulbar</strong></td>
                    <td>~5.0 cm</td>
                    <td>**Pseudostratified/Stratified columnar epithelium**. Invested circumferentially by the vascular corpus spongiosum and the bulbospongiosus muscle muscle layer. Site of blunt straddle impact injuries. Houses the openings for the ducts of Cowper's (bulbourethral) glands.</td>
                </tr>
                <tr>
                    <td><strong>5. Penile (Pendulous)</strong></td>
                    <td>~15.0 cm</td>
                    <td>**Pseudostratified columnar**, transforming to **stratified squamous epithelium** inside the fossa navicularis. Mobile, tracking within the ventral sulcus of the corpora cavernosa cylinders. Houses the mucosal crypts of Morgagni and the small glands of Littré.</td>
                </tr>
            </tbody>
        </table>

        <h2>2. Sphincteric Micro-Anatomy &amp; Continence Mechanics</h2>
        <p>Urinary continence relies on the balanced, coordinated interaction between two distinct, specialized sphincteric systems:</p>

        <ul>
            <li><strong>The Internal Urethral Sphincter (Smooth Muscle Complex):</strong>
                <ul>
                    <li>*Structural Composition:* A localized thickening of smooth muscle fibers derived from the detrusor muscle layer at the bladder neck base. It operates entirely as an **involuntary sphincter**.</li>
                    <li>*Neurologic Innervation:* Regulated by autonomic sympathetic pathways originating from the **T11–L2 spinal cords sections**, passing through the hypogastric plexus.</li>
                    <li>*Functional Specialization:* Maintains baseline continuous urinary continence at rest. During ejaculation, sympathetic stimulation causes this muscle ring to close completely, which **prevents retrograde ejaculation** by stopping semen from tracking back into the bladder cavity.</li>
                </ul>
            </li>
            <li><strong>The External Urethral Sphincter (The Rhabdosphincter):</strong>
                <ul>
                    <li>*Structural Composition:* A highly specialized, horse-shoe shaped ring of slow-twitch, fatigue-resistant skeletal muscle fibers (rhabdosphincter) located within the membranous urethra segment. It serves as the primary **voluntary sphincter**.</li>
                    <li>*Neurologic Innervation:* Regulated via somatic motor components of the **pudendal nerve (S2–S4 segments)**.</li>
                    <li>*Functional Specialization:* Provides the structural support needed to abruptly stop the urinary stream ("start-stop" mechanics). This external sphincter complex is the **sole remaining structural mechanism preserving continence following a radical prostatectomy**, as the internal bladder neck mechanism is typically removed during that procedure.</li>
                </ul>
            </li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What is the critical clinical difference between the narrowest part of the entire male urethra versus its narrowest *fixed* part inside the body cavity?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> The absolute narrowest point along the entire male urethral tract is the **external urethral meatus** at the tip of the glans penis. However, the narrowest *fixed* part within the body pelvis is the **membranous urethra**, which cannot stretch easily due to its dense connection to the surrounding perineal membrane and external sphincter muscle fibers.</p>
                </div>
            </details>
        </div>

        <h2>3. Topographical Curvatures &amp; Endourological Dynamics</h2>
        <p>Safely passing rigid instruments, such as catheters or cystoscopes, requires navigating two primary anatomical curves that form the characteristic "S" shape:</p>
        
        

        <ul>
            <li><strong>1. The Fixed Sub-Pubic (Posterior) Curvature:</strong>
                <ul>
                    <li>*Anatomical Location:* Situated at the transition where the anterior bulbar urethra meets the fixed membranous portion beneath the pubic arch.</li>
                    <li>*Geometrical Profile:* Concave upwards.</li>
                    <li>*Surgical Maneuver Matrix:* This curve is **completely rigid and fixed** because it is bound by the puboprostatic ligaments and perineal membrane. It cannot be straightened out. To pass instruments through safely without creating a traumatic "false passage" along the bulbar floor, the tip of the instrument must follow this upward curve or be angled slightly upward (such as using a curved Coudé catheter tip).</li>
                </ul>
            </li>
            <li><strong>2. The Mobile Pre-Pubic (Anterior) Curvature:</strong>
                <ul>
                    <li>*Anatomical Location:* Located at the penoscrotal junction, where the pendulous penile urethra transitions into the deeper perineal compartments.</li>
                    <li>*Geometrical Profile:* Concave downwards in the flaccid state.</li>
                    <li>*Surgical Maneuver Matrix:* This curve is **highly mobile and flexible**. It must be completely straightened out as the first step of any catheterization or cystoscopic entry. This is achieved by lifting the shaft of the penis upward to a **90-degree angle perpendicular to the abdominal wall**, converting the dynamic S-shape into a much straighter, single continuous curve.</li>
                </ul>
            </li>
        </ul>

        <h2>4. High-Yield Surgical Landmarks</h2>
        <ul>
            <li><strong>Verumontanum (Seminal Colliculus):</strong> A prominent longitudinal mucosal ridge along the posterior wall of the prostatic urethra segment.
                <ul>
                    <li>*Orifice Topography:* The central blind pocket opens into the **prostatic utricle** (the vestigial remnant of the paramesonephric/Müllerian duct system). Flanking this central pocket on either side are the micro-orifices of the **ejaculatory ducts**.</li>
                    <li>*Surgical Margin Role:* Serves as the critical **distal boundary line during a transurethral resection of the prostate (TURP)**. Resecting tissue distal to the verumontanum must be avoided, as doing so will cut directly into the external voluntary sphincter fibers, causing permanent urinary incontinence.</li>
                </ul>
            </li>
            <li><strong>Fossa Navicularis &amp; The Valve of Guérin:</strong> A localized expansion of the urethral lumen within the glans penis. Its dorsal roof contains a small mucosal crescent known as the **valve of Guérin (lacuna magna)**. Small, rigid guide wires or fine-tipped catheters can get caught in this fold, which can cause bleeding or puncture injuries if forced forward blindly.</li>
        </ul>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Apply principles of tissue layering, neural control, and structural mechanics to resolve these advanced clinical scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>Explain why an open surgical injury or severe infection involving the bulbourethral (Cowper’s) glands presents within the deep perineal pouch, whereas their secretions travel to and serve a function within the anterior urethral zone.</li>
                <li>Following a radical retropubic prostatectomy, a patient experiences temporary stress urinary incontinence when coughing or lifting objects. Explain the exact neuromuscular pathway responsible for recovering their continence over time.</li>
                <li>During a difficult urethral catheterization, a clinician encounters resistance and forces a standard 16 Fr silicone catheter forward without using the proper positioning angles. Where is a "false passage" most likely to form, and what structural layers are breached?</li>
                <li>What unique structural features differentiate the urothelium lining the prostatic urethra from the stratified squamous epithelium found in the fossa navicularis, and why are these differences clinically important?</li>
                <li>Alpha-1 adrenergic receptor antagonists (such as Tamsulosin) are routinely prescribed to treat urinary symptoms from BPH, but they frequently cause anejaculation or dry orgasms. What specific anatomical mechanism explains this side effect?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>This discrepancy is due to the path the ducts travel through local facial layers. The bodies of Cowper’s (bulbourethral) glands are physically located within the **deep perineal pouch**, nestled among the skeletal muscle fibers of the external urethral sphincter. However, their long secretory ducts run forward through the perineal membrane for about 2.5 cm, opening into the lumen of the **proximal bulbar urethra (anterior zone)**. Therefore, any infection affecting the glands themselves is contained within the deep pelvic spaces, even though their pre-ejaculatory secretions are delivered into the anterior tract.</li>
                        <li>Radical prostatectomy removes the entire prostatic urethra along with the involuntary internal urethral sphincter at the bladder neck. To maintain continence, the patient must rely entirely on the voluntary external **rhabdosphincter**, which is supplied by somatic motor fibers of the **pudendal nerve (S2–S4)**. Pelvic floor physical therapy (Kegelexercises) helps strengthen these slow-twitch skeletal muscle fibers, training them to contract reflexively during sudden increases in abdominal pressure (like coughing or lifting) to compensate for the lost internal bladder neck mechanism.</li>
                        <li>A false passage is most likely to form along the **posterior bulbous urethral floor**, right at the sub-pubic curve. If the penis is not pulled upright to smooth out the path, or if an instrument is pushed forward blindly, its rigid tip can catch on the non-compliant perineal membrane. Pushing forward too hard tears through the weak **pseudostratified columnar epithelium and the surrounding vascular corpus spongiosum**, creating a path that runs behind the prostate rather than through the true lumen into the bladder.</li>
                        <li>The prostatic urothelium is a specialized, multi-layered transitional epithelium capable of stretching significantly without tearing, and its cell surfaces feature a protective layer of glycosaminoglycans that seals the tissue against highly concentrated, acidic urine. In contrast, the stratified squamous epithelium of the fossa navicularis is a durable, non-keratinized layer designed to withstand mechanical friction near the external meatus, but it lacks the chemical resistance and stretching capabilities of true urothelium.</li>
                        <li>The smooth muscle fibers of the internal urethral sphincter at the bladder neck are highly concentrated with **Alpha-1a adrenergic receptors**. When an alpha-blocker like Tamsulosin is used, it relaxes this smooth muscle ring. As a result, when the patient experiences orgasm, the bladder neck cannot close completely. The semen follows the path of least resistance, traveling backward into the low-pressure bladder cavity (**retrograde ejaculation**) rather than forward through the external meatus.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"urethral-structure": {
    title: "Urethral Structure Disease",
    videoUrl: "coming-soon",
    duration: "35 mins",
    notes: `
      <style>
        @media print {
            .stricture-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .stricture-notes details { display: block; }
            .stricture-notes details[open] summary ~ * { animation: none; }
        }
        .stricture-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .stricture-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .stricture-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .stricture-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .stricture-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .stricture-notes .box-blue { background-color: #e8eaf6; border: 2px solid #3f51b5; padding: 20px; border-radius: 8px; margin: 25px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .stricture-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .stricture-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .stricture-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .stricture-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .stricture-notes ul, .stricture-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .stricture-notes li { margin-bottom: 0.5rem; }
        .stricture-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 3px rgba(0,0,0,0.05); }
        .stricture-notes th, .stricture-notes td { border: 1px solid #ddd; padding: 12px; text-align: left; vertical-align: top; }
        .stricture-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; letter-spacing: 0.5px; }
        .stricture-notes tr:nth-child(even) { background-color: #f9f9f9; }
      </style>

      <div class="stricture-notes">
        <h1>Urethral Stricture Disease</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Anterior &amp; Posterior Genitourinary Reconstruction: Pathophysiology of Spongiofibrosis, Hemodynamic Flow Profiles, and Reconstructive Surgical Stratification
        </p>

        <h2>1. Definition &amp; Pathophysiology</h2>
        <p>A <strong>Urethral Stricture</strong> refers to an abnormal narrowing of the anterior urethral lumen caused by ischemic healing and subsequent fibrosis of the surrounding vascular tissue layer. True stricture disease occurs within the **anterior urethra** (comprising the meatus, fossa navicularis, penile/pendulous urethra, and bulbar urethra) where epithelial injury leads to <span class="highlight">Spongiofibrosis</span>—the replacement of the corpus spongiosum's vascular sinusoids with dense, inelastic bundles of Type I collagen fibers. This scar matrix progressively contracts, narrowing the lumen and obstructing urinary flow.</p>
        <p>In contrast, narrowings within the **posterior urethra** (membranous and prostatic segments) lack surrounding corpus spongiosum and are typically termed **stenoses** or distraction defects, arising from complete transection or traumatic disruption rather than true progressive spongiofibrosis.</p>

        <h2>2. Comprehensive Etiology</h2>
        <p>Urethral luminal narrowings are classified based on the mechanism of tissue injury and their specific anatomical distribution:</p>
        
        

        <h3>A. Mechanical Trauma</h3>
        <ul>
            <li><strong>Blunt Straddle Injury:</strong> Classically impacts the **Bulbar Urethra**. A fall or direct blow to the perineum compresses the bulbar segment directly against the solid inferior edge of the pubic symphysis, causing localized crush injury, ischemia, and dense localized spongiofibrosis.</li>
            <li><strong>Pelvic Fracture Urethral Distraction Defects (PFUDD):</strong> Impact the **Membranous Urethra**. Severe pelvic ring disruptions shear the prostate apex away from the fixed perineal membrane, leading to partial or complete disruption at the prostatomembranous junction. This heals as an obliterative fibrotic scar canal devoid of spongy tissue.</li>
        </ul>

        <h3>B. Iatrogenic Insults (Most Common Modern Driver)</h3>
        <ul>
            <li><strong>Prolonged Indwelling Catheterization:</strong> Pressure necrosis caused by overly large catheters or continuous mechanical traction compresses the mucosal lining, causing focal ischemia, micro-ulceration, and subsequent pan-urethral strictures.</li>
            <li><strong>Transurethral Resection of the Prostate (TURP):</strong> Thermal energy leaks from cutting loops, or mechanical friction from large-diameter resectoscope sheaths, frequently cause strictures at the narrowest anatomical points: the **meatus, fossa navicularis, and bladder neck**.</li>
            <li><strong>Congenital Reconstructive Adjustments:</strong> Late scar failures following complex pediatric hypospadias repairs.</li>
        </ul>

        <h3>C. Inflammatory &amp; Dermatological Conditions</h3>
            <ul>
                <li><strong>Balanitis Xerotica Obliterans (BXO) / Lichen Sclerosus:</strong> A chronic, progressive, autoimmune chronic inflammatory dermatosis that preferentially targets the glans penis, preputial skin, and meatus. It leads to progressive, severe scarring that can track proximally along the pendulous segments, resulting in complex <span class="highlight">Pan-Urethral Strictures</span>.</li>
                <li><strong>Gonococcal Urethritis:</strong> Historically common, virulent infections with *Neisseria gonorrhoeae* prompt deep periurethral gland inflammation (glands of Littre). This induces multi-focal, classic "rosary bead" strictures along the bulbar and pendulous segments.</li>
            </ul>

        <h2>3. Clinical Presentation &amp; Syndromic Complications</h2>
        <ul>
            <li><strong>Obstructive Lower Urinary Tract Symptoms (LUTS):</strong> Patients report a progressively weakening, thin urinary stream, prolonged voiding times, straining to urinate, post-void dribbling, and a split or "spraying" (forked) urinary stream.</li>
            <li><strong>Secondary Infective Complications:</strong> Stasis of urine behind the stricture leads to colonization, causing recurrent cystitis, bacterial prostatitis, and acute epididymo-orchitis.</li>
            <li><strong>Advanced Neglected Presentation:</strong>
                <ul>
                    <li>**Acute Urinary Retention (AUR):** Sudden, painful inability to pass urine when the lumen becomes completely blocked.</li>
                    <li>**Periurethral Abscess / Urinary Extravasation:** High-pressure voiding proximal to the stricture breaches the weakened epithelium, forcing infected urine into the periurethral tissues and leading to scrotal or perineal abscesses.</li>
                    <li><span class="highlight">Watering Can Perineum</span>: A classic presentation of chronic, untreated strictures where multiple draining perineal fistulas form, diverting urine through the skin during voiding.</li>
                </ul>
            </li>
        </ul>

        <h2>4. Diagnostic Workup &amp; Hemodynamic Profiling</h2>
        
        <h3>A. Computerized Uroflowmetry Screening</h3>
        <p>Uroflowmetry measures the volume of urine passed per second to screen for bladder outlet obstruction. The shape of the flow curve helps differentiate stricture disease from other etiologies:</p>
        
        

        <ul>
            <li><strong>Pathognomonic Finding:</strong> A distinct <span class="highlight">"Box-Shaped" or Plateau-like Curve</span>.</li>
            <li>Because a urethral stricture forms a fixed, rigid, non-compliant ring, the maximum flow rate ($Q_{\text{max}}$) reaches a low plateau (often $< 10\text{ mL/s}$) early on and remains flat throughout voiding. This contrasts with the fluctuating, crescent-shaped curves seen in dynamic obstructions like Benign Prostatic Hyperplasia (BPH).</li>
        </ul>

        <h3>B. Combined Retrograde Urethrogram (RGU) &amp; Voiding Cystourethrogram (VCUG)</h3>
        <p>This combined fluoroscopic approach is the **Gold Standard** for pre-operative planning, mapping out the precise anatomy of the stricture:</p>
        <ul>
            <li><strong>RGU Technique:</strong> Radio-opaque contrast is injected retrogradely through the external urethral meatus under gentle pressure, mapping the distal boundary, length, and severity of the stricture.</li>
            <li><strong>VCUG / MCU Technique:</strong> The patient is imaged while voiding, using contrast that fills the bladder via a suprapubic catheter. This helps visualize the proximal boundary of the stricture and assesses bladder neck function.</li>
            <li><strong>Combined Application:</strong> Essential for complete obliterative strictures or high-energy pelvic trauma defects (PFUDD). Simultaneous RGU and VCUG identify the precise gap of missing or scarred urethra, guiding the reconstructive plan.</li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Why is an RGU strictly contraindicated during an active, untreated urinary tract infection?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> Injecting contrast under pressure into a compromised, narrowed urethra can cause micro-tears in the delicate mucosa. If the urine is infected, this pressure can force bacteria directly into the highly vascular venous sinusoids of the corpus spongiosum (**urethrovenous intravasation**), leading to rapid bacteremia and life-threatening **gram-negative urosepsis**.</p>
                </div>
            </details>
        </div>

        <h2>5. Management Protocols: The Reconstructive Ladder</h2>
        <p>Management depends on the anatomical location, length, and degree of spongiofibrosis. Repetitive, unsuccessful endoscopic procedures should be avoided in favor of definitive reconstruction.</p>

        <div class="box-blue">
            <h3 style="margin-top:0; color:#3f51b5; display: block; border-bottom: none;">✂️ VISUAL INTERNAL URETHROTOMY (VIU)</h3>
            <p>An endoscopic procedure where the stricture ring is incised under direct vision using a cold knife (Sachse knife) or laser to allow the lumen to widen.</p>
            <ul>
                <li><strong>Anatomical Incision Axis:</strong> Must be performed precisely at the **12 o'clock position** (ventral orientation relative to the patient). This is because the corpus spongiosum tissue envelope is thinnest dorsally and thickest ventrally; cutting at 12 o'clock minimizes bleeding and protects the deep cavernosal arteries, reducing the risk of erectile dysfunction.</li>
                <li><strong>Strict Selection Criteria:</strong> Indicated only for short, primary, non-dense strictures localized to the **bulbar urethra that are $< 1.5\text{ cm}$ in length**.</li>
                <li><strong>The Rule of Outcomes:</strong> A second VIU for a recurrent stricture carries a failure rate approaching 80–90%. Repeating endoscopic incisions beyond this point increases scar length and density, so patients should instead be triaged to open repair.</li>
            </ul>
        </div>

        <h3>Open Urethroplasty (The Reconstructive Gold Standard)</h3>
        <table>
            <thead>
                <tr>
                    <th>Surgical Method</th>
                    <th>Anatomical Indications</th>
                    <th>Procedural Mechanics &amp; Tissues Used</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Excision and Primary Anastomosis (EPA)</strong></td>
                    <td>Short traumatic bulbar strictures or PFUDDs ($< 2\text{ cm}$ total gap).</td>
                    <td>The diseased segment of scarred urethra is completely excised. The remaining healthy ends are mobilized, spatulated, and joined together via an end-to-end anastomosis without tension.</td>
                </tr>
                <tr>
                    <td><strong>Substitution Urethroplasty (Onlay Repairs)</strong></td>
                    <td>Long, complex, or recurrent strictures ($> 2\text{ cm}$) where primary joining is impossible.</td>
                    <td>The narrowed urethra is incised along its length, and a patch or graft is augmented onto the defect to widen the lumen. The **Buccal Mucosa Graft (BMG)** harvested from the inner cheek is the graft of choice.</td>
                </tr>
            </tbody>
        </table>

        <h3>Why Buccal Mucosa (BMG) is the Ideal Graft Material</h3>
        <p>Buccal mucosa is uniquely well-suited for urological reconstruction due to its specific tissue characteristics:</p>
        <ul>
            <li>It has a **thick, non-keratinized stratified squamous epithelium** that resists mechanical wear and stays stable when exposed to urine.</li>
            <li>It features a dense, highly vascular **pan-laminar subepithelial plexus** that promotes rapid survival and integration (inosculation) when placed on the vascular spongiosum bed.</li>
            <li>It is an **intrinsically hairless** tissue, preventing the stone formation and recurrent infections that occur when hair-bearing skin grafts are exposed to chronic urinary flow.</li>
            <li>It is easy to harvest, leaves minimal donor site complications, and is well-adapted to a wet, humid environment.</li>
        </ul>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Apply principles of tissue transfer, vascular anatomy, and fluid mechanics to answer these scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>Why is open Substitution Urethroplasty using a Buccal Mucosa Graft (BMG) absolutely contraindicated in patients with an active diagnosis of Balanitis Xerotica Obliterans (BXO), and what tissue alternative must be chosen?</li>
                <li>Explain the step-by-step surgical steps required to gain extra length during an Excision and Primary Anastomosis (EPA) for a posterior urethral distraction defect (PFUDD).</li>
                <li>Contrast the mechanisms and clinical utility of a "Dorsal Onlay" (Barbagli technique) versus a "Ventral Onlay" (Asopa/Jacobs technique) urethroplasty in bulbar urethral reconstruction.</li>
                <li>Why do strictures involving the pendulous/penile urethra have significantly higher recurrence and complication rates compared to identical length strictures in the bulbar urethra?</li>
                <li>A patient develops a long stricture secondary to a severe electrical burn during a monopolar TURP. Why does this thermal stricture carry a poorer prognosis for endoscopic management compared to a purely mechanical catheter-induced stricture?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>BXO (Lichen Sclerosus) is a progressive systemic disease that targets keratinizing and non-keratinizing squamous epithelium alike. While it most commonly affects genital skin, it can also manifest in or expand into oral mucosal tissues, which can lead to graft failure or stricture recurrence if buccal mucosa is used. In patients with confirmed, active systemic BXO requiring substitution urethroplasty, a **hairless, full-thickness skin graft harvested from the inner upper arm** or a split-thickness skin graft is preferred to minimize the risk of recurrent disease within the reconstructed segment.</li>
                        <li>To bridge a wide gap during a pelvic fracture distraction repair without tension, a systematic **four-step maneuver ladder** is followed: 
                        <br>1. **Spatulation and mobilization** of the anterior bulbar urethra down to the perineal membrane. 
                        <br>2. **Separation of the corporal bodies (corporeal fenestration)** along the midline to create a shorter, straight path for the urethra. 
                        <br>3. **Inferior pubectomy**, removing a wedge of bone from the lower pubic symphysis to shorten the distance around the bone. 
                        <br>4. **Supracrural rerouting** of the mobilized urethra around the crura of the penis, maximizing length to achieve a tension-free, end-to-end anastomosis.</li>
                        <li>In a **Dorsal Onlay (Barbagli)** repair, the urethra is dissected off the corpora cavernosa, opened along its dorsal aspect, and the BMG is secured directly onto the rigid corporeal bodies, which act as a stable, highly vascular backing that minimizes graft sacculation. In a **Ventral Onlay (Jacobs/Asopa)** repair, the urethra is incised along its ventral midline surface without separating it from its dorsal attachments. This avoids circumferential mobilization, protecting the dorsal blood supply and nerves, but requires the graft to rely on the spongiosum wings for support, which can be less stable if significant ventral scarring is present.</li>
                        <li>The pendulous/penile urethra is surrounded by a much thinner layer of corpus spongiosum compared to the bulbous urethra, providing less vascular support for graft healing. Furthermore, the penile urethra undergoes significant changes in length and movement during erections. This continuous mechanical stretching and relaxation creates shear forces across the healing graft or anastomosis, increasing the risk of micro-tears, micro-extravasation of urine, and recurrent scar formation.</li>
                        <li>Mechanical trauma from a catheter typically causes superficial, localized mucosal damage with limited deep injury. Monopolor thermal energy from a TURP, however, penetrates deep into surrounding tissues, causing **widespread coagulative necrosis** throughout the full thickness of the corpus spongiosum and adjacent structures. This extensive thermal injury destroys the local microvascular network, creating a dense, avascular scar bed that cannot heal cleanly after a simple endoscopic cut, leading to rapid recurrence.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"puv": {
    title: "Posterior Urethral Valves (PUV)",
    videoUrl: "coming-soon",
    duration: "28 mins",
    notes: `
      <style>
        @media print {
            .puv-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .puv-notes details { display: block; }
            .puv-notes details[open] summary ~ * { animation: none; }
        }
        .puv-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .puv-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .puv-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .puv-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .puv-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .puv-notes .box-red { background-color: #ffebee; border: 2px solid #c62828; padding: 20px; border-radius: 8px; margin: 25px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .puv-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .puv-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .puv-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .puv-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .puv-notes ul, .puv-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .puv-notes li { margin-bottom: 0.5rem; }
        .puv-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 3px rgba(0,0,0,0.05); }
        .puv-notes th, .puv-notes td { border: 1px solid #ddd; padding: 12px; text-align: left; vertical-align: top; }
        .puv-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; letter-spacing: 0.5px; }
        .puv-notes tr:nth-child(even) { background-color: #f9f9f9; }
      </style>

      <div class="puv-notes">
        <h1>Posterior Urethral Valves (PUV)</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Pediatric Urology &amp; Surgery: Congenital Lower Urinary Tract Obstruction (LUTO), Hydro-Mechanical Detrusor Remodeling, and Antenatal Management Pathways
        </p>

        <h2>1. Embryology, Definition &amp; Young's Classification</h2>
        <p><strong>Posterior Urethral Valves (PUV)</strong> represent an anomalous congenital development of obstructive, sail-like membranous folds within the lumen of the prostatic urethra. It is the most common cause of mechanical **Lower Urinary Tract Obstruction (LUTO)** in male newborns, with an incidence of roughly 1 in 5,000 live births. It does not occur in biological females.</p>
        
        <h3>Embryological Origin</h3>
        <p>The valves develop due to an abnormal integration and migration of the **primitive wolffian (mesonephric) ducts** into the embryonic cloaca. Instead of fusing normally along the posterior wall to form the lateral crests of the verumontanum, these persistent vestigial membranes fuse anteriorly, creating an obstructive barrier to forward urinary flow.</p>

        <h3>Anatomical Classification (Young's Criteria)</h3>
        <ul>
            <li><strong>Type I (95% of cases):</strong> Obstructing leaflets that originate from the distal edge of the **verumontanum** and extend laterally and distally, fusing together at the anterior midline of the bulbomembranous junction like a diaphragm.</li>
            <li><strong>Type III (Rare):</strong> A distinct disc-like ring or circular diaphragm located distal to the verumontanum, featuring a tiny central perforation.</li>
            <li><em>Note on Type II:</em> Historically described as folds running from the verumontanum proximally toward the bladder neck, Type II is now recognized as a non-obstructive, normal anatomical variant rather than a true clinical pathology.</li>
        </ul>

        <h2>2. Clinical Manifestations Along a Developmental Timeline</h2>
        <p>The clinical presentation of PUV depends heavily on the severity of the urethral obstruction, spanning from severe antenatal problems to more subtle urological issues discovered later in childhood.</p>

        <h3>A. Antenatal Signatures (Screening Obstetric Ultrasound)</h3>
        <ul>
            <li><strong>Progressive Bilateral Hydroureteronephrosis:</strong> Severe dilation of both the renal pelvises and ureters caused by back-pressure from the blocked bladder outlet.</li>
            <li><strong>Marked Megacystis:</strong> An enlarged, thick-walled urinary bladder that fails to empty during real-time imaging cycles.</li>
            <li><strong>Severe Oligohydramnios:</strong> A critical drop in amniotic fluid volume, typically developing after 16 to 18 weeks of gestation. Because fetal urine is the primary contributor to amniotic fluid production, low fluid levels indicate impaired fetal renal output.</li>
        </ul>

        <h3>B. Neonatal Presentation (Acute Resuscitative Phase)</h3>
        <ul>
            <li><strong>Severe Respiratory Distress Syndrome:</strong> Secondary to **Pulmonary Hypoplasia**. Severe oligohydramnios removes the fluid cushion required for normal thoracic expansion and alveolar development, which can lead to life-threatening respiratory failure at birth.</li>
            <li><strong>Palpable Suprapubic Mass:</strong> A firm, globulous, non-emptying urinary bladder, often accompanied by bilaterally palpable, hydronephrotic kidneys.</li>
            <li><strong>Voiding Dysfunction:</strong> Characterized by a weak, interrupted, or dribbling urinary stream instead of a normal, strong neonatal arc.</li>
            <li><strong>Neonatal Urinary Ascites:</strong> Free fluid in the peritoneal cavity, caused by transudation or rupture of the vulnerable renal calyceal fornices due to high back-pressure. This act of rupturing can sometimes serve as a temporary pressure-release valve.</li>
        </ul>

        <h3>C. Late Presentation (Delayed Childhood / Adolescence)</h3>
        <ul>
            <li>Recurrent, febrile **Urinary Tract Infections (UTIs)** or full-blown urosepsis.</li>
            <li>Disordered voiding behaviors, including severe secondary diurnal enuresis (daytime bedwetting) or overflow incontinence.</li>
            <li>Unexplained failure to thrive, normocytic anemia, or progressive chronic kidney disease (CKD) presenting with uremic symptoms.</li>
        </ul>

        <h2>3. Diagnostic Gold Standards &amp; Radiological Architecture</h2>

        

        <ul>
            <li><strong>Antenatal / Postnatal Ultrasonography:</strong> 
                <br>Reveals structural modifications from chronic obstruction, including bladder wall hypertrophy with internal trabeculations and a classic <span class="highlight">"Keyhole Sign"</span>. This pathognomonic sign represents the structural continuation of a dilated, thick-walled bladder into an elongated, ballooned-out posterior urethra proximal to the obstruction.</li>
            <li><strong>Voiding / Micturating Cystourethrogram (VCUG / MCU):</strong> The absolute diagnostic <span class="highlight">Gold Standard</span>.
                <br><em>Classic Findings:</em> Demonstrates an elongated, markedly dilated posterior urethra contrasting sharply with a narrow, poorly filled anterior urethra. The bladder neck often appears hypertrophied and elongated due to chronic strain, and **Vesicoureteral Reflux (VUR)** is visible in over 50% of cases.</li>
            <li><strong>Technetium-99m DMSA Cortical Renal Scintigraphy:</strong> Utilized later to evaluate functional renal parenchymal volume and identify areas of permanent focal cortical scarring.</li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Contrast the clinical utility of a MAG3 diuretic renal scan with a DMSA cortical scan in a post-ablation PUV patient.</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> A **99mTc-DMSA** scan is a structural cortical imaging agent that binds permanently to proximal convoluted tubule cells, making it ideal for evaluating **differential functional renal mass and focal parenchymal scarring**. Conversely, **99mTc-MAG3** is a dynamic clearance agent that is secreted into the urine, making it the preferred choice for measuring **split renal function and tracking real-time urinary clearance kinetics or post-obstructive delay**.</p>
                </div>
            </details>
        </div>

        <h2>4. Integrated Acute and Definitive Management Protocol</h2>

        <div class="box-red" style="background-color: #f7f9fa; border: 2px solid #003366;">
            <h3 style="margin-top:0; color:#003366; display: block; border-bottom: none;">🛠️ ACUTE STABILIZATION WORKFLOW</h3>
            <p>Before any definitive surgical procedure, the newborn must be stabilized to address systemic metabolic issues:</p>
            <ol>
                <li><strong>Decompress the Lower Tract:</strong> Insert a small, soft **5 Fr to 8 Fr pediatric feeding tube** per urethram. Standard balloon Foley catheters are avoided because the balloon can press against the bladder trigone, triggering severe detrusor spasms that worsen ureteral obstruction.</li>
                <li><strong>Correct Metabolic and Electrolyte Imbalances:</strong> Treat dehydration, metabolic acidosis, and retention of potassium or creatinine resulting from acute renal dysfunction.</li>
                <li><strong>Empiric Antimicrobial Prophylaxis:</strong> Initiate intravenous antibiotic therapy to lower the risk of ascending urosepsis.</li>
            </ol>
        </div>

        <h3>Definitive Surgical Interventions</h3>
        <ul>
            <li><strong>Primary Endoscopic Valve Ablation (Fulguration):</strong>
                <br>The primary treatment of choice once the neonate is stable. Using a specialized infant cystoscope, the surgeon visualizes the valve leaflets and cuts or disrupts them at the **5, 7, and 12 o'clock positions** using a Bugbee electrocautery electrode or holmium laser. This relieves the obstruction while preserving sphincter function.</li>
            <li><strong>Cutaneous Vesicostomy (Blocks' Procedure):</strong>
                <br>An alternative drainage strategy used when the neonate's urethra is anatomically **too small** to safely accept the cystoscope, or if the infant is too unstable to tolerate general anesthesia. The surgeon creates a temporary, direct tract from the bladder dome to the abdominal skin, allowing unobstructed urinary drainage. The valves are then ablated at a later date once the child has grown.</li>
        </ul>

        <h2>5. Long-Term Sequelae: The "Valve Bladder" &amp; Pop-Off Pathophysiology</h2>
        
        <div class="box-red">
            <h3 style="margin-top:0; color:#b71c1c; display: block; border-bottom: none;">⚠️ THE VALVE BLADDER SYNDROME</h3>
            <p>Relieving the physical urethral obstruction does not guarantee normal bladder function. High intravesical pressures during early development can cause permanent structural changes in the detrusor muscle, including **severe hypertrophy, collagen deposition, and fibrosis**.</p>
            <p>This results in a poorly compliant, high-pressure bladder that continues to cause problems after surgery. This persistent pressure can cause ongoing damage to the upper urinary tract and worsen renal failure. Management requires regular follow-up with **clean intermittent catheterization (CIC)** or anticholinergic medications to protect the kidneys.</p>
        </div>

        <h3>Pressure-Equalizing Mechanisms: VURD Syndrome</h3>
        <p><strong>VURD Syndrome</strong> stands for **V**alves, **U**nilateral **R**eflux, and **D**ysplasia. It represents an interesting physiological phenomenon where high bladder pressure causes a massive, unilateral rupture of the ureterovesical junction. </p>
        <p>This triggers high-grade, one-sided vesicoureteral reflux into that kidney, which becomes severely dysplastic and non-functional over time. However, this unilateral system acts as a **"pop-off" pressure release valve**, absorbing the high intravesical pressures and protecting the opposite kidney from damage. This mechanism often preserves overall systemic renal function.</p>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Apply knowledge of fluid dynamics, tissue compliance, and clinical embryology to answer these scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>Why does systemic hypertension often persist in pediatric patients even after successful, early endoscopic ablation of posterior urethral valves?</li>
                <li>Explain the cellular mechanism responsible for the high incidence of permanent Nephrogenic Diabetes Insipidus (NDI) in children who have been treated for severe PUV.</li>
                <li>What is the embryological justification for the clinical rule that any male child presenting with a confirmed urachal cyst must also be screened for concurrent PUV?</li>
                <li>How does the presence of "Prune Belly Syndrome" differentiate from PUV on physical examination and initial ultrasound, given that both present with megacystis and hydronephrosis?</li>
                <li>Why is an antenatal vesicoamniotic shunt placed during the second trimester associated with high rates of musculoskeletal deformities, and what specific problem is it trying to address?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>Post-ablation hypertension is primarily driven by chronic parenchymal scar formation and focal ischemia within the kidneys, caused by early, high-pressure back-flow. This ischemia leads to overactivation of the **Renin-Angiotensin-Aldosterone System (RAAS)**. Additionally, poor bladder compliance can cause intermittent spikes in intravesical pressure, contributing to ongoing renal strain and persistent renovascular hypertension.</li>
                        <li>Chronic lower tract obstruction forces high-pressure urine back into the collecting ducts, causing mechanical damage to the principal cells. This disrupts the trafficking and apical insertion of **Aquaporin-2 channels**, which are regulated by Antidiuretic Hormone (ADH). As a result, the renal collecting tubules lose their ability to concentrate urine, leading to **Nephrogenic Diabetes Insipidus**. This presents as polyuria, which can paradoxically worsen bladder distension in a child with a poorly compliant "valve bladder."</li>
                        <li>The urachus is a primitive connection that normally closes to form the median umbilical ligament. During fetal development, severe lower tract obstruction from a PUV can cause very high bladder pressures. This pressure can force open a partially closed urachus, creating a persistent path or **urachal cyst** to help relieve pressure. Therefore, any anomalous urachal structure in a male child should prompt an evaluation for an underlying bladder outlet obstruction like PUV.</li>
                        <li>While both conditions feature prominent hydronephrosis, **Prune Belly Syndrome (Eagle-Barrett Syndrome)** is characterized by a triad of deficient abdominal wall musculature, bilateral cryptorchidism, and urinary tract dilations. On examination, a Prune Belly patient has lax, wrinkled abdominal skin. On ultrasound, the prostatic urethra in Prune Belly syndrome shows a diffuse, tapered dilation due to a lack of local smooth muscle support, rather than the abrupt structural cutoff and distinct valve leaflets seen in PUV.</li>
                        <li>An antenatal vesicoamniotic shunt is intended to divert fetal urine directly into the amniotic cavity to treat severe oligohydramnios, with the goal of **preventing fatal pulmonary hypoplasia**. However, these shunts carry risks; they can migrate or become blocked, leading to uneven fluid levels. Persistent low fluid levels can compress the fetus, resulting in **Potter sequence abnormalities**, including clubbed feet, facial flattening, and severe contractures due to a lack of cushioning fluid during key developmental windows.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"rcc": {
    title: "Renal Cell Carcinoma (RCC)",
    videoUrl: "coming-soon",
    duration: "32 mins",
    notes: `
      <style>
        @media print {
            .rcc-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .rcc-notes details { display: block; }
            .rcc-notes details[open] summary ~ * { animation: none; }
        }
        .rcc-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .rcc-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .rcc-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .rcc-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .rcc-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .rcc-notes .box-red { background-color: #ffebee; border: 2px solid #c62828; padding: 20px; border-radius: 8px; margin: 25px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .rcc-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .rcc-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .rcc-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .rcc-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .rcc-notes ul, .rcc-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .rcc-notes li { margin-bottom: 0.5rem; }
        .rcc-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 3px rgba(0,0,0,0.05); }
        .rcc-notes th, .rcc-notes td { border: 1px solid #ddd; padding: 12px; text-align: left; vertical-align: top; }
        .rcc-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; letter-spacing: 0.5px; }
        .rcc-notes tr:nth-child(even) { background-color: #f9f9f9; }
      </style>

      <div class="rcc-notes">
        <h1>Renal Cell Carcinoma (RCC)</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Urological Oncology: Proximal Convoluted Tubule Oncogenesis, Angiogenic Signaling Pipelines, Paraneoplastic Architecture, and Surgical Decision Matrices
        </p>

        <h2>1. Introduction &amp; Histopathological Subtypes</h2>
        <p><strong>Renal Cell Carcinoma (RCC)</strong> is a primary malignant adenocarcinoma stemming from the specialized epithelial linings of the renal tubules. It accounts for more than 90% of all primary adult renal neoplasms, typically presenting between the 5th and 7th decades of life with a prominent male predilection ($2:1$).</p>
        
        <h3>Aetiology and Molecular Pathogenesis</h3>
        <ul>
            <li><strong>Tobacco Smoke Exposure:</strong> The most significant avoidable epidemiological risk factor, doubling the individual relative risk via cumulative carcinogen exposure.</li>
            <li><strong>Obesity and Systemic Hypertension:</strong> Independent metabolic stressors linked to alterations in metabolic pathways and chronic tissue hypoxia.</li>
            <li><strong>Acquired Cystic Kidney Disease (ACKD):</strong> Arises in patients on long-term maintenance hemodialysis; carries a 30-fold increased risk of malignant transformation within cystic walls.</li>
            <li><strong>Von Hippel-Lindau (VHL) Syndrome:</strong> An autosomal dominant tumor predisposition syndrome caused by a deletion or inactivation of the VHL tumor suppressor gene on **Chromosome 3p25**. This loss halts the targeted ubiquitination and degradation of **Hypoxia-Inducible Factor 1-alpha (HIF-1$\alpha$)**, driving unchecked transcription of pro-angiogenic factors like **VEGF** and **PDGF**.</li>
        </ul>

        

        <h3>Histopathological Classification</h3>
        <table>
            <thead>
                <tr>
                    <th>Subtype Variant</th>
                    <th>Prevalence</th>
                    <th>Nephron Site of Origin</th>
                    <th>Cytomorphology &amp; Molecular Markers</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Clear Cell Carcinoma</strong></td>
                    <td>75–80%</td>
                    <td>Proximal Convoluted Tubule (PCT)</td>
                    <td>Classic sheets of cells with empty, clear cytoplasm packed with **glycogen and lipids** dissolved during processing. Highly linked to sporadic or syndromic **VHL/3p alterations**; intensely hypervascular.</td>
                </tr>
                <tr>
                    <td><strong>Papillary Carcinoma</strong></td>
                    <td>10–15%</td>
                    <td>Distal Convoluted Tubule (DCT)</td>
                    <td>Features an growth architecture of papillae supported by fibrovascular cores containing foamy macrophages. Frequently linked to activations of the **MET proto-oncogene**.</td>
                </tr>
                <tr>
                    <td><strong>Chromophobe Carcinoma</strong></td>
                    <td>5%</td>
                    <td>Collecting Duct (Intercalated cells)</td>
                    <td>Large, pale polygonal cells showing distinct, prominent cell membranes and characteristic **perinuclear halos**. Stains positively with Hale's colloidal iron; carries the most favorable stage-matched prognosis.</td>
                </tr>
            </tbody>
        </table>

        <h2>2. Clinical Triad &amp; Systemic Paraneoplastic Signatures</h2>
        
        <div class="box-red">
            <h3 style="margin-top:0; color:#b71c1c; display: block; border-bottom: none;">🚨 THE CLASSIC "TOO LATE" TRIAD</h3>
            <p>The historical presentation triad—**Macroscopic Hematuria + Flank/Loin Pain + Palpable Abdominal Mass**—is observed in fewer than 10–15% of patients today. Its presence is an ominous clinical sign indicating a massive local tumor burden or distant metastatic spread.</p>
            <p><em>Modern Presentation Paradigm:</em> Over 60% of cases are diagnosed as asymptomatic **incidentalomas** via routine, unrelated transabdominal ultrasonography or CT imaging.</p>
        </div>

        <h3>Paraneoplastic Syndromes ("The Internist's Tumor")</h3>
        <p>Because it originates from endocrinologically responsive renal tubular epithelium, RCC often synthesizes and secretes a variety of ectopic polypeptide hormones and inflammatory cytokines:</p>

        <table>
            <thead>
                <tr>
                    <th>Paraneoplastic Syndrome</th>
                    <th>Secretory Mediator / Mechanism</th>
                    <th>Clinical Manifestations &amp; Diagnostic Impact</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Stauffer's Syndrome</strong></td>
                    <td>Tumor-derived **Interleukin-6 (IL-6)** production</td>
                    <td>Non-metastatic hepatic dysfunction presenting with elevated Alkaline Phosphatase (ALP), prolonged prothrombin time, and hepatomegaly, **in the absence of liver metastases**. It is **reversible**, resolving completely following a radical nephrectomy.</td>
                </tr>
                <tr>
                    <td><strong>Secondary Polycythemia</strong></td>
                    <td>Ectopic **Erythropoietin (EPO)** synthesis</td>
                    <td>Elevated hematocrit and hemoglobin profiles. (Note: Normocytic anemia driven by chronic inflammation remains a more common finding overall).</td>
                </tr>
                <tr>
                    <td><strong>Humoral Hypercalcemia</strong></td>
                    <td>**Parathyroid Hormone-Related Protein (PTH-rP)**</td>
                    <td>Elevated serum ionized calcium levels mimicking primary hyperparathyroidism, independent of osteolytic bony metastases.</td>
                </tr>
                <tr>
                    <td><strong>Systemic Hypertension</strong></td>
                    <td>Ectopic **Renin** / Renal artery compression</td>
                    <td>Activation of the systemic RAAS cascade via tumor-mediated renin production or direct mechanical compression of neighboring normal parenchymal arteries.</td>
                </tr>
                <tr>
                    <td><strong>Ectopic Cushing's</strong></td>
                    <td>Adrenocorticotropic Hormone (**ACTH**)</td>
                    <td>Hypokalemic metabolic alkalosis, proximal muscle wasting, and rapid-onset truncal obesity.</td>
                </tr>
            </tbody>
        </table>

        <h3>Hydrodynamic Vascular Complications: Acute Varicocele</h3>
        <p>A rapidly developing, non-decompressing varicocele is a key clinical sign of tumor extension into the venous system:</p>
        <ul>
            <li><strong>Anatomical Preference:</strong> Occurs almost exclusively on the **left side**. This is because the left gonadal vein drains directly into the left renal vein at a sharp 90-degree angle, whereas the right gonadal vein drains obliquely straight into the inferior vena cava (IVC).</li>
            <li><strong>Pathophysiology:</strong> An expanding RCC tumor thrombus invades through the renal vein wall, creating a mechanical block at the outlet of the left gonadal vein.</li>
            <li><strong>Physical Sign:</strong> Unlike benign primary varicoceles caused by valvular insufficiency, **a secondary tumor-induced varicocele does not decompress or flatten when the patient lies flat (supine position)**.</li>
        </ul>

        <h2>3. Differential Diagnosis of Solid Renal Masses</h2>
        <ul>
            <li><strong>Angiomyolipoma (AML):</strong> A benign mesenchymal triad tumor comprising blood vessels, smooth muscle, and adipose tissue. It is highly associated with **Tuberous Sclerosis**. 
                <br><em>Radiological Identification:</em> Easily diagnosed on non-contrast CT by finding areas of fat density showing **negative Hounsfield units ($-10\text{ to }-100\text{ HU}$)**.</li>
            <li><strong>Oncocytoma:</strong> A benign renal epithelial tumor that is difficult to distinguish from RCC pre-operatively. Central stellate scars or "spoke-wheel" arterial configurations on angiography suggest this diagnosis, but final confirmation requires histopathological review.</li>
            <li><strong>Bosniak Cystic Classification:</strong> A validated CT paradigm used to categorize renal cysts from Category I (simple benign cyst, 0% malignant risk) to Category IV (solid, thick-walled complex cystic mass, $>90\%$ malignant risk requiring surgical resection).</li>
        </ul>

        <h2>4. Diagnostic Imaging &amp; Evaluation</h2>
        <ul>
            <li><strong>Triphasic Contrast-Enhanced CT (CECT) of the Abdomen and Pelvis:</strong> The primary diagnostic standard. RCC presents as a hypervascular, heterogeneously enhancing solid mass during the early corticomedullary/arterial phase, followed by rapid contrast washout. CECT is essential for defining borders, looking for fat invasion, mapping regional adenopathy, and evaluating for vascular invasion.</li>
            <li><strong>Magnetic Resonance Imaging (MRI):</strong> Reserved for patients with iodinated contrast allergies, severe chronic kidney disease, or to precisely trace the upper limit of an IVC tumor thrombus.</li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Why is a percutaneous needle core biopsy strictly avoided for an operable, radiologically classic renal mass?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> A percutaneous biopsy is avoided due to the risk of **needle tract seeding** (depositing tumor cells along the biopsy path) and the risk of severe retroperitoneal hemorrhage from this highly vascular tumor. Because modern triphasic CT imaging features are highly specific, management decisions are based on imaging alone. Biopsies are reserved for confirming tissue type in unresectable metastatic cases to guide systemic therapy, or when a renal abscess or lymphoma is suspected.</p>
                </div>
            </details>
        </div>

        <h2>5. Multi-Stage Surgical &amp; Targeted Management</h2>
        <p>RCC is highly resistant to traditional cytotoxic chemotherapies and external beam radiation. Consequently, treatment relies on surgical resection and targeted molecular therapies.</p>

        

        <h3>A. Management of Localized Disease</h3>
        <ul>
            <li><strong>Partial Nephrectomy (Nephron-Sparing Surgery):</strong> The absolute **Gold Standard for tumors $\le 4\text{ cm}$ (Stage T1a)**, and increasingly utilized for select tumors up to 7 cm (T1b). The surgeon resects the tumor mass along with a thin rim of normal parenchymal margin, preserving maximum functional nephron mass and protecting long-term cardiovascular health.</li>
            <li><strong>Radical Nephrectomy:</strong> Indicated for large, central tumors ($>7\text{ cm}$, Stage T2 and above) that are not suitable for a partial approach. This involves an en-bloc resection encompassing the **kidney, homolateral adrenal gland (though frequently spared if the tumor is polar), the intact Gerota’s fascia envelope, the proximal ureter, and regional lymphadenectomy**.</li>
        </ul>

        <h3>B. Management of Advanced and Metastatic Disease (Stage IV)</h3>
        <ul>
            <li><strong>Cytoreductive Nephrectomy:</strong> In patients with resectable primary tumors and synchronous oligometastatic disease, removing the primary kidney mass ("cytoreduction") helps reduce systemic immunosuppressive cytokine production (such as IL-6) and improves the survival benefits of subsequent systemic treatments.</li>
            <li><strong>First-Line Targeted Tyrosine Kinase Inhibitors (TKIs):</strong> Small-molecule inhibitors like **Sunitinib, Pazopanib, and Cabozantinib**. These agents block the intracellular ATP-binding domains of **VEGFR and PDGFR**, stopping the tumor's angiogenic pathway.</li>
            <li><strong>Immune Checkpoint Inhibitors (ICIs):</strong> Monoclonal antibodies like **Nivolumab (anti-PD-1) and Ipilimumab (anti-CTLA-4)**. Dual immunotherapy or combinations of an ICI with a TKI are now the standard first-line treatment for intermediate- and poor-risk metastatic clear cell RCC.</li>
            <li><strong>mTOR Signaling Path Inhibitors:</strong> Agents like **Temsirolimus and Everolimus** block the downstream mTOR complex, halting protein synthesis and cell cycle progression in tumors resistant to initial TKI therapy.</li>
        </ul>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Synthesize microvascular anatomy, tumor genetics, and targeted pharmacology to address these scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>Explain the mechanistic link between clear cell RCC pathology and the development of the "spoke-wheel" hypervascular profile seen on arterial-phase CT.</li>
                <li>How does the classification of an IVC tumor thrombus (Levels I through IV) alter the surgical team composition and exposure strategy?</li>
                <li>A patient with known metastatic RCC develops severe headaches, and a brain MRI reveals a solitary enhancing lesion. Why is standard external beam radiation therapy avoided, and what is the preferred alternative?</li>
                <li>What unique paraneoplastic manifestation is caused by tumor production of 1,25-dihydroxyvitamin D3 in RCC, and how do you differentiate it from PTH-rP mediated disease?</li>
                <li>Why do mutations in the *MET* oncogene specifically predispose patients to the papillary histopathological subtype of RCC rather than the clear cell subtype?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>In clear cell RCC, inactivation of the **VHL gene** causes a continuous accumulation of **HIF-1$\alpha$**. This protein acts as a transcription factor that drives the continuous secretion of **Vascular Endothelial Growth Factor (VEGF)** into the local tissue. This high concentration of VEGF triggers rapid, disorganized angiogenesis, producing fragile, dilated, and hypervascular capillary networks that enhance intensely during the early arterial phase of a contrast CT scan.</li>
                        <li>The level of an Inferior Vena Cava (IVC) thrombus dictates the surgical limits: **Level I** (renal vein adjacent only) and **Level II** (infrahepatic IVC) can be managed via standard transabdominal retroperitoneal exposure. **Level III** (retrohepatic/suprahepatic IVC below the diaphragm) requires hepatic mobilization and vascular control of the porta hepatis. **Level IV** (supradiaphragmatic or intracardiac thrombus extending into the right atrium) requires a coordinated team with a cardiothoracic surgeon to perform a median sternotomy and initiate **cardiopulmonary bypass with deep hypothermic circulatory arrest** to safely retrieve the thrombus without risking fatal pulmonary embolization.</li>
                        <li>RCC is intrinsically **radio-resistant** due to robust DNA repair mechanisms and high levels of intracellular antioxidant defenses, making standard fractionated external beam radiation therapy ineffective for intracranial control. The preferred modality is **Stereotactic Radiosurgery (SRS)**, such as Gamma Knife. SRS delivers a highly focused, single fraction of high-dose radiation that destroys the tumor's microvasculature, bypassing its inherent cellular radio-resistance.</li>
                        <li>Ectopic expression of functional **1-alpha-hydroxylase** by the tumor converts 25-hydroxyvitamin D into active **1,25-dihydroxyvitamin D3 (Calcitriol)**, causing hypercalcemia via increased intestinal calcium absorption. This can be differentiated from PTH-rP mediated hypercalcemia by checking serum labs: calcitriol-mediated disease shows **suppressed PTH, suppressed PTH-rP, and markedly elevated levels of 1,25-(OH)2D3**, along with elevated serum phosphate levels (whereas PTH-rP decreases renal phosphate reabsorption).</li>
                        <li>The *MET* proto-oncogene encodes the cell-surface tyrosine kinase receptor for **Hepatocyte Growth Factor (HGF)**. Activating mutations or duplications of chromosome 7 (where *MET* resides) cause continuous, ligand-independent activation of this specific receptor pathway. This signaling is a key driver for the formation of the **papillary growth architecture** and the recruitment of foamy macrophages within the fibrovascular cores, a structural pattern distinct from the VHL-driven lipid-glycogen pathways of clear cell carcinoma.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},



"adpkd": {
    title: "Autosomal Dominant Polycystic Kidney Disease (ADPKD)",
    videoUrl: "https://www.youtube.com/embed/RMCEzBXg8FY",
    duration: "20 mins",
    notes: `
      <style>
        @media print {
            .adpkd-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .adpkd-notes details { display: block; }
            .adpkd-notes details[open] summary ~ * { animation: none; }
        }
        .adpkd-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .adpkd-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .adpkd-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .adpkd-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .adpkd-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .adpkd-notes .box-red { background-color: #ffebee; border: 2px solid #c62828; padding: 20px; border-radius: 8px; margin: 25px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .adpkd-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .adpkd-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .adpkd-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .adpkd-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .adpkd-notes ul, .adpkd-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .adpkd-notes li { margin-bottom: 0.5rem; }
        .adpkd-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 3px rgba(0,0,0,0.05); }
        .adpkd-notes th, .adpkd-notes td { border: 1px solid #ddd; padding: 12px; text-align: left; vertical-align: top; }
        .adpkd-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; letter-spacing: 0.5px; }
        .adpkd-notes tr:nth-child(even) { background-color: #f9f9f9; }
      </style>

      <div class="adpkd-notes">
        <h1>Autosomal Dominant Polycystic Kidney Disease (ADPKD)</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Nephrology &amp; Renal Transplantation: Ciliopathy Cistogenesis, Intracranial Aneurysms, and V2-Receptor Targeted Therapeutics
        </p>

        <h2>1. Introduction &amp; Molecular Genetics</h2>
        <p><strong>Autosomal Dominant Polycystic Kidney Disease (ADPKD)</strong> is the most common life-threatening inherited renal disorder, categorized fundamentally as a <strong>ciliopathy</strong>. Defective ciliary signaling triggers unchecked focal epithelial cell proliferation, fluid secretion, and extracellular matrix remodeling, turning normal nephrons into massive fluid-filled cysts that progressively destroy the surrounding renal parenchyma.</p>
        
        <p>The condition shows high penetrance but variable expressivity, driven by mutations in two primary genes:</p>

        <table>
            <thead>
                <tr>
                    <th>Gene</th>
                    <th>Chromosome Locus</th>
                    <th>Encoded Protein</th>
                    <th>Frequeuency</th>
                    <th>Phenotypic Progression &amp; Clinical Prognosis</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>PKD1</strong></td>
                    <td><span class="highlight">16p13.3</span></td>
                    <td>Polycystin-1 (G-protein-coupled receptor analog)</td>
                    <td>~85%</td>
                    <td><strong>Severe:</strong> Rapid cyst kinetics, earlier structural disruption, and progression to End-Stage Renal Disease (ESRD) at a median age of ~54 years.</td>
                </tr>
                <tr>
                    <td><strong>PKD2</strong></td>
                    <td><span class="highlight">4q21</span></td>
                    <td>Polycystin-2 (Calcium-permeable transient receptor potential channel)</td>
                    <td>~15%</td>
                    <td><strong>Indolent:</strong> Slower cyst expansion, preserved tissue architecture for longer, and progression to ESRD at a median age of ~74 years.</td>
                </tr>
            </tbody>
        </table>

        <h2>2. Clinical Presentation &amp; Hemodynamic Features</h2>
        <p>Symptoms typically present between the <strong>3rd and 5th decades of life</strong>, as the total kidney volume (TKV) expands enough to trigger secondary complications.</p>
        
        

        <ul>
            <li><strong>Bilateral Abdominal Masses:</strong> Palpation reveals massive, asymmetric, irregular, and knobby ("bunch of grapes") non-tender kidneys that fill the flank areas.</li>
            <li><strong>Chronic and Acute Nociception:</strong> Chronic pain presents as a dull, heavy dragging sensation in the loins or back due to mechanical capsular stretch. Sudden, sharp pain indicates an acute event: **intracystic hemorrhage**, **acute cyst infection (pyocyst)**, or **obstructing nephrolithiasis** (uric acid or calcium oxalate).</li>
            <li><strong>Secondary Hypertension:</strong> The **earliest clinical sign**, often appearing before any drop in GFR. Expanding cysts compress intrarenal arterioles, causing localized tissue ischemia. This triggers the abnormal activation of the **Renin-Angiotensin-Aldosterone System (RAAS)**.</li>
            <li><strong>Gross or Microscopic Hematuria:</strong> Occurs when a cyst wall ruptures under high hydrostatic pressure into the adjacent renal collecting system.</li>
            <li><strong>Progressive Renal Insufficiency:</strong> A steady, linear decline in glomerular filtration rate (GFR) due to surrounding parenchymal compression, interstitial fibrosis, and nephron apoptosis.</li>
        </ul>

        <h2>3. Systemic &amp; Extra-Renal Manifestations</h2>
        <p>ADPKD is a generalized systemic disorder affecting vascular smooth muscle cells and connective tissue matrices throughout the body.</p>
        <ul>
            <li><strong>Hepatic Cysts (Polycystic Liver Disease):</strong> The most common extra-renal manifestation, appearing in over 70% of patients. It scales with age and is more extensive in females (potentiated by estrogens). Hepatic synthetic function remains normal (normal LFTs), but massive organ enlargement can cause mass-effect symptoms.</li>
            <li><strong>Cardiovascular Abnormalities:</strong> Connective tissue defects lead to **Mitral Valve Prolapse (MVP)** in up to 25% of patients, alongside aortic root dilation and aortic regurgitation.</li>
            <li><strong>Gastrointestinal Diverticula:</strong> Patients have a significantly higher incidence of colonic diverticular disease and face an elevated risk of diverticulitis and perforation if they progress to ESRD.</li>
            <li><strong>Pancreatic, Splenic, and Arachnoid Cysts:</strong> Typically found incidentally on abdominal and cranial imaging.</li>
        </ul>

        <div class="box-red">
            <h3 style="margin-top:0; color:#b71c1c; display: block; border-bottom: none;">🚨 CRITICAL VASCULAR ALERTS: Intracranial Berry Aneurysms</h3>
            <ul>
                <li>Saccular <strong>"Berry" Aneurysms</strong> occur within the Circle of Willis in approximately 5–10% of asymptomatic ADPKD patients, rising to **20–25% in individuals with a positive family history**.</li>
                <li><strong>Catastrophic Sequela:</strong> Aneurysmal rupture leads to a high-mortality **Subarachnoid Hemorrhage (SAH)**.</li>
                <li><strong>Screening Protocols:</strong> Routine screening using non-invasive **Magnetic Resonance Angiography (MRA)** is not universally indicated. It is restricted to high-risk groups: patients with a family history of aneurysms/SAH, those preparing for major elective surgeries (e.g., renal transplantation), high-risk occupations (e.g., airline pilots), or those presenting with new neurological symptoms.</li>
                <li><em>Clinical Red Flag:</em> Any ADPKD patient reporting a sudden-onset, severe headache ("thunderclap headache") requires immediate non-contrast head CT and emergent neurosurgical assessment.</li>
            </ul>
        </div>

        <h2>4. Diagnostic &amp; Screening Criteria</h2>
        <ul>
            <li><strong>Ultrasonography (USG):</strong> The primary clinical imaging tool used for screening at-risk individuals based on age-dependent **Pei-Ravine Criteria** (optimized for patients with a known family history):
                <ul>
                    <li>**Age 15 to 29:** $\ge 3$ unilateral or bilateral renal cysts.</li>
                    <li>**Age 30 to 59:** $\ge 2$ cysts in **each** kidney.</li>
                    <li>**Age $\ge$ 60:** $\ge 4$ cysts in **each** kidney.</li>
                </ul>
            </li>
            <li><strong>Computed Tomography (CT) / Magnetic Resonance Imaging (MRI):</strong> More sensitive for detecting micro-cysts ($< 2\text{ mm}$). MRI is used to measure **Height-Adjusted Total Kidney Volume (Ht-TKV)**, a key biomarker under the *Mayo Classification* to predict rapid GFR decline.</li>
            <li><strong>Molecular Genetic Testing:</strong> Reserved for ambiguous imaging results, younger potential living-related kidney donors, or pre-implantation genetic diagnosis.</li>
        </ul>

        <h2>5. Multidisciplinary Management &amp; Disease Modification</h2>
        <p>Treatment focuses on lifestyle modifications, strict blood pressure control, targeted molecular agents to slow cyst growth, and renal replacement therapy when necessary.</p>

        <h3>A. Targeted Medical &amp; Pharmacological Management</h3>
        <ul>
            <li><strong>Strict Hemodynamic Regulation:</strong> Aggressive blood pressure target ($\le 120/80\text{ mm Hg}$) using **ACE Inhibitors (e.g., Lisinopril) or Angiotensin II Receptor Blockers (ARBs)** as first-line options. These blunt the overactive intrarenal RAAS, lowering cardiovascular risk and delaying the onset of interstitial fibrosis.</li>
            <li><strong>Molecular Therapy via Tolvaptan:</strong> A selective oral **Vasopressin V2-Receptor Antagonist**.
                <br><em>Mechanism of Action:</em> Blocks vasopressin binding on the basolateral membrane of principal cells in the collecting duct. This lowers intracellular cyclic adenosine monophosphate ($cAMP$) levels, inhibiting epithelial cell proliferation and fluid secretion to slow the growth of Total Kidney Volume and preserve GFR.
                <br><em>Prescribing Criteria &amp; Risks:</em> Indicated for adult patients with Mayo Classes 1C, 1D, and 1E who are at risk for rapid disease progression. Notable side effects include profound **aquadiuresis** (polyuria, polydipsia) and a risk of **idiosyncratic drug-induced liver injury**, requiring mandatory monthly liver function testing (LFT monitoring).</li>
        </ul>

        <h3>B. Renal Replacement Strategies</h3>
        <ul>
            <li><strong>Dialysis Modalities:</strong> Both hemodialysis and peritoneal dialysis are effective. Peritoneal dialysis remains an option unless huge kidneys physically limit the intra-abdominal space.</li>
            <li><strong>Allogeneic Renal Transplantation:</strong> The definitive treatment option. ADPKD does not recur in the transplanted graft.</li>
        </ul>

        <h3>C. Surgical Selection Criteria for Native Nephrectomy</h3>
        <p><em>Native kidneys are heavily vascularized and are left in place to maintain residual erythropoietin production. Pre-transplant bilateral nephrectomy is never routine and is performed only for specific clinical indications:</em></p>
        <ol>
            <li><strong>Space Constraints:</strong> Massive kidneys that physically extend down into the iliac fossae, leaving no room to safely implant the donor allograft.</li>
            <li><strong>Refractory Pyocyst:</strong> Severe, recurrent cyst infections with abscess formation that are resistant to lipid-soluble antibiotics (like Fluoroquinolones or Bactrim) and percutaneous drainage.</li>
            <li><strong>Life-Threatening Hemorrhage:</strong> Intractable, severe hematuria requiring recurrent blood transfusions and failing angiographic embolization.</li>
            <li><strong>Severe Structural Mass Effect:</strong> Extreme cachexia and malnutrition caused by chronic, severe gastric compression from massive organs.</li>
        </ol>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Synthesize intracellular signaling pathways, structural mechanics, and genetic principles to analyze these clinical scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>Explain the genetic concept of the "cellular recessive mechanism" (two-hit hypothesis) in the context of cyst formation in ADPKD.</li>
                <li>Why are standard beta-blockers or loop diuretics less ideal than ACE inhibitors or ARBs for managing hypertension in an ADPKD patient?</li>
                <li>An ADPKD patient presents with a high fever, leukocytosis, and left lower quadrant abdominal pain. LFTs and urinalysis are normal. What broad-spectrum antibiotic class is preferred, and what structural complication must be investigated?</li>
                <li>Why is the clinical procedure known as "Rovsing's operation" (surgical de-roofing of cysts) now considered obsolete and potentially harmful?</li>
                <li>How does tracking Height-Adjusted Total Kidney Volume (Ht-TKV) via MRI help clinicians choose candidates for early Tolvaptan therapy?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>Although ADPKD is inherited as an autosomal dominant trait (where inheriting one mutated allele from a parent is sufficient to cause the disease), cyst development at the cellular level requires a **somatic "second hit"** or mutation in the remaining normal allele within an epithelial cell. This loss of heterozygosity disrupts the polycystin-1/polycystin-2 complex, causing that individual cell to proliferate and form a cyst.</li>
                        <li>Hypertension in ADPKD is driven by localized tissue ischemia that overactivates the intrarenal Renin-Angiotensin-Aldosterone System (RAAS). **ACE inhibitors and ARBs directly block this pathway**, reducing intrarenal vascular resistance and protecting against downstream interstitial fibrosis. Beta-blockers or diuretics do not address this primary ischemic mechanism and can cause reflex sympathetic activation or worsen electrolyte shifts.</li>
                        <li>This patient likely has an **infected renal cyst (pyocyst) or acute colonic diverticulitis**, both of which have a higher incidence in ADPKD. Treatment requires lipophilic antibiotics that can effectively penetrate the fibrous, avascular cyst walls, such as **fluoroquinolones (Ciprofloxacin) or third-generation cephalosporins**. An urgent abdominal CT or MRI should be ordered to rule out a localized abscess or diverticular perforation.</li>
                        <li>Surgical de-roofing of cysts provides only temporary symptomatic relief. Cysts recur rapidly from deeper nephron layers, and the procedure does not change the rate of GFR decline. Additionally, the surgery causes extensive retroperitoneal adhesions and inflammation, which **significantly complicates or prevents future renal transplantation**.</li>
                        <li>Ht-TKV is the primary biomarker used in the **Mayo Clinic Classification (Classes 1A–1E)** to chart disease progression. Patients classified into classes 1C, 1D, and 1E show rapid volume expansion over time, which correlates with an earlier drop in GFR. Using MRI to track Ht-TKV allows clinicians to identify these high-risk patients early, ensuring that **Tolvaptan therapy is started when it can maximize parenchymal preservation**.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"torsion-testis": {
    title: "Testicular Torsion & Acute Scrotum",
    videoUrl: "coming-soon",
    duration: "22 mins",
    notes: `
      <style>
        @media print {
            .ttor-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .ttor-notes details { display: block; }
            .ttor-notes details[open] summary ~ * { animation: none; }
        }
        .ttor-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .ttor-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .ttor-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .ttor-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .ttor-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .ttor-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background-color: #fff; }
        .ttor-notes th, .ttor-notes td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; vertical-align: top; }
        .ttor-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; }
        .ttor-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .ttor-notes .box-red { background-color: #ffebee; border: 2px solid #c62828; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .ttor-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .ttor-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .ttor-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .ttor-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .ttor-notes ul, .ttor-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .ttor-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="ttor-notes">
        <h1>Testicular Torsion &amp; Acute Scrotum</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Surgical Emergency Curriculum: Ischemic Kinetics, Clinical Syndromes, and Salvage Maneuvers
        </p>

        <h2>1. Pathological and Anatomical Predisposing Factors</h2>
        <p>Testicular torsion is a mechanical surgical emergency caused by the axial rotation of the spermatic cord around its own longitudinal axis. This rotation cuts off the arterial blood supply, leading to rapid parenchymal ischemia and necrosis if left untreated.</p>

        <ul>
            <li><strong>Anatomical Catalyst:</strong> <span class="highlight">Bell Clapper Deformity</span>.
                <ul>
                    <li>*Normal Variant:* The parietal layer of the tunica vaginalis attaches securely to the posterior and lateral surfaces of the testis and epididymis. This anchors the organ firmly to the posterior scrotal wall, preventing rotation.</li>
                    <li>*The Pathological Deformity:* The tunica vaginalis inserts abnormally high up onto the distal spermatic cord, completely enclosing the testis, epididymis, and cord structures.</li>
                    <li>*Pathophysiology:* The testis is left unsupported posteriorly, allowing it to hang freely within the vaginal cavity like a "clapper inside a bell." This freedom of movement permits spontaneous rotation around the axis of the cord.</li>
                </ul>
            </li>
            
            <li><strong>Age Demographics:</strong> Peak incidence occurs during early adolescence (12–18 years), driven by rapid testicular growth and asymmetric changes in cremasteric muscle tone during puberty. A smaller secondary peak occurs during the neonatal period, typically presenting as *extravaginal torsion* (where the entire tunic and cord twist before anchoring securely within the scrotum).</li>
            <li><strong>Cryptorchidism:</strong> An undescended or late-descending testis displays structural anchoring deformities and higher baseline mobility, making it significantly more prone to axial torsion within the inguinal canal or retroperitoneum.</li>
        </ul>

        <h2>2. Clinical Features of the Acute Scrotum</h2>
        <ul>
            <li><strong>Pain Progression:</strong> Classic presentation features a sudden, severe, unremitting, unilateral scrotal pain. This pain often awakens the patient from deep sleep and can radiate along the course of the ilioinguinal and genitofemoral nerves to the ipsilateral groin or lower abdominal quadrants.</li>
            <li><strong>Vagal Activation Reflexes:</strong> The intense visceral pain from gonadal stretch receptors triggers prominent vagal stimulation, leading to acute nausea and persistent vomiting. The absence of lower urinary tract symptoms (such as dysuria, urgency, or frequency) helps differentiate this from an active urinary tract infection.</li>
            <li><strong>Physical Diagnostic Signs:</strong>
                <ul>
                    <li><strong>Spatial Displacement:</strong> The affected gonad presents as a **High-Riding Testis**. This upward migration occurs because the mechanical twisting shortens the spermatic cord. Additionally, the testis may rotate into a horizontal position, a presentation known as **Deming's Sign**.</li>
                    <li><strong>Reactive Tissue Edema:</strong> Rapidly progressive edema, erythema, and induration develop across the scrotal wall, obscuring normal structural landmarks on palpation.</li>
                    <li><strong>Neurological Assessment:</strong> The <span class="highlight">ABSENT CREMASTERIC REFLEX</span> is the most sensitive physical examination finding. Stroking the skin of the upper medial thigh fails to elicit contraction of the cremasteric muscle or elevate the ipsilateral testis, indicating localized nerve and tissue ischemia.</li>
                </ul>
            </li>
        </ul>

        <div class="box-red">
            <h3 style="margin-top:0; color:#b71c1c;">⏳ The Golden Period: The 6-Hour Salvage Window</h3>
            <p><strong>"Time is Testis." Gonadal tissue viability is directly linked to the duration and severity of the mechanical occlusion.</strong></p>
            <ul>
                <li><strong>Ischemic Kinetics:</strong> Irreversible hemorrhagic infarction and necrosis of the germinal epithelium begin within <strong>6 hours</strong> of cord twisting ($&gt;360^\circ$ rotation).</li>
                <li><strong>Salvage Probabilities:</strong> Surgical detorsion achieved within 6 hours of pain onset boasts a gonadal survival rate of **$&gt;90\%$**. This drops sharply to roughly 50% at 12 hours, and falls below **10% after 24 hours**.</li>
                <li><strong>Clinical Rule:</strong> If history and physical exam strongly suggest torsion, **skip delaying imaging studies and proceed directly to immediate surgical exploration**. Do not waste time obtaining an ultrasound if it risks pushing the patient past the 6-hour salvage window.</li>
            </ul>
        </div>

        <h2>3. Differential Diagnosis: Testicular Torsion vs. Acute Epididymo-orchitis</h2>
        <p>Accurately distinguishing between these two conditions prevents unnecessary surgical procedures for medical issues while avoiding catastrophic delays in managing an ischemic emergency.</p>

        <table>
            <thead>
                <tr>
                    <th>Clinical Parameter</th>
                    <th>Ischemic Torsion Testis Pathway</th>
                    <th>Infectious Epididymo-orchitis Pathway</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Onset Profile</strong></td>
                    <td>Sudden, explosive, unremitting pain.</td>
                    <td>Gradual, step-wise crescendo over several days.</td>
                </tr>
                <tr>
                    <td><strong>Age Target</strong></td>
                    <td>Common in adolescents and young adults ($&lt;20$ years).</td>
                    <td>Common in sexually active adults or older men with bladder outlet obstruction.</td>
                </tr>
                <tr>
                    <td><strong>Urinary Signs &amp; Fever</strong></td>
                    <td>Absent. Systemic fever is rare during the initial hours.</td>
                    <td>High fever, chills, dysuria, frequency, and pyuria are common.</td>
                </tr>
                <tr>
                    <td><strong>Prehn's Diagnostic Sign</strong></td>
                    <td>**Negative**: Manual elevation of the scrotum toward the symphysis pubis provides no relief or actively worsens the pain due to continued cord twisting.</td>
                    <td>**Positive**: Manual elevation of the scrotum reduces traction on the inflamed structures, providing noticeable relief.</td>
                </tr>
                <tr>
                    <td><strong>Cremasteric Muscle Reflex</strong></td>
                    <td>**Consistently Absent**.</td>
                    <td>**Intact and Normal**.</td>
                </tr>
                <tr>
                    <td><strong>Color Doppler Imaging</strong></td>
                    <td><span class="highlight">Absent or significantly reduced</span> arterial flow into the testicular parenchyma.</td>
                    <td>**Markedly increased blood flow (Hyperemia)** throughout the inflamed epididymis and testis.</td>
                </tr>
            </tbody>
        </table>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What is the clinical presentation and management of the "Blue Dot Sign"?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> The **Blue Dot Sign** is a pathognomonic finding for **Torsion of the Appendix Testis (Hydatid of Morgagni)**, a benign embryonic remnant of the Müllerian duct. It presents as a focal, point-tender nodule near the upper pole of the testis that shows a blue discoloration through thin scrotal skin. Unlike true testicular torsion, the cremasteric reflex remains intact and Doppler ultrasound confirms normal blood flow to the testis. Management is conservative, using bed rest, scrotal support, and NSAIDs. Surgery is only required if the diagnosis is uncertain or if pain remains unremitting.</p>
                </div>
            </details>
        </div>

        <h2>4. Management and Surgical Principles</h2>

        <h3>A. Diagnostic Choice</h3>
        <ul>
            <li><strong>High-Resolution Color Doppler Ultrasonography:</strong> The gold-standard imaging modality when immediately available.
                <ul>
                    <li>*Key Findings:* Confirms complete absence of intraparenchymal diastolic and systolic blood flow. It may also show the pathognomonic **"Whirlpool Sign"**, which visualizes the spiral twisting of the spermatic cord structures.</li>
                </ul>
            </li>
        </ul>

        <h3>B. Therapeutic Order of Interventions</h3>
        <ol>
            <li><strong>Manual Detorsion (Temporary Bedside Salvage):</strong>
                <ul>
                    <li>Attempted at the bedside only if the surgical suite is not immediately available or if transfer is delayed.</li>
                    <li><strong>Technique ("Open the Book"):</strong> Most testicles rotate from a lateral-to-medial direction during a torsion event. The surgeon stands at the patient's feet and rotates the affected testis outward—from **Medial to Lateral** (e.g., clockwise for the left testis, counterclockwise for the right).</li>
                    <li>*Success Indicators:* Immediate reduction in pain, lower position of the testis in the scrotum, and return of arterial flow on Doppler. *Note: Successful manual detorsion is a temporary measure and does not replace the need for definitive bilateral surgical fixation.*</li>
                </ul>
            </li>
            <li><strong>Definitive Surgical Exploration (Scrotal Exploration):</strong>
                <ul>
                    <li><strong>Operative Approach:</strong> A midline scrotal raphe or transverse hemiscrotal incision is made to open the dartos and tunica vaginalis layers.</li>
                    <li><strong>Revascularization Phase:</strong> The spermatic cord is untwisted, and the ischemic testis is wrapped in warm saline-soaked gauze sponges for 10–15 minutes while the patient is preoxygenated with 100% oxygen.</li>
                    <li><strong>Viability Assessment:</strong> The surgeon checks for returning pink parenchymal color and active arterial bleeding following a superficial tunica albuginea needle pin-prick.</li>
                    <li><strong>Scenario A (Parenchyma Viable):</strong> Perform a **Bilateral Orchidopexy**. The treated testis and the normal contralateral testis are both permanently secured to the scrotal septum using non-absorbable ePTFE or polypropylene sutures at three distinct points. This prevents future rotation.</li>
                    <li><strong>Scenario B (Parenchyma Non-Viable/Gangrenous):</strong> Perform a formal **Orchidectomy** on the affected side to prevent auto-immunization and anti-sperm antibody production, which can compromise future fertility. This must be accompanied by a **Contralateral Orchidopexy** to protect the remaining testis.</li>
                </ul>
            </li>
        </ol>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Synthesize ischemic timelines, neuroanatomy, and emergency guidelines to answer these questions:</em></p>
            <ol style="margin-left: 20px;">
                <li>Explain why performing an immediate prophylactic orchidopexy on the unaffected contralateral testis is mandatory during surgical exploration for testicular torsion.</li>
                <li>What is the immunological risk associated with retaining a completely infarcted, non-viable testis, and how does it affect long-term fertility?</li>
                <li>An adolescent presents with severe lower abdominal pain, nausea, and vomiting, but denies scrotal discomfort. The abdomen is soft and non-distended. What critical physical exam step must not be missed?</li>
                <li>What are the key anatomical differences between *intravaginal* and *extravaginal* testicular torsion, and which age groups are typically affected by each?</li>
                <li>Why is the cremasteric reflex lost during testicular torsion, and what peripheral nerves mediate this reflex pathway?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>The structural anomaly that permits abnormal rotation, the **Bell Clapper Deformity, is an inherited anatomical variant that occurs bilaterally in up to 50–80% of cases**. A patient who experiences torsion on one side carries a high lifetime risk of developing a subsequent torsion event on the opposite side. Prophylactic three-point fixation of the healthy contralateral testis is a low-risk, mandatory procedure that prevents future ischemic loss of the remaining gonad.</li>
                        <li>Retaining a necrotic, gangrenous testis breaks down the protective **blood-testis barrier**. This exposes hidden sequestered germ cell antigens to the systemic immune system, triggering the formation of **anti-sperm antibodies**. These antibodies can cross over and target the healthy contralateral testis, damaging the blood-testis barrier on that side and causing chronic autoimmune orchitis that leads to subfertility or permanent infertility.</li>
                        <li>A complete **visual inspection and manual palpation of the scrotum** must be performed. In adolescent males, the visceral sensory fibers from the gonads travel alongside sympathetic nerves back to the T10 dermatome segment. Because of this shared pathway, acute testicular ischemia frequently presents as referred **isolated lower abdominal pain**. Skipping a thorough genital exam in a young patient presenting with an acute abdomen can lead to a missed diagnosis of torsion, resulting in organ loss.</li>
                        <li>**Intravaginal torsion** occurs when the testis twists *inside* the tunica vaginalis cavity due to a high insertion of the tunics on the spermatic cord (the bell clapper deformity); this variant is most common in adolescents. **Extravaginal torsion** occurs almost exclusively *in utero* or in neonates before the tunica vaginalis has fully fused with the scrotal wall fascia. In these cases, the entire spermatic cord and its surrounding tunics twist together as a single unit within the inguinal canal or scrotum.</li>
                        <li>The cremasteric reflex arc is disrupted by acute tissue ischemia and severe regional inflammation within the spermatic cord. The afferent pathway of the reflex is mediated by the **femoral branch of the genitofemoral nerve and the ilioinguinal nerve** (L1), while the efferent motor limb travels via the **genital branch of the genitofemoral nerve** (L1–L2) to supply the cremasteric muscle. Ischemic injury to the cord rapidly cuts off these delicate nerve fibers, causing a loss of the reflex.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"testicular-tumors": {
    title: "Testicular Tumors: Classification & Management",
    videoUrl: "coming-soon",
    duration: "24 mins",
    notes: `
      <style>
        @media print {
            .tt-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .tt-notes details { display: block; }
            .tt-notes details[open] summary ~ * { animation: none; }
        }
        .tt-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .tt-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .tt-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .tt-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .tt-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .tt-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background-color: #fff; }
        .tt-notes th, .tt-notes td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; vertical-align: top; }
        .tt-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; }
        .tt-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .tt-notes .box-red { background-color: #ffebee; border: 2px solid #c62828; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .tt-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .tt-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .tt-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .tt-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .tt-notes ul, .tt-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .tt-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="tt-notes">
        <h1>Testicular Tumors: Classification &amp; Management</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Advanced Uro-Oncology Curriculum: Histopathological Lineages, Serum Biomarker Kinetics, and Surgical Strategies
        </p>

        <h2>1. Histopathological Classification (WHO System)</h2>
        <p>Approximately 95% of primary malignant testicular neoplasms arise from the germinal epithelium. The remaining 5% comprise sex cord-stromal tumors and secondary hematologic malignancies.</p>
        
        
        
        <ul>
            <li><strong>Germ Cell Tumors (GCTs):</strong> Derived from germ cell neoplasia in situ (GCNIS).
                <ul>
                    <li><strong>Seminomas:</strong> Account for ~50% of cases. Characterized by uniform, large cells with clear cytoplasm (rich in glycogen) and distinct cell borders, divided by fibrous septae containing a prominent lymphocytic infiltrate.
                        <ul>
                            <li>*Classic Seminoma:* Most common, presenting in the 3rd to 4th decades of life.</li>
                            <li>*Spermatocytic Tumor:* Distinct from GCNIS-derived tumors; occurs in men &gt;50 years old, lacks lymphocytic infiltrates, and carries an exceptionally low metastatic potential.</li>
                        </ul>
                    </li>
                    <li><strong>Non-Seminomatous Germ Cell Tumors (NSGCTs):</strong> Frequently present as mixed patterns.
                        <ul>
                            <li>*Embryonal Carcinoma:* Highly aggressive, pleomorphic epithelial sheets with areas of hemorrhage and necrosis; prone to early hematogenous and lymphatic dissemination.</li>
                            <li>*Yolk Sac Tumor (Endodermal Sinus Tumor):* The most common primary testicular tumor in infants and children under 3 years old. Shows a reticular network histology with characteristic glomeruloid structures called **Schiller-Duval bodies**.</li>
                            <li>*Choriocarcinoma:* Highly malignant lineage consisting of mixed syncytiotrophoblasts and cytotrophoblasts. Prone to early vascular invasion, causing widespread hematogenous metastases to the lungs and brain, often before the primary testicular mass is palpable.</li>
                            <li>*Teratoma:* Composed of elements from all three somatic embryonic germ layers (ectoderm, mesoderm, endoderm). Classified as *mature* (well-differentiated benign appearing but clinically unpredictable in adults) or *immature* (containing primitive, undifferentiated neural or mesenchymal components).</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><strong>Sex Cord-Stromal Tumors:</strong> Leydig cell tumors (often cause virilization or gynecomastia via altered estrogen/testosterone dynamics) and Sertoli cell tumors (mostly benign, structurally supportive cell neoplasms).</li>
            <li><strong>Malignant Lymphoma:</strong> Diffuse Large B-Cell Lymphoma (DLBCL) is the **most common cause of a primary testicular mass in men over 60 years old**. It frequently presents with bilateral asynchronous involvement.</li>
        </ul>

        <h2>2. Clinical Presentation &amp; Metastatic Pathways</h2>
        <ul>
            <li><strong>Primary Local Features:</strong> Characterized by a firm, non-tender, irregular intra-testicular mass that does not transilluminate. Patients typically describe a distinct loss of normal testicular sensation or a heavy, dragging ache in the lower abdomen or scrotum.</li>
            <li><strong>Systemic and Metastatic Manifestations:</strong>
                <ul>
                    <li><strong>Retroperitoneal Lymphadenopathy:</strong> Primary lymphatic drainage from the right testis leads directly to the interaortocaval nodal chain, while the left testis drains into the para-aortic nodes near the renal vein hilum. Nodal enlargement frequently manifests as deep, structural lower back pain. *Note: Inguinal lymph nodes are unaffected unless the tumor breaches the tunica albuginea or involves the scrotal skin.*</li>
                    <li><strong>Pulmonary Dissemination:</strong> Hematogenous spread produces subpleural nodules, presenting as dyspnea, cough, or hemoptysis. Radiographs often show classic, multi-focal **"cannonball" metastases**.</li>
                    <li><strong>Paraneoplastic Endocrine Features:</strong> Systemic tissue exposure to high levels of human chorionic gonadotropin (hCG) stimulates Leydig cells to produce excess estradiol, resulting in bilateral **gynecomastia**.</li>
                </ul>
            </li>
        </ul>

        <h2>3. Serum Tumor Markers (The Biomarker Triad)</h2>
        <p>Serum markers are vital for confirming a diagnosis, accurate staging, predicting prognosis, and monitoring for recurrence during post-treatment surveillance.</p>

        <table>
            <thead>
                <tr>
                    <th>Biomarker Axis</th>
                    <th>Seminoma Profile</th>
                    <th>NSGCT Profile</th>
                    <th>Specific Clinical &amp; Pathological Associations</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>$\beta$-hCG</strong><br>(human Chorionic Gonadotropin)</td>
                    <td>Elevated in 10–20% of advanced cases (driven by scattered syncytiotrophoblast variants).</td>
                    <td>Elevated in 40–60% of cases.</td>
                    <td>Exhibits exponential elevation in **Choriocarcinoma** (often exceeding 100,000 mIU/mL), correlating with aggressive hematogenous spread.</td>
                </tr>
                <tr>
                    <td><strong>AFP</strong><br>($\alpha$-Fetoprotein)</td>
                    <td><span class="highlight">NEVER ELEVATED</span><br>• *Half-life: 5–7 days*</td>
                    <td>Elevated in 50–70% of cases.</td>
                    <td>Strongly associated with **Yolk Sac Tumors** and embryonal components.<br>👉 *Clinical Rule: Any elevation of AFP excludes a diagnosis of pure seminoma, shifting management to an NSGCT protocol.*</td>
                </tr>
                <tr>
                    <td><strong>LDH</strong><br>(Lactate Dehydrogenase)</td>
                    <td>Elevated in proportion to tumor size.</td>
                    <td>Elevated in proportion to tumor size.</td>
                    <td>An indirect marker of overall **tumor burden, cell turnover, and growth rate**. Used primarily for risk-stratifying advanced stage disease.</td>
                </tr>
            </tbody>
        </table>

        <div class="box-red">
            <h3 style="margin-top:0; color:#b71c1c;">⛔ Absolute Contraindication: Scrotal Interventions</h3>
            <p><strong>Never perform a trans-scrotal percutaneous core needle biopsy or Fine Needle Aspiration (FNA) on a suspected testicular mass.</strong></p>
            <ul>
                <li><strong>Anatomical Basis:</strong> The scrotum and testis develop from separate embryological layers and maintain completely distinct lymphatic systems. The scrotum drains to the superficial **inguinal lymph nodes**, whereas the testis drains to the **retroperitoneal para-aortic nodes**.</li>
                <li><strong>Oncological Consequence:</strong> Piercing or incising the scrotal wall disrupts these natural tissue planes. This alters local lymphatic drainage and seeds tumor cells into the scrotal tissue and inguinal lymph nodes, upstaging the disease and making subsequent surgical treatment much more complex.</li>
            </ul>
        </div>

        <h2>4. Multimodal Management Principles</h2>

        <h3>A. Primary Surgical Control: Radical High Inguinal Orchidectomy</h3>
        <ul>
            <li><strong>Surgical Approach:</strong> An oblique incision placed over the inguinal canal, superior to the groin crease, completely avoiding the scrotal compartment.</li>
            <li><strong>Spermatic Cord Isolation:</strong> The spermatic cord must be isolated at the level of the deep inguinal ring and **clamped immediately with a non-crushing vascular instrument** prior to manipulating or mobilizing the malignant testis. This prevents intraoperative tumor cell embolization into the systemic venous circulation.</li>
            <li><strong>Excision Scope:</strong> The testis, its surrounding tunica albuginea, and the entire spermatic cord are excised en bloc down to the internal ring.</li>
        </ul>

        <h3>B. Post-Orchidectomy Adjuvant Strategies</h3>
        <p>Subsequent management is guided by the TNM stage and whether the tumor is classified as a Seminoma or an NSGCT.</p>

        <table>
            <thead>
                <tr>
                    <th>Therapeutic Parameter</th>
                    <th>Pure Seminoma Pathway</th>
                    <th>Non-Seminomatous GCT (NSGCT) Pathway</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Intrinsic Radiosensitivity</strong></td>
                    <td><span class="highlight">Highly Radiosensitive</span></td>
                    <td>**Highly Radioresistant**</td>
                </tr>
                <tr>
                    <td><strong>Stage I Strategy</strong><br>(No nodal or distant spread)</td>
                    <td>• Preferred: **Active Surveillance** (~15% recurrence risk).<br>• Alternatives: Single-dose adjuvant **Carboplatin** chemotherapy or low-dose para-aortic field radiotherapy.</td>
                    <td>• Preferred: **Active Surveillance** if low-risk (no lymphovascular invasion).<br>• Alternatives: 1 cycle of **BEP Chemotherapy** or nerve-sparing Retroperitoneal Lymph Node Dissection (RPLND).</td>
                </tr>
                <tr>
                    <td><strong>Advanced Disease Strategy</strong><br>(Nodal or visceral spread)</td>
                    <td>Radiotherapy for localized retroperitoneal disease (Stage IIA/B) or systemic platinum-based chemotherapy for advanced stages.</td>
                    <td>Systemic multi-agent **BEP Chemotherapy**:<br>• **B**leomycin + **E**toposide + **C**isplatin.</td>
                </tr>
                <tr>
                    <td><strong>Post-Chemotherapy Residual Mass Management</strong></td>
                    <td>Masses &lt;3 cm are monitored with serial imaging (PET/CT) because they usually represent benign residual fibrosis rather than active tumor.</td>
                    <td>Masses &gt;1 cm require an open **Retroperitoneal Lymph Node Dissection (RPLND)** because they carry a high risk of harboring viable teratomas or active embryonal carcinomas.</td>
                </tr>
            </tbody>
        </table>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What specific toxicities are associated with each component of the first-line BEP chemotherapy regimen?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> 
                        <br>• **Bleomycin:** Associated with **pulmonary fibrosis**; requires monitoring with regular pulmonary function tests (PFTs) to detect a drop in DLCO.
                        <br>• **Etoposide:** Associated with acute **myelosuppression** (leukopenia/neutropenia) and an increased risk of developing secondary therapy-related acute myeloid leukemia (t-AML).
                        <br>• **Cisplatin:** Associated with severe **nephrotoxicity** (requires aggressive saline hydration), permanent **ototoxicity** (high-frequency hearing loss and tinnitus), and peripheral neuropathy.
                    </p>
                </div>
            </details>
        </div>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Synthesize embryonic origin, surgical anatomy, and oncological guidelines to answer these questions:</em></p>
            <ol style="margin-left: 20px;">
                <li>A 28-year-old male undergoes a radical right orchidectomy for a mixed germ cell tumor. Follow-up imaging shows persistent interaortocaval lymphadenopathy. Explain the embryological basis for why testicular tumors metastasize to the retroperitoneum rather than local pelvic or inguinal nodes.</li>
                <li>What is the physiological significance of the serum marker decline rate after a radical orchidectomy, and how is it used to evaluate treatment efficacy?</li>
                <li>During a nerve-sparing Retroperitoneal Lymph Node Dissection (RPLND) for a residual post-chemotherapy NSGCT mass, what autonomic nerve networks must be preserved to prevent retrograde ejaculation?</li>
                <li>A patient with a large, palpable testicular mass presents with sudden dyspnea, altered mental status, and a $\beta$-hCG level &gt;400,000 mIU/mL. What oncological complication should you suspect, and what is its pathophysiology?</li>
                <li>Why is single-agent Carboplatin acceptable as an adjuvant option for Stage I Seminoma, whereas cisplatin-based multi-agent regimens (BEP) are mandatory for advanced NSGCT?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>During embryogenesis, the testes develop within the **gonadal ridge in the retroperitoneal space** near the level of the L1–L2 vertebrae. As development progresses, they descend into the scrotum, pulling their original vascular supply (gonadal arteries/veins) and **primary lymphatic drainage pathways** down with them. Because the primary lymphatic network originates in the lumbar retroperitoneum, malignant cells enter these vessels and travel directly back to the para-aortic and interaortocaval lymph nodes. This is why primary testicular malignancies bypass local pelvic and inguinal node networks unless the tumor invades the scrotal wall.</li>
                        <li>Following successful radical surgical excision, serum tumor markers should decrease at a rate that matches their specific metabolic half-lives: **approximately 24–36 hours for $\beta$-hCG and 5–7 days for AFP**. Serial marker levels are checked postoperatively. If the levels remain elevated or fail to decrease as expected according to these half-lives, it indicates the presence of **micro-metastatic or residual systemic disease**, which requires immediate systemic adjuvant therapy rather than simple observation.</li>
                        <li>Surgeons must identify and preserve the **postganglionic sympathetic nerve fibers arising from the lumbar sympathetic chain, as well as the hypogastric plexus** located around the infrarenal aorta and aortic bifurcation. Direct injury to or excision of these sympathetic pathways disrupts the coordinated contraction of the bladder neck and seminal vesicles during ejaculation. This causes **retrograde ejaculation** into the bladder, which preserves orgasm but results in permanent infertility.</li>
                        <li>This patient is experiencing **Choriocarcinoma Syndrome**. When high volumes of mixed choriocarcinoma undergo rapid cell turnover or respond to chemotherapy, massive quantities of pro-angiogenic cytokines and $\beta$-hCG are released into the bloodstream. This triggers **advanced hypervascular micro-metastatic bleeding**, particularly within the capillary beds of the lungs and brain. This hemorrhage causes acute respiratory distress and neurological deterioration, creating a life-threatening medical emergency.</li>
                        <li>Pure seminomas are exceptionally sensitive to chemotherapy. Stage I disease has a low risk of hidden micro-metastases, so a single dose of single-agent **Carboplatin** provides sufficient systemic control while avoiding the extensive side effects of multi-agent regimens. In contrast, **NSGCTs are inherently more aggressive, prone to early mutation, and completely resistant to radiation**. They often present with heterogeneous cell populations that can rapidly develop resistance to a single agent. To clear micro-metastatic disease and prevent recurrence, aggressive, multi-agent regimens like **BEP** (combining three agents with different mechanisms of action) are required.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"dvt": {
    title: "Deep Vein Thrombosis (DVT)",
    videoUrl: "coming-soon",
    duration: "28 mins",
    notes: `
      <style>
        @media print {
            .dvt-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .dvt-notes details { display: block; }
            .dvt-notes details[open] summary ~ * { animation: none; }
        }
        .dvt-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .dvt-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .dvt-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .dvt-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .dvt-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .dvt-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background-color: #fff; }
        .dvt-notes th, .dvt-notes td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; vertical-align: top; }
        .dvt-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; }
        .dvt-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .dvt-notes .box-red { background-color: #ffebee; border: 2px solid #c62828; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .dvt-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .dvt-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .dvt-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .dvt-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .dvt-notes ul, .dvt-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .dvt-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="dvt-notes">
        <h1>Deep Vein Thrombosis (DVT)</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Advanced Vascular Curriculum: Molecular Pathogenesis, Diagnostic Risk Stratification, and Targeted Anticoagulation Chronology
        </p>

        <h2>1. Molecular Pathogenesis: Virchow's Triad</h2>
        <p>The initiation of deep vein thrombosis depends on the interaction of three pathophysiological pillars that disrupt normal venous homeostasis.</p>
        
        
        
        <ul>
            <li><strong>Endothelial Alteration / Injury:</strong> 
                <ul>
                    <li>Exposes the highly thrombogenic subendothelial extracellular matrix (collagen and von Willebrand factor), triggering rapid platelet activation and tissue-factor-mediated activation of the extrinsic coagulation cascade.</li>
                    <li><em>Clinical Drivers:</em> Direct mechanical trauma, major orthopedic or pelvic interventions, indwelling central venous access catheters, and direct chemical irritation from intravenous substance use.</li>
                </ul>
            </li>
            <li><strong>Hemodynamic Stasis (Altered Flow Dynamics):</strong>
                <ul>
                    <li>Prevents the clearance and dilution of activated coagulation factors while limiting the delivery of systemic clotting inhibitors (such as Antithrombin and Protein C). It also promotes endothelial-leukocyte interactions.</li>
                    <li><em>Clinical Drivers:</em> Prolonged immobility (bedridden &gt;3 days, long-haul air travel), intraoperative positioning under general anesthesia, localized mechanical compression of the iliac veins (e.g., gravidity or pelvic tumors), and focal neurological paralysis (CVA).</li>
                </ul>
            </li>
            <li><strong>Systemic Hypercoagulability (Thrombophilia):</strong>
                <ul>
                    <li>An imbalance between procoagulant mechanisms and natural anticoagulant pathways.</li>
                    <li><em>Inherited Tectonic Defects:</em> **Factor V Leiden mutation** (causing resistance to Activated Protein C cleavage; most common), G20210A prothrombin gene mutation, and quantitative or qualitative deficiencies in Antithrombin III, Protein C, or Protein S.</li>
                    <li><em>Acquired Prothrombotic States:</em> Advanced visceral malignancies (driving migratory superficial thrombophlebitis via **Trousseau's Syndrome** due to tumor-associated tissue factor release), antiphospholipid syndrome (APS), third-generation combined oral contraceptive use (estrogen increases factors VII, X, and fibrinogen while decreasing antithrombin), and nephrotic syndrome (due to urinary loss of antithrombin III).</li>
                </ul>
            </li>
        </ul>

        <h2>2. Clinical Presentation & Physical Signs</h2>
        <ul>
            <li><strong>Primary Symptoms:</strong> Acute onset of unilateral, asymmetric lower extremity edema, deep dull aching pain, and a distinct sensation of localized fullness or heaviness within the calf or thigh compartments.</li>
            <li><strong>Classic Clinical Signs:</strong>
                <ul>
                    <li>Localized cutaneous warmth, erythema, and superficial venous engorgement.</li>
                    <li><strong>Moses Sign:</strong> Eliciting sharp tenderness by compressing the calf musculature laterally against the tibia. This is significantly more sensitive and reliable than anteroposterior compression.</li>
                    <li><strong>Pratt's Sign:</strong> The appearance of visibly dilated, non-pulsatile sentinel veins over the anterior shin, which serve as superficial collateral pathways.</li>
                    <li><strong>Homan's Sign:</strong> Calf discomfort provoked by forced, passive dorsiflexion of the ankle with the knee extended. *Note: This sign is highly non-specific and potentially dangerous.*</li>
                </ul>
            </li>
        </ul>

        <div class="box-red">
            <h3 style="margin-top:0; color:#b71c1c;">🚨 Critical Emergency: Phlegmasia Cerulea Dolens</h3>
            <p><strong>"Painful Blue Edema" — A Critical Vascular Emergency</strong></p>
            <ul>
                <li><strong>Advanced Pathology:</strong> Massive, near-total occlusion of both the primary deep and superficial venous outflow tracts of the lower limb (typically spanning the iliofemoral axis).</li>
                <li><strong>Ischemic Cascade:</strong> Venous outflow is blocked so completely that tissue hydrostatic pressure rises above arterial perfusion pressure. This halts arterial inflow, causing severe tissue ischemia, cyanosis, and **venous gangrene**.</li>
                <li><strong>Management Rule:</strong> This is a limb-threatening emergency that requires immediate intervention via catheter-directed thrombolysis (CDT), percutaneous mechanical thrombectomy, or open surgical thrombectomy with a companion compartment fasciotomy to prevent amputation.</li>
            </ul>
        </div>

        <h2>3. Diagnostic Stratification & Biomarkers</h2>
        
        <h3>A. Pre-Test Probability Mapping (The Wells Criteria)</h3>
        <p>Before ordering imaging, use the Wells Clinical Prediction Rule to categorize patients into Low, Moderate, or High probability groups. This system accounts for active malignancy, recent immobilization, localized deep venous tenderness, asymmetric calf swelling ($\ge 3$ cm measured 10 cm below the tibial tuberosity), collateral non-varicose superficial networks, and alternative diagnoses that are at least as likely as DVT.</p>

        <h3>B. Diagnostic Investigations</h3>
        <ul>
            <li><strong>Plasma D-Dimer Assay:</strong> 
                <ul>
                    <li>A degradation product generated when cross-linked fibrin is cleaved by plasmin.</li>
                    <li>Characterized by **high sensitivity but very low specificity**. It can be elevated by inflammation, pregnancy, trauma, recent surgery, or advanced age.</li>
                    <li><strong>Clinical Rule:</strong> Its value lies entirely in its **negative predictive value**. A negative D-dimer assay can safely <span class="highlight">RULE OUT</span> a DVT *only* in patients stratified as low-risk by the Wells Score. It should never be used to confirm a diagnosis in high-risk patients.</li>
                </ul>
            </li>
            <li><strong>Duplex Compression Ultrasonography:</strong> The non-invasive <span class="highlight">Gold Standard</span>.
                <ul>
                    <li><strong>Primary Diagnostic Criterion:</strong> **Loss of venous compressibility**. A normal, healthy vein collapses completely under light pressure from the ultrasound probe. If a thrombus is present, the vein wall will not compress.</li>
                    <li>*Secondary Criteria:* Visualization of the echogenic thrombus within the lumen, loss of spontaneous flow, and absence of respiratory variation on color Doppler evaluation.</li>
                </ul>
            </li>
        </ul>

        <h2>4. Therapeutic Management Matrix</h2>
        <p>The goals of treatment are to stop thrombus propagation, prevent acute embolization to the pulmonary arterial bed (**Pulmonary Embolism**), and limit long-term valvular damage to avoid **Post-Thrombotic Syndrome (PTS)**.</p>

        <h3>A. Systemic Anticoagulation Protocols</h3>
        <table>
            <thead>
                <tr>
                    <th>Therapeutic Agent</th>
                    <th>Mechanistic Action &amp; Protocol</th>
                    <th>Clinical Advantages &amp; Target Groups</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Low-Molecular-Weight Heparin (LMWH)</strong><br>(e.g., Enoxaparin)</td>
                    <td>Binds and activates Antithrombin III, selectively accelerating the inactivation of coagulation **Factor Xa** over Factor IIa.<br>• *Dose:* 1 mg/kg subcutaneously every 12 hours.</td>
                    <td>Predictable pharmacokinetics that eliminate the need for routine aPTT monitoring. Does not cross the placenta, making it the **anticoagulant of choice during pregnancy**. Low risk of Heparin-Induced Thrombocytopenia (HIT).</td>
                </tr>
                <tr>
                    <td><strong>Vitamin K Antagonists</strong><br>(e.g., Warfarin)</td>
                    <td>Inhibits Vitamin K Epoxide Reductase (VKORC1), blocking the $\gamma$-carboxylation of Factors **II, VII, IX, X** and Proteins C/S.<br>• *Protocol:* Must overlap with LMWH for at least 5 days *and* until the **INR reaches 2.0–3.0** for two consecutive 24-hour periods.</td>
                    <td>Inexpensive, long-term oral option. Fully reversible using Vitamin K1 (Phytomenadione) and Prothrombin Complex Concentrate (PCC). Requires ongoing dietary management and frequent routine monitoring.</td>
                </tr>
                <tr>
                    <td><strong>Direct Oral Anticoagulants (DOACs / NOACs)</strong><br>(e.g., Rivaroxaban, Apixaban)</td>
                    <td>Direct, highly selective inhibitors of free and clot-bound **Factor Xa**, blocking the prothrombinase complex without requiring an antithrombin cofactor.</td>
                    <td>Immediate onset of therapeutic anticoagulation, eliminating the need for an initial LMWH bridge for specific agents (Rivaroxaban/Apixaban). Fixed dosing with no routine coagulation monitoring required. Now preferred for non-cancer first-line therapy.</td>
                </tr>
            </tbody>
        </table>

        <h3>B. Advanced Endovascular & Surgical Interventions</h3>
        <ul>
            <li><strong>Catheter-Directed Thrombolysis (CDT):</strong> Continuous, targeted infusion of recombinant tissue plasminogen activator (rt-PA) directly into the clot matrix via a multi-sidehole catheter. Reserved for extensive proximal iliofemoral DVTs or early-stage Phlegmasia in patients with low bleeding risk.</li>
            <li><strong>Inferior Vena Cava (IVC) Filters (e.g., Greenfield Filter):</strong> Percutaneous, expandable metallic baskets placed in the infrarenal IVC. **Indications are strictly limited to:**
                <ul>
                    <li>Patients with a confirmed, acute proximal DVT or PE who have an **absolute contraindication to anticoagulation** (e.g., recent hemorrhagic stroke or active massive gastrointestinal bleeding).</li>
                    <li>Patients who experience documented, recurrent PE despite maintaining therapeutic anticoagulation levels.</li>
                </ul>
            </li>
        </ul>

        <h3>C. Prevention of Post-Thrombotic Syndrome (PTS)</h3>
        <ul>
            <li><strong>Class II Graduated Compression Stockings:</strong> Worn on the affected limb for up to 2 years after an acute proximal DVT. They compress superficial veins to reduce chronic venous hypertension and lower the risk of PTS, which manifests as intractable lower-leg edema, hyperpigmentation, and stasis ulceration.</li>
        </ul>

        <h2>5. Prophylaxis & Risk Mitigation</h2>
        <p>Inpatient risk screening using models like the **Caprini Risk Assessment** is essential for preventing hospital-acquired venous thromboembolism (VTE).</p>
        <ul>
            <li><strong>Mechanical Prophylaxis:</strong> Early postoperative mobilization, fitted anti-embolism stockings, and **Intermittent Pneumatic Compression (IPC)** devices. These devices mechanically simulate the calf muscle pump to eliminate venous stasis and trigger endogenous fibrinolysis. *Contraindicated in limbs with confirmed or suspected acute DVT.*</li>
            <li><strong>Chemical Prophylaxis:</strong> Fixed low-dose regimens tailored to patient weight and renal function, such as Enoxaparin 40 mg subcutaneously once daily, or Unfractionated Heparin 5000 units subcutaneously every 8 to 12 hours.</li>
        </ul>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Apply your knowledge of vascular hemodynamics and hematology to analyze these questions:</em></p>
            <ol style="margin-left: 20px;">
                <li>Explain the physiological mechanism behind the "Warfarin-Induced Skin Necrosis" paradox, and describe how to avoid it.</li>
                <li>Why is Homan's sign considered unreliable and potentially dangerous during a bedside examination?</li>
                <li>What is the pathophysiological mechanism behind Heparin-Induced Thrombocytopenia (HIT) Type II, and how do you manage a patient who develops it?</li>
                <li>An orthopedic patient develops an acute, unprovoked proximal DVT. Duplex ultrasound shows a large clot, and anticoagulation is started. What is the minimum standard duration of anticoagulation for an unprovoked proximal DVT versus a DVT provoked by transient surgery?</li>
                <li>Where do the majority of lower extremity deep vein thrombi originate, and why do calf-limited thrombi carry a lower risk of massive pulmonary embolism than proximal thrombi?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>When Warfarin therapy is started, it inhibits the synthesis of vitamin K-dependent clotting factors, but it also inhibits the natural anticoagulant proteins C and S. **Protein C has a significantly shorter plasma half-life (~6 hours) than procoagulant factors IX and X, and especially Factor II (~60–72 hours)**. During the first 24 to 48 hours of treatment, functional Protein C levels drop rapidly while levels of factors II and X remain high. This creates a temporary hypercoagulable state. If Warfarin is given in high loading doses without a heparin bridge, this imbalance can trigger microvascular thrombosis within cutaneous capillaries, leading to localized skin necrosis. It is avoided by always **co-administering a fast-acting parenteral anticoagulant (LMWH or UFH) as a bridge** until a stable, therapeutic INR is achieved.</li>
                        <li>Homan's sign is unreliable because calf discomfort on dorsiflexion can be caused by any inflammatory or structural condition affecting the posterior compartment, including Achilles tendinitis, gastrocnemius strain, or a ruptured Baker's cyst. It is potentially dangerous because the forceful, passive stretch of the calf musculature compresses the deep veins. This mechanical force can **dislodge a poorly adherent, fragile proximal thrombus from the venous wall**, releasing it into the circulation as a free-floating embolus that can cause a fatal pulmonary embolism.</li>
                        <li>**HIT Type II** is an immune-mediated reaction caused by antibodies targeting the **Platelet Factor 4 (PF4)-Heparin complex**. These IgG antibodies bind to the PF4-heparin complex on the platelet surface, and their Fc portions then bind to adjacent platelet FcaRIIa receptors. This cross-linking triggers massive platelet activation and aggregation, releasing prothrombotic microparticles that lead to severe venous and arterial thrombosis while rapidly consuming platelets (causing a 50% or greater drop in platelet count). **Management mandates immediate cessation of all heparin products (including LMWH)**. Do not transfuse platelets, as this can worsen the thrombotic cascade. Instead, start an alternative non-heparin anticoagulant, typically a direct thrombin inhibitor like **Argatroban** or **Bivalirudin**.</li>
                        <li>For a DVT **provoked by a transient, major surgery risk factor**, the standard duration of anticoagulation is **3 months**, as the primary predisposing cause is removed once the patient recovers. For an **unprovoked proximal DVT** (where no clear environmental or surgical trigger is identified), guidelines recommend **at least 3 to 6 months of initial therapy followed by indefinite, long-term anticoagulation**, provided the patient's bleeding risk remains low. This extended therapy is necessary because unprovoked events carry a high risk of recurrence once anticoagulation is stopped.</li>
                        <li>The majority of lower extremity thrombi originate within the **soleal sinuses**, large, valve-less venous reservoirs located within the calf muscles where blood pools during periods of immobility. Thrombi restricted to the deep calf veins (e.g., anterior/posterior tibial or peroneal veins) have a lower risk of causing a massive, life-threatening PE because they are smaller and trapped within narrow vessels. However, if left untreated, approximately **15% to 20% of calf-limited thrombi propagate proximally into the larger popliteal and femoral veins**. Once a thrombus extends past the popliteal fossa into the proximal veins, it enters larger channels with higher blood flow, significantly increasing the risk that a large segment will break free and cause a massive pulmonary embolism.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"raynauds": {
    title: "Raynaud's Phenomenon",
    videoUrl: "coming-soon",
    duration: "20 mins",
    notes: `
      <style>
        @media print {
            .raynauds-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .raynauds-notes details { display: block; }
            .raynauds-notes details[open] summary ~ * { animation: none; }
        }
        .raynauds-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .raynauds-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .raynauds-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .raynauds-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .raynauds-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .raynauds-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background-color: #fff; }
        .raynauds-notes th, .raynauds-notes td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; vertical-align: top; }
        .raynauds-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; }
        .raynauds-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .raynauds-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .raynauds-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .raynauds-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .raynauds-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .raynauds-notes ul, .raynauds-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .raynauds-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="raynauds-notes">
        <h1>Raynaud's Phenomenon</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Vascular & Rheumatology Focus: Pathophysiological Mechanics, Primary vs Secondary Differentiation, and Medical/Surgical Protocols
        </p>

        <h2>1. Definition & Pathophysiology</h2>
        <p><strong>Raynaud's Phenomenon</strong> is a clinical syndrome characterized by episodic, exaggerated vasospasm of the digital arteries and cutaneous arterioles. This intense vasoconscriptive response typically targets the fingers and toes, compromising peripheral perfusion. It is primarily triggered by **cold temperatures** or **intense emotional stress** causing heightened sympathetic vasoconstrictor tone.</p>

        <h2>2. Clinical Manifestations: The Pathognomonic Color Triad</h2>
        <p>A classic, severe attack manifests as a well-demarcated, triphasic color transformation of the digits reflecting underlying microvascular perfusion changes:</p>
        
        
        
        <ol>
            <li><strong>White (Pallor):</strong> Represents the initial ischemic phase caused by intense, sudden **vasospasm** of the digital arteries and near-complete occlusion of the cutaneous capillary beds.</li>
            <li><strong>Blue (Cyanosis):</strong> Represents a phase of tissue hypoxia and venous stasis. As the spasm persists at a low level, capillaries and venules dilate, allowing the pooling of sluggish, heavily **deoxygenated blood**.</li>
            <li><strong>Red (Rubor):</strong> Represents the recovery phase driven by **reactive hyperemia**. Following the resolution of the vasospasm, blood flow rushes back through the dilated arterioles, flooding the tissue with oxygenated blood. This phase is often accompanied by throbbing pain, paresthesia, and localized swelling.</li>
        </ol>

        <h2>3. Differential Diagnosis: Primary vs. Secondary Phenotypes</h2>
        <p>The core clinical challenge when managing a patient presenting with Raynaud's symptoms is accurately distinguishing benign primary disease from a dangerous secondary manifestation of an occult structural or autoimmune disorder.</p>

        <table>
            <thead>
                <tr>
                    <th>Clinical Feature</th>
                    <th>Primary Raynaud's<br>(Raynaud's Disease)</th>
                    <th>Secondary Raynaud's<br>(Raynaud's Phenomenon)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Epidemiologic Profile</strong></td>
                    <td>Typically presents in young females (aged 15–30 years). Strong family history is common.</td>
                    <td>Usually emerges at an older age (&gt; 40 years). Occurs across both sexes.</td>
                </tr>
                <tr>
                    <td><strong>Etiology</strong></td>
                    <td>**Idiopathic** hyper-reactivity of the local alpha-2 adrenergic receptors without structural vascular disease.</td>
                    <td>**Secondary** to an identifiable underlying condition (e.g., connective tissue disease, occupational injury).</td>
                </tr>
                <tr>
                    <td><strong>Symmetry of Attacks</strong></td>
                    <td>Characteristically symmetric, involving digits of both hands or feet simultaneously.</td>
                    <td>Frequently asymmetric or unilateral; can selectively isolate single digits.</td>
                </tr>
                <tr>
                    <td><strong>Ischemic Tissue Damage</strong></td>
                    <td>Absent. The clinical course is benign; digital pulses are preserved and trophic skin changes do not occur.</td>
                    <td>Highly prevalent. Manifests as painful **digital ulcerations**, localized tissue loss, pitting scars, or gangrene.</td>
                </tr>
                <tr>
                    <td><strong>Nailfold Capillaroscopy</strong></td>
                    <td>**Normal**. Capillary loops are regular, symmetric, and preserve architectural integrity.</td>
                    <td>**Abnormal**. Features architecture distortion, dilated/giant capillary loops, micro-hemorrhages, or distinct vascular dropout.</td>
                </tr>
                <tr>
                    <td><strong>Laboratory Biomarkers</strong></td>
                    <td>Normal inflammatory markers; negative Antinuclear Antibody (ANA) screen.</td>
                    <td>Often demonstrates elevated ESR/CRP and specific positive autoantibodies (e.g., ANA, anti-Scl-70, anti-centromere).</td>
                </tr>
            </tbody>
        </table>

        <h3>Etiological Vectors of Secondary Raynaud's</h3>
        <ul>
            <li><strong>Connective Tissue Diseases:</strong> Systemic Sclerosis (**Scleroderma**, both diffuse and limited/CREST syndrome), Systemic Lupus Erythematosus (SLE), Mixed Connective Tissue Disease (MCTD), and Rheumatoid Arthritis.</li>
            <li><strong>Occupational / Mechanical Trauma:</strong> Hand-Arm Vibration Syndrome (HAVS) or "Vibration White Finger" caused by chronic use of jackhammers, industrial drills, or prolonged heavy typing.</li>
            <li><strong>Pharmacological Aggressors:</strong> Non-selective **Beta-blockers**, ergot alkaloids (e.g., ergotamine), oral contraceptives, and chemotherapeutic agents (e.g., cisplatin, bleomycin).</li>
            <li><strong>Macrovascular Occlusive Disease:</strong> Buerger’s Disease (Thromboangiitis Obliterans), Thoracic Outlet Syndrome (causing micro-embolization), or advanced peripheral arterial disease (PAD).</li>
        </ul>

        <h2>4. Management Hierarchy</h2>

        <h3>A. Conservative Interventions (First-Line Lifestyle Adjustments)</h3>
        <ul>
            <li><strong>Thermal Preservation:</strong> Maintaining steady core body temperature. Layered clothing, thermal gloves, and chemical hand warmers are essential. Avoiding sudden transitions into air-conditioned spaces or cold tap water.</li>
            <li><strong>Complete Smoking Cessation:</strong> Nicotine directly stimulates alpha-1 adrenergic receptors, inducing severe cutaneous vasoconstriction that accentuates attacks.</li>
            <li><strong>Elimination of Mechanical Triggers:</strong> Ceasing use of vibrating industrial machinery and discontinuing offending drugs (e.g., beta-blockers).</li>
        </ul>

        <h3>B. Target Pharmacotherapy</h3>
        <ul>
            <li><strong>Calcium Channel Blockers (CCBs):</strong> Long-acting dihydropyridines, specifically extended-release **Nifedipine** or Amlodipine, represent the gold-standard first-line oral therapy. They inhibit calcium influx into vascular smooth muscle cells, decreasing basal tone and promoting peripheral arteriole vasodilation.</li>
            <li><strong>Phosphodiesterase-5 (PDE-5) Inhibitors:</strong> Agents like Sildenafil or Tadalafil are added for refractory cases. They prevent the breakdown of cyclic GMP, potentiating nitric oxide-mediated vasodilation.</li>
            <li><strong>Intravenous Prostanoids:</strong> Infusions of synthetic prostacyclin analogues (**Iloprost**) are reserved for severe secondary complications, such as critical digital ischemia or non-healing ischemic ulcers.</li>
        </ul>

        <h3>C. Surgical Optimization</h3>
        <ul>
            <li><strong>Cervicodorsal / Digital Sympathectomy:</strong>
                <ul>
                    <li><em>Indications:</em> Reserved for patients with severe secondary Raynaud's facing progressive digital gangrene, intractable pain, or worsening ulcerations despite maximal medical optimization.</li>
                    <li><em>Mechanism & Outcome:</em> Surgical transaction of the sympathetic chain interrupts vasoconstrictive signaling. While it effectively delivers rapid pain relief and aids immediate ulcer healing, the clinical response is typically **temporary**, with high recurrence rates within 1–2 years due to local receptor upregulation.</li>
                </ul>
            </li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What is the underlying pharmacological mechanism that explains why non-selective beta-blockers are strictly contraindicated in patients with Raynaud's phenomenon?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> Non-selective beta-blockers (e.g., Propranolol) antagonize both beta-1 and beta-2 adrenergic receptors. Blocking the vascular **beta-2 receptors** removes their native, smooth-muscle-relaxing (vasodilatory) influence. This leaves local **alpha-1 and alpha-2 adrenergic receptors entirely unopposed** to respond to sympathetic tone or cold triggers. This amplifies vasoconstriction within the digital arteries and significantly worsens the frequency and severity of ischemic vasospastic attacks.</p>
                </div>
            </details>
        </div>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Synthesize your vascular medicine and rheumatological pathophysiology knowledge against these oral examination scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>Identify each clinical element represented within the rheumatological diagnostic acronym "CREST" syndrome.</li>
                <li>How does a bedside Nailfold Capillaroscopy assist in differentiating Primary Raynaud's from Secondary Systemic Sclerosis?</li>
                <li>A patient with severe secondary Raynaud's develops an acute, exquisitely painful ischemic ulceration on the tip of the right index finger. Outline your immediate therapeutic escalation path.</li>
                <li>Explain the distinct cellular mechanism behind reactive hyperemia during the "rubor" phase of a vasospastic attack.</li>
                <li>Why is long-acting Nifedipine preferred over short-acting formulations when initiating maintenance therapy for Raynaud's phenomenon?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>**CREST** syndrome represents limited cutaneous systemic sclerosis and stands for: **C**alcinosis cutis, **R**aynaud's phenomenon, **E**sophageal dysmotility, **S**clerodactyly, and **T**elangiectasia.</li>
                        <li>In **Primary Raynaud's**, looking at the nail bed under light microscopy reveals structurally normal, parallel, and neatly arranged capillary loops. In **Secondary Systemic Sclerosis**, the architecture is severely disrupted, showing pathognomonic macro-dilated (giant) loops, focal micro-hemorrhages, and avascular zones (vascular dropout) caused by structural autoimmune capillary destruction.</li>
                        <li>Maximize or complement oral long-acting CCB therapy, strictly optimize lifestyle measures, and rapidly introduce a **PDE-5 inhibitor (e.g., Sildenafil)** or initiate a scheduled infusion of a **systemic prostanoid (IV Iloprost)** to force microvascular recruitment. Local wound care should be optimized, and topical nitrates can be considered while monitoring for systemic hypotension. If tissue loss is imminent despite these therapies, a surgical digital sympathectomy is indicated.</li>
                        <li>During the prolonged ischemic and stasis phases (white and blue), local tissues continue metabolizing anaerobically, causing a localized accumulation of vasodilator metabolites (such as adenosine, hydrogen ions, and lactate) in the interstitial fluid. When the primary arteriolar spasm breaks, these metabolites cause profound, immediate relaxation of downstream precapillary sphincters, generating an intense, hyper-perfused rush of arterial blood (**reactive hyperemia**).</li>
                        <li>Short-acting nifedipine causes rapid, precipitous drops in systemic vascular resistance, triggering significant **reflex sympathetic activation**. This sympathetic surge can cause rebound vasoconstriction in the extremities, worsening the underlying vasospasm. Extended-release formulations provide smooth, continuous drug delivery that minimizes reflex sympathetic activation and safely sustains peripheral vasodilation.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"aneurysm": {
    title: "Peripheral Aneurysms (Femoral & Popliteal)",
    videoUrl: "coming-soon",
    duration: "25 mins",
    notes: `
      <style>
        @media print {
            .peripheral-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .peripheral-notes details { display: block; }
            .peripheral-notes details[open] summary ~ * { animation: none; }
        }
        .peripheral-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .peripheral-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .peripheral-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .peripheral-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .peripheral-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .peripheral-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background-color: #fff; }
        .peripheral-notes th, .peripheral-notes td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; vertical-align: top; }
        .peripheral-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; }
        .peripheral-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .peripheral-notes .box-red { background-color: #ffebee; border: 2px solid #c62828; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .peripheral-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .peripheral-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .peripheral-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .peripheral-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .peripheral-notes ul, .peripheral-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .peripheral-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="peripheral-notes">
        <h1>Peripheral Aneurysms (Femoral & Popliteal)</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Vascular Surgery Board Focus: Structural Pathologies, Thromboembolic Mechanics vs Rupture Vectors, and Interventional Protocols
        </p>

        <h2>1. Definitions & Structural Pathology</h2>
        <ul>
            <li><strong>Aneurysm:</strong> A permanent, localized focal dilation of an artery involving an increase of <span class="highlight">&gt; 50%</span> compared to its normal or adjacent expected segment diameter.</li>
            <li><strong>True Aneurysm:</strong> The dilated segment structural matrix remains intact, safely bounded by all three histomorphological layers of the arterial wall: **Intima, Media, and Adventitia**. 
                <br><em>Primary Driver:</em> Chronic systemic atherosclerosis and matrix metalloproteinase-driven elastin degradation.</li>
            <li><strong>False (Pseudo) Aneurysm:</strong> A pulsating encapsulated hematoma that communicates directly with the arterial lumen through a dynamic disruption in the vessel wall. The organizing capsule wall is composed purely of **adventitial fibrous tissue or compressed thrombus**, entirely lacking normal muscular or intimal layers.
                <br><em>Primary Drivers:</em> Blunted or penetrating vascular trauma, localized anastomotic infections, or iatrogenic arterial access punctures (e.g., post-cardiac catheterization).</li>
        </ul>

        <h2>2. Popliteal Artery Aneurysms (PAA)</h2>
        <p><strong>Clinical Status:</strong> Popliteal artery aneurysms account for approximately **70% of all peripheral artery aneurysms**, representing the single most frequent extra-abdominal peripheral aneurysm locus.</p>
        <ul>
            <li><strong>Etiology:</strong> Almost exclusively degenerative, atherosclerotic remodeling.</li>
            <li><strong>Systemic Associations (The High-Yield "Rule of 50"):</strong>
                <ul>
                    <li><strong>50%</strong> of presenting cases are completely **Bilateral**.</li>
                    <li><strong>30–50%</strong> of patients presenting with a PAA harbor a concurrent, highly lethal **Abdominal Aortic Aneurysm (AAA)**. Finding a popliteal aneurysm dictates proactive central imaging.</li>
                </ul>
            </li>
            <li><strong>Classic Clinical Presentation:</strong>
                <ul>
                    <li>A firm, pulsatile mass located deep within the popliteal fossa behind the knee.</li>
                    <li>A paradoxically prominent or hyper-pulsatile popliteal pulse noted on a routine vascular check (where normal popliteal pulses are notoriously difficult to isolate deeply).</li>
                </ul>
            </li>
        </ul>

        <div class="box-red">
            <h3 style="margin-top:0; color:#b71c1c; font-size: 1.2em;">🚨 The Clinical Trap: Micro-Embolism vs Rupture Mechanics</h3>
            <p>Unlike an Abdominal Aortic Aneurysm, where catastrophic free rupture is the primary mechanism of mortality, peripheral popliteal artery aneurysms carry entirely different physiological risk profiles:</p>
            <ul style="margin-top: 5px;">
                <li><strong>Free Rupture is Extremely Rare (&lt; 1%).</strong> Do not focus counseling on rupture risk.</li>
                <li><strong>The Predominant Threat is Severe, Limb-Threatening Ischemia:</strong>
                    <ul>
                        <li><strong>Chronic Distal Micro-Embolization:</strong> Laminated mural thrombus within the expanded aneurysm sac systematically shears off into downstream blood flow. This causes sudden patchy digital gangrene or patchy infarcts known clinically as **"Blue Toe Syndrome"** or **"Trash Foot"**, even with palpable proximal pedal pulses.</li>
                        <li><strong>Acute Aneurysmal Thrombosis:</strong> Total, sudden thrombotic occlusion of the entire aneurysm lumen. This results in severe Acute Limb Ischemia (ALI), presenting with the classic 6 P's: Pain, Pallor, Pulselessness, Paresthesia, Paralysis, and Poikilothermia. It carries a profound amputation risk if not rapidly revascularized.</li>
                    </ul>
                </li>
            </ul>
        </div>

        <h2>3. Femoral Artery Aneurysms</h2>
        <ul>
            <li><strong>True Femoral Aneurysms:</strong> Typically locate within the Common Femoral Artery (CFA). These are heavily linked with synchronous AAA and multi-segment peripheral vascular disease, classically presenting as an asymptomatic, pulsatile groin mass.</li>
            <li><strong>False Femoral Aneurysms (Pseudoaneurysms):</strong> Incidence has surged due to the pervasive use of large-bore sheaths for percutaneous coronary interventions and endovascular aortic adjustments.
                <ul>
                    <li><em>Diagnostic Presentation:</em> A painful, tender groin mass featuring an **expansile pulsation**, an audible systolic-diastolic **"to-and-fro" bruit** over the track, and a clear history of a recent percutaneous arterial puncture.</li>
                </ul>
            </li>
        </ul>

        <h2>4. Strategic Management Principles</h2>

        <h3>A. Objective Indications for Operative Repair</h3>
        <ul>
            <li>Any peripheral aneurysm that is overtly **Symptomatic** (e.g., local neurological compression pain, dynamic claudication, or localized embolic showering).</li>
            <li>An asymptomatic popliteal aneurysm that reaches an absolute diameter threshold of <span class="highlight">&gt; 2.0 cm</span>.</li>
            <li>The presence of a sub-critical size aneurysm that demonstrates a high-risk burden of laminated **mural thrombus** or poor outflow tract anatomy on duplex or CTA.</li>
        </ul>

        <h3>B. Definitive Open Surgical Reconstruction</h3>
        
        
        <ul>
            <li><strong>Surgical Objective:</strong> Isolate and exclude the diseased aneurysmal sac completely from the systemic circulation while restoring robust arterial flow to the distal lower extremity.</li>
            <li><strong>Operative Modality:</strong> High or low ligation of the native popliteal artery immediately proximal and distal to the aneurysm margins, coupled with an ipsilateral **Bypass Graft** utilizing autologous **Great Saphenous Vein (GSV)** (the conduit of choice for superior patency) or a synthetic PTFE graft.
                <br><em>Surgical Note:</em> Simple surgical excision followed by a primary end-to-end vascular anastomosis is anatomically impossible due to the extensive length of segmental arterial wall destruction.</li>
        </ul>

        <h3>C. Endovascular Repair (EVAR equivalents)</h3>
        <ul>
            <li>Deploying an endovascular **Covered Stent-Graft** (e.g., Viabahn device) across the internal length of the popliteal aneurysm, which isolates the sac from arterial flow through less invasive percutaneous access. This option is reserved for patients with high-risk medical comorbidities or hostile surgical necks.</li>
        </ul>

        <h3>D. Targeted Pseudoaneurysm Interventions</h3>
        <ul>
            <li><strong>Small Pseudoaneurysms (&lt; 2.0 cm):</strong> Can be safely managed with conservative, serial ultrasound observations, as the majority spontaneously thrombose without intervention.</li>
            <li><strong>Large or Expanding Pseudoaneurysms (&gt; 2.0 cm):</strong>
                <ul>
                    <li><strong>Ultrasound-Guided Compression:</strong> Utilizing the ultrasound transducer probe to apply direct mechanical pressure onto the connecting pseudoaneurysm neck channel for 20–30 minutes, promoting localized clotting.</li>
                    <li><strong>Ultrasound-Guided Percutaneous Thrombin Injection:</strong> Injecting bovine thrombin directly into the hyper-echoic pseudoaneurysm sac under real-time visualization. This is highly effective and represents the primary choice for un-ruptured iatrogenic injuries.</li>
                    <li><strong>Open Surgical Exploration:</strong> Indicated immediately if the pseudoaneurysm is actively expanding, demonstrates localized skin necrosis, or is complicated by underlying clinical infection/mycotic progression.</li>
                </ul>
            </li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Upon diagnosing an isolated unilateral Popliteal Artery Aneurysm in a new patient, what two subsequent diagnostic imaging steps are considered non-negotiable standard-of-care?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong>
                    <br>1. Complete Duplex Ultrasound or clinical evaluation of the **Contralateral Popliteal Fossa** is mandatory, because approximately **50% of these aneurysms are completely bilateral**.
                    <br>2. An **Abdominal Ultrasound or CT Aortogram** is mandatory to rule out a concurrent **Abdominal Aortic Aneurysm (AAA)**, given the high **30–50% pathomorphological association** between these vascular beds.</p>
                </div>
            </details>
        </div>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Board Questions)</h3>
            <p><em>Synthesize your vascular pathophysiology and surgical management skills against these high-yield oral prompts:</em></p>
            <ol style="margin-left: 20px;">
                <li>Contrast the primary mechanical complication profiles of an Abdominal Aortic Aneurysm versus a Popliteal Artery Aneurysm.</li>
                <li>What precise pathognomonic physical sign differentiates a true expansile arterial pulsation from a transmitted pulsation on clinical exam?</li>
                <li>Explain the underlying microvascular mechanism responsible for the development of "Blue Toe Syndrome" in a patient with palpable pedal pulses.</li>
                <li>What is the standard first-line interventional strategy for a large, symptomatic common femoral pseudoaneurysm following an un-complicated cardiac cath?</li>
                <li>Why is the autologous Great Saphenous Vein preferred over PTFE or Dacron for an open popliteal artery bypass reconstruction across the knee joint?</li>
            </ol>
            
            <hr style="border: 0; border-top: 1px solid #7f8c8d; margin: 20px 0;">

            <details>
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>An **AAA** presents a primary threat of dynamic, structural wall **Rupture**, leading to life-threatening retroperitoneal or intraperitoneal hemorrhage. In stark contrast, a **Popliteal Aneurysm** carries an extremely low risk of rupture, presenting instead a critical threat of **Thromboembolic Ischemia** via sac thrombosis or distal micro-embolization, which directly threatens limb viability.</li>
                        <li>An **Expansile Pulsation** features a true multidirectional expansion, where the clinician's examining fingers are actively pushed apart in both lateral and vertical vectors. A **Transmitted Pulsation** (such as a solid mass resting on top of a patent vessel) moves fingers purely upward in a single, vertical vector without separating them.</li>
                        <li>Micro-thrombi or cholesterol crystal fragments dislodge from a proximal embolic source (like an aneurysmal sac). These micro-emboli travel downstream and selectively occlude the small terminal digital arterioles of the foot, causing localized digital ischemia and a **"blue toe" appearance**, while the primary axial leg vessels (DP and PT arteries) remain completely patent and palpable.</li>
                        <li>The first-line therapy is **Ultrasound-Guided Percutaneous Thrombin Injection** directly into the pseudolumen sac. It has a high success rate and effectively avoids the morbidity of a repeat groin cutdown or surgical arterial patching.</li>
                        <li>The popliteal artery across the posterior knee knee space is subject to significant mechanical bending, torque, and positional flexion-extension forces. Autologous vein grafts possess superior native elasticity and compliance matching that resist mechanical kinking and structural thrombosis across a **mobile joint space**, yielding significantly higher long-term patency rates than rigid synthetic alternatives.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"cabg": {
    title: "Coronary Artery Bypass Grafting (CABG)",
    videoUrl: "coming-soon",
    duration: "35 mins",
    notes: `
      <style>
        @media print {
            .cabg-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .cabg-notes details { display: block; }
            .cabg-notes details[open] summary ~ * { animation: none; }
        }
        .cabg-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .cabg-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .cabg-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .cabg-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .cabg-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .cabg-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background-color: #fff; }
        .cabg-notes th, .cabg-notes td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; vertical-align: top; }
        .cabg-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; }
        .cabg-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .cabg-notes .box-red { background-color: #ffebee; border: 2px solid #c62828; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .cabg-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .cabg-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .cabg-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .cabg-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .cabg-notes ul, .cabg-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .cabg-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="cabg-notes">
        <h1>Coronary Artery Bypass Grafting (CABG)</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Cardiothoracic Board Focus: ACC/AHA Revascularization Guidelines, Conduit Patency Dynamics, and Post-Sternotomy ICU Critical Management
        </p>

        <h2>1. Surgical Definition & Objective</h2>
        <p><strong>Coronary Artery Bypass Grafting (CABG)</strong> is a surgical revascularization procedure designed to divert blood around severe stenoses or occlusions in the epicardial coronary artery tree. By utilizing autologous arterial or venous conduits, the operation restores normal perfusion pressures to down-stream ischemic myocardium, alleviating angina and mitigating the risk of future ischemic events.</p>

        <h2>2. Indications for Surgical Revascularization</h2>
        <p>Determining whether a patient should undergo surgical bypass rather than Percutaneous Coronary Intervention (PCI) is guided by clinical trials (e.g., SYNTAX, FREEDOM) and ACC/AHA guidelines. CABG is strongly indicated over PCI in the following clinical presentations:</p>
        <ul>
            <li><strong>Left Main Stem Stenosis:</strong> Angiographic luminal narrowing <span class="highlight">&gt; 50%</span>. CABG provides an absolute survival advantage over medical management and stenting.</li>
            <li><strong>Triple Vessel Disease (TVD):</strong> Severe stenosis (&gt; 70%) involving the Left Anterior Descending (LAD), Left Circumflex (LCx), and Right Coronary Artery (RCA) systems.</li>
            <li><strong>Multivessel Disease Complicated by Diabetes Mellitus:</strong> Diabetic patients with double or triple-vessel disease have significantly lower rates of major adverse cardiac events and reduced long-term mortality when revascularized via CABG (FREEDOM Trial).</li>
            <li><strong>Anatomically Complex Disease:</strong> High SYNTAX score (&ge; 23), where diffuse calcification or severe tortuosity compromises the success of stent placement.</li>
            <li><strong>Mechanical Complications of Myocardial Infarction:</strong> Acute ventricular septal defect (VSD), papillary muscle rupture leading to acute mitral regurgitation, or free wall rupture requiring concomitant structural repair.</li>
            <li><strong>Failed Percutaneous Intervention:</strong> Acute occlusion, major dissection, or recurrent in-stent restenosis causing dynamic cardiogenic shock.</li>
        </ul>

        <h2>3. Conduit Selection & Patency Dynamics</h2>
        <p>The choice of bypass conduit is a critical factor influencing long-term graft patency, survival rates, and the recurrence of anginal symptoms.</p>
        
        

        <table>
            <thead>
                <tr>
                    <th>Structural Feature</th>
                    <th>Left Internal Mammary Artery (LIMA)</th>
                    <th>Saphenous Vein Graft (SVG)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Anatomical Class</strong></td>
                    <td>Arterial conduit (typically kept in-situ as a pedicled graft).</td>
                    <td>Venous conduit (harvested from the lower extremity as a free graft).</td>
                </tr>
                <tr>
                    <td><strong>Long-term Patency (10 Years)</strong></td>
                    <td><strong>&gt; 90%</strong> (The clinical gold standard).</td>
                    <td><strong>~ 50%</strong> (High failure rate over time).</td>
                </tr>
                <tr>
                    <td><strong>Endothelial Physiology</strong></td>
                    <td>Active endothelium that continuously produces <strong>Nitric Oxide</strong> and prostacyclin, maintaining auto-regulation and offering extreme resistance to atherosclerosis.</td>
                    <td>Lacks native internal elastic lamina. Prone to accelerated **intimal hyperplasia** and vein graft atherosclerosis when subjected to high arterial pressures.</td>
                </tr>
                <tr>
                    <td><strong>Standard Target Vessel</strong></td>
                    <td>Anastomosed preferentially to the <strong>Left Anterior Descending (LAD)</strong> coronary artery.</td>
                    <td>Anastomosed to the Right Coronary Artery (RCA) or Obtuse Marginal branches of the LCx.</td>
                </tr>
            </tbody>
        </table>

        <p><strong>Alternative Conduit Strategies:</strong></p>
        <ul>
            <li><strong>Radial Artery (RA):</strong> Utilized as an additional arterial conduit to achieve complete arterial revascularization. <strong style="color: #b71c1c;">Pre-operative Guardrail:</strong> Requires a clinical and documented **Allen’s Test** to verify that the ulnar artery provides adequate collateral perfusion to the hand before harvesting.</li>
            <li><strong>Right Internal Mammary Artery (RIMA):</strong> Used alongside the LIMA for bilateral internal mammary artery (BIMA) grafting. While it optimizes long-term survival in young patients, it carries a higher risk of sternal wound infection or devascularization, particularly in insulin-dependent diabetic individuals.</li>
        </ul>

        <h2>4. Operative Execution & Principles</h2>

        <h3>Step 1: Surgical Exposure and Conduit Harvest</h3>
        <ul>
            <li>Simultaneous harvesting is initiated: the surgical team dissects the LIMA from the chest wall while a second operator harvests the SVG using open or endoscopic techniques from the leg.</li>
            <li>Exposure of the heart is achieved through a standard vertical line midline **median sternotomy**.</li>
        </ul>

        <h3>Step 2: Cardiopulmonary Bypass (CPB) & Diastolic Arrest</h3>
        <p>The standard operation is performed "on-pump," diverting blood away from the heart and lungs to maintain systemic tissue perfusion via a mechanical circuit.</p>
        
        
        <ul>
            <li><strong>Systemic Cannulation:</strong> A venous cannula is inserted into the right atrium to drain deoxygenated blood into the reservoir. An arterial cannula is placed into the ascending aorta to return oxygenated blood back to the systemic circulation.</li>
            <li><strong>Myocardial Protection (Cardioplegia):</strong> A cold, <span class="highlight">high-potassium solution</span> is infused directly into the aortic root or coronary sinus.
                <br><em>Physiological Mechanism:</em> The elevated extracellular potassium concentration shifts the resting membrane potential of cardiac myocytes, locking voltage-gated sodium channels in an inactive state. This induces immediate **diastolic arrest**, stopping the heart to protect it from ischemia while providing a still, bloodless surgical field.</li>
        </ul>

        <h3>Step 3: Graft Anastomosis</h3>
        <ul>
            <li><strong>Distal Anastomosis:</strong> The distal end of the conduit is microsurgically sutured to the target coronary artery beyond the point of obstruction using fine, non-absorbable monofilament sutures (7-0 or 8-0 Prolene).</li>
            <li><strong>Proximal Anastomosis:</strong> For free grafts like the SVG or radial artery, small punch holes are created in the ascending aorta, and the proximal ends are sutured in place. A pedicled LIMA remains attached to the subclavian artery, avoiding the need for a proximal aortic anastomosis.</li>
        </ul>

        <h3>Step 4: Separation from Bypass</h3>
        <ul>
            <li>The patient is systematically rewarmed, and air is meticulously vented from the cardiac chambers. If sinus rhythm does not return spontaneously, the heart is defibrillated with internal direct-current (DC) shock plates. Cardiopulmonary bypass is gradually tapered and stopped, the cannulas are removed, and the sternum is closed and stabilized using heavy steel wires.</li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What is Off-Pump Coronary Artery Bypass (OPCAB), and what physiological advantages does it offer over traditional on-pump surgery?</summary>
                <div style="margin-top: 10px;">
                    <p><strong>Answer:</strong> **OPCAB** is a surgical revascularization technique performed on a **beating heart** without the use of a cardiopulmonary bypass (CPB) machine. Specialized mechanical suction devices, such as the **"Octopus" Tissue Stabilizer**, physically immobilize the targeted epicardial vessel while the rest of the myocardium continues to beat and pump blood. By avoiding global cardioplegic arrest and systemic extracorporeal circulation, OPCAB reduces CPB-associated complications, such as systemic inflammatory response syndrome (SIRS), renal injury, and atheroembolic strokes caused by surgical manipulation of a calcified aorta.</p>
                </div>
            </details>
        </div>

        <h2>5. Post-operative Management & ICU Complications</h2>

        <div class="box-red">
            <h3 style="margin-top:0; color:#b71c1c; font-size: 1.2em;">🚨 Lethal ICU Emergency: Post-operative Cardiac Tamponade</h3>
            <p><strong>Clinical Scenario:</strong> A patient within 2 to 12 hours post-sternotomy exhibits stable hemodynamics that suddenly deteriorate into profound shock.</p>
            <ul style="margin-top: 5px;">
                <li><strong>Diagnostic Indicators:</strong> Sudden **cessation of chest tube drainage** (indicative of a clot blocking the drain) followed rapidly by refractory hypotension, narrowing pulse pressure, tachycardia, and a progressive rise in central venous pressure (CVP/JVP)—completing **Beck's Triad**.</li>
                <li><strong>Immediate Management Protocol:</strong> This is a mechanical emergency. If the patient develops pulseless electrical activity (PEA) or severe refractory shock, the immediate treatment is **Emergency Bedside Re-sternotomy** in the ICU to evacuate the compressing blood clots and relieve the pressure on the heart chambers.</li>
            </ul>
        </div>

        <h3>A. Early Complications (First 48 Hours)</h3>
        <ul>
            <li><strong>Low Cardiac Output Syndrome (LCOS):</strong> Defined as a cardiac index &lt; 2.2 L/min/m² without clinically overt hypovolemia. It presents with cold peripheral extremities, widening base deficits, metabolic acidosis, and oliguria.
                <br><em>Management:</em> Optimizing preload, followed by structured inotropic support (Dobutamine, Milrinone, or Epinephrine). Refractory cases require placement of an **Intra-Aortic Balloon Pump (IABP)** or an extracorporeal membrane oxygenation (ECMO) circuit.</li>
            <li><strong>New-Onset Post-operative Atrial Fibrillation (POAF):</strong> Occurs in 20–30% of patients, typically peaking on post-operative day 2 or 3 due to local atrial inflammation and high sympathetic tone.
                <br><em>Management:</em> Prophylactic and therapeutic use of intravenous **Amiodarone** or beta-blockers, alongside heart rate optimization and electrolyte replacement (keeping $K^+ > 4.5 \text{ mEq/L}$ and $Mg^{2+} > 2.0 \text{ mg/dL}$).</li>
            <li><strong>Coagulopathy and Hemorrhage:</strong> Caused by systemic heparinization, incomplete neutralization by protamine, hypothermia, or platelet dysfunction from contact with the CPB circuit.</li>
        </ul>

        <h3>B. Delayed Complications</h3>
        <ul>
            <li><strong>Deep Sternal Wound Infection & Mediastinitis:</strong> A life-threatening complication characterized by sternal instability ("sternal click"), purulent drainage, and systemic sepsis. Risk factors include poorly controlled diabetes mellitus, obesity, and devascularization from harvesting bilateral internal mammary arteries.</li>
            <li><strong>Early Graft Thrombosis:</strong> Typically presents as acute myocardial infarction within days of surgery, usually caused by technical issues at the anastomosis site or poor distal runoff.</li>
        </ul>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Evaluation)</h3>
            <p><em>Synthesize your cardiothoracic and critical care knowledge against these oral examination scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>Explain the specific biological reasons why the LIMA maintains a ten-year patency rate exceeding 90% compared to venous alternatives.</li>
                <li>An oromedical examiner asks you to explain why a patient with severe diabetes mellitus and triple-vessel disease should be guided toward CABG rather than multi-vessel drug-eluting stent placement.</li>
                <li>What is the chemical composition and the precise cellular mechanism of standard cold blood cardioplegia?</li>
                <li>How do you clinically differentiate acute cardiogenic shock from acute post-operative cardiac tamponade in a patient 4 hours after a sternotomy?</li>
                <li>Why does bilateral harvesting of both the left and right internal mammary arteries increase the relative risk of deep sternal wound breakdown?</li>
            </ol>
            
            <details style="margin-top: 20px;">
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>The LIMA has a well-developed internal elastic lamina with few fenestrations, which prevents smooth muscle cell migration into the intima. Additionally, its endothelial layer consistently upregulates **Nitric Oxide Synthase**, which produces nitric oxide to facilitate continuous vasodilation, inhibit platelet aggregation, and resist atherosclerosis.</li>
                        <li>Large multicenter trials (such as the FREEDOM Trial) show that diabetic patients with multi-vessel disease have significantly lower long-term mortality rates and fewer repeat revascularizations with CABG than with PCI. This is because surgical bypass protects the entire proximal coronary tree against de novo lesions, whereas stenting only addresses focal segments.</li>
                        <li>Cardioplegia is an extracellular solution with a **high potassium concentration** (typically 15–25 mEq/L). The elevated extracellular potassium shifts the myocardial resting membrane potential from $-90\text{ mV}$ to approximately $-50\text{ mV}$. This chronic depolarization keeps voltage-gated sodium channels in an inactive state, preventing the generation of an action potential and locking the heart in **diastolic arrest**, which drastically minimizes myocardial oxygen consumption.</li>
                        <li>While both present with hypotension and a low cardiac index, **cardiac tamponade** features a sudden drop in chest tube output, a high or rising central venous pressure (CVP), and equalization of diastolic pressures (CVP, pulmonary artery diastolic pressure, and pulmonary capillary wedge pressure merge). In contrast, primary cardiogenic shock typically presents with elevated filling pressures on the left side alongside continued chest tube drainage.</li>
                        <li>The internal mammary arteries provide the primary collateral arterial blood supply to the sternal halves via perforating branches. Harvesting both the LIMA and RIMA causes significant **sternal devascularization**, which impairs bone healing and tissue defense mechanisms, increasing the risk of deep wound breakdown and mediastinitis.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},

"thoracic-outlet": {
    title: "Thoracic Outlet Syndrome (TOS)",
    videoUrl: "coming-soon",
    duration: "30 mins",
    notes: `
      <style>
        @media print {
            .tos-notes { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .tos-notes details { display: block; }
            .tos-notes details[open] summary ~ * { animation: none; }
        }
        .tos-notes { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .tos-notes h1 { color: #003366; border-bottom: 4px solid #003366; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .tos-notes h2 { color: #003366; background-color: #e3f2fd; border-left: 6px solid #1565c0; padding: 12px; margin-top: 40px; border-radius: 0 5px 5px 0; font-size: 1.5em; font-weight: bold; }
        .tos-notes h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; }
        .tos-notes .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #000; border: 1px solid #ffeeba; }
        .tos-notes table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background-color: #fff; }
        .tos-notes th, .tos-notes td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; vertical-align: top; }
        .tos-notes th { background-color: #003366; color: white; text-transform: uppercase; font-size: 0.9em; }
        .tos-notes tr:nth-child(even) { background-color: #f9f9f9; }
        .tos-notes .box-red { background-color: #ffebee; border: 2px solid #c62828; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .tos-notes .recall-box { background-color: #fff0f6; border: 2px dashed #d32f2f; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .tos-notes details summary { cursor: pointer; color: #c62828; font-weight: bold; outline: none; }
        .tos-notes .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 60px; border: 1px solid #37474f; }
        .tos-notes .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .tos-notes ul, .tos-notes ol { padding-left: 20px; margin-bottom: 1rem; }
        .tos-notes li { margin-bottom: 0.5rem; }
      </style>

      <div class="tos-notes">
        <h1>Thoracic Outlet Syndrome (TOS)</h1>
        <p style="text-align: center; font-style: italic; color: #7f8c8d; margin-top: -15px; margin-bottom: 30px;">
          Vascular & Surgical Board Focus: The Interscalene Triangle, Provocative Maneuvers, and Effort Thrombosis Strategies
        </p>

        <h2>1. Anatomical Architecture & Boundaries</h2>
        <p><strong>Thoracic Outlet Syndrome (TOS)</strong> refers to a distinct clinical spectrum of neurovascular disorders caused by mechanical compression of the brachial plexus trunks and/or the subclavian vessels as they pass from the root of the neck toward the axilla.</p>
        
        

        <h3>The Interscalene Triangle (The Primary Compressor)</h3>
        <ul>
            <li><strong>Anterior Boundary:</strong> Posterior border of the Scalenus Anterior muscle.</li>
            <li><strong>Posterior Boundary:</strong> Anterior border of the Scalenus Medius muscle.</li>
            <li><strong>Inferior Base:</strong> Superior surface of the First Rib.</li>
            <li><strong>Anatomical Contents:</strong> Trunks of the <strong>Brachial Plexus</strong> and the <strong>Subclavian Artery</strong>.</li>
            <li><strong style="color: #b71c1c;">Surgical Pearl:</strong> The **Subclavian Vein** and the **Phrenic Nerve** run completely *Anterior* to the Scalenus Anterior muscle. The vein lies outside the interscalene triangle, meaning pure neurogenic and isolated venous syndromes involve different local mechanisms.</li>
        </ul>

        <h2>2. Clinical Classification Matrix</h2>
        <p>TOS is classified into three groups based on the specific structures undergoing mechanical compression:</p>

        <table>
            <thead>
                <tr>
                    <th>Diagnostic Type</th>
                    <th>Compressed Target Structure</th>
                    <th>Clinical Frequency</th>
                    <th>Pathognomonic Presentation & Examination Profile</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Neurogenic TOS (nTOS)</strong></td>
                    <td>Lower trunk of the Brachial Plexus (<strong>C8–T1 roots</strong>).</td>
                    <td><strong>~95% of Cases</strong></td>
                    <td>Pain localized to the neck, trapezius, and shoulder radiating down the ulnar forearm. Paresthesias in the 4th/5th digits. Progressive motor weakness and loss of intrinsic hand dexterity.</td>
                </tr>
                <tr>
                    <td><strong>Venous TOS (vTOS)</strong></td>
                    <td>Subclavian Vein (often within the costoclavicular space).</td>
                    <td><strong>3–4% of Cases</strong></td>
                    <td>Sudden-onset, diffuse upper extremity swelling, objective pitting edema, deep dull aching, cyanotic skin discoloration, and visible engorged collateral veins across the chest wall.</td>
                </tr>
                <tr>
                    <td><strong>Arterial TOS (aTOS)</strong></td>
                    <td>Subclavian Artery (secondary to structural anomalies like a cervical rib).</td>
                    <td><strong>~1% of Cases</strong></td>
                    <td>Limb pallor, persistent coldness, asymmetric upper extremity blood pressures, exertional claudication, weak radial pulse, post-stenotic micro-embolization, and necrotic digital ulcers.</td>
                </tr>
            </tbody>
        </table>

        <div class="box-red">
            <h4 style="margin-top:0; color:#b71c1c; font-size: 1.15em;">🚨 Paget-Schroetter Syndrome (Effort Thrombosis)</h4>
            <p><strong>Clinical Definition:</strong> Primary, acute thrombotic occlusion of the axillary-subclavian venous junction caused by repetitive mechanical microtrauma against the first rib and subclavius tendon during hyperabduction.</p>
            <ul style="margin-top: 5px;">
                <li><strong>Patient Archetype:</strong> Young, otherwise healthy athletes, weightlifters, baseball pitchers, or overhead manual laborers (e.g., painters).</li>
                <li><strong>Acute Presentation:</strong> Rapid-onset upper extremity swelling, deep cyanosis, global heaviness, and severe pain following intense exertion.</li>
                <li><strong>Emergent Management Protocol:</strong> Direct <strong>Catheter-Directed Thrombolysis (CDT)</strong> within the first 1–2 weeks to restore patency, followed by prompt surgical **First Rib Resection** to fix the underlying anatomical narrowing and prevent re-occlusion.</li>
            </ul>
        </div>

        <h2>3. Advanced Clinical Evaluation</h2>
        <ul>
            <li><strong>Pathological Pain Distribution:</strong> Deep aching in the cervical region, trapezius, and subscapular area that radiates down the medial aspect of the arm and forearm.</li>
            <li><strong>Sensory Alterations:</strong> Numbness and paresthesias tracking the C8–T1 dermatomes, isolated to the ring and little fingers.</li>
            <li><strong>The Gilliatt-Sumner Hand:</strong> Advanced, chronic neurogenic TOS can cause a unique motor finding. Long-term traction on the T1 motor axons running to the median nerve causes **severe, isolated atrophy of the Thenar Eminence** (specifically the abductor pollicis brevis), while sensory deficits remain isolated to the **Ulnar border** of the hand and digits.</li>
        </ul>

        <h2>4. Provocative Physical Maneuvers</h2>
        <p>These specialized clinical tests narrow the thoracic outlet compartments to reproduce symptoms or compress the subclavian artery:</p>

        <ul>
            <li><strong>Adson’s Maneuver (The Scalene Test):</strong>
                <ul>
                    <li>The clinician monitors the radial pulse. The patient takes a deep breath, fully extends the neck, and rotates the chin <strong>TOWARDS</strong> the affected side.</li>
                    <li><em>Anatomical Mechanism:</em> Deep inspiration and rotation cause the Scalenus Anterior muscle to contract and lift the first rib, narrowing the interscalene space. A **diminution or complete loss of the radial pulse** combined with a reproduction of the patient's neurological symptoms indicates a positive test.</li>
                </ul>
            </li>
            <li><strong>Wright’s Test (Hyperabduction Maneuver):</strong>
                <ul>
                    <li>The patient's arm is hyperabducted beyond 90 degrees and externally rotated while the radial pulse is evaluated.</li>
                    <li><em>Anatomical Mechanism:</em> This position pulls the neurovascular bundle tight underneath the **Pectoralis Minor tendon** and coracoid process. A positive test is marked by pulse attenuation or paresthesia reproduction.</li>
                </ul>
            </li>
            <li><strong>Roos Test / EAST (Elevated Arm Stress Test):</strong>
                <ul>
                    <li>The patient maintains a bilateral shoulder abduction and external rotation position (the 90-degree "surrender" posture) and slowly opens and closes their fists for 3 continuous minutes.</li>
                    <li><strong style="color: #b71c1c;">Clinical Significance:</strong> This is the <span class="highlight">Most Sensitive Provocative Test</span>. A positive result is marked by an **inability to complete the full 3 minutes** due to severe ischemic pain, paresthesia, or functional limb dropping.</li>
                </ul>
            </li>
        </ul>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Why do patients with Arterial TOS often develop ischemic digital ulcers even when their proximal subclavian artery remains completely patent?</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> Chronic compression of the subclavian artery creates a focal area of high-velocity turbulent flow, which weakens the vessel wall and leads to **post-stenotic dilatation or aneurysm formation**. The altered blood flow patterns inside this dilated zone promote endothelial damage and the accumulation of **mural thrombus**. These micro-thrombi can break off, showering down the arm as **micro-emboli** that lodge in the digital arteries, causing focal gangrene and ulcers despite a patent proximal vessel.</p>
                </div>
            </details>
        </div>

        <h2>5. Strategic Management Interface</h2>

        <h3>A. Conservative & Rehabilitative Protocols</h3>
        <ul>
            <li>This is the first-line approach for <strong>over 90% of Neurogenic TOS</strong> cases.</li>
            <li><strong>Targeted Physiotherapy:</strong> Focuses on stretching the scalene and pectoralis minor muscles while strengthening the upper trapezius and levator scapulae. This helps elevate the shoulder girdle and naturally expand the costoclavicular space.</li>
            <li><strong>Activity Alteration:</strong> Patients should minimize prolonged overhead activities, apply ergonomic adaptations, and use NSAIDs for symptomatic relief during acute flare-ups.</li>
        </ul>

        <h3>B. Surgical Decompression Protocols</h3>
        <ul>
            <li><strong>Operative Indications:</strong> Complete failure of targeted physical therapy, progressive intrinsic hand muscle wasting, intractable pain, or any objective vascular complications (e.g., acute venous thrombosis, arterial aneurysm, or distal micro-embolization).</li>
            <li><strong>The Definitive Surgical Gold Standard:</strong> Complete <span class="highlight">First Rib Resection</span> alongside direct surgical scalenectomy (division of the scalenus anterior and medius muscles) to fully decompress the region.</li>
            <li><strong>Surgical Approaches:</strong>
                <ul>
                    <li><strong>Transaxillary Approach:</strong> Provides excellent cosmetic outcomes via a hidden axillary incision and offers a direct, clear view of the entire first rib body from below.</li>
                    <li><strong>Supraclavicular Approach:</strong> Highly preferred when managing concomitant cervical ribs or when extensive dissection and visual control of the brachial plexus trunks and subclavian artery are required.</li>
                </ul>
            </li>
        </ul>

        <div class="viva-section">
            <h3 style="color: #ffd54f; margin-top:0;">🔥 Rapid Fire Viva (High-Yield Evaluation)</h3>
            <p><em>Synthesize your anatomical and vascular surgical knowledge against these oral examination scenarios:</em></p>
            <ol style="margin-left: 20px;">
                <li>Name the specific neurovascular structures that pass inside the interscalene triangle, and list what runs directly anterior to it.</li>
                <li>What eponym is given to spontaneous, effort-induced thrombosis of the subclavian vein, and who is the classic patient archetype?</li>
                <li>Explain the anatomical compression mechanism behind a positive Wright's hyperabduction test.</li>
                <li>Describe the paradoxical muscle wasting and sensory loss pattern seen in a classic Gilliatt-Sumner hand presentation.</li>
                <li>What are the immediate next steps and long-term surgical planning required for a patient presenting with an acute Paget-Schroetter event?</li>
            </ol>
            
            <details style="margin-top: 20px;">
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol style="margin-left: 20px; padding-left: 0;">
                        <li>The **Subclavian Artery** and the trunks of the **Brachial Plexus** pass inside the triangle. The **Subclavian Vein** and the **Phrenic Nerve** pass anterior to the Scalenus Anterior muscle, outside the triangle borders.</li>
                        <li>It is called **Paget-Schroetter Syndrome**. It typically presents in young, otherwise healthy athletes or manual workers who perform repetitive, forceful overhead upper extremity movements.</li>
                        <li>Hyperabduction draws the neurovascular bundle taut, compressing it where it passes beneath the **Pectoralis Minor tendon** and the coracoid process.</li>
                        <li>It presents as **isolated motor wasting of the thenar eminence** (median nerve motor output via T1) paired with **sensory loss along the medial forearm and ulnar border of the hand** (C8/T1).</li>
                        <li>The immediate step is urgent **Catheter-Directed Thrombolysis (CDT)** to dissolve the acute clot and restore venous flow. This is followed by a planned surgical **First Rib Resection** during the same hospital stay to address the underlying bone-on-vein compression and prevent recurrence.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
},


"congenital-cataract": {
    title: "Congenital & Traumatic Cataract",
    videoUrl: "coming-soon",
    duration: "45 mins",
    notes: `
      <style>
        .congenital-dev-cataract { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .congenital-dev-cataract h1 { color: #002244; border-bottom: 4px solid #002244; padding-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
        .congenital-dev-cataract h2 { color: #002244; background-color: #f0f4f8; border-left: 6px solid #b71c1c; padding: 12px; margin-top: 35px; border-radius: 0 5px 5px 0; font-weight: bold; font-size: 1.5rem; }
        .congenital-dev-cataract h3 { color: #b71c1c; margin-top: 25px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; display: inline-block; font-weight: bold; font-size: 1.25rem; }
        .congenital-dev-cataract .highlight { background-color: #fff3cd; font-weight: bold; padding: 2px 6px; border-radius: 4px; color: #333; border: 1px solid #ffeeba; }
        .congenital-dev-cataract .patho-box { background-color: #e3f2fd; border: 2px solid #2196f3; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; font-weight: bold; color: #0d47a1; box-shadow: 3px 3px 8px rgba(0,0,0,0.1); }
        .congenital-dev-cataract .arrow { display: block; font-size: 24px; color: #d32f2f; margin: 8px 0; }
        .congenital-dev-cataract .mgmt-box { background-color: #e8f5e9; border: 2px solid #43a047; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .congenital-dev-cataract table { width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.2); font-size: 0.95em; }
        .congenital-dev-cataract th { background-color: #002244; color: white; padding: 12px 15px; text-align: left; text-transform: uppercase; font-size: 0.9em; }
        .congenital-dev-cataract td { border: 1px solid #ddd; padding: 12px 15px; vertical-align: top; }
        .congenital-dev-cataract tr:nth-child(even) { background-color: #f9f9f9; }
        .congenital-dev-cataract .recall-box { background-color: #fff0f6; border: 2px dashed #f06292; padding: 15px; margin: 25px 0; border-radius: 8px; }
        .congenital-dev-cataract details summary { cursor: pointer; color: #c2185b; font-weight: bold; outline: none; list-style: none; }
        .congenital-dev-cataract .viva-section { background-color: #263238; color: #eceff1; padding: 30px; border-radius: 12px; margin-top: 50px; border: 1px solid #37474f; }
        .congenital-dev-cataract .viva-title { color: #ffd54f; border-bottom: 1px solid #7f8c8d; padding-bottom: 10px; margin-top: 0; }
        .congenital-dev-cataract .answer-reveal { margin-top: 20px; padding: 15px; background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; }
        .congenital-dev-cataract .answer-reveal ol { list-style-type: decimal; padding-left: 20px; }
        .congenital-dev-cataract ul { list-style-type: disc; padding-left: 20px; margin-bottom: 1rem; }
        .congenital-dev-cataract li { margin-bottom: 0.5rem; }
      </style>

      <div class="congenital-dev-cataract">
        <h1>Congenital & Developmental Cataract</h1>

        <p><strong>Definition:</strong> Opacity of the crystalline lens present at birth (Congenital) or developing shortly after birth during infancy/childhood (Developmental). It is a major cause of <span class="highlight">preventable childhood blindness</span> (Leukocoria).</p>

        <h2>1. Etiology (The 1/3rd Rule)</h2>
        <p>For exam purposes, remember the breakdown of causes:</p>
        <ul>
            <li><strong>33% Idiopathic:</strong> No cause found.</li>
            <li><strong>33% Hereditary:</strong> Usually <strong>Autosomal Dominant</strong> (most common genetic mode).</li>
            <li><strong>33% Maternal/Systemic Causes:</strong>
                <ul>
                    <li><strong>Intrauterine Infections (TORCH):</strong> <span class="highlight">Rubella</span> (German Measles) is the most important.</li>
                    <li><strong>Metabolic:</strong> <span class="highlight">Galactosemia</span> (Oil drop cataract), Hypoglycemia, Hypocalcemia.</li>
                    <li><strong>Chromosomal:</strong> Down Syndrome (Trisomy 21), Lowe's Syndrome.</li>
                    <li><strong>Drug Induced:</strong> Corticosteroids.</li>
                </ul>
            </li>
        </ul>

        <h2>2. Morphological Classification (High Yield)</h2>
        

        <table>
            <thead>
                <tr>
                    <th style="width: 30%;">Type</th>
                    <th style="width: 70%;">Key Exam Features</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Lamellar (Zonular)</strong><br><span style="font-size:0.85em; color:#555;">(Most Common Type)</span></td>
                    <td>
                        <ul>
                            <li>Affects a specific zone of the lens (fetal nucleus).</li>
                            <li><strong>Sign:</strong> <span class="highlight">"Riders"</span> (radial spokes) seen riding over the equator of the opacity.</li>
                            <li>Due to transient insult (e.g., Hypocalcemia/Vit D deficiency) during gestation.</li>
                            <li>Better visual prognosis (peripheral vision often spared).</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td><strong>Blue Dot</strong><br>(Cataracta Punctata)</td>
                    <td>
                        <ul>
                            <li>Multiple punctate blue/white dots scattered in lens.</li>
                            <li><strong>Stationary & Harmless</strong> (Does not affect vision usually).</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td><strong>Nuclear</strong></td>
                    <td>
                        <ul>
                            <li>Total opacity of the embryonic nucleus.</li>
                            <li>Associated with <strong>Rubella</strong>. </li>
                            <li>Poor prognosis (dense central opacity).</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td><strong>Anterior Polar</strong></td>
                    <td>
                        <ul>
                            <li>Pyramidal opacity at anterior pole.</li>
                            <li>Due to delayed separation of lens vesicle from surface ectoderm.</li>
                        </ul>
                    </td>
                </tr>
                 <tr>
                    <td><strong>Posterior Polar</strong></td>
                    <td>
                        <ul>
                            <li>Associated with persistent hyaloid artery remnants.</li>
                            <li>High risk of <strong>Posterior Capsule Rupture (PCR)</strong> during surgery.</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: What is the "Classic Triad" of Congenital Rubella Syndrome?</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong><br>
                    1. Congenital Cataract (Nuclear/Pearly).<br>
                    2. Sensorineural Deafness.<br>
                    3. Congenital Heart Disease (PDA - Patent Ductus Arteriosus).</p>
                </div>
            </details>
        </div>

        <h2>3. Pathophysiology</h2>
        <div class="patho-box">
            <h3>⚡ Mechanism of Congenital Opacity</h3>
            
            <br><br>
            Teratogenic Insult (Viral/Metabolic/Genetic) during 1st Trimester
            <span class="arrow">⬇</span>
            Interference with development of <span class="highlight">Primary Lens Fibers</span>
            <span class="arrow">⬇</span>
            Aberrant lens fiber formation or Necrosis of formed fibers
            <span class="arrow">⬇</span>
            Lens proteins become opaque + Water Imbalance
            <span class="arrow">⬇</span>
            <strong>PERMANENT LENS OPACITY</strong>
            <br><span style="font-size:0.9em; font-weight:normal;">(If insult stops, clear fibers form around the opaque ones → Lamellar Cataract)</span>
        </div>

        <h2>4. Clinical Features & Assessment</h2>
        <ul>
            <li><strong>White Reflex (Leukocoria):</strong> White pupil noticed by parents. </li>
            <li><strong>Visual Behavior:</strong> Child fails to follow light or mother's face.</li>
            <li><strong>Nystagmus:</strong> Indicates poor visual prognosis (macula didn't develop fixation).</li>
            <li><strong>Strabismus (Squint):</strong> Usually Esotropia.</li>
        </ul>
        <p><strong>Investigation:</strong> <strong>B-Scan USG</strong> is mandatory if the fundus is not visible (to rule out Retinoblastoma or Retinal Detachment).</p>

        <h2>5. Management Protocol</h2>
        <div class="mgmt-box">
            <h3>🕰️ Timing of Surgery (Crucial)</h3>
            <ul>
                <li><strong>Bilateral Dense Cataract:</strong> Operate <span class="highlight">6-8 weeks</span> of age (Critical period for fixation).</li>
                <li><strong>Unilateral Dense Cataract:</strong> Operate <span class="highlight">URGENTLY (within weeks)</span> to prevent dense Amblyopia.</li>
                <li><strong>Partial Cataract:</strong> Observe + Pupillary dilatation (Mydriatics) if vision is decent.</li>
            </ul>
        </div>

        <h3>Comparison: Pediatric vs. Adult Cataract Surgery</h3>
        <p><em>This is a favorite university exam question.</em></p>
        <table>
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>Adult Cataract Surgery</th>
                    <th>Pediatric Cataract Surgery</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Anesthesia</strong></td>
                    <td>Local (Peribulbar/Topical)</td>
                    <td><span class="highlight">General Anesthesia (Mandatory)</span></td>
                </tr>
                <tr>
                    <td><strong>Capsulotomy (Anterior)</strong></td>
                    <td>CCC (Manual)</td>
                    <td>Vitrectorhexis (Manual CCC is hard due to elastic capsule)</td>
                </tr>
                <tr>
                    <td><strong>Posterior Capsule</strong></td>
                    <td>Left intact (usually)</td>
                    <td><span class="highlight">Primary Posterior Capsulotomy (PPC)</span> is DONE.</td>
                </tr>
                <tr>
                    <td><strong>Vitreous</strong></td>
                    <td>Not disturbed</td>
                    <td><span class="highlight">Anterior Vitrectomy</span> is mandatory (to prevent PCO).</td>
                </tr>
                <tr>
                    <td><strong>IOL Implantation</strong></td>
                    <td>Primary IOL is standard</td>
                    <td>Controversial < 2 years. Usually Aphakic glasses first, IOL later (Secondary IOL).</td>
                </tr>
                <tr>
                    <td><strong>Post-op Reaction</strong></td>
                    <td>Mild</td>
                    <td>Severe Uveal reaction (Fibrinous).</td>
                </tr>
            </tbody>
        </table>

        <div class="recall-box">
            <details>
                <summary>❓ Recall Check: Why is Primary Posterior Capsulotomy (PPC) + Anterior Vitrectomy mandatory in children but not adults?</summary>
                <div style="margin-top:10px;">
                    <p><strong>Answer:</strong> Because the rate of Posterior Capsule Opacification (PCO) in children is nearly 100% due to highly active epithelial cells. The posterior capsule acts as a scaffold for these cells to grow; removing it prevents secondary cataract.</p>
                </div>
            </details>
        </div>

        <h2>6. Complications & Prognosis</h2>
        <ul>
            <li><strong>Amblyopia (Lazy Eye):</strong> The most common and serious complication. Requires aggressive <strong>Occlusion Therapy</strong> (patching the good eye) post-surgery.</li>
            <li><strong>Posterior Capsule Opacification (PCO):</strong> If capsule is left intact.</li>
            <li><strong>Secondary Glaucoma:</strong> Aphakic glaucoma (years later).</li>
            <li><strong>Retinal Detachment:</strong> Late complication.</li>
        </ul>

        <div class="viva-section">
            <h3 class="viva-title">🔥 Rapid Fire Viva (High Yield)</h3>
            <p><em>Test your active recall. Attempt to answer before revealing!</em></p>
            <ol style="margin-left: 20px;">
                <li>What is the specific appearance of Galactosemia cataract called?</li>
                <li>What is the "Rule of 1/3" in the etiology of congenital cataract?</li>
                <li>Name the sign seen in Lamellar cataract where cortical spokes ride over the opacity.</li>
                <li>Which intra-uterine infection causes a "Pearly Nuclear Cataract"?</li>
                <li>Why is "Nystagmus" a bad prognostic sign in a child with cataract?</li>
            </ol>

            <details style="margin-top: 20px;">
                <summary style="font-size: 1.1em; color: #ffd54f;">▼ Click to Reveal Answers</summary>
                <div class="answer-reveal">
                    <ol>
                        <li><strong>Oil-drop cataract</strong>. </li>
                        <li><strong>1/3 Idiopathic</strong>, <strong>1/3 Hereditary</strong> (AD), and <strong>1/3 Maternal/Systemic</strong>.</li>
                        <li><strong>Riders</strong>.</li>
                        <li><strong>Rubella</strong> (German Measles).</li>
                        <li>It indicates that the macula failed to develop fixation due to long-standing visual deprivation; the visual prognosis is poor even after surgery.</li>
                    </ol>
                </div>
            </details>
        </div>
      </div>
    `
    }
  };
