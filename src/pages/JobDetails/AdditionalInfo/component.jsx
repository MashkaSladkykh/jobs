export const AdditionalInfo = ({ type, benefits }) => (
  <>
    <h2 className="details_add">Additional info</h2>
    <div className="details_employment">
      <h4>Employment type</h4>
      {type.map((type) => (
        <span className="details_employment__item" key={type.id}>
          {type.type}
        </span>
      ))}
    </div>
    <div className="details_benefits">
      <h4>Benefits</h4>
      {benefits.map((benefit) => (
        <span className="details_benefits__item" key={benefit.id}>
          {benefit.item}
        </span>
      ))}
    </div>
  </>
);