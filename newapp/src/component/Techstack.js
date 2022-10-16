
import "./Techstack.css";
import js from "../../src/image/js.png";
import css from "../../src/image/css.png";
import bootstrap from "../../src/image/bootstrap.png";
import html from "../../src/image/html.png";
import node from "../../src/image/node.png";
import java from "../../src/image/java.png";
import php from "../../src/image/php.png";
import mongodb from "../../src/image/mongodb.png";
import react from "../../src/image/react.png";
import python from "../../src/image/python.png";
import TechStackIconContainer from './TechStackIconContainer/TechStackIconContainer';
function Techstake(){
    const TechstackData = [
        {
            iconName: 'react',
            iconImage: react,
            iconAltProperty:'reactImage',
        },
        {
            iconName: 'Js',
            iconImage: js,
            iconAltProperty:'jsImage',   
        },
        {
            iconName: "CSS",
            iconImage: css,
            iconAltProperty: "cssImage",
        },
        {
            iconName: "Bootstrap",
            iconImage: bootstrap,
            iconAltProperty: "bootstrapImage",
        },
        {
            iconName: "HTML",
            iconImage: html,
            iconAltProperty: "htmlImage",
        },
    ];
    const TechstackData2 =[
        {
            iconName: "Php",
            iconImage: php,
            iconAltProperty: "phpImage",
        },
        {
            iconName: "Node",
            iconImage: node,
            iconAltProperty: "nodeImage",
        },
        {
            iconName: "Java",
            iconImage: java,
            iconAltProperty: "javaImage",
        },
        {
            iconName: "Mongodb",
            iconImage: mongodb,
            iconAltProperty: "mongodbImage",
        },
        {
            iconName: "Python",
            iconImage: python,
            iconAltProperty: "pythonImage",
        }
    ];
    return(
        <div className="techstack_container">
            <p className="techstack_title">Tech Stack</p>
            <div className="techstack_icon_container">
                {TechstackData.map((item,index)=>{
                   return (
                    <TechStackIconContainer
                      image={item.iconImage}
                      altProperty={item.iconAltProperty}
                      name={item.iconName}
                    />
                  );
                })}
              </div>
              <div className="techstack_icon_container">
                {TechstackData2.map((item, index) => {
                  return (
                    <TechStackIconContainer
                      image={item.iconImage}
                      altProperty={item.iconAltProperty}
                      name={item.iconName}
                    />
                  );
                })}
            </div>
        </div>
    )
}

export default Techstake;