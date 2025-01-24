import { dev } from "$app/environment";


export const siteTitle = "";
export const siteDescription = "";
export const url = dev ? "https:localhost:5173" : "https:/joseph.flinnlab.com"

export const siteNav = [
  {"name": "home", "path": "/"},
  {"name": "posts", "path": "/posts"},
  {"name": "drip", "path": "/drip"},
  {"name": "about", "path": "/about"}
];


export const introCopy = "I'm Joseph Flinn, an engineering manager focused on empowering teams to reach their highest potential through curiosity and continuous improvement. I create inclusive, psychologically-safe environments where every team member's voice matters. My systems thinking approach to continuous improvement reinforces a safe environment while driving technical excellence with a balance between the short and long term goals. I have built an expertise in improving Engineering Operations across the SDLC: from Design to final value delivery to end users.";
export const popularPosts = [
  { "title": "[Manager Retro] Accountability in Hierarchical Systems", "slug": "retro-accountability-hierarchical-systems"},
  { "title": "Learning Through Writing", "slug": "learning-through-writing"},
  { "title": "Always Question Your Assumptions", "slug": "st-question-your-assumptions"},
  { "title": "Graph Theory of Organizational Communication", "slug": "graph-theory-of-org-comms"}
]

export const aboutCopy = "A thirst for learning is at the core of who I am. I want to know how it works. I want to understand how different people think. I want to appreciate the complexities of the social systems in which I am a member. To have a feeling of continued purpose, I need to be continually learning. Everyone that I meet has something to teach me, and I bring this curiosity into every team that I am on.\n\nContinuous improvement is a natural outcome of continuous learning. Systems thinking has heavily impacted both how I perceive learning and how I approach continuous improvement on teams. One of the core tenants of systems thinking is that failures are often the fault of a flawed system rather than a flawed subsystem (_Thinking in Systems_). In other words, failures often attributed to an individual are more likely to be a system failure rather than a failure of that individual. The best way to improve a system or a team is to blamelessly search for the systemic failures and work to make sure they do not happen again.\n\nI build blameless environments where systemic failures can be found and fixed by cultivating psychological safety. Psychological safety can only be built on the trust that the leader is looking out for their entire team and is putting the team's welfare and success above their own (_Leaders Eat Last_). My team's success in the organization is more important to me than my own success. I find my personal success in watching my team grow and deliver extraordinary results rather than being seen as the one delivering the value.\n\nGreat leaders are the ones that give all credit to their teams when they win and accept all responsibility when the team fails (_Extreme Ownership_). They amplify voices that may not otherwise be heard over pushing their own ideas and agendas. The behavior of great leaders reinforce the trust that they have in their teams and that their teams have in them. Striving to be a great leader is the hardest thing that I have done, but it is the most rewarding. It is not glamorous work, but it is fulfilling and it is needed now more than ever."
export const skillsData = {
  "Leadership": [
    "Curiosity-first",
    "Systems Thinking",
    "Psychological safety",
    "Strategic Thinking",
    "Situational Leadership"
  ],
  "Management": [
    "People-first",
    "Organizational alignment",
    "Manageing for high performance",
    "Effective feedback with PSBI",
    "Continuous improvement",
    "Lean, Scrum, SAFe"
  ],
  "Technical": [ 
    "CI/CD",
    "Kubernetes",
    "Python",
    "Javascript",
    "Linux",
    "Terraform",
    "Azure",
    "AWS"
  ]
}


export const influentialBooks =  [
  { "title": "Leaders Eat Last", "author": "Simon Sinek", "link": "https://simonsinek.com/books/leaders-eat-last/" },
  { "title": "Thinking in Systems", "author": "Donella H. Meadows", "link": "https://systemdynamics.org/shop/uncategorized/thinking-in-systems-a-primer/"},
  { "title": "Extreme Ownership", "author": "Jocko Willink, Leif Babin", "link": "https://www.amazon.com/Extreme-Ownership-U-S-Navy-SEALs/dp/1250067057"},
  { "title": "Dare to Lead", "author": "Brené Brown", "link": "https://brenebrown.com/book/dare-to-lead/"},
  { "title": "Accelerate", "author": "Nichole Forsgren, Jez Humble, Gene Kim", "link": "https://itrevolution.com/product/accelerate/"}, 
  { "title": "Never Split the Difference", "author": "Chris Voss", "link": "https://www.blackswanltd.com/never-split-the-difference"},
  { "title": "Supercommunicators", "author": "Charles Duhigg", "link": "https://www.charlesduhigg.com/supercommunicators"},
  { "title": "Winning at New Products", "author": "Robert G. Cooper", "link": "https://www.hachettebookgroup.com/titles/robert-g-cooper/winning-at-new-products/9780465093335/"}
]
