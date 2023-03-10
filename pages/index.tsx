import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Container } from '@mui/system'
import { Grid, Typography } from '@mui/material'


export default function Home() {
  const [meals, setMeals] = useState<Array<string>>([]);
  useEffect(() => {
    window.fetch('/api/meal?pageSize=3', {
      method: 'GET',
    })
    .then((res) => res.json())
    .then((m) => {
      setMeals(m)
    } )

  }, [])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth='lg' sx={{
        height: '100%'
      }}>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          width='100%'
          height='100%'
        >
          <Grid item container justifyContent='center'>

            <Grid item xs={12} textAlign='center'>
              <Typography
                variant='h1'
                fontSize={32}
              >Recommendation of the week</Typography>
            </Grid>
            { meals.map( (m, i) => { 
              return <Grid item 
                key={i}
                p={4}
                xs={12}
                md='auto'
                textAlign='center'
              >
                <Typography>
                  {m}
                </Typography>
              </Grid>
              })}
          </Grid>
          </Grid>
      </Container>
    </>
  )
}
