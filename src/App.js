import React, { Component } from "react";
import FormUser from "./forms/addUser/form";
import FormProfile from "./forms/addProfile/form";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

//import postDataProfileAction from "./forms/addProfile/actions/add";
//import postDataProfile from "./reducer";

class App extends Component {
  render() {
    console.log("this.props", this.props.showProfile);
    return (
      <div>
        <div>
          <button onClick={this.props.showUser}>Открыть пользователя</button>
          <button onClick={this.props.showProfile}>Открыть профиль</button>
        </div>

        {this.props.showUser1 && (
          <FormUser
            data={{
              show: this.props.showUser1,
              cbResult: this.props.showUser,
              postData: this.props.postData
            }}
          />
        )}
        {this.props.showProfile1 && (
          <FormProfile
            data={{
              show: this.props.showProfile1,
              cbResult: this.props.showProfile
            }}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // data: store.data
    showUser1: state.addUser.show,
    showProfile1: state.addProfile.show
  };
};

function mapDispatchToProps(dispatch) {
  return {
    showUser: () => dispatch({ type: "showUser" }),
    showProfile: () => dispatch({ type: "showProfile" }),
    // postData: () => dispatch({ postDataProfileAction })
    postData: () => dispatch({ type: "postDataProfile" })
  };
}

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       showUser: {type: "showUser"},
//       showProfile: {type: "showProfile"},
//     },
//     dispatch,
//   );

//   export default connect(
//     select,
//     mapDispatchToProps,
//   )(App);

export default connect(mapStateToProps, mapDispatchToProps)(App);

// в наш компонент App, с помощью connect(mapStateToProps)
// export default connect(mapStateToProps)(App)
