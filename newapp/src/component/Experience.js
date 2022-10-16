import React from "react";
import "./Experience.css";
import html from "../../src/image/html.png";
import react from "../../src/image/react.png";
import js from "../../src/image/js.png";
import firebase from "../../src/image/node.png";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

export default function Experience() {
  const statements = [
    "1. I am a pretty great SDE dnkjasndkjasnd dnjsndaskjnd dansdjksank asndjkkjdnkas djandjkas",
    "2. I have created various features like akjndkasj dakjsndkjas dakjsndkas  dakjsnk dajndkajsn ",
    "3. asmnd kasnkjcnsajnckjsank ncjaksnk caksnk cajksnk jkasnkjcas nkcaskj cakjsnjkc cnjasknk ",
    "4. asmnd kasnkjcnsajnckjsank ncjaksnk caksnk cajksnk jkasnkjcas nkcaskj cakjsnjkc cnjasknk",
    "5. lkkvsijo asjnas dnasn ndaksljn dank dnajnkda dasnjkndas ndjkasn dakjndask kjasdn njaksndkj kajsn",
  ];

  const iconImages = [react, js, html, firebase];

  return (
    <div className="experience_container">
      <p className="experience_title">Experience</p>
      <div className="experience_cards_container">
        <ExperienceCard
          companyName="Lakshmi Chit Fund Pvt Ltd"
          designation="SDE"
          statements={statements}
          iconImages={iconImages}
        />
        <ExperienceCard
          companyName="Lakshmi Chit Fund Pvt Ltd"
          designation="SDE"
          statements={statements}
          iconImages={iconImages}
        />
        <ExperienceCard
          companyName="Lakshmi Chit Fund Pvt Ltd"
          designation="SDE"
          statements={statements}
          iconImages={iconImages}
        />
      </div>
    </div>
  );
}