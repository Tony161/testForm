import React, { Component } from "react";
import Form from "./forms/addUser/form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import AddDataAction from "./redux/actions";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <button onClick={this.props.showUser}>
            Открыть диалог пользователя
          </button>
        </div>

        {this.props.showUser1 && <Form  data ={{
            show: this.props.showUser1, 
            cbResult : this.props.showUser}}  
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // data: store.data
    showUser1: state.addUser.show
  };
};

function mapDispatchToProps(dispatch) {
  return {
    showUser: () => dispatch({ type: "showUser" })
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// в наш компонент App, с помощью connect(mapStateToProps)
// export default connect(mapStateToProps)(App)
