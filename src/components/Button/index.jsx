import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.close ? "palevioletred" : "lightblue")};
  border: none;
  color: white;
  border-radius: 5px;
`;

export const NormalButton = () => <Button>X</Button>;
export const CloseButton = () => <Button close>X</Button>;

export default Button;
