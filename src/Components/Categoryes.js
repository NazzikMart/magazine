import React, { Component } from "react";

export class Categoryes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catigoryes: [
        {
          key: "all",
          name: "Все",
        },
        {
          key: "chairs",
          name: "Стільці",
        },
        {
          key: "tables",
          name: "Столи",
        },
        {
          key: "sofa",
          name: "Дивани",
        },
      ],
    };
  }

  render() {
    return (
      <div className="categories">
        {this.state.catigoryes.map((el) => {
          return (
            <div
              key={el.key}
              onClick={() => {
                return this.props.choseCategory(el.key);
              }}
            >
              {el.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Categoryes;
