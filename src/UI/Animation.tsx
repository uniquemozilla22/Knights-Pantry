import { animated, useSpring } from "@react-spring/web";

interface IAnimation {
  children: string | JSX.Element | JSX.Element[] | any;
  delay?: number;
  className?: string;
  reverse?: boolean;
}

export const Fade: React.FC<IAnimation> = ({
  children,
  delay = 0,
  reverse = false,
  ...rest
}) => {
  const [props] = useSpring(() => ({
    from: { opacity: reverse ? 1 : 0 },
    to: { opacity: reverse ? 0 : 1 },
    delay,
  }));
  return (
    <animated.div {...rest} style={props}>
      {children}
    </animated.div>
  );
};

export const Slide: React.FC<IAnimation> = ({
  children,
  delay = 0,
  reverse = false,
  ...rest
}) => {
  const [props] = useSpring(() => ({
    from: { y: reverse ? 100 : -100 },
    to: { y: reverse ? 0 : 0 },
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
