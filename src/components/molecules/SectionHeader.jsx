import PageTitle from "../atoms/PageTitle";
import PageSubtitle from "../atoms/PageSubtitle";

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-header">
      <PageTitle>{title}</PageTitle>
      <PageSubtitle>{subtitle}</PageSubtitle>
    </div>
  );
}
