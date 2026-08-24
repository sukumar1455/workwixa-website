export const featureCategories = [
  'All',
  'Attendance',
  'Leave & Approvals',
  'Project & Task Management',
  'Payroll & Finance',
  'Analytics & Performance',
]

export const features = [
  {
    id: 'digital-attendance',
    name: 'Digital Attendance & Check-In System',
    category: 'Attendance',
    description:
      'A modern digital check-in system that replaces punch clocks and manual sign-in sheets with frictionless, location-aware attendance tracking designed for in-office, remote, and hybrid workforces.',
    howItWorks:
      'Employees check in with a single click or tap at the start of their workday. The system records timestamps, optional location context, and activity signals while respecting configurable privacy boundaries. Managers view live attendance dashboards filtered by team, department, or location.',
    userBenefits:
      'No more paper timesheets or forgotten clock-ins. Employees get clear visibility into their own attendance history and can request corrections when needed.',
    businessBenefits:
      'Accurate, tamper-resistant attendance records reduce payroll disputes, support compliance audits, and provide leadership with real-time workforce presence data.',
    exampleScenario:
      'A hybrid software team uses digital check-ins so the engineering lead can see who is online and available for standups — without requiring invasive screen monitoring or location tracking for remote staff.',
  },
  {
    id: 'leave-approval',
    name: 'Smart Leave Request & Multi-Level Approval Engine',
    category: 'Leave & Approvals',
    description:
      'An intelligent leave management engine that automates balance calculations, routes requests through configurable approval chains, and keeps every stakeholder informed in real time.',
    howItWorks:
      'Employees submit leave requests through a guided form that shows remaining balances and team calendar conflicts. Requests route automatically to the direct manager, then HR if required. Approvers receive instant notifications and can approve, reject, or delegate with a single action.',
    userBenefits:
      'Transparent leave balances, instant submission confirmation, and visibility into approval status — no more chasing managers over email.',
    businessBenefits:
      'Eliminates manual leave tracking spreadsheets, enforces consistent approval policies, and creates a complete audit trail for compliance and workforce planning.',
    exampleScenario:
      'A developer planning a two-week vacation submits a leave request. The system checks team coverage, routes to the team lead for approval, and automatically updates the shared team calendar once approved.',
  },
  {
    id: 'kanban-tasks',
    name: 'Kanban Task Board & Milestone Tracking',
    category: 'Project & Task Management',
    description:
      'Visual Kanban boards with drag-and-drop task management, milestone tracking, and clear task ownership — keeping projects on track across distributed teams.',
    howItWorks:
      'Project managers create boards with customizable columns (To Do, In Progress, Review, Done). Tasks are assigned to team members with due dates, priorities, and linked milestones. Progress updates flow automatically to team dashboards and executive summaries.',
    userBenefits:
      'Clear visibility into personal task queues, easy status updates, and collaborative boards that replace scattered chat-based task tracking.',
    businessBenefits:
      'Improved project delivery predictability, reduced context-switching between tools, and objective data on team throughput and bottleneck stages.',
    exampleScenario:
      'A marketing team runs a product launch campaign on a Kanban board — creative assets move through design, review, and publish columns while the campaign manager tracks milestone completion against the launch date.',
  },
  {
    id: 'budget-tracker',
    name: 'Project Budget & Resource Allocation Tracker',
    category: 'Project & Task Management',
    description:
      'Real-time project budget monitoring with resource allocation views that help managers catch overruns early and optimize team utilization.',
    howItWorks:
      'Finance and project leads set budgets per project with allocated hours and cost caps. As team members log time and tasks progress, the system calculates burn rate against budget. Alerts trigger when projects approach or exceed thresholds.',
    userBenefits:
      'Team members see how their time contributes to project health. Project managers get actionable alerts before budget issues become executive surprises.',
    businessBenefits:
      'Proactive cost control, improved margin visibility on client projects, and data-driven resource allocation across the portfolio.',
    exampleScenario:
      'An IT consulting firm tracks a client engagement budget in real time. When a senior developer logs extra hours on a scope-creep task, the project manager receives an alert and renegotiates deliverables before the margin erodes.',
  },
  {
    id: 'payroll-export',
    name: 'Automated Payroll-Ready Attendance Export',
    category: 'Payroll & Finance',
    description:
      'One-click generation of payroll-ready attendance reports that integrate with standard payroll workflows — reducing processing time by up to 90%.',
    howItWorks:
      'At the end of each pay cycle, HR administrators trigger an automated export that consolidates check-in data, approved leave, overtime, and exceptions into a formatted file compatible with common payroll systems.',
    userBenefits:
      'Employees benefit from faster, more accurate paychecks with fewer discrepancies requiring manual correction.',
    businessBenefits:
      'Dramatic reduction in payroll processing time, elimination of manual data reconciliation, and auditable records for every pay period.',
    exampleScenario:
      'A retail chain with 200 employees across 15 locations generates a single payroll-ready export at month-end — replacing three days of manual spreadsheet work with a 15-minute review and export process.',
  },
  {
    id: 'productivity-kpi',
    name: 'Real-Time Productivity & KPI Scoring',
    category: 'Analytics & Performance',
    description:
      'Objective, data-driven productivity metrics and KPI scoring that replace subjective performance reviews with transparent, measurable indicators.',
    howItWorks:
      'The platform aggregates attendance consistency, task completion rates, milestone delivery, and configurable KPI targets into individual and team scorecards. Managers use these dashboards for coaching conversations backed by data, not gut feel.',
    userBenefits:
      'Fair, transparent performance metrics that recognize consistent contributors regardless of office visibility or manager proximity.',
    businessBenefits:
      'Reduced bias in performance management, earlier identification of underperforming projects or teams, and alignment between individual output and business objectives.',
    exampleScenario:
      'A team lead reviews quarterly KPI scores and identifies that one project lane has consistently missed milestone targets — triggering a resource reallocation before the client deadline is at risk.',
  },
  {
    id: 'executive-dashboard',
    name: 'Analytics & Executive Dashboards',
    category: 'Analytics & Performance',
    description:
      'Real-time executive dashboards that consolidate workforce attendance, project health, budget status, and KPI trends into a single decision-making view.',
    howItWorks:
      'Executives access role-based dashboards showing organization-wide metrics with drill-down capability by department, project, or time period. Data refreshes automatically from live platform activity.',
    userBenefits:
      'Senior leaders gain strategic visibility without requesting ad-hoc reports from HR or project managers.',
    businessBenefits:
      'Faster strategic decisions, reduced reporting overhead, and a single source of truth for workforce and project intelligence.',
    exampleScenario:
      'The COO opens the executive dashboard Monday morning and immediately sees that two departments have elevated absenteeism and one client project is over budget — enabling proactive intervention before the weekly leadership meeting.',
  },
  {
    id: 'team-calendar',
    name: 'Team Calendar & Coverage Planning',
    category: 'Leave & Approvals',
    description:
      'Shared team calendars that visualize leave, availability, and coverage gaps — ensuring critical roles are staffed before absences begin.',
    howItWorks:
      'Approved leave automatically appears on team calendars with role and coverage indicators. Managers can view upcoming gaps and assign backup responsibilities before vacations start.',
    userBenefits:
      'Employees see when teammates are out and can plan handoffs proactively. No surprise absences during critical deadlines.',
    businessBenefits:
      'Reduced operational disruption from unplanned leave, improved team coordination, and better workforce capacity planning.',
    exampleScenario:
      'Before approving a senior QA engineer\'s leave, the team lead checks the coverage calendar, assigns a backup reviewer for pending releases, and approves with confidence that sprint deliverables are protected.',
  },
]
