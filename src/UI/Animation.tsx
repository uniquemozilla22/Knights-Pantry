import { animated, useSpring } from "@react-spring/web";

interface IAnimation {
  children: string | JSX.Element | JSX.Element[];
  delay?: number;
}

export const Fade: React.FC<IAnimation> = ({
  children,
  delay = 0,
  ...rest
}) => {
  const [props] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay,
  }));
  return (
    <animated.div {...rest} style={props}>
      {children}
    </animated.div>
  );
};

export const Slide: React.FC<IAnimation> = ({ children, delay, ...rest }) => {
  const [props] = useSpring(() => ({
    from: { y: -100 },
    to: { y: 0 },
    delay,
  }));
  return (
    <animated.div style={props} {...rest}>
      {children}
    </animated.div>
  );
};

export const Popup: React.FC<IAnimation> = ({ children, delay, ...rest }) => {
  const props = useSpring({
    boxShadow: `0px 0px 0px 10px #623594`,
    display: "flex",
    from: {
      boxShadow: `0px 0px 20px 10px #62359450`,
    },
    config: {
      velocity: 5,
    },
    delay,
  });

  return (
    <animated.div style={props} {...rest}>
      {children}
    </animated.div>
  );
};
