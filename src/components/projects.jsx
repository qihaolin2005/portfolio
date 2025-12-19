import Card from "./card/card.jsx"
import "./projects.css"


function Projects() {

    const tensoract = {src:"/tensoract.png", alt:"Tensoract"};
    const tensoractTitle = "Tensoract";
    const tensoractDescription = "Tensoract is a scalable AI data labeling and training " +
      "platform built to accelerate supervised learning for ML and LLM systems. By unifying annotation," +
      " training, and evaluation workflows, it significantly reduces model iteration time and improves " +
      "training efficiency in production environments.";
    const tensoractSubImages =
      [{src:"/typescript.svg", alt:"typescript"}, {src:"/react.png", alt:"react"}, {src:"/docker.png", alt:"docker"}];
    const tensoractLink = "https://www.tensoract.com/";


    const sheetwise = {src:"/sheetwise.png", alt:"Sheetwise"};
    const sheetwiseTitle = "Sheetwise";
    const sheetwiseDescripton = "An AI-powered tool that leverages LLMs to enhance Google Sheets, Docs, Excel, and Word." +
      " It automates content creation, generates formulas and insights, and can even produce images," +
      " turning standard documents and spreadsheets into intelligent, interactive tools.";
    const sheetwiseSubImages = [{src:"/javascript.png", alt:"javascript"}, {src:"/stripe.png", alt:"stripe"}, {src:"/firebase.png", alt:"firebase"},
      {src:"/azure.svg", alt:"Microsoft Azure"}];
  const sheetwiseLink = "https://www.sheetwise.ai/";

    const chartapps = {src:"/chartapps.png", alt:"Chartapps"};
    const chartappsTitle = "ChartApps";
    const chartappsDescription = "A no-code platform that turns Google Sheets data into interactive web dashboards and custom apps.\n" +
      "It provides real-time syncing, rich visualizations, and secure collaboration.\n" +
      "Users can build powerful, data-driven tools without writing a single line of code."
    const chartappsSubImages = [{src:"/javascript.png", alt:"javascript"}, {src:"/mongodb.svg", alt:"mongo"}, {src:"/aws.png", alt:"Amazon Web Services"},]
    const chartappsLink = "https://chartapps.com/"

    return (

        <div style={{marginBottom: "20px"}}>
            <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Projects</h1>

            <p style={{ fontSize: "1.2rem", color: "white", maxWidth: "600px", margin: "0 auto" }}>
                These are some of the projects I've worked on.
            </p>
          <div className={"projects-section"}>
            <Card image={tensoract} title={tensoractTitle} description={tensoractDescription} subImages={tensoractSubImages} link={tensoractLink}/>
            <Card image={sheetwise} title={sheetwiseTitle} description={sheetwiseDescripton} subImages={sheetwiseSubImages} link={sheetwiseLink}/>
            <Card image={chartapps} title={chartappsTitle} description={chartappsDescription} subImages={chartappsSubImages} link={chartappsLink}/>
          </div>
        </div>
    );
}

export default Projects;
