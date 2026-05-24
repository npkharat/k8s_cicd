import React from "react";
import ContentTile from "./ContentTile";
import ContentTileData from "./ContentTileData";

function ContentCarousel() {
  const scrollLeft = () => {
    const el = document.getElementById("container");
    if (el) el.scrollLeft -= 400;
  };

  const scrollRight = () => {
    const el = document.getElementById("container");
    if (el) el.scrollLeft += 400;
  };

  return (
    <div style={{ marginBottom: 48 }}>
      
      {/* Header */}
      <div
        style={{
          marginLeft: 72,
          marginRight: 72,
          paddingBottom: 16,
          display: "flex",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0 }}>Movies List</h2>
      </div>

      {/* Carousel */}
      <div style={{ display: "flex", alignItems: "center" }}>

        {/* Left Button */}
        <button
          onClick={scrollLeft}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: 20,
          }}
        >
          ◀
        </button>

        {/* List */}
        <ul
          id="container"
          style={{
            display: "flex",
            overflowX: "scroll",
            scrollBehavior: "smooth",
            listStyle: "none",
            padding: 0,
            margin: 0,
            gap: 12,
            width: "100%",
          }}
        >
          {ContentTileData.map((item, index) => (
            <li key={index}>
              <ContentTile poster={item.poster} />
            </li>
          ))}
        </ul>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: 20,
          }}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default ContentCarousel;