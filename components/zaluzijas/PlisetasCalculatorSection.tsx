"use client"

import PlisetasCalculator from "./PlisetasCalculator"

type PlisetasCalculatorSectionProps = {
  title?: string
}

export default function PlisetasCalculatorSection({ title }: PlisetasCalculatorSectionProps) {
  return (
    <div className="mt-12">
      <PlisetasCalculator key="plisetas" title={title} />
    </div>
  )
}
