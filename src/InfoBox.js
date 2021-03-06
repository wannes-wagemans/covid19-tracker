import { Card, CardContent, Typography } from "@mui/material"

function InfoBox({ title, cases, total }) {
  return (
    <div>
      <Card className="infoBox">
        <CardContent>
          <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
          <h2 className="infoBox__cases">{cases}</h2>
          <Typography className="infoBox__total">{total} Total</Typography>
        </CardContent>
      </Card>

    </div>
  )
}

export default InfoBox