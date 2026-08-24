export const useCases = [
  {
    id: 'software-it',
    industry: 'Software & IT Teams',
    painPoint:
      'Distributed engineering teams struggle with visibility into who is available, vacation coverage gaps, and sprint task ownership across time zones.',
    solution:
      'WorkWixa provides digital check-ins, shared team calendars, and Kanban sprint boards — giving engineering leads real-time visibility without invasive monitoring.',
    exampleScenario:
      'A developer plans a two-week vacation. They submit leave through the approval engine, the team calendar shows the coverage gap, and the Kanban board highlights tasks that need reassignment before departure.',
    href: '/case-studies',
  },
  {
    id: 'marketing-creative',
    industry: 'Marketing & Creative Teams',
    painPoint:
      'Campaign workflows span multiple stakeholders with assets moving through design, copy, review, and publish — often tracked in disconnected tools and chat threads.',
    solution:
      'Kanban campaign boards with milestone tracking keep every asset and deadline visible. Managers monitor progress and team capacity from a single dashboard.',
    exampleScenario:
      'A product launch campaign runs on a Kanban board with columns for Brief, Design, Review, and Publish. The campaign manager tracks milestone completion and reallocates a designer when the launch date moves up.',
    href: '/case-studies',
  },
  {
    id: 'consulting',
    industry: 'Professional Services & Consulting',
    painPoint:
      'Client project budgets are tracked in spreadsheets with no real-time burn rate visibility — overruns are discovered only at invoice time.',
    solution:
      'Project budget and resource allocation tracking gives project managers live burn-rate alerts and margin visibility across every client engagement.',
    exampleScenario:
      'An IT consulting project manager receives a budget alert when a senior developer logs extra hours on scope-creep work. They renegotiate deliverables with the client before the engagement margin disappears.',
    href: '/case-studies',
  },
  {
    id: 'retail',
    industry: 'Retail & Distributed Workforces',
    painPoint:
      'Multi-location retail operations rely on manual attendance logs and paper timesheets that create payroll errors and compliance risks across dozens of sites.',
    solution:
      'Digital check-ins at every location plus automated payroll-ready exports eliminate manual reconciliation and cut payroll processing time by up to 90%.',
    exampleScenario:
      'A retail chain with 200 employees across 15 locations generates a single payroll-ready export at month-end — replacing three days of manual spreadsheet work with a 15-minute review.',
    href: '/case-studies',
  },
]

export const userRoles = [
  {
    id: 'employee',
    role: 'Employees',
    description:
      'Check in digitally, submit leave requests, track personal tasks on Kanban boards, and view their own attendance history and KPI scores.',
    permissions: 'Self-service portal with personal dashboards and task management.',
  },
  {
    id: 'manager',
    role: 'Managers & Team Leads',
    description:
      'Approve leave, assign tasks, monitor team calendars, review project progress, and access team-level productivity and attendance reports.',
    permissions: 'Team management views with approval workflows and performance dashboards.',
  },
  {
    id: 'hr-admin',
    role: 'HR Administrators',
    description:
      'Manage leave policies, generate payroll-ready exports, maintain attendance records, and configure approval chains and organizational settings.',
    permissions: 'Full HR administration with compliance reporting and export tools.',
  },
  {
    id: 'executive',
    role: 'Executives',
    description:
      'Access real-time executive dashboards showing organization-wide attendance trends, project health, budget status, and strategic KPI metrics.',
    permissions: 'Read-only executive intelligence with drill-down across departments.',
  },
]
