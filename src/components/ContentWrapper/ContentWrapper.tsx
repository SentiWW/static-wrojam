interface ContentWrapperProps {
  children?: any;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <article className="flex items-center justify-center h-screen bg-[#1d1d1b]">
      {children}
    </article>
  );
};

export default ContentWrapper;
