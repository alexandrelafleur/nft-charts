import React from "react";
import s from "../styles/stats.module.scss";
import Header from "../components/header/header";
import Selector from "../components/selector/selector";
import Graph from "../components/graph/Graph";
import Footer from "../components/footer/footer";

function Stats() {
  return (
    <div className={s.page}>
      <div className={s.header}>
        <Header />
      </div>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.c1}>
            <Selector />
          </div>
          <div className={s.c2}>
            <Graph />
          </div>
        </div>
      </div>
      <div className={s.container2}></div>
      <div className={s.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Stats;
