import React, { Component } from "react";
import CollectionOverview from "../../components/collection.overview/collection.overview.component";
import Collection from "../../components/collection/collection.component";
import "./shop.style.scss";
import { Route } from "react-router-dom";
import {
  firestore,
  converCollectionSnapshotToMap
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.action";
import { connect } from "react-redux";
import WithSpinner from "../../components/with.spinner/with.spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends Component {
  state = {
    loading: true
  };
  unsubscribeToSnapshot = {};

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      const collectionObj = await converCollectionSnapshotToMap(snapshot);
      updateCollections(collectionObj);
      this.setState({
        loading: false
      });
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="ShopCollection container">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner
              {...props}
              isLoading={this.state.loading}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionWithSpinner {...props} isLoading={this.state.loading} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(Shop);
