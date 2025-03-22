const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "grey",
  borderWidth: 1,
  padding: 20,
};

export const PostComponent = ({ name, subtitle, time, image, description }) => {
  return (
    <div>
      <div style={style}>
        <div style={{ display: "flex" }}>
          <img
            src={image}
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
            }}
          />
          <div style={{ frontSize: 10, marginLeft: 10 }}>
            <b>{name}</b>
            <div>{subtitle}</div>
            {time !== undefined ? (
              <div style={{ display: "flex" }}>
                <div>{time}</div>
                <img
                  src="https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="
                  style={{ width: 20, height: 20 }}
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div style={{ frontSize: 12 }}>{description}</div>
      </div>
      <br />
    </div>
  );
};
