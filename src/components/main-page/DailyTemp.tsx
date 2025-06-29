"use client"
import { useTempUnit } from "@/hooks/useTempUnit"
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"

type Props = {}

export default function DailyTemp({ }: Props) {
  const { temp_unit } = useTempUnit()

  return (
    <section>
      <Card>
        <CardHeader><CardTitle></CardTitle></CardHeader>
        <CardContent></CardContent>
      </Card>
    </section>
  )
}