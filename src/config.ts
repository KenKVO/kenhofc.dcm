import type { SiteConfig } from 'astro-academic-theme';

export const siteConfig: SiteConfig = {
  title: 'Ken Ho',
  description: "Fong Chi (Ken) Ho's academic website.",
  siteUrl: 'https://kenkvo.github.io/kenhofc.dcm',
  author: 'Fong Chi Ho',
  authorAlternative: '',
  avatar: 'avatar.png',
  location: 'Durham, NC',
  email: 'ken.ho@duke.edu',

  pages: {
    home: '/',
    posts: 'posts',
    resume: 'resume',
    tags: 'tags',
    research: 'research',
  },

  professions: ['Ph.D. Candidate', 'Medical Imaging'],
  quote: 'I paint in MATLAB',

  introduction: [
    "I'm a Ph.D. candidate in [*Electrical and Computer Engineering*](https://ece.duke.edu/) at [*Duke University*](https://duke.edu/) (expected May 2027), working at the [*Center for Virtual Imaging Trials*](https://cvit.duke.edu/) (CVIT) with [Ehsan Abadi](https://scholars.duke.edu/person/ehsan.abadi), [W. Paul Segars](https://scholars.duke.edu/person/paul.segars), and [Ehsan Samei](https://scholars.duke.edu/person/ehsan.samei).",
    "Previously, I was a research assistant in the Imaging Physics Laboratory at [*UC Irvine*](https://sites.uci.edu/molloilabimagingphysics/) (2021–2022), where I built a benchtop dual-energy photon-counting breast cone-beam CT system. I received my M.S. in Electrical Engineering from [*UC Irvine*](https://engineering.uci.edu/dept/eecs) (2022) and my B.S. in Electrical Engineering from [*UCLA*](https://www.ee.ucla.edu/) (2019).",
  ],

  researchIntro: [
    "I work on *photon-counting CT*, *physical and computational phantoms*, *task-based image quality*, and *AI-enabled quantitative imaging*. The through-line is to give pulmonary CT biomarkers a ground truth — digitally, physically, and experimentally — so scanner technology and protocols can be evaluated with known anatomy.",
    '1. **Anthropomorphic phantoms**: Digital lung models with diseases (bronchitis, mucus-plugging, emphysema) and quantitative evaluation of 3D-printed physical phantoms, including collaborations with Canon Medical and an FDA U01 / [FLUIDDA Inc.](https://www.fluidda.com/) project.\n2. **Virtual imaging trials**: Scanner-specific *DukeSim* simulations of energy-integrating and photon-counting CT for COPD quantification, protocol harmonization, and in silico trials such as Virtual NLST / VLST and XCAT 3.0.\n3. **Task-based evaluation**: Comparing dose, spatial-resolution mode, reconstruction, and denoising using image-quality metrics and quantitative CT biomarkers (Pi10, WA%, LAA-950, PRM).',
    'I have also contributed to [*AAPM Task Group 387*](https://www.aapm.org/org/structure/default.asp?committee_code=TG387) recommendations on computational phantom representation, and I collaborate with industry partners including *Canon Medical* and *GE HealthCare*.',
  ],

  news: [
    { date: 'Feb. 2026', text: "📝 First-author paper in *Journal of Medical Imaging* on airway quantifications with photon-counting vs. energy-integrating CT.", papers: [
      { title: 'JMI 2026', href: './research/Airway-PCCT-EICT/' },
    ] },
    { date: 'Jan. 2026', text: "🏆 **Best Graduate Student Poster** at [*Duke Radiology Research Day 2026*](https://radiology.duke.edu/research/research-day/2026-radiology-research-day-archive) for the 3D-printed COPD lung phantom study, mentored by Ehsan Abadi.", papers: [
      { title: 'PCCT Phantom', href: './research/PCCT-Lung-Phantom/' },
    ] },
    { date: 'Dec. 2025', text: "🎤 Oral presentation at *RSNA 2025*: *Task-Specific Evaluation of Photon-Counting CT Using a 3D-Printed Anthropomorphic Lung Phantom with COPD Pathology* (Physics, S404).", papers: [
      { title: 'RSNA Oral', href: './research/PCCT-Lung-Phantom/' },
    ] },
    { date: 'Dec. 2025', text: "📌 Poster at *RSNA 2025*: *Quantification Accuracy, Consistency, and Image Quality in Deep-Learning CT Reconstruction Kernels Optimized for Pulmonary Imaging*.", papers: [
      { title: 'DL Reconstruction', href: './research/DL-CT-Reconstruction/' },
    ] },
    { date: 'Nov. 2025', text: "📝 Co-author paper in *Medical Physics* on unified CT image harmonization across multiple tasks.", papers: [
      { title: 'Harmonization', href: './research/CT-Harmonization/' },
    ] },
    { date: 'Aug. 2025', text: "💼 Starting as a Technology and Intellectual Property Fellow at the [*Duke Office of Translation & Commercialization*](https://otc.duke.edu/team/ken-ho/)!" },
    { date: 'Jul. 2025', text: "📝 Two papers in *Medical Image Analysis*: [XCAT 3.0](https://doi.org/10.1016/j.media.2025.103636) digital twins and the [Virtual Lung Screening Trial](https://doi.org/10.1016/j.media.2025.103576).", papers: [
      { title: 'XCAT 3.0', href: './research/XCAT-3/' },
      { title: 'VLST', href: './research/VLST/' },
    ] },
    { date: 'Apr. 2025', text: "📝 Papers at *SPIE Medical Imaging 2025* on COPD protocol accuracy and CT harmonization." },
    { date: 'Feb. 2024', text: "🎤 Presenting at *Virtual Imaging Trials in Medicine* on small-airway disease quantification and subject-specific airway modeling." },
    { date: 'Feb. 2024', text: "🎤 Presenting at *Virtual Imaging Trials in Medicine* on patient-specific airway modeling." },
    { date: 'Apr. 2023', text: "📝 First-author SPIE Medical Imaging paper: a virtual imaging trial framework for airway quantifications via CT.", papers: [
      { title: 'SPIE 2023', href: './research/Airway-PCCT-EICT/' },
    ] },
    { date: 'Aug. 2022', text: "🎓 Started my Ph.D. in ECE at [*Duke*](https://duke.edu/) and joined [*CVIT*](https://cvit.duke.edu/)!" },
  ],

  misc: "I'm from Hong Kong. I currently live and work in Durham, North Carolina. A licensed enthusiast in scuba-diving and sky-diving.",

  education: [
    {
      date: 'Aug. 2022 - Present',
      icon: 'user-graduate',
      title: 'Ph.D. in Electrical and Computer Engineering',
      location: 'Duke University',
    },
    {
      date: '2020 - 2022',
      icon: 'scroll',
      title: 'M.S. in Electrical Engineering',
      location: 'University of California, Irvine',
    },
    {
      date: '2016 - 2019',
      icon: 'graduation-cap',
      title: 'B.S. in Electrical Engineering',
      location: 'University of California, Los Angeles',
    },
  ],

  social: [
    { url: '/cv.pdf', icon: ['ai', 'cv'] },
    { url: 'https://scholar.google.com/citations?user=5_kvqfAAAAAJ&hl=en', icon: ['fa', 'graduation-cap'] },
    { url: 'https://orcid.org/0000-0002-4152-9037', icon: ['ai', 'orcid'] },
    { url: 'https://github.com/KenhoFC', icon: ['fab', 'github'] },
    { url: 'https://www.linkedin.com/in/kenhofc/', icon: ['fab', 'linkedin'] },
    { url: 'mailto:ken.ho@duke.edu', icon: ['fa', 'envelope'], label: 'ken.ho@duke.edu' },
  ],

  awards: [
    { date: 'Jan. 2026', title: 'Best Graduate Student Poster', organization: 'Duke Radiology Research Day' },
  ],

  interests: [
    { icon: 'x-ray', title: 'Photon-Counting CT' },
    { icon: 'lungs', title: 'Anthropomorphic Phantoms' },
    { icon: 'chart-line', title: 'Quantitative Image Quality' },
    { icon: 'desktop', title: 'Virtual Imaging Trials' },
    { icon: 'brain', title: 'AI / ML for Imaging' },
    { icon: 'print', title: '3D-Printed Phantoms' },
  ],

  experience: [],

  researchExperience: [
    {
      role: 'Research Assistant',
      organization: 'Duke Center for Virtual Imaging Trials',
      date: 'Aug. 2022 - Present',
      description:
        '<strong>Photon-counting CT, phantoms, and virtual trials</strong>: Digital anthropomorphic lung-disease models; quantitative evaluation of 3D-printed physical phantoms (Canon Medical and FDA U01 / FLUIDDA); patient-specific airway modeling for COPD; DukeSim simulations of EICT and PCCT; contributions to XCAT 3.0, Virtual NLST / VLST, and AAPM TG 387. Advised by <a href="https://scholars.duke.edu/person/ehsan.abadi">Ehsan Abadi</a>, collaborating with <a href="https://scholars.duke.edu/person/paul.segars">W. Paul Segars</a> and <a href="https://scholars.duke.edu/person/ehsan.samei">Ehsan Samei</a>.',
      icon: 'flask',
    },
    {
      role: 'Technology and Intellectual Property Fellow',
      organization: 'Duke Office of Translation & Commercialization',
      date: 'Aug. 2025 - Present',
      description:
        '<strong>Translation</strong>: Evaluate university inventions through prior-art, competitive-landscape, market, and commercialization analyses; prepare technical assessment reports and industry-facing technology summaries.',
      icon: 'lightbulb',
    },
    {
      role: 'Research Assistant',
      organization: 'University of California, Irvine',
      date: 'Jun. 2021 - Aug. 2022',
      description:
        '<strong>Imaging Physics Laboratory</strong>: Built and integrated a benchtop dual-energy photon-counting breast cone-beam CT system for microcalcification imaging and material decomposition; calibrated tube, stage, and detector; wrote acquisition, reconstruction, analysis, and GUI pipelines; implemented CdTe spectrum-distortion correction.',
      icon: 'microscope',
    },
    {
      role: 'Associate Engineer in Machine Learning',
      organization: 'OhmMaker LLC',
      date: 'May 2020 - Jun. 2020',
      description:
        '<strong>Computer vision and speech</strong>: Transfer learning, GANs, CNNs; mixed-signal PCB schematics and layouts.',
      icon: 'briefcase',
    },
    {
      role: 'Data Engineer and Sales Administrator',
      organization: 'Topnet Inc.',
      date: 'Nov. 2019 - May 2020',
      description:
        'Data pipelines, dashboards, and a computer-vision inventory application.',
      icon: 'briefcase',
    },
  ],

  teachingExperience: [
    {
      course: '<a href="https://scholars.duke.edu/course/ECE386">ECE 386 Introduction to Applied Machine Learning</a>',
      level: 'Graduate',
      role: 'Teaching Assistant',
      institution: 'Duke University',
      date: 'Fall 2026',
      notes: 'Homework and exam creation and grading',
      icon: 'chalkboard-user',
    },
    {
      course: '<a href="https://undergraduate.bulletins.duke.edu/courses/0171241/general-aoYks">ECE 110L Fundamentals of Electrical and Computer Engineering</a>',
      level: 'Undergraduate',
      role: 'Teaching Assistant',
      institution: 'Duke University',
      date: 'Spring 2024',
      notes: 'Laboratory instruction.',
      icon: 'chalkboard-user',
    },
  ],

  talks: [
    {
      title: 'Task-specific Evaluation of Photon-Counting CT Using Standardized and 3D-Printed Anthropomorphic Lung Phantom',
      venue: 'Duke Radiology Research Day',
      date: 'Jan. 2026',
      icon: 'microphone',
    },
    {
      title: 'Task-Specific Evaluation of Photon-Counting CT Using a 3D-Printed Anthropomorphic Lung Phantom with COPD Pathology',
      venue: 'RSNA Scientific Assembly',
      date: 'Dec. 2025',
      icon: 'microphone',
    },
    {
      title: 'Quantification Accuracy, Consistency, and Image Quality in Deep-Learning CT Reconstruction Kernels Optimized for Pulmonary Imaging',
      venue: 'RSNA Scientific Assembly',
      date: 'Dec. 2025',
      icon: 'microphone',
    },
    {
      title: 'CT performance in quantifying small airway disease using paired inspiratory–expiratory scans',
      venue: 'Virtual Imaging Trials in Medicine',
      date: '2024',
      icon: 'microphone',
    },
    {
      title: 'Subject-specific airway modeling of patients with chronic bronchitis and small airway disease',
      venue: 'Virtual Imaging Trials in Medicine',
      date: '2024',
      icon: 'microphone',
    },
    {
      title: 'Development and application of a virtual imaging trial framework for airway quantifications via CT',
      venue: 'SPIE Medical Imaging',
      date: 'Apr. 2023',
      icon: 'microphone',
    },
  ],

  service: {
    organizing: [
      {
        role: 'Contributor',
        title: 'AAPM Task Group 387',
        date: '2022 - Present',
        description: 'Recommendations for reliable computational phantom representation and interoperability.',
        icon: 'users',
      },
      {
        role: 'Infrastructure & Security Lead',
        title: 'PocketPal Revolution Inc.',
        date: '2025 - Present',
        description: 'Strengthening the reliability, scalability, and technical foundation of the platform',
        icon: 'users',
      },
      {
        role: 'Undergraduate Research Advisor',
        title: 'Duke Muser Program',
        date: '2023 - Present',
        description: 'Mentoring undergraduate researchers in quantitative CT and generative AI.',
        icon: 'user-group',
      },

    ],
    reviewing: {
      conferences: '',
      journals: '',
      programCommittee: '',
    },
  },

  tagColors: [
    'magenta', 'red', 'volcano', 'orange', 'gold',
    'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple',
  ],

  tags: [
    { id: 'ct', name: 'CT', description: 'Computed tomography imaging.', color: '#096dd9' },
    { id: 'pcct', name: 'PCCT', description: 'Photon-counting CT.', color: '#531dab' },
    { id: 'phantoms', name: 'Phantoms', description: 'Computational and physical anthropomorphic phantoms.', color: '#d46b08' },
    { id: 'vit', name: 'VIT', description: 'Virtual imaging trials.', color: '#08979c' },
    { id: 'copd', name: 'COPD', description: 'Pulmonary disease quantification.', color: '#389e0d' },
    { id: 'ai', name: 'AI', description: 'Machine learning for imaging.', color: '#c41d7f' },
    { id: 'python', name: 'Python', description: 'A general purpose programming language.', color: '#f9c646' },
    { id: 'dukesim', name: 'DukeSim', description: 'Duke CT simulator.', color: '#012169' },
  ],

  defaultLanguage: 'en',
};
