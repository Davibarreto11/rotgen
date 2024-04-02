interface SectionProps {
  children: any;
  level: "about" | "responsabilities" | "contacts";
}

const Section: React.FC<SectionProps> = ({ children, level }) => {
  return (
    <div
      id={level}
      className={`flex justify-center ${
        level === "responsabilities" ? "bg-[#81b398]" : ""
      }`}
      style={{ minHeight: "100vh" }}
    >
      <div className="flex" style={{ width: "80%" }}>
        {children}
      </div>
    </div>
  );
};

export default Section;
