/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import styled from "styled-components";

const HeaderImage = styled.img`
  height: 25rem;
  width: 100%;
  object-fit: cover;
`;

const Lift = styled.div`
  background: #8980f1;
  padding: 2rem 20%;
  color: #f8f7fe;
  font-weight: 600;
  text-align: center;
  margin-top: -0.5rem;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding: 2rem;
  button {
    text-aling: center;
  }
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/mdv6ewv.css" />
        <link rel="stylesheet" href="https://use.typekit.net/mdv6ewv.css" />
      </Head>

      <Layout>
        <>
          <HeaderImage
            src={require("../public/images/kansikuva.jpg")}
            alt="kansikuva"
          />

          <Lift>
            <h2>LUUPIN JUHLATILA - BEST THING EVER</h2>
            <p>
              Varaa tästä. Super hyvät diilit! Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec ornare libero vitae mauris
              ornare, et suscipit neque mattis. Donec mollis sapien in neque
              sodales congue. Donec dictum id lectus ac malesuada.
            </p>
            <button>Tutustu tiloihin</button>
          </Lift>
          <InfoContainer>
            <div>
              <p>
                Järjestä juhlat meillä täällä on kaikki mitä tarvitset! Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare
                libero vitae mauris ornare, et suscipit neque mattis. Donec
                mollis sapien in neque sodales congue. Donec dictum id lectus ac
                malesuada.
              </p>
              <button>Varaa tila</button>
            </div>
            <p>Facebook contentit</p>
          </InfoContainer>
        </>
      </Layout>
    </div>
  );
};

export default Home;
