const workflowSteps = [
  {
    number: 1,
    title: "Scheduled Monday Trigger",
    description:
      "The workflow runs automatically every Monday morning before the project meeting.",
  },
  {
    number: 2,
    title: "Data Collection Agent",
    description:
      "Pulls weekly cost and production numbers from Buildertrend and Google Sheets.",
  },
  {
    number: 3,
    title: "Data Cleaning Agent",
    description:
      "Standardizes project names, dates, cost codes, missing values, and number formats.",
  },
  {
    number: 4,
    title: "Data Mapping Agent",
    description:
      "Maps Buildertrend and spreadsheet fields to the correct KPI tracker columns.",
  },
  {
    number: 5,
    title: "Validation Agent",
    description:
      "Compares numbers, checks for errors, and flags missing or mismatched information.",
  },
  {
    number: 6,
    title: "KPI Update Agent",
    description:
      "Updates the KPI tracker only after the numbers pass validation rules.",
  },
  {
    number: 7,
    title: "Human Review Step",
    description:
      "If mismatches are found, those rows are paused and sent for human review.",
  },
  {
    number: 8,
    title: "Notification Agent",
    description:
      "Sends a summary to the project manager showing updates, issues, and review items.",
  },
];

const validationChecks = [
  "Missing values",
  "Duplicate project names",
  "Wrong reporting week",
  "Invalid cost codes",
  "Buildertrend and Google Sheets mismatches",
  "Large changes from the previous week",
];

const techStack = [
  "Next.js",
  "Google Sheets API",
  "Buildertrend API or scheduled exports",
  "OpenAI / Claude / open-source LLM",
  "Zapier, Make, or n8n",
  "Slack or email notifications",
];

const metrics = [
  {
    label: "Manual Work Reduced",
    value: "10 hrs/week",
  },
  {
    label: "Automation Schedule",
    value: "Every Monday",
  },
  {
    label: "Review Control",
    value: "Human-in-the-loop",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-400">
            AI Agent Workflow Proposal
          </p>

          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Buildertrend KPI Automation Agent
          </h1>

          <p className="max-w-3xl text-lg text-slate-300">
            This project shows an AI-agent workflow that automates weekly KPI
            reporting for a construction builder by connecting Buildertrend,
            Google Sheets, and the company KPI tracker.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <SummaryCard
              title="Problem"
              text="The project manager spends about 10 hours every Monday copying numbers by hand."
            />
            <SummaryCard
              title="Solution"
              text="AI agents collect, clean, validate, update, and summarize the KPI data."
            />
            <SummaryCard
              title="Result"
              text="The KPI tracker is updated faster with fewer mistakes and a review step for mismatches."
            />
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl"
            >
              <p className="text-sm uppercase tracking-wide text-slate-400">
                {metric.label}
              </p>
              <p className="mt-2 text-2xl font-bold text-blue-400">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          <h2 className="mb-6 text-3xl font-bold">Monday Automation Workflow</h2>
          <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
  <h2 className="mb-6 text-3xl font-bold">Automation Flowchart</h2>

  <div className="overflow-x-auto">
    <div className="min-w-[900px]">
      <FlowChart />
    </div>
  </div>
</div>

          <div className="space-y-4">
            {workflowSteps.map((step) => (
              <WorkflowStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
            <h2 className="mb-4 text-3xl font-bold">How It Works</h2>

            <ol className="list-decimal space-y-3 pl-6 text-slate-300">
              <li>The workflow starts every Monday morning on a schedule.</li>
              <li>Buildertrend and Google Sheets data are collected.</li>
              <li>The data is cleaned and standardized.</li>
              <li>Source fields are mapped to KPI tracker fields.</li>
              <li>The numbers are validated before updating.</li>
              <li>Clean rows are written into the KPI tracker.</li>
              <li>Mismatch rows are paused for human review.</li>
              <li>A final summary is sent to the project manager.</li>
            </ol>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
            <h2 className="mb-4 text-3xl font-bold">Double-Check Rules</h2>

            <div className="grid gap-3">
              {validationChecks.map((check) => (
                <div
                  key={check}
                  className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-slate-200"
                >
                  ✅ {check}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          <h2 className="mb-4 text-3xl font-bold">Agent Responsibilities</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <AgentCard
              title="Data Collection Agent"
              text="Gets weekly cost and production data from Buildertrend and Google Sheets."
            />
            <AgentCard
              title="Data Cleaning Agent"
              text="Fixes formatting issues so the data is ready for validation."
            />
            <AgentCard
              title="Validation Agent"
              text="Checks that numbers match and flags errors before the tracker is updated."
            />
            <AgentCard
              title="Notification Agent"
              text="Sends a clear summary to the project manager before the meeting."
            />
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          <h2 className="mb-4 text-3xl font-bold">Suggested Tech Stack</h2>

          <div className="grid gap-3 md:grid-cols-2">
            {techStack.map((tool) => (
              <div
                key={tool}
                className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-slate-200"
              >
                🔧 {tool}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-yellow-500/40 bg-yellow-500/10 p-8 shadow-2xl">
          <h2 className="mb-3 text-3xl font-bold text-yellow-300">
            Important Safety Rule
          </h2>

          <p className="text-lg text-yellow-50">
            The AI agent should not blindly overwrite financial numbers. Clean
            data can be updated automatically, but mismatched or unusual numbers
            should be paused for human review before they enter the KPI tracker.
          </p>
        </div>

        <div className="mt-8 rounded-3xl bg-blue-600 p-8 shadow-2xl">
          <h2 className="mb-3 text-3xl font-bold">Final Outcome</h2>

          <p className="text-lg text-blue-50">
            Instead of spending 10 hours copying numbers by hand, the project
            manager receives an updated KPI tracker and a summary report every
            Monday morning. Clean data is updated automatically, and mismatched
            rows are paused for review before they affect the tracker.
          </p>
        </div>
      </section>
    </main>
  );
}

function SummaryCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <p className="text-sm text-slate-300">{text}</p>
    </div>
  );
}

function WorkflowStep({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-700 bg-slate-800 p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
        {number}
      </div>

      <div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="mt-1 text-sm text-slate-300">{description}</p>
      </div>
    </div>
  );
}

function AgentCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
      <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-slate-300">{text}</p>
    </div>
  );
}
