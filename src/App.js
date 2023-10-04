import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Items from "./Components/Items";
import Categoryes from "./Components/Categoryes";
import ShowFullItem from "./Components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Крісло сіре",
          img: "chair-gray.jpg",
          desc: "Lorem20 ipsum text new text app react",
          category: "chairs",
          price: "69.99",
        },
        {
          id: 2,
          title: "Стіл",
          img: "table.jpg",
          desc: "Lorem20 ipsum text new text app react",
          category: "tables",
          price: "109.99",
        },
        {
          id: 3,
          title: "Крісло чорне",
          img: "joy-black-19.jpg",
          desc: "Lorem20 ipsum text new text app react",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 4,
          title: "Крісло біле",
          img: "chair-white.jpg",
          desc: "Lorem20 ipsum text new text app react",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 5,
          title: "Диван",
          img: "white-bed.avif",
          desc: "Lorem20 ipsum text new text app react",
          category: "sofa",
          price: "209.99",
        },
        {
          id: 6,
          title: "Ліжко чорне",
          img: "bad-black.avif",
          desc: "Lorem20 ipsum text new text app react",
          category: "sofa",
          price: "449.99",
        },
      ],
      currentItems: [],
      showFullItem: false,
      fullItem: {},
    };
    this.onShowItem = this.onShowItem.bind(this);
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.choseCategory = this.choseCategory.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categoryes choseCategory={this.choseCategory} />
        <Items
          items={this.state.currentItems}
          onAdd={this.addToOrder}
          onShowItem={this.onShowItem}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            item={this.state.fullItem}
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({
      fullItem: item,
    });
    this.setState({
      showFullItem: !this.state.showFullItem,
    });
  }
  choseCategory(category) {
    if (category === "all") {
      this.setState({
        currentItems: this.state.items,
      });
      return;
    }
    console.log(category);
    this.setState({
      currentItems: this.state.items.filter((el) => {
        return el.category === category;
      }),
    });
  }

  deleteOrder(id) {
    this.setState({
      orders: this.state.orders.filter((el) => {
        return el.id !== id;
      }),
    });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}
export default App;
