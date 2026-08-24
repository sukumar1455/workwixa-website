function WindowChrome({ title }) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 truncate">{title}</span>
    </div>
  )
}

function DashboardInner() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {['847', '23', '1.2k'].map((value) => (
          <div key={value} className="rounded-xl bg-brand-50 dark:bg-brand-900/30 p-3">
            <div className="h-1.5 w-8 rounded bg-brand-300 dark:bg-brand-600 mb-2" />
            <p className="text-lg font-bold text-gray-900 dark:text-gray-50">{value}</p>
            <div className="h-1.5 w-12 rounded bg-gray-200 dark:bg-gray-700 mt-2" />
          </div>
        ))}
      </div>
      <div className="h-36 rounded-xl bg-gray-50 dark:bg-gray-800/80 p-4 flex items-end gap-1.5">
        {[42, 68, 48, 82, 56, 90, 72, 86, 62, 94, 76, 88].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-gradient-to-t from-brand-700 to-brand-400 dark:from-brand-600 dark:to-brand-400"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  )
}

function KanbanInner() {
  const cols = [
    ['w-full', 'w-3/4', 'w-5/6'],
    ['w-4/5', 'w-full'],
    ['w-2/3', 'w-full', 'w-3/4'],
  ]
  return (
    <div className="grid grid-cols-3 gap-3 h-full min-h-[180px]">
      {cols.map((cards, i) => (
        <div key={i} className="space-y-2">
          <div className="h-2 w-12 rounded bg-brand-300 dark:bg-brand-600" />
          {cards.map((w, j) => (
            <div
              key={j}
              className="rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-2 space-y-1.5"
            >
              <div className={`h-1.5 ${w} rounded bg-gray-200 dark:bg-gray-600`} />
              <div className="h-1.5 w-1/2 rounded bg-gray-100 dark:bg-gray-700" />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function CalendarInner() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: 28 }).map((_, i) => {
          const filled = [3, 8, 9, 14, 21].includes(i)
          return (
            <div
              key={i}
              className={`aspect-square rounded-md ${
                filled
                  ? 'bg-brand-500/80 dark:bg-brand-500/60'
                  : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
              }`}
            />
          )
        })}
      </div>
    </div>
  )
}

function TableInner() {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-4 gap-2 mb-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-2 rounded bg-brand-200 dark:bg-brand-700" />
        ))}
      </div>
      {Array.from({ length: 5 }).map((_, row) => (
        <div key={row} className="grid grid-cols-4 gap-2">
          {Array.from({ length: 4 }).map((_, col) => (
            <div
              key={col}
              className={`h-2.5 rounded ${
                col === 3
                  ? 'bg-accent-200 dark:bg-accent-800/60'
                  : 'bg-gray-100 dark:bg-gray-800'
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

function ChartInner() {
  return (
    <div className="space-y-4">
      <div className="flex items-end gap-3 h-32">
        <svg viewBox="0 0 280 80" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0 60 C 40 55, 50 30, 80 35 S 130 10, 160 22 S 220 50, 280 18"
            fill="none"
            className="stroke-brand-500"
            strokeWidth="3"
          />
          <path
            d="M0 70 C 40 62, 50 48, 80 50 S 130 28, 160 38 S 220 58, 280 32 L 280 80 L 0 80 Z"
            className="fill-brand-500/15"
          />
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-brand-50 dark:bg-brand-900/30 p-3">
          <div className="h-1.5 w-16 rounded bg-brand-300 dark:bg-brand-600 mb-2" />
          <div className="h-4 w-20 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
        <div className="rounded-xl bg-gray-50 dark:bg-gray-800 p-3">
          <div className="h-1.5 w-16 rounded bg-gray-300 dark:bg-gray-600 mb-2" />
          <div className="h-4 w-20 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  )
}

function CheckInInner() {
  return (
    <div className="space-y-3">
      {['w-full', 'w-5/6', 'w-full', 'w-2/3'].map((w, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/80 p-3"
        >
          <div className="w-8 h-8 rounded-full bg-brand-200 dark:bg-brand-700 shrink-0" />
          <div className="flex-1 space-y-1.5 min-w-0">
            <div className={`h-2 ${w} rounded bg-gray-200 dark:bg-gray-600`} />
            <div className="h-1.5 w-1/3 rounded bg-gray-100 dark:bg-gray-700" />
          </div>
          <div className="w-14 h-6 rounded-md bg-accent-100 dark:bg-accent-900/40 shrink-0" />
        </div>
      ))}
    </div>
  )
}

const inners = {
  dashboard: DashboardInner,
  kanban: KanbanInner,
  calendar: CalendarInner,
  table: TableInner,
  chart: ChartInner,
  checkin: CheckInInner,
}

export default function MockBrowser({ variant = 'dashboard', title = 'WorkWixa' }) {
  const Inner = inners[variant] || DashboardInner

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden bg-white dark:bg-gray-900">
      <WindowChrome title={title} />
      <div className="p-5 md:p-6">{Inner && <Inner />}</div>
    </div>
  )
}

export function mockVariantForCategory(category) {
  if (category === 'Attendance') return 'checkin'
  if (category === 'Leave & Approvals') return 'calendar'
  if (category === 'Project & Task Management') return 'kanban'
  if (category === 'Payroll & Finance') return 'table'
  if (category === 'Analytics & Performance') return 'chart'
  return 'dashboard'
}
