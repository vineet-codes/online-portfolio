import  Head  from "next/head";
import Image from "next/image";
import styled from "styled-components"

import {Page} from "./../styles/style-utils"
import {bio, jobs, study, publications } from "./../content/cv/cv"

const Container = styled.div`
  line-height: 1.3;
`;

const WelcomeMessage = styled.h1`
  color: ${props => props.theme.brand.c4};
`;
const Subtitle = styled.h2`
  color: ${props => props.theme.brand.c4};
  font-weight: 200;
`;

const StyledAvatar = styled(Image)`
  border-radius: 50%;
  box-shadow: -2px 2px 6px -1px rgba(0,0,0,0.3);
`;

const CenteredContainer = styled.div`
  text-align: center;
`;

const WorkHistory = styled.div``;

const WhTitle = styled.h2`
  font-weight: 700;
  color: ${props => props.theme.brand.c1};
`;

const Job = styled.div`
  h3 {
    font-weight: 500;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  p {
    margin: 0;
    color: #999;
    padding-top: 0.09em;
    font-size: 0.8em;
  }

  a {
    text-decoration: underline;
    margin: 0;
    paddin-top: 0;
    color: ${props => props.theme.text};
    font-size: 0.9em;
  }
`;

const Publications = styled.div`
  h2 {
    font-weight: 700;
    color: ${props => props.theme.brand.c1}
  }

  div {
    h3 {
      font-weight: 500;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    p {
      margin: 0;
      padding-top: 0.09em;
      font-size: 0.8em;
      color: #999;
    }

    a {
      color: ${props => props.theme.text};
      text-decoration: none;
      font-size: 0.9em;
    }
  }
`;

const Education = styled.div`
  h2 {
    font-weight: 700;
    color: ${props => props.theme.brand.c1}
  }

  div {
    h3 {
      font-weight: 500;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    p {
      margin: 0;
      padding-top: 0.09em;
      font-size: 0.8em;
      color: #999;
    }

    a {
      color: ${props => props.theme.text};
      text-decoration: underline;
      font-size: 0.9em;
    }
  }
`;

const Bio = styled.p`
  line-height: 1.4;
`;

const Index = () => {
  return (
    <Page>
      <Head>
        <title>F.O.R | Vineet</title>
      </Head>
      <Container>
        <CenteredContainer>
          <WelcomeMessage>Welcome to Frame of Reference</WelcomeMessage>
          <Subtitle>👋 Vineet Singh here.</Subtitle>
          <StyledAvatar alt="image of vineet" src="/assets/vineet.jpg" width={460/2} height={460/2}/>
        </CenteredContainer>
        <Bio>
          {bio.bio}
        </Bio>
        <Publications>
          <h2>Publications</h2>
          {publications.map(pub => (
            <div key={pub.id}>
              <h3><a href={pub.URL} target="_blank" rel="noreferrer">{pub.title} &#8594;</a></h3>
              <p>{pub.date}</p>
              {/* <p>{pub.summary.substring(0,100)}.... Read More -> </p> */}
            </div>
          ))}
        </Publications>
        <WorkHistory>
          <WhTitle>Work History</WhTitle>
          {jobs.map(job => (
            <Job key={job.id}>
              <h3>{job.title}</h3>
             <a href={job.URL}>{job.company}</a>
              <p>{job.dates}</p>
            </Job>
          ))}
        </WorkHistory>
        <Education>
          <h2>Education History</h2>
          {study.map(s => (
            <div key={s.id}>
              <h3>{s.title}</h3>
              <a href={s.URL} target="_blank" rel="noreferrer">{s.school}</a>
              <p>{s.dates}</p>
            </div>
          ))}
        </Education>
      </Container>
    </Page>
  )
}

export default Index;