import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({
  card: {
    borderColor: '#5384AA',
    borderRadius: '20px',
    margin: '1rem auto',
  },
}));

const News = () => {
  const classes = useStyles();

  const news = [
    {
      title: 'Situation report - 96',
      summary:
        'There is currently no evidence that ' +
        'people who have recovered from COVID-19 and have antibodies are protected ' +
        'from a second infection.',
      date: '2020-04-25',
      source: 'World Health Organization',
      link:
        'https://www.who.int/docs/default-source/coronaviruse/situation-reports/20200425-sitrep-96-covid-19.pdf?sfvrsn=a33836bb_2',
    },
    {
      title: 'Newsletter April 25th',
      summary:
        'De la intrarea in vigoare a Ordonantei Militare nr. 2 si pana in prezent, au fost plasate in carantina institutionalizata 2.207 de persoane care nu au respectat perioada de autoizolare',
      date: '2020-04-25',
      source: 'Romanian Ministry of Public Health',
      link:
        'https://www.who.int/docs/default-source/coronaviruse/situation-reports/20200425-sitrep-96-covid-19.pdf?sfvrsn=a33836bb_2',
    },
    {
      title: 'Situation report - 95',
      summary:
        'advice and recommendations for national ' +
        'food safety authorities to optimize food control functions and prioritize critical ' +
        'services that preserve the integrity of food safety systems.',
      date: '2020-04-24',
      source: 'World Health Organization',
      link:
        'https://www.who.int/docs/default-source/coronaviruse/situation-reports/20200425-sitrep-96-covid-19.pdf?sfvrsn=a33836bb_2',
    },
  ];

  return (
    <>
      <Container maxWidth="sm">
        <h1>News</h1>
        <p>
          The latest news from World Health Organization and your guvernment
        </p>

        {news.map(article => (
          <Card key={article.title} className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {article.title}
                </Typography>
                <Typography>{article.source}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {article.summary}...
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a href={article.link} target="_blank" rel="noreferrer noopener">
                <Button size="small" color="primary">
                  Read
                </Button>
              </a>
            </CardActions>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default News;
