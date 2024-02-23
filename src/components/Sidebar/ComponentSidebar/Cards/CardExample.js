const CardExample = ({
  title,
  description,
  cardheader,
  color,
  primary,
  shadow,
}) => {
  return (
    <>
      <div className={`card mb-4 ${shadow}`}>
        {shadow ? (
          <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
          </div>
        ) : (
          <div className={`card-header ${cardheader}`}>{title}</div>
        )}

        <div className="card-body">{description}</div>
      </div>
    </>
  );
};
export default CardExample;
