const crisisData = {
    // A/B
    'ab-difficult-airway': { title: 'Unanticipated DIFFICULT AIRWAY', content: '<h3>Placeholder content...</h3>' },
    'ab-aspiration': { title: 'ASPIRATION', content: '<h3>Placeholder content...</h3>' },
    'ab-bronchospasm': { title: 'BRONCHOSPASM', content: '<h3>Placeholder content...</h3>' },
    'ab-co2-trace': { title: 'abnormal / absent CO2 TRACE', content: '<h3>Placeholder content...</h3>' },
    'ab-capnothorax': { title: 'CAPNOTHORAX', content: '<h3>Placeholder content...</h3>' },
    'ab-pneumothorax': { title: 'PNEUMOTHORAX', content: '<h3>Placeholder content...</h3>' },
    'ab-fire': { title: 'FIRE - airway', content: '<h3>Placeholder content...</h3>' },
    'ab-hypoxia': { title: 'HYPOXIA - undifferentiated', content: '<h3>Placeholder content...</h3>' },
    'ab-stridor': { title: 'Post-extubation STRIDOR', content: '<h3>Placeholder content...</h3>' },

    // C
    'c-aicd': { title: 'AICD malfunction / interference', content: '<h3>Placeholder content...</h3>' },
    'c-anaphylaxis': { 
        title: 'ANAPHYLAXIS', 
        content: `
            <h3>Immediate Actions</h3>
            <ul>
                <li>Call for help</li>
                <li>Give 100% Oxygen</li>
                <li>Remove trigger (e.g. stop suspected drug infusion)</li>
                <li><strong>Adrenaline</strong> 50mcg iv (titrate) OR 500mcg IM</li>
            </ul>
            <h3>Secondary Management</h3>
            <ul>
                <li>Fluid bolus 20ml/kg</li>
                <li>Consider intubation if airway compromise</li>
            </ul>
        ` 
    },
    'c-cardiac-arrest': { 
        title: 'Adult CARDIAC ARREST', 
        content: `
            <h3>Immediate Actions</h3>
            <ul>
                <li>Call Code Blue</li>
                <li>Start CPR (30:2)</li>
                <li>Attach defib pads and check rhythm</li>
            </ul>
        ` 
    },
    'c-cals': { title: 'CALS', content: '<h3>Placeholder content...</h3>' },
    'c-bradycardia': { title: 'BRADYCARDIA', content: '<h3>Placeholder content...</h3>' },
    'c-vasospasm': { title: 'CORONARY VASOSPASM', content: '<h3>Placeholder content...</h3>' },
    'c-embolism': { title: 'Air / Gas EMBOLISM', content: '<h3>Placeholder content...</h3>' },
    'c-haemorrhage': { title: 'Massive HAEMORRHAGE', content: '<h3>Placeholder content...</h3>' },
    'c-ischaemia': { title: 'Intra-op MYOCARDIAL ISCHAEMIA', content: '<h3>Placeholder content...</h3>' },
    'c-transfusion': { title: 'Haemolytic TRANSFUSION REACTION', content: '<h3>Placeholder content...</h3>' },
    'c-hypertension': { title: 'Undifferentiated HYPERTENSION', content: '<h3>Placeholder content...</h3>' },
    'c-tachy-broad': { title: 'TACHYCARDIA – BROAD complex', content: '<h3>Placeholder content...</h3>' },
    'c-tachy-narrow': { title: 'TACHYCARDIA – NARROW complex', content: '<h3>Placeholder content...</h3>' },

    // D
    'd-aneurysm': { title: 'Aneurysm RUPTURE (OT / IR)', content: '<h3>Placeholder content...</h3>' },
    'd-autonomic': { title: 'AUTONOMIC DYSREFLEXIA', content: '<h3>Placeholder content...</h3>' },
    'd-vasospasm': { title: 'Cerebral VASOSPASM', content: '<h3>Placeholder content...</h3>' },
    'd-emergence': { title: 'Delayed EMERGENCE', content: '<h3>Placeholder content...</h3>' },
    'd-stroke': { title: 'STROKE', content: '<h3>Placeholder content...</h3>' },
    'd-spinal': { 
        title: 'HIGH / TOTAL SPINAL', 
        content: `
            <div class="crisis-section alert-box">
                <ul>
                    <li>CALL FOR ASSISTANCE</li>
                    <li>CEASE OFFENDING AGENT (EPIDURAL OFF)</li>
                    <li>REASSURE PATIENT</li>
                    <li>PROVIDE VENTILATORY SUPPORT +/- PREPARE FOR RSI</li>
                    <li>APPLY LEFT UTERINE DISPLACEMENT</li>
                    <li>FLUID BOLUS +/- LEG ELEVATION</li>
                    <li>ALPHA AGONIST +/- ATROPINE/ADRENALINE</li>
                    <li>ANTICIPATE <a href="crisis.html?id=o-arrest">PEA ARREST / MATERNAL COLLAPSE</a></li>
                    <li>CONSIDER PERIMORTEM CAESAREAN - NO ROSC @ 4 MIN</li>
                </ul>
            </div>
        ` 
    },
    'd-icp': { title: 'Increased INTRACRANIAL PRESSURE', content: '<h3>Placeholder content...</h3>' },
    'd-evoked': { title: 'Loss of EVOKED POTENTIALS', content: '<h3>Placeholder content...</h3>' },
    'd-polyuria': { title: 'POLYURIA in NEUROSURGERY', content: '<h3>Placeholder content...</h3>' },
    'd-seizure': { title: 'SEIZURE during craniotomy', content: '<h3>Placeholder content...</h3>' },

    // E
    'e-last': { 
        title: 'LAST', 
        content: `
            <div class="crisis-section alert-box">
                <ul>
                    <li>CALL FOR HELP</li>
                    <li>CEASE OFFENDING AGENT</li>
                    <li>RETRIEVE LIPID EMULSION 20% / LAST BOX</li>
                    <li>1.5ML/KG BOLUS + 15ML/KG/HR, GOAL = CVS STABILTY</li>
                    <li>RPT 1.5ML/KG BOLUS X2 @ 5/60 / DOUBLE INFUSION @ 5/60 to 30ML/KG/HR (MAX 12ML/KG or 840ML)</li>
                    <li>ANTICIPATE PROLONGED ALS (CONSIDER EARLY ECMO ACTIVATION)</li>
                    <li>REDUCED ARREST DOSE ADRENALINE (1 MCG/KG BOLUS) - AVOID VASOPRESSIN</li>
                    <li>DYSRHYTHMIA MX - AMIODARONE (AVOID LIGNOCAINE / PROCAINAMIDE, BBs, CCBs)</li>
                    <li>SEIZURE MX - JUDICIOUS MIDAZOLAM / PROPOFOL / THIOPENTONE +/- NMBA</li>
                    <li>POST-EVENT LIPASE</li>
                </ul>
            </div>
        ` 
    },
    'e-mh': { 
        title: 'MALIGNANT HYPERTHERMIA', 
        content: `
            <div class="crisis-section alert-box">
                <ul>
                    <li>CALL FOR HELP++</li>
                    <li>CONFIRM DIAGNOSIS - IS THIS AIR?</li>
                    <li>RETRIEVE MH TROLLEY</li>
                    <li>ALLOCATE ROLES</li>
                    <li>HYPERVENTILATE WITH HIGH FLOWS @ 100%</li>
                    <li>APPLY CHARCOAL FILTERS AND REMOVE VAPORISER (LEAVE CIRCIUT INSITU)</li>
                    <li>INITIATE TIVA</li>
                    <li>DANTROLENE 2.5MG/KG BY TBW</li>
                    <li>REPEAT 2.5MG/KG @ 5/60 INTERVALS (MAX 10MG/KG)</li>
                    <li>TREAT SEQUELAE
                        <ul style="list-style-type: '- '; padding-left: 1.5rem; margin-top: 0.25rem;">
                            <li>Hyperkalaemia – CaCl, Insulin/Dextrose</li>
                            <li>Acidosis – hyperventilate, consider sodium bicarbonate</li>
                            <li>Arrhythmias (lignocaine, amiodarone)</li>
                            <li>Hyperthermia – active cooling to 38 degrees</li>
                            <li>Arterial line, CVC, IDC</li>
                            <li>Bloods including CK</li>
                            <li>Transfer ICU / appropriate centre</li>
                            <li>Referral to MH clinic</li>
                        </ul>
                    </li>
                </ul>
            </div>
        ` 
    },
    'e-hyperkalaemia': { title: 'HYPERKALAEMIA', content: '<h3>Placeholder content...</h3>' },
    'e-hyponatraemia': { title: 'HYPONATRAEMIA', content: '<h3>Placeholder content...</h3>' },
    'e-fire': { title: 'FIRE in THEATRE', content: '<h3>Placeholder content...</h3>' },
    'e-serotonin': { title: 'SEROTONIN SYNDROME', content: '<h3>Placeholder content...</h3>' },
    'e-thyroid': { title: 'THYROID STORM', content: '<h3>Placeholder content...</h3>' },

    // O
    'o-eclampsia': { title: 'ECLAMPSIA / maternal SEIZURE', content: '<h3>Placeholder content...</h3>' },
    'o-arrest': { 
        title: 'Maternal COLLAPSE / ARREST', 
        content: `
            <div class="crisis-section alert-box">
                <ul>
                    <li>CALL FOR ASSISTANCE</li>
                    <li>INITIATE <a href="crisis.html?id=c-cardiac-arrest">ALS</a> - <strong>CONSIDER SPECIAL CIRCUMSTANCE:</strong>
                        <ol style="padding-left: 1.5rem; margin-top: 0.25rem;">
                            <li>LEFT UTERINE DISPLACEMENT</li>
                            <li>X2 WIDE BORE IV ACCESS</li>
                            <li>EARLY INTUBATION / RSI</li>
                            <li>FACILITATE DELIVERY (INSTRUMENTAL VS CAESAEAN)</li>
                            <li>>20 WKS = PERIMORTEM CAESAREAN SECTION @ 4 MIN</li>
                        </ol>
                    </li>
                </ul>
            </div>
        ` 
    },
    'o-pph': { title: 'PRIMARY POST PARTUM HAEMORRHAGE', content: '<h3>Placeholder content...</h3>' },

    // P
    'p-arrest': { title: 'Paediatric CARDIAC ARREST', content: '<h3>Placeholder content...</h3>' },
    'p-neonatal': { title: 'NEONATAL Advanced Life Support', content: '<h3>Placeholder content...</h3>' },
    'p-tet': { title: 'TET spell', content: '<h3>Placeholder content...</h3>' },

    // Resources
    'r-formulary': { title: 'Drug Formulary', content: '<h3>Placeholder content...</h3>' },
    'r-rsi': { title: 'RSI Checklist', content: '<h3>Placeholder content...</h3>' },
    'r-vha': { title: 'VHA guidance - TEG/ROTEM', content: '<h3>Placeholder content...</h3>' },
    'r-about': { title: 'About GasCrisis.net', content: '<h3>Placeholder content...</h3>' },
    'r-credited': { 
        title: 'Credited Resources', 
        content: `
            <div class="crisis-section">
                <ul style="list-style-type: none; padding-left: 0;">
                    <li>Association of Anaesthetists. Quick Reference Handbook: Anaesthetic Emergencies. 3rd ed. London: Association of Anaesthetists; 2024.</li>
                    <li>Borshoff DC. The anaesthetic crisis manual. International edition, version 2.0. Perth: Leeuwin Press; 2017.</li>
                </ul>
            </div>
        ` 
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // --- Global Disclaimer Logic for Both Pages ---
    const disclaimerModal = document.getElementById('disclaimer-modal');
    const agreeBtn = document.getElementById('agree-btn');

    if (disclaimerModal && agreeBtn) {
        if (!localStorage.getItem('gascrisis_agreed')) {
            disclaimerModal.style.display = 'flex';
            setTimeout(() => {
                disclaimerModal.classList.add('show');
            }, 50);
        }

        agreeBtn.addEventListener('click', () => {
            localStorage.setItem('gascrisis_agreed', 'true');
            disclaimerModal.classList.remove('show');
            setTimeout(() => {
                disclaimerModal.style.display = 'none';
            }, 300);
        });
    }

    // --- Index Page Logic ---
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('gascrisis_net/')) {
        
        // Search Functionality
        const searchInput = document.getElementById('crisis-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase().trim();
                
                document.querySelectorAll('.crisis-list a').forEach(a => {
                    a.classList.remove('highlight');
                });
                
                if (searchTerm.length < 2) return;
                
                document.querySelectorAll('.crisis-list a').forEach(a => {
                    const text = a.textContent.toLowerCase();
                    if (text.includes(searchTerm)) {
                        a.classList.add('highlight');
                    }
                });
            });
        }
    }

    // --- Crisis Detail Page Logic ---
    if (window.location.pathname.endsWith('crisis.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const crisisId = urlParams.get('id');

        const crisisTitleEl = document.getElementById('crisis-title');
        const crisisContentEl = document.getElementById('crisis-content');

        if (crisisId && crisisData[crisisId]) {
            crisisTitleEl.textContent = crisisData[crisisId].title;
            crisisContentEl.innerHTML = crisisData[crisisId].content;
        } else {
            if (crisisTitleEl) crisisTitleEl.textContent = 'Crisis Not Found';
            if (crisisContentEl) crisisContentEl.innerHTML = '<p>Sorry, the information for this crisis could not be found. Please return to the dashboard.</p>';
        }
    }
});
