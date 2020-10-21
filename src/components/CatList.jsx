import React from "react";
import { connect } from "react-redux";
import CatDetail from "./CatDetail";

const CatList = ({ cats }) => {
  const catsinList = Object.keys(cats);

  return (
    <ul>
      {catsinList.map((catId, index) => {
        return (
          <CatDetail
            key={`cat-${index}`}
            cat={{
              catId,
              name: cats[catId].name,
              activity: cats[catId].activity,
            }}
          />
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  const { cats } = state;
  return cats;
};

export default connect(mapStateToProps)(CatList);