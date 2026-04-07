const guide = {
  slug: "landing-a-quant-internship",
  title: "Landing a Quant Internship",
  description: "A comprehensive guide on coursework, majors, and signals for breaking into quantitative finance from ASU.",
  sections: [
    {
      id: "table-of-contents",
      title: "Table of Contents",
      content: `
        <ul>
          <li><a href="#the-harsh-reality">The Harsh Reality at ASU</a></li>
          <li><a href="#building-signal">Building Signal</a></li>
          <li><a href="#choosing-your-major">Choosing Your Major</a></li>
          <li><a href="#essential-coursework">Essential Coursework</a></li>
          <li><a href="#advanced-coursework">Advanced Coursework</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#writing-a-good-resume">Writing a Good Resume</a></li>
          <li><a href="#cold-applying">Cold Applying</a></li>
          <li><a href="#the-interview">The Interview Process</a></li>
          <li><a href="#where-to-find-jobs">Where to Find Job Openings</a></li>
        </ul>
      `,
    },
    {
      id: "the-harsh-reality",
      title: "The Harsh Reality at ASU",
      content: `
        <div class="guide-callout guide-callout-warning">
          <strong>Fair Warning:</strong> Getting a quant internship coming from ASU is extraordinarily difficult. Most prop shops and hedge funds recruit heavily from target schools. To get noticed, you need a tremendous amount of "signal" to prove your intelligence and problem-solving capability.
        </div>
      `,
    },
    {
      id: "building-signal",
      title: "Building Signal",
      content: `
        <p>Because you lack the embedded prestige of a target school on your resume, you must explicitly build "signal". Doing well in recognized competitions is the best way to bypass the resume screen:</p>
        <ul>
          <li><strong>ICPC (International Collegiate Programming Contest):</strong> The gold standard for algorithmic problem solving. ASU offers a class to prepare you for this: <strong>CSE 494 (Competitive Programming and Problem Solving)</strong>.</li>
          <li><strong>Putnam Mathematical Competition:</strong> The most prestigious math competition for undergraduates. Doing well on the Putnam is incredibly highly regarded by top quant firms.</li>
        </ul>
        <p>Alternatively, if you're a Computer Science major, a very proven route is to start in <strong>Big Tech</strong>. Working as a software engineer at a top-tier tech company (like FAANG) for 1-2 years provides an incredibly strong signal. Many people successfully pivot from Big Tech directly into a Quant shop.</p>
      `,
    },
    {
      id: "choosing-your-major",
      title: "Choosing Your Major",
      content: `
        <p>Ideally, your major should be highly quantitative. The best majors are:</p>
        <ul>
          <li>Computer Science</li>
          <li>Mathematics</li>
          <li>Financial Engineering</li>
          <li>Econometrics</li>
        </ul>
        <div class="guide-callout guide-callout-good">
          <strong>Pro Tip:</strong> Double majoring (e.g., Math and CS) is a fantastic signal. It shows extreme rigor and capability.
        </div>
      `,
    },
    {
      id: "essential-coursework",
      title: "Essential Coursework (The Basics)",
      content: `
        <p>You need a very strong foundation in probability, statistics, linear algebra, and programming. These classes are practically mandatory if you want to pass a quant interview:</p>
        <ul>
          <li><strong>MAT 267:</strong> Calculus for Engineers III</li>
          <li><strong>MAT 343:</strong> Applied Linear Algebra</li>
          <li><strong>MAT 371:</strong> Advanced Calculus I</li>
          <li><strong>STP 420:</strong> Introductory Applied Statistics</li>
          <li><strong>STP 421:</strong> Probability</li>
          <li><strong>CSE 310:</strong> Data Structures & Algorithms (probably more important for Quant SWE roles)</li>
        </ul>
      `,
    },
    {
      id: "advanced-coursework",
      title: "Advanced Coursework (Stand Out)",
      content: `
        <p>Once you have the basics down, you should tackle advanced topics to deepen your skillset. These are highly recommended to set yourself apart:</p>
        
        <h4>Advanced Statistics (Most Important)</h4>
        <p>Bootstrapping, MCMC, Gibbs sampling — approximating models without closed-form solutions.</p>
        <ul>
          <li><strong>STP 427:</strong> Mathematical Statistics (Fall/Spring)</li>
          <li><strong>Multivariate Statistics</strong> & <strong>Statistical Simulation</strong></li>
        </ul>

        <h4>Statistical Modeling</h4>
        <p>Predict returns, volatility, or anything that gives an information edge.</p>
        <ul>
          <li><strong>STP 551:</strong> Time Series Analysis (Fall only)</li>
          <li><strong>ECN 425:</strong> Econometrics (Fall/Spring)</li>
          <li><strong>STP 429:</strong> Regression Analysis (Spring only)</li>
          <li><strong>CSE 475 / 575:</strong> Machine Learning</li>
        </ul>

        <h4>Applied Probability & Math</h4>
        <ul>
          <li><strong>STP 425:</strong> Stochastic Processes (Fall only)</li>
          <li><strong>APM 505:</strong> Numerical Linear Algebra (Fall only)</li>
          <li><strong>Optimization Theory</strong> (LP, QP, SOCP, MIP)</li>
        </ul>

        <h4>Advanced Math & Electives</h4>
        <ul>
          <li><strong>MAT 472 / 570:</strong> Real Analysis (Fall only)</li>
          <li><strong>Measure Theory</strong></li>
          <li><strong>IEE 412:</strong> Intro to Financial Engineering (Fall only)</li>
          <li><strong>CSE 494:</strong> Competitive Programming (Spring only)</li>
        </ul>
      `,
    },
    {
      id: "projects",
      title: "Projects",
      content: `
        <p>Projects are absolutely essential for proving you can apply theoretical math and CS knowledge to real-world infrastructure. You can read our general <strong>Getting Started with Projects</strong> guide for more details, but here are the key takeaways for quant:</p>
        <ul>
          <li><strong>Demonstrate Depth:</strong> Build data-heavy engineering or statistical modeling projects. It's better to understand a medium-complexity project completely inside-out than to blindly copy a highly complex ML model.</li>
          <li><strong>Get Started Quickly:</strong> Check out the specific project walk-throughs listed under the <strong>Projects</strong> section of the DevilQuant guides (like the Python Stock Data Fetcher or the Simple Moving Average Bot) to get your hands dirty writing code immediately.</li>
        </ul>
      `,
    },
    {
      id: "writing-a-good-resume",
      title: "Writing a Good Resume",
      content: `
        <p>Your resume needs to be incredibly strong to bypass the screen. Quant firms are looking for dense, high-signal information. A fantastic starting point is <a href="https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs" target="_blank" rel="noopener noreferrer">Jake's Resume on Overleaf</a>, which is highly recommended for its clean, ATS-friendly structure.</p>
        <ul>
          <li><strong>Optimize for Signal:</strong> Focus on points that represent genuine skill and intellectual rigor, rather than something that just "exists in a chasm" like a random hackathon project no one uses.</li>
          <li><strong>Get Criticized:</strong> Get people to look at your resume and criticize it regularly. If they think a bullet point is weak or unclear, a recruiter probably will too.</li>
          <li><strong>Inspiration:</strong> You can look at other successful quant resumes for structural inspiration, but don't feel entirely constrained to one format. Just ensure it highlights your coursework, competitions, and technical depth perfectly.</li>
        </ul>
      `,
    },
    {
      id: "cold-applying",
      title: "Cold Applying (It's a Numbers Game)",
      content: `
        <p>If you don't apply, you have exactly a 0% chance of getting the job. You have to get over the mental barrier of sending your resume out into the void.</p>
        <ul>
          <li><strong>The Reality:</strong> The most competitive candidates in CS and Quant are applying to <em>every</em> major firm, every mid-size firm, and everything in between.</li>
          <li><strong>Volume Matters:</strong> To even stand a chance to compete, it is simply a numbers game. You need to get your foot in the door as many times as possible.</li>
        </ul>
      `,
    },
    {
      id: "the-interview",
      title: "The Interview Process",
      content: `
        <p>Quant interviews are notoriously difficult and heavily technical.</p>
        <div class="guide-callout guide-callout-warning">
          <strong>The Difficult Reality:</strong> Because interviewers expect you to solve complex math and logic problems almost instantly on the spot, many successful applicants end up having to memorize a vast number of questions and standard patterns beforehand.
        </div>
        <p>Depending on the exact role you are targeting, here is what you should expect:</p>
        <ul>
          <li><strong>Quant Trading & Research:</strong> Expect your mathematical aptitude and probability skills to be heavily tested. Expected value games and complex probability problems are standard here.</li>
          <li><strong>Resume Teardowns:</strong> These are decently common. If you list a project, paper, or technical detail, be prepared for your interviewer to grill you completely on every aspect of it.</li>
          <li><strong>Quant SWE Roles:</strong> For software engineering roles at quant firms, expect intense programming tests featuring Medium-to-Hard LeetCode style algorithmic problems.</li>
        </ul>
        
        <h4>Interview Preparation Resources</h4>
        <table>
          <thead>
            <tr>
              <th>Resource</th>
              <th>Best For</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Quantable</strong></td>
              <td>Quant Trading / Research</td>
              <td>Excellent for practicing probability, expected value (EV) games, and brainteasers heavily tested in trading interviews.</td>
            </tr>
            <tr>
              <td><strong>TraderMath</strong></td>
              <td>Quant Trading</td>
              <td>Focuses on rapid mental math and arithmetic training. Essential if you have to pass computational speed tests (e.g. Optiver, Flow Traders).</td>
            </tr>
            <tr>
              <td><strong>QuantQuestions</strong></td>
              <td>Quant Research / Trading</td>
              <td>A massive bank of real interview questions covering probability, statistics, and logical puzzles.</td>
            </tr>
            <tr>
              <td><strong>OpenQuant</strong></td>
              <td>General Quant</td>
              <td>Great community resources, job data, and practice questions across the core quant spectrum.</td>
            </tr>
            <tr>
              <td><strong>LeetCode</strong></td>
              <td>Quant SWE</td>
              <td>The gold standard for software engineering roles. Focus strictly on mastering Medium and Hard algorithmic problems to pass the coding assessments.</td>
            </tr>
          </tbody>
        </table>
      `,
    },
    {
      id: "where-to-find-jobs",
      title: "Where to Find Job Openings",
      content: `
        <p>You can use the general internship guide for inspiration, but here are the highly recommended spots for quant specifically:</p>
        <ul>
          <li><strong>Simplify GitHub List:</strong> The definitive list for internships. Check the <a href="https://github.com/SimplifyJobs/Summer2026-Internships" target="_blank" rel="noopener noreferrer">Simplify GitHub</a> repository constantly.</li>
          <li><strong>LinkedIn Jobs:</strong> Setup alerts on <a href="https://www.linkedin.com/jobs/" target="_blank" rel="noopener noreferrer">LinkedIn</a> for specific quant firm names.</li>
          <li><strong>DevilQuant Discord Server:</strong> Our community actively tracks applications! Join the <a href="https://discord.gg/devilquant" target="_blank" rel="noopener noreferrer">DevilQuant Discord</a> and once you become a member, you can go to the <code>#job-openings</code> channel to get live updates directly from the Simplify jobs list.</li>
        </ul>
      `,
    }
  ],
};

export default guide;
