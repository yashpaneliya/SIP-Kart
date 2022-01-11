import Modal from "../Modal";
import styled from "styled-components";
import { theme } from "../../styles";
const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Motto = styled.div`
  width: 50%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.color};
  color: white;
  border-radius: 14px 0px 0px 14px;
`;

const AuthInput = styled.div`
  width: 50%;
  padding: 2rem;
  ${({ theme }) => theme.mixins.flexColumn};
  color: #44475b;
`;

const GoogleSignIn = styled.button`
  background-color: ${({ theme }) => theme.background};
  color: #44475b;
  box-shadow: 0px 0px 5px lightgrey;
  border-radius: 5px;
  border: none;
  font-weight: 500;
  padding: 1rem;
  width: 80%;
`;

const Divider = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexBetween};
  margin: 3rem 1rem;
`;

const Line = styled.div`
  width: 30%;
  border-color: rgb(236 237 239);
  border-style: solid;
  border-width: 1px;
  color: rgb(68 71 91);
`;

const EmailInput = styled.input`
  width: 90%;
  border: none;
  outline: none;
  border-bottom: 1px solid lightgrey;
  padding: 0.5rem 0rem;
`;

const Continue = styled.div`
  margin: 2rem auto;
`;

const LoginModal = (props) => {
  return (
    <Modal onHide={props.onHide}>
      <MainDiv>
        <Motto>
          <h1>Simple Investing at your fingertips</h1>
        </Motto>
        <AuthInput>
          <h1>Welcome to SIPKart</h1>
          <GoogleSignIn>Continue with Google</GoogleSignIn>
          <Divider>
            <Line />
            <span>OR</span>
            <Line />
          </Divider>
          <EmailInput placeholder="Email address" />
          <Continue>
            <theme.mixins.Button  primary>
              Continue
            </theme.mixins.Button>
          </Continue>
          <span>By proceeding, I agree to T&C and Privacy Policy</span>
        </AuthInput>
      </MainDiv>
    </Modal>
  );
};

export default LoginModal;
