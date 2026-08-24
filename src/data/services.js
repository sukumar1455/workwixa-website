import {
  Rocket,
  Settings,
  Plug,
  GraduationCap,
  Headphones,
  ShieldCheck,
} from 'lucide-react'

export const services = [
  {
    id: 'implementation',
    name: 'Implementation & Onboarding',
    description:
      'We configure WorkWixa to match your org structure, policies, and approval chains — so teams are productive in weeks, not months.',
    deliverables: [
      'Role and department setup',
      'Leave policy and approval routing',
      'Attendance rules for office, remote, and hybrid teams',
      'Administrator and manager training',
    ],
    icon: Rocket,
  },
  {
    id: 'integration',
    name: 'Payroll & Systems Integration',
    description:
      'Connect WorkWixa attendance exports and workflows to your payroll, HRIS, and finance stack with clean, auditable data.',
    deliverables: [
      'Payroll-ready export mapping',
      'HRIS and identity alignment',
      'Exception handling for overtime and leave',
      'Go-live validation with HR and finance',
    ],
    icon: Plug,
  },
  {
    id: 'customization',
    name: 'Configuration & Custom Workflows',
    description:
      'Tailor Kanban boards, KPI scorecards, budget trackers, and dashboards to how your teams actually work.',
    deliverables: [
      'Project and milestone templates',
      'KPI and productivity scorecards',
      'Budget and resource allocation views',
      'Executive dashboard configuration',
    ],
    icon: Settings,
  },
  {
    id: 'training',
    name: 'Enablement & Training',
    description:
      'Hands-on sessions for employees, managers, HR, and executives so adoption sticks beyond the first week.',
    deliverables: [
      'Role-based training sessions',
      'Admin playbooks and SOPs',
      'Manager coaching on live dashboards',
      'Optional train-the-trainer programs',
    ],
    icon: GraduationCap,
  },
  {
    id: 'support',
    name: 'Managed Support',
    description:
      'Ongoing product support, health checks, and guidance as your workforce processes evolve.',
    deliverables: [
      'Email and priority support options',
      'Release guidance and best practices',
      'Periodic configuration reviews',
      'Dedicated account support on enterprise plans',
    ],
    icon: Headphones,
  },
  {
    id: 'governance',
    name: 'Governance & Compliance Advisory',
    description:
      'Help HR and operations set privacy-respecting attendance policies, audit trails, and consistent approval governance.',
    deliverables: [
      'Privacy-boundary configuration',
      'Audit-ready leave and attendance records',
      'Policy alignment workshops',
      'Access and permission reviews',
    ],
    icon: ShieldCheck,
  },
]

export const serviceProcess = [
  {
    step: 1,
    title: 'Discover',
    description: 'We map your current attendance, leave, project, and payroll workflows.',
  },
  {
    step: 2,
    title: 'Configure',
    description: 'WorkWixa is set up around your policies, roles, and reporting needs.',
  },
  {
    step: 3,
    title: 'Launch',
    description: 'Teams go live with training, support, and a clear success checklist.',
  },
  {
    step: 4,
    title: 'Optimize',
    description: 'We refine dashboards, KPIs, and integrations as you scale.',
  },
]
