"use client"

import RulloCalculator from "./RulloCalculator"

type RulloCalculatorSectionProps = {
  context?: "rullo" | "rullo-kasetu"
}

export default function RulloCalculatorSection({ context = "rullo-kasetu" }: RulloCalculatorSectionProps) {
  return (
    <div className="mt-12">
      <RulloCalculator context={context} />
    </div>
  )
}
