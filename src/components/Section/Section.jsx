const Section = ({ title, children }) => {
  return (
    <section
      style={{
        margin: 8,
      }}
    >
      <h1>{title}</h1>
      {children}
    </section>
  );
};
export default Section;
