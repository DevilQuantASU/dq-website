const guide = {
  slug: "landing-an-internship",
  title: "Landing an Internship",
  description: "Internship resources and strategies for ASU students looking to break into tech and finance.",
  sections: [
    {
      id: "writing-a-goated-resume",
      title: "Writing a Goated Resume",
      content: `
        <p>There are a million resources on this out there, so we'll keep it short:</p>
        <ul>
          <li>Ask Claude (still better at writing than ChatGPT) to roast your resume constructively — it'll unlock so much improvement.</li>
          <li>People often stuff their resume with numbers (correct form), but bad ones (wrong content). Make the stats something people care about.</li>
        </ul>

        <div class="guide-callout guide-callout-bad">
          <strong>BAD:</strong> Optimized my hackathon project backend to 99.99% availability and &lt;1ms latency (P99).
          <p>This has absolutely zero impact on the world, and the recruiter can tell no one uses your hackathon project anymore. Probably best to just delete this point (or even the whole project) entirely.</p>
        </div>

        <div class="guide-callout guide-callout-good">
          <strong>BETTER:</strong> Automated 40hrs/week [or $$ equivalent] of manual validation by implementing AI system with XYZ tech stack.
          <p>Good business impact!</p>
        </div>

        <ul>
          <li>Get inspiration from <a href="https://resumes.fyi/explore" target="_blank" rel="noopener noreferrer">resumes.fyi</a>, a crowdsourced collection of resumes and the companies they've gotten interviews at. Just take everything with a grain of salt — no verification means the resumes can be fake, or they could be lying about the companies.</li>
        </ul>
      `,
    },
    {
      id: "cold-applying",
      title: "Cold Applying",
      content: `
        <ul>
          <li>Sadly, for those of us that can't get connections into companies, it's a numbers game.</li>
          <li>The best you can do is keep track of openings — subscribe to listings like <a href="https://github.com/SimplifyJobs/Summer2026-Internships" target="_blank" rel="noopener noreferrer">Simplify's internship list</a> or <a href="https://github.com/vanshb03/Summer2026-Internships" target="_blank" rel="noopener noreferrer">the CSCD server's list</a> — and apply the day they come out.</li>
        </ul>

        <div class="guide-callout guide-callout-warning">
          <strong>Heads up:</strong> The last point is important to be consistent with. If you apply even a day after the posting goes up, you'll have been beaten by thousands of applicants.
        </div>

        <ul>
          <li>Referrals are a hit or miss at larger, more established tech companies (think FAANG-tier). Get them if you can, but don't get your hopes up.</li>
        </ul>
      `,
    },
    {
      id: "surviving-online-assessments",
      title: "Surviving Online Assessments (OAs)",
      content: `
        <p>These are annoying, but companies use them to save wasting their interviewers' time.</p>
        <ul>
          <li>To prep, all you need is <a href="https://www.crackingthecodinginterview.com/" target="_blank" rel="noopener noreferrer">Cracking the Coding Interview</a> and <a href="https://neetcode.io/practice" target="_blank" rel="noopener noreferrer">Neetcode 150</a>.</li>
        </ul>

        <div class="guide-callout guide-callout-info">
          These take a long time to get through, so you don't have to complete all of them to pass a technical. And you don't get sharp by cramming these like a test. This is a long-term process, like going to the gym.
        </div>

        <ul>
          <li>Use Leetcode Premium to view the specific questions asked by a company you're interviewing with.</li>
        </ul>
      `,
    },
    {
      id: "codesignal-icf-gca",
      title: "CodeSignal ICF & GCA",
      content: `
        <p>This is a standardized test used by many tech companies — like the ACT/SAT of online assessments. If you score a 600/600, you can reuse your score for other ICF/GCA companies and skip their OA altogether.</p>

        <div class="guide-callout guide-callout-warning">
          <strong>Cooldown alert:</strong> You're limited to 3 assessment attempts in a 180-day window, with at most 2 attempts in 30 days.
        </div>

        <p>The <strong>GCA</strong> (General Coding Assessment) is just leetcode-style questions. Here's a <a href="https://github.com/Leader-board/OA-and-Interviews/blob/main/Online%20Assessments.md#codesignal" target="_blank" rel="noopener noreferrer">deep dive on the GCA</a> about what to expect, plus practice questions.</p>

        <p>The <strong>ICF</strong> (Industry Coding Framework), unlike the GCA, consists of implementing business logic in an OOP class over 4 increasingly-difficult stages. Ramp and Dropbox are the big ones that use this.</p>

        <div class="guide-callout guide-callout-info">
          <strong>Strategy:</strong> Don't care about optimization. Target solutions clean enough to be extensible in later stages, and get to stage 4/4 ASAP — that will take up the most time.
        </div>
      `,
    },
    {
      id: "giving-behaviorals",
      title: "Giving Behaviorals",
      content: `
        <ul>
          <li>You can use <a href="https://www.glassdoor.com/" target="_blank" rel="noopener noreferrer">Glassdoor</a> to gauge what kinds of things a company will ask.</li>
          <li>In general, hone your STAR story-telling skills, practice with a good partner, and it'll eventually click forever — like learning how to ride a bike.</li>
        </ul>
      `,
    },
    {
      id: "applying",
      title: "Applying",
      content: `
        <p>Below is a list of platforms for internship postings, updated frequently:</p>
        <table>
          <thead>
            <tr>
              <th>Platform</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ASU Employment Search</td>
              <td><a href="https://students.asu.edu/employment/search" target="_blank" rel="noopener noreferrer">students.asu.edu</a></td>
            </tr>
            <tr>
              <td>LinkedIn Jobs</td>
              <td><a href="https://www.linkedin.com/jobs/" target="_blank" rel="noopener noreferrer">linkedin.com/jobs</a></td>
            </tr>
            <tr>
              <td>Handshake</td>
              <td><a href="https://app.joinhandshake.com/job-search" target="_blank" rel="noopener noreferrer">joinhandshake.com</a></td>
            </tr>
            <tr>
              <td>Simplify GitHub List</td>
              <td><a href="https://github.com/SimplifyJobs/Summer2026-Internships" target="_blank" rel="noopener noreferrer">github.com/SimplifyJobs</a></td>
            </tr>
            <tr>
              <td>Jobright</td>
              <td><a href="https://jobright.ai/jobs" target="_blank" rel="noopener noreferrer">jobright.ai</a></td>
            </tr>
            <tr>
              <td>ZipRecruiter</td>
              <td><a href="https://www.ziprecruiter.com/" target="_blank" rel="noopener noreferrer">ziprecruiter.com</a></td>
            </tr>
          </tbody>
        </table>
      `,
    },
  ],
};

export default guide;
