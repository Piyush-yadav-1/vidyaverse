"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Book, PlayCircle, ChevronDown, ChevronUp, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- 1. THE CURRICULUM DATABASE ---
// This defines the Units & Topics for each subject.
// You can expand this list later.
const courseData: Record<string, any> = {
  "anatomy": {
    title: "Human Anatomy",
    description: "Structure of the human body, from gross anatomy to microscopic tissues.",
    color: "text-rose-600 bg-rose-50 border-rose-200",
    units: [
      {
        title: "Unit 1: Upper Limb",
        topics: [
            { title: "Introduction to Upper Limb", slug: "intro-upper-limb", type: "video+note" },
            { title: "The Brachial Plexus", slug: "brachial-plexus", type: "video+note" },
            { title: "Shoulder Joint Complex", slug: "shoulder-joint", type: "video+note" },
            { title: "Axilla & its Contents", slug: "axilla", type: "video+note" },
        ]
      },
      {
        title: "Unit 2: Thorax",
        topics: [
            { title: "Thoracic Wall & Cage", slug: "thoracic-wall", type: "video+note" },
            { title: "Mediastinum", slug: "mediastinum", type: "video+note" },
            { title: "Heart & Pericardium", slug: "heart-pericardium", type: "video+note" },
            { title: "Lungs & Pleura", slug: "lungs-pleura", type: "video+note" },
        ]
      },
      {
        title: "Unit 3: Abdomen",
        topics: [
            { title: "Anterior Abdominal Wall", slug: "abd-wall", type: "video+note" },
            { title: "Inguinal Region", slug: "inguinal-region", type: "video+note" },
            { title: "Peritoneum", slug: "peritoneum", type: "video+note" },
        ]
      }
    ]
  },
  // --- NEW SURGERY SECTION ---
  "surgery": {
    title: "General Surgery",
    description: "Comprehensive study of surgical conditions, operative techniques, and management.",
    color: "text-red-600 bg-red-50 border-red-200",
    units: [
      {
        title: "Unit 1: General Surgery",
        topics: [
          { title: "Wounds and Wound Healing", slug: "wounds-healing", type: "video+note" },
          { title: "Abnormal Scar Formation", slug: "abnormal-scar", type: "video+note" },
          { title: "Surgical Infections", slug: "surgical-infections", type: "video+note" },
          { title: "Ulcers", slug: "ulcers", type: "video+note" },
          { title: "Cervical Lymphadenopathy & TB", slug: "cervical-lymphadenopathy", type: "video+note" },
          { title: "Shock", slug: "shock", type: "video+note" },
          { title: "Blood Transfusion", slug: "blood-transfusion", type: "video+note" },
          { title: "Burns", slug: "burns", type: "video+note" },
          { title: "Skin Grafting", slug: "skin-grafting", type: "video+note" },
          { title: "Sterilization, Consent & Post-op", slug: "sterilization-consent", type: "video+note" },
          { title: "Fluids and Electrolytes", slug: "fluids-electrolytes", type: "video+note" },
          { title: "Surgical Nutrition", slug: "surgical-nutrition", type: "video+note" },
          { title: "Tumors and Oncology Basics", slug: "oncology-basics", type: "video+note" },
          { title: "Transplantation", slug: "transplantation", type: "video+note" },
          { title: "Day Care & Minimally Invasive Surgery", slug: "mis-daycare", type: "video+note" },
          { title: "Medicolegal Aspects", slug: "medicolegal", type: "video+note" }
        ]
      },
      {
        title: "Unit 2: Trauma",
        topics: [
          { title: "Initial Assessment of Trauma", slug: "trauma-assessment", type: "video+note" },
          { title: "Head Injury", slug: "head-injury", type: "video+note" },
          { title: "Intracranial Hemorrhage", slug: "intracranial-hemorrhage", type: "video+note" },
          { title: "Chest Trauma", slug: "chest-trauma", type: "video+note" },
          { title: "Maxillofacial & Abdominal Trauma", slug: "maxillo-abd-trauma", type: "video+note" },
          { title: "Shock in Trauma", slug: "trauma-shock", type: "video+note" },
          { title: "DIC (Disseminated Intravascular Coagulation)", slug: "dic", type: "video+note" }
        ]
      },
      {
        title: "Unit 3: Breast",
        topics: [
          { title: "Benign Breast Disease", slug: "benign-breast-disease", type: "video+note" },
          { title: "Nipple Discharge", slug: "nipple-discharge", type: "video+note" },
          { title: "Carcinoma Breast", slug: "ca-breast", type: "video+note" },
          { title: "Special Types of Breast Lesions", slug: "special-breast-lesions", type: "video+note" },
          { title: "Breast Imaging and Screening", slug: "breast-imaging", type: "video+note" }
        ]
      },
      {
        title: "Unit 4: Endocrine",
        topics: [
          { title: "Thyroid Swellings", slug: "thyroid-swellings", type: "video+note" },
          { title: "Carcinoma Thyroid", slug: "ca-thyroid", type: "video+note" },
          { title: "Thyroidectomy", slug: "thyroidectomy", type: "video+note" },
          { title: "Thyroglossal Cyst", slug: "thyroglossal-cyst", type: "video+note" },
          { title: "Hyperparathyroidism", slug: "hyperparathyroidism", type: "video+note" },
          { title: "Pheochromocytoma", slug: "pheochromocytoma", type: "video+note" }
        ]
      },
      {
        title: "Unit 5: Gastrointestinal Tract (GIT)",
        topics: [
          { title: "Dysphagia & Esophageal Disorders", slug: "dysphagia", type: "video+note" },
          { title: "GERD", slug: "gerd", type: "video+note" },
          { title: "Mallory Weiss Syndrome", slug: "mallory-weiss", type: "video+note" },
          { title: "Upper GI Bleeding", slug: "upper-gi-bleed", type: "video+note" },
          { title: "Peptic Ulcer Disease", slug: "pud", type: "video+note" },
          { title: "Gastric Tumors", slug: "gastric-tumors", type: "video+note" },
          { title: "Portal Hypertension", slug: "portal-htn", type: "video+note" },
          { title: "Obstructive Jaundice", slug: "obstructive-jaundice", type: "video+note" },
          { title: "Gallstones", slug: "gallstones", type: "video+note" },
          { title: "Cholecystitis", slug: "cholecystitis", type: "video+note" },
          { title: "Amoebic Liver Abscess", slug: "amoebic-liver-abscess", type: "video+note" },
          { title: "Hydatid Cyst", slug: "hydatid-cyst", type: "video+note" },
          { title: "Acute Pancreatitis", slug: "acute-pancreatitis", type: "video+note" },
          { title: "Chronic Pancreatitis", slug: "chronic-pancreatitis", type: "video+note" },
          { title: "Pseudocyst of Pancreas", slug: "pseudocyst-pancreas", type: "video+note" },
          { title: "Carcinoma Head of Pancreas", slug: "ca-head-pancreas", type: "video+note" },
          { title: "Splenectomy", slug: "splenectomy", type: "video+note" },
          { title: "Intestinal TB", slug: "intestinal-tb", type: "video+note" },
          { title: "Intestinal Obstruction", slug: "intestinal-obstruction", type: "video+note" },
          { title: "Intussusception", slug: "intussusception", type: "video+note" },
          { title: "Appendix", slug: "appendix", type: "video+note" },
          { title: "Intestinal Stomas", slug: "stomas", type: "video+note" },
          { title: "Hemorrhoids", slug: "hemorrhoids", type: "video+note" },
          { title: "Anal Fissure", slug: "anal-fissure", type: "video+note" },
          { title: "Fistula in Ani", slug: "fistula-in-ani", type: "video+note" },
          { title: "Carcinoma Rectum", slug: "ca-rectum", type: "video+note" },
          { title: "Pilonidal Sinus", slug: "pilonidal-sinus", type: "video+note" },
          { title: "Anorectal Abscess", slug: "anorectal-abscess", type: "video+note" },
          { title: "Rectal Prolapse", slug: "rectal-prolapse", type: "video+note" }
        ]
      },
      {
        title: "Unit 6: Hernia",
        topics: [
          { title: "Basic Concepts", slug: "hernia-basics", type: "video+note" },
          { title: "Inguinal Hernia", slug: "inguinal-hernia", type: "video+note" },
          { title: "Complicated Hernia", slug: "complicated-hernia", type: "video+note" },
          { title: "Femoral Hernia", slug: "femoral-hernia", type: "video+note" },
          { title: "Umbilical & Paraumbilical Hernia", slug: "umbilical-hernia", type: "video+note" },
          { title: "Incisional & Other Hernias", slug: "incisional-hernia", type: "video+note" },
          { title: "Postoperative Complications", slug: "hernia-postop", type: "video+note" }
        ]
      },
      {
        title: "Unit 7: Urology",
        topics: [
          // Using the detailed list from our previous step [cite: 85]
          { title: "Renal and Urethral Calculi", slug: "renal-urethral-calculi", type: "video+note" },
          { title: "Hydronephrosis and Obstructive Uropathy", slug: "hydronephrosis-obstructive-uropathy", type: "video+note" },
          { title: "Anuria", slug: "anuria", type: "video+note" },
          { title: "Benign Prostatic Hyperplasia (BPH)", slug: "bph", type: "video+note" },
          { title: "Carcinoma Prostate", slug: "ca-prostate", type: "video+note" },
          { title: "Prostatitis", slug: "prostatitis", type: "video+note" },
          { title: "Carcinoma Urinary Bladder", slug: "ca-bladder", type: "video+note" },
          { title: "Vesicle Calculus", slug: "vesicle-calculus", type: "video+note" },
          { title: "Urinary Retention and Diversions", slug: "urinary-retention", type: "video+note" },
          { title: "Neurogenic Bladder", slug: "neurogenic-bladder", type: "video+note" },
          { title: "Intravenous Urography (IVU)", slug: "ivu", type: "video+note" },
          { title: "Renal Cell Carcinoma", slug: "rcc", type: "video+note" },
          { title: "Hematuria", slug: "hematuria", type: "video+note" },
          { title: "Wilms Tumor", slug: "wilms-tumor", type: "video+note" },
          { title: "ADPKD", slug: "adpkd", type: "video+note" },
          { title: "Urethra Anatomy", slug: "urethral-anatomy", type: "video+note" },
          { title: "Urethral Rupture", slug: "urethral-rupture", type: "video+note" },
          { title: "Urethral Structure", slug: "urethral-structure", type: "video+note" },
          { title: "PUV", slug: "puv", type: "video+note" },
          { title: "Periurethral Abscess", slug: "periurethral-abscess", type: "video+note" },
          { title: "Hypospadias", slug: "hypospadias", type: "video+note" },
          { title: "Phimosis and Circumcision", slug: "phimosis-circumcision", type: "video+note" },
          { title: "Carcinoma Penis", slug: "ca-penis", type: "video+note" },
          { title: "Undescended Testis", slug: "undescended-testis", type: "video+note" },
          { title: "Torsion Testis", slug: "torsion-testis", type: "video+note" },
          { title: "Benign Scrotal Swellings", slug: "benign-scrotal-swellings", type: "video+note" },
          { title: "Testicular Tumors", slug: "testicular-tumors", type: "video+note" },
          { title: "Genital TB in Males", slug: "genital-tb-males", type: "video+note" },
        ]
      },
      {
        title: "Unit 8: Vascular Disease",
        topics: [
          { title: "Deep Vein Thrombosis (DVT)", slug: "dvt", type: "video+note" },
          { title: "Varicose Veins", slug: "varicose-veins", type: "video+note" },
          { title: "Management of Varicose Veins", slug: "management-varicose-veins", type: "video+note" },
          { title: "Buerger’s Disease", slug: "buergers-disease", type: "video+note" },
          { title: "Chronic Limb Ischemia", slug: "chronic-limb-ischemia", type: "video+note" },
          { title: "Acute Limb Ischemia", slug: "acute-limb-ischemia", type: "video+note" },
          { title: "Lymphedema", slug: "lymphedema", type: "video+note" },
          { title: "Cystic Hygroma", slug: "cystic-hygroma", type: "video+note" },
          { title: "Diabetic Foot", slug: "diabetic-foot", type: "video+note" },
          { title: "Diabetic Foot Management", slug: "diabetic-foot-management", type: "video+note" },
          { title: "Raynaud’s Phenomenon", slug: "raynauds", type: "video+note" },
          { title: "Thoracic Outlet Syndrome", slug: "thoracic-outlet", type: "video+note" },
          { title: "Cervical Rib", slug: "cervical-rib", type: "video+note" },
          { title: "Aneurysm", slug: "aneurysm", type: "video+note" }
        ]
      },
      {
        title: "Unit 9: Thorax",
        topics: [
          { title: "Tracheostomy", slug: "tracheostomy", type: "video+note" },
          { title: "Intercostal Tube Drainage (ICD)", slug: "icd", type: "video+note" },
          { title: "Empyema Thoracis", slug: "empyema", type: "video+note" },
          { title: "Mediastinal Masses", slug: "mediastinal-masses", type: "video+note" },
          { title: "VATS (Video Assisted Thoracoscopic Surgery)", slug: "vats", type: "video+note" }
        ]
      },
      {
        title: "Unit 10: CNS",
        topics: [
          { title: "Raised Intracranial Pressure", slug: "raised-icp", type: "video+note" },
          { title: "Hydrocephalus", slug: "hydrocephalus", type: "video+note" }
        ]
      },
      {
        title: "Unit 11: CVS",
        topics: [
          { title: "CABG", slug: "cabg", type: "video+note" },
          { title: "Coarctation of Aorta", slug: "coarctation-aorta", type: "video+note" },
          { title: "Tetralogy of Fallot", slug: "tof", type: "video+note" },
          { title: "Cardiac Tamponade", slug: "cardiac-tamponade", type: "video+note" }
        ]
      },
      {
        title: "Unit 12: Miscellaneous",
        topics: [
          { title: "Radical Neck Dissection", slug: "radical-neck-dissection", type: "video+note" },
          { title: "Bronchial Cyst", slug: "bronchial-cyst", type: "video+note" },
          { title: "Parotid Gland Tumors", slug: "parotid-gland", type: "video+note" },
          { title: "Epulis", slug: "epulis", type: "video+note" },
          { title: "Dentigerous Cyst", slug: "dentigerous-cyst", type: "video+note" },
          { title: "Ranula", slug: "ranula", type: "video+note" },
          { title: "Developmental Anomalies of Face", slug: "face-anomalies", type: "video+note" },
          { title: "Basal Cell Carcinoma", slug: "bcc", type: "video+note" },
          { title: "Leukoplakia", slug: "leukoplakia", type: "video+note" },
          { title: "AIDS & Surgery", slug: "aids", type: "video+note" }
        ]
      }
    ]
  },
  "medicine": {
    title: "Internal Medicine",
    description: "In-depth study of systemic diseases, diagnostic protocols, and therapeutic management.",
    color: "text-blue-600 bg-blue-50 border-blue-200",
    units: [
      {
        title: "Unit 1: Cardiovascular System (CVS)",
        topics: [
          { title: "Hypertension", slug: "hypertension", type: "video+note" },
          { title: "Coronary Artery Disease", slug: "cad", type: "video+note" },
          { title: "Heart Failure", slug: "heart-failure", type: "video+note" },
          { title: "Arrhythmias", slug: "arrhythmias", type: "video+note" },
          { title: "Infective Endocarditis", slug: "infective-endocarditis", type: "video+note" },
          { title: "Pericardial Diseases", slug: "pericardial-diseases", type: "video+note" },
          { title: "Cardiomyopathies", slug: "cardiomyopathies", type: "video+note" },
          { title: "Shock", slug: "medicine-shock", type: "video+note" }
        ]
      },
      {
        title: "Unit 2: Central Nervous System (CNS)",
        topics: [
          { title: "Stroke", slug: "stroke", type: "video+note" },
          { title: "Epilepsy and Seizure Disorders", slug: "epilepsy", type: "video+note" },
          { title: "Meningitis", slug: "meningitis", type: "video+note" },
          { title: "Encephalitis", slug: "encephalitis", type: "video+note" },
          { title: "Multiple Sclerosis", slug: "multiple-sclerosis", type: "video+note" },
          { title: "GBS (Guillain Barre Syndrome)", slug: "gbs", type: "video+note" },
          { title: "Parkinson Disease", slug: "parkinson-disease", type: "video+note" },
          { title: "Headache", slug: "headache", type: "video+note" },
          { title: "Coma", slug: "coma", type: "video+note" }
        ]
      },
      {
        title: "Unit 3: Respiratory Medicine",
        topics: [
          { title: "Respiratory System", slug: "respiratory-system", type: "video+note" },
          { title: "Pneumonia", slug: "pneumonia", type: "video+note" },
          { title: "Empirical Treatment of Pneumonia", slug: "empirical-treatment-pneumonia", type: "video+note" },
          { title: "Pulmonary Tuberculosis", slug: "pulmonary-tuberculosis", type: "video+note" },
          { title: "Pulmonary Function Tests", slug: "pft", type: "video+note" },
          { title: "Asthma", slug: "asthma", type: "video+note" },
          { title: "COPD", slug: "copd", type: "video+note" },
          { title: "Bronchiectasis and Lung Abscess", slug: "lung-abscess", type: "video+note" },
          { title: "Pleural Effusion and Empyema", slug: "pleural-effusion", type: "video+note" },
          { title: "Pneumothorax", slug: "pneumothorax", type: "video+note" },
          { title: "Acute Bronchiolitis", slug: "bronchiolitis", type: "video+note" },
          { title: "Pertussis", slug: "pertussis", type: "video+note" },
          { title: "Approach to Acute Dyspnea", slug: "acute-dyspnea", type: "video+note" },
          { title: "Acute Pulmonary Edema", slug: "pulmonary-edema", type: "video+note" },
          { title: "ARDS", slug: "ards", type: "video+note" },
          { title: "Hemoptysis", slug: "hemoptysis", type: "video+note" },
          { title: "Obstructive Sleep Apnea", slug: "sleep-apnea", type: "video+note" },
          { title: "Covid 19", slug: "covid-19", type: "video+note" }
        ]
      },
      {
        title: "Unit 4: GIT and Hepatobiliary",
        topics: [
          { title: "Dysphagia", slug: "med-dysphagia", type: "video+note" },
          { title: "GERD", slug: "med-gerd", type: "video+note" },
          { title: "Peptic Ulcer Disease", slug: "med-pud", type: "video+note" },
          { title: "Upper GI Bleeding", slug: "med-gi-bleed", type: "video+note" },
          { title: "Tropical Sprue", slug: "tropical-sprue", type: "video+note" },
          { title: "Celiac Disease", slug: "celiac-disease", type: "video+note" },
          { title: "Diarrhea", slug: "diarrhea", type: "video+note" },
          { title: "Irritable Bowel Syndrome", slug: "ibs", type: "video+note" },
          { title: "Inflammatory Bowel Disease", slug: "ibd", type: "video+note" },
          { title: "Jaundice", slug: "jaundice", type: "video+note" },
          { title: "Hepatitis", slug: "hepatitis", type: "video+note" },
          { title: "Liver Cirrhosis", slug: "liver-cirrhosis", type: "video+note" },
          { title: "Portal Hypertension", slug: "med-portal-htn", type: "video+note" },
          { title: "Liver Abscess", slug: "liver-abscess", type: "video+note" }
        ]
      },
      {
        title: "Unit 5: Renal and Electrolytes",
        topics: [
          { title: "Acute Kidney Injury", slug: "aki", type: "video+note" },
          { title: "Chronic Kidney Disease", slug: "ckd", type: "video+note" },
          { title: "Nephritic Syndrome", slug: "nephritic-syndrome", type: "video+note" },
          { title: "Nephrotic Syndrome", slug: "nephrotic-syndrome", type: "video+note" },
          { title: "Urinary Tract Infections", slug: "uti", type: "video+note" },
          { title: "Sodium Imbalance (Hypo/Hypernatremia)", slug: "sodium-disorders", type: "video+note" },
          { title: "Potassium Imbalance (Hypo/Hyperkalemia)", slug: "potassium-disorders", type: "video+note" },
          { title: "Renal Tubular Disorders", slug: "renal-tubular", type: "video+note" }
        ]
      },
      {
        title: "Unit 6: Endocrine System",
        topics: [
          { title: "Diabetes Mellitus", slug: "diabetes", type: "video+note" },
          { title: "Acute Complications of DM", slug: "dm-acute", type: "video+note" },
          { title: "Chronic Complications of DM", slug: "dm-chronic", type: "video+note" },
          { title: "Hyperthyroidism", slug: "hyperthyroidism", type: "video+note" },
          { title: "Hypothyroidism", slug: "hypothyroidism", type: "video+note" },
          { title: "Acromegaly and Gigantism", slug: "acromegaly", type: "video+note" },
          { title: "Hypopituitarism", slug: "hypopituitarism", type: "video+note" },
          { title: "Diabetes Insipidus", slug: "diabetes-insipidus", type: "video+note" },
          { title: "SIADH", slug: "siadh", type: "video+note" },
          { title: "Cushing Syndrome", slug: "cushing", type: "video+note" },
          { title: "Addison’s Disease", slug: "addisons", type: "video+note" },
          { title: "Pheochromocytoma", slug: "med-pheochromocytoma", type: "video+note" },
          { title: "Conn’s Syndrome", slug: "conns", type: "video+note" },
          { title: "Calcium Disorders", slug: "calcium-disorders", type: "video+note" },
          { title: "Osteoporosis", slug: "osteoporosis", type: "video+note" },
          { title: "Metabolic Syndrome & Obesity", slug: "metabolic-syndrome", type: "video+note" }
        ]
      },
      {
        title: "Unit 7: Hematology",
        topics: [
          { title: "Anemia – General Approach", slug: "anemia-approach", type: "video+note" },
          { title: "Iron Deficiency Anemia", slug: "ida", type: "video+note" },
          { title: "Megaloblastic Anemia", slug: "megaloblastic-anemia", type: "video+note" },
          { title: "Hemolytic Anemias", slug: "hemolytic-anemia", type: "video+note" },
          { title: "Aplastic Anemia", slug: "aplastic-anemia", type: "video+note" },
          { title: "Thalassemia", slug: "thalassemia", type: "video+note" },
          { title: "Sickle Cell Disease", slug: "sickle-cell", type: "video+note" },
          { title: "Hemophilia", slug: "hemophilia", type: "video+note" }
        ]
      },
      {
        title: "Unit 8: Infectious Diseases",
        topics: [
          { title: "Pyrexia of Unknown Origin (PUO)", slug: "puo", type: "video+note" },
          { title: "Malaria", slug: "malaria", type: "video+note" },
          { title: "Dengue", slug: "dengue", type: "video+note" },
          { title: "Chikungunya", slug: "chikungunya", type: "video+note" },
          { title: "Enteric Fever (Typhoid)", slug: "typhoid", type: "video+note" },
          { title: "Leptospirosis", slug: "leptospirosis", type: "video+note" },
          { title: "HIV/AIDS", slug: "hiv-aids", type: "video+note" },
          { title: "Sepsis and Septic Shock", slug: "sepsis", type: "video+note" }
        ]
      },
      {
        title: "Unit 9: Rheumatology",
        topics: [
          { title: "Rheumatoid Arthritis", slug: "rheumatoid-arthritis", type: "video+note" },
          { title: "Osteoarthritis", slug: "osteoarthritis", type: "video+note" },
          { title: "Spondyloarthropathies", slug: "spondyloarthropathies", type: "video+note" },
          { title: "SLE", slug: "sle", type: "video+note" },
          { title: "Vasculitis", slug: "vasculitis", type: "video+note" },
          { title: "Gout & Pseudogout", slug: "gout", type: "video+note" },
          { title: "Inflammatory Myopathies", slug: "myopathies", type: "video+note" }
        ]
      },
      {
        title: "Unit 10: Emergency & Toxicology",
        topics: [
          { title: "Unconscious Patient Approach", slug: "unconscious-approach", type: "video+note" },
          { title: "Anaphylaxis", slug: "anaphylaxis", type: "video+note" },
          { title: "Organophosphorus Poisoning", slug: "op-poisoning", type: "video+note" },
          { title: "Snake Bite & Scorpion Sting", slug: "snake-scorpion", type: "video+note" },
          { title: "Heat Stroke", slug: "heat-stroke", type: "video+note" }
        ]
      }
    ]
  },

  // --- NEW SUBJECT: ANESTHESIA ---
  "anesthesia": {
    title: "Anesthesiology",
    description: "Perioperative care, pain management, and life support systems.",
    color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    units: [
      {
        title: "Unit 1: Anesthesia Techniques",
        topics: [
          { title: "Local Anaesthesia", slug: "local-anesthesia", type: "video+note" },
          { title: "Spinal Anaesthesia", slug: "spinal-anesthesia", type: "video+note" },
          { title: "Epidural Anaesthesia", slug: "epidural-anesthesia", type: "video+note" },
          { title: "General Anaesthesia", slug: "general-anesthesia", type: "video+note" }
        ]
      },
      {
        title: "Unit 2: Muscle Relaxants",
        topics: [
          { title: "Classification", slug: "relaxant-classification", type: "video+note" },
          { title: "Suxamethonium", slug: "suxamethonium", type: "video+note" }
        ]
      },
      {
        title: "Unit 3: Airway Management",
        topics: [
          { title: "Tracheostomy", slug: "anes-tracheostomy", type: "video+note" },
          { title: "Endotracheal Intubation", slug: "intubation", type: "video+note" }
        ]
      },
      {
        title: "Unit 4: Resuscitation",
        topics: [
          { title: "Basic Life Support (BLS)", slug: "bls", type: "video+note" },
          { title: "Advanced Cardiac Life Support (ACLS)", slug: "acls", type: "video+note" }
        ]
      }
    ]
  },

  // --- NEW SUBJECT: ORTHOPEDICS ---
  "orthopedics": {
    title: "Orthopedic Surgery",
    description: "Musculoskeletal system, fracture management, and bone pathology.",
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    units: [
      {
        title: "Unit 1: Fractures",
        topics: [
          { title: "Classification of Fractures", slug: "fracture-classification", type: "video+note" },
          { title: "Stages of Fracture Healing", slug: "fracture-healing", type: "video+note" },
          { title: "Fracture Complications", slug: "fracture-complications", type: "video+note" }
        ]
      },
      {
        title: "Unit 2: Peripheral Nerve Injuries",
        topics: [
          { title: "Classification of Nerve Injuries", slug: "nerve-injury-class", type: "video+note" },
          { title: "Neuropraxia", slug: "neuropraxia", type: "video+note" },
          { title: "Radial & Ulnar Nerve Palsy", slug: "nerve-palsy", type: "video+note" },
          { title: "Erb’s Palsy", slug: "erbs-palsy", type: "video+note" }
        ]
      },
      {
        title: "Unit 3: Upper Limb",
        topics: [
          { title: "Shoulder Dislocation", slug: "shoulder-dislocation", type: "video+note" },
          { title: "Humerus Fractures", slug: "humerus-fracture", type: "video+note" },
          { title: "Volkmann’s Ischemic Contracture", slug: "vic", type: "video+note" },
          { title: "Colle’s Fracture", slug: "colles-fracture", type: "video+note" }
        ]
      },
      {
        title: "Unit 4: Lower Limb",
        topics: [
          { title: "Hip Dislocation", slug: "hip-dislocation", type: "video+note" },
          { title: "Neck of Femur Fracture", slug: "nof-fracture", type: "video+note" },
          { title: "Ankle and Foot Injuries", slug: "ankle-foot", type: "video+note" }
        ]
      },
      {
        title: "Unit 5: Spine Disorders",
        topics: [
          { title: "PIVD (Prolapsed Disc)", slug: "pivd", type: "video+note" },
          { title: "Spinal Cord Injury", slug: "spinal-injury", type: "video+note" },
          { title: "Tuberculosis of Spine", slug: "tb-spine", type: "video+note" }
        ]
      },
      {
        title: "Unit 6: Pediatric Orthopedics",
        topics: [
          { title: "CTEV (Clubfoot)", slug: "ctev", type: "video+note" },
          { title: "Knock Knee & Bow Legs", slug: "deformities", type: "video+note" },
          { title: "Developmental Dysplasia of Hip", slug: "ddh", type: "video+note" }
        ]
      },
      {
        title: "Unit 7: Miscellaneous",
        topics: [
          { title: "Compartment Syndrome", slug: "compartment-syndrome", type: "video+note" },
          { title: "Osteomyelitis", slug: "osteomyelitis", type: "video+note" },
          { title: "Kuntscher Nail", slug: "k-nail", type: "video+note" }
        ]
      }
    ]
  },

  "psychiatry": {
    title: "Psychiatry",
    description: "Study of mental health disorders, behavioral sciences, and clinical psychology.",
    color: "text-purple-600 bg-purple-50 border-purple-200",
    units: [
      {
        title: "Unit 1: Introduction & Classification",
        topics: [
          { title: "Introduction to Psychiatry", slug: "psychiatry-intro", type: "video+note" },
          { title: "Classification of Mental Disorders", slug: "mental-disorders-classification", type: "video+note" },
          { title: "Psychiatric Interview and MSE", slug: "psychiatric-mse", type: "video+note" }
        ]
      },
      {
        title: "Unit 2: Schizophrenia & Psychotic Disorders",
        topics: [
          { title: "Schizophrenia", slug: "schizophrenia", type: "video+note" },
          { title: "Acute and Transient Psychotic Disorders", slug: "atpd", type: "video+note" },
          { title: "Delusional Disorders", slug: "delusional-disorders", type: "video+note" }
        ]
      },
      {
        title: "Unit 3: Mood Disorders",
        topics: [
          { title: "Depressive Disorders", slug: "depressive-disorders", type: "video+note" },
          { title: "Bipolar Affective Disorder (BPAD)", slug: "bpad", type: "video+note" },
          { title: "Suicide and Self-harm", slug: "suicide-self-harm", type: "video+note" }
        ]
      },
      {
        title: "Unit 4: Anxiety & Stress-related Disorders",
        topics: [
          { title: "Anxiety Disorders", slug: "anxiety-disorders", type: "video+note" },
          { title: "Obsessive Compulsive Disorder (OCD)", slug: "ocd", type: "video+note" },
          { title: "Post-traumatic Stress Disorder (PTSD)", slug: "ptsd", type: "video+note" },
          { title: "Adjustment Disorders", slug: "adjustment-disorders", type: "video+note" }
        ]
      },
      {
        title: "Unit 5: Substance Use Disorders",
        topics: [
          { title: "Alcohol Use Disorder", slug: "alcohol-use-disorder", type: "video+note" },
          { title: "Opioid Use Disorder", slug: "opioid-use-disorder", type: "video+note" },
          { title: "Sedative and Hypnotic Use Disorders", slug: "sedative-hypnotic-use", type: "video+note" },
          { title: "Tobacco Use Disorder", slug: "tobacco-use", type: "video+note" }
        ]
      },
      {
        title: "Unit 6: Child & Adolescent Psychiatry",
        topics: [
          { title: "ADHD", slug: "adhd", type: "video+note" },
          { title: "Autism Spectrum Disorder", slug: "autism", type: "video+note" },
          { title: "Conduct Disorder", slug: "conduct-disorder", type: "video+note" },
          { title: "Learning Disorders", slug: "learning-disorders", type: "video+note" }
        ]
      },
      {
        title: "Unit 7: Organic Mental Disorders",
        topics: [
          { title: "Delirium", slug: "delirium", type: "video+note" },
          { title: "Dementia", slug: "dementia", type: "video+note" },
          { title: "Amnestic Disorders", slug: "amnestic-disorders", type: "video+note" }
        ]
      },
      {
        title: "Unit 8: Personality & Sexual Disorders",
        topics: [
          { title: "Personality Disorders", slug: "personality-disorders", type: "video+note" },
          { title: "Sexual Dysfunction", slug: "sexual-dysfunction", type: "video+note" },
          { title: "Paraphilic Disorders", slug: "paraphilic-disorders", type: "video+note" },
          { title: "Gender Dysphoria", slug: "gender-dysphoria", type: "video+note" }
        ]
      },
      {
        title: "Unit 9: Somatic Symptom & Related Disorders",
        topics: [
          { title: "Somatic Symptom Disorder", slug: "somatic-symptom-disorder", type: "video+note" },
          { title: "Conversion Disorder", slug: "conversion-disorder", type: "video+note" },
          { title: "Illness Anxiety Disorder", slug: "illness-anxiety", type: "video+note" }
        ]
      },
      {
        title: "Unit 10: Treatment Modalities & Ethics",
        topics: [
          { title: "Psychopharmacology", slug: "psychopharmacology", type: "video+note" },
          { title: "Electroconvulsive Therapy (ECT)", slug: "ect", type: "video+note" },
          { title: "Psychotherapies", slug: "psychotherapies", type: "video+note" },
          { title: "Psychiatric Emergencies", slug: "psychiatric-emergencies", type: "video+note" },
          { title: "Legal and Ethical Issues", slug: "psychiatry-ethics", type: "video+note" }
        ]
      }
    ]
  },

  "dermatology": {
    title: "Dermatology",
    description: "Study of skin disorders, cutaneous manifestations of systemic diseases, and venereology.",
    color: "text-rose-600 bg-rose-50 border-rose-200",
    units: [
      {
        title: "Unit 1: Structure & Function of Skin",
        topics: [
          { title: "Anatomy of Skin", slug: "skin-anatomy", type: "video+note" },
          { title: "Physiology of Skin", slug: "skin-physiology", type: "video+note" },
          { title: "Functions of Skin", slug: "skin-functions", type: "video+note" },
          { title: "Primary and Secondary Skin Lesions", slug: "skin-lesions", type: "video+note" },
          { title: "Approach to a Dermatological Patient", slug: "derm-approach", type: "video+note" }
        ]
      },
      {
        title: "Unit 2: Infections of Skin",
        topics: [
          { title: "Bacterial Skin Infections", slug: "bacterial-infections", type: "video+note" },
          { title: "Viral Skin Infections", slug: "viral-infections", type: "video+note" },
          { title: "Fungal Skin Infections", slug: "fungal-infections", type: "video+note" },
          { title: "Parasitic Skin Infections", slug: "parasitic-infections", type: "video+note" },
          { title: "STIs – Dermatology Overview", slug: "sti-overview", type: "video+note" }
        ]
      },
      {
        title: "Unit 3: Infestations",
        topics: [
          { title: "Scabies", slug: "scabies", type: "video+note" },
          { title: "Pediculosis", slug: "pediculosis", type: "video+note" }
        ]
      },
      {
        title: "Unit 4: Eczematous Disorders",
        topics: [
          { title: "Atopic Dermatitis", slug: "atopic-dermatitis", type: "video+note" },
          { title: "Contact Dermatitis", slug: "contact-dermatitis", type: "video+note" },
          { title: "Seborrheic Dermatitis", slug: "seborrheic-dermatitis", type: "video+note" },
          { title: "Nummular Eczema", slug: "nummular-eczema", type: "video+note" },
          { title: "Lichen Simplex Chronicus", slug: "lsc", type: "video+note" }
        ]
      },
      {
        title: "Unit 5: Papulosquamous Disorders",
        topics: [
          { title: "Psoriasis", slug: "psoriasis", type: "video+note" },
          { title: "Lichen Planus", slug: "lichen-planus", type: "video+note" },
          { title: "Pityriasis Rosea", slug: "pityriasis-rosea", type: "video+note" }
        ]
      },
      {
        title: "Unit 6: Bullous Disorders",
        topics: [
          { title: "Pemphigus Vulgaris", slug: "pemphigus-vulgaris", type: "video+note" },
          { title: "Bullous Pemphigoid", slug: "bullous-pemphigoid", type: "video+note" },
          { title: "Dermatitis Herpetiformis", slug: "dermatitis-herpetiformis", type: "video+note" }
        ]
      },
      {
        title: "Unit 7: Pigmentary Disorders",
        topics: [
          { title: "Vitiligo", slug: "vitiligo", type: "video+note" },
          { title: "Melasma", slug: "melasma", type: "video+note" },
          { title: "Post-inflammatory Hyperpigmentation", slug: "pih", type: "video+note" }
        ]
      },
      {
        title: "Unit 8: Disorders of Appendages",
        topics: [
          { title: "Alopecia Areata", slug: "alopecia-areata", type: "video+note" },
          { title: "Androgenetic Alopecia", slug: "androgenetic-alopecia", type: "video+note" },
          { title: "Acne Vulgaris", slug: "acne-vulgaris", type: "video+note" },
          { title: "Hirsutism", slug: "hirsutism", type: "video+note" }
        ]
      },
      {
        title: "Unit 9: Tumors & Nevi",
        topics: [
          { title: "Benign Skin Tumors", slug: "benign-skin-tumors", type: "video+note" },
          { title: "Malignant Skin Tumors", slug: "malignant-skin-tumors", type: "video+note" },
          { title: "Nevi", slug: "nevi", type: "video+note" }
        ]
      },
      {
        title: "Unit 10: Misc & Systemic Associations",
        topics: [
          { title: "Urticaria", slug: "urticaria", type: "video+note" },
          { title: "Drug Reactions", slug: "drug-reactions", type: "video+note" },
          { title: "Leprosy", slug: "leprosy", type: "video+note" },
          { title: "Dermatological Manifestations of Systemic Diseases", slug: "systemic-derm", type: "video+note" }
        ]
      }
    ]
  },

  "pediatrics": {
    title: "Pediatrics",
    description: "Comprehensive study of child health, development, neonatology, and pediatric systemic diseases.",
    color: "text-sky-600 bg-sky-50 border-sky-200",
    units: [
      {
        title: "Unit 1: Growth, Development & Assessment",
        topics: [
          { title: "Growth and Development", slug: "growth-and-development", type: "video+note" },
          { title: "Normal Growth Patterns", slug: "growth-patterns", type: "video+note" },
          { title: "Developmental Milestones", slug: "developmental-milestones", type: "video+note" },
          { title: "Assessment of Growth and Development", slug: "growth-assessment", type: "video+note" },
          { title: "Growth Charts", slug: "growth-charts", type: "video+note" },
          { title: "Failure to Thrive", slug: "failure-to-thrive", type: "video+note" }
        ]
      },
      {
        title: "Unit 2: Nutrition & Nutritional Disorders",
        topics: [
          { title: "Breastfeeding", slug: "breastfeeding", type: "video+note" },
          { title: "Infant and Young Child Feeding", slug: "infant-feeding", type: "video+note" },
          { title: "Protein Energy Malnutrition (PEM)", slug: "pem", type: "video+note" },
          { title: "Vitamin Deficiency Disorders", slug: "vitamin-deficiency", type: "video+note" },
          { title: "Mineral Deficiency Disorders", slug: "mineral-deficiency", type: "video+note" },
          { title: "Severe Acute Malnutrition (SAM)", slug: "sam", type: "video+note" }
        ]
      },
      {
        title: "Unit 3: Neonatology",
        topics: [
          { title: "Care of Normal Newborn", slug: "normal-newborn-care", type: "video+note" },
          { title: "Low Birth Weight Baby", slug: "lbw-baby", type: "video+note" },
          { title: "Preterm Baby", slug: "preterm-baby", type: "video+note" },
          { title: "Birth Asphyxia", slug: "birth-asphyxia", type: "video+note" },
          { title: "Neonatal Jaundice", slug: "neonatal-jaundice", type: "video+note" },
          { title: "Neonatal Sepsis", slug: "neonatal-sepsis", type: "video+note" }
        ]
      },
      {
        title: "Unit 4: Infectious Diseases",
        topics: [
          { title: "Acute Respiratory Infections (ARI)", slug: "ari-pediatrics", type: "video+note" },
          { title: "Diarrheal Diseases", slug: "pediatric-diarrhea", type: "video+note" },
          { title: "Tuberculosis in Children", slug: "pediatric-tb", type: "video+note" },
          { title: "HIV in Children", slug: "pediatric-hiv", type: "video+note" },
          { title: "Vaccine Preventable Diseases", slug: "vpd", type: "video+note" },
          { title: "Fever with Rash", slug: "fever-rash", type: "video+note" }
        ]
      },
      {
        title: "Unit 5: Systemic Disorders",
        topics: [
          { title: "Congenital Heart Diseases", slug: "chd", type: "video+note" },
          { title: "Rheumatic Fever", slug: "rheumatic-fever", type: "video+note" },
          { title: "Bronchial Asthma in Children", slug: "pediatric-asthma", type: "video+note" },
          { title: "Nephrotic Syndrome", slug: "pediatric-nephrotic", type: "video+note" },
          { title: "Acute Glomerulonephritis", slug: "agn", type: "video+note" },
          { title: "Urinary Tract Infection", slug: "pediatric-uti", type: "video+note" }
        ]
      },
      {
        title: "Unit 6: Neurology & Developmental Disorders",
        topics: [
          { title: "Seizure Disorders", slug: "pediatric-seizures", type: "video+note" },
          { title: "Cerebral Palsy", slug: "cerebral-palsy", type: "video+note" },
          { title: "Developmental Delay", slug: "developmental-delay", type: "video+note" },
          { title: "Mental Retardation", slug: "mental-retardation", type: "video+note" },
          { title: "Autism Spectrum Disorder", slug: "pediatric-autism", type: "video+note" }
        ]
      },
      {
        title: "Unit 7: Hematology & Oncology",
        topics: [
          { title: "Anemia in Children", slug: "pediatric-anemia", type: "video+note" },
          { title: "Thalassemia", slug: "pediatric-thalassemia", type: "video+note" },
          { title: "Hemophilia", slug: "pediatric-hemophilia", type: "video+note" },
          { title: "Leukemia in Children", slug: "pediatric-leukemia", type: "video+note" }
        ]
      },
      {
        title: "Unit 8: Preventive & Social Pediatrics",
        topics: [
          { title: "National Immunization Schedule", slug: "immunization-schedule", type: "video+note" },
          { title: "Integrated Child Development Services (ICDS)", slug: "icds", type: "video+note" },
          { title: "School Health Program", slug: "school-health", type: "video+note" },
          { title: "Adolescent Health", slug: "adolescent-health", type: "video+note" },
          { title: "Child Abuse and Neglect", slug: "child-abuse", type: "video+note" }
        ]
      }
    ]
  },

  "psm": {
    title: "Preventive & Social Medicine",
    description: "Public health, epidemiology, biostatistics, and national health programs in the Indian context.",
    color: "text-orange-600 bg-orange-50 border-orange-200",
    units: [
      {
        title: "Unit 1: Epidemiology & Research Methodology",
        topics: [
          { title: "Concepts of Health and Disease", slug: "health-disease-concepts", type: "video+note" },
          { title: "Natural History of Disease", slug: "natural-history-of-disease", type: "video+note" },
          { title: "Levels of Prevention", slug: "levels-of-prevention", type: "video+note" },
          { title: "Epidemiology – Definition and Uses", slug: "epidemiology-intro", type: "video+note" },
          { title: "Epidemiological Triad", slug: "epidemiological-triad", type: "video+note" },
          { title: "Measures of Disease Frequency", slug: "disease-frequency-measures", type: "video+note" },
          { title: "Screening of Diseases", slug: "disease-screening", type: "video+note" },
          { title: "Epidemiological Study Designs", slug: "study-designs", type: "video+note" },
          { title: "Bias and Confounding", slug: "bias-confounding", type: "video+note" },
          { title: "Association and Causation", slug: "association-causation", type: "video+note" }
        ]
      },
      {
        title: "Unit 2: Biostatistics & Data Interpretation",
        topics: [
          { title: "Types of Data and Variables", slug: "data-types", type: "video+note" },
          { title: "Measures of Central Tendency", slug: "central-tendency", type: "video+note" },
          { title: "Measures of Dispersion", slug: "dispersion-measures", type: "video+note" },
          { title: "Normal Distribution", slug: "normal-distribution", type: "video+note" },
          { title: "Sampling Methods", slug: "sampling-methods", type: "video+note" },
          { title: "Probability", slug: "probability", type: "video+note" },
          { title: "Correlation and Regression", slug: "correlation-regression", type: "video+note" },
          { title: "Statistical Tests", slug: "statistical-tests", type: "video+note" },
          { title: "P Value and Confidence Interval", slug: "p-value-ci", type: "video+note" }
        ]
      },
      {
        title: "Unit 3: Communicable Diseases",
        topics: [
          { title: "Epidemiology of Communicable Diseases", slug: "communicable-epidemiology", type: "video+note" },
          { title: "Tuberculosis", slug: "psm-tb", type: "video+note" },
          { title: "Leprosy", slug: "psm-leprosy", type: "video+note" },
          { title: "HIV/AIDS", slug: "psm-hiv", type: "video+note" },
          { title: "Malaria", slug: "psm-malaria", type: "video+note" },
          { title: "Dengue", slug: "psm-dengue", type: "video+note" },
          { title: "Chikungunya", slug: "psm-chikungunya", type: "video+note" },
          { title: "Kala-azar", slug: "kala-azar", type: "video+note" },
          { title: "Vaccine Preventable Diseases", slug: "psm-vpd", type: "video+note" },
          { title: "Emerging and Re-emerging Diseases", slug: "emerging-diseases", type: "video+note" }
        ]
      },
      {
        title: "Unit 4: Non-Communicable Diseases",
        topics: [
          { title: "Epidemiology of Non-Communicable Diseases", slug: "ncd-epidemiology", type: "video+note" },
          { title: "Cardiovascular Diseases", slug: "psm-cvd", type: "video+note" },
          { title: "Hypertension", slug: "psm-hypertension", type: "video+note" },
          { title: "Diabetes Mellitus", slug: "psm-diabetes", type: "video+note" },
          { title: "Cancer Epidemiology", slug: "cancer-epidemiology", type: "video+note" },
          { title: "Mental Health", slug: "psm-mental-health", type: "video+note" },
          { title: "Accidents and Injuries", slug: "accidents-injuries", type: "video+note" }
        ]
      },
      {
        title: "Unit 5: Nutrition & Environment",
        topics: [
          { title: "Balanced Diet", slug: "balanced-diet", type: "video+note" },
          { title: "Nutritional Assessment", slug: "nutritional-assessment", type: "video+note" },
          { title: "Protein Energy Malnutrition", slug: "psm-pem", type: "video+note" },
          { title: "Vitamin Deficiency Disorders", slug: "psm-vitamins", type: "video+note" },
          { title: "Food Adulteration", slug: "food-adulteration", type: "video+note" },
          { title: "Water Supply and Purification", slug: "water-purification", type: "video+note" },
          { title: "Solid Waste Management", slug: "solid-waste", type: "video+note" },
          { title: "Air Pollution", slug: "air-pollution", type: "video+note" },
          { title: "Noise Pollution", slug: "noise-pollution", type: "video+note" }
        ]
      },
      {
        title: "Unit 6: Family Health & National Health Programs",
        topics: [
          { title: "Family Health Services", slug: "family-health", type: "video+note" },
          { title: "Maternal and Child Health", slug: "mch", type: "video+note" },
          { title: "National Health Mission (NHM)", slug: "nhm", type: "video+note" },
          { title: "Reproductive and Child Health Program", slug: "rch", type: "video+note" },
          { title: "National Immunization Program", slug: "uip", type: "video+note" },
          { title: "National TB Elimination Program", slug: "ntep", type: "video+note" },
          { title: "National Vector Borne Disease Control", slug: "nvbdcp", type: "video+note" }
        ]
      },
      {
        title: "Unit 7: Health System & Management",
        topics: [
          { title: "Health Care Delivery System in India", slug: "indian-health-system", type: "video+note" },
          { title: "Primary Health Care", slug: "phc", type: "video+note" },
          { title: "Health Planning", slug: "health-planning", type: "video+note" },
          { title: "Health Manpower", slug: "health-manpower", type: "video+note" },
          { title: "Health Economics", slug: "health-economics", type: "video+note" },
          { title: "Health Management Techniques", slug: "health-mgmt", type: "video+note" },
          { title: "Hospital Waste Management", slug: "biomedical-waste", type: "video+note" }
        ]
      },
      {
        title: "Unit 8: Social Sciences & Health Education",
        topics: [
          { title: "Sociology and Health", slug: "medical-sociology", type: "video+note" },
          { title: "Social Factors in Health and Disease", slug: "social-determinants", type: "video+note" },
          { title: "Health Education", slug: "health-education", type: "video+note" },
          { title: "Communication in Health", slug: "health-communication", type: "video+note" },
          { title: "Behavior Change Communication (BCC)", slug: "bcc", type: "video+note" }
        ]
      }
    ]
  },

  "obg": {
    title: "Obstetrics & Gynecology",
    description: "Study of female reproductive health, pregnancy management, and gynecological disorders.",
    color: "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-200",
    units: [
      {
        title: "Unit 1: Anatomy & Physiology",
        topics: [
          { title: "Anatomy of Female Pelvis", slug: "anatomy-pelvis", type: "video+note" },
          { title: "Anatomy of Uterus, Cervix, Vagina & Adnexa", slug: "anatomy-uterus-vagina", type: "video+note" },
          { title: "Pelvic Floor and Perineum", slug: "pelvic-floor", type: "video+note" },
          { title: "Physiology of Menstrual Cycle", slug: "menstrual-physiology", type: "video+note" },
          { title: "Endocrinology of Reproduction", slug: "repro-endocrinology", type: "video+note" }
        ]
      },
      {
        title: "Unit 2: Menstrual Disorders",
        topics: [
          { title: "Amenorrhea", slug: "amenorrhea", type: "video+note" },
          { title: "Dysmenorrhea", slug: "dysmenorrhea", type: "video+note" },
          { title: "Abnormal Uterine Bleeding (AUB)", slug: "aub", type: "video+note" },
          { title: "Premenstrual Syndrome", slug: "pms", type: "video+note" }
        ]
      },
      {
        title: "Unit 3: Gynecological Infections & STIs",
        topics: [
          { title: "Vaginitis and Vaginal Discharge", slug: "vaginitis", type: "video+note" },
          { title: "Cervicitis", slug: "cervicitis", type: "video+note" },
          { title: "Pelvic Inflammatory Disease (PID)", slug: "pid", type: "video+note" },
          { title: "Genital Ulcer Diseases", slug: "genital-ulcers", type: "video+note" },
          { title: "STIs in Gynecology", slug: "gynec-stis", type: "video+note" }
        ]
      },
      {
        title: "Unit 4: Benign Gynecological Conditions",
        topics: [
          { title: "Fibroid Uterus", slug: "fibroid-uterus", type: "video+note" },
          { title: "Adenomyosis", slug: "adenomyosis", type: "video+note" },
          { title: "Endometriosis", slug: "endometriosis", type: "video+note" },
          { title: "Ovarian Cysts", slug: "ovarian-cysts", type: "video+note" },
          { title: "Polycystic Ovary Syndrome (PCOS)", slug: "pcos", type: "video+note" }
        ]
      },
      {
        title: "Unit 5: Gynecological Malignancies",
        topics: [
          { title: "Carcinoma Cervix", slug: "ca-cervix", type: "video+note" },
          { title: "Carcinoma Endometrium", slug: "ca-endometrium", type: "video+note" },
          { title: "Carcinoma Ovary", slug: "ca-ovary", type: "video+note" },
          { title: "Gestational Trophoblastic Neoplasia", slug: "gtn", type: "video+note" },
          { title: "Screening for Gynecological Cancers", slug: "gynec-cancer-screening", type: "video+note" }
        ]
      },
      {
        title: "Unit 6: Infertility & Family Planning",
        topics: [
          { title: "Female Infertility", slug: "female-infertility", type: "video+note" },
          { title: "Male Infertility Overview", slug: "male-infertility-overview", type: "video+note" },
          { title: "Evaluation of Infertile Couple", slug: "infertile-couple-eval", type: "video+note" },
          { title: "Assisted Reproductive Techniques (ART)", slug: "art", type: "video+note" },
          { title: "Contraception and Family Planning", slug: "contraception", type: "video+note" }
        ]
      },
      {
        title: "Unit 7: Normal Pregnancy",
        topics: [
          { title: "Diagnosis of Pregnancy", slug: "pregnancy-diagnosis", type: "video+note" },
          { title: "Physiological Changes in Pregnancy", slug: "pregnancy-physio-changes", type: "video+note" },
          { title: "Antenatal Care", slug: "antenatal-care", type: "video+note" },
          { title: "Normal Labour", slug: "normal-labour", type: "video+note" },
          { title: "Mechanism of Labour", slug: "mechanism-of-labour", type: "video+note" }
        ]
      },
      {
        title: "Unit 8: Abnormal Pregnancy & Medical Disorders",
        topics: [
          { title: "Anemia in Pregnancy", slug: "pregnancy-anemia", type: "video+note" },
          { title: "Hypertensive Disorders (Preeclampsia/Eclampsia)", slug: "pregnancy-hypertension", type: "video+note" },
          { title: "Diabetes in Pregnancy (GDM)", slug: "pregnancy-diabetes", type: "video+note" },
          { title: "Antepartum Hemorrhage (APH)", slug: "aph", type: "video+note" },
          { title: "Multiple Pregnancy", slug: "multiple-pregnancy", type: "video+note" }
        ]
      },
      {
        title: "Unit 9: Labour Complications & Puerperium",
        topics: [
          { title: "Abnormal Labour", slug: "abnormal-labour", type: "video+note" },
          { title: "Obstructed Labour", slug: "obstructed-labour", type: "video+note" },
          { title: "Postpartum Hemorrhage (PPH)", slug: "pph", type: "video+note" },
          { title: "Puerperium and Complications", slug: "puerperium", type: "video+note" },
          { title: "Cephalopelvic Disproportion (CPD)", slug: "cpd", type: "video+note" }
        ]
      },
      {
        title: "Unit 10: Newborn & Operative Obstetrics",
        topics: [
          { title: "Care of Newborn", slug: "newborn-care-ob", type: "video+note" },
          { title: "Birth Injuries", slug: "birth-injuries", type: "video+note" },
          { title: "Operative Vaginal Delivery", slug: "operative-vaginal-delivery", type: "video+note" },
          { title: "Cesarean Section", slug: "caesarean-section", type: "video+note" },
          { title: "Obstetric Instruments", slug: "obstetric-instruments", type: "video+note" }
        ]
      }
    ]
  },

  "radiology": {
    title: "Radiology",
    description: "Clinical imaging, radiation physics, and diagnostic interpretation using X-ray, CT, MRI, and USG.",
    color: "text-cyan-600 bg-cyan-50 border-cyan-200",
    units: [
      {
        title: "Unit 1: Basics of Radiology",
        topics: [
          { title: "Introduction to Radiology", slug: "radiology-intro", type: "video+note" },
          { title: "X-ray Production", slug: "x-ray-production", type: "video+note" },
          { title: "Radiation Units and Dosimetry", slug: "radiation-dosimetry", type: "video+note" },
          { title: "Radiation Hazards and Protection", slug: "radiation-protection", type: "video+note" },
          { title: "Contrast Media", slug: "contrast-media", type: "video+note" }
        ]
      },
      {
        title: "Unit 2: Chest Radiology",
        topics: [
          { title: "Normal Chest X-ray", slug: "normal-cxr", type: "video+note" },
          { title: "Pneumonia on Chest X-ray", slug: "pneumonia-cxr", type: "video+note" },
          { title: "Pulmonary TB on X-ray", slug: "tb-cxr", type: "video+note" },
          { title: "Pleural Effusion", slug: "pleural-effusion-rad", type: "video+note" },
          { title: "Pneumothorax", slug: "pneumothorax-rad", type: "video+note" },
          { title: "Mediastinal Masses", slug: "mediastinal-masses-rad", type: "video+note" }
        ]
      },
      {
        title: "Unit 3: Abdominal Radiology",
        topics: [
          { title: "Plain X-ray Abdomen", slug: "plain-abd-xray", type: "video+note" },
          { title: "Intestinal Obstruction", slug: "obstruction-rad", type: "video+note" },
          { title: "Perforation Peritonitis", slug: "perforation-rad", type: "video+note" },
          { title: "Calcifications in Abdomen", slug: "abd-calcifications", type: "video+note" },
          { title: "Barium Studies", slug: "barium-studies-intro", type: "video+note" }
        ]
      },
      {
        title: "Unit 4: Musculoskeletal Radiology",
        topics: [
          { title: "Normal X-ray of Bones", slug: "bone-xray-normal", type: "video+note" },
          { title: "Fracture Healing", slug: "fracture-healing-rad", type: "video+note" },
          { title: "Osteomyelitis", slug: "osteomyelitis-rad", type: "video+note" },
          { title: "Bone Tumors", slug: "bone-tumors-rad", type: "video+note" },
          { title: "Metabolic Bone Diseases", slug: "metabolic-bone-rad", type: "video+note" }
        ]
      },
      {
        title: "Unit 5: Neuroimaging",
        topics: [
          { title: "CT Brain – Normal Anatomy", slug: "ct-brain-anatomy", type: "video+note" },
          { title: "Stroke Imaging", slug: "stroke-imaging", type: "video+note" },
          { title: "Intracranial Hemorrhage", slug: "ich-rad", type: "video+note" },
          { title: "Brain Tumors", slug: "brain-tumors-rad", type: "video+note" },
          { title: "Hydrocephalus", slug: "hydrocephalus-rad", type: "video+note" }
        ]
      },
      {
        title: "Unit 6: Imaging of GIT",
        topics: [
          { title: "Barium Swallow", slug: "barium-swallow", type: "video+note" },
          { title: "Barium Meal", slug: "barium-meal", type: "video+note" },
          { title: "Barium Enema", slug: "barium-enema", type: "video+note" }
        ]
      },
      {
        title: "Unit 7: Imaging of Hepatobiliary System",
        topics: [
          { title: "Ultrasound of Liver", slug: "liver-usg", type: "video+note" },
          { title: "Gallstones", slug: "gallstones-rad", type: "video+note" },
          { title: "Obstructive Jaundice", slug: "jaundice-rad", type: "video+note" },
          { title: "Liver Abscess", slug: "liver-abscess-rad", type: "video+note" }
        ]
      },
      {
        title: "Unit 8: Genitourinary Radiology",
        topics: [
          { title: "Intravenous Urography", slug: "ivu-rad", type: "video+note" },
          { title: "Hydronephrosis", slug: "hydronephrosis-rad", type: "video+note" },
          { title: "Renal Calculi", slug: "renal-calculi-rad", type: "video+note" },
          { title: "Cystography", slug: "cystography", type: "video+note" }
        ]
      },
      {
        title: "Unit 9: Obstetric & Gynecological Imaging",
        topics: [
          { title: "Ultrasound in Pregnancy", slug: "obstetric-usg", type: "video+note" },
          { title: "Ectopic Pregnancy Imaging", slug: "ectopic-rad", type: "video+note" },
          { title: "Placenta Previa", slug: "placenta-previa-rad", type: "video+note" },
          { title: "Pelvic Masses", slug: "pelvic-mass-rad", type: "video+note" }
        ]
      },
      {
        title: "Unit 10: Advanced Imaging Modalities",
        topics: [
          { title: "Computed Tomography (CT)", slug: "ct-basics", type: "video+note" },
          { title: "Magnetic Resonance Imaging (MRI)", slug: "mri-basics", type: "video+note" },
          { title: "Ultrasound (USG)", slug: "usg-basics", type: "video+note" },
          { title: "Doppler Studies", slug: "doppler-studies", type: "video+note" },
          { title: "Interventional Radiology", slug: "interventional-rad", type: "video+note" }
        ]
      }
    ]
  },

  "ent": {
    title: "Otolaryngology (ENT)",
    description: "Study of the ear, nose, and throat, including audiology, head and neck surgery, and phoniatrics.",
    color: "text-teal-600 bg-teal-50 border-teal-200",
    units: [
      {
        title: "Unit 1: Anatomy, Physiology & Exam of Ear",
        topics: [
          { title: "External Ear", slug: "external-ear-anatomy", type: "video+note" },
          { title: "Middle Ear", slug: "middle-ear-anatomy", type: "video+note" },
          { title: "Eustachian Tube", slug: "eustachian-tube", type: "video+note" },
          { title: "Inner Ear", slug: "inner-ear-anatomy", type: "video+note" },
          { title: "Mechanism of Hearing", slug: "hearing-mechanism", type: "video+note" },
          { title: "Physiology of Balance", slug: "balance-physiology", type: "video+note" },
          { title: "Clinical Examination of Ear", slug: "ear-examination", type: "video+note" }
        ]
      },
      {
        title: "Unit 2: Diseases of External & Middle Ear",
        topics: [
          { title: "Impacted Ear Wax", slug: "ear-wax", type: "video+note" },
          { title: "Otitis Externa", slug: "otitis-externa", type: "video+note" },
          { title: "Tympanic Membrane Disorders", slug: "tm-disorders", type: "video+note" },
          { title: "Acute Suppurative Otitis Media (ASOM)", slug: "asom", type: "video+note" },
          { title: "Chronic Suppurative Otitis Media (CSOM)", slug: "csom", type: "video+note" },
          { title: "Cholesteatoma", slug: "cholesteatoma", type: "video+note" },
          { title: "Mastoiditis and Complications", slug: "mastoiditis", type: "video+note" }
        ]
      },
      {
        title: "Unit 3: Inner Ear, Hearing Loss & Vertigo",
        topics: [
          { title: "Hearing Loss", slug: "hearing-loss-types", type: "video+note" },
          { title: "Sensorineural Hearing Loss", slug: "snhl", type: "video+note" },
          { title: "Noise-Induced Hearing Loss", slug: "nihl", type: "video+note" },
          { title: "Ototoxicity", slug: "ototoxicity", type: "video+note" },
          { title: "Vertigo", slug: "vertigo-approach", type: "video+note" },
          { title: "BPPV", slug: "bppv", type: "video+note" },
          { title: "Ménière’s Disease", slug: "menieres", type: "video+note" },
          { title: "Audiological Investigations", slug: "audiometry", type: "video+note" }
        ]
      },
      {
        title: "Unit 4: Diseases of Nose & Sinuses",
        topics: [
          { title: "Anatomy of Nose & Sinuses", slug: "nose-anatomy", type: "video+note" },
          { title: "Epistaxis", slug: "epistaxis", type: "video+note" },
          { title: "Rhinitis", slug: "rhinitis", type: "video+note" },
          { title: "Deviated Nasal Septum (DNS)", slug: "dns", type: "video+note" },
          { title: "Sinusitis", slug: "sinusitis", type: "video+note" },
          { title: "Nasal Polyps", slug: "nasal-polyps", type: "video+note" },
          { title: "Complications of Sinusitis", slug: "sinusitis-complications", type: "video+note" }
        ]
      },
      {
        title: "Unit 5: Diseases of Pharynx & Larynx",
        topics: [
          { title: "Anatomy of Pharynx", slug: "pharynx-anatomy", type: "video+note" },
          { title: "Tonsillitis", slug: "tonsillitis", type: "video+note" },
          { title: "Adenoids", slug: "adenoids", type: "video+note" },
          { title: "Peritonsillar Abscess (Quinsy)", slug: "quinsy", type: "video+note" },
          { title: "Retropharyngeal Abscess", slug: "retropharyngeal-abscess", type: "video+note" },
          { title: "Anatomy of Larynx", slug: "larynx-anatomy", type: "video+note" },
          { title: "Hoarseness of Voice", slug: "hoarseness", type: "video+note" },
          { title: "Carcinoma Larynx", slug: "ca-larynx", type: "video+note" },
          { title: "Airway Emergencies", slug: "airway-emergencies", type: "video+note" }
        ]
      }
    ]
  }, 

  "ophthalmology": {
    title: "Ophthalmology",
    description: "Study of eye disorders, vision science, refractive errors, and ophthalmic surgery.",
    color: "text-lime-600 bg-lime-50 border-lime-200",
    units: [
      {
        title: "Unit 1: Basics & Examination",
        topics: [
          { title: "Anatomy of Eyeball", slug: "eyeball-anatomy", type: "video+note" },
          { title: "Aqueous Humour & IOP Physiology", slug: "aqueous-humour-physio", type: "video+note" },
          { title: "Extraocular Muscles & Movements", slug: "extraocular-muscles", type: "video+note" },
          { title: "Visual Acuity & Refraction", slug: "visual-acuity", type: "video+note" },
          { title: "Clinical Examination of Eye", slug: "eye-exam", type: "video+note" },
          { title: "Ophthalmoscopy", slug: "ophthalmoscopy", type: "video+note" },
          { title: "Tonometry and Gonioscopy", slug: "tonometry-gonioscopy", type: "video+note" }
        ]
      },
      {
        title: "Unit 2: Conjunctiva and Cornea",
        topics: [
          { title: "Acute & Chronic Conjunctivitis", slug: "conjunctivitis", type: "video+note" },
          { title: "Vernal Keratoconjunctivitis (VKC)", slug: "vkc", type: "video+note" },
          { title: "Trachoma", slug: "trachoma", type: "video+note" },
          { title: "Pterygium and Pinguecula", slug: "pterygium", type: "video+note" },
          { title: "Corneal Ulcer & Keratitis", slug: "corneal-ulcer", type: "video+note" },
          { title: "Keratoconus", slug: "keratoconus", type: "video+note" },
          { title: "Corneal Opacity & Blindness", slug: "corneal-opacity", type: "video+note" }
        ]
      },
      {
        title: "Unit 3: Lens",
        topics: [
          { title: "Cataract: Etiology & Class", slug: "cataract-basics", type: "video+note" },
          { title: "Senile Cataract", slug: "senile-cataract", type: "video+note" },
          { title: "Congenital & Traumatic Cataract", slug: "congenital-cataract", type: "video+note" },
          { title: "Cataract Surgery & IOL", slug: "cataract-surgery", type: "video+note" },
          { title: "Post-operative Complications", slug: "cataract-complications", type: "video+note" }
        ]
      },
      {
        title: "Unit 4: Glaucoma",
        topics: [
          { title: "POAG & PACG", slug: "primary-glaucoma", type: "video+note" },
          { title: "Congenital & Secondary Glaucoma", slug: "secondary-glaucoma", type: "video+note" },
          { title: "Optic Disc & Field Defects", slug: "glaucoma-defects", type: "video+note" },
          { title: "Management of Glaucoma", slug: "glaucoma-management", type: "video+note" }
        ]
      },
      {
        title: "Unit 5: Uveal Tract",
        topics: [
          { title: "Anterior & Posterior Uveitis", slug: "uveitis", type: "video+note" },
          { title: "Panuveitis & Tubercular Uveitis", slug: "panuveitis", type: "video+note" },
          { title: "VKH Syndrome & Sympathetic Ophthalmia", slug: "vkh-syndrome", type: "video+note" }
        ]
      },
      {
        title: "Unit 6: Retina & Vitreous",
        topics: [
          { title: "Retinal Anatomy & Pathology", slug: "retinal-structure-pathology", type: "video+note" },
          { title: "Retinal Detachment", slug: "retinal-detachment", type: "video+note" },
          { title: "Diabetic & Hypertensive Retinopathy", slug: "retinopathy", type: "video+note" },
          { title: "Age-related Macular Degeneration", slug: "amd", type: "video+note" },
          { title: "Retinitis Pigmentosa", slug: "retinitis-pigmentosa", type: "video+note" },
          { title: "Retinal Vascular Occlusions & CME", slug: "retinal-vascular-occlusions-cme", type: "video+note" },
          { title: "Vitreous Hemorrhage & PVD", slug: "vitreous-disorders", type: "video+note" }
        ]
      },
      {
        title: "Unit 7: Neuro-Ophthalmology",
        topics: [
          { title: "Visual Pathway & Field Defects", slug: "visual-pathway", type: "video+note" },
          { title: "Optic Neuritis & Atrophy", slug: "optic-neuritis", type: "video+note" },
          { title: "Papilledema", slug: "papilledema", type: "video+note" },
          { title: "Cranial Nerve Palsies", slug: "ocular-palsy", type: "video+note" },
          { title: "Pupillary Abnormalities", slug: "pupil-disorders", type: "video+note" }
        ]
      },
      {
        title: "Unit 8: Ocular Trauma and Squint",
        topics: [
          { title: "Ocular Injuries (Blunt/Penetrating)", slug: "ocular-trauma", type: "video+note" },
          { title: "Chemical Injuries", slug: "chemical-eye-injury", type: "video+note" },
          { title: "Squint Basics & Exotropia", slug: "squint-basics-exotropia", type: "video+note" },
          { title: "Concomitant & Paralytic Squint", slug: "squint", type: "video+note" },
          { title: "Amblyopia", slug: "amblyopia", type: "video+note" }
        ]
      },
      {
        title: "Unit 9: Eyelids, Orbit & Lacrimal System",
        topics: [
          { title: "Ptosis & Lid Malpositions", slug: "ptosis", type: "video+note" },
          { title: "Blepharitis, Chalazion & Hordeolum", slug: "eyelid-infections", type: "video+note" },
          { title: "Thyroid Eye Disease & Proptosis", slug: "orbit-disorders", type: "video+note" },
          { title: "Dacryocystitis", slug: "dacryocystitis", type: "video+note" }
        ]
      },
      {
        title: "Unit 10: Refraction & Community Ophthalmology",
        topics: [
          { title: "Errors of Refraction & Presbyopia", slug: "refraction-errors", type: "video+note" },
          { title: "National Programme for Control of Blindness", slug: "npcb", type: "video+note" },
          { title: "Vitamin A Deficiency (Xerophthalmia)", slug: "xerophthalmia", type: "video+note" },
          { title: "Retinoblastoma", slug: "retinoblastoma", type: "video+note" }
        ]
      }
    ]
  }
};

export default function SubjectDetail() {
  const params = useParams();
  const slug = Array.isArray(params.subjectId) ? params.subjectId[0] : params.subjectId;
  
  // Get data or fallback
  const data = courseData[slug as string] || courseData["default"];
  
  // State for which Accordion unit is open
  const [openUnitIndex, setOpenUnitIndex] = useState<number | null>(0);

  const toggleUnit = (index: number) => {
    setOpenUnitIndex(openUnitIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      
      {/* 1. HEADER */}
      <div className="mb-10">
        <Link href="/academic" className="inline-flex items-center text-sm text-slate-500 hover:text-indigo-600 transition mb-6">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Directory
        </Link>
        
        <div className="flex items-start justify-between">
            <div>
                <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-4xl font-extrabold text-slate-900 mb-3"
                >
                    {data.title}
                </motion.h1>
                <p className="text-lg text-slate-600 max-w-2xl">{data.description}</p>
            </div>
            
            <div className={`hidden md:flex px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-wide border ${data.color}`}>
                {slug}
            </div>
        </div>
      </div>

      {/* 2. UNITS & TOPICS (ACCORDION) */}
      <div className="space-y-4">
        {data.units.map((unit: any, index: number) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={index}
            className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm"
          >
            {/* Unit Header (Clickable) */}
            <button 
              onClick={() => toggleUnit(index)}
              className={`w-full flex items-center justify-between p-5 text-left transition-colors ${openUnitIndex === index ? 'bg-slate-50' : 'bg-white hover:bg-slate-50'}`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${openUnitIndex === index ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                    {index + 1}
                </div>
                <h3 className={`text-lg font-semibold ${openUnitIndex === index ? 'text-indigo-900' : 'text-slate-700'}`}>
                    {unit.title}
                </h3>
              </div>
              {openUnitIndex === index ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
            </button>

            {/* Topics List (Collapsible) */}
            <AnimatePresence>
              {openUnitIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="border-t border-slate-100 bg-white"
                >
                  <div className="p-2">
                    {unit.topics.map((topic: any, tIndex: number) => (
                        <Link 
                           // THIS LINK GOES TO THE NEW TOPIC PAGE
                           href={`/academic/${slug}/${topic.slug}`} 
                           key={tIndex}
                        >
                            <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-indigo-50 cursor-pointer transition ml-12 mr-2 mb-1">
                                <div className="flex items-center gap-3">
                                    <PlayCircle className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition" />
                                    <span className="text-slate-600 font-medium group-hover:text-indigo-700 transition">
                                        {topic.title}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-semibold text-slate-400 border border-slate-200 px-2 py-0.5 rounded bg-white group-hover:border-indigo-200 group-hover:text-indigo-500">
                                        Lecture + Notes
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

    </div>
  );
}