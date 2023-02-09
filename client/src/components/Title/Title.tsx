import "./Title.css";

const Title = () => {
  return (
    <div className="title-grid" data-size="4x4">
      <div>
        <strong
          style={{
            borderTop: "2px solid white"
          }}
        >
          T
        </strong>
      </div>
      <div>
        <strong style={{ textDecoration: "line-through" }}>O</strong>
      </div>
      <div>
        <strong
          style={{
            textDecoration: "line-through"
          }}
        >
          R
        </strong>
      </div>
      <div>
        <strong
          style={{
            borderBottom: "2px solid white"
          }}
        >
          N
        </strong>
      </div>
    </div>
  );
};

export default Title;
