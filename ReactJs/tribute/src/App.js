import AchivmentTimeline from "./components/AchivmentTimeline";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header data="MS DHONI" />
      <Bio
        h4="MS Dhoni Birth"
        p1="Mahendra Singh Dhoni is one of the most well-known cricketers in the
            world. Successful cricketers in Indian history. He holds several
            records, including most runs scored in International Cricket Council
            (ICC) tournaments, most wickets taken by captains in Tests, and the
            fastest half-century in ODIs. He is also the first captain in
            history to win every game."
        p2="Mahendra Singh Dhoni is one of the most well-known cricketers in the
            world. Successful cricketers in Indian history. He holds several
            records, including most runs scored in International Cricket Council
            (ICC) tournaments, most wickets taken by captains in Tests, and the
            fastest half-century in ODIs. He is also the first captain in
            history to win every game."
      />
      <AchivmentTimeline h2="Timeline" p="Born in Ranchi, Dhoni made his first class debut for Bihar in 1999. He made his debut for the Indian cricket team on 23 December 2004 in an ODI against Bangladesh and played his first"/>
      <Footer data=" &copy; 2024 My Tribute Page. All rights reserved."/>
    </>
  );
}

export default App;
