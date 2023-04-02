/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { Component } from "react";
import ViewDetails from "./View";
import "./style.css";
import HomeIcon from "@material-ui/icons/Home";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export default class MainInfo extends Component {
  state = {
    on: false,
  };
  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  render() {
    const {
      estimate_id,
      moving_from,
      moving_to,
      moving_on,
      distance,
      property_size,

      total_items,

      move_date_flexible,
    } = this.props;
    const { rooms, custom } = this.props.items;

    return (
      <section className="page">
        <div className="journey">
          <div>
            <h3>From</h3>
            <p>{moving_from}</p>
          </div>
          <div className="text-center">
            <ArrowForwardIcon />
          </div>
          <div>
            <h3>To</h3>
            <p>{moving_to}</p>
          </div>
          <div className="text-center">
            <h3>Request</h3>
            <p>#{estimate_id}</p>
          </div>
        </div>

        <div className="iconfont">
          <div>
            <HomeIcon />
            <p>{property_size}</p>
          </div>

          <button onClick={this.toggle}>View Move Details</button>
          <button id="btn">Quote Awaiting</button>
        </div>

        {this.state.on && (
          <div>
            <h2>Inventory Details</h2>

            {rooms.map((ele) => (
              <ViewDetails
                key={ele.id}
                roomName={ele.roomName}
                categories={ele.categories}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
