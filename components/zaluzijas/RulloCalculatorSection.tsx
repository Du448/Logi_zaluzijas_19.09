"use client"

import RulloCalculator from "./RulloCalculator"

type RulloCalculatorSectionProps = {
  context?: "rullo" | "rullo-kasetu" | "rullo-diena-nakts"
  title?: string
  instanceKey?: string
}

export default function RulloCalculatorSection({ context = "rullo-kasetu", title, instanceKey }: RulloCalculatorSectionProps) {
  return (
    <div className="mt-12">
      <RulloCalculator key={instanceKey ?? context} context={context} title={title} instanceKey={instanceKey} />
    </div>
  )
}
