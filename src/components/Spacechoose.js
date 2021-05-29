import React, { PureComponent } from "react";
import "../sass/space.scss";
import GridItem from './GridItem'
class Spacechoose extends PureComponent {
  constructor(props) {
    super(props);
    console.log("creating object");
    this.state = {
      fileNames: [
        "Hydrogen",
        "Helium",
        "Lithium",
        "Beryllium",
        "Boron",
        "Carbon",
        "Nitrogen",
        "Oxygen",
        "Fluorine",
        "Neon",
        "Sodium",
        "Magnesium",
        "Aluminum",
        "Silicon",
        "Phosphorus",
        "Sulfur",
        "Chlorine",
        "Argon",
        "Potassium",
        "Calcium",
        "Scandium",
        "Titanium",
        "Vanadium",
        "Chromium",
        "Manganese",
        "Iron",
        "Cobalt",
        "Nickel",
        "Copper",
        "Zinc",
        "Gallium",
        "Germanium",
        "Arsenic",
        "Selenium",
        "Bromine",
        "Krypton",
        "Rubidium",
        "Strontium",
        "Yttrium",
        "Zirconium",
        "Niobium",
        "Molybdenum",
        "Technetium",
        "Ruthenium",
        "Rhodium",
        "Palladium",
        "Silver",
        "Cadmium",
        "Indium",
        "Tin",
        "Antimony",
        "Tellurium",
        "Iodine",
        "Xenon",
        "Cesium",
        "Barium",
        "Lanthanum",
        "Cerium",
        "Praseodymium",
        "Neodymium",
        "Promethium",
        "Samarium",
        "Europium",
        "Gadolinium",
        "Terbium",
        "Dysprosium",
        "Holmium",
        "Erbium",
        "Thulium",
        "Ytterbium",
        "Lutetium",
        "Hafnium",
        "Tantalum",
        "Tungsten",
        "Rhenium",
        "Osmium",
        "Iridium",
        "Platinum",
        "Gold",
        "Mercury",
        "Thallium",
        "Lead",
        "Bismuth",
        "Polonium",
        "Astatine",
        "Radon",
        "Francium",
        "Radium",
        "Actinium",
        "Thorium",
        "Protactinium",
        "Uranium",
        "Neptunium",
        "Plutonium",
        "Americium",
        "Curium",
        "Berkelium",
        "Californium",
        "Einsteinium",
        "Fermium",
        "Mendelevium",
        "Nobelium",
        "Lawrencium",
        "Rutherfordium",
        "Dubnium",
        "Seaborgium",
        "Bohrium",
        "Hassium",
        "Meitnerium",
        "Darmstadtium",
        "Roentgenium",
        "Ununbium",
        "Ununtrium",
        "Ununquadium",
        "Ununpentium",
        "Ununhexium",
        "Ununseptium",
        "Ununoctium",
      ],
    };
  }

  gridItem(name) {
    return (
        <GridItem name = {name} ></GridItem>
    )
  }

  render() {
    return (
      <div className="spaceContainer">
        <div className="spaceHeaderContainer">
          <p className="title">Flight pick up, you.</p>
        </div>
        <div className="spaceRocketContainer">
          <div className="spaceGrid">
            {this.state.fileNames.map((el) => this.gridItem(el))}
          </div>
        </div>
      </div>
    );
  }
}

export default Spacechoose;
