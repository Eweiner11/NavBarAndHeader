import React from 'react';

function BackButton({goBack}) {
  return (
    <div
      className=" hover-accent go-back-btn bottom-border flex-center hover-accent"
      onClick={goBack}
    >
      <h4 className="back-arrow">{"<"}</h4>
      <h4>GO BACK</h4>
    </div>
  ) };


export default BackButton;
