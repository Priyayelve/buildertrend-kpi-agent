const workflowSteps = [
  {
    title: "Data Collection Agent",
    description:
      "Collects weekly cost and production numbers from Buildertrend and Google Sheets.",
  },
  {
    title: "Data Cleaning Agent",
    description:
      "Standardizes project names, dates, cost codes, and missing fields before updating the tracker.",
  },
  {
    title: "Validation Agent",
    description:
      "Compares numbers from Buildertrend and Google Sheets and flags mismatches for review.",
  },
  {
    title: "KPI Update Agent",
    description:
      "Updates the KPI tracker only after the data passes validation checks.",
  },
  {
    title: "Notification Agent",
    description:
      "Sends a summary showing what was updated, what matched, and what needs human review.",
  },
];

const checks = [
  "Check for missing values",
  "Check for duplicate project names",
  "Check for date mismatches",
  "Check for wrong cost codes",
  "Compare with previous week numbers",
  "Flag large or unusual changes",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-600">
            AI Agent Workflow Proposal
          </p>

          <h1 className="mb-4 text-4xl font-bold">
            Buildertrend KPI Automation Agent
          </h1>

          <p className="mb-6 max-w-3xl text-lg text-slate-700">
            This project explains an AI-agent workflow that helps a construction
            company automate weekly KPI reporting by connecting Buildertrend,
            Google Sheets, and the company KPI tracker.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <InfoCard
              title="Problem"
              text="Project managers spend around 10 hours every Monday manually copying cost and production numbers."
            />
            <InfoCard
              title="Solution"
              text="AI agents collect, clean, validate, update, and summarize KPI data automatically."
            />
            <InfoCard
              title="Result"
              text="Less manual work, fewer mistakes, faster reporting, and better meeting preparation."
            />
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold">Agent-Based Workflow</h2>

          <div className="space-y-4">
            {workflowSteps.map((step, index) => (
              <WorkflowStep
                key={step.title}
                number={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">How I Would Build It</h2>

            <ol className="list-decimal space-y-3 pl-6 text-slate-700">
              <li>Map Buildertrend fields to KPI tracker columns.</li>
              <li>Connect Buildertrend, Google Sheets, and the KPI tracker.</li>
              <li>Schedule the automation to run every Monday morning.</li>
              <li>Clean and standardize the data before updating.</li>
              <li>Validate numbers before they go into the KPI tracker.</li>
              <li>Send a summary to the project manager.</li>
            </ol>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Double-Check Process</h2>

            <ul className="space-y-3">
              {checks.map((check) => (
                <li
                  key={check}
                  className="rounded-xl border border-slate-200 p-3 text-slate-700"
                >
                  ✅ {check}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-blue-600 p-8 text-white shadow-lg">
          <h2 className="mb-3 text-2xl font-bold">Final Outcome</h2>

          <p className="text-lg">
            The project manager no longer needs to spend 10 hours manually
            copying numbers. The AI-agent workflow collects, validates, updates,
            and summarizes KPI data automatically while still keeping a human
            review step for mismatched or unusual numbers.
          </p>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="text-sm text-slate-600">{text}</p>
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
    <div className="flex gap-4 rounded-2xl border border-slate-200 p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
        {number}
      </div>

      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
      </div>
    </div>
  );
}
