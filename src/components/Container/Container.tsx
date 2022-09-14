interface ContainerProps {
  children?: any;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="h-screen w-screen">{children}</div>;
};

export default Container;
