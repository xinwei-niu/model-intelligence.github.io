export type SourceType = "journal" | "conference" | "preprint" | "book" | "report"

export interface Paper {
  title: string
  authors: string
  year: number
  venue: string
  source: SourceType
  status?: "verified" | "pending"
  note?: string
}

export interface Thinker {
  name: string
  idea: string
}

export interface Thread {
  id: string
  title: string
  claim: string
  supports: Paper[]
  contests: Paper[]
}

export interface Lane {
  id: string
  label: string
  summary: string
  thinkers: Thinker[]
  threads: Thread[]
}

export interface Section {
  id: string
  label: string
  subtitle: string
  description: string
  accent: string
  lanes: Lane[]
}

export const sections: Section[] = [
  {
    id: "concept",
    label: "I · Concept",
    subtitle: "what intelligence is",
    description:
      "Conceptual families used to define intelligence as behaviour, measurement, prediction, composition, or symbol manipulation.",
    accent: "indigo",
    lanes: [
      {
        id: "behavioural",
        label: "Behavioural",
        summary: "Intentional stance, theory of mind, and social cognition.",
        thinkers: [{ name: "Dennett", idea: "intentional stance" }],
        threads: [
          {
            id: "tom",
            title: "Theory of Mind & the Intentional Stance",
            claim: "Theory of mind does or does not emerge in large language models.",
            supports: [
              {
                title: "Evaluating large language models in theory of mind tasks",
                authors: "Kosinski",
                year: 2024,
                venue: "PNAS 121(45)",
                source: "journal",
                note: "Behavioural evidence cited for emergent ToM-like performance.",
              },
              {
                title: "Testing theory of mind in LLMs and humans",
                authors: "Strachan et al.",
                year: 2024,
                venue: "Nature Human Behaviour 8",
                source: "journal",
                note: "Direct comparison with human performance.",
              },
              {
                title: "LLMs achieve adult human performance on higher-order ToM tasks",
                authors: "Street et al.",
                year: 2024,
                venue: "arXiv:2405.18870",
                source: "preprint",
                note: "Higher-order ToM benchmark claims.",
              },
              {
                title: "Sparks of Artificial General Intelligence",
                authors: "Bubeck et al.",
                year: 2023,
                venue: "arXiv:2303.12712",
                source: "preprint",
                note: "Reports ToM-like behaviour among other capabilities.",
              },
              {
                title: "Boosting Theory-of-Mind Performance in LLMs via Prompting",
                authors: "Moghaddam & Honey",
                year: 2023,
                venue: "arXiv:2304.11490",
                source: "preprint",
                note: "Prompting raises measured ToM performance.",
              },
            ],
            contests: [
              {
                title: "LLMs Fail on Trivial Alterations to ToM Tasks",
                authors: "Ullman",
                year: 2023,
                venue: "arXiv:2302.08399",
                source: "preprint",
                note: "Brittleness under superficial perturbation.",
              },
              {
                title: "Clever Hans or Neural Theory of Mind?",
                authors: "Shapira et al.",
                year: 2024,
                venue: "EACL 2024",
                source: "conference",
                note: "Caution in attributing genuine ToM.",
              },
              {
                title: "Neural Theory-of-Mind? On the Limits of Social Intelligence in Large LMs",
                authors: "Sap et al.",
                year: 2022,
                venue: "EMNLP 2022",
                source: "conference",
                note: "Limits of social inference from text-only training.",
              },
              {
                title: "Minding Language Models' (Lack of) Theory of Mind",
                authors: "Sclar et al.",
                year: 2023,
                venue: "ACL 2023",
                source: "conference",
                note: "Systematic ToM gaps.",
              },
              {
                title: "FANToM: Stress-testing ToM in Interactions",
                authors: "Kim et al.",
                year: 2023,
                venue: "EMNLP 2023",
                source: "conference",
                note: "Interaction-based stress test of ToM.",
              },
            ],
          },
        ],
      },
      {
        id: "psychometric",
        label: "Psychometric",
        summary: "Plural abilities and the structure of intelligence.",
        thinkers: [{ name: "Gardner", idea: "plural abilities" }],
        threads: [],
      },
      {
        id: "predictive",
        label: "Predictive",
        summary: "Active inference, predictive processing, and brain–model convergence.",
        thinkers: [
          { name: "Andy Clark", idea: "predictive; embodied" },
          { name: "Friston", idea: "free energy" },
        ],
        threads: [
          {
            id: "fep",
            title: "Active Inference & Free Energy Principle",
            claim: "The free energy principle / active inference is a principle of adaptive intelligence.",
            supports: [
              {
                title: "The Free Energy Principle for Perception and Action: A Deep Learning Perspective",
                authors: "Mazzaglia et al.",
                year: 2022,
                venue: "Entropy 24(2)",
                source: "journal",
                note: "Operationalises FEP in deep learning terms.",
              },
              {
                title: "Predictive Coding: A Theoretical and Experimental Review",
                authors: "Millidge, Seth & Buckley",
                year: 2021,
                venue: "arXiv:2107.12979",
                source: "preprint",
                note: "Review of predictive coding and evidence.",
              },
              {
                title: "Reinforcement Learning or Active Inference?",
                authors: "Friston, Daunizeau & Kiebel",
                year: 2009,
                venue: "PLoS ONE 4(7)",
                source: "journal",
                note: "Active inference as an alternative to RL.",
              },
              {
                title: "Learning action-oriented models through active inference",
                authors: "Tschantz, Seth & Buckley",
                year: 2020,
                venue: "PLoS Computational Biology 16(4)",
                source: "journal",
                note: "Action-oriented active inference models.",
              },
              {
                title: "Active inference on discrete state-spaces",
                authors: "Da Costa et al.",
                year: 2020,
                venue: "Journal of Mathematical Psychology 99",
                source: "journal",
                note: "Formal treatment on discrete spaces.",
              },
            ],
            contests: [
              {
                title: "The Dark Room Problem",
                authors: "Sun & Firestone",
                year: 2020,
                venue: "Trends in Cognitive Sciences 24(5)",
                source: "journal",
                note: "Critique of simplistic active-inference intuitions.",
              },
              {
                title: "The Emperor's New Markov Blankets",
                authors: "Bruineberg et al.",
                year: 2022,
                venue: "Behavioral and Brain Sciences 45",
                source: "journal",
                note: "Conceptual critique of blanket-based arguments.",
              },
              {
                title: "A Technical Critique of Some Parts of the Free Energy Principle",
                authors: "Biehl, Pollock & Kanai",
                year: 2021,
                venue: "Entropy 23(3)",
                source: "journal",
                note: "Technical objections to FEP formulations.",
              },
              {
                title: "First principles in the life sciences: FEP, organicism, and mechanism",
                authors: "Colombo & Wright",
                year: 2021,
                venue: "Synthese",
                source: "journal",
                note: "Philosophy-of-science critique.",
              },
              {
                title: "How particular is the physics of the free energy principle?",
                authors: "Aguilera et al.",
                year: 2022,
                venue: "Physics of Life Reviews",
                source: "journal",
                note: "Questions generality of the physics.",
              },
            ],
          },
          {
            id: "brain-model",
            title: "Brain–Model Convergence & Predictive Processing",
            claim: "Prediction-trained models do or do not converge on brain representations.",
            supports: [
              {
                title: "Integrative modeling converges on predictive processing",
                authors: "Schrimpf et al.",
                year: 2021,
                venue: "PNAS 118(45)",
                source: "journal",
                note: "Representative support for convergence claims.",
              },
              {
                title: "Brains and algorithms partially converge in NLP",
                authors: "Caucheteux & King",
                year: 2022,
                venue: "Communications Biology 5",
                source: "journal",
                note: "Partial human–model convergence.",
              },
              {
                title: "Shared computational principles for language processing in humans and deep LMs",
                authors: "Goldstein et al.",
                year: 2022,
                venue: "Nature Neuroscience 25",
                source: "journal",
                note: "Human–model alignment in language.",
              },
              {
                title: "Performance-optimized hierarchical models predict higher visual cortex",
                authors: "Yamins et al.",
                year: 2014,
                venue: "PNAS 111",
                source: "journal",
                note: "Vision precedent for convergence.",
              },
            ],
            contests: [
              {
                title: "Predictive Coding or Just Feature Discovery?",
                authors: "Antonello & Huth",
                year: 2024,
                venue: "Neurobiology of Language 5",
                source: "journal",
                note: "Alternative account of why LMs fit brain data.",
              },
              {
                title: "Critiques of brain-score interpretation",
                authors: "Schaeffer et al.",
                year: 2024,
                venue: "preprint (verify)",
                source: "preprint",
                note: "Skeptical reading of convergence metrics.",
              },
            ],
          },
        ],
      },
      {
        id: "compositional",
        label: "Compositional",
        summary: "Analogy as the core of cognition.",
        thinkers: [{ name: "Hofstadter", idea: "analogy as core" }],
        threads: [
          {
            id: "analogy",
            title: "Analogy & Abstraction",
            claim: "Large language models do or do not reason by analogy.",
            supports: [
              {
                title: "Emergent analogical reasoning in LLMs",
                authors: "Webb, Holyoak & Lu",
                year: 2023,
                venue: "Nature Human Behaviour 7",
                source: "journal",
                note: "High-profile support for analogy-like behaviour.",
              },
              {
                title: "Evidence from counterfactual tasks supports emergent analogical reasoning",
                authors: "Webb et al.",
                year: 2024,
                venue: "arXiv:2404.13070",
                source: "preprint",
                note: "Counterfactual task evidence.",
              },
              {
                title: "In-Context Analogical Reasoning with Pre-Trained Language Models",
                authors: "Hu et al.",
                year: 2023,
                venue: "ACL 2023",
                source: "conference",
                note: "In-context analogy.",
              },
              {
                title: "Do LLMs Solve Verbal Analogies Like Children Do?",
                authors: "Stevenson et al.",
                year: 2023,
                venue: "arXiv:2310.20384",
                source: "preprint",
                note: "Comparison with child performance.",
              },
            ],
            contests: [
              {
                title: "Response: Emergent analogical reasoning",
                authors: "Hodel & West",
                year: 2023,
                venue: "arXiv:2308.16118",
                source: "preprint",
                note: "Pushback on interpretation.",
              },
              {
                title: "Counterfactual tasks evaluate generality of analogical reasoning",
                authors: "Lewis & Mitchell",
                year: 2024,
                venue: "arXiv:2402.08955",
                source: "preprint",
                note: "Questions generality of analogy.",
              },
              {
                title: "Reasoning or Reciting?",
                authors: "Wu et al.",
                year: 2024,
                venue: "NAACL 2024",
                source: "conference",
                note: "Generalisation beyond memorised patterns.",
              },
              {
                title: "LLMs Are Not Strong Abstract Reasoners",
                authors: "Gendron et al.",
                year: 2024,
                venue: "IJCAI 2024",
                source: "conference",
                note: "Failure modes in abstract reasoning.",
              },
            ],
          },
        ],
      },
      {
        id: "symbolic",
        label: "Symbolic",
        summary: "Language of thought, innate faculty, and physical symbol systems.",
        thinkers: [
          { name: "Fodor", idea: "language of thought" },
          { name: "Chomsky", idea: "innate faculty" },
          { name: "Newell & Simon", idea: "PSSH" },
        ],
        threads: [],
      },
    ],
  },
  {
    id: "possibility",
    label: "II · Possibility",
    subtitle: "can a machine have it",
    description:
      "Whether disembodied or form-trained systems can possess understanding, meaning, or other candidate capacities.",
    accent: "rose",
    lanes: [
      {
        id: "anti-comp",
        label: "Anti-comp.",
        summary: "Chinese Room and embodied-coping critiques of form-only systems.",
        thinkers: [
          { name: "Searle", idea: "Chinese Room" },
          { name: "Dreyfus", idea: "embodied coping" },
        ],
        threads: [
          {
            id: "meaning",
            title: "Understanding & Meaning",
            claim: "Form-trained models do or do not acquire meaning and understanding.",
            supports: [
              {
                title: "Emergent World Representations (Othello-GPT)",
                authors: "Li et al.",
                year: 2023,
                venue: "ICLR 2023",
                source: "conference",
                note: "Internal world-model evidence.",
              },
              {
                title: "Language Models Represent Space and Time",
                authors: "Gurnee & Tegmark",
                year: 2024,
                venue: "ICLR 2024",
                source: "conference",
                note: "Geometric / representational claims.",
              },
              {
                title: "Mapping Language Models to Grounded Conceptual Spaces",
                authors: "Patel & Pavlick",
                year: 2022,
                venue: "ICLR 2022",
                source: "conference",
                note: "Conceptual-space mapping.",
              },
              {
                title: "Implicit Representations of Meaning in Neural Language Models",
                authors: "Li, Nye & Andreas",
                year: 2021,
                venue: "ACL 2021",
                source: "conference",
                note: "Implicit meaning representations.",
              },
              {
                title: "People cannot distinguish GPT-4 from a human in a Turing test",
                authors: "Jones & Bergen",
                year: 2024,
                venue: "arXiv:2405.08007",
                source: "preprint",
                note: "Behavioural indistinguishability result.",
              },
              {
                title: "Using cognitive psychology to understand GPT-3",
                authors: "Binz & Schulz",
                year: 2023,
                venue: "PNAS 120(6)",
                source: "journal",
                note: "Human-like behavioural analysis.",
              },
            ],
            contests: [
              {
                title: "Climbing towards NLU (octopus test)",
                authors: "Bender & Koller",
                year: 2020,
                venue: "ACL 2020",
                source: "conference",
                note: "Canonical anti-form-only argument.",
              },
              {
                title: "On the Dangers of Stochastic Parrots",
                authors: "Bender et al.",
                year: 2021,
                venue: "FAccT 2021",
                source: "conference",
                note: "Form without grounded meaning.",
              },
              {
                title: "Dissociating language and thought in LLMs",
                authors: "Mahowald et al.",
                year: 2024,
                venue: "Trends in Cognitive Sciences 28(6)",
                source: "journal",
                note: "Language vs. thought dissociation.",
              },
              {
                title: "Alice in Wonderland",
                authors: "Nezhurina et al.",
                year: 2024,
                venue: "arXiv:2406.02061",
                source: "preprint",
                note: "Brittle competence under transformation.",
              },
              {
                title: "Embers of Autoregression",
                authors: "McCoy et al.",
                year: 2024,
                venue: "PNAS 121(41)",
                source: "journal",
                note: "Task-probability sensitivity.",
              },
            ],
          },
          {
            id: "grounding",
            title: "Grounding & Embodiment",
            claim: "Disembodied models can or cannot be grounded; embodiment may be required.",
            supports: [
              {
                title: "SayCan",
                authors: "Ahn et al.",
                year: 2022,
                venue: "CoRL 2022",
                source: "conference",
                note: "Language models in robotic planning.",
              },
              {
                title: "Language Models as Zero-Shot Planners",
                authors: "Huang et al.",
                year: 2022,
                venue: "ICML 2022",
                source: "conference",
                note: "Planning as a route to grounded action.",
              },
              {
                title: "RT-2: Vision-Language-Action Models",
                authors: "Brohan et al.",
                year: 2023,
                venue: "CoRL 2023",
                source: "conference",
                note: "Web knowledge transferred to control.",
              },
              {
                title: "The Vector Grounding Problem",
                authors: "Mollo & Millière",
                year: 2023,
                venue: "arXiv:2304.01481",
                source: "preprint",
                note: "Conditions for representational grounding.",
              },
            ],
            contests: [
              {
                title: "Experience Grounds Language",
                authors: "Bisk et al.",
                year: 2020,
                venue: "EMNLP 2020",
                source: "conference",
                note: "Grounding requires experience.",
              },
              {
                title: "Provable Limitations of Acquiring Meaning from Ungrounded Form",
                authors: "Merrill et al.",
                year: 2021,
                venue: "TACL 9",
                source: "journal",
                note: "Formal limits on meaning from form.",
              },
              {
                title: "AI and the Limits of Language",
                authors: "Browning & LeCun",
                year: 2022,
                venue: "Noema",
                source: "report",
                note: "Argues text is an impoverished signal.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "criterion",
    label: "III · Criterion",
    subtitle: "how to measure it",
    description:
      "Tests, benchmarks, emergence, and the construct validity of intelligence measures.",
    accent: "emerald",
    lanes: [
      {
        id: "behavioural",
        label: "Behavioural",
        summary: "Imitation game, formal measurement, and skill-acquisition efficiency.",
        thinkers: [
          { name: "Turing", idea: "imitation game" },
          { name: "Hernández-Orallo", idea: "formal measurement" },
          { name: "Chollet", idea: "skill efficiency; ARC" },
        ],
        threads: [
          {
            id: "emergence",
            title: "Emergent Abilities & Measurement",
            claim: "Capabilities genuinely emerge with scale, or are measurement artifacts.",
            supports: [
              {
                title: "Emergent Abilities of Large Language Models",
                authors: "Wei et al.",
                year: 2022,
                venue: "TMLR 2022",
                source: "journal",
                note: "Early articulation of emergence claims.",
              },
              {
                title: "Language Models are Few-Shot Learners (GPT-3)",
                authors: "Brown et al.",
                year: 2020,
                venue: "NeurIPS 2020",
                source: "conference",
                note: "Scaling and in-context performance.",
              },
              {
                title: "Predictability and Surprise in Large Generative Models",
                authors: "Ganguli et al.",
                year: 2022,
                venue: "FAccT 2022",
                source: "conference",
                note: "Surprising capability jumps.",
              },
              {
                title: "Chain-of-Thought Prompting",
                authors: "Wei et al.",
                year: 2022,
                venue: "NeurIPS 2022",
                source: "conference",
                note: "Reasoning elicited at scale.",
              },
            ],
            contests: [
              {
                title: "Are Emergent Abilities a Mirage?",
                authors: "Schaeffer, Miranda & Koyejo",
                year: 2023,
                venue: "NeurIPS 2023",
                source: "conference",
                note: "Measurement-artifact argument; best paper.",
              },
              {
                title: "Inverse Scaling: When Bigger Isn't Better",
                authors: "McKenzie et al.",
                year: 2023,
                venue: "TMLR",
                source: "journal",
                note: "Inverse scaling curves.",
              },
              {
                title: "Are Emergent Abilities just In-Context Learning?",
                authors: "Lu et al.",
                year: 2024,
                venue: "ACL 2024",
                source: "conference",
                note: "Reattributes emergence to ICL.",
              },
              {
                title: "Understanding Emergent Abilities from the Loss Perspective",
                authors: "Du et al.",
                year: 2024,
                venue: "NeurIPS 2024",
                source: "conference",
                note: "Loss-based reframing.",
              },
            ],
          },
          {
            id: "arc",
            title: "Abstraction & Skill-Acquisition Efficiency / ARC",
            claim: "ARC-style abstraction is within or beyond reach of current methods.",
            supports: [
              {
                title: "The Surprising Effectiveness of Test-Time Training for Abstract Reasoning",
                authors: "Akyürek et al.",
                year: 2024,
                venue: "arXiv:2411.07279",
                source: "preprint",
                note: "Test-time adaptation boosts abstraction.",
              },
              {
                title: "Combining Induction and Transduction for Abstract Reasoning",
                authors: "Li et al.",
                year: 2024,
                venue: "arXiv:2411.02272",
                source: "preprint",
                note: "Hybrid program-synthesis approach.",
              },
              {
                title: "ARC Prize 2024 Technical Report",
                authors: "Chollet et al.",
                year: 2025,
                venue: "arXiv:2412.04604",
                source: "preprint",
                note: "State of progress on ARC.",
              },
            ],
            contests: [
              {
                title: "The ConceptARC Benchmark",
                authors: "Moskvichev, Odouard & Mitchell",
                year: 2023,
                venue: "arXiv:2305.07141",
                source: "preprint",
                note: "Human–model gap on abstraction.",
              },
              {
                title: "LLMs Are Not Strong Abstract Reasoners",
                authors: "Gendron et al.",
                year: 2024,
                venue: "IJCAI 2024",
                source: "conference",
                note: "Negative result across tasks.",
              },
              {
                title: "Alice in Wonderland",
                authors: "Nezhurina et al.",
                year: 2024,
                venue: "arXiv:2406.02061",
                source: "preprint",
                note: "Fragility under small transformations.",
              },
            ],
          },
          {
            id: "benchmarks",
            title: "Benchmarks, Construct Validity & Psychometrics",
            claim: "Benchmarks do or do not validly measure intelligence.",
            supports: [
              {
                title: "HELM",
                authors: "Liang et al.",
                year: 2023,
                venue: "TMLR 2023",
                source: "journal",
                note: "Holistic evaluation framework.",
              },
              {
                title: "BIG-bench",
                authors: "Srivastava et al.",
                year: 2023,
                venue: "TMLR 2023",
                source: "journal",
                note: "Large collaborative benchmark.",
              },
              {
                title: "Observational Scaling Laws",
                authors: "Ruan, Maddison & Hashimoto",
                year: 2024,
                venue: "NeurIPS 2024",
                source: "conference",
                note: "Predictable capability scaling.",
              },
              {
                title: "Chatbot Arena",
                authors: "Chiang et al.",
                year: 2024,
                venue: "ICML 2024",
                source: "conference",
                note: "Preference-based evaluation at scale.",
              },
            ],
            contests: [
              {
                title: "AI and the Everything in the Whole Wide World Benchmark",
                authors: "Raji et al.",
                year: 2021,
                venue: "NeurIPS D&B 2021",
                source: "conference",
                note: "Construct-validity critique.",
              },
              {
                title: "What Will it Take to Fix Benchmarking in NLU?",
                authors: "Bowman & Dahl",
                year: 2021,
                venue: "NAACL 2021",
                source: "conference",
                note: "Structural benchmarking problems.",
              },
              {
                title: "Data Contamination",
                authors: "Sainz et al.",
                year: 2023,
                venue: "EMNLP 2023 Findings",
                source: "conference",
                note: "Dataset leakage in benchmarks.",
              },
              {
                title: "GSM1k",
                authors: "Zhang et al.",
                year: 2024,
                venue: "arXiv:2405.00332",
                source: "preprint",
                note: "Revealing benchmark perturbation.",
              },
              {
                title: "Evaluating Generative AI is a Social Science Measurement Challenge",
                authors: "Wallach et al.",
                year: 2024,
                venue: "arXiv:2411.10939",
                source: "preprint",
                note: "Measurement-theory framing.",
              },
            ],
          },
          {
            id: "general-claims",
            title: "Claims of General Intelligence",
            claim: "Current systems do or do not exhibit general intelligence.",
            supports: [
              {
                title: "Sparks of Artificial General Intelligence",
                authors: "Bubeck et al.",
                year: 2023,
                venue: "arXiv:2303.12712",
                source: "preprint",
                note: "Reports general-purpose capability.",
              },
              {
                title: "Levels of AGI for Operationalizing Progress",
                authors: "Morris et al.",
                year: 2024,
                venue: "ICML 2024",
                source: "conference",
                note: "Graded framework for AGI.",
              },
            ],
            contests: [
              {
                title: "Why AI is Harder Than We Think",
                authors: "Mitchell",
                year: 2021,
                venue: "GECCO (arXiv:2104.12871)",
                source: "conference",
                note: "Caution against premature claims.",
              },
              {
                title: "LLMs Can't Plan",
                authors: "Kambhampati et al.",
                year: 2024,
                venue: "ICML 2024",
                source: "conference",
                note: "Planning failures.",
              },
              {
                title: "PlanBench",
                authors: "Valmeekam et al.",
                year: 2023,
                venue: "NeurIPS 2023",
                source: "conference",
                note: "Benchmark of planning ability.",
              },
              {
                title: "Alice in Wonderland",
                authors: "Nezhurina et al.",
                year: 2024,
                venue: "arXiv:2406.02061",
                source: "preprint",
                note: "Simple-task generalisation failures.",
              },
            ],
          },
          {
            id: "g-factor",
            title: "Structure of Abilities: g vs. Multiple Intelligences",
            claim: "Model abilities load on one general factor, or on many dissociable capacities.",
            supports: [
              {
                title: "Unveiling the General Intelligence Factor in Language Models",
                authors: "Ilić",
                year: 2023,
                venue: "arXiv:2310.11616",
                source: "preprint",
                note: "Explicit g-factor hypothesis.",
              },
              {
                title: "Revealing the structure of language model capabilities",
                authors: "Burnell et al.",
                year: 2023,
                venue: "arXiv:2306.10062",
                source: "preprint",
                note: "Latent capability structure.",
              },
            ],
            contests: [
              {
                title: "General intelligence disentangled via a generality metric",
                authors: "Hernández-Orallo et al.",
                year: 2021,
                venue: "Scientific Reports 11",
                source: "journal",
                note: "Against collapsing capability into one factor.",
              },
              {
                title: "Dissociating language and thought",
                authors: "Mahowald et al.",
                year: 2024,
                venue: "Trends in Cognitive Sciences 28(6)",
                source: "journal",
                note: "Plural, dissociable capacities.",
              },
              {
                title: "Observational Scaling Laws",
                authors: "Ruan et al.",
                year: 2024,
                venue: "NeurIPS 2024",
                source: "conference",
                note: "Multiple capability dimensions.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "implementation",
    label: "IV · Implementation",
    subtitle: "how it is built",
    description:
      "Candidate implementation families: optimization, causal, predictive, compositional, symbolic, and anti-computationalist.",
    accent: "amber",
    lanes: [
      {
        id: "optimization",
        label: "Optimization",
        summary: "Universal definitions, compression, rate reduction, and reward.",
        thinkers: [
          { name: "Legg & Hutter", idea: "universal I" },
          { name: "Russell & Norvig", idea: "rational agency" },
          { name: "Schmidhuber", idea: "compression" },
          { name: "Yi Ma", idea: "rate reduction" },
          { name: "Silver & Sutton", idea: "reward; RL agents" },
        ],
        threads: [
          {
            id: "optimization-core",
            title: "Optimization & Universal Definitions",
            claim: "Intelligence can be defined as reward-driven optimization or universal performance.",
            supports: [
              {
                title: "Universal Intelligence: A Definition of Machine Intelligence",
                authors: "Legg & Hutter",
                year: 2007,
                venue: "Minds and Machines 17(4)",
                source: "journal",
                note: "Formal universal intelligence measure.",
              },
              {
                title: "Formal Theory of Creativity, Fun, and Intrinsic Motivation",
                authors: "Schmidhuber",
                year: 2010,
                venue: "IEEE Trans. Autonomous Mental Development 2(3)",
                source: "journal",
                note: "Compression-progress drive.",
              },
              {
                title: "Reward Is Enough",
                authors: "Silver et al.",
                year: 2021,
                venue: "Artificial Intelligence 299",
                source: "journal",
                note: "Reward maximisation as a sufficient principle.",
              },
              {
                title: "Parsimony and Self-Consistency for the Emergence of Intelligence",
                authors: "Ma, Tsao & Shum",
                year: 2022,
                venue: "FITEE 23(9)",
                source: "journal",
                note: "Rate-reduction / parsimony principle.",
              },
            ],
            contests: [
              {
                title: "Intelligence Without Representation",
                authors: "Brooks",
                year: 1991,
                venue: "Artificial Intelligence 47(1–3)",
                source: "journal",
                note: "Situated action over optimization.",
              },
              {
                title: "Why AI is Harder Than We Think",
                authors: "Mitchell",
                year: 2021,
                venue: "GECCO (arXiv:2104.12871)",
                source: "conference",
                note: "Limits of optimization-only framings.",
              },
            ],
          },
        ],
      },
      {
        id: "causal",
        label: "Causal",
        summary: "Do-calculus, structural causal models, and causal representation.",
        thinkers: [
          { name: "Pearl", idea: "do-calculus; SCM" },
          { name: "Schölkopf & Bengio", idea: "causal representation" },
        ],
        threads: [
          {
            id: "causal-core",
            title: "Causal Structure & Representation",
            claim: "Intelligence is built on causal structure, intervention, and representation.",
            supports: [
              {
                title: "Causality: Models, Reasoning, and Inference",
                authors: "Pearl",
                year: 2009,
                venue: "Cambridge University Press",
                source: "book",
                note: "Foundation for causal modelling.",
              },
              {
                title: "Toward Causal Representation Learning",
                authors: "Schölkopf et al.",
                year: 2021,
                venue: "Proceedings of the IEEE 109(5)",
                source: "journal",
                note: "Bridges causality and learned representations.",
              },
            ],
            contests: [
              {
                title: "Reward Is Enough",
                authors: "Silver et al.",
                year: 2021,
                venue: "Artificial Intelligence 299",
                source: "journal",
                note: "Argues reward alone suffices, without explicit causal models.",
              },
              {
                title: "On the Dangers of Stochastic Parrots",
                authors: "Bender et al.",
                year: 2021,
                venue: "FAccT 2021",
                source: "conference",
                note: "Questions whether scaled models capture structure.",
              },
            ],
          },
        ],
      },
      {
        id: "predictive",
        label: "Predictive",
        summary: "Cortical prediction and world-model architectures.",
        thinkers: [
          { name: "Hawkins", idea: "cortical prediction" },
          { name: "LeCun", idea: "world-model; JEPA" },
        ],
        threads: [
          {
            id: "predictive-core",
            title: "Predictive & World-Model Implementation",
            claim: "Prediction-based learning is central to building intelligence.",
            supports: [
              {
                title: "On Intelligence",
                authors: "Hawkins & Blakeslee",
                year: 2004,
                venue: "Times Books",
                source: "book",
                note: "Cortical prediction as the core mechanism.",
              },
              {
                title: "A Path Towards Autonomous Machine Intelligence",
                authors: "LeCun",
                year: 2022,
                venue: "OpenReview",
                source: "report",
                note: "World-model / JEPA architecture proposal.",
              },
              {
                title: "Whatever Next? Predictive Brains, Situated Agents",
                authors: "Clark",
                year: 2013,
                venue: "Behavioral and Brain Sciences 36(3)",
                source: "journal",
                note: "Predictive processing in cognition.",
              },
            ],
            contests: [
              {
                title: "Climbing towards NLU",
                authors: "Bender & Koller",
                year: 2020,
                venue: "ACL 2020",
                source: "conference",
                note: "Prediction over form may not yield meaning.",
              },
              {
                title: "The Next Decade in AI",
                authors: "Marcus",
                year: 2020,
                venue: "arXiv:2002.06177",
                source: "preprint",
                note: "Calls for structure beyond prediction.",
              },
            ],
          },
        ],
      },
      {
        id: "compositional",
        label: "Compositional",
        summary: "Compositional generalization and Bayesian program learning.",
        thinkers: [{ name: "Lake", idea: "compositional; BPL" }],
        threads: [
          {
            id: "compositional-core",
            title: "Compositional Implementation",
            claim: "Intelligence can be implemented through compositional, program-like representations.",
            supports: [
              {
                title: "Building Machines That Learn and Think Like People",
                authors: "Lake et al.",
                year: 2017,
                venue: "Behavioral and Brain Sciences 40",
                source: "journal",
                note: "Compositional learning as a design target.",
              },
              {
                title: "Emergent analogical reasoning in LLMs",
                authors: "Webb, Holyoak & Lu",
                year: 2023,
                venue: "Nature Human Behaviour 7",
                source: "journal",
                note: "Compositional reasoning exemplar.",
              },
            ],
            contests: [
              {
                title: "LLMs Are Not Strong Abstract Reasoners",
                authors: "Gendron et al.",
                year: 2024,
                venue: "IJCAI 2024",
                source: "conference",
                note: "Limits of structured generalisation.",
              },
            ],
          },
        ],
      },
      {
        id: "symbolic",
        label: "Symbolic",
        summary: "Neuro-symbolic systems and physical symbol architectures.",
        thinkers: [{ name: "Marcus", idea: "neuro-symbolic" }],
        threads: [
          {
            id: "symbolic-core",
            title: "Neuro-Symbolic Implementation",
            claim: "Symbolic computation remains central or complementary to learned systems.",
            supports: [
              {
                title: "Computer Science as Empirical Inquiry: Symbols and Search",
                authors: "Newell & Simon",
                year: 1976,
                venue: "CACM 19(3)",
                source: "journal",
                note: "Physical symbol system hypothesis.",
              },
              {
                title: "Connectionism and Cognitive Architecture",
                authors: "Fodor & Pylyshyn",
                year: 1988,
                venue: "Cognition 28(1–2)",
                source: "journal",
                note: "Systematicity and language of thought.",
              },
              {
                title: "The Next Decade in AI",
                authors: "Marcus",
                year: 2020,
                venue: "arXiv:2002.06177",
                source: "preprint",
                note: "Argues for hybrid neuro-symbolic systems.",
              },
            ],
            contests: [
              {
                title: "Intelligence Without Representation",
                authors: "Brooks",
                year: 1991,
                venue: "Artificial Intelligence 47(1–3)",
                source: "journal",
                note: "Anti-representational robotics.",
              },
              {
                title: "What Computers Can't Do",
                authors: "Dreyfus",
                year: 1972,
                venue: "Harper & Row",
                source: "book",
                note: "Early anti-symbolic critique.",
              },
            ],
          },
        ],
      },
      {
        id: "anti-comp",
        label: "Anti-comp.",
        summary: "Situated robotics and embodiment-first implementation.",
        thinkers: [{ name: "Brooks", idea: "situated robotics" }],
        threads: [
          {
            id: "anti-comp-core",
            title: "Situated & Embodied Implementation",
            claim: "Intelligence is built through situated, embodied interaction rather than disembodied computation.",
            supports: [
              {
                title: "Intelligence Without Representation",
                authors: "Brooks",
                year: 1991,
                venue: "Artificial Intelligence 47(1–3)",
                source: "journal",
                note: "Behaviour-based, situated robotics.",
              },
              {
                title: "What Computers Can't Do",
                authors: "Dreyfus",
                year: 1972,
                venue: "Harper & Row",
                source: "book",
                note: "Embodied coping over symbol manipulation.",
              },
            ],
            contests: [
              {
                title: "Sparks of Artificial General Intelligence",
                authors: "Bubeck et al.",
                year: 2023,
                venue: "arXiv:2303.12712",
                source: "preprint",
                note: "Disembodied models show broad competence.",
              },
              {
                title: "People cannot distinguish GPT-4 from a human in a Turing test",
                authors: "Jones & Bergen",
                year: 2024,
                venue: "arXiv:2405.08007",
                source: "preprint",
                note: "Behavioural challenge to embodiment requirement.",
              },
            ],
          },
        ],
      },
    ],
  },
]

export const foundationalPapers: Paper[] = [
  { title: "A Review of B. F. Skinner's Verbal Behavior", authors: "Chomsky", year: 1959, venue: "Language 35(1)", source: "journal" },
  { title: "Parsimony and Self-Consistency for the Emergence of Intelligence", authors: "Ma, Tsao & Shum", year: 2022, venue: "FITEE 23(9)", source: "journal" },
  { title: "Computing Machinery and Intelligence", authors: "Turing", year: 1950, venue: "Mind LIX(236)", source: "journal" },
  { title: "Computer Science as Empirical Inquiry: Symbols and Search", authors: "Newell & Simon", year: 1976, venue: "CACM 19(3)", source: "journal" },
  { title: "Connectionism and Cognitive Architecture", authors: "Fodor & Pylyshyn", year: 1988, venue: "Cognition 28(1–2)", source: "journal" },
  { title: "Minds, Brains, and Programs", authors: "Searle", year: 1980, venue: "Behavioral and Brain Sciences 3(3)", source: "journal" },
  { title: "What Computers Can't Do", authors: "Dreyfus", year: 1972, venue: "Harper & Row", source: "book" },
  { title: "The Intentional Stance", authors: "Dennett", year: 1987, venue: "MIT Press", source: "book" },
  { title: "Frames of Mind: The Theory of Multiple Intelligences", authors: "Gardner", year: 1983, venue: "Basic Books", source: "book" },
  { title: "Analogy as the Core of Cognition", authors: "Hofstadter", year: 2001, venue: "The Analogical Mind, MIT Press", source: "book" },
  { title: "The Free-Energy Principle: A Unified Brain Theory?", authors: "Friston", year: 2010, venue: "Nature Reviews Neuroscience 11(2)", source: "journal" },
  { title: "Whatever Next? Predictive Brains, Situated Agents", authors: "Clark", year: 2013, venue: "Behavioral and Brain Sciences 36(3)", source: "journal" },
  { title: "On Intelligence", authors: "Hawkins & Blakeslee", year: 2004, venue: "Times Books", source: "book" },
  { title: "A Path Towards Autonomous Machine Intelligence", authors: "LeCun", year: 2022, venue: "OpenReview", source: "report" },
  { title: "Building Machines That Learn and Think Like People", authors: "Lake et al.", year: 2017, venue: "Behavioral and Brain Sciences 40", source: "journal" },
  { title: "The Next Decade in AI", authors: "Marcus", year: 2020, venue: "arXiv:2002.06177", source: "preprint" },
  { title: "Universal Intelligence: A Definition of Machine Intelligence", authors: "Legg & Hutter", year: 2007, venue: "Minds and Machines 17(4)", source: "journal" },
  { title: "Artificial Intelligence: A Modern Approach (4th ed.)", authors: "Russell & Norvig", year: 2020, venue: "Pearson", source: "book" },
  { title: "Formal Theory of Creativity, Fun, and Intrinsic Motivation", authors: "Schmidhuber", year: 2010, venue: "IEEE Trans. AMD 2(3)", source: "journal" },
  { title: "Reward Is Enough", authors: "Silver et al.", year: 2021, venue: "Artificial Intelligence 299", source: "journal" },
  { title: "Causality: Models, Reasoning, and Inference", authors: "Pearl", year: 2009, venue: "Cambridge University Press", source: "book" },
  { title: "Toward Causal Representation Learning", authors: "Schölkopf et al.", year: 2021, venue: "Proceedings of the IEEE 109(5)", source: "journal" },
  { title: "On the Measure of Intelligence", authors: "Chollet", year: 2019, venue: "arXiv:1911.01547", source: "preprint" },
  { title: "The Measure of All Minds", authors: "Hernández-Orallo", year: 2017, venue: "Cambridge University Press", source: "book" },
  { title: "Intelligence Without Representation", authors: "Brooks", year: 1991, venue: "Artificial Intelligence 47(1–3)", source: "journal" },
  { title: "Vision", authors: "Marr", year: 1982, venue: "W. H. Freeman", source: "book" },
]

export const sourceLabels: Record<string, string> = {
  journal: "Journal",
  conference: "Conference",
  preprint: "Preprint",
  book: "Book",
  report: "Report",
}

export const laneColors: Record<string, string> = {
  behavioural: "indigo",
  psychometric: "sky",
  predictive: "cyan",
  compositional: "emerald",
  symbolic: "amber",
  "anti-comp": "rose",
  causal: "orange",
  optimization: "teal",
}

export interface LibraryRow extends Paper {
  sectionId: string
  sectionLabel: string
  laneId: string
  laneLabel: string
  threadId: string
  threadTitle: string
  threadClaim: string
  stance: "Support" | "Contest" | "Reference"
}

export function flattenLibrary(): LibraryRow[] {
  const rows: LibraryRow[] = []
  sections.forEach((section) => {
    section.lanes.forEach((lane) => {
      lane.threads.forEach((thread) => {
        thread.supports.forEach((paper) =>
          rows.push({
            ...paper,
            sectionId: section.id,
            sectionLabel: section.label,
            laneId: lane.id,
            laneLabel: lane.label,
            threadId: thread.id,
            threadTitle: thread.title,
            threadClaim: thread.claim,
            stance: "Support",
          }),
        )
        thread.contests.forEach((paper) =>
          rows.push({
            ...paper,
            sectionId: section.id,
            sectionLabel: section.label,
            laneId: lane.id,
            laneLabel: lane.label,
            threadId: thread.id,
            threadTitle: thread.title,
            threadClaim: thread.claim,
            stance: "Contest",
          }),
        )
      })
    })
  })
  foundationalPapers.forEach((paper) =>
    rows.push({
      ...paper,
      sectionId: "foundations",
      sectionLabel: "Foundations",
      laneId: "foundations",
      laneLabel: "Foundations",
      threadId: "foundations",
      threadTitle: "Foundational source positions",
      threadClaim: "Core definitional works behind the taxonomy.",
      stance: "Reference",
    }),
  )
  return rows
}

export interface AxisStat {
  id: string
  label: string
  accent: string
  supports: number
  contests: number
}

export function axisStats(): AxisStat[] {
  return sections.map((section) => {
    let supports = 0
    let contests = 0
    section.lanes.forEach((lane) =>
      lane.threads.forEach((thread) => {
        supports += thread.supports.length
        contests += thread.contests.length
      }),
    )
    return { id: section.id, label: section.label, accent: section.accent, supports, contests }
  })
}


