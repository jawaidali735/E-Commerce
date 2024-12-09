

interface PageHeaderProps {
  heading: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ heading }) => {
  return (
    <div className="w-full h-[200px] sm:h-[250px] md:h-[286px] bg-[#F6F5FF]">
      <div className="p-4 sm:p-6 md:p-8 max-w-[1177px] mx-auto">
        <h1 className="text-[#101750] text-[24px] sm:text-[32px] md:text-[36px] font-bold pt-8 sm:pt-12 md:pt-16">
          {heading}
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
