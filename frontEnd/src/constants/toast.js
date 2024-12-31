import Toast, { ErrorToast, SuccessToast } from "react-native-toast-message";

const toastConfig = {
  success: (props) => (
    <SuccessToast
      {...props}
      text1Style={{ fontSize: 15, fontWeight: "400" }}
      text2Style={{ fontSize: 13 }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: "#0C7489" }}
      text1Style={{ fontSize: 15, fontWeight: "400" }}
      text2Style={{ fontSize: 13 }}
    />
  ),
};

const showSuccessToast = () => {
  Toast.show({
    type: "success",
    text1: "Tudo certo!",
    text2: "Alterações completas com sucesso.",
    topOffset: 50,
    visibilityTime: 1500,
  });
};
const showErrorToast = () => {
  Toast.show({
    type: "error",
    text1: "Ops! Algo deu errado.",
    text2: "Por favor, tente novamente.",
    topOffset: 50,
    visibilityTime: 2500,
  });
};
const SameErrorToast = () => {
  Toast.show({
    type: "error",
    text1: "Ação cancelada.",
    text2: "Por favor altere algum dos campos!",
    topOffset: 50,
    visibilityTime: 2500,
  });
};
const blankErrorToast = (text1, text2) => {
  Toast.show({
    type: "error",
    text1: text1,
    text2: text2,
    topOffset: 50,
    visibilityTime: 2500,
  });
};
const blankSuccessToast = (text1, text2) => {
  Toast.show({
    type: "success",
    text1: text1,
    text2: text2,
    topOffset: 50,
    visibilityTime: 1500,
  });
};
export default {
  toastConfig,
  showSuccessToast,
  showErrorToast,
  SameErrorToast,
  blankErrorToast,
  blankSuccessToast,
};
