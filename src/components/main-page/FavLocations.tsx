import { Button } from "../ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"

type Props = {}

export default function FavLocations({ }: Props) {
  return (
    <Card className="w-full max-w-sm shadow gap-1 border-none">
      <CardHeader><CardTitle>Favorite Locations</CardTitle></CardHeader>
      <CardContent>
        <ul>
          <li className="flex items-center justify-between">
            New york <span>26°</span>
          </li>
          <li className="flex items-center justify-between">
            İstanbul <span>32°</span>
          </li>
          <li className="flex items-center justify-between">
            Moskow <span>0°</span>
          </li>
        </ul>
      </CardContent>
    </Card>

  )
}