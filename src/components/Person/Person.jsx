export const Person = ({ person: {
  name,
  age,
  isMarried,
  partnerName,
  sex,
} }) => {
  const partnerStatusName = sex === 'f'
    ? 'husband'
    : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partnerStatusName}`
          : 'I am not married'}
      </p>
    </section>
  );
};
