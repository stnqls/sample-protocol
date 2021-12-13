import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import "../styles/pages/MatrixGraph.scss";

const data = [
  {
    Sale: 28,
    SaleColor: "hsl(265, 70%, 50%)",
    Team: 6,
    TeamColor: "hsl(267, 70%, 50%)",
    Advisor: 4,
    AdvisorColor: "hsl(258, 70%, 50%)",
    Marketing: 3,
    MarketingColor: "hsl(109, 70%, 50%)",
    LOAfoundation: 23,
    LOAfoundationColor: "hsl(24, 70%, 50%)",
    Reserve: 21,
    ReserveColor: "hsl(349, 70%, 50%)",
    Strategicpartners: 15,
    StrategicpartnersColor: "hsl(265, 70%, 50%)",
  },
];

const MyResponsiveBar = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={[
      "Sale",
      "Team",
      "Advisor",
      "Marketing",
      "LOAfoundation",
      "Reserve",
      "Strategicpartners",
    ]}
    // indexBy="country"
    // margin={{ top: 10, right: 60, bottom: 10, left: 60 }}
    padding={0.4}
    layout="horizontal"
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "pastel1" }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#38bcb2",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    borderRadius={19}
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={null}
    axisLeft={null}
    labelSkipWidth={0}
    labelSkipHeight={0}
    labelTextColor="black"
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 10,
        translateY: 0,
        itemsSpacing: 10,
        itemWidth: 100,
        itemHeight: 10,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    // role="application"
    // ariaLabel="Nivo bar chart demo"
    barAriaLabel={function (e) {
      return e.id + ": " + e.indexValue;
    }}
  />
);

function MatrixGraph() {
  return (
    <div className="matrixgraph">
      <MyResponsiveBar data={data} />
    </div>
  );
}

export default MatrixGraph;
