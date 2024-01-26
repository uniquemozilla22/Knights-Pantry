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
