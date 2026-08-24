import {
  CalendarCheck,
  Kanban,
  Wallet,
  FileSpreadsheet,
  TrendingUp,
  Fingerprint,
  LayoutDashboard,
} from 'lucide-react'

export const modules = [
  {
    id: 'digital-attendance',
    name: 'Digital Attendance & Check-In',
    description: 'Frictionless digital check-ins with privacy-respecting activity monitoring for hybrid teams.',
    icon: Fingerprint,
    href: '/features',
  },
  {
    id: 'leave-approval',
    name: 'Smart Leave Request & Approval Engine',
    description: 'Multi-level leave workflows with automated balance tracking and instant notifications.',
    icon: CalendarCheck,
    href: '/features',
  },
  {
    id: 'kanban-tasks',
    name: 'Kanban Task Board & Milestone Tracking',
    description: 'Visual project boards with task ownership, milestones, and real-time progress updates.',
    icon: Kanban,
    href: '/features',
  },
  {
    id: 'budget-tracker',
    name: 'Project Budget & Resource Allocation Tracker',
    description: 'Monitor project spend, resource allocation, and budget overruns before they escalate.',
    icon: Wallet,
    href: '/features',
  },
  {
    id: 'payroll-export',
    name: 'Automated Payroll-Ready Attendance Export',
    description: 'Generate accurate, payroll-ready attendance exports that reduce processing time by up to 90%.',
    icon: FileSpreadsheet,
    href: '/features',
  },
  {
    id: 'productivity-kpi',
    name: 'Real-Time Productivity & KPI Scoring',
    description: 'Objective performance metrics and KPI dashboards that replace subjective tracking.',
    icon: TrendingUp,
    href: '/features',
  },
  {
    id: 'executive-dashboard',
    name: 'Analytics & Executive Dashboards',
    description: 'Real-time executive intelligence across attendance, projects, and workforce performance.',
    icon: LayoutDashboard,
    href: '/features',
  },
]

export const pillars = [
  {
    id: 'attendance',
    title: 'Attendance & Visibility',
    description:
      'Frictionless digital check-ins combined with privacy-respecting activity monitoring — giving leaders visibility without micromanagement.',
    icon: Fingerprint,
  },
  {
    id: 'administration',
    title: 'Administration',
    description:
      'Automated leave balances, attendance logs, and timesheets that eliminate manual HR busywork and reduce errors.',
    icon: CalendarCheck,
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description:
      'Centralized projects, milestones, and task ownership so every team member knows what to do and when.',
    icon: Kanban,
  },
]

export const challenges = [
  {
    id: 'manual-admin',
    title: 'Heavy Manual Administrative Work',
    traditional: 'HR teams manually track attendance in spreadsheets, reconcile leave balances by hand, and chase employees for timesheets.',
    impact: 'Hours lost to data entry, payroll delays, and costly human errors that compound every pay cycle.',
  },
  {
    id: 'communication-gaps',
    title: 'Communication & Workflow Gaps',
    traditional: 'Leave requests buried in email threads, task updates scattered across chat apps, and no single source of truth.',
    impact: 'Missed deadlines, duplicated work, and managers flying blind on team capacity and project status.',
  },
  {
    id: 'transparency',
    title: 'Lack of Operational Transparency',
    traditional: 'Leadership relies on weekly status reports and anecdotal updates with no real-time view of workforce activity.',
    impact: 'Slow decision-making, reactive problem-solving, and inability to identify bottlenecks before they become crises.',
  },
  {
    id: 'approvals',
    title: 'Time-Consuming Approval Processes',
    traditional: 'Multi-step leave and expense approvals routed through email chains with no audit trail or escalation rules.',
    impact: 'Frustrated employees, delayed time-off, and compliance risks from untracked approval decisions.',
  },
  {
    id: 'performance',
    title: 'Subjective Performance Tracking',
    traditional: 'Managers evaluate performance based on gut feel, visibility bias, and inconsistent criteria across teams.',
    impact: 'Unfair reviews, disengaged top performers, and no data-driven basis for coaching or promotion decisions.',
  },
]

export const roiStats = [
  {
    id: 'payroll-time',
    value: '90%',
    label: 'Reduction in payroll processing time',
    description: 'Automated attendance exports eliminate manual reconciliation and data entry.',
  },
  {
    id: 'timesheet-errors',
    value: 'Zero',
    label: 'Manual timesheet errors',
    description: 'Digital check-ins and automated logs replace error-prone spreadsheet workflows.',
  },
  {
    id: 'visibility',
    value: 'Real-time',
    label: 'Visibility across hybrid teams',
    description: 'Unified dashboards show attendance, tasks, and KPIs for in-office and remote staff alike.',
  },
  {
    id: 'leave-approvals',
    value: 'Faster',
    label: 'Leave approval cycles',
    description: 'Multi-level routing with instant notifications cuts approval wait times dramatically.',
  },
]
